export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  techStack: string[];
  metrics: string;
  gradient: string;
  iconName: string;
  details: {
    overview: string;
    architecture: string;
    timeline: string;
    outcomes: string[];
  };
}

export interface IndustryItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  overview: string;
  painPoints: string[];
  solution: string;
  agentsDeployed: string[];
  sampleMetric: string;
  iconName: string;
  useCases: {
    title: string;
    description: string;
  }[];
}

export interface CaseStudy {
  id: string;
  title: string;
  industry: string;
  service: string;
  category: string;
  summary: string;
  problem: string;
  solution: string;
  technology: string[];
  results: {
    metric: string;
    label: string;
  }[];
  image?: string;
}

export interface PricingPlan {
  name: string;
  badge?: string;
  priceTag?: string;
  description: string;
  timeline: string;
  features: string[];
  idealFor: string;
  ctaText: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  industry: string;
  quote: string;
  metric: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Security & IP' | 'Architecture' | 'Delivery & Cost';
}

export const COMPANY_INFO = {
  name: "Nexovira AI Solution",
  tagline: "Autonomous Enterprise Software & AI Engineering",
  shortDesc: "We build production-grade custom software, autonomous AI agents, enterprise CRM & ERP systems, and scalable digital transformation architectures with zero vendor lock-in.",
  email: "info@nexoviraai.com",
  stats: [
    { value: "48+", label: "Enterprise Deployments" },
    { value: "< 140ms", label: "Average Agent Response" },
    { value: "99.6%", label: "Pipeline Task Precision" },
    { value: "3.6x", label: "Operational Velocity Gain" },
  ],
};

