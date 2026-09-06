const params = new URLSearchParams(window.location.search);
const requestedSlug = params.get('project');
const projects = window.PROJECTS || [];
const projectIndex = Math.max(0, projects.findIndex((item) => item.slug === requestedSlug));
const project = projects[projectIndex] || projects[0];
const main = document.querySelector('#case-study');

function abstractVisual(type, title) {
  return `<div class="abstract-visual visual-${type}" role="img" aria-label="Abstract diagram representing ${title}">
    <span class="shape shape-a"></span><span class="shape shape-b"></span><span class="shape shape-c"></span>
    <span class="visual-label">${title}</span>
  </div>`;
}

function galleryMarkup(items = [], sectionNumber = '02') {
  if (!items.length) return '';
  return `<section class="gallery-section" aria-labelledby="process-images">
    <div class="section-index">${sectionNumber} / Process evidence</div>
    <h2 id="process-images">Making the inquiry visible.</h2>
    <div class="gallery-grid">
      ${items.map(([src, caption], index) => `<figure class="gallery-item item-${index + 1}"><img src="${src}" alt="${caption}" loading="lazy"><figcaption><span>0${index + 1}</span>${caption}</figcaption></figure>`).join('')}
    </div>
  </section>`;
}

function thesisMediaMarkup(item) {
  if (!item.thesisBook || !item.film) return '';
  return `<section class="thesis-media-section" aria-labelledby="thesis-media-title">
    <div class="section-index">02 / Thesis archive</div>
    <div class="thesis-media-heading">
      <h2 id="thesis-media-title">Read the book.<br>Watch the film.</h2>
      <p>The written thesis and project film bring the research, experiments, and final proposition together in their original formats.</p>
    </div>
    <div class="thesis-media-grid">
      <a class="thesis-book" href="${item.thesisBook.file}" target="_blank" rel="noreferrer">
        <figure><img src="${item.thesisBook.cover}" alt="Cover of the Bee Line MFA thesis book"></figure>
        <div><span>Thesis book · ${item.thesisBook.pages} pages · PDF</span><strong>Open the complete book ↗</strong></div>
      </a>
      <div class="thesis-film">
        <video controls playsinline preload="metadata" aria-label="Who Is Our Navigation thesis film">
          <source src="${item.film.file}" type="video/mp4">
          Your browser does not support embedded video.
        </video>
        <div><span>Project film · ${item.film.duration} · HD</span><strong>Who Is Our Navigation?</strong></div>
      </div>
    </div>
  </section>`;
}

