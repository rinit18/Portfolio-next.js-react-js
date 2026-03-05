/**
 * ╔══════════════════════════════════════════════════════════════╗
 * ║              PORTFOLIO CONFIGURATION FILE                    ║
 * ║   Edit all personal info, project data & links here         ║
 * ╚══════════════════════════════════════════════════════════════╝
 */

// ──────────────────────────────────────────────────────────────
//  PERSONAL INFO
// ──────────────────────────────────────────────────────────────
export const PERSONAL = {
    name: 'Rinit Bhowmick',
    greeting: "Hi! I'm Rinit Bhowmick",

    title: 'Java Backend Developer | Spring Boot & Distributed Systems',

    tagline:
        'I develop backend systems using Java 17, Spring Boot, Kafka, and PostgreSQL, with a focus on microservices and event-driven architecture.',

    location: 'Kolkata, India',

    bio1:
        'I am a backend-focused developer with a strong interest in building scalable and reliable web systems. My primary stack includes Java 17, Spring Boot, Kafka, and PostgreSQL, and I enjoy working with microservices and distributed system concepts.',

    bio2:
        'Through my projects, I explore API design, distributed communication, caching, and system performance optimization using tools like gRPC, Redis, Docker, and observability tools such as Prometheus and Grafana.',

    servicesTagline:
        'Backend developer based in Kolkata, India — building microservices, event-driven systems, and high-performance APIs through hands-on projects.',

    workTagline:
        'A showcase of backend systems and distributed architectures built using modern backend technologies.',

    contactSubtitle: 'Connect with me',
    contactTitle: 'Get in touch',
    contactMessage:
        "I'd love to hear from you. Whether you have a question about my work, want to collaborate on a project, or just want to say hi, feel free to send me a message.",
};


// ──────────────────────────────────────────────────────────────
//  CONTACT & SOCIAL LINKS
// ──────────────────────────────────────────────────────────────
export const LINKS = {
    email: 'rinit.bhowmick.dev@gmail.com',
    github: 'https://github.com/rinit18',
    linkedin: 'https://www.linkedin.com/in/rinit-bhowmick',
    facebook: 'https://www.facebook.com/robbert.corupt.1/',
    instagram: 'https://www.instagram.com/',
    resume: '/RinitBhowmick_Backend_CV.pdf',

    web3formsKey: 'e82078ef-6a04-4fa3-86fa-e8435210a780',
};


// ──────────────────────────────────────────────────────────────
//  SITE META
// ──────────────────────────────────────────────────────────────
export const META = {
    title: 'Rinit Bhowmick — Java Backend Developer',
    description:
        'Portfolio of Rinit Bhowmick, a Java backend developer specializing in Spring Boot, Kafka, microservices, and distributed systems.',
};


// ──────────────────────────────────────────────────────────────
//  HERO — ROLE CYCLING
// ──────────────────────────────────────────────────────────────
export const ROLES = [
    'Java Backend Developer',
    'Spring Boot Developer',
    'Microservices Enthusiast',
    'API Developer',
];


// ──────────────────────────────────────────────────────────────
//  AVAILABILITY STATUS
// ──────────────────────────────────────────────────────────────
export const STATUS = {
    available: true,
    label: 'Open to Work',
};


// ──────────────────────────────────────────────────────────────
//  HEADER TECH BADGES
// ──────────────────────────────────────────────────────────────
export const HERO_BADGES = [
    'Java 17',
    'Spring Boot',
    'Kafka',
    'PostgreSQL',
    'Docker',
    'gRPC',
];


// ──────────────────────────────────────────────────────────────
//  ABOUT — INFO CARDS
// ──────────────────────────────────────────────────────────────
export const INFO_CARD_DATA = [
    {
        title: 'Core Stack',
        description: 'Java 17, Spring Boot, Kafka, PostgreSQL, Redis, gRPC, Docker',
    },
    {
        title: 'Education',
        description: 'B.Sc. (AI) · MCA — Focus on Backend Development',
    },
    {
        title: 'Projects',
        description: 'Backend systems exploring microservices and event-driven architectures',
    },
];


// ──────────────────────────────────────────────────────────────
//  ABOUT — STAT COUNTERS
// ──────────────────────────────────────────────────────────────
export const STATS = [
    { value: '3+', label: 'Projects Built' },
    { value: '12', label: 'Technologies Used' },
    { value: '1.5+', label: 'Years Learning Backend' },
];


