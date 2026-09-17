const huaweiCases = {
  'huawei-health': {
    summary: 'Exploring health-monitoring functions as part of the everyday smartphone experience.',
    role: 'Health-function interaction design', status: 'Pre-development',
    sections: [
      ['Context', 'Healthcare in everyday devices', 'As part of Huawei’s broader health initiative, the project explored compact, intelligent devices that bring health monitoring into daily life. Blood-oxygen and blood-pressure measurement were proposed for next-generation smartphones.'],
      ['Use scenarios', 'Work, home and travel', 'The intended experience enabled people to access health information across workplace, home and outdoor travel settings. These scenarios framed the context for the proposed health functions.'],
      ['My contribution', 'Health-function HMI', 'I contributed to the human–machine interaction design of the health functions. The project remains described at this level in my archive because the development details are confidential.']
    ],
    reflection: 'Reflecting on the project, I began to consider how digital health metrics carry meanings beyond physiological measurement. In my view, health features can also signal premium-device ownership, while wellbeing applications give health an increasingly social dimension. This is a personal reflection arising from the work.',
    note: 'Pre-development project. Detailed interaction flows and unreleased product material are not included in the original account.'
  },
  'huawei-p70': {
    summary: 'Comparing camera-module directions to reconcile imaging requirements with visual and tactile experience.',
    role: 'Industrial design · Concept comparison', status: 'Mass manufacturing, as recorded in the project archive',
    images: [['p70-1-cutout','Product image included in the original P-70 project account.']],
    sections: [
      ['Engineering brief', 'A larger sensor, a taller module', 'The engineering brief proposed a one-inch CMOS sensor to capture more light. The archive describes an approximately 7 mm camera elevation, creating a design problem around visual abruptness and the transition felt by the hand.'],
      ['A/B comparison', 'Two approaches to the camera elevation', 'I compared direct lifting, using color separation to reduce the apparent abruptness, with a telescopic-lift direction. The comparison explored differences in user experience; the original account identifies the telescopic direction as the production proposal.'],
      ['My contribution', 'Making the experience trade-offs visible', 'My contribution focused on comparing how the two alternatives affected user experience. Choosing a direction required balancing the design proposal with engineering stability and the priorities of multiple stakeholders.']
    ],
    reflection: 'Stacked products made the interdependence of industrial design and engineering tangible. A design proposal helps different departments compare experience and technical requirements, while the final choice is a shared decision.',
    note: 'The product image comes from the Notion account. Internal development material remains confidential.'
  },
  'huawei-digital-power': {
    summary: 'A platform approach to family identity across solar, energy storage and charging products.',
    role: 'Product feature-window design', status: 'Mass manufacturing, as recorded in the project archive',
    images: [['digital-power-1-cutout','Smart String Energy Storage System'],['digital-power-2-cutout','System context: Smart Energy Controller, storage, solar and household loads.']],
    sections: [
      ['Business context', 'From separate equipment to a coherent system', 'Solar, energy-storage and charging solutions often combine equipment from different suppliers. The initiative sought to support Huawei’s photovoltaic and storage business through a unified, recognizable product platform.'],
      ['Design goal', 'A configurable model room', 'The platform-based model room would let dealers select and combine technical solutions suited to their business while retaining a consistent brand identity.'],
      ['Design strategy', 'Three levels of differentiation', 'The strategy offered three levels: changes to appearance and structural components; CMF differentiation; and product feature-window design. Stakeholder needs, available budget and brand character informed which level to select.'],
      ['My contribution', 'The product feature window', 'Within this broader platform strategy, I contributed product feature-window design. The original account names the Smart String Energy Storage System and also presents the Smart Energy Controller.']
    ],
    reflection: 'The project introduced me to the business logic of energy systems and the role of industrial design in a B2B-to-B2C transition. Design strategy responded to portfolio and business needs as well as the appearance and use of an individual device.'
  },
  'huawei-power-bank': {
    summary: 'Defining a premium portable charger around business travel, fast charging and a technological visual identity.',
    role: 'Lead designer', status: 'Mass manufacturing, as recorded in the project archive',
    images: [['power-bank-1-cutout','Power-bank product image from the original project account.']],
    sections: [
      ['Product positioning', 'Portable power for business travel', 'The brief targeted a premium consumer power bank, initially envisaged around RMB 1,000, offering multiple fast-charging options for business travelers. Huawei SuperCharge and a distinctly futuristic appearance were central to the positioning.'],
      ['My contribution', 'Product definition and three concepts', 'As lead designer, I established product specifications and contributed three conceptual solutions. Development proceeded through iteration on the previous generation of comparable Huawei products.'],
      ['Development outcome', 'Balancing ambition with implementation', 'The original account records compromises to technical specifications for commercial reasons during implementation. It describes the resulting product as filling a business-travel gap in Huawei’s portable charging portfolio and entering mass manufacturing.']
    ],
    reflection: 'In a mature charging category, industrial design communicates market positioning, user experience and brand value. The work highlighted the relationship between the initial product ambition and the commercial choices made during implementation.'
  },
  'huawei-trifold': {
    summary: 'Second-generation tri-fold development focused on ergonomics, light-office scenarios and stylus use.',
    role: 'Industrial design · Ergonomics and accessories', status: 'Second-generation pre-development',
    images: [['trifold-1-cutout','Tri-fold product context image from Notion; not presented as my second-generation design output.']],
    sections: [
      ['Product context', 'A new direction for foldable devices', 'The project account frames tri-fold development as a response to increasing competition in foldable smartphones. The first-generation design addressed the relationship between screen proportions and software adaptation; my contribution concerned second-generation development.'],
      ['My contribution', 'Dimensions, folding and work scenarios', 'I participated in defining ergonomic dimensions, exploring thinner and lighter proportions and different folding orientations. My responsibilities also included a stylus for work scenarios and the design of phone components.'],
      ['Design direction', 'A light-office business device', 'The second-generation direction sought comfortable handling and use across multiple settings. A stylus would extend the large-screen experience to writing and work tasks.'],
      ['Evaluation', 'Expert review of use and handling', 'The account describes qualitative evaluation by experts from different departments and comparison among internal design teams. Questions included folding and use modes, grip and weight, whether the folding sequence communicates operation, and whether button placement supports understandable use.']
    ],
    reflection: 'Working with emerging hardware showed me how industrial design operates within long development cycles and cross-department review. Form, handling, interface and operation have to be considered together when familiar market precedents are limited.',
    note: 'The displayed image provides product context. The second-generation development details remain confidential.'
  },
  'huawei-wireless-charge': {
    summary: 'Wireless charging · Product image from my Huawei project archive.',
    role: 'Not yet documented in the source', status: 'Visual project record',
    images: [['wireless-charge-1-cutout','Wireless-charging image from the original Notion page.']],
    sections: [],
    note: 'The original page currently contains an image and an unfinished introduction. The project brief, individual contribution and development process will be added when the account is complete.'
  }
};

