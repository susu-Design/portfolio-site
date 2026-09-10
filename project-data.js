window.PROJECTS = [
  {
    slug: "navigation",
    title: "Who Is Our Navigation?",
    kicker: "MFA Thesis · Research through Design",
    category: "research",
    year: "2022",
    status: "MFA Design thesis · CCA",
    role: "Independent design researcher",
    disciplines: ["Research through Design", "Psychogeography", "More-than-human inquiry"],
    summary: "An MFA thesis using situated walking, sensory mapping, and speculative prototypes to investigate how GPS-based navigation reorganizes attention, memory, and agency in urban wayfinding.",
    question: "How might design make environmental cues visible again, and what alternative forms of wayfinding emerge when navigation is redistributed across bodies, senses, technologies, and other species?",
    researchFraming: {
      abstractTitle: "Navigation is not only a route-finding problem.",
      abstract: [
        "This thesis investigates GPS navigation as a form of mediation: it does not simply represent the city, but privileges efficiency, visual instruction, and a precomputed route while backgrounding situated cues such as sound, smell, bodily orientation, weather, landmarks, and memory.",
        "Rather than proposing a replacement for GPS, the research asks how design artifacts can interrupt this dominant model and make alternative relations with place available for inquiry. A portfolio of maps, sensor studies, and four cross-modal prototypes was developed to think through that question materially."
      ],
      methodology: [
        {
          label: "01 / Epistemic orientation",
          title: "Research through Design",
          copy: "Artifacts functioned as research propositions rather than finished solutions. Making, encountering, and revising them generated situated knowledge about what navigation could privilege beyond speed and accuracy."
        },
        {
          label: "02 / Situated inquiry",
          title: "Psychogeography",
          copy: "Dérive-inspired walks and sensory maps examined how urban atmosphere, attention, memory, and environmental cues shape route choice. Because the inquiry used a repeated destination-led route, it is described as inspired by dérive rather than as a strict dérive."
        },
        {
          label: "03 / Relational lens",
          title: "More-than-human comparison",
          copy: "Studies of bees, flies, and cats displaced the human pedestrian as the only model of navigation. Animal strategies were used as conceptual counter-models for sensing multiple cues, not as literal biological templates."
        },
        {
          label: "04 / Material reasoning",
          title: "Critical making",
          copy: "Arduino, Processing, environmental sensors, and bodily interfaces made invisible signals discussable. Technical failure was treated as evidence: when screen-based visualization repeated the problem under critique, the inquiry moved toward embodied outputs."
        }
      ],
      methods: [
        {
          number: "01",
          title: "Literature and precedent review",
          method: "Navigation history, GPS interfaces, desire lines, cognitive mapping, animal navigation, multisensory design, and sensory substitution were compared across design, geography, and biology.",
          reason: "To challenge the assumption that navigation is synonymous with a visual route and establish alternative ways in which orientation knowledge is produced.",
          decision: "Reframe the object of study from navigation software to the relationship among a moving body, environmental cues, and mediating tools.",
          media: [
            {
              type: "image",
              src: "assets/projects/navigation/research/animal-navigation-model.png",
              alt: "Diagram comparing layered animal navigation cues",
              caption: "Comparative model developed from the animal-navigation review. Multiple cues can cooperate or substitute for one another rather than resolve into a single visual instruction.",
              fit: "contain"
            }
          ]
        },
        {
          number: "02",
          title: "Situated walking and sensory mapping",
          method: "A recurring 15-minute route between home and CCA became a bounded field site. Photography, sound recording, landmark annotation, and layered maps documented moments of attention and familiarity.",
          reason: "A repeated everyday route made subtle variations visible and connected abstract questions about digital mediation to embodied experience in place.",
          decision: "Treat memory points, sound, architecture, and atmosphere as navigational evidence rather than incidental background.",
          media: [
            {
              type: "image",
              src: "assets/projects/navigation/research/situated-route-map.jpg",
              alt: "Photographic route map between home and CCA",
              caption: "The recurring route was reconstructed from street photographs, making remembered scenes and transitions visible alongside the route line.",
              fit: "contain"
            },
            {
              type: "image",
              src: "assets/projects/navigation/research/sound-map-study.jpg",
              alt: "Physical and photographic sound map of the field route",
              caption: "Sound was mapped as spatial evidence through a cardboard terrain model, a photographic trace, and a continuous waveform.",
              fit: "contain"
            }
          ]
        },
        {
          number: "03",
          title: "Route elicitation interviews",
          method: "CCA students living nearby drew frequently used routes on tracing paper and explained why they selected them; the drawings were compared with the researcher’s own route records.",
          reason: "Elicitation combined spatial traces with verbal accounts, revealing that apparently similar journeys could be organized by different personal cues and motives.",
          decision: "Shift from searching for one optimal pedestrian route toward supporting personal, plural ways of constructing a path.",
          media: [
            {
              type: "image",
              src: "assets/projects/navigation/research/route-elicitation.jpg",
              alt: "A participant route drawn on tracing paper",
              caption: "Tracing paper separated the participant's recalled path from the official map, allowing personal cues and route logic to be discussed without treating GPS as the answer key.",
              fit: "contain"
            }
          ]
        },
        {
          number: "04",
          title: "Iterative sensor and material experiments",
          method: "Light, sound, odor, and heart-rate sensors were tested with Arduino and Processing before cues were translated into vibration, taste, visible traces, and amplified sound.",
          reason: "Prototyping tested both what could be sensed and whether the form of translation reinforced or disrupted screen-centered navigation.",
          decision: "Abandon visual data display as the main outcome and develop four embodied, cross-modal provocations.",
          media: [
            {
              type: "image",
              src: "assets/projects/navigation/research/sensor-prototype.jpg",
              alt: "Wearable vibration prototype connected to an Arduino board",
              caption: "Early wearable testing translated sensed signals into vibration at the foot, relocating navigation feedback from the screen to the body."
            },
            {
              type: "video",
              src: "assets/projects/navigation/research/sensor-experiment.mp4",
              caption: "Process clip: environmental sensors were combined and tested before the project moved from visualized data toward cross-modal outputs."
            }
          ]
        }
      ],
      decisions: [
        ["Repeated routes were remembered through landmarks, sounds, and personal associations.", "Navigation was reframed as situated knowledge rather than route compliance."],
        ["Participants described different reasons for choosing paths that appeared geographically similar.", "The design objective shifted from universal optimization to plural and personally constructed routes."],
        ["Sensors captured environmental variation, but Processing returned it to another screen.", "The prototypes moved from visualization toward taste, vibration, trace, and amplified sound."],
        ["Animal navigation literature described orientation through multiple, substitutable cues.", "Animal strategies became a heuristic for diversifying interaction, not a claim that human and animal perception are equivalent."]
      ],
      contributions: [
        {
          label: "Conceptual contribution",
          copy: "The thesis proposes navigation as a distributed relation among bodies, memories, environmental signals, and technical systems—not a neutral instruction delivered by an interface."
        },
        {
          label: "Methodological contribution",
          copy: "It develops sensory obstruction as a mode of inquiry: selectively removing the route map and translating overlooked cues so that the values embedded in navigation can be examined."
        },
        {
          label: "Artifact contribution",
          copy: "The four prototypes form an annotated research portfolio. Together they compare different sensory translations rather than presenting one product as the definitive answer."
        }
      ],
      researcherRole: "As the independent researcher and designer, I framed the question, reviewed cross-disciplinary literature, defined the field site, conducted situated observations and route-elicitation conversations, built and revised the prototypes, documented encounters, and synthesized the resulting conceptual and material insights.",
      limitations: "This is an exploratory, practice-based thesis grounded in one recurring urban route and a small convenience sample. The animal studies inform speculative comparison rather than biological validation, and the artifacts were not evaluated as reliable navigation aids. The claims are therefore provisional: they identify a design space and a method for investigating it, not a generalizable replacement for GPS.",
      references: {
        project: "John Edward Huth, The Lost Art of Finding Our Way (2013); Tom McDonough, The Situationists and the City (2010); Denis Wood, Lynch Debord: About Two Psychogeographies (2010); Ellen Lupton and Andrea Lipps, The Senses: Design Beyond Vision (2018); Nathan F. Putman, Animal Navigation: What Is Truth? (2021); Kevin Slavin, Design as Participation (2016); Peter B. L. Meijer and Jamie Ward on sensory substitution and artificial synesthesia.",
        method: "Methodological framing: Zimmerman, Forlizzi, and Evenson, Research through Design (2007); William Gaver, What Should We Expect from Research through Design? (2012); Ron Wakkary, Things We Could Design (2021)."
      }
    },
    outcome: "The prototypes made normally backgrounded environmental cues tangible. Participants relied on bodily memory, negotiated uncertainty, and discussed how navigation technologies distribute agency rather than simply deliver directions.",
    reflection: "The work argues that navigation is never neutral: every interface prioritizes particular worlds and ways of knowing. Design can expose those values and create room for human and non-human actors to be perceived differently.",
    cover: "assets/projects/navigation/chang-su-beeline-cover.jpg",
    coverFit: "contain",
    theme: "acid",
    thesisBook: {
      file: "assets/projects/navigation/chang-su-beeline-thesis.pdf",
      cover: "assets/projects/navigation/chang-su-beeline-cover.jpg",
      pages: 35
    },
    film: {
      file: "assets/projects/navigation/who-is-our-navigation-film.m4v",
      duration: "1:28"
    },
    gallery: [
      ["assets/projects/navigation/taste.jpg", "A sensory experiment turns air and location into something that can be tasted."],
      ["assets/projects/navigation/vibration-slippers.jpg", "Vibration slippers prototype directional information through the feet."],
      ["assets/projects/navigation/sound-map.jpg", "A sound map translates environmental information beyond the conventional route line."]
    ],
    source: "https://bouncy-tendency-672.notion.site/Who-is-Our-Navigation-1b21d599bbc6425f833cd93924c6138e?pvs=25"
  },
  {
    slug: "didi",
    title: "DiDi Designated Driving",
    kicker: "Industrial design · Mobility system",
    category: "industry",
    year: "Professional work",
    status: "Mass production",
    role: "Industrial designer",
    disciplines: ["Mobility", "Product development", "Brand experience"],
    summary: "A folding e-bike and equipment system designed around the safety, endurance, and high-frequency workflow of designated drivers.",
    question: "How can a utilitarian vehicle become safer and faster to operate while also expressing the quality of the service behind it?",
    challenge: "Drivers manage frequent orders, limited battery endurance, repeated folding actions, night-time safety, and equipment that represents the DiDi service in public. The product needed to improve operations without losing brand recognition.",
    approach: "I examined the driver journey as a connected service system rather than treating the bicycle as an isolated object. Iterations focused on reducing folding steps, clarifying night-time visibility, improving battery options, and aligning graphics with DiDi’s visual identity.",
    contribution: "My work included folding-accessory improvements, visual coating and graphic proposals, and a smart-helmet concept that extended visibility and brand communication beyond the vehicle.",
    outcome: "The project moved into mass production and connected vehicle, backpack, helmet, charging, and rest scenarios into a more coherent driver-facing system.",
    reflection: "For service products, industrial design operates at two scales: resolving physical use and making an otherwise invisible platform legible in the city.",
    cover: "assets/projects/didi/03.jpg",
    theme: "orange",
    gallery: [
      ["assets/projects/didi/01.jpg", "Early vehicle direction explores a protected battery volume, a compact silhouette, and visible DiDi branding."],
      ["assets/projects/didi/02.jpg", "An alternative architecture makes the removable battery and rear structure more explicit."],
      ["assets/projects/didi/04.png", "Side-view digital model used to coordinate frame, battery, drivetrain, lighting, and folding components."],
      ["assets/projects/didi/05.jpg", "Three-quarter structural model reveals component relationships before the exterior shell is resolved."],
      ["assets/projects/didi/08.png", "A physical pre-production bicycle used to evaluate real proportions, component placement, and riding configuration."],
      ["assets/projects/didi/10.jpg", "Trial production connects the design intent to assembly constraints and supplier implementation."],
      ["assets/projects/didi/09.jpg", "Production-line observation documents the project’s transition from proposal to a repeatable manufactured system."]
    ],
    source: "https://bouncy-tendency-672.notion.site/DiDi-1ab29e180678806bbeb6f03a68f190b5?pvs=25"
  },
  {
    slug: "wild-hybrid",
    title: "Wild Hybrid",
    kicker: "Digital fabrication · Human–environment relations",
    category: "research",
    year: "2021",
    status: "Academic research",
    role: "Designer & maker",
    disciplines: ["RtD", "Multispecies inquiry", "Digital fabrication"],
    summary: "A four-part making inquiry into plant-like body extensions, climbing, adaptation, and the boundary between human action and vegetal form.",
    question: "Can a fabricated object help the body learn from the growth, grip, and persistence of plants rather than merely imitate their appearance?",
    challenge: "Conventional product design often treats nature as a visual reference or passive resource. This project instead used making to investigate how bodies, plants, and artifacts might temporarily form a hybrid system.",
    approach: "The inquiry moved through four phases: drawing with the body; multispecies observation; studying growth and climbing; and wearing fabricated extensions. Each phase translated an observation into a material action and fed the next prototype.",
    contribution: "I documented bodily rituals and plant encounters, conducted material experiments, developed wearable form studies, and explored their scale through physical models and a partially 3D-printed prototype.",
    outcome: "Knee, hand, and foot-extension studies translate thorn structures and plant growth into speculative wearable forms. Physical models and a printed fragment accompany digital proposals; climbing performance was not validated.",
    reflection: "The project shifted my practice from designing forms inspired by nature toward designing situations in which human and non-human capabilities can meet and disturb one another.",
    cover: "assets/wild-hybrid.jpg",
    theme: "green",
    gallery: [
      ["assets/projects/wild-hybrid/body-drawing.jpg", "Early embodied study: using movement itself as a drawing instrument."],
      ["assets/projects/wild-hybrid/plant-study.jpg", "Field observation of attachment, tension, and thorned growth."],
      ["assets/projects/wild-hybrid/wearable.jpg", "A flexible fabricated extension is tested against the scale and movement of the hand."]
    ],
    source: "https://bouncy-tendency-672.notion.site/Wild-Hybrid-3D-Printed-Object-7f8ce560ff48459f86346932b137e7b2?pvs=25"
  },
  {
    slug: "eating-future",
    title: "Eating the Future",
    kicker: "Speculative Design · Food industrialization",
    category: "research",
    year: "2021",
    status: "Academic research",
    role: "Designer & researcher",
    disciplines: ["Design fiction", "Food design", "Sustainability"],
    summary: "Eating the Future uses tofu to examine how industrialization changes food culture, sustainability, flavor, and memory—then turns those tensions into sensory objects and fictional dining scenarios.",
    question: "How can speculative design use food to reveal the cultural and environmental contradictions produced by industrialization?",
    challenge: "Research into tofu's carbon footprint revealed that okara is valued and disposed of differently across cultures. Industrial production improves efficiency, yet can turn a reusable, aromatic material into waste while making tofu more standardized and less distinctive.",
    approach: "The project combines food-production history, cultural probes, dialogue, role-play, material experiments, and design fiction. It moves from comparing traditional and industrial tofu production to an okara scent machine, then places food and tableware inside the fictional world of Alien.",
    contribution: "I documented two systems of tofu production, investigated okara as both material and cultural evidence, developed aromatic candles and a dissemination machine, and designed speculative dining objects and scenarios.",
    outcome: "People eat industrial tofu while smelling the aroma of traditional tofu released by a candle made from the discarded by-product. The contradiction makes the cost of efficiency tangible, while the fictional dining scenes extend the discussion to memory, identity, and civilization.",
    reflection: "The project does not propose one future of food. It uses sensory conflict and fiction to help people define the problem before trying to solve it—and to make industrialization's cultural consequences open to debate.",
    cover: "assets/eating-future.png",
    theme: "soy",
    layout: "speculative-food",
    chapters: [
      {
        id: "research",
        type: "research",
        navLabel: "RESEARCH",
        label: "RESEARCH",
        title: "From a block of tofu to a system.",
        copy: "The research followed tofu beyond the finished product—back to soybean cultivation, through two forms of production, and onward into water use, refrigeration, packaging, and discarded okara.",
        comparison: [
          {
            label: "01 / TRADITIONAL PRODUCTION",
            image: "assets/projects/eating-future/process/what-process-combined-v1.png",
            alt: "Traditional tofu production from soaking beans to pressing curds",
            caption: "Open vessels and repeated handwork keep ingredients, aroma, and by-products visible throughout the process."
          },
          {
            label: "02 / INDUSTRIAL PRODUCTION",
            image: "assets/projects/eating-future/process/what-industrialization-combined-v1.png",
            alt: "Automated industrial tofu production line",
            caption: "Enclosed pipes, mechanized forming, and continuous transport turn the same food into a standardized, scalable product."
          }
        ],
        findingsLabel: "TOFU + SUSTAINABILITY",
        findingsTitle: "Four connected points across tofu's industrial system.",
        findings: [
          {
            number: "01",
            label: "SUPPLY CHAIN",
            stat: "GLOBAL",
            title: "The impact begins before tofu is made.",
            caption: "Soybean cultivation and long-distance trade connect tofu to land use, agricultural practices, and a global commodity network.",
            image: "assets/projects/eating-future/process/research-soy-trade-map.jpg",
            alt: "Map of international soybean trade routes",
            wide: true
          },
          {
            number: "02",
            label: "PROCESSING",
            stat: "≈110 L",
            title: "Water is part of the product.",
            caption: "The initial desk research estimated that producing 100 g of tofu can require roughly 110 litres of water across its processing stages.",
            image: "assets/projects/eating-future/process/research-tofu-block.jpg",
            alt: "A block of tofu"
          },
          {
            number: "03",
            label: "DISTRIBUTION",
            stat: "7 DAYS",
            title: "Shelf life creates another material system.",
            caption: "A short refrigerated shelf life makes waterproof plastic packaging and cold-chain distribution part of tofu's environmental footprint.",
            image: "assets/projects/eating-future/process/research-retail-packaging.jpg",
            alt: "Packaged tofu displayed in refrigerated retail shelves"
          },
          {
            number: "04",
            label: "BY-PRODUCT",
            stat: "≈30 T / DAY",
            title: "Waste is defined by culture and infrastructure.",
            caption: "Okara remains edible and is reused in many food traditions, yet the research found that almost 30 tonnes can be discarded daily in Singapore when recovery is economically inconvenient.",
            image: "assets/projects/eating-future/process/research-okara-food.jpg",
            alt: "Okara reused as prepared food",
            wide: true
          }
        ],
        designOutput: {
          label: "RESEARCH THROUGH DESIGN · PACKAGING PROTOTYPE",
          title: "Making tofu's footprint visible at the moment of choice.",
          copy: "Packaging is where an industrial food system meets the consumer, yet it usually presents only the finished product. I used the package label as a research interface: a place to return evidence about water use, carbon impact, shelf life, and okara to the act of buying and eating tofu.",
          image: "assets/projects/eating-future/tofu-label.jpg",
          alt: "Complete sustainable tofu packaging information design",
          caption: "Complete packaging study: water use, shelf life, soybean-curd residue, carbon impact, decomposition, and recovery cost are presented as one connected information system.",
          mockups: [
            {
              image: "assets/projects/eating-future/tofu-packaging-family.jpg",
              alt: "Six tofu packages presenting the sustainable packaging information as a coordinated product family",
              label: "PACKAGING SYSTEM",
              caption: "The research is distributed across a family of packs, turning each purchase into one part of the larger environmental story."
            },
            {
              image: "assets/projects/eating-future/tofu-packaging-closeup.jpg",
              alt: "Close-up of the sustainable tofu label applied to a transparent retail tray",
              label: "RETAIL PROTOTYPE",
              caption: "A die-cut paper sleeve keeps the tofu visible while carrying its water use, shelf life, carbon impact, and okara story into the retail setting.",
              detail: true
            }
          ],
          explanation: [
            {
              label: "WHY PACKAGING?",
              title: "The package travels from the factory to the table.",
              copy: "It is the point where upstream production meets everyday consumption. Placing the footprint here reconnects the finished tofu with the water, emissions, short shelf life, and residue that are usually kept out of view."
            },
            {
              label: "RESEARCH THROUGH DESIGN",
              title: "The design is also a way of asking the question.",
              copy: "Translating research into icons, quantities, hierarchy, and a label prototype tests what environmental evidence can be noticed at the moment of choice. Although it was not developed into a final container, it turns desk research into a proposition that can be discussed and iterated."
            }
          ]
        }
      },
      {
        id: "how",
        navLabel: "MACHINE",
        label: "PART 02 · DISSEMINATING MACHINE",
        title: "Eat industrial tofu. Smell what was discarded.",
        copy: "Discarded okara becomes a tofu-shaped candle. Diners eat standardized tofu while smelling the aroma removed by industrial production.",
        imageAlt: "Disseminating Machine tableware, okara material experiments, and tofu-shaped candle",
        images: [
          {
            sources: [
              { src: "assets/projects/eating-future/process/dissemination-reference.png", alt: "Wind-dispersed seeds scattered across the ground" },
              { src: "assets/projects/eating-future/process/candle-concept-sketch.jpg", alt: "Concept sketch pairing a tofu-shaped okara candle with industrial tofu" }
            ],
            fit: "contain",
            label: "01 / CONCEPT",
            caption: "Natural seed dispersal inspired a machine that distributes an absent food memory through scent: industrial tofu is eaten beside an okara-scented candle.",
            layout: "concept",
            wide: true
          },
          {
            src: "assets/projects/eating-future/process/okara-material-experiment.jpg",
            alt: "Complete sequence of okara and paraffin material experiments",
            label: "02 / MATERIAL TEST",
            caption: "Dried okara was mixed with paraffin, heated and cast to test structure, texture and scent release.",
            layout: "process-strip",
            wide: true
          },
          {
            sources: [
              { src: "assets/projects/eating-future/process/tableware-sketches.jpg", alt: "Sketches exploring the relationship between candle, plate, and chopstick holder" },
              { src: "assets/projects/eating-future/process/tableware-form-study.jpg", alt: "Tableware and candle form studies drawn on paper" }
            ],
            fit: "contain",
            label: "03 / FORM DEVELOPMENT",
            caption: "The candle, plate and chopstick rest were developed as one system, so eating and smelling happen within the same composition.",
            layout: "sketch-development",
            wide: true
          },
          {
            src: "assets/projects/eating-future/process/tableware-fabrication.jpg",
            alt: "Complete sequence from design sketch and candle test to 3D printing and finished mold",
            label: "04 / PROTOTYPING",
            caption: "Sketches moved into 3D-printed molds and flame tests, checking proportion, placement and use at the table.",
            layout: "process-strip",
            wide: true
          },
          {
            sources: [
              { src: "assets/projects/eating-future/process/machine-candle-tableware.jpg", alt: "Lit tofu-shaped candle placed in the tableware prototype" },
              { src: "assets/projects/eating-future/process/machine-candle-full.jpg", alt: "Full view of the lit tofu-shaped candle" },
              { src: "assets/projects/eating-future/process/disseminating-machine-candle.jpg", alt: "Close-up of the tofu-shaped candle flame" }
            ],
            label: "05 / DISSEMINATING MACHINE",
            caption: "The final tofu-shaped candle returns discarded okara to the table as scent, making an invisible loss in industrial food production perceptible.",
            layout: "final",
            featured: true,
            wide: true
          }
        ]
      },
      {
        id: "what-if",
        navLabel: "THEATER",
        label: "PART 03 · THEATER OF FOOD",
        title: "What does food carry when Earth is far away?",
        copy: "Inside the Alien universe, an ordinary soybean becomes a memory of Earth. The tableware stages the tension among human habit, machine logic, and alien appetite.",
        imageAlt: "Alien universe world-building, speculative tableware sketches, and final dining artifact",
        images: [
          {
            sources: [
              { src: "assets/projects/eating-future/process/theater-nostromo.jpg", alt: "The Nostromo travelling through deep space" },
              { src: "assets/projects/eating-future/process/theater-hibernation.jpg", alt: "The crew waking from hibernation aboard the Nostromo" },
              { src: "assets/projects/eating-future/process/theater-dining.jpg", alt: "The Nostromo crew sharing a meal" }
            ],
            label: "01 / THE ALIEN UNIVERSE",
            caption: "Aboard the Nostromo, the shared meal briefly restores ordinary human life. Food carries memory and a fragile connection to Earth.",
            wide: true
          },
          {
            sources: [
              { src: "assets/projects/eating-future/process/theater-study-hide.jpg", alt: "Early sketch exploring food as protection from the alien" },
              { src: "assets/projects/eating-future/process/theater-study-tray.jpg", alt: "Early sketch exploring a sliding shared food tray" },
              { src: "assets/projects/eating-future/process/theater-study-grave.jpg", alt: "Early sketch exploring food, burial, and memory" },
              { src: "assets/projects/eating-future/process/theater-three-diners.jpg", alt: "Sketch mapping human, android, and alien relationships to one triangular object" },
              { src: "assets/projects/eating-future/process/theater-radial-concept.jpg", alt: "Radial tableware interaction concept with soybeans" },
              { src: "assets/projects/eating-future/process/theater-form-human.jpg", alt: "Developed mechanism sketch for the human interaction" },
              { src: "assets/projects/eating-future/process/theater-form-alien-robot.jpg", alt: "Developed interaction sketches for the alien and android" },
              { src: "assets/projects/eating-future/process/theater-form-detail.jpg", alt: "Refined triangular food vessel sketch" }
            ],
            fit: "contain",
            label: "02 / SKETCH DEVELOPMENT",
            caption: "Hiding, sharing and burying food established the behavioral possibilities. These converged into one triangular vessel with different feeding rituals for the human, android and alien.",
            wide: true
          },
          {
            sources: [
              { src: "assets/projects/eating-future/process/theater-prototype.jpg", alt: "3D-printed triangular tableware prototype tested with soybeans" },
              { src: "assets/projects/eating-future/process/theater-final-detail.jpg", alt: "Polished final vessel with soybeans passing through its slot" }
            ],
            fit: "contain",
            label: "03 / PROTOTYPE",
            caption: "The model tested scale, balance and soybean movement; its metallic finish connects tableware, machine and biological specimen.",
            wide: true
          },
          {
            src: "assets/projects/eating-future/process/theater-final-scene.jpg",
            alt: "Final speculative dining object staged aboard the Nostromo",
            label: "04 / THEATER OF FOOD",
            caption: "On the ship's dining table, the soybean becomes a remnant of Earth—a meeting point for human memory, machine logic and alien appetite.",
            featured: true,
            wide: true
          }
        ]
      }
    ],
    source: "https://bouncy-tendency-672.notion.site/Eating-the-Future-a8c85e61435a45da9b3c92155ffc356c?pvs=25"
  },
  {
    slug: "human-robot",
    title: "Human & Robot",
    kicker: "Human–robot interaction · Domestic ecology",
    category: "research",
    year: "2020",
    status: "Academic research",
    role: "Industrial designer",
    disciplines: ["HRI", "System design", "Speculative prototyping"],
    summary: "A kitchen-robot concept exploring food-waste collection, heating and drying, and resource exchange within a wider ecology of domestic machines.",
    question: "How might a robot become a participant in household material cycles rather than another appliance that performs a single isolated task?",
    challenge: "The brief asked for more than a new robotic form. It required a plausible behavior, relationship, perception system, and role within a network of people, waste, plants, and other robots.",
    approach: "I analyzed thirty robots, selected five for deeper what/where/why/how studies, and extended one through changes in behavior, opportunity, interaction, relationship, and perception. Mechanism, propulsion, sensing, and communication studies supported the system concept.",
    contribution: "I developed the kitchen-waste scenario, interaction logic, robot form, mechanical principles, and ecosystem exchanges with farming and transport robots.",
    outcome: "G2 brings together interaction scenarios, a cardboard lifting-mechanism study and digital product renders. Food-waste treatment and robot-to-robot exchanges remain proposed functions for further testing.",
    reflection: "Designing robotic products means designing expectations and relationships as much as hardware. Agency becomes understandable through repeated behavior, dependencies, and exchange.",
    cover: "assets/human-robot.jpg",
    theme: "yellow",
    gallery: [
      ["assets/projects/human-robot/interaction.jpg", "Interaction map showing charging, collection, transformation, and exchange."],
      ["assets/projects/human-robot/robot-sketch.jpg", "Early system sketch translates food-waste requirements into architecture."],
      ["assets/projects/human-robot/robot-render.jpg", "The developed mobile robot combines collection, heating, and drying functions."]
    ],
    source: "https://bouncy-tendency-672.notion.site/Human-Robot-2ecda218069d4e1791194a84cea6b948?pvs=25"
  },
  {
    slug: "good-vibez",
    title: "Good Vibez Pop-up",
    kicker: "Experience design · Service design",
    category: "research",
    year: "2021",
    status: "Team project",
    role: "Experience designer & researcher",
    disciplines: ["Exploratory qualitative research", "5E experience mapping", "Service prototyping"],
    summary: "A divination-themed pop-up store designed to make intimate-product shopping more private, safe, social, and personally meaningful.",
    question: "How can a retail experience reduce embarrassment and uncertainty while supporting curiosity, consent, customization, and community?",
    challenge: "Intimate-product retail combines practical questions with strong social and cultural pressures. Customers need trustworthy information and privacy, but may also seek discovery and connection.",
    approach: "The team triangulated comparative retail observation, a cross-cultural scoping questionnaire, guided qualitative interviews, and dimension mapping. Findings became explicit service criteria, while the 5E framework structured how those criteria operated from invitation through follow-up.",
    contribution: "I contributed to discovery research, synthesis, concept development, journey construction, and the translation of findings into spatial and service touchpoints.",
    outcome: "The team tested a speakeasy direction, then shifted to a retail store with membership events. A horoscope-themed micropilot and final pop-up explored guided discovery, privacy, and personalized service.",
    reflection: "Privacy is not simply isolation. In service design it can be created through pacing, codes of conduct, controlled disclosure, and meaningful choices about when and how to interact.",
    cover: "assets/projects/good-vibez/cover.jpg",
    theme: "violet",
    gallery: [
      ["assets/projects/good-vibez/research.jpg", "Discovery research organized the team’s fieldwork and participant evidence."],
      ["assets/projects/good-vibez/journey.jpg", "The interior journey sequences welcome, orientation, customization, and conversation."]
    ],
    source: "https://bouncy-tendency-672.notion.site/Sexy-Toy-Store-Pop-up-5a702c646c8441f68a477da3a86bdfce?pvs=25"
  },
  {
    slug: "assemblies",
    title: "Industrial Design Assembles",
    kicker: "Industrial design · Selected archive",
    category: "industry",
    year: "Selected archive",
    role: "Industrial designer",
    summary: "A continuous visual archive of industrial-design projects, presented in the same sequence as the original Notion portfolio.",
    cover: "assets/projects/assemblies/notion/assembly-01.jpg",
    theme: "blue",
    layout: "notion-archive",
    archiveGroups: [[1, 6], [7, 11], [12, 17], [18, 23], [24, 27], [28, 30], [31, 35], [36, 38], [39, 43]],
    source: "https://bouncy-tendency-672.notion.site/Industrial-Design-Assembles-815bee613f6e46a6a7672c50ccf7e422?pvs=25"
  },
  {
    slug: "huawei-health",
    title: "HUAWEI Health Phone",
    kicker: "Health experience · HMI design",
    category: "industry",
    year: "Professional work",
    status: "Pre-development · Confidential",
    role: "HMI designer",
    disciplines: ["Health technology", "HMI", "Product strategy"],
    summary: "An exploration of how blood-pressure and blood-oxygen monitoring could become an accessible, coherent part of a consumer-device experience.",
    question: "How can a personal device make health measurement understandable across work, home, and travel without turning wellbeing into anxiety?",
    challenge: "Health functions carry clinical expectations while living inside an everyday consumer product. The interaction must communicate confidence, guidance, and limits without overstating what the device can do.",
    approach: "The work mapped use across home, workplace, and outdoor scenarios and translated measurement states into a clear HMI sequence. The design balanced immediacy with the need to contextualize quantified health information.",
    contribution: "I contributed the health-function HMI and helped frame how monitoring could fit within the broader product experience.",
    outcome: "This was a pre-development project. Product imagery and implementation specifics remain confidential, so the case study focuses on the design question, interaction responsibility, and learning.",
    reflection: "As wellness becomes digitized, health interfaces also acquire social and symbolic meanings. Designers need to ask who feels reassured, who feels excluded, and what values the measurement system quietly promotes.",
    visual: "health",
    theme: "mint",
    confidential: true,
    source: "https://bouncy-tendency-672.notion.site/HUAWEI-Health-Phone-2d652f8f09cb468883a5dcde9d2ccd59?pvs=25"
  },
  {
    slug: "huawei-p70",
    title: "HUAWEI Smartphone P-70",
    kicker: "Smartphone · Camera architecture",
    category: "industry",
    year: "Professional work",
    status: "Mass production · Confidential process",
    role: "Industrial designer",
    disciplines: ["Smartphone", "Ergonomics", "Cross-functional development"],
    summary: "Form studies for integrating a large one-inch camera sensor while controlling visual height, tactile transition, and perceived thickness.",
    question: "How can a major imaging advantage become a confident product feature rather than an abrupt seven-millimeter obstruction?",
    challenge: "The one-inch CMOS sensor improved low-light performance but created a camera module rising roughly seven millimeters. Its transition affected both silhouette and the way a hand encountered the product.",
    approach: "I developed and compared two directions: a direct lift using color separation to reduce perceived abruptness, and a telescopic lift that reorganized the transition as a deliberate mechanical expression.",
    contribution: "My role centered on concept comparison, form development, and evaluating visual and tactile trade-offs with engineering and other stakeholders.",
    outcome: "The product entered mass manufacturing. Confidential development material is omitted; this page records the design problem and the decision logic that can be shared.",
    reflection: "Stacked devices make industrial design a negotiation among optics, structure, ergonomics, manufacturing, and brand. The quality of the result depends on making those constraints visible early enough to compare them together.",
    visual: "camera",
    theme: "silver",
    confidential: true,
    source: "https://bouncy-tendency-672.notion.site/HUAWEI-Smartphone-P-70-2ff1d8da4c3842938cc164c5c3435b91?pvs=25"
  },
  {
    slug: "huawei-digital-power",
    title: "HUAWEI Digital Power",
    kicker: "Design strategy · Energy systems",
    category: "industry",
    year: "Professional work",
    status: "Mass production",
    role: "Product feature-window designer",
    disciplines: ["Design strategy", "Product platform", "B2B to B2C"],
    summary: "A platform-based design strategy that creates family identity across solar, storage, and charging products while enabling configurable partner showrooms.",
    question: "How can a complex energy portfolio read as one trusted system across products, configurations, markets, and points of sale?",
    challenge: "The business needed to expand photovoltaic energy-storage share and shift a technical B2B portfolio toward more legible B2C experiences. Visual unity had to coexist with different structures and cost levels.",
    approach: "The strategy defined three levels of differentiation: appearance and structure, CMF, and a scalable feature-window language. A platformized model-room concept enabled resellers to configure coherent solution displays.",
    contribution: "I designed the product feature-window system for the Smart String Energy Storage System and Smart Energy Controller within the broader platform direction.",
    outcome: "The work supported a mass-produced family of products and a repeatable way to express hierarchy, recognition, and solution coherence.",
    reflection: "The project clarified how business transformation shapes form. In a B2B-to-B2C transition, design must work across the device, the portfolio, the channel, and the story a customer can understand.",
    visual: "power",
    theme: "red",
    source: "https://bouncy-tendency-672.notion.site/HUAWEI-Digital-Power-409ce87f941a43b69a20161b3769ccd1?pvs=25"
  },
  {
    slug: "huawei-power-bank",
    title: "HUAWEI Power Bank",
    kicker: "Consumer electronics · Lead design",
    category: "industry",
    year: "Professional work",
    status: "Mass production",
    role: "Lead industrial designer",
    disciplines: ["Product definition", "CMF", "SuperCharge ecosystem"],
    summary: "A premium portable charger for business travelers, developed around rapid charging, product confidence, and a distinctly technological character.",
    question: "In a technically mature category, how can industrial design make speed, reliability, and premium positioning immediately perceptible?",
    challenge: "Portable chargers offer similar core utility. This product needed to justify a higher position, accommodate multiple fast-charging options, and communicate compatibility with the HUAWEI SuperCharge ecosystem.",
    approach: "Starting from the previous generation, I established product specifications, developed three concept directions, and iterated their proportions, details, and visual language with technical constraints in view.",
    contribution: "As lead designer, I guided the project from specification framing through concept selection and refinement.",
    outcome: "The selected direction entered mass manufacturing and used its interface, material expression, and controlled sci-fi character to communicate the product’s place in the ecosystem.",
    reflection: "When technology converges, design carries more of the differentiation burden. Small decisions about seams, ports, surface, and feedback become the evidence for brand value.",
    visual: "battery",
    theme: "black",
    source: "https://bouncy-tendency-672.notion.site/HUAWEI-Power-Bank-eeaa98e5f07f4dad81711f3d35bd90b3?pvs=25"
  },
  {
    slug: "huawei-trifold",
    title: "HUAWEI Tri-Fold Phone",
    kicker: "Foldable device · Pre-development",
    category: "industry",
    year: "Professional work",
    status: "Pre-development · Confidential",
    role: "Industrial designer",
    disciplines: ["Ergonomics", "Device architecture", "Accessory design"],
    summary: "Second-generation tri-fold studies focused on a thinner, lighter business device with more comfortable handling and stylus-supported work scenarios.",
    question: "How should a three-part device balance screen ambition with weight, grip, folding order, controls, and the realities of daily work?",
    challenge: "Tri-fold hardware creates coupled decisions: each change in thickness, hinge direction, screen ratio, button placement, or accessory affects the whole experience. Development also spans multi-year technology cycles and multiple internal teams.",
    approach: "The work evaluated folding orientations, ergonomic dimensions, grip and weight distribution, interface adaptation, and stylus use. Expert review and internal concept comparison were central to narrowing the design direction.",
    contribution: "I contributed second-generation form and ergonomic development, stylus-enabled work scenarios, and accessory or component design.",
    outcome: "This remains a confidential pre-development case. The portfolio presents the shared design criteria and systems thinking without exposing unreleased concepts.",
    reflection: "For emerging hardware, a compelling form is inseparable from the choreography of use. The design task is to make many interdependent technical choices feel like one clear behavior.",
    visual: "fold",
    theme: "cobalt",
    confidential: true,
    source: "https://bouncy-tendency-672.notion.site/HUAWEI-Tri-Fold-Phone-9306ad4ededb4b228a912cb5db7ff3b6?pvs=25"
  },
  {
    slug: "huawei-wireless-charge",
    title: "HUAWEI Wireless Charge",
    kicker: "Charging experience · Industrial design",
    category: "industry",
    year: "Professional work",
    status: "Limited public information",
    role: "Industrial designer",
    disciplines: ["Wireless charging", "Consumer electronics", "Form development"],
    summary: "An industrial-design project exploring how wireless charging can become a clear, stable, and integrated part of the device ecosystem.",
    question: "How can a charging object communicate placement, readiness, and energy transfer with minimal visual and physical friction?",
    challenge: "The current archive contains only limited shareable information. The case is therefore framed around the interaction qualities inherent to wireless charging rather than undocumented product claims.",
    approach: "The design focus is presented through three verifiable concerns: device placement, feedback legibility, and the relationship between charger, surface, and surrounding products.",
    contribution: "Industrial-design development within the HUAWEI charging-product context.",
    outcome: "This page serves as a transparent placeholder until additional approved process material and project details are available.",
    reflection: "A concise case with clear limits is stronger than an embellished one. Additional process evidence can later replace this section without changing the page structure.",
    visual: "charge",
    theme: "ice",
    confidential: true,
    source: "https://bouncy-tendency-672.notion.site/HUAWEI-Wireless-Charge-1f229e180678803892f0d5cad82fb8c4?pvs=25"
  }
];
