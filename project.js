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

function galleryMarkup(items = []) {
  if (!items.length) return '';
  return `<section class="gallery-section" aria-labelledby="process-images">
    <div class="section-index">02 / Process evidence</div>
    <h2 id="process-images">Making the inquiry visible.</h2>
    <div class="gallery-grid">
      ${items.map(([src, caption], index) => `<figure class="gallery-item item-${index + 1}"><img src="${src}" alt="${caption}" loading="lazy"><figcaption><span>0${index + 1}</span>${caption}</figcaption></figure>`).join('')}
    </div>
  </section>`;
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
  if (project.layout === 'notion-archive') {
    main.innerHTML = notionArchiveMarkup(project, nextProject);
  } else {
  const heroVisual = project.cover
    ? `<figure class="hero-media"><img src="${project.cover}" alt="Cover image for ${project.title}"></figure>`
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

      ${galleryMarkup(project.gallery)}

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