// ──────────────────────────────────────────────────────────────
//  ABOUT — TECH STACK BADGES
// ──────────────────────────────────────────────────────────────
export const TECH_STACK = [
    { name: 'Java 17', color: '#f89820' },
    { name: 'Spring Boot', color: '#6db33f' },
    { name: 'Apache Kafka', color: '#8b5cf6' },
    { name: 'PostgreSQL', color: '#336791' },
    { name: 'Redis', color: '#dc382d' },
    { name: 'gRPC', color: '#a78bfa' },
    { name: 'Docker', color: '#2496ed' },
    { name: 'Docker Compose', color: '#2496ed' },
    { name: 'Prometheus', color: '#e6522c' },
    { name: 'Grafana', color: '#f46800' },
    { name: 'React', color: '#61dafb' },
    { name: 'Next.js', color: '#c4b5fd' },
];


// ──────────────────────────────────────────────────────────────
//  SERVICES
// ──────────────────────────────────────────────────────────────
export const SERVICES = [
    {
        emoji: '⚙️',
        title: 'Backend Development',
        description:
            'Developing REST APIs and backend services using Java 17, Spring Boot, and PostgreSQL with clean architecture practices.',
        gradient: 'from-blue-900/60 to-indigo-900/60 border-blue-700/40 hover:border-blue-500',
    },
    {
        emoji: '📡',
        title: 'Event-Driven Systems',
        description:
            'Exploring event-driven architectures using Apache Kafka for asynchronous communication and distributed messaging.',
        gradient: 'from-amber-900/60 to-orange-900/60 border-amber-700/40 hover:border-amber-500',
    },
    {
        emoji: '🐳',
        title: 'Containerization & DevOps',
        description:
            'Containerizing backend applications with Docker and managing multi-service environments using Docker Compose.',
        gradient: 'from-teal-900/60 to-cyan-900/60 border-teal-700/40 hover:border-teal-500',
    },
    {
        emoji: '🔗',
        title: 'API & Communication',
        description:
            'Designing REST APIs and experimenting with gRPC-based service communication and Redis caching for backend performance.',
        gradient: 'from-violet-900/60 to-purple-900/60 border-violet-700/40 hover:border-violet-500',
    },
];


