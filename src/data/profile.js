export const profile = {
  name: "Umer Riaz",
  role: "Full Stack Software Engineer · Cloud Engineer · Data Scientist",
  location: "London, UK",
  email: "umer.riaz2810@gmail.com",
  github: "https://github.com/Umer-014",
  linkedin: "https://www.linkedin.com/in/muhammad-umer-riaz-u014/",
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
    id: "appleberry",
    company: "Appleberry Foods Limited",
    role: "Data Scientist",
    period: "Aug 2026 — Present",
    location: "London, UK",
    type: "Full-time",
    summary:
      "Building retail demand-forecasting and analytics experiences that connect live EPOS and stock data with manager-friendly operational decisions.",
    highlights: [
      "Built a retail demand-forecasting dashboard frontend using Vue 3, Pinia, and Vue Router, integrating REST APIs for live EPOS and stock data",
      "Connected the interface to an AWS Lambda forecasting service to present store-level demand predictions as reorder guidance",
      "Delivered sales reporting, stock-operation history, and Excel report export for store managers",
    ],
  },
  {
    id: "dgma",
    company: "DGMA Technics Ltd",
    role: "Full Stack Developer",
    period: "May 2026 — Aug 2026",
    location: "London, UK",
    type: "Contract",
    summary:
      "Designed and delivered the DGMA Technics corporate website, including company information, manufacturer pages, and product categories across land, naval, aerospace, and heavy-industry systems.",
    highlights: [
      "Built the corporate website end-to-end using React",
      "Integrated AWS-based hosting and deployment",
      "Owned UI design, implementation, responsive optimisation, and SEO",
    ],
  },
  {
    id: "ecovoltex",
    company: "Eco Voltex Ltd",
    role: "Software Developer & Technical Consultant",
    period: "Dec 2024 — Jan 2026",
    location: "London, UK",
    type: "Contract",
    summary:
      "Designed and built internal business systems and serverless cloud services, while advising on digital onboarding for marketplace and delivery platforms.",
    highlights: [
      "Built five internal systems: company website, invoicing, employee attendance, HR management, and business management",
      "Developed Node.js/Express backends using AWS Lambda and API Gateway, with MongoDB Atlas and AWS hosting services",
      "Supported merchant onboarding to Amazon, eBay, Just Eat, Uber Eats, and Deliveroo",
      "Built the Haji Saab e-commerce platform using React, Stripe, and Radar API",
    ],
  },
  {
    id: "uol",
    company: "University of Lahore — Electrical Engineering R&D",
    role: "Software Development Intern",
    period: "Jun 2024 — Sep 2024",
    location: "Lahore, Pakistan",
    type: "Internship",
    summary:
      "Contributed to research and development software in an electrical engineering environment, combining machine learning, desktop UI development, and database work.",
    highlights: [
      "Implemented a KNN-based machine learning model to predict body measurements",
      "Built a Python Tkinter GUI for data input and result visualisation",
      "Managed and optimised MySQL databases for efficient data processing",
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
