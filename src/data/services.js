export const SERVICES = {
    'ai-websites': {
        icon: '🌐', eyebrow: 'Web Development', title: 'AI-Driven Websites',
        subtitle: 'Stunning, intelligent websites with smart chatbots, dynamic personalization, and conversion optimization.',
        aboutTitle: 'Websites that think & convert',
        desc1: 'We architect and engineer premium websites infused with artificial intelligence at every layer. From GPT-powered chatbots that engage visitors around the clock, to ML-driven content personalization engines that adapt layouts, CTAs, and messaging to each visitor — our sites are designed to boost engagement and conversions from day one. Every element undergoes rigorous A/B testing, accessibility auditing, and performance profiling.',
        desc2: "Our websites don't just look world-class — they perform like revenue machines. We ship SEO-optimized, server-rendered pages on modern frameworks (Next.js, React), integrate first-party analytics dashboards, implement structured data for rich search results, and connect seamlessly with your CRM, email tools, and payment gateways. Post-launch, we provide 30 days of dedicated support and monitoring.",
        features: ['Custom responsive design', 'AI chatbot integration', 'SEO optimization & analytics', 'Smart content personalization', 'Contact forms & lead capture', '30 days free support'],
        tech: ['React', 'Next.js', 'Tailwind CSS', 'OpenAI', 'Vercel', 'Google Analytics'],
        bgChars: ['💻', '🎨']
    },
    'ai-apps': {
        icon: '📱', eyebrow: 'App Development', title: 'AI-Driven Apps',
        subtitle: 'Cross-platform mobile apps with embedded AI — intelligent recommendations, NLP interfaces, and predictive features.',
        aboutTitle: 'Smart apps for modern users',
        desc1: 'We design and develop cross-platform mobile applications that harness machine learning to deliver truly intelligent user experiences. Our apps feature real-time recommendation engines, natural language processing for conversational interfaces, on-device inference for instant predictions, and computer vision capabilities — all wrapped in fluid, intuitive UI built with Flutter or React Native.',
        desc2: 'From architecture to App Store and Play Store deployment, we handle the full lifecycle: wireframing, prototyping, development, CI/CD pipelines, push notification infrastructure, backend APIs, database design, crash reporting, and analytics. We build apps that scale to millions of users and include 60 days of hands-on post-launch support.',
        features: ['iOS & Android (cross-platform)', 'AI-powered features built-in', 'Push notifications & analytics', 'Backend & API integration', 'App Store deployment', '60 days free support'],
        tech: ['Flutter', 'React Native', 'Firebase', 'TensorFlow Lite', 'Node.js', 'PostgreSQL'],
        bgChars: ['📲', '🤖']
    },
    'rag': {
        icon: '🧠', eyebrow: 'AI / ML', title: 'RAG Solutions',
        subtitle: 'Retrieval-Augmented Generation pipelines connecting AI to your proprietary data for accurate, contextual responses.',
        aboutTitle: 'AI grounded in your data',
        desc1: 'Retrieval-Augmented Generation (RAG) is the gold standard for building AI systems that reference your proprietary data instead of hallucinating. We design end-to-end RAG pipelines that ingest documents (PDFs, databases, wikis, Notion pages), chunk and embed them into high-performance vector databases (Pinecone, ChromaDB, Weaviate), and serve contextually accurate answers via LLMs. Our pipelines include hybrid search (semantic + keyword), re-ranking layers, and citation tracking so users can verify every response.',
        desc2: 'Whether you need an internal knowledge assistant for employees, a customer-facing support bot grounded in your documentation, or a research tool that synthesizes findings from thousands of papers — we build it production-grade. We implement guardrails, access control, real-time indexing for live data, evaluation frameworks to measure accuracy, and monitoring dashboards for continuous improvement.',
        features: ['Custom vector database setup', 'Document processing pipeline', 'Embedding model selection', 'Query optimization', 'Real-time retrieval', 'Accuracy monitoring'],
        tech: ['Pinecone', 'ChromaDB', 'LangChain', 'OpenAI Embeddings', 'Python', 'FastAPI'],
        bgChars: ['📚', '🔍']
    },
    'n8n': {
        icon: '⚡', eyebrow: 'Automation', title: 'n8n Automation',
        subtitle: 'End-to-end workflow automation — connect APIs, eliminate repetitive tasks, build processes that run 24/7.',
        aboutTitle: 'Automate everything',
        desc1: 'We architect intelligent automation workflows using n8n that connect your entire tech stack into seamless, self-running processes. From lead ingestion and CRM updates, to Slack/email notifications, invoice generation, data synchronization between platforms, and AI-powered content pipelines — we eliminate manual work so your team focuses on what matters. Our workflows include conditional branching, error handling, retry logic, and comprehensive logging.',
        desc2: "Every workflow we build is production-hardened: hosted on dedicated infrastructure, monitored 24/7 with alerting, and documented for your team. We integrate 500+ services out of the box and build custom API connectors when needed. Whether it's a 5-step email sequence or a 50-node data pipeline spanning multiple systems — we deliver automation that saves hours every week and scales with your business.",
        features: ['Custom workflow design', 'API integration (500+ services)', 'Error handling & monitoring', 'Scheduled & triggered flows', 'Data transformation', 'Ongoing maintenance'],
        tech: ['n8n', 'Webhooks', 'REST APIs', 'Node.js', 'PostgreSQL', 'Docker'],
        bgChars: ['🔄', '🏗️']
    },
    'langchain': {
        icon: '🔗', eyebrow: 'AI / ML', title: 'LangFlow & LangChain',
        subtitle: 'Custom LLM orchestration — multi-step AI agents, retrieval chains, and conversational AI systems.',
        aboutTitle: 'Orchestrate intelligence',
        desc1: 'We build sophisticated AI orchestration systems using LangChain, LangFlow, and LangGraph. From multi-step reasoning agents that plan, execute, and self-correct, to complex retrieval chains with tool use and function calling — we design AI architectures that handle real-world complexity. Our agents integrate with external APIs, databases, search engines, and custom tools to autonomously complete tasks that traditionally required human intervention.',
        desc2: 'Whether you need a customer-facing chatbot with deep product knowledge, an internal research assistant that synthesizes reports from multiple data sources, or a multi-agent system where specialized AI workers collaborate — we architect, build, and deploy it at production scale. Every system includes memory management, prompt versioning, cost optimization, abuse guardrails, and observability dashboards.',
        features: ['Custom agent design', 'Multi-step reasoning chains', 'Tool use & function calling', 'Memory management', 'Prompt engineering', 'Production deployment'],
        tech: ['LangChain', 'LangFlow', 'LangGraph', 'OpenAI', 'Claude', 'Python'],
        bgChars: ['⛓️', '🧩']
    },
    'cyber-security': {
        icon: '🛡️', eyebrow: 'Security', title: 'Cyber Security',
        subtitle: 'AI-powered security — intelligent threat detection, vulnerability assessments, and zero-trust architecture.',
        aboutTitle: 'Protection that never sleeps',
        desc1: 'We implement enterprise-grade security solutions amplified by artificial intelligence. Our capabilities span intelligent threat detection using ML-based anomaly analysis, automated vulnerability scanning with prioritized remediation roadmaps, real-time intrusion detection/prevention (IDS/IPS), and comprehensive penetration testing that simulates advanced persistent threats. We identify weaknesses before attackers do — and fix them faster.',
        desc2: "Our holistic approach covers the full security lifecycle: architecture review, zero-trust network design, SIEM deployment and tuning, incident response playbooks, compliance consulting (SOC 2, GDPR, ISO 27001), employee security training, and ongoing threat intelligence monitoring. We don't just protect your systems — we build a security culture that scales with your organization.",
        features: ['AI-powered threat detection', 'Penetration testing', 'Security audits', 'Incident response planning', 'Zero-trust architecture', 'Compliance consulting'],
        tech: ['SIEM', 'IDS/IPS', 'Burp Suite', 'Nmap', 'Python', 'Kubernetes'],
        bgChars: ['🔒', '🔐']
    },
    'chatbots': {
        icon: '💬', eyebrow: 'AI Solutions', title: 'AI Chatbots & Agents',
        subtitle: 'Intelligent conversational agents for support, sales, and operations — powered by GPT-4 and Claude.',
        aboutTitle: 'Conversations that convert',
        desc1: 'We build AI chatbots and autonomous agents that handle complex, multi-turn conversations with human-like understanding. Powered by frontier models (GPT-4, Claude, Gemini), trained on your proprietary data, and integrated with your business systems — our bots resolve support tickets, qualify leads, book appointments, process orders, and escalate to human agents when needed. Every interaction is tracked and analyzed for continuous improvement.',
        desc2: 'Our chatbot solutions deploy across every channel: website widgets, WhatsApp, Slack, MS Teams, SMS (via Twilio), and voice. We implement custom personality and tone guidelines, multilingual support, knowledge base integration, conversation analytics dashboards, and smart handoff protocols. The result is 24/7 availability, 60%+ ticket deflection, and measurably higher customer satisfaction.',
        features: ['Custom personality & tone', 'Knowledge base training', 'Multi-channel deployment', 'Handoff to human agents', 'Analytics & insights', 'Voice AI integration'],
        tech: ['GPT-4', 'Claude', 'Dialogflow', 'Twilio', 'WebSocket', 'Node.js'],
        bgChars: ['🗣️', '🎙️']
    },
    'ai-business': {
        icon: '📊', eyebrow: 'Business Intelligence', title: 'AI for Business',
        subtitle: 'Transform operations with AI analytics, predictive models, and intelligent dashboards.',
        aboutTitle: 'Data-driven decisions',
        desc1: 'We help businesses harness AI and machine learning to unlock insights hidden in their data. Our solutions include predictive analytics models that forecast demand, churn, and revenue, customer segmentation engines powered by clustering algorithms, intelligent dashboards with natural-language query capabilities, and automated reporting pipelines that deliver actionable intelligence to stakeholders — not just charts.',
        desc2: 'We integrate with your existing data infrastructure (SQL databases, data warehouses, APIs, spreadsheets) and build ML models tailored to your business context. From real-time anomaly detection in financial transactions, to computer-vision-powered quality control on manufacturing lines, to NLP-based sentiment analysis of customer feedback — we deliver AI that drives measurable ROI. Every model ships with documentation, retraining pipelines, and performance monitoring.',
        features: ['Predictive analytics models', 'Intelligent dashboards', 'Automated reporting', 'Demand forecasting', 'Customer segmentation', 'Process optimization'],
        tech: ['TensorFlow', 'scikit-learn', 'Tableau', 'Power BI', 'Python', 'SQL'],
        bgChars: ['📈', '🎯']
    },
    'consultancy': {
        icon: '🎯', eyebrow: 'Strategic', title: 'AI Consultancy',
        subtitle: 'Strategic consulting — AI audits, roadmaps, and digital transformation guidance.',
        aboutTitle: 'Your AI roadmap',
        desc1: 'Not sure where to start with AI? We conduct comprehensive AI readiness assessments: auditing your data maturity, existing infrastructure, team capabilities, and competitive landscape. We then identify the highest-impact AI use cases for your specific industry and business model, prioritize them by ROI and feasibility, and present a clear, phased implementation roadmap that your team can actually execute.',
        desc2: 'Our consultants bring deep technical expertise (ML engineering, data architecture, cloud infrastructure) combined with strategic business acumen. We guide technology selection, vendor evaluation, build-vs-buy decisions, team structure and hiring, and change management. Engagements include workshops, stakeholder alignment sessions, proof-of-concept builds, and ongoing advisory retainers — everything you need to transform from AI-curious to AI-native.',
        features: ['AI readiness assessment', 'Opportunity identification', 'Technology selection', 'Implementation roadmap', 'Team training', 'Ongoing advisory'],
        tech: ['Strategy Frameworks', 'Data Assessment', 'ROI Modeling', 'Change Management', 'Workshops', 'Documentation'],
        bgChars: ['🗺️', '💡']
    }
};

export const SERVICE_KEYS = Object.keys(SERVICES);
