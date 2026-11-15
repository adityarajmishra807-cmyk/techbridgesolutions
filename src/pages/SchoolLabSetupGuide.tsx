import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const labLinks = [
  { label: "Physics lab setup", to: "/labs/physics" },
  { label: "Chemistry lab equipment", to: "/labs/chemistry" },
  { label: "Maths lab equipment", to: "/labs/maths" },
  { label: "Biology lab equipment", to: "/labs/biology" },
  { label: "Computer lab setup", to: "/labs/computer" },
  { label: "Composite science lab", to: "/labs/composite" },
];

const SchoolLabSetupGuide = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <header className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 80% 10%, hsl(32 80% 50% / 0.28), transparent 38%), linear-gradient(135deg, hsl(220 20% 14%), hsl(220 18% 19%))" }} />
      <div className="container-narrow section-padding relative pt-32 pb-16 sm:pb-20">
        <nav aria-label="Breadcrumb" className="font-body text-sm text-secondary-foreground/55 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-secondary-foreground/80">School Lab Setup Guide</span>
        </nav>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
          School Infrastructure Planning
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6">
          School Laboratory Setup Checklist: <span className="text-gradient-warm">Plan Space, Equipment &amp; Safety</span>
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-secondary-foreground/70 max-w-3xl leading-relaxed">
          A practical guide for school leaders, principals and laboratory coordinators planning a new lab or upgrading existing facilities. Start with the classes and practical activities, then plan the room, equipment, utilities, safety and procurement together.
        </p>
        <p className="font-body text-xs text-secondary-foreground/45 mt-7">Prepared by TechBridge Solutions · Updated 15 November 2026</p>
      </div>
    </header>

    <main>
      <section className="section-padding">
        <div className="container-narrow grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 items-start">
          <article className="min-w-0">
            <div className="p-5 sm:p-6 rounded-2xl border border-border bg-card mb-10">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Start with the school's practical requirements</h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                A school laboratory should support the experiments, demonstrations and learning activities that teachers actually plan to conduct. A room full of equipment is not useful if the apparatus does not match the classes, quantities are insufficient for student groups, or the room lacks the utilities and safe storage those activities need.
              </p>
            </div>

            <div className="space-y-12">
              <section id="requirements" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">1. Define the teaching and class requirements first</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Before choosing products, prepare a short requirement brief with the principal, subject teachers and laboratory in-charge. It should identify:
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Classes and subjects that will use the laboratory.</li>
                  <li>Practical activities, demonstrations and experiments planned during the academic year.</li>
                  <li>Number of students using the room at one time and how groups will rotate.</li>
                  <li>Equipment already available, its condition and any calibration or repair needs.</li>
                  <li>Available room dimensions, water, drainage, electrical supply, network access and ventilation.</li>
                  <li>Likely future requirements, such as additional classes, subjects or student capacity.</li>
                </ul>
                <p className="font-body text-muted-foreground leading-relaxed mt-5">
                  This brief becomes the basis for the equipment schedule and bill of quantities (BOQ). It also helps prevent duplicate purchases and makes it easier to compare supplier quotations on the same specification.
                </p>
              </section>

              <section id="lab-types" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">2. Match the equipment to the type of laboratory</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-6">
                  Each subject has different apparatus, storage and utility needs. Use the categories below as a starting point, then validate every item against the school's current syllabus and practical plan.
                </p>
                <div className="space-y-5">
                  <div className="p-5 rounded-xl border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Physics laboratory</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">Plan apparatus for mechanics, optics, electricity, magnetism, heat, waves and measurement. Common groups include optical benches, lenses and mirrors, meters, power supplies, resistance equipment, measuring instruments, stands and demonstration apparatus. Confirm instrument ranges and quantities from the experiments and the number of student groups.</p>
                    <Link to="/labs/physics" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Explore physics lab equipment →</Link>
                  </div>
                  <div className="p-5 rounded-xl border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Chemistry laboratory</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">Plan glassware, balances, measuring tools, heating apparatus, stands and clamps, reagent bottles and other experiment-specific materials. Include labelled and secure chemical storage, appropriate ventilation or extraction, protective equipment and a defined waste-handling process.</p>
                    <Link to="/labs/chemistry" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Explore chemistry lab equipment →</Link>
                  </div>
                  <div className="p-5 rounded-xl border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Biology laboratory</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">Consider microscopes, prepared slides, slide boxes, specimen containers, glassware, anatomical models, charts and botany materials. Decide how specimens and stains will be stored, labelled and disposed of, and check school policy before procuring dissection materials.</p>
                    <Link to="/labs/biology" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Explore biology lab equipment →</Link>
                  </div>
                  <div className="p-5 rounded-xl border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Mathematics laboratory</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">Choose hands-on learning materials for geometry, algebra, number systems, mensuration, trigonometry, statistics and logical reasoning. Examples include 2D and 3D models, geoboards, fraction materials, algebra kits, graph tools and puzzles. Select models for the relevant age and class levels.</p>
                    <Link to="/labs/maths" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Explore maths lab equipment →</Link>
                  </div>
                  <div className="p-5 rounded-xl border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Computer laboratory</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">Plan student and teacher workstations, monitors and peripherals, LAN or Wi-Fi, network equipment, internet connectivity, UPS and power protection, computer furniture, software licensing, cyber safety and maintenance access. Size the configuration around the school's actual teaching model and applicable affiliation rules.</p>
                    <Link to="/labs/computer" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Explore computer lab setup →</Link>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">For workstation counts, CBSE digital infrastructure, networking, UPS and procurement, read the dedicated <Link to="/guides/school-computer-lab-setup" className="font-semibold text-primary hover:underline">school computer lab setup guide</Link>.</p>
                  </div>
                  <div className="p-5 rounded-xl border border-border bg-card">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-2">Composite science laboratory</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">A composite lab organises selected physics, chemistry and biology activities in one shared room. Plan the shared inventory, subject-specific materials, storage labels and class timetable carefully so equipment is available when each group needs it. Confirm whether the school's class levels and affiliation requirements call for a composite lab, separate subject labs or both.</p>
                    <Link to="/labs/composite" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Explore composite science lab equipment →</Link>
                  </div>
                </div>
              </section>

              <section id="space" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">3. Plan the room, movement and utilities</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Room planning should happen before furniture and apparatus are finalised. Mark the proposed benches, demonstration area, teacher position, storage, sinks, electrical points and exits on a room plan. Allow enough clear movement space for students and staff to work without blocking access to safety equipment or exits.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Arrange benches and workstations for clear supervision and circulation.</li>
                  <li>Keep demonstration areas visible from student work areas.</li>
                  <li>Provide suitable storage for consumables, non-consumables and valuable equipment.</li>
                  <li>Plan water, drainage, electrical points, earthing, network access and ventilation according to the equipment.</li>
                  <li>Keep exits and access to emergency equipment unobstructed.</li>
                  <li>Check furniture height, seating, cable routing and accessibility for the students who will use the room.</li>
                </ul>
                <p className="font-body text-muted-foreground leading-relaxed mt-5">
                  For CBSE-affiliated schools, the Board's infrastructure page lists a minimum 9 m × 6 m room for a science laboratory and a computer laboratory, and says a mathematics laboratory should be at least the size of a regular classroom. The science-lab provision refers to a composite lab for secondary level and/or separate Physics, Chemistry and Biology laboratories for senior secondary level. Check the applicable affiliation clauses and any later amendments before finalising a building plan.
                </p>
                <a href="https://www.cbse.gov.in/cbsenew/infra.html" target="_blank" rel="noopener noreferrer" className="inline-flex mt-2 text-sm font-semibold text-primary hover:underline">Read CBSE infrastructure requirements →</a>
              </section>

              <section id="cbse" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">4. Check the applicable CBSE requirements</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Do not rely on an old equipment list or a supplier's generic package as proof of affiliation compliance. Review the latest applicable CBSE Affiliation Bye-Laws, circulars and subject-specific laboratory SOPs for the school's level and subjects.
                </p>
                <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 mb-5">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">Computer laboratory amendment dated 31 July 2025</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    CBSE's amendment to Clauses 4.4.1 and 4.4.3 states a minimum of 40 computers and a computer-to-student ratio of 1:18. It also changes the school-strength threshold for one computer laboratory to up to 720 students, with an additional lab for each further group of up to 720 students. These are specific affiliation provisions; confirm the version currently applicable to your school before procurement.
                  </p>
                  <a href="https://www.cbse.gov.in/cbsenew/documents/Amendments_Affiliation_Bye_laws_2018_Chapter_4_31072025.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Read the 31 July 2025 CBSE amendment →</a>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  CBSE also publishes subject-specific laboratory SOPs. For example, its Biology Laboratory SOP covers room infrastructure, storage, notice boards, waste management, fire protection and student supervision. Use the SOP for the relevant subject rather than assuming one checklist applies identically to every laboratory.
                </p>
                <a href="https://saras.cbse.gov.in/saras/Aff_SOPs/BiologyLabSOP.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex mt-2 text-sm font-semibold text-primary hover:underline">Read the CBSE Biology Laboratory SOP →</a>
                <p className="font-body text-xs text-muted-foreground mt-4">This guide is a planning aid, not a compliance certificate or legal interpretation. Requirements can change and may differ by school category, subject level and local authority.</p>
              </section>

              <section id="safety" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">5. Make safety and supervision part of the design</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Safety is not an item to add at the end of a purchase list. It affects room layout, storage, utilities, supervision and the way practicals are scheduled. CBSE's Biology Laboratory SOP lists general science-lab precautions including unobstructed exits, suitable fire extinguishers, periodic checks of gas and electrical fittings, secure and labelled storage, protective equipment, first aid and close supervision of students during practical work.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Keep exits clear and make emergency contact details and laboratory rules visible.</li>
                  <li>Provide fire-safety and first-aid arrangements appropriate to the room and local requirements.</li>
                  <li>Inspect gas fittings, electrical equipment, insulation and other utilities on a defined schedule.</li>
                  <li>Label and secure chemicals, specimens, tools and other materials; restrict access where needed.</li>
                  <li>Use suitable ventilation or extraction and experiment-specific protective equipment.</li>
                  <li>Separate and dispose of chemical, biological, broken-glass and general waste using school procedures and applicable rules.</li>
                  <li>Allow practical work only with teacher or authorised staff supervision.</li>
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-5">
                  The school should also check applicable state, municipal, building, fire and other safety requirements. The CBSE safety page points schools to national and local safety provisions, including State Government and municipal prescriptions for fire and building safety.
                </p>
                <a href="https://www.cbse.gov.in/cbsenew/safety.html" target="_blank" rel="noopener noreferrer" className="inline-flex mt-2 text-sm font-semibold text-primary hover:underline">Review CBSE school safety references →</a>
              </section>

              <section id="procurement" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">6. Prepare a clear BOQ before requesting quotations</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  A useful bill of quantities (BOQ) lists each item and the specification against which suppliers should quote. Avoid comparing packages based only on the number of products or a single total price.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr>
                        <th className="p-3 font-semibold">BOQ field</th>
                        <th className="p-3 font-semibold">What to record</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr><td className="p-3 font-medium text-foreground">Item and purpose</td><td className="p-3">Equipment name, subject and practical activity it supports.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Specification</td><td className="p-3">Capacity, range, material, size, configuration or technical standard required.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Quantity</td><td className="p-3">Quantity based on student groups, practical schedule, syllabus and existing stock.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Supply and installation</td><td className="p-3">Packing, freight, assembly, installation, utility connections and commissioning responsibilities.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Warranty and support</td><td className="p-3">Warranty duration, service contact, spare-parts availability and maintenance requirements.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Documentation</td><td className="p-3">User manuals, software licences, calibration information and training where applicable.</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mt-5">
                  Ask each supplier to identify exclusions clearly. Furniture, electrical work, network cabling, ventilation, chemical storage, consumables, installation and staff orientation may be quoted separately. Record those differences before approving a purchase.
                </p>
              </section>

              <section id="commissioning" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">7. Inspect and commission the laboratory before use</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Before the first practical class, check the delivered items against the BOQ and confirm that the room is ready for supervised use.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Match delivered items, model numbers and quantities to the approved BOQ.</li>
                  <li>Check visible damage, accessories, manuals, warranties and licences.</li>
                  <li>Test equipment, network connections and utilities with the responsible staff.</li>
                  <li>Confirm that storage, labels, safety equipment and waste arrangements are in place.</li>
                  <li>Record missing items, defects, handover documents and corrective actions.</li>
                  <li>Orient teachers and laboratory staff on equipment use, storage, supervision and maintenance.</li>
                </ul>
              </section>

              <section id="checklist" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">School laboratory setup checklist</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">Use this summary during the school's planning meeting and site review.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Classes, subjects and practical activities documented",
                    "Existing equipment inventoried and checked",
                    "Applicable affiliation and syllabus requirements reviewed",
                    "Room dimensions and layout measured",
                    "Benches, storage and supervision positions planned",
                    "Water, drainage, power, network and ventilation checked",
                    "Fire safety, first aid, exits and waste handling planned",
                    "BOQ includes specifications and realistic quantities",
                    "Supplier exclusions, installation and warranty recorded",
                    "Inspection, commissioning and staff orientation scheduled",
                  ].map((item) => (
                    <div key={item} className="flex items-start gap-3 rounded-lg border border-border bg-card p-3">
                      <span aria-hidden="true" className="font-semibold text-primary">□</span>
                      <span className="font-body text-sm text-muted-foreground leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </section>

              <section id="faqs" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-5">Frequently asked questions</h2>
                <div className="space-y-3">
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">What size should a school science laboratory be?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">The CBSE infrastructure page lists a minimum size of 9 m × 6 m (approximately 600 sq. ft.) for a science laboratory. Check the applicable affiliation category and current rules for the school before finalising the room.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">How many computers are required in a CBSE school computer lab?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">The CBSE amendment dated 31 July 2025 revised Clause 4.4.1 to a minimum of 40 computers and a computer-to-student ratio of 1:18. Confirm the latest applicable circulars and affiliation rules before procurement.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">Should a school choose a composite lab or separate subject labs?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">The choice depends on the classes offered, subjects, practical programme, room availability and applicable affiliation requirements. CBSE's infrastructure provision refers to a composite science lab for secondary level and/or separate Physics, Chemistry and Biology labs for senior secondary level. Verify the school's specific case.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">How should a school calculate equipment quantities?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">Use the experiments to be conducted, the number of students working at the same time, group rotation, the class timetable and existing usable stock. Then compare the quantities with the relevant board or syllabus requirements.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">What should a laboratory setup quotation include?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">Ask for itemised specifications and quantities, furniture, utilities, installation, freight, applicable taxes, licences, warranty, training, maintenance and clearly stated exclusions.</p>
                  </details>
                </div>
              </section>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 space-y-5">
            <div className="p-5 rounded-2xl border border-border bg-card">
              <h2 className="font-display text-lg font-bold text-foreground mb-4">In this guide</h2>
              <nav aria-label="Guide sections" className="space-y-3">
                {[
                  ["requirements", "Define requirements"],
                  ["lab-types", "Choose lab type"],
                  ["space", "Plan space & utilities"],
                  ["cbse", "Check CBSE requirements"],
                  ["safety", "Plan safety"],
                  ["procurement", "Prepare the BOQ"],
                  ["commissioning", "Inspect & commission"],
                  ["checklist", "Setup checklist"],
                  ["faqs", "FAQs"],
                ].map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">{label}</a>
                ))}
              </nav>
            </div>
            <div className="p-5 rounded-2xl bg-secondary text-secondary-foreground">
              <h2 className="font-display text-lg font-bold mb-3">Explore laboratory pages</h2>
              <ul className="space-y-2.5">
                {labLinks.map((item) => (
                  <li key={item.to}>
                    <Link to={item.to} className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">{item.label} →</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card">
              <h2 className="font-display text-lg font-bold text-foreground mb-3">Related planning guides</h2>
              <ul className="space-y-3">
                <li><Link to="/guides/science-lab-equipment-planning" className="font-body text-sm text-primary hover:underline">Science lab equipment planning guide →</Link></li>
                <li><Link to="/guides/school-computer-lab-setup" className="font-body text-sm text-primary hover:underline">School computer lab setup guide →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default SchoolLabSetupGuide;
