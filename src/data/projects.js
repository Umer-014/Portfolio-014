export const categories = ["All", "Software Development", "Cloud", "Machine Learning", "Data Visualization"];

export const projects = [
  {
    slug: "rideshare-fyp",
    name: "RideShare",
    tagline: "A full Uber/Careem-style ride-hailing platform, built solo as a Final Year Project.",
    year: "2024–2025",
    role: "Sole Developer",
    status: "ACADEMIC — GRADE A",
    categories: ["Software Development"],
    cover: { icon: "map", gradient: "from-violet to-cyan" },
    techStack: ["React Native", "Node.js", "Express.js", "MongoDB", "Google Maps API", "Socket.io", "JWT Auth"],
    overview:
      "RideShare is a complete ride-hailing system covering both sides of the marketplace: riders booking trips and drivers fulfilling them, with an admin layer to run the business in between. Built end-to-end for my final year project, it mirrors the core mechanics of apps like Uber and Careem rather than a simplified classroom version.",
    problem:
      "Most student ride-sharing projects stop at a booking form. The brief I set myself was harder: two live mobile apps that need to agree, in real time, on where a car is, whether a rider has been picked up, and how much the trip costs — all while staying in sync through a single backend.",
    solution:
      "I split the system into three surfaces sharing one API: a passenger app for booking and tracking, a driver app for accepting rides and updating location, and an admin dashboard for oversight. A Node.js/Express backend handles auth, ride state, and location updates, with MongoDB storing users, rides, and driver positions. Live location moves over Socket.io so both apps see the same trip update within a second of it happening.",
    architecture:
      "Passenger App and Driver App (React Native) → REST + WebSocket API (Node.js/Express) → MongoDB. A ride-matching service assigns nearby drivers; a location service streams GPS pings from the driver app, fans them out over Socket.io to the passenger app, and persists trip history to MongoDB.",
    features: [
      "Passenger booking flow with fare estimate before confirming",
      "Live driver location tracking on the passenger's map during a trip",
      "Driver app with accept/reject and turn-by-turn pickup routing",
      "Admin dashboard for monitoring active rides, drivers, and users",
      "JWT-based authentication for both rider and driver accounts",
      "Ride history and basic fare/payment workflow",
    ],
    challenges: [
      "Keeping two independently-running mobile apps consistent on ride state without a shared client store — solved with the backend as the single source of truth and short-poll fallbacks around the socket connection.",
      "Google Maps API rate limits during testing, which pushed me to cache route calculations and only re-request when a driver's position moved past a distance threshold.",
      "Battery drain from continuous GPS polling on the driver app, addressed by adjusting location update frequency based on trip state (idle vs. en route).",
    ],
    results: [
      "Delivered a working three-app system (passenger, driver, admin) as a solo build within the FYP timeline",
      "Achieved sub-second location propagation between driver and passenger apps in testing",
      "Graded as a top final year project for technical completeness",
    ],
    future: [
      "Add a proper payment gateway (Stripe) instead of the current cash/manual settlement flow",
      "Introduce driver ratings and a dispute-resolution flow in the admin dashboard",
      "Move location updates to a lighter protocol for battery efficiency at scale",
    ],
  },
  {
    slug: "ecovoltex-systems",
    name: "EcoVoltex Internal Systems Suite",
    tagline: "Company website, invoicing, attendance, HR, and business management — built and maintained as ongoing contract work.",
    year: "Dec 2024 — Present",
    role: "Software Developer & Technical Consultant",
    status: "DEPLOYED — LIVE",
    categories: ["Software Development", "Cloud"],
    cover: { icon: "server", gradient: "from-cyan to-mint" },
    techStack: ["React.js", "Node.js", "Express.js", "MongoDB Atlas", "AWS Lambda", "API Gateway", "Route 53", "S3", "AWS Amplify"],
    overview:
      "Since December 2024 I've been EcoVoltex's software developer and technical consultant, designing and building the internal tools the company runs on day to day: its public website, an invoice management system, an employee attendance system, an HR management system, and a broader internal business management system.",
    problem:
      "EcoVoltex needed to move off manual, spreadsheet-driven processes for invoicing, attendance, and HR without hiring a full internal engineering team — everything had to be built, deployed, and kept running by one contractor working directly with the business.",
    solution:
      "I designed each system as a React front end talking to a serverless Node.js/Express backend on AWS Lambda and API Gateway, with MongoDB Atlas for data. Static assets and the company website deploy through AWS Amplify and S3, with Route 53 handling DNS. Treating each internal tool as its own deployable service let me ship and update them independently as EcoVoltex's needs changed.",
    architecture:
      "React front ends (company site, invoicing, attendance, HR, business management) → API Gateway → AWS Lambda (Node.js/Express) → MongoDB Atlas. Static hosting via AWS Amplify + S3, DNS via Route 53.",
    features: [
      "Public company website with content sections for services and contact",
      "Invoice management system for creating, tracking, and exporting invoices",
      "Employee attendance system with daily check-in/out records",
      "HR management system for employee records and basic workflows",
      "Internal business management system tying the above together for admin oversight",
      "Serverless deployment so EcoVoltex pays for usage, not idle servers",
    ],
    challenges: [
      "Balancing scope across five distinct systems as a solo contractor — prioritised by working directly with EcoVoltex to sequence delivery by business impact.",
      "Keeping serverless cold-starts from affecting day-to-day usability, addressed by tuning Lambda memory allocation and trimming dependencies per function.",
      "Designing MongoDB schemas that could evolve as EcoVoltex's HR and invoicing needs changed, without breaking existing records.",
    ],
    results: [
      "Five internal systems designed, built, and deployed as a single ongoing engagement",
      "Moved EcoVoltex's invoicing and attendance tracking off manual processes",
      "Serverless architecture keeps infrastructure costs aligned with actual usage",
    ],
    future: [
      "Add role-based dashboards so managers and staff see tailored views",
      "Integrate the attendance system with payroll calculations directly",
      "Layer in basic analytics across invoicing and attendance data",
    ],
  },
  {
    slug: "earthquake-prediction",
    name: "Earthquake Magnitude Prediction",
    tagline: "Predicting earthquake magnitude from historical seismic and geological plate data.",
    year: "2026",
    role: "MSc Machine Learning Project",
    status: "ACADEMIC",
    categories: ["Machine Learning"],
    cover: { icon: "activity", gradient: "from-rose to-amber" },
    techStack: ["Python", "Pandas", "NumPy", "Scikit-learn", "Feature Engineering"],
    overview:
      "An MSc project applying supervised machine learning to historical earthquake records and tectonic plate data to predict earthquake magnitude, built as part of the Data Science & Analytics programme at Brunel University London.",
    problem:
      "Raw seismic datasets mix location, depth, plate boundary type, and time into a form that isn't directly usable by a model — the challenge was turning geological and historical earthquake data into features that actually carry predictive signal for magnitude.",
    solution:
      "I built a pipeline that cleans historical earthquake records, joins them against geological plate boundary information, and engineers features such as proximity to plate boundaries and historical local seismicity. Several regression models were trained and compared using Scikit-learn, with performance evaluated on held-out data before selecting the best-performing approach.",
    architecture:
      "Raw earthquake + plate datasets → Pandas cleaning & joining → feature engineering (plate proximity, historical activity) → Scikit-learn model training & cross-validation → evaluation against held-out test data.",
    features: [
      "Data cleaning pipeline for historical earthquake records",
      "Feature engineering combining seismic and geological plate data",
      "Multiple regression models trained and compared",
      "Performance evaluation using standard regression metrics",
      "Magnitude prediction from historical seismic patterns",
    ],
    challenges: [
      "Class imbalance toward smaller, more frequent earthquakes, which skewed early models toward underestimating large-magnitude events — addressed with targeted feature engineering and evaluation metrics sensitive to larger errors.",
      "Merging geological plate boundary data with point-based earthquake records required care to avoid introducing location-matching errors.",
    ],
    results: [
      "Built a working magnitude-prediction pipeline from raw seismic and geological data",
      "Compared multiple models to identify the strongest predictor of magnitude for this dataset",
      "Delivered as a complete MSc coursework project with full evaluation",
    ],
    future: [
      "Incorporate deep learning approaches for spatial-temporal seismic patterns",
      "Expand the dataset with real-time seismic feeds",
      "Package the pipeline as a reusable tool for other regional datasets",
    ],
  },
  {
    slug: "crime-dashboard",
    name: "Crime Analysis Executive Dashboard",
    tagline: "An interactive dashboard giving senior police officers a single view of crime trends across their area.",
    year: "2026",
    role: "MSc Data Visualization Project",
    status: "ACADEMIC",
    categories: ["Data Visualization"],
    cover: { icon: "bar-chart", gradient: "from-cyan to-violet" },
    techStack: ["Tableau", "Power BI", "Data Cleaning", "KPI Design"],
    overview:
      "A data visualization project built for the MSc programme: an executive dashboard designed for a Chief Officer to monitor crime rates, categories, and trends across an area and make faster, better-supported decisions.",
    problem:
      "Crime data is detailed but rarely presented in a way senior officers can act on quickly — the goal was to compress crime categories, monthly trends, area breakdowns, and case outcomes into a small set of views a Chief Officer could scan in minutes, not hours.",
    solution:
      "I designed a KPI-first dashboard in Tableau and Power BI that leads with headline numbers — overall crime rate, solved vs unsolved — then lets the officer drill into category, monthly trend, and area-level hotspot views through interactive filtering, without needing to touch a spreadsheet.",
    architecture:
      "Cleaned crime records → data model (category, area, date, outcome) → Power BI/Tableau dashboard with linked filters across KPI cards, trend charts, category breakdowns, and area hotspot views.",
    features: [
      "Top-level KPI cards for overall crime rate and solved/unsolved split",
      "Monthly trend charts by crime category",
      "Area-wise breakdown with hotspot visualisation",
      "Interactive filtering that updates all views together",
      "Designed specifically for a non-technical, decision-making audience",
    ],
    challenges: [
      "Avoiding dashboard clutter while still surfacing enough detail for real decisions — resolved by establishing a clear KPI-first hierarchy before adding any drill-down views.",
      "Cleaning inconsistent category labels across source data so trend charts weren't misleading.",
    ],
    results: [
      "Delivered a dashboard usable by a non-technical senior stakeholder without training",
      "Reduced the time to answer 'what changed this month?' from spreadsheet lookups to a single glance",
    ],
    future: [
      "Add predictive crime-trend forecasting alongside the historical views",
      "Extend to a live data feed instead of static extracts",
    ],
  },
  {
    slug: "hpc-distributed-ml",
    name: "Distributed Machine Learning on HPC",
    tagline: "Scaling machine learning training across distributed cloud infrastructure using Dask.",
    year: "2026",
    role: "MSc High Performance Computing Project",
    status: "ACADEMIC",
    categories: ["Cloud", "Machine Learning"],
    cover: { icon: "cpu", gradient: "from-violet to-mint" },
    techStack: ["Python", "Dask", "Distributed Computing", "Cloud Infrastructure", "Parallel Processing"],
    overview:
      "A High Performance Computing project exploring how machine learning training scales when moved from a single machine to distributed, parallel infrastructure using Dask on cloud resources.",
    problem:
      "Training larger models or working with bigger datasets hits a wall on a single machine — the project's goal was to measure and understand how distributed computing techniques actually change training time and resource usage, not just claim they help.",
    solution:
      "I implemented machine learning workflows using Dask to distribute data processing and model training across multiple workers, benchmarking performance against a single-machine baseline and tuning partitioning strategy to reduce overhead from data shuffling between workers.",
    architecture:
      "Dataset partitioned across a Dask cluster → parallel preprocessing on each worker → distributed model training with periodic synchronization → results aggregated and benchmarked against single-machine baseline.",
    features: [
      "Distributed data preprocessing across multiple workers",
      "Parallelised model training using Dask",
      "Benchmarking against single-machine performance",
      "Analysis of scaling efficiency and overhead",
    ],
    challenges: [
      "Naive partitioning created uneven load across workers — addressed by re-partitioning based on data size rather than row count.",
      "Communication overhead between workers ate into gains at higher worker counts, which shaped the final analysis on where distribution actually pays off.",
    ],
    results: [
      "Quantified real speedup from distributed training versus a single-machine baseline",
      "Identified the point at which added workers stopped improving performance due to overhead",
    ],
    future: [
      "Test against GPU-accelerated distributed frameworks for comparison",
      "Apply the same approach to a production-scale dataset",
    ],
  },
  {
    slug: "haji-saab-ecommerce",
    name: "Haji Saab E-Commerce Platform",
    tagline: "A complete enterprise e-commerce platform for a halal products business, from catalogue to secure payments.",
    year: "2025",
    role: "Full Stack Developer",
    status: "DEPLOYED — LIVE",
    categories: ["Software Development", "Cloud"],
    cover: { icon: "shopping-cart", gradient: "from-amber to-rose" },
    techStack: ["React.js", "Node.js", "AWS Lambda", "API Gateway", "MongoDB", "S3", "AWS Amplify", "Stripe", "Radar API"],
    overview:
      "A full commercial build for Haji Saab, a halal products business: a customer-facing store with catalogue, cart, and checkout, backed by admin tooling to manage products, orders, and inventory.",
    problem:
      "The business needed a real e-commerce operation — not just a storefront, but secure payments, order management, and inventory tracking — built and deployed as a production system for actual customers.",
    solution:
      "I built a responsive React storefront covering catalogue browsing, cart, and checkout, backed by serverless Node.js APIs on AWS Lambda and API Gateway. Stripe handles payments and the Radar API supports location-based features, with MongoDB storing products, orders, and customers, and S3/Amplify serving the deployed front end.",
    architecture:
      "React storefront + customer/admin dashboards → API Gateway → AWS Lambda (Node.js) → MongoDB. Stripe for payment processing, Radar API for location features, S3 + Amplify for hosting.",
    features: [
      "Product catalogue with browsing and search",
      "Shopping cart and multi-step checkout",
      "Stripe-secured payment processing",
      "Customer dashboard for order tracking",
      "Admin dashboard for product, order, and inventory management",
      "Cloud-native deployment on AWS",
    ],
    challenges: [
      "Handling inventory correctly under concurrent orders — resolved with atomic stock updates at the database layer instead of read-then-write logic.",
      "Integrating Stripe and Radar into a single checkout flow without adding noticeable latency for the customer.",
    ],
    results: [
      "Delivered a live, customer-facing e-commerce platform for a real business",
      "Order, inventory, and payment flows running in production",
    ],
    future: [
      "Add personalised product recommendations based on order history",
      "Extend admin dashboard with sales analytics",
    ],
  },
  {
    slug: "ai-stock-prediction",
    name: "AI Stock Prediction & Inventory System",
    tagline: "Machine learning that tells five stores what to stock next week — and generates the purchase order automatically.",
    year: "2025",
    role: "ML Engineer & Full Stack Developer",
    status: "DEPLOYED — 5 STORES",
    categories: ["Machine Learning", "Software Development"],
    cover: { icon: "trending-up", gradient: "from-mint to-cyan" },
    techStack: ["Python", "Pandas", "Scikit-learn", "Predictive Analytics", "Node.js"],
    overview:
      "An AI-powered inventory planning system that analyses historical and weekly sales, product trends, and seasonal demand to predict what each store will sell next — and how much to order — deployed live across five stores.",
    problem:
      "Store managers were ordering stock on instinct and past habit, leading to both overstock and stockouts. The business needed a system that could turn sales history into a concrete, trustworthy purchase recommendation without requiring a data analyst on staff.",
    solution:
      "I built a predictive pipeline that ingests historical and weekly sales data, engineers features around product trends and seasonality, and forecasts next-week demand per product per store. The output feeds directly into an automated purchase-order generator, so managers receive a ready-to-approve order rather than a raw forecast.",
    architecture:
      "Store sales data → feature engineering (trend, seasonality) → per-store demand forecasting model → quantity recommendation engine → automated purchase order generation → store manager review.",
    features: [
      "Weekly demand prediction per product per store",
      "Automatic quantity recommendations based on forecast",
      "Auto-generated purchase orders ready for manager approval",
      "Seasonal and trend-aware forecasting",
      "Deployed and running across five live store locations",
    ],
    challenges: [
      "Sparse sales history for slower-moving products made forecasting unreliable at first — addressed by blending category-level trends with product-level history for low-volume items.",
      "Getting store managers to trust an automated purchase order meant the system needed to explain, not just output, its recommended quantities.",
    ],
    results: [
      "Live in production across five stores, generating automated purchase orders",
      "Reduced manual guesswork in weekly ordering decisions",
    ],
    future: [
      "Add manager feedback loop so overridden recommendations retrain the model",
      "Expand to cross-store stock transfer recommendations",
    ],
  },
  {
    slug: "sipup-analytics",
    name: "SipUp Retail Analytics & Inventory Platform",
    tagline: "A retail analytics platform bringing sales, inventory movements, and store performance into one operational view.",
    year: "2026",
    role: "Software Developer",
    status: "DEPLOYED — LIVE",
    categories: ["Software Development", "Data Visualization"],
    externalUrl: "https://analytics.sipup.co.uk/",
    cover: { icon: "bar-chart", gradient: "from-cyan to-mint" },
    techStack: ["React", "Analytics Dashboards", "Inventory Management", "Data Reporting", "Excel Export"],
    overview: "SipUp is a retail analytics and inventory platform designed to help teams review sales activity, monitor stock, and make operational decisions using a centralised view of business data.",
    problem: "Retail operations can become difficult to oversee when sales activity, stock adjustments, and store-level reporting are spread across separate workflows.",
    solution: "The platform brings key operational information into a single interface, helping users review sales performance, follow inventory changes, and export reports for further analysis.",
    architecture: "Retail and EPOS data → application data layer → analytics and inventory views → reporting and export",
    features: [
      "Sales reporting and store-level performance views",
      "Inventory visibility and stock adjustment history",
      "EPOS transaction review",
      "Operational reporting with Excel export",
      "A central workspace for day-to-day retail analysis"
    ],
    challenges: [
      "Presenting operational data clearly so users can move between sales and stock workflows without losing context.",
      "Making reports useful for day-to-day decisions while keeping the interface approachable for non-technical users."
    ],
    results: [
      "Delivered a live analytics platform for reviewing retail sales and inventory information.",
      "Consolidated key reporting workflows into a single interface."
    ],
    future: [
      "Add role-based reporting views for different store responsibilities.",
      "Expand trend analysis and forecasting as validated data and requirements become available."
    ]
  },
  {
    slug: "whisky-circle-ecommerce",
    name: "The Whisky Circle E-Commerce Platform",
    tagline: "An e-commerce experience supported by cloud APIs and customer-facing shopping workflows.",
    year: "2026",
    role: "Web Developer",
    status: "DEPLOYED — STAGING",
    categories: ["Software Development", "Cloud"],
    externalUrl: "https://stage.whiskycircle.co.uk/",
    cover: { icon: "shopping-cart", gradient: "from-amber to-violet" },
    techStack: ["React", "Node.js", "AWS Lambda", "API Gateway", "MongoDB", "Stripe"],
    overview: "The Whisky Circle is an e-commerce website project with a customer-facing storefront and supporting backend services, developed with a modern React and cloud-oriented stack.",
    problem: "An online store needs a coherent browsing and checkout experience while coordinating product information and backend services reliably.",
    solution: "The project combines a responsive React storefront with API-driven backend functionality and a database-backed application layer. The current public link is a staging deployment, so it is labelled accordingly.",
    architecture: "React storefront → API Gateway → AWS Lambda services → MongoDB, with payment integration handled through Stripe where enabled",
    features: [
      "Responsive storefront and product browsing",
      "API-backed application workflows",
      "Cloud-hosted backend services",
      "Database-backed product and application data",
      "Staging deployment for review and iteration"
    ],
    challenges: [
      "Keeping the customer-facing experience consistent while the application is developed across frontend and backend services.",
      "Coordinating external integrations carefully so payment and order workflows can be tested before production release."
    ],
    results: [
      "Published a staging website for review at stage.whiskycircle.co.uk.",
      "Established a foundation for a cloud-backed e-commerce experience."
    ],
    future: [
      "Complete end-to-end checkout and order-flow verification before production release.",
      "Add verified screenshots and measurable outcomes once the production workflow is confirmed."
    ]
  },
  {
    slug: "dgma-technics",
    name: "DGMA Technics Corporate Website",
    tagline: "A corporate website and product catalogue for an official representative of international defence manufacturers.",
    year: "2025",
    role: "Web Developer",
    status: "DEPLOYED — LIVE",
    categories: ["Software Development"],
    cover: { icon: "shield", gradient: "from-ink-faint to-cyan" },
    techStack: ["React.js", "SEO Optimisation", "Responsive Design"],
    overview:
      "The complete corporate website for DGMA Technics, an official representative of international defence manufacturers spanning land systems, naval systems, aerospace, and heavy industry equipment.",
    problem:
      "As a representative for multiple manufacturers across very different equipment categories, DGMA needed a site that could present land, naval, aerospace, and heavy industry product lines clearly to enquiring clients, while capturing and routing enquiries properly.",
    solution:
      "I structured the site around clear manufacturer and product-category pages, with a dedicated enquiry management flow so customer questions reach the right contact. SEO optimisation and fully responsive layouts were built in from the start, given the international, cross-device audience.",
    architecture:
      "React front end with category-based routing (Land / Naval / Aerospace / Heavy Industry) → enquiry form → contact management flow → responsive, SEO-optimised delivery.",
    features: [
      "Corporate homepage and company overview",
      "Product catalogue organised by manufacturer and category",
      "Manufacturer-specific pages for land, naval, aerospace, and heavy industry systems",
      "Enquiry management with structured contact forms",
      "SEO optimisation and full responsive design",
    ],
    challenges: [
      "Presenting highly technical, category-diverse product lines (naval vs. aerospace vs. land systems) in a single coherent structure without the site feeling fragmented.",
      "Balancing a professional, defence-industry tone with genuine usability for enquiry capture.",
    ],
    results: [
      "Delivered a live corporate site covering all of DGMA's manufacturer relationships",
      "Structured enquiry flow now routes customer contact requests directly",
    ],
    future: [
      "Add a client portal for tracking enquiry status",
      "Expand SEO content per product category",
    ],
  },
];

export const getProjectBySlug = (slug) => projects.find((p) => p.slug === slug);
