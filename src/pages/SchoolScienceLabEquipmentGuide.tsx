import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";

const sections = [
  ["lab-model", "Choose the lab model"],
  ["physics", "Physics lab equipment"],
  ["chemistry", "Chemistry lab equipment"],
  ["biology", "Biology lab equipment"],
  ["composite", "Composite science lab"],
  ["infrastructure", "Room and infrastructure"],
  ["quantities", "Calculate quantities"],
  ["safety", "Safety and waste"],
  ["boq", "Prepare the BOQ"],
  ["handover", "Inspection and maintenance"],
  ["checklist", "Planning checklist"],
  ["faqs", "FAQs"],
];

const ScienceLabEquipmentGuide = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <header className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 82% 12%, hsl(32 80% 50% / 0.26), transparent 38%), linear-gradient(135deg, hsl(220 20% 14%), hsl(220 18% 19%))" }} />
      <div className="container-narrow section-padding relative pt-32 pb-16 sm:pb-20">
        <nav aria-label="Breadcrumb" className="font-body text-sm text-secondary-foreground/55 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides/school-laboratory-setup-checklist" className="hover:text-primary transition-colors">School Lab Setup Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-secondary-foreground/80">Science Lab Equipment</span>
        </nav>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">Science Laboratory Planning</span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6">
          Science Lab Equipment for Schools: <span className="text-gradient-warm">Physics, Chemistry, Biology &amp; Composite Labs</span>
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-secondary-foreground/70 max-w-3xl leading-relaxed">
          A practical guide to choosing apparatus, planning quantities, organising laboratory rooms and preparing subject-wise inventories around the practical activities your teachers deliver.
        </p>
        <p className="font-body text-xs text-secondary-foreground/45 mt-7">Prepared by TechBridge Solutions · Updated 15 November 2026</p>
      </div>
    </header>

    <main>
      <section className="section-padding">
        <div className="container-narrow grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 items-start">
          <article className="min-w-0">
            <div className="p-5 sm:p-6 rounded-2xl border border-border bg-card mb-10">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">Start with practicals, not a catalogue</h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                A useful science laboratory is built around experiments, demonstrations and observations. Before ordering apparatus, identify the classes using the room, the practical list for each subject, the number of students working at one time and the equipment already in usable condition. Then prepare a subject-wise inventory and check it against the applicable board requirements.
              </p>
            </div>

            <div className="space-y-12">
              <section id="lab-model" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">1. Choose the right science laboratory model</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  The arrangement depends on the classes and subjects offered. CBSE's physical-infrastructure provision describes a composite science laboratory for the secondary level and/or separate Physics, Chemistry and Biology laboratories for senior-secondary science. It lists a minimum room size of 9 m × 6 m for each science laboratory and says the lab should be fully equipped. Confirm the school's category and current affiliation clauses before planning rooms or placing orders.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2">Composite science laboratory</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">A shared secondary-level space that organises selected physics, chemistry and biology activities. It needs a balanced inventory, subject-wise storage and a timetable so classes can use shared equipment safely.</p>
                  </div>
                  <div className="rounded-xl border border-border bg-card p-5">
                    <h3 className="font-display font-semibold text-foreground mb-2">Separate senior-secondary laboratories</h3>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed">Separate Physics, Chemistry and Biology rooms allow each subject to have specialist apparatus, utilities, storage and practical workflows. The school's subject offering and affiliation requirements determine the arrangement.</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed">
                  CBSE Circular 17/2023 directs schools to maintain laboratory facilities according to the subject-specific SOPs issued under Circular 11/2022. Those SOPs include infrastructure recommendations and minimum equipment schedules for a batch of 40 students. Use them as a reference, then reconcile the quantities with the school's actual practical programme, group rotation and existing stock.
                </p>
                <div className="flex flex-wrap gap-3 mt-4">
                  <a href="https://www.cbse.gov.in/cbsenew/infra.html" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">CBSE physical infrastructure provisions →</a>
                  <a href="https://saras.cbse.gov.in/saras/Circulars/Circular17_2023.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">CBSE Circular 17/2023 referencing lab SOPs →</a>
                </div>
              </section>

              <section id="physics" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">2. Physics lab equipment for schools</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Organise a physics inventory by practical theme. This helps teachers check whether the selected equipment supports mechanics, measurement, optics, electricity, magnetism, heat, waves and sound.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border mb-5">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr><th className="p-3 font-semibold">Equipment group</th><th className="p-3 font-semibold">Examples to review</th><th className="p-3 font-semibold">Planning question</th></tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr><td className="p-3 font-medium text-foreground">Measurement</td><td className="p-3">Vernier callipers, screw gauges, stopwatches, measuring scales, thermometers and spirit levels</td><td className="p-3">Which ranges and quantities are needed for the practical groups?</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Mechanics</td><td className="p-3">Pendulum apparatus, spring balances, weights, friction apparatus and sonometers</td><td className="p-3">Can groups work without waiting for a single shared set?</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Electricity</td><td className="p-3">Ammeters, voltmeters, galvanometers, rheostats, resistance boxes, keys and meter bridges</td><td className="p-3">Are the ranges, connections and power arrangements suitable?</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Optics</td><td className="p-3">Optical benches, lenses, mirrors, prisms, glass slabs and ray-optics accessories</td><td className="p-3">Is there enough bench space and safe storage for glass?</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Heat and sound</td><td className="p-3">Heating apparatus, tuning forks, resonance apparatus and demonstration models</td><td className="p-3">Are utilities and supervision suitable for the activities?</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  The CBSE Physics Laboratory SOP's non-consumable schedule for a batch of 40 includes examples such as ammeters in different ranges, galvanometers, meter bridges, digital and manual multimeters, optical benches, prisms, rheostats, resistance coils, vernier callipers and voltmeters. Check the original schedule for its complete categories and quantities rather than relying on a generic supplier package.
                </p>
                <a href="https://saras.cbse.gov.in/saras/Aff_SOPs/PhysicsLabSOP.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">Read the CBSE Physics Laboratory SOP and equipment schedule →</a>
                <div className="mt-4"><Link to="/labs/physics" className="text-sm font-semibold text-primary hover:underline">View TechBridge Physics Lab setup →</Link></div>
              </section>

              <section id="chemistry" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">3. Chemistry lab equipment and storage</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  A chemistry inventory should cover glassware, measuring equipment, balances, heating and support apparatus, reagent storage, protective equipment and waste handling. The laboratory in-charge should prepare consumables from the practical syllabus and review quantities, storage compatibility and procedures.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-5">
                  {[
                    ["Glassware and measuring", "Beakers, conical flasks, test tubes, measuring cylinders, burettes, pipettes, funnels, watch glasses and glass rods."],
                    ["Balances and apparatus", "Balances, thermometers, tripod stands, wire gauze, tongs, spatulas, test-tube holders and support stands."],
                    ["Heating and demonstrations", "Approved heating arrangements and apparatus selected for the practicals and room utilities."],
                    ["Storage and protection", "Closed, labelled chemical storage; suitable segregation; protective eyewear and gloves; and the fume-cupboard provisions specified by the SOP."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-xl border border-border bg-card p-4">
                      <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  The CBSE Chemistry Laboratory SOP recommends secure chemical storage, lockable areas kept off-limits to students, suitable ventilation, a fume cupboard and appropriate safety provisions. It also advises purchasing only the smallest quantities needed, using safer substitutes where suitable and considering microscale experiments to reduce chemical use and waste.
                </p>
                <a href="https://saras.cbse.gov.in/saras/Aff_SOPs/ChemistryLabSOP.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">Read the CBSE Chemistry Laboratory SOP and infrastructure schedule →</a>
                <div className="mt-4"><Link to="/labs/chemistry" className="text-sm font-semibold text-primary hover:underline">View TechBridge Chemistry Lab setup →</Link></div>
              </section>

              <section id="biology" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">4. Biology lab equipment for observation and practical work</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Biology practicals rely on observation, microscopy, prepared materials, models and appropriate specimen handling. Organise the inventory around microscopy, slides, glassware, measuring tools, botany materials, anatomical models, charts and safe storage.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border mb-5">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr><th className="p-3 font-semibold">Equipment group</th><th className="p-3 font-semibold">Examples to review</th></tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr><td className="p-3 font-medium text-foreground">Microscopy</td><td className="p-3">Compound and dissecting microscopes, prepared slides, slide boxes, staining racks and cover slips</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Glassware and tools</td><td className="p-3">Beakers, conical flasks, droppers, pipettes, measuring cylinders, petri dishes, forceps and specimen containers</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Models and charts</td><td className="p-3">Anatomical models, skeleton models, biological charts and display stands</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Botany and observation</td><td className="p-3">Plant-study materials, leaf apparatus, specimens and other materials selected for scheduled practicals</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mb-4">
                  The CBSE Biology Laboratory SOP's non-consumable schedule for a batch of 40 includes microscopes, beakers, conical flasks, digital balances, forceps, funnels, petri dishes, pipette stands, prepared slides, models and laboratory coats. Check the current practical list before deciding which items and quantities are needed.
                </p>
                <a href="https://saras.cbse.gov.in/saras/Aff_SOPs/BiologyLabSOP.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">Read the CBSE Biology Laboratory SOP and equipment schedule →</a>
                <div className="mt-4"><Link to="/labs/biology" className="text-sm font-semibold text-primary hover:underline">View TechBridge Biology Lab setup →</Link></div>
              </section>

              <section id="composite" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">5. Composite science lab equipment</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  A composite science laboratory combines selected physics, chemistry and biology activities in one shared room. The inventory needs a balanced core of general apparatus, optics and magnets, glassware and heating accessories, microscopy materials, models, specimens and teaching displays. Store equipment by subject and activity so teachers can set up and return items without mixing materials.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  The CBSE Composite Science Laboratory SOP's 40-student schedule includes assembled microscopes, test and boiling tubes, beakers, conical flasks, tripod stands, wire gauze, funnels, thermometers, mirrors, lenses, prisms, magnets, specimens, permanent slides and two laptop/desktop sets. It also includes separate consumable, specimen and slide schedules. Check the original SOP for the complete list before using its reference quantities.
                </p>
                <a href="https://saras.cbse.gov.in/saras/Aff_SOPs/CompositeScienceLabSOP.pdf" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold text-primary hover:underline">Read the CBSE Composite Science Laboratory SOP and 40-student inventory →</a>
                <div className="mt-4"><Link to="/labs/composite" className="text-sm font-semibold text-primary hover:underline">View TechBridge Composite Science Lab setup →</Link></div>
              </section>

              <section id="infrastructure" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">6. Plan the room and shared laboratory infrastructure</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Equipment lists are only one part of a usable laboratory. The CBSE subject SOPs set out infrastructure recommendations alongside their apparatus schedules. These include a room of approximately 9 m × 6 m (about 600 sq. ft.), lockable storage for consumables and non-consumables, a demonstration table with sink and tap, seating for a batch of 40, teaching/display facilities, practical timetables and emergency contacts. Check the selected subject SOP for its individual requirements.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border mb-5">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr><th className="p-3 font-semibold">Infrastructure area</th><th className="p-3 font-semibold">Planning checks</th></tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr><td className="p-3 font-medium text-foreground">Room and circulation</td><td className="p-3">Measure the room, keep movement routes and exits clear, plan teacher supervision and position demonstration/work areas for visibility.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Storage</td><td className="p-3">Provide lockable storage for consumables and non-consumables, with subject-wise labels and a stock register.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Water and demonstration</td><td className="p-3">Plan the demonstration table, sink, running water, washing arrangements and student work points.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Heating and ventilation</td><td className="p-3">Check the selected SOP for heating provisions, gas fittings, exhaust and fume-cupboard requirements; have services designed and inspected by qualified professionals.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Safety and notice boards</td><td className="p-3">Provide visible lab rules, practical lists, timetable, emergency numbers, fire-safety provisions and first-aid access.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Waste handling</td><td className="p-3">Define separation, temporary storage and authorised disposal routes for general, chemical, biological and broken-glass waste.</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Several subject SOP tables specify details such as 8 sinks, two heating burners, two exhaust fans and two first-aid kits. Do not treat these as a universal substitute for the applicable subject SOP, site conditions or local fire, building and safety approvals.
                </p>
              </section>

              <section id="quantities" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">7. Calculate quantities from batch size, rotation and existing stock</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  A CBSE SOP schedule for a batch of 40 students is a useful reference point, but it should not be copied without checking how the school runs practicals. If classes attend in smaller groups, the required number of shared apparatus sets may differ. If several classes use the room in a short period, duplicate items may be needed to avoid timetable bottlenecks.
                </p>
                <ol className="list-decimal pl-6 space-y-3 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li><strong className="text-foreground">List the experiments.</strong> Map each practical to apparatus, consumables, utilities and safety requirements.</li>
                  <li><strong className="text-foreground">Set the working batch.</strong> Record students in each session and the number of groups working simultaneously.</li>
                  <li><strong className="text-foreground">Decide the sharing model.</strong> Identify which items are individual, group-shared, teacher demonstration-only or common room infrastructure.</li>
                  <li><strong className="text-foreground">Audit existing stock.</strong> Check quantity, condition, completeness, labels and suitability for the planned practicals.</li>
                  <li><strong className="text-foreground">Separate reusable and consumable items.</strong> Estimate reusable apparatus by rotation and consumables by sessions and actual use.</li>
                  <li><strong className="text-foreground">Record a reason for every quantity.</strong> Tie BOQ quantities to an experiment, student group, applicable reference or replacement need.</li>
                </ol>
                <div className="p-5 rounded-xl border border-primary/20 bg-primary/5 mt-6">
                  <h3 className="font-display font-semibold text-foreground mb-2">Simple quantity-planning example</h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">If 40 students are split into 8 groups of 5 and an experiment needs one apparatus set per group, the initial planning requirement is 8 working sets, plus any teacher demonstration or contingency items the school decides are needed. This is an example, not a CBSE prescribed quantity.</p>
                </div>
              </section>

              <section id="safety" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">8. Make safety and waste management part of the specification</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Safety provisions must be planned before the room is used. CBSE's Physics, Chemistry, Biology and Composite Science SOPs include unobstructed exits, fire extinguishers, periodic checks of vulnerable points and electrical fittings, secure and labelled storage, suitable protective provisions, emergency arrangements, first aid and teacher supervision.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Keep exits and access routes unobstructed; display laboratory rules and emergency contacts.</li>
                  <li>Have gas and electrical installations designed, tested and inspected by qualified professionals.</li>
                  <li>Provide fire-safety and first-aid arrangements appropriate to the room and applicable standards.</li>
                  <li>Keep chemicals, specimens, tools and valuable apparatus in appropriate labelled and secured storage.</li>
                  <li>Use the fume cupboard, ventilation and personal protective equipment required by the relevant activity and subject SOP.</li>
                  <li>Define waste segregation and disposal procedures before experiments begin; hazardous waste must follow approved school procedures and applicable rules.</li>
                  <li>Require teacher or authorised staff supervision during practical work.</li>
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-5">
                  The Chemistry SOP advises purchasing only the smallest quantities needed, considering safer substitutes and microscale experiments where suitable, and using authorised professional channels for hazardous-waste disposal. Follow the complete SOP and local rules rather than improvising chemical storage or disposal procedures.
                </p>
              </section>

              <section id="boq" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">9. Prepare a subject-wise BOQ before comparing suppliers</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  A bill of quantities (BOQ) makes offers comparable. It should state the item, specification, quantity, use, installation needs and supplier responsibilities. Avoid comparing laboratories by a single package price or by the number of line items alone.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr><th className="p-3 font-semibold">BOQ field</th><th className="p-3 font-semibold">What to record</th></tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr><td className="p-3 font-medium text-foreground">Subject and practical</td><td className="p-3">Physics, Chemistry, Biology or Composite; name the practical or teaching activity supported.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Item and specification</td><td className="p-3">Equipment name, range, size, material, model, capacity, accessories and required standards.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Quantity and unit</td><td className="p-3">Number of units, sets, packs or consumable measures, with a reason for the quantity.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Utilities and installation</td><td className="p-3">Water, drainage, power, gas, ventilation, assembly, commissioning and civil/electrical work.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Storage and safety</td><td className="p-3">Cabinets, labels, protective equipment, fire provisions and approved waste-handling arrangements.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Warranty and support</td><td className="p-3">Warranty, calibration/support where relevant, spare parts, repair process and service responsibility.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Delivery and exclusions</td><td className="p-3">Packing, freight, taxes, installation, training, documentation and clearly listed exclusions.</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-5">Ask suppliers to identify substitutions and exclusions in writing. Keep the approved BOQ as the reference document for delivery inspection and handover.</p>
              </section>

              <section id="handover" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">10. Inspect, hand over and maintain the laboratory</h2>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Match delivered items, quantities, model numbers and accessories against the approved BOQ.</li>
                  <li>Check glassware, instruments, stands, models and electrical equipment for damage and completeness.</li>
                  <li>Record warranties, manuals, calibration documents where relevant and supplier support contacts.</li>
                  <li>Verify that storage, labels, notice boards, safety provisions and waste arrangements are ready.</li>
                  <li>Have responsible teachers or the laboratory in-charge review apparatus and demonstrate safe use.</li>
                  <li>Maintain an asset register, consumables register, issue/return record and maintenance log.</li>
                  <li>Review the practical list and equipment condition before each academic year.</li>
                </ul>
              </section>

              <section id="checklist" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">Science laboratory equipment planning checklist</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">Use this list during the subject-teacher meeting, room survey and procurement review.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Classes, subjects and practical lists documented",
                    "Composite or separate lab model checked against affiliation requirements",
                    "Room dimensions and student movement measured",
                    "Existing apparatus audited for quantity and condition",
                    "Physics equipment mapped by practical theme",
                    "Chemistry glassware, storage and utilities reviewed",
                    "Biology microscopes, slides, models and specimens planned",
                    "Shared composite inventory and storage zones identified",
                    "Consumables and non-consumables separated",
                    "Batch size and working group quantities justified",
                    "Safety, ventilation, fire, first aid and waste arrangements reviewed",
                    "Subject-wise BOQ, exclusions and warranties compared",
                    "Delivery inspection, handover and maintenance owner assigned",
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
                    <summary className="cursor-pointer font-display font-semibold text-foreground">What equipment is needed for a school science laboratory?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">It depends on the subject and practical programme. Physics commonly needs measurement, mechanics, optics and electricity apparatus; Chemistry needs glassware, balances, heating and support apparatus plus appropriate storage; Biology needs microscopes, slides, glassware, models and specimen materials. A composite lab combines selected equipment from more than one subject.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">Does CBSE publish minimum equipment schedules for science labs?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">CBSE has subject-specific Standard Operating Procedures for Physics, Chemistry, Biology and Composite Science laboratories. These include infrastructure recommendations and equipment schedules for a batch of 40 students. Schools should verify the applicable SOP and current circulars before procurement.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">Should a school use a composite lab or separate science labs?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">CBSE's infrastructure provision describes a composite science lab for secondary level and/or separate Physics, Chemistry and Biology laboratories for senior-secondary science. Confirm the school's subject offering and applicable affiliation category before deciding the room model.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">How should a school calculate laboratory equipment quantities?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">Start with practicals, students per session, working groups, rotation and existing usable stock. Use the CBSE 40-student schedules as a reference where applicable, then document the reason for every final BOQ quantity.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">What should be included in a science lab setup quotation?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">Request subject-wise specifications and quantities, furniture, utilities, storage, safety provisions, installation, freight, taxes, warranty, support and any training. Ask suppliers to state exclusions and substitutions clearly.</p>
                  </details>
                </div>
              </section>
            </div>
          </article>

          <aside className="lg:sticky lg:top-24 space-y-5">
            <div className="p-5 rounded-2xl border border-border bg-card">
              <h2 className="font-display text-lg font-bold text-foreground mb-4">In this guide</h2>
              <nav aria-label="Guide sections" className="space-y-3">
                {sections.map(([id, label]) => (
                  <a key={id} href={`#${id}`} className="block font-body text-sm text-muted-foreground hover:text-primary transition-colors">{label}</a>
                ))}
              </nav>
            </div>
            <div className="p-5 rounded-2xl bg-secondary text-secondary-foreground">
              <h2 className="font-display text-lg font-bold mb-3">Explore subject lab pages</h2>
              <ul className="space-y-2.5">
                <li><Link to="/labs/physics" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Physics lab setup →</Link></li>
                <li><Link to="/labs/chemistry" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Chemistry lab equipment →</Link></li>
                <li><Link to="/labs/biology" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Biology lab equipment →</Link></li>
                <li><Link to="/labs/composite" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Composite science lab →</Link></li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card">
              <h2 className="font-display text-lg font-bold text-foreground mb-3">Related planning guides</h2>
              <ul className="space-y-3">
                <li><Link to="/guides/school-laboratory-setup-checklist" className="font-body text-sm text-primary hover:underline">School laboratory setup checklist →</Link></li>
                <li><Link to="/guides/school-computer-lab-setup" className="font-body text-sm text-primary hover:underline">School computer lab setup guide →</Link></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <ContactCTA subject="school science laboratory" message="Hello TechBridge, I am planning a school science laboratory. Please help me prepare a subject-wise equipment schedule, quantities and BOQ for a quotation." />
    <Footer />
  </div>
);

export default ScienceLabEquipmentGuide;
