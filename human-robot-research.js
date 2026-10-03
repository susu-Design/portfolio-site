// Transcribed from the five research boards and evolution board in the Notion archive.
// English is lightly edited for readability; unanswered source fields stay explicit.
const hrResearchQuestions = ['Why is it a robot?', 'What is it?', 'Where is it?', 'What does it do?', 'How does it do it?', 'How do people interact with it?', 'How does it interact with people?', 'How does it interact with the world?'];
const hrResearchAnswers = [
  ['reference-lua', 'Lua flowerpot', [
    'It detects plant conditions, gives feedback through facial expressions, and detects hand gestures.',
    'A flowerpot with a sensing and expressive interface.',
    'Bedroom.',
    'Helps people care for a plant.',
    'The original study lists temperature, gas, humidity and image sensors, together with sensing of human behavior.',
    'People water the plant or move it from a dark place into the light. The study describes its expression changing from low to happy, or from trembling to comfortable.',
    'Changes its expression and, according to the study, sends a message to the owner’s phone when a plant-health problem is detected.',
    'Changes in temperature and light affect plant growth; the pot makes these conditions visible through its behavior.'
  ]],
  ['reference-cradle', 'Robotic cradle', [
    'It automatically responds to a child’s needs through a programmed soothing response.',
    'A cradle.',
    '“My Kitchen,” as recorded on the original board.',
    'The study describes calming a crying baby and supporting parents’ sleep.',
    'Sound and pressure sensors are listed in the study.',
    'A caregiver uses the cradle to provide calming stimuli for a restless baby.',
    'Crying triggers a whooshing sound and gentle jiggling motion, described in the study as imitating sounds and movement in the womb.',
    'No answer recorded on the original board.'
  ]],
  ['reference-chair', 'Massage chair', [
    'It translates remote-control settings into adjustable vibration and physical movement.',
    'A massage chair.',
    'Living room.',
    'Plays music, adjusts height and recline, provides different massage intensities, and detects temperature.',
    'The study lists temperature and speed sensors, and Bluetooth connectivity.',
    'People switch it on, adjust the backrest with a remote, select massage mode, intensity and duration, and connect a phone to play music.',
    'The study describes automatic stopping when the person gets up, together with temperature-related heating.',
    'No answer recorded on the original board.'
  ]],
  ['reference-bin', 'Clean Robot / garbage bin', [
    'It senses a hand gesture and responds by opening or closing its lid.',
    'A garbage bin.',
    'A corner of the room.',
    'Stores garbage and automatically opens or closes in response to a gesture.',
    'Pressure and infrared sensors are identified on the board.',
    'A person waves a hand or taps the bin with a foot; the bin detects the gesture or pressure.',
    'It opens the lid to let the person deposit waste.',
    'No answer recorded on the original board. Interaction with the wider household becomes a question in the subsequent design exploration.'
  ]],
  ['reference-thermomix', 'Thermomix TM5', [
    'The original study identifies programmed cooking as its robotic behavior, recording 133 dishes and 12 cooking functions.',
    'An all-in-one kitchen appliance.',
    'My kitchen.',
    'Cooks and guides people through cooking.',
    'The original board lists temperature, gas, speed, humidity, level and pressure sensors.',
    'People insert the recipe chip, turn on the appliance, select a dish and follow the instructions. Manual cooking allows recipes to be adapted or created.',
    'Guided Cooking gives step-by-step instructions, sounds a prompt when cooking finishes, and issues a high-temperature alert, as described in the study.',
    'The study identifies saving space, reducing noise and fumes, and keeping the kitchen cleaner as intended effects.'
  ]]
];

function hrResearchIntroMarkup() {
  return `<div class="hr-research-foundations"><article><h4>Research objective</h4><p>Identify 30 robots in everyday life, select five for detailed analysis, then choose one and explore how its autonomy could develop. The first task was to understand what makes an everyday object a robot and how its sensing, actions and interactions work together.</p></article><article><h4>What counts as a robot?</h4><p>My reference notes describe a physical machine that performs programmed tasks in response to its environment. Sensors receive information, control software processes it, and actuators produce an action: <strong>sense → think → act</strong>.</p></article><article><h4>Robotics, AI and autonomy</h4><p>The notes distinguish physical robotics from AI, which can exist entirely in software. A robot need not use AI. Autonomy concerns how much it can act without direct human intervention; the project uses levels of autonomy to explore changes in behavior.</p></article></div>`;
}

function hrDetailedComparisonMarkup(root) {
  return `<p class="hr-source-note">The same eight questions structure all five studies below. Answers are transcribed from my original Notion boards with light English editing; product functions and sensor lists are presented as recorded in that research.</p><div class="hr-research-profiles">${hrResearchAnswers.map(([img,name,answers],index)=>`<article class="hr-research-profile${img==='reference-bin'?' hr-selected-robot':''}"><div class="hr-profile-product"><a class="hr-reference-image" href="${root}${img}.jpg" target="_blank" rel="noreferrer" aria-label="Enlarge ${name}"><img src="${root}${img}.jpg" alt="${name}" loading="lazy"></a><h4>${name}</h4>${img==='reference-bin'?'<a class="hr-selection-tag" href="#hr-intelligence">Selected for development ↓</a>':''}<a class="hr-original-board" href="${root}research-board-${index+1}.jpg" target="_blank" rel="noreferrer">Read original research board ↗</a></div><dl class="hr-research-qa">${answers.map((answer,i)=>`<div><dt>${hrResearchQuestions[i]}</dt><dd>${answer}</dd></div>`).join('')}</dl></article>`).join('')}</div>`;
}