// ──────────────────────────────────────────────────────────────
//  PROJECTS / WORK
// ──────────────────────────────────────────────────────────────
// ──────────────────────────────────────────────────────────────
//  PROJECTS / WORK (Deep Case Studies)
// ──────────────────────────────────────────────────────────────
export const PROJECTS = [
    {
        title: 'Scalable Patient Management System',
        slug: 'patient-management-system',
        description: 'Java 17 · Spring Boot 3 · Kafka · gRPC · Redis',
        highlight:
            'Production-style microservices platform with API Gateway, Kafka event streaming, and gRPC service communication',
        bgImage: '/work-1.png',
        github: 'https://github.com/rinit18scalable-patient-management-system',
        tags: [
            'Java 17',
            'Spring Boot',
            'Kafka',
            'gRPC',
            'Redis',
            'PostgreSQL',
            'Docker',
        ],

        details: {
            problem:
                'Healthcare platforms often rely on tightly coupled backend services where synchronous communication creates latency bottlenecks and cascading failures during high load.',

            goal:
                'Design a scalable healthcare backend using microservices where services communicate using both synchronous RPC (gRPC) and asynchronous messaging (Kafka) while maintaining security, resilience, and observability.',

            architecture: `                Client Applications
                        │
                        ▼
              API Gateway (Spring Cloud Gateway)
           JWT Validation + Redis Rate Limiting
                        │
        ┌───────────────┼────────────────┐
        ▼               ▼                ▼
   Auth Service     Patient Service   Billing Service
   JWT issuance     Core domain       gRPC billing
                    REST APIs         provisioning
                    │
                    │ Kafka Events
                    ▼
              Analytics Service
          Event processing & metrics

Infrastructure
────────────────────────────────────────────
PostgreSQL (per-service database)
Redis (caching + rate limiting)
Apache Kafka (event streaming)
Prometheus (metrics scraping)
Grafana (monitoring dashboards)
Docker Compose (local orchestration)
AWS CDK (infrastructure provisioning)`,

            communication: [
                'REST/HTTP: Client → API Gateway',
                'gRPC: Patient Service → Billing Service',
                'Kafka Events: Patient Service → Analytics Service',
            ],

            highlights: [
                'Microservices architecture with independent PostgreSQL databases per service',
                'Event-driven system design using Apache Kafka with Protobuf serialization',
                'Reliable Kafka producer configuration (acks=all, retries enabled)',
                'Low-latency service communication using gRPC',
                'Redis caching layer for frequently accessed patient records',
                'API rate limiting implemented at the gateway using Redis',
                'Circuit breaker and retry patterns implemented with Resilience4j',
                'JWT authentication enforced through a custom Spring Cloud Gateway filter',
                'Custom Micrometer metrics tracking Redis cache misses',
                'Centralized exception handling with structured error responses',
                'Observability using Prometheus, Grafana, and Spring Boot Actuator',
                'Containerized services with multi-stage Docker builds',
                'Infrastructure provisioning using AWS CDK',
                'CI/CD pipelines implemented with GitHub Actions',
                'End-to-end integration testing using RestAssured and JUnit',
            ],

            repositoryStructure: `api-gateway/         API gateway (JWT validation, Redis rate limiting)
auth-service/        Authentication service
patient-service/     Core domain service (REST, Kafka, Redis, metrics)
billing-service/     gRPC billing microservice
analytics-service/   Kafka consumer service

integration-tests/   End-to-end API tests
infrastructure/      AWS CDK infrastructure code
monitoring/          Prometheus configuration
api-request/         REST request collections
grpc-request/        gRPC request examples`,

            stack: [
                'Java 17',
                'Spring Boot 3',
                'Spring Security + JWT',
                'Spring Cloud Gateway',
                'Apache Kafka + Protocol Buffers',
                'gRPC',
                'Redis',
                'PostgreSQL',
                'Resilience4j',
                'Micrometer',
                'Prometheus',
                'Grafana',
                'Docker',
                'Docker Compose',
                'Maven',
                'JUnit 5',
                'RestAssured',
                'AWS CDK',
                'GitHub Actions',
            ],

            runLocally: `# Start the full platform
docker-compose up --build

This command starts:
• All microservices
• PostgreSQL databases
• Kafka + Zookeeper
• Redis`,

            ports: [
                'API Gateway → 4004',
                'Auth Service → 4005',
                'Patient Service → 4000',
                'Billing Service → 4001 (HTTP) / 9001 (gRPC)',
                'Analytics Service → 4002',
                'Redis → 6379',
            ],

            apiDocs: [
                'Patient Service → http://localhost:4000/swagger-ui/index.html',
                'Auth Service → http://localhost:4005/swagger-ui/index.html',
            ],

            testing: `# Run end-to-end integration tests
mvn test

Tests validate authentication and patient workflows through the API Gateway.`,

            cicd: [
                'maven.yml → Builds all services',
                'docker-build.yml → Builds Docker images',
                'integration-test.yml → Runs full integration tests using Docker Compose',
            ],

            observability: [
                'Spring Boot Actuator + Micrometer metrics',
                'Prometheus scrapes metrics every 5 seconds',
                'Grafana dashboards visualize API latency and throughput',
                'Redis cache hit/miss ratio monitoring',
                'JVM memory and service health metrics',
            ],

            performanceMetrics: [
                'gRPC reduced internal service latency by ~35–40% compared to REST during local testing',
                'Redis caching reduced average patient record retrieval time from ~120ms to ~40ms',
                'Kafka event pipeline processed ~1000 events/min in local Docker testing',
                'System tested with ~200 concurrent requests using k6 load testing',
            ],

            customMetric: 'custom.redis.cache.miss',

            future: [
                'Kubernetes Implementation',
                'Distributed tracing using OpenTelemetry',
                'Service discovery integration',
            ],
        },
    },

    {
        title: 'Real-Time Observability Stack',
        slug: 'observability-stack',
        description: 'Prometheus · Grafana · Micrometer',
        highlight: 'Monitoring dashboards for JVM metrics and request latency',
        bgImage: '/work-2.png',
        github: 'https://github.com/rinit18',
        tags: ['Prometheus', 'Grafana', 'Spring Boot'],
        details: null,
    },

    {
        title: 'University Records REST API',
        slug: 'university-api',
        description: 'Spring Boot · JPA · Hibernate',
        highlight: 'REST API with relational data modeling and pagination',
        bgImage: '/work-3.png',
        github: 'https://github.com/rinit18',
        tags: ['Spring Boot', 'JPA', 'PostgreSQL'],
        details: null,
    },
];

// ──────────────────────────────────────────────────────────────
//  NAVBAR LINKS
// ──────────────────────────────────────────────────────────────
export const NAV_LINKS = [
    { label: 'Home', href: '#top' },
    { label: 'About me', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'My Work', href: '#work' },
    { label: 'Contact me', href: '#contact' },
];


// ──────────────────────────────────────────────────────────────
//  FOOTER
// ──────────────────────────────────────────────────────────────
export const FOOTER = {
    copyright: `© ${new Date().getFullYear()} Rinit Bhowmick. All rights reserved.`,
};