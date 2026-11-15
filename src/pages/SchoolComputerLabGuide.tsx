import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const sections = [
  ["requirements", "Define capacity and learning needs"],
  ["cbse", "CBSE requirements"],
  ["hardware", "Choose computers and specifications"],
  ["network", "Network, internet and power"],
  ["room", "Furniture and room layout"],
  ["software", "Software, cyber safety and access"],
  ["procurement", "Prepare the BOQ and quotation"],
  ["commission", "Install, test and hand over"],
  ["maintenance", "Operate and maintain the lab"],
  ["checklist", "Setup checklist"],
  ["faqs", "FAQs"],
];

const SchoolComputerLabGuide = () => (
  <div className="min-h-screen bg-background">
    <Navbar />

    <header className="relative overflow-hidden bg-secondary text-secondary-foreground">
      <div className="absolute inset-0 opacity-40" style={{ background: "radial-gradient(circle at 80% 10%, hsl(200 70% 50% / 0.25), transparent 38%), linear-gradient(135deg, hsl(220 20% 14%), hsl(220 18% 19%))" }} />
      <div className="container-narrow section-padding relative pt-32 pb-16 sm:pb-20">
        <nav aria-label="Breadcrumb" className="font-body text-sm text-secondary-foreground/55 mb-8">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/guides/school-laboratory-setup-checklist" className="hover:text-primary transition-colors">School Lab Setup Guide</Link>
          <span className="mx-2">/</span>
          <span className="text-secondary-foreground/80">Computer Lab Setup</span>
        </nav>
        <span className="inline-flex items-center px-3 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary text-xs font-semibold tracking-widest uppercase mb-5">
          Digital Infrastructure Planning
        </span>
        <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl mb-6">
          School Computer Lab Setup: <span className="text-gradient-warm">Equipment, Layout &amp; CBSE Requirements</span>
        </h1>
        <p className="font-body text-base sm:text-lg md:text-xl text-secondary-foreground/70 max-w-3xl leading-relaxed">
          A practical planning guide for principals, school administrators and IT coordinators. Work out workstation capacity, hardware, networking, UPS, furniture, software, cyber safety and commissioning before preparing the purchase schedule.
        </p>
        <p className="font-body text-xs text-secondary-foreground/45 mt-7">Prepared by TechBridge Solutions · Updated 15 November 2026</p>
      </div>
    </header>

    <main>
      <section className="section-padding">
        <div className="container-narrow grid lg:grid-cols-[minmax(0,1fr)_280px] gap-10 lg:gap-14 items-start">
          <article className="min-w-0">
            <div className="p-5 sm:p-6 rounded-2xl border border-border bg-card mb-10">
              <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-3">A computer lab is a complete digital environment</h2>
              <p className="font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                The computers are only one part of the setup. A working school computer laboratory also needs reliable power, a connected network, suitable desks and seating, licensed software, data backup, security controls, teacher supervision and a maintenance plan. Plan these elements together so that the room is usable on the first day of class and supportable over its life.
              </p>
            </div>

            <div className="space-y-12">
              <section id="requirements" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">1. Define capacity and learning needs before buying computers</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Start with the school's student strength, class timetable and the subjects that will use the room. A lab used for basic digital literacy may need a different configuration from one used for programming, computer science, design or assessment activities.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Record the total student strength and the classes scheduled to use the laboratory.</li>
                  <li>Estimate how many students will work at the same time and whether devices are assigned one-to-one or shared in groups.</li>
                  <li>List the applications and practical activities planned: office work, coding, research, multimedia, assessments or subject-specific software.</li>
                  <li>Inventory usable computers, monitors, peripherals, furniture, network equipment and UPS units already owned by the school.</li>
                  <li>Measure the room and check electrical capacity, internet availability, ventilation, lighting and existing cable routes.</li>
                  <li>Identify who will administer devices, manage accounts, supervise practical classes and maintain the equipment.</li>
                </ul>
                <p className="font-body text-muted-foreground leading-relaxed mt-5">
                  Turn this information into a written requirement brief. It should state the number and type of workstations, expected users, software, network design, power requirements and what can be reused. This becomes the basis for a fair comparison of supplier quotations.
                </p>
              </section>

              <section id="cbse" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">2. Check the applicable CBSE computer-lab requirements</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  CBSE issued revised digital-infrastructure norms in Circular No. 09/2025 dated 2 July 2025 and amended Clauses 4.4.1 and 4.4.3 of its Affiliation Bye-Laws on 31 July 2025. For a CBSE-affiliated school, use the dated 2025 circulars when planning the number of computer systems and lab capacity.
                </p>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <div className="font-display text-3xl font-bold text-foreground">40</div>
                    <p className="font-body text-sm text-muted-foreground mt-1">Minimum computer systems stated in the July 2025 digital-infrastructure circular</p>
                  </div>
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-5">
                    <div className="font-display text-3xl font-bold text-foreground">1 : 18</div>
                    <p className="font-body text-sm text-muted-foreground mt-1">Computer-to-student ratio in the July 2025 amendments</p>
                  </div>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  The 31 July 2025 notification amends Clause 4.4.1 to require a minimum of 40 computers and a computer-to-student ratio of 1:18. It also revises Clause 4.4.3: at least one computer lab is required for school strength up to 720 students, with one additional lab for every further group of up to 720 students. Treat the device ratio and the number of rooms as separate planning checks; confirm the school's exact affiliation category and current interpretation before finalising the BOQ.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Circular 09/2025 also specifies a single LAN network connecting the computer systems, audio-video input/output such as webcams and speakers, at least one high-configuration server for assessment or examination purposes, data backup, high-speed internet, at least two printers and two scanners per computer lab, UPS support for all computer systems, and licensed software including antivirus and other security systems.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  The CBSE infrastructure webpage currently visible online still displays the earlier 20-computer, 1:20 and 800-student figures. Those figures conflict with the later dated 2025 circulars. For workstation counts, use the subsequent 2025 circular and amendment, and check for any newer CBSE notice before procurement. The same infrastructure page lists a minimum computer-lab room size of 9 m × 6 m (approximately 600 sq. ft.) and refers to cyber-safety provisions and teacher supervision.
                </p>
                <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                  <a href="https://saras.cbse.gov.in/saras/Circulars/Circular09_2025638871555165386343.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-primary hover:underline">CBSE Circular 09/2025: Digital Infrastructure →</a>
                  <a href="https://saras.cbse.gov.in/saras/Circulars/Circular14_2025638895727139540960.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-primary hover:underline">CBSE notification dated 31 July 2025 →</a>
                  <a href="https://www.cbse.gov.in/cbsenew/infra.html" target="_blank" rel="noopener noreferrer" className="inline-flex text-sm font-semibold text-primary hover:underline">CBSE infrastructure page →</a>
                </div>
                <p className="font-body text-xs text-muted-foreground mt-5">
                  This is a planning summary, not an affiliation or compliance certificate. CBSE rules can change; the school should verify the latest applicable bye-laws, circulars and instructions with the Board before ordering equipment or modifying a building.
                </p>
              </section>

              <section id="hardware" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">3. Choose computers against the curriculum and the CBSE configuration schedule</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Select devices only after the school has listed the applications and teaching tasks. A system used for browser-based learning and basic office work may have a different workload from a machine used for programming, media work or specialist applications. The July 2025 CBSE Circular No. 09/2025 includes revised configurations in Annexure A.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border mb-5">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr><th className="p-3 font-semibold">Desktop category</th><th className="p-3 font-semibold">Configuration stated in CBSE Annexure A</th></tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr><td className="p-3 font-medium text-foreground">Operating system</td><td className="p-3">Linux is recommended. Licensed Windows 10 or above, Chrome OS or Chrome OS Flex are also listed as feasible options. The OS should not be end-of-life and must remain eligible for security updates.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Processor</td><td className="p-3">Intel Core i5 (10th generation or newer) or equivalent/above; Intel Celeron N series or higher; or MediaTek Kompanio series or higher.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Memory</td><td className="p-3">4 GB RAM and above.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Storage</td><td className="p-3">128 GB or higher internal SSD, or 1 TB internal HDD with at least 50 GB free space; the annexure also lists 32 GB eMMC/SSD or higher with at least 24 GB usable storage.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Display</td><td className="p-3">14 inches or above.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Other</td><td className="p-3">Internal or external webcam and an external hard drive for backups.</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  The circular has separate laptop and server configurations. For laptops it lists an 11.6-inch or larger display, a lock and carrying case, webcam and backup drive. For the server it specifies Linux or licensed Windows 10 or above, an Intel Core i7 with 16 GB RAM or an Intel Xeon D/E/W series with at least eight CPU cores, at least 16 GB RAM, and the storage options stated in the annexure. Review the annexure directly before writing technical specifications into a tender.
                </p>
                <p className="font-body text-muted-foreground leading-relaxed">
                  Do not quote only a processor name. Specify the exact device class, processor tier, RAM, storage, display, operating system, webcam, warranty and the software workload each system must support. Ask suppliers to identify model numbers and any substitutions in writing.
                </p>
              </section>

              <section id="network" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">4. Design the network, internet and power as one system</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  A school computer lab needs predictable connectivity and power. A fast internet plan alone does not solve a poorly designed local network or inadequate electrical capacity. Prepare a network and electrical drawing before installation.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Connect the planned computer systems through a single LAN network, as specified in CBSE Circular 09/2025.</li>
                  <li>Plan managed network switches, structured cabling, patch panels, rack space and router/firewall capacity for the actual number of devices.</li>
                  <li>Provide high-speed internet through an appropriate leased-line or Wi-Fi arrangement, with coverage and capacity tested at the workstations.</li>
                  <li>Size the UPS to support all computer systems in the lab, and confirm the expected backup duration and battery maintenance plan.</li>
                  <li>Check distribution boards, circuit protection, surge protection, earthing, socket count and cable routing with a qualified electrical professional.</li>
                  <li>Plan cloud-based or physical backup for school data and define who is responsible for restoring it.</li>
                  <li>Include the server and printers/scanners in the network and power design where required.</li>
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-5">
                  Ask the installer to label network points and electrical circuits, document the switch and rack layout, and hand over a simple network diagram. This makes future fault-finding and expansion easier.
                </p>
              </section>

              <section id="room" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">5. Plan furniture, seating and room layout</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  The CBSE infrastructure page lists a minimum computer-lab room size of 9 m × 6 m (approximately 600 sq. ft.). Within the available room, plan the desk layout around actual device count, student movement, teacher visibility and safe access to exits.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Choose single-user or shared desks based on the timetable and student grouping plan.</li>
                  <li>Keep the teacher workstation positioned to supervise screens and student activity.</li>
                  <li>Allow practical access to exits, the UPS, distribution board, rack and emergency equipment.</li>
                  <li>Provide cable management so power and data cables do not cross walking routes.</li>
                  <li>Check desk height, chair adjustment, monitor position, glare, lighting and ventilation.</li>
                  <li>Keep space for the server, printer/scanner, storage and any teaching display without blocking student circulation.</li>
                  <li>Consider accessibility and the needs of students who use assistive technologies or adapted workstations.</li>
                </ul>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-5">
                  Prepare a scaled room plan with desk dimensions, aisle widths, socket points, network outlets, teacher position and equipment locations. Verify the final layout on site before furniture is manufactured or delivered.
                </p>
              </section>

              <section id="software" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">6. Plan licensed software, device management and cyber safety</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Software should match the school's curriculum and the work students are expected to do. CBSE Circular 09/2025 calls for licensed software, including antivirus and other security systems, and its Annexure A describes device-management capabilities.
                </p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    ["Curriculum software", "Operating systems, office and productivity tools, browsers, programming environments and subject applications required by the school's syllabus."],
                    ["Licensing", "Maintain records of licence type, quantity, renewal dates, permitted users and installation rights."],
                    ["Central management", "Use device-management controls for central administration, policy enforcement and remote disable or wipe when a device is lost or stolen."],
                    ["Safe browsing", "Apply age-appropriate browsing controls and reduce exposure to phishing, suspicious sites and malicious downloads."],
                    ["Updates and protection", "Keep operating systems, browsers and security software supported and patched."],
                    ["User access", "Use named staff accounts, suitable student permissions and clear log-off practices on shared computers."],
                  ].map(([title, text]) => (
                    <div key={title} className="rounded-xl border border-border bg-card p-4">
                      <h3 className="font-display font-semibold text-foreground mb-2">{title}</h3>
                      <p className="font-body text-sm text-muted-foreground leading-relaxed">{text}</p>
                    </div>
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed mt-5">
                  CBSE's infrastructure provisions also refer to cyber-safety arrangements and student use under teacher supervision. Schools should have acceptable-use rules, supervised access, data-handling procedures and a process for reporting security incidents.
                </p>
              </section>

              <section id="procurement" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">7. Prepare an itemised BOQ and compare complete quotations</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  Avoid comparing suppliers on a single per-computer price. A complete school computer-lab project may include hardware, networking, power, furniture, software, installation, configuration and training. Each quotation should make inclusions and exclusions clear.
                </p>
                <div className="overflow-x-auto rounded-xl border border-border">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-muted text-foreground">
                      <tr><th className="p-3 font-semibold">BOQ group</th><th className="p-3 font-semibold">Items to specify</th></tr>
                    </thead>
                    <tbody className="divide-y divide-border text-muted-foreground">
                      <tr><td className="p-3 font-medium text-foreground">Computers</td><td className="p-3">Desktop/laptop/Chromebook model, processor, RAM, storage, display, webcam, keyboard, mouse and warranty.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Server and backup</td><td className="p-3">Server specification, storage/backup medium, backup responsibility and restoration process.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Network</td><td className="p-3">Switches, router/firewall, LAN cabling, patch panels, rack, outlets, internet installation and testing.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Power</td><td className="p-3">UPS capacity, batteries, sockets, distribution, protection, earthing and installation.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Peripherals and display</td><td className="p-3">Printers, scanners, webcams, speakers, projector or smart display, and required accessories.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Furniture</td><td className="p-3">Student desks, chairs, teacher desk, printer/server tables, cable trays and storage.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Software and support</td><td className="p-3">Licence details, installation, security tools, device management, configuration, training, warranty and maintenance support.</td></tr>
                      <tr><td className="p-3 font-medium text-foreground">Project services</td><td className="p-3">Site survey, delivery, assembly, cable dressing, testing, documentation, commissioning and handover.</td></tr>
                    </tbody>
                  </table>
                </div>
                <p className="font-body text-muted-foreground leading-relaxed mt-5">
                  Request model numbers, quantities, technical datasheets, warranty terms, service arrangements, delivery timelines, taxes and freight. Ask suppliers to list any work the school must arrange separately, such as civil work, air conditioning, electrical upgrades or internet service. A site survey and itemised BOQ are more reliable than a generic package price.
                </p>
              </section>

              <section id="commission" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">8. Install, test and commission before students use the lab</h2>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Verify delivered quantities, model numbers and accessories against the approved BOQ.</li>
                  <li>Check the room layout, furniture stability, cable management and access to exits.</li>
                  <li>Test every workstation, peripheral, network point, internet connection and server.</li>
                  <li>Test UPS operation and confirm that all required systems receive backup power.</li>
                  <li>Install licensed software, updates, security controls, user accounts and backup routines.</li>
                  <li>Confirm teacher supervision arrangements, student-use rules and cyber-safety settings.</li>
                  <li>Record serial numbers, asset tags, warranties, licences, passwords handover procedure and support contacts securely.</li>
                  <li>Train teachers and the designated lab administrator on routine operation and fault reporting.</li>
                </ul>
              </section>

              <section id="maintenance" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">9. Maintain the computer lab after handover</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">
                  A laboratory is not complete when the equipment is delivered. Assign clear ownership for updates, backups, inventory and support so computers remain usable throughout the academic year.
                </p>
                <ul className="list-disc pl-6 space-y-2 font-body text-sm sm:text-base text-muted-foreground leading-relaxed">
                  <li>Maintain an asset register with serial numbers, location, warranty and repair history.</li>
                  <li>Keep operating systems, browsers, applications and security tools supported and updated.</li>
                  <li>Monitor storage capacity, UPS batteries, network health and recurring faults.</li>
                  <li>Test data backups and document how files can be restored.</li>
                  <li>Review user access, software licences and student-use policies periodically.</li>
                  <li>Schedule cleaning and equipment inspection without exposing devices to liquids or unsafe handling.</li>
                  <li>Review the lab inventory before each academic year and plan replacements from actual usage data.</li>
                </ul>
              </section>

              <section id="checklist" className="scroll-mt-24">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-4">School computer lab setup checklist</h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-5">Use this summary during the planning meeting, site survey and procurement review.</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Student strength, classes and timetable documented",
                    "CBSE affiliation requirements and latest circulars reviewed",
                    "Minimum system count and 1:18 ratio checked",
                    "Lab room size and student circulation measured",
                    "Desktop, laptop or Chromebook model selected for the curriculum",
                    "Server, backup, printers and scanners included",
                    "Single LAN, internet, rack and cabling planned",
                    "UPS and electrical capacity checked",
                    "Furniture, accessibility and teacher supervision planned",
                    "Licensed software, device management and cyber safety configured",
                    "BOQ, warranty, service and exclusions compared",
                    "Testing, commissioning, handover and maintenance assigned",
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
                    <summary className="cursor-pointer font-display font-semibold text-foreground">How many computers are required in a CBSE school computer lab?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">CBSE Circular 09/2025 and the 31 July 2025 amendment state a minimum of 40 computer systems and a computer-to-student ratio of 1:18. The number of labs is addressed separately under amended Clause 4.4.3. Verify the latest circulars and the school's affiliation category before procurement.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">What is the minimum room size for a CBSE computer laboratory?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">The CBSE infrastructure page lists a minimum room size of 9 m × 6 m, approximately 600 sq. ft. Confirm the current applicable affiliation provisions and local building requirements for the school.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">Does CBSE require UPS and internet connectivity?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">CBSE Circular 09/2025 specifies high-speed internet connectivity and UPS support for all computer systems in the lab. It also calls for a single LAN network, data backup and licensed software including antivirus and other security systems.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">Can a school use laptops or Chromebooks instead of desktops?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">CBSE Circular 09/2025 includes desktops, laptops and Chromebooks in its computer-system provision. Select the device type after checking the Annexure A configuration, software compatibility, device management, charging/storage and the school's teaching requirements.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">What should a computer lab quotation include?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">A complete quotation should itemise devices, server and backup, networking, UPS and electrical work, printers and scanners, furniture, licensed software, installation, testing, training, warranty and support. It should clearly identify exclusions.</p>
                  </details>
                  <details className="group rounded-xl border border-border bg-card p-4">
                    <summary className="cursor-pointer font-display font-semibold text-foreground">How much does a school computer lab setup cost?</summary>
                    <p className="font-body text-sm text-muted-foreground leading-relaxed mt-3">There is no single reliable price for every school. Cost depends on system quantity and configuration, the room's existing electrical and network readiness, UPS capacity, furniture, software licences, installation and support. Prepare a site-specific BOQ before comparing quotations.</p>
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
              <h2 className="font-display text-lg font-bold mb-3">Related TechBridge resources</h2>
              <ul className="space-y-3">
                <li><Link to="/labs/computer" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Computer lab equipment page →</Link></li>
                <li><Link to="/guides/school-laboratory-setup-checklist" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">School laboratory setup checklist →</Link></li>
                <li><Link to="/labs/physics" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Physics lab setup →</Link></li>
                <li><Link to="/labs/chemistry" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Chemistry lab equipment →</Link></li>
                <li><Link to="/guides/science-lab-equipment-planning" className="font-body text-sm text-secondary-foreground/70 hover:text-primary transition-colors">Science lab equipment planning guide →</Link></li>
              </ul>
            </div>
            <div className="p-5 rounded-2xl border border-border bg-card">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">Planning more than one school laboratory? Start with the broader school lab checklist and compare each subject's room, equipment and safety needs.</p>
              <Link to="/guides/school-laboratory-setup-checklist" className="inline-flex mt-3 text-sm font-semibold text-primary hover:underline">Read the full school lab guide →</Link>
            </div>
          </aside>
        </div>
      </section>
    </main>

    <Footer />
  </div>
);

export default SchoolComputerLabGuide;