function hrSelectionMarkup() {
  return `<div class="hr-selection-rationale"><p class="hr-label">From comparison to a design decision</p><h3>Selected: a reactive bin.<br>Focus: increasing autonomy.</h3><div><p>The five studies distinguish sensing, physical action, user input, feedback and environmental interaction. For the Clean Robot, the existing sequence is particularly clear: a person approaches, waves or taps, and the lid opens. It remains in a corner and depends on the person to bring waste to it.</p><p>I selected this robot for the four-level evolution study. Its fixed response provides the baseline: what would change if the bin could identify waste, prompt a person, travel to collect it, process it, and exchange information or resources with other devices?</p><p>The design objective became extending this simple response into a kitchen-waste assistant. The following scenarios examine the physical, interactive, economic and social implications of that change, using the questions in the original brief.</p></div></div>`;
}

const hrEvolutionAnswers = [
  ['Reactive / wave or tap', [
    ['How does the robot change?', 'Charge and store garbage.'],
    ['What opportunities appear?', 'Gesture recognition; the original notes also explore shaking or stroking the bin in connection with charging.'],
    ['How do behavior and interaction change?', 'Open or close the lid; different gestures can correspond to different commands.'],
    ['How do relationships and perceptions change?', 'It is still understood as a garbage bin with a basic reaction.'],
    ['What are the wider implications?', 'Reduce the need to touch the bin by hand during disposal, with hygiene as the intended benefit.']
  ]],
  ['Interactive / detect and remind', [
    ['How does the robot change?', 'Add identification and simple decision-making.'],
    ['What opportunities appear?', 'Detect the shape and type of waste, provide a trash bag, and help people package it.'],
    ['How do behavior and interaction change?', 'The board proposes an “eye” and an audible reminder to recycle. The person responds to the bin’s prompt, extending the exchange beyond opening a lid.'],
    ['How do relationships and perceptions change?', 'These two questions are left unanswered on the original board.'],
    ['What are the wider implications?', 'The proposal aims to reduce indiscriminate disposal of plastic and metal waste.']
  ]],
  ['Adaptive / self-supply', [
    ['How does the robot change?', 'Move into other rooms, find garbage, and process kitchen waste.'],
    ['What opportunities appear?', 'Detect rotten kitchen waste and break it down with a mincing mechanism.'],
    ['How do behavior and interaction change?', 'The sketches propose delivering processed material to a flowerpot, self-cleaning and converting kitchen waste into power. These are exploratory ambitions, not demonstrated capabilities.'],
    ['How do relationships and perceptions change?', 'The original study describes a fertilizer-application robot and a multifunctional household assistant.'],
    ['What are the wider implications?', 'Reducing purchases of organic fertilizer is proposed as a possible benefit.']
  ]],
  ['Innovative / communicate across rooms', [
    ['How does the robot change?', 'Send signals and exchange data with other bins and smart devices.'],
    ['What opportunities appear?', 'Compare how much waste different bins collect and report battery status.'],
    ['How do behavior and interaction change?', 'Move between rooms, connect with a smart flowerpot, exchange data over time, and communicate with people through a phone.'],
    ['How do relationships and perceptions change?', 'The board proposes a symbiotic relationship with other devices and notes that the environment changes the robot. The perception question is left unanswered.'],
    ['What are the wider implications?', 'No separate answer is recorded on the original board.']
  ]]
];

function hrEvolutionDetailsMarkup() {
  return `<div class="hr-evolution-details"><p class="hr-source-note">Original scenario questions and answers / The sketches explore these possibilities; they do not demonstrate that memory, learning or autonomous control has been implemented.</p><div class="hr-evolution-answer-grid">${hrEvolutionAnswers.map(([title,rows])=>`<article><h4>${title}</h4><dl>${rows.map(([q,a])=>`<div><dt>${q}</dt><dd>${a}</dd></div>`).join('')}</dl></article>`).join('')}</div></div>`;
}

function hrAlternativeQuestionsMarkup() {
  const rows = [
    ['Mechanisms / hard or soft?', 'How could the body collect, contain and process waste?', 'The sectional concept combines a container, mixing blades, heating and carbon filtration; UV treatment appears as an option to investigate.'],
    ['Propulsion / electric, chemical or organic?', 'How could a stationary bin travel to the waste?', 'The selected references explore electric hub motors and Mecanum wheels for movement in the home.'],
    ['Sensors / beyond human capabilities?', 'How could the robot find waste and respond to its surroundings?', 'Ultrasonic sensing is proposed to avoid walls; odor sensing to locate waste; a specific sound to call the robot over.'],
    ['Communication / robot–human, robot–robot or others?', 'How could instructions and status move between devices and people?', 'Phone messages, scheduled signals and exchanges with other robots are proposed. Robot–animal communication remains a question in the brief.'],
    ['Relationships / human–robot, robot–robot or others?', 'What new role could the bin take in a household?', 'The concept develops from storage toward a mobile assistant that exchanges material and energy with other devices.'],
    ['Interaction / robot–human, robot–robot, robot–world?', 'How would new capabilities change what it actually does?', 'Collect waste, process it, transfer proposed liquid nutrients and dried material, and receive charging support. The ecosystem map specifies the partners for these exchanges.']
  ];
  return `<div class="hr-alternative-questions">${rows.map(([title,q,a])=>`<article><h4>${title}</h4><p class="hr-research-question">${q}</p><p>${a}</p></article>`).join('')}</div>`;
}
