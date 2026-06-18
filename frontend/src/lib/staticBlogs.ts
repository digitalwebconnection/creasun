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
    image: "/static_blog1.jpg",
    content: `
      <h2>Understanding the Solar Installation Timeline with Creasun Energy</h2>
      <p>Switching to solar energy is a significant step toward sustainability and long-term cost savings. If you are looking for top-tier solar installation, one of the most common questions you might have is: <strong>How long does a solar panel installation take?</strong></p>
      <p>At <strong>Creasun Energy</strong>, we believe in complete transparency. While the physical installation of our high-efficiency solar modules on your roof might only take a few days, the entire process—from the initial consultation to the final grid connection and smart-app activation—involves several critical stages.</p>
      
      <h3>1. Consultation and High-Tech Site Assessment (1-3 Days)</h3>
      <p>Before any work begins, Creasun Energy's solar engineering experts evaluate your property. Using advanced site-surveying techniques and 3D modeling software, we check the roof's health, sun trajectory, shading impact, and structural integrity. We also review your electrical panel to design a system customized for maximum yield.</p>

      <h3>2. Smart System Design and Permitting (2-4 Weeks)</h3>
      <p>This is often the most time-consuming phase, but our team handles it entirely for you. Our engineers design a customized blueprint incorporating next-gen tech—like high-efficiency Monocrystalline PERC or TopCon panels and intelligent smart inverters. We then submit this design to local authorities and discoms (like Tata Power, Adani Electricity, or MSEDCL) to secure your net metering approvals and structural clearances.</p>

      <h3>3. Physical Installation & IoT Integration (1-3 Days)</h3>
      <p>The exciting part! Once permits are secured, the Creasun installation team arrives. We install premium, weather-resistant mounting structures, mount the solar panels, and set up the smart inverter system. More importantly, we integrate IoT-enabled energy monitoring that connects directly to your home Wi-Fi, allowing you to track your solar generation in real-time via a mobile app. For typical residential systems, this takes just 1 to 2 days.</p>

      <h3>4. Inspection and Net Metering Activation (1-3 Weeks)</h3>
      <p>After our seamless installation, a local authority inspector verifies that the system complies with all electrical and safety codes. Once approved, the utility company installs a bi-directional net meter. This meter allows you to feed excess solar power back into the grid, earning you credits.</p>

      <p>In total, you can expect the entire process to take anywhere from <strong>4 to 8 weeks</strong>, with the physical setup taking only a tiny fraction of that time. <strong>Creasun Energy</strong> ensures this transition is smooth, tech-forward, and hassle-free, empowering you to take control of your energy future today.</p>
    `,
    isStatic: true
  },
];