function speculativeFoodMarkup(item, nextItem) {
  const chapters = item.chapters || [];
  const chapterMarkup = chapters.map((chapter) => {
    if (chapter.type === 'research') {
      const comparison = (chapter.comparison || []).map((entry) => `
        <figure class="food-research-process">
          <img src="${entry.image}" alt="${entry.alt}" loading="lazy">
          <figcaption><span>${entry.label}</span><p>${entry.caption}</p></figcaption>
        </figure>`).join('');
      const findings = (chapter.findings || []).map((entry) => `
        <article class="food-research-finding${entry.wide ? ' is-wide' : ''}">
          <figure><img src="${entry.image}" alt="${entry.alt}" loading="lazy"></figure>
          <div>
            <span>${entry.number} / ${entry.label}</span>
            <strong>${entry.stat}</strong>
            <h3>${entry.title}</h3>
            <p>${entry.caption}</p>
          </div>
        </article>`).join('');
      const outputMockups = (chapter.designOutput?.mockups || []).map((entry) => `
        <figure class="food-output-mockup${entry.detail ? ' is-detail' : ''}">
          <img src="${entry.image}" alt="${entry.alt}" loading="lazy">
          <figcaption><span>${entry.label}</span><p>${entry.caption}</p></figcaption>
        </figure>`).join('');
      const designOutput = chapter.designOutput ? `
        <section class="food-research-output">
          <header>
            <p>${chapter.designOutput.label}</p>
            <div><h3>${chapter.designOutput.title}</h3><span>${chapter.designOutput.copy}</span></div>
          </header>
          <figure class="food-output-board">
            <img src="${chapter.designOutput.image}" alt="${chapter.designOutput.alt}" loading="lazy">
            <figcaption>${chapter.designOutput.caption}</figcaption>
          </figure>
          <div class="food-output-mockups">${outputMockups}</div>
          <div class="food-output-explanation">
            ${chapter.designOutput.explanation.map((entry) => `<article><span>${entry.label}</span><h4>${entry.title}</h4><p>${entry.copy}</p></article>`).join('')}
          </div>
        </section>` : '';
      return `<section class="food-chapter food-research" id="${chapter.id}">
        <header class="food-chapter-heading">
          <p>${chapter.label}</p>
          <div><h2>${chapter.title}</h2><span>${chapter.copy}</span></div>
        </header>
        <div class="food-research-comparison">${comparison}</div>
        <div class="food-research-intro">
          <p>${chapter.findingsLabel}</p>
          <h3>${chapter.findingsTitle}</h3>
        </div>
        <div class="food-research-findings">${findings}</div>
        ${designOutput}
      </section>`;
    }
    const images = chapter.images || [];
    const gallery = images.map((image, index) => {
      const entry = typeof image === 'string' ? { src: image } : image;
      const isWide = entry.wide ?? (index % 3 === 0 || (index === images.length - 1 && images.length % 3 === 2));
      const sources = entry.sources || [];
      const media = sources.length
        ? `<div class="food-process-cluster cluster-${sources.length}${entry.fit === 'contain' ? ' is-contain' : ''}">${sources.map((source, sourceIndex) => {
            const item = typeof source === 'string' ? { src: source } : source;
            return `<img src="${item.src}" alt="${item.alt || `${chapter.imageAlt} ${index + 1}.${sourceIndex + 1}`}" loading="lazy">`;
          }).join('')}</div>`
        : `<img src="${entry.src}" alt="${entry.alt || `${chapter.imageAlt} ${index + 1}`}" loading="lazy">`;
      const caption = entry.caption
        ? `<figcaption><span>${entry.label || String(index + 1).padStart(2, '0')}</span><p>${entry.caption}</p></figcaption>`
        : '';
      return `<figure class="food-process-image${isWide ? ' is-wide' : ''}${entry.featured ? ' is-featured' : ''}${entry.layout ? ` is-${entry.layout}` : ''}">${media}${caption}</figure>`;
    }).join('');
    return `<section class="food-chapter chapter-${chapter.id}" id="${chapter.id}">
      <header class="food-chapter-heading">
        <p>${chapter.label}</p>
        <div><h2>${chapter.title}</h2><span>${chapter.copy}</span></div>
      </header>
      <div class="food-process-grid">${gallery}</div>
    </section>`;
  }).join('');

  return `<article class="speculative-food">
    <section class="food-hero">
      <img src="${item.cover}" alt="Tofu-making process used in Eating the Future">
      <div class="food-hero-shade"></div>
      <div class="food-hero-copy">
        <p>${item.kicker}</p>
        <h1>${item.title}</h1>
        <span>${item.summary}</span>
      </div>
      <div class="food-hero-meta"><span>${item.role}</span><span>${item.year}</span></div>
    </section>

    <nav class="food-nav" aria-label="Eating the Future chapters">
      ${chapters.map((chapter) => `<a href="#${chapter.id}">${chapter.navLabel || chapter.label}</a>`).join('')}
    </nav>

    ${chapterMarkup}

    <section class="source-section food-source">
      <p>Process material selected from Chang Su’s CCA project archive.</p>
      <a href="${item.source}" target="_blank" rel="noreferrer">View original Notion archive ↗</a>
    </section>

    <a class="next-project" href="project.html?project=${nextItem.slug}">
      <span>Next project</span><strong>${nextItem.title}</strong><i>→</i>
    </a>
  </article>`;
}