export const SERVICES: ServiceItem[] = [
  {
    id: "ai-solutions",
    title: "AI Solutions",
    category: "Artificial Intelligence",
    subtitle: "Custom neural models, predictive systems, and fine-tuned LLM architectures",
    description: "End-to-end applied AI engineering. We integrate open and frontier LLMs, specialized embeddings, semantic search, and predictive scoring engines directly into your core business operations.",
    deliverables: [
      "Custom Retrieval-Augmented Generation (RAG) across proprietary knowledge bases",
      "Specialized classification, extraction, and anomaly detection algorithms",
      "Model fine-tuning, latency optimization, and self-hosted inference runtimes",
      "Guardrails, zero-data-retention compliance, and hallucination containment"
    ],
    techStack: ["Google GenAI", "OpenAI API", "LangGraph", "PyTorch", "vLLM", "Pinecone", "Python"],
    metrics: "99.4% task precision across enterprise evaluation benchmarks",
    gradient: "from-cyan-500/20 to-blue-600/20",
    iconName: "Sparkles",
    details: {
      overview: "Nexovira designs and deploys custom AI solutions that solve deterministic enterprise challenges. From intelligent document reasoning to continuous predictive maintenance, our models operate with mathematical precision.",
      architecture: "Hybrid semantic search with dense vector indexing, contextual reranking, and private model gateways running inside your secure VPC.",
      timeline: "3 to 6 weeks for production rollout",
      outcomes: [
        "Elimination of manual repetitive cognitive tasks across operations",
        "Deterministic outputs protected by automated semantic guardrails",
        "Private VPC deployment ensuring enterprise data never trains public models"
      ]
    }
  },
  {
    id: "software-development",
    title: "Software Development",
    category: "Engineering",
    subtitle: "High-performance distributed backend services and enterprise software systems",
    description: "Robust, fault-tolerant custom software built from clean architectural blueprints. We design resilient microservices, transactional databases, and event-driven backends that easily scale to millions of requests.",
    deliverables: [
      "High-throughput REST, gRPC, and GraphQL API microservices",
      "Event-driven messaging architectures with Kafka and RabbitMQ",
      "Relational & analytical database optimization (PostgreSQL, Redis)",
      "Automated CI/CD pipelines, containerization, and Kubernetes deployments"
    ],
    techStack: ["Node.js", "TypeScript", "Python / FastAPI", "PostgreSQL", "Docker", "Redis", "AWS / GCP"],
    metrics: "Sub-50ms p95 API response times under high-concurrency loads",
    gradient: "from-blue-600/20 to-cyan-500/20",
    iconName: "Cpu",
    details: {
      overview: "We architect scalable software systems that eliminate technical debt before it starts. Every codebase features strict type safety, modular domain boundaries, and end-to-end automated testing.",
      architecture: "Decoupled cloud-native microservices with horizontal autoscaling, distributed tracing, and immutable database audit logs.",
      timeline: "4 to 8 weeks per structured engineering milestone",
      outcomes: [
        "100% full source code ownership transferred cleanly to your repository",
        "Zero dependency on proprietary agency scaffolding or black-box frameworks",
        "High fault tolerance with automated failover and zero-downtime deployments"
      ]
    }
  },
  {
    id: "crm-erp-development",
    title: "CRM & ERP Development",
    category: "Enterprise Systems",
    subtitle: "Tailored business operating systems connecting pipelines, finance, and inventory",
    description: "Replace disjointed SaaS subscriptions and fragile spreadsheets with unified, bespoke CRM and ERP software built around your exact commercial workflows, financial rules, and operational structure.",
    deliverables: [
      "Custom sales pipeline automation, quote builders, and deal stage tracking",
      "Multi-entity general ledger, automated invoicing, and reconciliation",
      "Inventory management, warehouse tracking, and vendor purchase order sync",
      "Granular Role-Based Access Control (RBAC) and immutable compliance logs"
    ],
    techStack: ["React 19", "TypeScript", "Node.js", "PostgreSQL", "Prisma / Drizzle", "Stripe API"],
    metrics: "40% reduction in cross-department communication overhead",
    gradient: "from-indigo-500/20 to-blue-600/20",
    iconName: "Layers",
    details: {
      overview: "Generic enterprise platforms force teams into expensive per-seat licensing and clumsy workarounds. Nexovira crafts custom CRM and ERP suites built strictly around your proprietary business workflows.",
      architecture: "Relational transactional database with optimistic UI updates, scheduled background sync jobs, and multi-tenant cryptographic segregation.",
      timeline: "5 to 10 weeks depending on custom modules",
      outcomes: [
        "Zero per-seat licensing fees as your enterprise headcount scales",
        "Unified single-source-of-truth for executive finance and sales analytics",
        "Real-time reconciliation between bank feeds, billing, and inventory"
      ]
    }
  },
  {
    id: "ai-agents",
    title: "AI Agents",
    category: "Autonomous Systems",
    subtitle: "Autonomous multi-agent swarms capable of reasoning, tool calls, and execution",
    description: "Autonomous digital workers equipped with stateful memory, deterministic planning, and authenticated tool access. They resolve customer tickets, audit contracts, execute trades, and dispatch logistics 24/7.",
    deliverables: [
      "Stateful multi-agent orchestration swarms with LangGraph & Temporal",
      "Tool-calling agents with authenticated API, database, and email permissions",
      "Episodic and long-term memory retrieval using semantic embeddings",
      "Human-in-the-loop review guardrails for high-risk transactional steps"
    ],
    techStack: ["LangGraph", "Python", "Google GenAI SDK", "FastAPI", "Vector Embeddings", "Webhooks"],
    metrics: "94% autonomous task completion rate without human intervention",
    gradient: "from-cyan-400/20 to-indigo-600/20",
    iconName: "Bot",
    details: {
      overview: "Nexovira's autonomous agents go far beyond superficial chat windows. They parse multi-step instructions, call external APIs, query internal databases, verify edge cases, and report completed tasks.",
      architecture: "Stateful agent graphs with deterministic transition conditions, sandbox tool execution environments, and automatic error self-healing.",
      timeline: "3 to 6 weeks for enterprise agent deployment",
      outcomes: [
        "Round-the-clock task execution with sub-second decision latency",
        "Instantaneous handling of repetitive customer and operational requests",
        "Significant reduction in manual data entry and multi-system copy-pasting"
      ]
    }
  },
  {
    id: "automation",
    title: "Automation",
    category: "Workflow Automation",
    subtitle: "Autonomous multi-step workflows connecting APIs, databases, and operational triggers",
    description: "Eliminate repetitive manual toil with bulletproof automation pipelines. We connect your messaging channels, CRM, documents, and databases into reliable background triggers that execute without human delay.",
    deliverables: [
      "Zero-human-touch document, PDF, and invoice parsing with multimodal vision",
      "Cross-platform real-time data synchronization between disparate databases",
      "Instantaneous lead qualification and intelligent calendar routing",
      "Self-healing error recovery, automatic retries, and audit notifications"
    ],
    techStack: ["Python", "FastAPI", "Temporal", "Inngest", "REST Webhooks", "OpenAI / Gemini"],
    metrics: "25+ hours saved per operational staff member every week",
    gradient: "from-blue-500/20 to-cyan-500/20",
    iconName: "Zap",
    details: {
      overview: "We convert brittle manual processes into deterministic, resilient automated workflows backed by large multimodal models and durable execution engines.",
      architecture: "Durable workflow state machines that survive network partitions and server restarts, with cryptographic webhook signature verification.",
      timeline: "2 to 4 weeks for rapid production deployment",
      outcomes: [
        "Instant response times for inbound operational requests (under 30 seconds)",
        "Zero human transcription error in financial and customer records",
        "Massive scalability during seasonal or transactional volume surges"
      ]
    }
  },
  {
    id: "web-app-development",
    title: "Web / App Development",
    category: "Frontend & Mobile",
    subtitle: "High-performance reactive web applications, mobile platforms, and client portals",
    description: "Lightning-fast, accessible, and responsive digital products built with modern frameworks. We deliver web applications, responsive customer portals, and mobile-ready PWA interfaces with sub-second page loads.",
    deliverables: [
      "Modern Single Page Applications (SPA) and Server-Side Rendered (SSR) web portals",
      "Fluid, responsive UI with WCAG AA accessibility and zero layout shift",
      "Interactive data visualizations, dashboards, and real-time collaborative canvases",
      "Progressive Web Apps (PWA) with offline capabilities and mobile responsiveness"
    ],
    techStack: ["React 19", "Next.js", "TypeScript", "Tailwind CSS", "Vite", "Motion", "WebSockets"],
    metrics: "100/100 Google Lighthouse performance & accessibility scores",
    gradient: "from-cyan-500/20 to-teal-500/20",
    iconName: "Code2",
    details: {
      overview: "We craft digital interfaces that feel instantaneous. No bloated dependencies, no clunky layout shifts—just clean, fluid, and intuitive user experiences engineered in pure TypeScript.",
      architecture: "Component-driven design systems, edge-rendered pages, micro-frontend modularity, and WebWorker offloading for data-heavy views.",
      timeline: "3 to 6 weeks for complete web or client portal builds",
      outcomes: [
        "Sub-second load times that maximize conversion and user retention",
        "Flawless responsiveness across desktop, tablet, and mobile touch screens",
        "Maintainable, cleanly typed component architectures ready for scale"
      ]
    }
  },
  {
    id: "data-solutions",
    title: "Data Solutions",
    category: "Data & Analytics",
    subtitle: "Real-time streaming ETL, vector lakes, semantic analytics, and BI command centers",
    description: "Turn fragmented, dormant company data into real-time operational intelligence. We construct high-throughput streaming ETL pipelines, semantic vector indices, and interactive command centers.",
    deliverables: [
      "Real-time event streaming and high-speed analytical data warehouses",
      "Semantic knowledge retrieval (RAG) across millions of internal records",
      "Predictive customer churn, forecasting, and demand analysis models",
      "Executive interactive BI command centers with instant sub-second queries"
    ],
    techStack: ["ClickHouse", "DuckDB", "PostgreSQL", "Apache Kafka", "Pinecone", "Python", "React Charts"],
    metrics: "Sub-2 second query execution across multi-million record datasets",
    gradient: "from-teal-500/20 to-cyan-500/20",
    iconName: "LineChart",
    details: {
      overview: "Nexovira builds production data infrastructure that allows leadership to query institutional knowledge in plain English and monitor real-time business health with mathematical certainty.",
      architecture: "Columnar analytical data marts paired with vector search engines, streaming Kafka consumers, and memory-cached query pipelines.",
      timeline: "4 to 7 weeks",
      outcomes: [
        "Real-time visibility into mission-critical KPIs without batch delays",
        "Natural language SQL querying across complex business databases",
        "Automated daily anomaly detection alerts sent directly to key leaders"
      ]
    }
  },
  {
    id: "digital-transformation",
    title: "Digital Transformation",
    category: "Strategic Modernization",
    subtitle: "Legacy software modernization, cloud migration, and AI-first operational restructuring",
    description: "Modernize outdated monolithic infrastructure into agile cloud architectures. We migrate legacy software, decouple brittle codebases, and integrate modern AI workflows without disrupting day-to-day business operations.",
    deliverables: [
      "Legacy software audit, architecture restructuring, and risk-managed migration plans",
      "Decoupling of brittle legacy databases into scalable cloud microservices",
      "Internal team upskilling, technical documentation, and AI adoption playbooks",
      "Continuous system monitoring, disaster recovery setup, and cloud cost optimization"
    ],
    techStack: ["Cloud Native", "Docker", "Kubernetes", "AWS / GCP", "Terraform", "PostgreSQL", "Next.js"],
    metrics: "Up to 60% reduction in cloud hosting and legacy maintenance costs",
    gradient: "from-indigo-600/20 to-cyan-400/20",
    iconName: "Boxes",
    details: {
      overview: "We partner with established organizations to systematically replace obsolete tech stacks with modern, cloud-native software and AI workflows, ensuring seamless business continuity throughout.",
      architecture: "Strangler fig migration pattern, continuous blue/green deployments, and automated data migration scripts with strict rollback guarantees.",
      timeline: "6 to 12 weeks for comprehensive phased modernization",
      outcomes: [
        "Drastic reduction in ongoing server maintenance and legacy vendor fees",
        "Massive agility increase allowing rapid deployment of new business features",
        "Resilient, modern tech foundation primed for rapid AI feature integration"
      ]
    }
  }
];

