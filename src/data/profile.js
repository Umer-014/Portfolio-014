export const profile = {
  name: "Umer Riaz",
  role: "Full Stack Software Engineer · Cloud Engineer · Data Scientist",
  location: "London, UK",
  email: "umer.riaz2810@gmail.com",
  github: "https://github.com/Umer-014",
  linkedin: "https://linkedin.com/in/umer-riaz",
  resumeUrl: "/resume.pdf",
  tagline:
    "I build systems that ship — from ride-hailing platforms to cloud-deployed inventory AI — and I'm currently finishing an MSc in Data Science while consulting on production software.",
  bio: [
    "I'm a software engineer working across full-stack development, cloud infrastructure, and applied machine learning. My final year project was a complete ride-hailing platform; since then I've shipped production systems for real businesses — internal tooling for EcoVoltex, a live e-commerce platform, and an AI inventory system currently running across five stores.",
    "I'm currently completing an MSc in Data Science & Analytics at Brunel University London, layering statistical rigor and ML engineering on top of the full-stack and cloud foundation I built during my Computer Engineering degree at COMSATS University Islamabad.",
  ],
};

export const stats = [
  { label: "years shipping code", value: 2.5, suffix: "+" },
  { label: "production systems deployed", value: 8, suffix: "" },
  { label: "stores running live AI inventory", value: 5, suffix: "" },
  { label: "cloud services used", value: 6, suffix: "+" },
];

export const experience = [
  {
    id: "ecovoltex",
    company: "EcoVoltex",
    role: "Software Developer & Technical Consultant",
    period: "Dec 2024 — Present",
    location: "Remote / London, UK",
    type: "Freelance / Contract",
    summary:
      "Designing and building EcoVoltex's internal systems — company website, invoicing, attendance, HR, and business management — on a serverless AWS stack, alongside technical consulting on onboarding clients to marketplace and delivery platforms.",
    highlights: [
      "Shipped 5 internal systems: company site, invoicing, attendance, HRM, business management",
      "Built serverless backends on AWS Lambda, API Gateway, and MongoDB Atlas",
      "Consulting on onboarding merchants to Amazon, eBay, Just Eat, Uber Eats, and Deliveroo",
    ],
  },
  {
    id: "uol",
    company: "UOL Electrical Engineering",
    role: "Software Development Intern, R&D",
    period: "Jan 2024 — Jul 2024",
    location: "On-site",
    type: "Internship",
    summary:
      "Worked within the R&D division on internal software tooling, applying core software engineering practice inside an electrical engineering context.",
    highlights: [
      "Contributed to internal R&D software tooling",
      "First professional exposure to engineering-driven software requirements",
    ],
  },
];

export const education = [
  {
    id: "brunel",
    institution: "Brunel University London",
    degree: "MSc Data Science & Analytics (with Placement)",
    period: "Jan 2026 — Present",
    detail:
      "Coursework spanning machine learning, high performance computing, and data visualization — including an earthquake magnitude prediction model, a distributed ML pipeline on Dask, and an executive crime-analysis dashboard built in Tableau and Power BI. Actively pursuing a compulsory placement in data science or combined data science/software development.",
  },
  {
    id: "comsats",
    institution: "COMSATS University Islamabad",
    degree: "BSc Computer Engineering (Software Development specialisation)",
    period: "2021 — 2025",
    detail:
      "Final year project: RideShare, a complete ride-hailing platform with passenger and driver apps, live location tracking, and an admin dashboard — built solo end to end.",
  },
];

export const skillGroups = [
  {
    label: "Frontend",
    skills: [
      { name: "React.js", level: 92 },
      { name: "React Native", level: 82 },
      { name: "Vue.js / Vite", level: 80 },
      { name: "Tailwind CSS", level: 88 },
      { name: "JavaScript", level: 90 },
    ],
  },
  {
    label: "Backend & Cloud",
    skills: [
      { name: "Node.js / Express", level: 90 },
      { name: "AWS (Lambda, API Gateway, S3, Amplify)", level: 85 },
      { name: "MongoDB / MongoDB Atlas", level: 87 },
      { name: "MySQL / SQL", level: 78 },
      { name: "Firebase", level: 75 },
    ],
  },
  {
    label: "Data Science & ML",
    skills: [
      { name: "Python", level: 88 },
      { name: "Pandas / NumPy", level: 85 },
      { name: "Scikit-learn", level: 80 },
      { name: "Tableau / Power BI", level: 78 },
      { name: "Dask / Distributed Computing", level: 70 },
    ],
  },
  {
    label: "Tools & Practice",
    skills: [
      { name: "Git / GitHub", level: 90 },
      { name: "REST API Design", level: 88 },
      { name: "C / C++", level: 74 },
      { name: "Postman", level: 82 },
      { name: "VS Code", level: 95 },
    ],
  },
];

export const certifications = [
  {
    title: "AWS Cloud Practitioner Essentials",
    issuer: "Amazon Web Services (Self-directed)",
    note: "Applied directly across EcoVoltex and commercial project deployments.",
  },
  {
    title: "Data Science & Analytics (In Progress)",
    issuer: "Brunel University London",
    note: "MSc coursework in ML, HPC, and data visualization.",
  },
  {
    title: "BSc Computer Engineering",
    issuer: "COMSATS University Islamabad",
    note: "Software development specialisation, graduated 2025.",
  },
];

export const testimonials = [
  {
    name: "Placeholder — Client Reference",
    role: "Business Owner, EcoVoltex",
    quote:
      "Testimonial pending — reach out for a direct reference on the EcoVoltex engagement.",
  },
  {
    name: "Placeholder — Academic Reference",
    role: "Brunel University London",
    quote: "Testimonial pending — available on request.",
  },
];

export const blogPlaceholder = [
  { title: "Building a serverless internal tools suite on AWS", status: "Coming soon" },
  { title: "What distributed ML on Dask actually buys you", status: "Coming soon" },
  { title: "Shipping an inventory-forecasting model to 5 stores", status: "Coming soon" },
];
