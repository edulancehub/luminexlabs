export const SERVICES = {
    'ai-websites': {
        icon: '🌐', eyebrow: 'Web Development', title: 'AI-Driven Websites',
        subtitle: 'Stunning, intelligent websites with smart chatbots, dynamic personalization, and conversion optimization.',
        aboutTitle: 'Websites that think & convert',
        desc1: 'We build beautiful, blazing-fast websites powered by AI. From intelligent chatbots that engage visitors 24/7 to dynamic content personalization that boosts conversions — every element is designed with purpose.',
        desc2: "Our websites don't just look premium — they perform. SEO-optimized from day one, built with modern frameworks, and integrated with your business tools.",
        features: ['Custom responsive design', 'AI chatbot integration', 'SEO optimization & analytics', 'Smart content personalization', 'Contact forms & lead capture', '30 days free support'],
        tech: ['React', 'Next.js', 'Tailwind CSS', 'OpenAI', 'Vercel', 'Google Analytics'],
        bgChars: ['💻', '🎨']
    },
    'ai-apps': {
        icon: '📱', eyebrow: 'App Development', title: 'AI-Driven Apps',
        subtitle: 'Cross-platform mobile apps with embedded AI — intelligent recommendations, NLP interfaces, and predictive features.',
        aboutTitle: 'Smart apps for modern users',
        desc1: 'We craft mobile applications that leverage AI to deliver personalized, intelligent experiences. From recommendation engines to voice interfaces — our apps learn and adapt.',
        desc2: 'Built cross-platform for iOS and Android, deployed to both App Store and Play Store with push notifications, analytics, and backend integration included.',
        features: ['iOS & Android (cross-platform)', 'AI-powered features built-in', 'Push notifications & analytics', 'Backend & API integration', 'App Store deployment', '60 days free support'],
        tech: ['Flutter', 'React Native', 'Firebase', 'TensorFlow Lite', 'Node.js', 'PostgreSQL'],
        bgChars: ['📲', '🤖']
    },
    'rag': {
        icon: '🧠', eyebrow: 'AI / ML', title: 'RAG Solutions',
        subtitle: 'Retrieval-Augmented Generation pipelines connecting AI to your proprietary data for accurate, contextual responses.',
        aboutTitle: 'AI grounded in your data',
        desc1: 'RAG combines the power of large language models with your proprietary data. We build pipelines that retrieve relevant information and generate accurate, hallucination-free responses.',
        desc2: 'Perfect for knowledge bases, customer support, internal tools, and any use case where AI needs to reference your specific data.',
        features: ['Custom vector database setup', 'Document processing pipeline', 'Embedding model selection', 'Query optimization', 'Real-time retrieval', 'Accuracy monitoring'],
        tech: ['Pinecone', 'ChromaDB', 'LangChain', 'OpenAI Embeddings', 'Python', 'FastAPI'],
        bgChars: ['📚', '🔍']
    },
    'n8n': {
        icon: '⚡', eyebrow: 'Automation', title: 'n8n Automation',
        subtitle: 'End-to-end workflow automation — connect APIs, eliminate repetitive tasks, build processes that run 24/7.',
        aboutTitle: 'Automate everything',
        desc1: 'We design and implement intelligent automation workflows using n8n. Connect your existing tools, eliminate manual processes, and let your business run on autopilot.',
        desc2: "From email sequences to data synchronization, CRM updates to report generation — if it's repetitive, we automate it.",
        features: ['Custom workflow design', 'API integration (500+ services)', 'Error handling & monitoring', 'Scheduled & triggered flows', 'Data transformation', 'Ongoing maintenance'],
        tech: ['n8n', 'Webhooks', 'REST APIs', 'Node.js', 'PostgreSQL', 'Docker'],
        bgChars: ['🔄', '🏗️']
    },
    'langchain': {
        icon: '🔗', eyebrow: 'AI / ML', title: 'LangFlow & LangChain',
        subtitle: 'Custom LLM orchestration — multi-step AI agents, retrieval chains, and conversational AI systems.',
        aboutTitle: 'Orchestrate intelligence',
        desc1: 'We build sophisticated AI pipelines using LangChain and LangFlow. From multi-step reasoning agents to complex retrieval chains — we design systems that think.',
        desc2: 'Whether you need a customer-facing chatbot, an internal research assistant, or a complex multi-agent system — we architect and deploy it.',
        features: ['Custom agent design', 'Multi-step reasoning chains', 'Tool use & function calling', 'Memory management', 'Prompt engineering', 'Production deployment'],
        tech: ['LangChain', 'LangFlow', 'LangGraph', 'OpenAI', 'Claude', 'Python'],
        bgChars: ['⛓️', '🧩']
    },
    'cyber-security': {
        icon: '🛡️', eyebrow: 'Security', title: 'Cyber Security',
        subtitle: 'AI-powered security — intelligent threat detection, vulnerability assessments, and zero-trust architecture.',
        aboutTitle: 'Protection that never sleeps',
        desc1: 'We implement comprehensive security solutions powered by AI. From intelligent threat detection to automated vulnerability scanning — we keep your digital assets safe.',
        desc2: 'Our approach covers the full spectrum: penetration testing, security audits, incident response planning, and zero-trust architecture implementation.',
        features: ['AI-powered threat detection', 'Penetration testing', 'Security audits', 'Incident response planning', 'Zero-trust architecture', 'Compliance consulting'],
        tech: ['SIEM', 'IDS/IPS', 'Burp Suite', 'Nmap', 'Python', 'Kubernetes'],
        bgChars: ['🔒', '🔐']
    },
    'chatbots': {
        icon: '💬', eyebrow: 'AI Solutions', title: 'AI Chatbots & Agents',
        subtitle: 'Intelligent conversational agents for support, sales, and operations — powered by GPT-4 and Claude.',
        aboutTitle: 'Conversations that convert',
        desc1: 'We build AI chatbots and agents that handle real conversations. From customer support to sales qualification to internal operations — our bots understand context and deliver results.',
        desc2: 'Powered by the latest LLMs (GPT-4, Claude), trained on your data, and integrated with your existing tools.',
        features: ['Custom personality & tone', 'Knowledge base training', 'Multi-channel deployment', 'Handoff to human agents', 'Analytics & insights', 'Voice AI integration'],
        tech: ['GPT-4', 'Claude', 'Dialogflow', 'Twilio', 'WebSocket', 'Node.js'],
        bgChars: ['🗣️', '🎙️']
    },
    'ai-business': {
        icon: '📊', eyebrow: 'Business Intelligence', title: 'AI for Business',
        subtitle: 'Transform operations with AI analytics, predictive models, and intelligent dashboards.',
        aboutTitle: 'Data-driven decisions',
        desc1: 'We help businesses harness the power of AI for smarter decision-making. From predictive analytics to intelligent dashboards — we turn your data into actionable insights.',
        desc2: 'Our solutions integrate with your existing data sources and provide real-time intelligence that drives growth.',
        features: ['Predictive analytics models', 'Intelligent dashboards', 'Automated reporting', 'Demand forecasting', 'Customer segmentation', 'Process optimization'],
        tech: ['TensorFlow', 'scikit-learn', 'Tableau', 'Power BI', 'Python', 'SQL'],
        bgChars: ['📈', '🎯']
    },
    'consultancy': {
        icon: '🎯', eyebrow: 'Strategic', title: 'AI Consultancy',
        subtitle: 'Strategic consulting — AI audits, roadmaps, and digital transformation guidance.',
        aboutTitle: 'Your AI roadmap',
        desc1: 'Not sure where to start with AI? We assess your business, identify opportunities, and create a clear roadmap for AI adoption that aligns with your goals.',
        desc2: 'Our consultants bring deep technical expertise and business acumen to guide you through every step of your digital transformation journey.',
        features: ['AI readiness assessment', 'Opportunity identification', 'Technology selection', 'Implementation roadmap', 'Team training', 'Ongoing advisory'],
        tech: ['Strategy Frameworks', 'Data Assessment', 'ROI Modeling', 'Change Management', 'Workshops', 'Documentation'],
        bgChars: ['🗺️', '💡']
    }
};

export const SERVICE_KEYS = Object.keys(SERVICES);