export const INDUSTRIES: IndustryItem[] = [
  {
    id: "real-estate",
    name: "Real Estate",
    category: "Property & Commercial",
    tagline: "Automated lead-to-tour booking, valuation models, and lease intelligence",
    overview: "We empower real estate brokerages, commercial developers, property managers, and REITs to capture high-intent buyers instantly and streamline complex lease documents.",
    painPoints: [
      "High lead drop-off due to hours-long delays in responding to property portal inquiries",
      "Manual cross-referencing of tenant lease agreements and contract expiration dates",
      "Disjointed MLS data feeds and tedious manual property investment report generation"
    ],
    solution: "Instant conversational tour-booking agents, automated valuation models, and lease intelligence pipelines that extract renewal clauses and critical terms in seconds.",
    agentsDeployed: ["Property Inbound Tour Scheduler", "Lease Agreement Extractor", "Market Comp Synthesizer"],
    sampleMetric: "4.4x increase in property walkthroughs scheduled within 5 minutes of inquiry",
    iconName: "Building2",
    useCases: [
      { title: "Instant Tour Booking Agent", description: "Engages portal leads via SMS/Web, qualifies buying timeline, and syncs directly with broker calendars." },
      { title: "Lease Document Extraction", description: "Extracts rent escalation clauses, expiration dates, and covenants into structured ERP tables." }
    ]
  },
  {
    id: "education",
    name: "Education / EdTech",
    category: "Learning & Academic",
    tagline: "Adaptive learning software, student CRM portals, and automated evaluation",
    overview: "From bootcamps and EdTech platforms to university departments, we engineer modern LMS platforms, automated administrative workflows, and personalized student learning copilots.",
    painPoints: [
      "Instructors overwhelmed by grading repetitive assignments and administrative paperwork",
      "Fragmented student management systems with disjointed onboarding experiences",
      "Inability to provide personalized, round-the-clock tutoring support at scale"
    ],
    solution: "Custom educational portals, automated rubric-based assignment evaluation copilots, and 24/7 interactive tutoring agents grounded in accredited course material.",
    agentsDeployed: ["Course Curriculum Assistant", "Rubric Evaluation Co-Pilot", "Student Intake & Enrollment Agent"],
    sampleMetric: "65% reduction in administrative grading overhead for instructional staff",
    iconName: "GraduationCap",
    useCases: [
      { title: "Student Intake & Admissions CRM", description: "Automates document collection, prerequisite checks, and counselor interview routing." },
      { title: "Interactive Course Copilot", description: "Provides students with answers and citations directly from syllabus and lecture material." }
    ]
  },
  {
    id: "healthcare",
    name: "Healthcare (Non-Dx)",
    category: "Medical Operations",
    tagline: "Intake coordination, administrative micro-SaaS, and automated billing workflows",
    overview: "We engineer HIPAA-compliant operational software, scheduling interfaces, and administrative automation for clinics, telehealth networks, and wellness providers (strictly non-diagnostic operational software).",
    painPoints: [
      "Severe staff burnout from manual phone appointment rescheduling and paper intake forms",
      "Delayed insurance pre-authorization checks causing billing and check-in bottlenecks",
      "Lack of intuitive, mobile-friendly patient self-service web portals"
    ],
    solution: "Secure patient self-scheduling portals, automated administrative intake verification, and billing reconciliation pipelines with strict end-to-end encryption.",
    agentsDeployed: ["Patient Intake Navigator", "Insurance Verification Assistant", "Recall & Follow-Up Scheduler"],
    sampleMetric: "70% reduction in front-desk telephone backlog and scheduling errors",
    iconName: "Activity",
    useCases: [
      { title: "Smart Patient Intake Portal", description: "Pre-fills patient history, collects insurance card photos, and validates eligibility in real-time." },
      { title: "Automated Appointment Recall", description: "Re-engages overdue checkups with automated SMS & calendar confirmation links." }
    ]
  },
  {
    id: "ecommerce",
    name: "E-commerce",
    category: "Retail & DTC",
    tagline: "Dynamic pricing, automated catalog intelligence, and 24/7 sales agents",
    overview: "E-commerce brands operate on thin margins and high volume. Nexovira automates fulfillment tracking, product metadata enrichment, and customer engagement to maximize lifetime value.",
    painPoints: [
      "Hundreds of hours spent writing and updating product descriptions manually",
      "High cart abandonment and delayed support inquiries during off-hours and weekends",
      "Inventory stockouts and blind forecasting across multiple sales channels"
    ],
    solution: "Autonomous catalog enrichment tools, automated 24/7 post-purchase order reconciliation, and customer support agents integrated directly with Shopify and custom stores.",
    agentsDeployed: ["24/7 Sales & Support Concierge", "Catalog AI Enricher", "Returns & Refund Resolver"],
    sampleMetric: "+38% lift in customer support resolution velocity and conversion",
    iconName: "ShoppingBag",
    useCases: [
      { title: "Autonomous Catalog Generation", description: "Ingests raw supplier feeds and outputs optimized titles, tags, and SEO copy automatically." },
      { title: "Post-Purchase Resolution Agent", description: "Resolves shipping tracking and exchanges via real-time carrier API integrations." }
    ]
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    category: "Industrial & Production",
    tagline: "Supply chain visibility, predictive maintenance alerts, and plant ERP systems",
    overview: "We engineer resilient industrial software, production tracking dashboards, and automated supplier procurement systems for precision fabrication and manufacturing facilities.",
    painPoints: [
      "Downtime caused by delayed equipment maintenance and blind spot monitoring",
      "Complex paper-based Bill of Materials (BOM) management and manual vendor quotes",
      "Fragmented inventory tracking between shop floor and executive accounting"
    ],
    solution: "Custom plant management ERPs, automated BOM parsers, and sensor anomaly detection pipelines that alert floor supervisors before equipment failures occur.",
    agentsDeployed: ["BOM Procurement Matcher", "Equipment Anomaly Monitor", "Shift Handover Synthesizer"],
    sampleMetric: "28% reduction in unscheduled machine downtime through early telemetry alerts",
    iconName: "Cpu",
    useCases: [
      { title: "Automated BOM & PO Reconciliation", description: "Matches complex engineering bills of materials directly against vendor price lists." },
      { title: "Floor Production Tracking ERP", description: "Tracks work-in-progress inventory across machining stations in real-time." }
    ]
  },
  {
    id: "professional-services",
    name: "Professional Services",
    category: "Consulting & Legal",
    tagline: "Client intake portals, contract analysis, and automated project billing",
    overview: "Law firms, accounting practices, and management consultancies partner with Nexovira to eliminate non-billable administrative hours and streamline client deliverables.",
    painPoints: [
      "Dozens of non-billable hours lost to document formatting, intake, and invoicing",
      "Tedious manual review of extensive multi-page contracts and discovery files",
      "Disjointed time-tracking and delayed client fee collection"
    ],
    solution: "Secure client onboarding portals, semantic contract comparison engines, and automated time-to-invoice billing software with built-in audit trails.",
    agentsDeployed: ["Contract Clause Extractor", "Time-to-Invoice Synthesizer", "Client Document Intake Bot"],
    sampleMetric: "18+ non-billable hours recovered per partner and senior associate each month",
    iconName: "Briefcase",
    useCases: [
      { title: "Semantic Contract Review", description: "Flags non-standard indemnity, liability, and renewal clauses across 50+ page legal agreements." },
      { title: "Automated Work-in-Progress Billing", description: "Aggregates project activity records into itemized, client-ready fee statements." }
    ]
  },
  {
    id: "startups",
    name: "Startups",
    category: "Venture & Tech",
    tagline: "Rapid speed to MVP, scalable cloud foundations, and embedded AI moats",
    overview: "We help venture-backed and bootstrapped founders launch production-grade software in weeks rather than quarters, embedding native AI capabilities that drive early user retention.",
    painPoints: [
      "Struggling with slow agency delivery times and unmaintainable technical debt",
      "Need to build defensible AI-native features without hiring a full in-house ML team",
      "Architectures that fail under sudden viral traffic spikes"
    ],
    solution: "Rapid agile development of custom web apps and micro-SaaS with clean TypeScript codebases, pre-configured authentication, billing, and autonomous AI agents.",
    agentsDeployed: ["Onboarding Copilot", "Lead Qualifier Agent", "Automated User Feedback Synthesizer"],
    sampleMetric: "82% faster time to market for seed-stage and Series-A MVPs",
    iconName: "Rocket",
    useCases: [
      { title: "Rapid MVP Engineering", description: "Production-ready web application delivered in under 4 weeks with full source code handoff." },
      { title: "Embedded AI Features", description: "Custom smart generation, natural language search, and automated workflows baked in on Day 1." }
    ]
  },
  {
    id: "enterprises",
    name: "Enterprises",
    category: "Corporate Scale",
    tagline: "Private cloud deployments, SOC2 compliance, and unified multi-agent governance",
    overview: "We partner with enterprise IT, operations, and technology leaders to construct high-throughput private cloud software, secure LLM gateways, and multi-department agent swarms.",
    painPoints: [
      "Strict data compliance policies preventing the use of public third-party SaaS tools",
      "Siloed legacy data lakes preventing automated cross-departmental operations",
      "Difficulty managing and auditing autonomous AI tools across enterprise teams"
    ],
    solution: "Private VPC agent deployments, SOC2/HIPAA audit trails, zero-data-retention model proxies, and centralized executive observability consoles.",
    agentsDeployed: ["Enterprise Data Lake Copilot", "VPC Security & Compliance Auditor", "Multi-Department Workflow Router"],
    sampleMetric: "100% zero-data-leakage compliance across enterprise security audits",
    iconName: "Landmark",
    useCases: [
      { title: "Private VPC LLM Gateway", description: "Routes all internal AI queries through isolated endpoints with zero third-party data training." },
      { title: "Cross-Departmental ERP Orchestration", description: "Harmonizes legacy ERP databases into unified real-time executive analytics." }
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "apex-freight-erp",
    title: "Autonomous Fleet Dispatch & Cloud ERP Orchestration",
    industry: "Manufacturing & Logistics",
    category: "ERP & Automation",
    service: "CRM & ERP Development + AI Automation",
    summary: "Replaced 4 disconnected legacy subscriptions with a custom cloud dispatch portal and autonomous load routing agent processing 1,200+ daily freight movements.",
    problem: "Dispatchers spent 14 minutes per load manually matching carrier insurance, driver hours-of-service, and rate sheets across separate portals, causing load booking bottlenecks.",
    solution: "Engineered a custom cloud ERP with dedicated driver portals and an AI dispatch agent that matches shipments, checks carrier safety ratings, and generates Bills of Lading in 12 seconds.",
    technology: ["TypeScript", "React 19", "Node.js", "PostgreSQL", "Google GenAI", "Docker"],
    results: [
      { metric: "14 min → 12 sec", label: "Per-Load Dispatch Speed" },
      { metric: "$180,000", label: "Annual SaaS Fees Saved" },
      { metric: "99.4%", label: "On-Time Dispatch Rate" }
    ],
    image: "/src/assets/images/case_study_ecommerce_1791352145622.jpg"
  },
  {
    id: "meridian-real-estate",
    title: "AI Property Valuation & Instant Tour Booking Engine",
    industry: "Real Estate",
    category: "Web & AI Agents",
    service: "Software Development & Enterprise AI Agents",
    summary: "Built a reactive luxury property search platform connected to an autonomous tour booking agent that quadrupled inbound lead conversion for a high-volume brokerage.",
    problem: "Over 60% of high-intent buyer inquiries arrived outside standard office hours and languished unanswered for up to 18 hours, resulting in severe lead abandonment.",
    solution: "Deployed a sub-second reactive property search interface backed by an autonomous tour booking agent that validates financing criteria and syncs broker calendars in real-time.",
    technology: ["Next.js", "Tailwind CSS", "LangGraph", "Python", "FastAPI", "Pinecone"],
    results: [
      { metric: "+320%", label: "After-Hours Tour Bookings" },
      { metric: "< 45 sec", label: "Average Response Time" },
      { metric: "$4.2M", label: "Closed Deal Volume via Agent" }
    ],
    image: "/src/assets/images/industry_realestate_finance_1791352133032.jpg"
  },
  {
    id: "omnichannel-retail",
    title: "Autonomous Catalog Intelligence & Inventory Balancer",
    industry: "E-commerce",
    category: "Micro-SaaS & Data",
    service: "Custom AI Tools & Micro-SaaS",
    summary: "Created a bespoke catalog enrichment engine and predictive inventory balancer that automated 45,000 SKU updates across Shopify, Amazon, and ERP warehouses.",
    problem: "A 5-person merchandising team was backlogged updating seasonal descriptions, SEO tags, and stock reallocation across three regional distribution centers.",
    solution: "Constructed an internal micro-SaaS application that ingests supplier feeds, generates SEO copy, predicts run-out dates based on velocity, and triggers stock transfers.",
    technology: ["React", "Python", "FastAPI", "PostgreSQL", "Stripe API", "Google GenAI"],
    results: [
      { metric: "45,000+", label: "SKUs Autonomously Synced" },
      { metric: "35 hrs/wk", label: "Merchandising Time Saved" },
      { metric: "-42%", label: "Stockout Incidents" }
    ],
    image: "/src/assets/images/service_ai_agent_1791352121410.jpg"
  },
  {
    id: "medivance-patient-intake",
    title: "Secure Non-Diagnostic Patient Intake & Scheduling Portal",
    industry: "Healthcare (Non-Dx)",
    category: "Full-Stack Software",
    service: "Software Development & Automation",
    summary: "Designed a HIPAA-compliant intake portal and appointment verification workflow across 12 outpatient clinics, eliminating paper forms and telephone queues.",
    problem: "Front-desk personnel spent up to 15 minutes per patient transcribing medical insurance cards, collecting waivers, and manually calling back for appointment reschedules.",
    solution: "Engineered an encrypted self-service patient portal with OCR insurance verification and automated SMS appointment confirmation that syncs directly with clinic practice management software.",
    technology: ["React 19", "TypeScript", "PostgreSQL", "AWS KMS", "Twilio API", "Docker"],
    results: [
      { metric: "70%", label: "Reduction in Phone Queue" },
      { metric: "3 min", label: "Total Check-in Time" },
      { metric: "100%", label: "HIPAA Security Audit Score" }
    ],
    image: "/src/assets/images/industry_realestate_finance_1791352133032.jpg"
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Agile Sprint MVP",
    priceTag: "Starting at $12,500",
    description: "Rapid delivery of a focused custom web application, automated workflow, or micro-SaaS prototype with full source code handoff.",
    timeline: "2 – 4 Weeks Delivery",
    features: [
      "Custom responsive web application (React 19 / TypeScript)",
      "Dedicated backend API & secure relational database setup",
      "Up to 2 autonomous AI agent or workflow automations",
      "Third-party integration (Stripe, Auth, CRM, Webhooks)",
      "Complete source code ownership & deployment documentation",
      "14 days post-launch warranty & bug-fix guarantee"
    ],
    idealFor: "Startups & businesses seeking rapid proof-of-concept or targeted automation.",
    ctaText: "Start Rapid Sprint"
  },
  {
    name: "Dedicated Engineering Pod",
    badge: "Most Popular",
    priceTag: "Starting at $28,000",
    description: "Full-scale custom software, proprietary CRM/ERP development, and multi-agent enterprise AI orchestration with dedicated engineering leads.",
    timeline: "4 – 8 Weeks Delivery",
    features: [
      "Full-stack enterprise application or custom ERP/CRM suite",
      "Multi-agent autonomous swarms with deterministic tool calling",
      "Real-time data intelligence & analytics command center",
      "SOC2-compliant security architecture, encryption, & audit logs",
      "Dedicated Technical Lead + Senior Full-Stack & AI Engineers",
      "Bi-weekly sprint demos and continuous staging environment",
      "30 days post-launch SLA, warranty & staff training"
    ],
    idealFor: "Growing mid-market companies replacing fragmented systems with unified software.",
    ctaText: "Schedule Architecture Call"
  },
  {
    name: "Enterprise Transformation",
    badge: "Enterprise",
    priceTag: "Custom Scope",
    description: "Comprehensive operational overhaul with continuous AI agent R&D, bespoke models, private VPC hosting, and dedicated SLA.",
    timeline: "Quarterly / Ongoing Retainer",
    features: [
      "Unlimited workflow automation pipeline iterations & improvements",
      "Private VPC / on-premises LLM and vector database deployment",
      "Continuous fine-tuning on proprietary enterprise documents",
      "Priority 2-hour response SLA and round-the-clock monitoring",
      "Dedicated Senior AI Architect & Cloud Infrastructure Team",
      "Executive quarterly innovation & ROI roadmap sessions"
    ],
    idealFor: "Enterprises with high security compliance and continuous automation requirements.",
    ctaText: "Discuss Enterprise Scope"
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Marcus Vance",
    role: "Chief Technology Officer",
    company: "Strata Logistics Corp",
    industry: "Manufacturing & Supply Chain",
    quote: "Nexovira transformed how we operate. Their team built a custom ERP that replaced three separate legacy vendors, and the autonomous dispatch agent paid for the entire project within the first four months.",
    metric: "$180k saved annually in legacy software licenses"
  },
  {
    name: "Elena Rostova",
    role: "Founder & CEO",
    company: "NovaScale Studio",
    industry: "Digital Agency & SaaS",
    quote: "We partnered with Nexovira to build white-label AI reporting engines for our 40+ agency clients. The engineering quality is immaculate—clean TypeScript, instant loading speeds, and zero downtime.",
    metric: "Saved 20 hours per account manager each month"
  },
  {
    name: "Julian Thorne",
    role: "Managing Director",
    company: "Meridian Prime Real Estate",
    industry: "Real Estate",
    quote: "Our brokers used to lose leads because inquiries arrived on evenings and weekends. The Nexovira AI booking agent qualifies buyers and books private property tours in under a minute.",
    metric: "+320% increase in scheduled property walkthroughs"
  }
];

export const FAQS: FaqItem[] = [
  {
    id: "ip-ownership",
    category: "Security & IP",
    question: "Do we own 100% of the code and intellectual property?",
    answer: "Yes, absolutely. Upon project milestone completion and delivery, 100% of the source code, repositories, architectures, schemas, and documentation are transferred directly to your organization. There are zero recurring royalties, per-seat licensing fees, or vendor lock-in."
  },
  {
    id: "delivery-timeline",
    category: "Delivery & Cost",
    question: "What is your typical project delivery timeline?",
    answer: "Focused sprints and micro-SaaS MVPs are typically delivered within 2 to 4 weeks. Comprehensive enterprise ERP/CRM platforms and multi-agent systems generally span 4 to 8 weeks, structured in transparent two-week agile sprint demos with continuous staging deployment."
  },
  {
    id: "data-privacy",
    category: "Security & IP",
    question: "How do you ensure data security and prevent AI data leaks?",
    answer: "We strictly implement zero-data-retention API configurations, end-to-end encryption in transit (TLS 1.3) and at rest (AES-256), and role-based access control. Your proprietary enterprise data is never used to train public foundation models, and models can be deployed inside your private VPC."
  },
  {
    id: "integrations",
    category: "Architecture",
    question: "Can your solutions integrate with our existing databases and tools?",
    answer: "Yes. We specialize in custom API orchestration. We routinely integrate with Salesforce, HubSpot, Stripe, QuickBooks, Shopify, PostgreSQL, MySQL, Snowflake, AWS, Google Workspace, and proprietary legacy databases via custom webhooks and secure adapters."
  },
  {
    id: "post-launch",
    category: "Delivery & Cost",
    question: "What happens after the software is deployed to production?",
    answer: "Every engagement includes a post-launch warranty period (14 to 30 days) to guarantee bug-free stability. We also offer dedicated ongoing SLA support retainers for continuous feature iterations, model updates, and infrastructure monitoring."
  },
  {
    id: "legacy-modernization",
    category: "Architecture",
    question: "How do you handle migrating legacy systems without downtime?",
    answer: "We employ the Strangler Fig pattern, building modern cloud microservices alongside your legacy software and incrementally migrating database records and API routes. We perform parallel validation testing so your day-to-day operations experience zero interruption."
  },
  {
    id: "custom-vs-saas",
    category: "General",
    question: "Why should we build custom software instead of buying existing SaaS tools?",
    answer: "Off-the-shelf SaaS forces your business into someone else's workflow and charges per-seat pricing that skyrockets as you grow. Custom software built by Nexovira is tailored precisely to your unfair advantage, unifies all your systems into one pane of glass, and incurs zero monthly subscription fees as headcount scales."
  },
  {
    id: "getting-started",
    category: "General",
    question: "How do we get started with Nexovira AI Solution?",
    answer: "Schedule a 30-minute discovery consultation on our website or submit your project scope. Our senior engineering team will review your requirements and provide an architectural blueprint and fixed-scope sprint proposal within 48 hours."
  }
];