function huaweiMarkup(item, nextItem) {
  const entry = huaweiCases[item.slug];
  const media = (entry.images || []).map(([name, caption]) => `<figure><a href="assets/projects/huawei/${name}.png" target="_blank" rel="noreferrer"><img src="assets/projects/huawei/${name}.png" alt="${caption}" loading="lazy"></a><figcaption>${caption}</figcaption></figure>`).join('');
  return `<article class="hw-case">
    <header class="hw-hero"><p class="eyebrow">HUAWEI / Professional practice</p><h1>${item.title}</h1><p>${entry.summary}</p></header>
    <section class="hw-meta" aria-label="Project information"><div><span>My role</span><p>${entry.role}</p></div><div><span>Project stage</span><p>${entry.status}</p></div></section>
    ${media ? `<section class="hw-media" aria-label="Project imagery">${media}</section>` : ''}
    ${entry.note ? `<p class="hw-note">${entry.note}</p>` : ''}
    <div class="hw-sections">${entry.sections.map(([label,title,copy],i)=>`<section class="hw-section"><div><span>${String(i+1).padStart(2,'0')} / ${label}</span><h2>${title}</h2></div><p>${copy}</p></section>`).join('')}</div>
    ${entry.reflection ? `<section class="hw-section hw-reflection"><div><span>Reflection</span><h2>What I learned.</h2></div><p>${entry.reflection}</p></section>` : ''}
    <section class="source-section"><p>Project account and images from Chang Su’s Notion portfolio.</p><a href="${item.source}" target="_blank" rel="noreferrer">View original Notion account ↗</a></section>
    <a class="next-project" href="project.html?project=${nextItem.slug}"><span>Next project</span><strong>${nextItem.title}</strong><i>→</i></a>
  </article>`;
}
