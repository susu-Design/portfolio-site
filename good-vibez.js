function goodVibezMarkup(item, nextItem) {
  const root = 'assets/projects/good-vibez/';
  const captions = {
    'dimensions-overview':'Experience dimensions', 'dimensions-objects':'Objects', 'dimensions-place':'Places', 'dimensions-people':'People',
    'storyboard-self-service':'', 'storyboard-speakeasy':'', 'prototype-speakeasy':'', 'prototype-color':'',
    'workshop-model':'Model building', 'workshop-discussion':'Team discussion', 'workshop-testing':'Prototype review',
    'pilot-layout':'Space and service layout', 'pilot-arrival':'Inviting visitors', 'pilot-display':'Product stand-ins', 'pilot-bar':'Welcome drinks',
    'pilot-flyer-front':'Feedback flyer', 'pilot-flyer-back':'Events and membership', 'pilot-pos':'Simulated checkout',
    'pilot-guide-a':'Guide introduction', 'pilot-guide-b':'Sign lookup', 'pilot-guide-c':'Product lookup',
    'pop-up-entry':'Arrival', 'pop-up-team':'Team Good Vibez', 'pop-up-display':'Guided discovery',
    'welcome-card':'Welcome card', 'zodiac-wheel':'Conversation game', 'name-chang':'Checkout role',
    'guide-cover':'Take-home guide', 'guide-products':'Product information', 'guide-membership':'Membership and events',
    'card-aries-front':'Aries / front', 'card-aries-back':'Aries / reverse', 'card-taurus-front':'Taurus / front', 'card-taurus-back':'Taurus / reverse',
    'event-sign':'Event identity', 'bar-sign':'Bar sign', 'product-sign':'Display sign', 'shirt-front':'Team shirt / front', 'shirt-back':'Team shirt / back', 'printed-guides':'Printed guides'
  };
  const fig = (name, caption, cls = '') => `<figure class="gv-figure ${cls}"><a href="${root}${name}.jpg" target="_blank" rel="noreferrer" aria-label="Enlarge: ${caption}"><img src="${root}${name}.jpg" alt="${caption}" loading="lazy"></a>${captions[name] ? `<figcaption>${captions[name]}</figcaption>` : ''}</figure>`;
  const gallery = (images, cls = '') => `<div class="gv-gallery ${cls}">${images.map(([n,c]) => fig(n,c)).join('')}</div>`;
  const head = (id, number, title, copy) => `<header class="gv-heading" id="${id}"><span>${number}</span><div><h2>${title}</h2><p>${copy}</p></div></header>`;
  const decision = (title, copy) => `<aside class="gv-decision"><h3>${title}</h3><p>${copy}</p></aside>`;
  const rows = (heads, data, cls = '') => `<p class="gv-table-hint">Swipe sideways to compare the full table.</p><div class="gv-table-wrap ${cls}" role="region" aria-label="${heads.join(' / ')}" tabindex="0"><table><thead><tr>${heads.map(h=>`<th scope="col">${h}</th>`).join('')}</tr></thead><tbody>${data.map(row=>`<tr>${row.map((cell,i)=>i===0?`<th scope="row">${cell}</th>`:`<td>${cell}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
  return `<article class="gv-case">
    <section class="gv-hero">
      <div><p class="gv-label">Service design / Experience design · 2021</p><h1>Good<br>Vibez</h1><p class="gv-subtitle">Connection Through the Stars</p><p class="gv-intro">A research-led pop-up exploring how privacy, personal guidance and playful social rituals can make intimate-product shopping more approachable.</p></div>
      <figure><img src="${root}pop-up-guidance.jpg" alt="A Good Vibez team member guiding a visitor through the product display in the purple-lit pop-up"><figcaption>The final pop-up · Guided discovery in a space built by the team.</figcaption></figure>
    </section>
    <section class="gv-facts" aria-label="Project overview">
      <div><span>Challenge</span><p>How could a shopping experience address embarrassment while supporting curiosity and personal choice?</p></div>
      <div><span>My contribution</span><p>Team research and experience design; checkout, personalized packaging and the closing interaction during the pop-up.</p></div>
      <div><span>Project format</span><p>CCA team project: exploratory research, two spatial prototypes, a micropilot and a final pop-up.</p></div>
    </section>
    <nav class="gv-nav" aria-label="Good Vibez project sections"><a href="#gv-discovery">01 / Research</a><a href="#gv-concepts">02 / Concepts</a><a href="#gv-prototypes">03 / Prototypes</a><a href="#gv-pilot">04 / Micropilot</a><a href="#gv-pop-up">05 / Pop-up</a><a href="#gv-learning">06 / Learning</a></nav>

    <section class="gv-section gv-research">
      ${head('gv-discovery','01 / Research','From situated evidence to service criteria','This exploratory, qualitative-led study treated intimate-product shopping as an end-to-end service rather than a shelf-level purchase. We combined contextual comparison, a scoping questionnaire and five guided interviews, then translated recurring patterns and differences into experience criteria.')}
      <div class="gv-research-position">
        <article><span>Research stance</span><h3>Explore before defining</h3><p>We began with hypotheses about stigma, everyday ritual and cultural influence, but used field and participant evidence to revise the problem rather than confirm an assumed solution.</p></article>
        <article><span>Service-design lens</span><h3>Study the connected system</h3><p>People, staff behavior, spatial thresholds, information, objects and follow-up were examined as interdependent touchpoints—not as separate design problems.</p></article>
        <article><span>Experience-design lens</span><h3>Follow the participant over time</h3><p>The unit of analysis extended from deciding whether to visit through arrival, exploration, purchase and return, making transitions and emotional conditions visible.</p></article>
      </div>

      <div class="gv-subhead"><h3>Why these methods</h3><p>Each method answered a different question. Their value came from triangulation: comparing what the retail environment made possible, what participants said, and how the team interpreted patterns.</p></div>
      <div class="gv-methods gv-method-ledger">
        <article><span>01 / Context</span><h3>Comparative retail observation</h3><p><strong>Method.</strong> Visits to San Francisco stores documented business models, service strategies and the sequence of a visit.</p><p><strong>Why.</strong> The environment and staff interactions reveal frontstage conditions that interview recall alone can miss.</p><p><strong>Decision.</strong> Treat the invitation, entrance and choice of assistance as part of privacy—not merely the interior layout.</p></article>
        <article><span>02 / Breadth</span><h3>Cross-cultural scoping</h3><p><strong>Method.</strong> An exploratory questionnaire asked how attitudes might vary with participants’ cultural backgrounds.</p><p><strong>Why.</strong> It challenged the assumption that embarrassment, openness and preferred social contact have one shared meaning.</p><p><strong>Decision.</strong> Avoid one prescribed journey; preserve choices to browse alone, with a partner or with staff support.</p></article>
        <article><span>03 / Depth</span><h3>Guided qualitative interviews</h3><p><strong>Method.</strong> Five participants recruited through personal networks joined one-hour interviews using a team-developed guide.</p><p><strong>Why.</strong> A sensitive topic required first-person accounts of motivation, discomfort, trust and prior shopping experiences.</p><p><strong>Decision.</strong> Prioritize discretion, useful information, non-pressured guidance and a credible reason to visit in person.</p></article>
        <article><span>04 / Analysis</span><h3>Cross-case synthesis</h3><p><strong>Method.</strong> Researchers recorded patterns and outliers individually, then compared them as a team through dimension mapping.</p><p><strong>Why.</strong> Looking across cases retained disagreement while converting qualitative material into explicit design criteria.</p><p><strong>Decision.</strong> Make privacy a condition across the journey, while testing social interaction as optional rather than compulsory.</p></article>
      </div>
      <div class="gv-method-boundary"><span>Scope of claims</span><p>The five interviews were an exploratory convenience sample: ages 24–31, three women and two men, with Latino, Asian and Caucasian backgrounds. They generated directions for design and testing; they do not represent demographic groups. The questionnaire and store visits are documented in the project archive, but their raw records are not available here, so no statistical claims are made.</p></div>

      <div class="gv-subhead"><h3>Making the design space discussable</h3><p>Dimension mapping externalized early assumptions about people, places and objects. Revising the axes made it possible to see privacy as a relational condition spanning the whole service.</p></div>
      ${gallery([['dimensions-overview','Initial inventory of the people, activities and relationships around shopping.'],['dimensions-objects','Object dimensions: discreet / obvious and intimate / BDSM.'],['dimensions-place','Place dimensions, including public / private and visiting alone / with company.'],['dimensions-people','People dimensions, including confidence, experience and familiarity.']], 'gv-four gv-boards')}
      ${rows(['Initial assumption','Reframed dimensions','Research criterion'],[['Shy / confident<br>Intimate / BDSM','Reality / fantasy<br>Familiar / adventurous','Privacy must be supported before, during and after the visit.']])}
      <div class="gv-subhead"><h3>How evidence changed the brief</h3><p>Interview material was not presented as a list of opinions. Each pattern was interpreted for its consequence across the service.</p></div>
      <blockquote class="gv-quote">“Everytime I double check no one’s watching before walking in.”<cite>Anonymous discovery interview excerpt · Process deck, p. 19</cite></blockquote>
      ${rows(['Evidence pattern','Interpretation','Design decision'],[
        ['Participants checked whether anyone was watching before entry.','Privacy begins at the threshold, before a customer reaches a product.','Design the invitation and arrival as deliberately as the room inside.'],
        ['Online stores offered information, reviews and control.','A physical store must provide value beyond access to merchandise.','Combine trustworthy guidance with an experience worth leaving home for.'],
        ['A party-like store visit was recalled as normalizing and low-anxiety.','Sociality can reduce discomfort when it is invitational rather than required.','Prototype optional conversation and guided discovery alongside independent browsing.'],
        ['Purchases were occasional, while discovery also happened through Instagram.','The relationship begins before a visit and can continue between purchases.','Explore events, membership and digital follow-up as an extended service.'],
        ['Participants differed in whether they shopped alone, with partners or with assistance.','A single scripted mode would reproduce assumptions about confidence and intimacy.','Let visitors control disclosure, company and the level of staff involvement.']
      ])}
      ${decision('First design question','How might we create a personal and intimate space for customers to explore their sexual desires?')}
      <div class="gv-subhead gv-5e-intro"><h3>From research criteria to the 5E journey</h3><p>The 5E framework was used after discovery as an experience-mapping scaffold—not as a data-collection method. It kept the design focused on the participant’s full journey and exposed where different service touchpoints had to work together.</p></div>
      <ol class="gv-5e-model">
        <li><span>01</span><strong>Entice</strong><p>Set expectations before the visit.</p></li>
        <li><span>02</span><strong>Enter</strong><p>Make the threshold legible and safe.</p></li>
        <li><span>03</span><strong>Engage</strong><p>Support exploration, choice and interaction.</p></li>
        <li><span>04</span><strong>Exit</strong><p>Close the visit with discretion and care.</p></li>
        <li><span>05</span><strong>Extend</strong><p>Continue learning and connection afterward.</p></li>
      </ol>
    </section>

    <section class="gv-section">
      ${head('gv-concepts','02 / Concepts','Two ways to make shopping feel safer','The team compared self-service shopping with a private social experience through storyboards and participant feedback.')}
      <div class="gv-concepts">
        <article>${fig('storyboard-self-service','Self-service concept · Original complete storyboard.')}<h3>Self-service shopping</h3><p>Online preparation and independent browsing offered control, but feedback questioned why someone would visit a store if the same purchase could happen online.</p></article>
        <article>${fig('storyboard-speakeasy','Private speakeasy concept · Original complete storyboard.')}<h3>A private speakeasy</h3><p>A hosted event added novelty and community, but invitations, masks and secrecy could also make an ordinary purchase feel more taboo.</p></article>
      </div>
      ${decision('Decision: test the social experience','The team initially chose the speakeasy because feedback valued guided discovery, privacy and meeting like-minded people. The tension between protection and unnecessary secrecy remained open for the next round.')}
      <p class="gv-inline"><strong>Keep participation optional.</strong> Feedback favored immediate access and a reason to visit, but challenged appointments, compulsory conversation, extra event fees and secrecy that could reinforce shame.</p>
    </section>

    <section class="gv-section">
      ${head('gv-prototypes','03 / Prototypes','Testing the whole journey at model scale','Two spatial models made arrival, discovery and purchase concrete enough to discuss, compare and revise.')}
      <p class="gv-persona"><strong>Scenario persona: Cindy.</strong> A recently divorced single mother and tech executive in Los Angeles, imagined seeking confidence, anonymous exploration and opportunities to meet people. Cindy is a design persona, not a reported test result.</p>
      <div class="gv-prototype-pair">
        <article>${fig('prototype-speakeasy','Version 1 · Physical speakeasy model.')}<h3>Private Speakeasy</h3><p>A mailed invitation, mask and golden key choreograph a discreet visit with optional conversation.</p></article>
        <article>${fig('prototype-color','Version 2 · Physical model for Emotion Through Color.')}<h3>Emotion Through Color</h3><p>A proposed mood bracelet links the welcome, drinks and product discovery through color.</p></article>
      </div>
      ${rows(['Journey moment','Version 1: private speakeasy','Version 2: emotion through color'],[
        ['Discover & reserve','Newsletter discovery, event booking and confirmation email.','The same digital invitation and reservation path.'],
        ['Receive an invitation','An unmarked package with instructions, mask and handcuffs.','An unmarked package introduces an app and mood-linked glow bracelet.'],
        ['Arrive & enter','A password and golden key establish permission to enter.','The host also checks the proposed bracelet connection.'],
        ['Orient & socialize','A welcome and code of conduct, then browsing, refreshments and conversation.','Colored wrists and matching drinks provide a conversational cue.'],
        ['Discover & purchase','A mask supports anonymity; the purchase leaves in a discreet bag.','Color links proposed product recommendations to the visitor’s selected mood.'],
        ['Leave & return','A thank-you email and coupon invite another visit.','Follow-up recommendations also use the color theme.']
      ])}
      <p class="gv-note">Walkthrough proposals; digital functions were simulated.</p>
      ${gallery([['workshop-model','Team work on the scale-model experience.'],['workshop-discussion','Comparing the proposed service and interactions.'],['workshop-testing','Reviewing the prototype with others.']], 'gv-three gv-photos')}
      <div class="gv-subhead"><h3>What the feedback challenged</h3></div>
      ${rows(['Feedback','Question carried forward'],[
        ['Visitors need a safe environment and control over assistance','How are conduct, personal space and the choice to browse alone made explicit?'],
        ['The golden key feels welcoming; the bracelet offers a useful signal','Which ritual earns its complexity, and does a visitor need another device?'],
        ['The space needs a clearer mood and a more inclusive offer','How could lighting, product information and staff behavior make the experience approachable?'],
        ['Membership and recurring events could extend the relationship','Could the core service remain an understandable store with events, rather than a secret venue?']
      ])}
      <p class="gv-inline"><strong>Further critique.</strong> Clarify social codes, bracelet interactions and shelf information; use lighting, refreshments and populated model scenes to explain the experience. These remained proposals for development.</p>
      ${decision('Pivot: a store with a membership program','After feedback and discussions with Barry, the team dropped the speakeasy as the core format. Retail remained central, with themed events and membership providing discovery, education and reasons to return.')}
      <p class="gv-reframe"><span class="gv-label">Reframed question</span>How might we create a space that empowers people to explore sexual curiosities through a retail experience?</p>
    </section>

    <section class="gv-section">
      ${head('gv-pilot','04 / Micropilot','Connection Through the Stars','A small trial shop tested whether a familiar horoscope theme could open conversation, motivate product exploration and make an event feel worth attending.')}
      <div class="gv-pilot-build">${fig('pilot-layout','Minimum believable prototype · Space, bar, product display and checkout.')}<div><h3>A service people could walk through</h3><p>Black curtains enclosed the space. The team installed a display of 3D-printed product stand-ins, served faux cocktails and used a horoscope guide to support conversation.</p><p>Product tickets and a mock point-of-sale system simulated checkout. A flyer connected the visit to a feedback form, membership information and proposed follow-up email.</p></div></div>
      ${gallery([['pilot-arrival','Micropilot arrival and invitation.'],['pilot-display','Product stand-ins, guides and purchase tickets.'],['pilot-bar','Refreshments as a welcome touchpoint.']], 'gv-three gv-photos')}
      ${rows(['Uncertainty','How the team tested it','Planned evidence'],[
        ['Would people be intrigued enough to join an event?','Invite passersby into the prototype and observe the visit.','Qualitative observations and feedback.'],
        ['Would they choose products, or only attend?','Ask visitors to take a product card to the simulated checkout, then ask why they did or did not.','Share making a simulated purchase, plus reasons.'],
        ['Would they pay to attend?','Ask through the QR-linked Google Form after the experience.','Stated willingness to buy an entry ticket.'],
        ['Would the experience bring people back?','Ask about a future visit or recommendation.','Stated return and referral intentions.']
      ])}
      <p class="gv-note">Purchases were simulated; response totals and conversion rates are not reported. QR codes and offers belong to the 2021 trial.</p>
      ${gallery([['pilot-flyer-front','Flyer front with feedback QR code.'],['pilot-flyer-back','Flyer reverse with events and membership.'],['pilot-pos','Mock checkout interface.'],['pilot-guide-a','Early horoscope guide: introduction.'],['pilot-guide-b','Early horoscope guide: sign lookup.'],['pilot-guide-c','Early horoscope guide: product lookup.']], 'gv-six gv-materials gv-supporting')}
      <div class="gv-subhead"><h3>Feedback became specific revisions</h3><p>Guest critics, participants and the team identified different problems. The next version addressed the service as well as the room.</p></div>
      ${rows(['What the trial revealed','Change in the next version'],[
        ['Critics: too much product focus, not enough experience','Strengthen the event atmosphere with a deliberate welcome, star projection, music and an icebreaker.'],
        ['Participants: the assistant’s role and available help were unclear','Define each team member’s role and introduce the service through welcome cards and named staff.'],
        ['Participants: the connection between horoscope and products needs explanation','Add visual and verbal links through the guide and explanatory product cards.'],
        ['Critics: visitors naturally turn cards over for more information','Develop two-sided cards and fuller product guidance.'],
        ['Participants: personal space, solo browsing and waiting need attention','Carry these into the evaluation of the final flow; the next test still found crowding.'],
        ['Team: astrology can feel reductive and the lighting can reinforce stigma','Treat the theme as a conversation starter and retain these concerns in the final reflection.']
      ])}
      <p class="gv-inline"><strong>Still to resolve.</strong> Broader product choices, clearer use and material information, membership signup, waiting activities and better prop finishing.</p>
    </section>

    <section class="gv-section">
      ${head('gv-pop-up','05 / Pop-up','A coordinated five-stage experience','The final pop-up tied the physical space to staff roles, a horoscope game, product guidance and a personalized departure.')}
      <div class="gv-final-scenes">${fig('pop-up-entry','Arrival at the final curtain-enclosed pop-up.')}<div>${fig('pop-up-team','The five-person team at the completed pop-up.')} ${fig('pop-up-display','Printed product stand-ins and guidance beside the display.')}</div></div>
      <div class="gv-subhead"><h3>The 5E journey</h3><p>Touchpoints, team roles and intended responses.</p></div>
      ${rows(['Stage','What the visitor encounters','Team role & intended response'],[
        ['01 / Entice','Posters, an invitation outside the curtain, and a welcome card recording name, sign and assistance preference.','Danielle, brand ambassador: spark interest and orient visitors.'],
        ['02 / Enter','A welcome at the bar, faux cocktail, darkened space, star projector, light scent and music.','Laura, bartender: help visitors settle into the atmosphere.'],
        ['03 / Engage','A horoscope game opens conversation, followed by the guide, product cards and 3D-printed stand-ins.','Bess and Hank, sales associates: support questions and explain the proposed recommendations.'],
        ['04 / Exit','A selected product card goes to checkout; a sign-specific bag, stickers and candy personalize the departure.','Chang, closer: coordinate checkout and packaging, giving the visit a clear ending.'],
        ['05 / Extend','Take-home guidance, membership details and a proposed follow-up email with a discount code.','A planned invitation to remember the experience and return for future events.']
      ])}
      <div class="gv-subhead"><h3>Service materials</h3></div>
      ${gallery([['welcome-card','Welcome card · Name, sign, familiarity and assistance preference.'],['zodiac-wheel','Horoscope game · A shared prompt for the opening conversation.'],['name-chang','Staff identification · Chang’s role at checkout.']], 'gv-three gv-materials')}
      ${gallery([['guide-cover','Take-home guide · Cover and invitation.'],['guide-products','Product explanations · Guidance beyond the icebreaker.'],['guide-membership','Membership and events · A proposed reason to return.']], 'gv-three gv-materials')}
      ${gallery([['card-aries-front','Aries card · Visual identity.'],['card-aries-back','Aries card · Explanation on the reverse.'],['card-taurus-front','Taurus card · Visual identity.'],['card-taurus-back','Taurus card · Explanation on the reverse.']], 'gv-four gv-materials')}
      <p class="gv-note">Astrology served as a conversation prompt, not a validated guide to personal preferences.</p>
      ${gallery([['event-sign','Main event identity and invitation.'],['bar-sign','Bar sign · Orientation inside the space.'],['product-sign','Display sign · Product area.'],['shirt-front','Team shirt · Front.'],['shirt-back','Team shirt · Back.'],['printed-guides','Printed guides used at the pop-up.']], 'gv-six gv-materials gv-supporting')}
      <div class="gv-membership"><h3>A reason to return</h3><p>The proposed membership combined exclusive events, quarterly samples, discounts and community access. Programs included <em>BDSM for Beginners</em>, <em>SexEd</em>, <em>TEDsex</em> and <em>Partners &amp; Products</em>.</p></div>
    </section>

    <section class="gv-section gv-learning">
      ${head('gv-learning','06 / Learning','What the final test still left open','The final critique valued the distinctive, playful experience but identified specific frictions in the service.')}
      ${rows(['Final feedback','Implication for a next iteration'],[
        ['The experience felt fun and different; presentation could be less apologetic','Keep an open, confident tone while respecting personal boundaries.'],
        ['Too many people inside the tent made it crowded','Test capacity, spacing and the pacing of entry.'],
        ['Membership information at the beginning felt overwhelming','Move the detailed explanation later, after visitors understand the experience.'],
        ['The game-to-product connection needed more explanation','Make the narrative understandable while letting visitors choose independently.'],
        ['The choice between Bess and Hank was unclear','Explain what assistance options mean instead of relying on an assumed gender preference.']
      ])}
      <p class="gv-note">Critic and faculty feedback; proposed next steps were not yet tested.</p>
      ${decision('The design contribution','The project made the service testable: it connected the invitation, environment, staff behavior, product information and departure, then used feedback to change both the concept and the delivery. Privacy, guidance and optional participation remained central throughout.')}
      <div class="gv-credit"><h3>Team Good Vibez</h3><p>Danielle Brown, Bess Hernreich, Laura Loáiciga, Chang Su and Hank Yao. Research, concepts and prototype work were collaborative; the final service roles appear in the 5E journey above.</p></div>
    </section>

    <section class="gv-sources"><h2>Project archive</h2><div><a href="${item.source}" target="_blank" rel="noreferrer">Notion / narrative and references ↗</a><a href="${root}good-vibez-process.pdf" target="_blank" rel="noreferrer">Full process / 98 pages ↗</a></div><p>Research, prototypes and feedback: the team’s process summary, Discovery Research R2 and Concept Shaping R3. Full methodology and original project references remain available in the archive.</p><p class="gv-method-references">Methodological framing: <a href="https://www.service-design-network.org/" target="_blank" rel="noreferrer">Service Design Network ↗</a> · <a href="https://id.iit.edu/resource-library/glossary/what-is-the-5e-framework/" target="_blank" rel="noreferrer">Institute of Design, 5E Framework ↗</a> · <a href="https://coniferresearch.com/5e-framework/" target="_blank" rel="noreferrer">Conifer Research, 5E Experience Map ↗</a> · <a href="https://www.nngroup.com/articles/research-journey-mapping/" target="_blank" rel="noreferrer">NN/g, research for journey mapping ↗</a></p></section>
    <a class="next-project" href="project.html?project=${nextItem.slug}"><span>Next project</span><strong>${nextItem.title}</strong><i>→</i></a>
  </article>`;
}