function notionArchiveMarkup(item, nextItem) {
  const groups = item.archiveGroups || [];
  const imageMarkup = groups.map(([start, end], groupIndex) => {
    const images = Array.from({ length: end - start + 1 }, (_, index) => start + index);
    return `<div class="archive-group" data-group="${groupIndex + 1}">
      ${images.map((imageNumber) => {
        const number = String(imageNumber).padStart(2, '0');
        return `<figure class="archive-image"><img src="assets/projects/assemblies/notion/assembly-${number}.jpg" alt="Industrial design portfolio spread ${imageNumber}" loading="lazy"></figure>`;
      }).join('')}
    </div>`;
  }).join('');

  return `<article class="notion-archive">
    <section class="archive-intro">
      <p class="eyebrow">${item.kicker}</p>
      <h1>${item.title}</h1>
      <div class="archive-intro-copy">
        <p>${item.summary}</p>
        <div class="archive-meta"><span>${item.role}</span><span>${item.year}</span></div>
      </div>
    </section>

    <section class="archive-stream" aria-label="Industrial design portfolio archive">
      ${imageMarkup}
    </section>

    <section class="source-section">
      <p>Images and sequence follow Chang Su’s Notion portfolio archive.</p>
      <a href="${item.source}" target="_blank" rel="noreferrer">View original Notion archive ↗</a>
    </section>

    <a class="next-project" href="project.html?project=${nextItem.slug}">
      <span>Next project</span><strong>${nextItem.title}</strong><i>→</i>
    </a>
  </article>`;
}

if (!project) {
  main.innerHTML = '<section class="not-found"><h1>Project not found.</h1><a href="index.html#work">Return to all projects</a></section>';
} else {
  document.title = `${project.title} — Chang Su`;
  document.documentElement.dataset.theme = project.theme;
  const nextProject = projects[(projectIndex + 1) % projects.length];
  if (project.layout === 'speculative-food') {
    main.innerHTML = speculativeFoodMarkup(project, nextProject);
  } else if (project.layout === 'notion-archive') {
    main.innerHTML = notionArchiveMarkup(project, nextProject);
  } else {
  const heroVisual = project.cover
    ? `<figure class="hero-media${project.coverFit === 'contain' ? ' media-contain' : ''}"><img src="${project.cover}" alt="Cover image for ${project.title}"></figure>`
    : abstractVisual(project.visual, project.title);

  main.innerHTML = `
    <article>
      <section class="case-hero">
        <div class="case-title">
          <p class="eyebrow">${project.kicker}</p>
          <h1>${project.title}</h1>
          <p class="case-summary">${project.summary}</p>
        </div>
        ${heroVisual}
      </section>

      <section class="case-facts" aria-label="Project information">
        <div><span>Role</span><p>${project.role}</p></div>
        <div><span>Context</span><p>${project.status}</p></div>
        <div><span>Period</span><p>${project.year}</p></div>
        <div><span>Fields</span><p>${project.disciplines.join('<br>')}</p></div>
      </section>

      ${project.confidential ? `<aside class="confidential-note"><span>Confidentiality note</span><p>Only approved, non-sensitive information is shown. Abstract graphics indicate the design territory without reproducing unreleased product imagery.</p></aside>` : ''}

      <section class="question-section">
        <div class="section-index">01 / Framing</div>
        <blockquote>${project.question}</blockquote>
      </section>

      <section class="narrative-grid">
        <div class="narrative-heading"><p class="eyebrow">From context to consequence</p><h2>Design decisions, not just outcomes.</h2></div>
        <div class="narrative-body">
          <section><span>Challenge</span><p>${project.challenge}</p></section>
          <section><span>Approach</span><p>${project.approach}</p></section>
          <section><span>My contribution</span><p>${project.contribution}</p></section>
        </div>
      </section>

      ${thesisMediaMarkup(project)}

      ${galleryMarkup(project.gallery, project.thesisBook ? '03' : '02')}

      <section class="result-section">
        <div><span>Outcome</span><p>${project.outcome}</p></div>
        <div class="reflection"><span>Reflection</span><p>${project.reflection}</p></div>
      </section>

      <section class="source-section">
        <p>Project material is summarized from Chang Su’s portfolio archive.</p>
        <a href="${project.source}" target="_blank" rel="noreferrer">View original Notion archive ↗</a>
      </section>

      <a class="next-project" href="project.html?project=${nextProject.slug}">
        <span>Next project</span><strong>${nextProject.title}</strong><i>→</i>
      </a>
    </article>`;
  }
}

document.querySelector('#year').textContent = new Date().getFullYear();
