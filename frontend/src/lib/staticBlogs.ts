export interface StaticBlog {
  _id: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: string;
  readTime: string;
  date: string;
  image: string;
  content: string;
  isStatic?: boolean;
}

export const staticBlogs: StaticBlog[] = [
  {
    _id: "static-1",
    slug: "how-long-does-a-solar-panel-installation-take",
    title: "How Long Does a Solar Panel Installation Take?",
    categories: "solar panel installation",
    readTime: "7 min",
    date: "May 25, 2026",
    excerpt: "Looking for Solar Installation Near Me? Discover how long Solar Installation in Mumbai takes, including approvals, setup, and activation timelines.",
    image: "/how-long-does-a-solar-panel-installation-take.png",
    content: `
      <h2>Understanding the Solar Installation Timeline</h2>
      <p>Switching to solar energy is a significant step toward sustainability and cost savings. One of the most common questions homeowners and business owners ask is: <strong>How long does a solar panel installation take?</strong></p>
      <p>While the physical installation of solar panels on your roof might only take a few days, the entire process—from the initial consultation to the final grid connection (activation)—involves several stages.</p>
      
      <h3>1. Consultation and Site Assessment (1-3 Days)</h3>
      <p>Before any work begins, solar engineering experts must evaluate your property. They check the roof's health, angle, shading, and structural integrity to ensure it can support solar panels. They also review your electrical panel and energy usage history to design the optimal system size.</p>

      <h3>2. System Design and Permitting (2-4 Weeks)</h3>
      <p>This is often the most time-consuming phase. Engineers create a customized blueprint of your solar system. This design is then submitted to local authorities and discoms (electricity distribution companies) in Mumbai for necessary permits and approvals. In Mumbai, obtaining net metering approvals and structural clearances requires coordination with local discoms like Tata Power, Adani Electricity, or MSEDCL.</p>

      <h3>3. Physical Installation (1-3 Days)</h3>
      <p>The exciting part! Once the permits are secured, the installation team arrives. They install the racking (mounting structures), place the panels, set up the inverter, and perform the wiring. For typical residential systems, this takes just 1 to 2 days. Larger commercial systems may take up to a week.</p>

      <h3>4. Inspection and Net Metering Activation (1-3 Weeks)</h3>
      <p>After installation, the system cannot be turned on immediately. A local authority inspector must verify that the installation complies with electrical and safety codes. Once approved, the utility company installs a bi-directional net meter, allowing you to feed excess solar power back into the grid. Finally, your system is commissioned and activated!</p>

      <p>In total, you can expect the entire process to take anywhere from <strong>4 to 8 weeks</strong>, with the physical setup taking only a tiny fraction of that time.</p>
    `,
    isStatic: true
  },
];
