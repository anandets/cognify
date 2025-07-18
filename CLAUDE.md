# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Cognify is an AI-powered SaaS platform designed as an all-in-one Education Business Operating System (EBOS) for coaching centers, tutors, and education businesses worldwide. It's a multi-tenant platform that combines LMS, SIS, ERP, CRM, marketing automation, billing, and more into a unified system.

## Architecture

### System Design
- **Architecture**: Microservices-first with domain-driven design
- **Communication**: REST/GraphQL APIs with async messaging (Kafka/RabbitMQ)
- **Multi-tenancy**: Schema-based isolation with unified auth
- **AI Integration**: Built-in AI orchestration layer for workflows and automation

### Core Domain Services
1. **LMS Service**: Course builder, assessments, certificates, proctoring
2. **Academic Operations**: Timetables, attendance, progress tracking
3. **SIS (Student Information System)**: Student profiles, lifecycle management
4. **CRM & Marketing**: Lead capture, campaigns, automation, AI scoring
5. **Finance & Billing**: Invoicing, payments, GST/Tally integration
6. **Website Builder**: Drag-drop CMS with whitelabel theming
7. **Support & Compliance**: Ticketing, audit trails, file tracking
8. **BI & Analytics**: Dashboards, KPIs, student heatmaps
9. **AI Orchestration**: Workflow automation, chatbots, predictions

### Shared System Services
- **Identity & Access (IAM)**: OAuth2, JWT, RBAC
- **Notification Service**: Email, SMS, WhatsApp, push notifications
- **Media Processing**: Video compression, CDN, adaptive streaming
- **Audit & Event Store**: Event sourcing, compliance logging

## Technology Stack

### Backend
- **Core APIs**: Node.js (NestJS) / GoLang
- **Database**: PostgreSQL (multi-tenant)
- **Cache**: Redis
- **Messaging**: Kafka / RabbitMQ
- **Search**: ElasticSearch / Typesense
- **Storage**: Cloudflare R2 or AWS S3 + CloudFront

### Frontend
- **Web**: React + Next.js
- **Mobile**: Flutter / React Native
- **UI**: Tailwind + Radix UI / Shadcn
- **AI Integration**: LangChain.js + OpenAI

### Infrastructure
- **Cloud**: AWS / GCP (multi-region)
- **Containers**: Docker + Kubernetes
- **CI/CD**: GitHub Actions + ArgoCD
- **Monitoring**: Prometheus + Grafana / Datadog
- **Security**: Cloudflare WAF, Zero Trust, RBAC

### AI/ML
- **Workflow Engine**: Node-RED / Custom BPMN builder
- **AI Services**: FastAPI + LangChain
- **Model Hosting**: Replicate, AWS Bedrock, OpenRouter
- **Analytics**: dbt + BigQuery/Redshift

## Development Practices

### Agent-Based Development
The project uses a sophisticated agent-based development system with specialized personas:

- **@architect (Winston)**: System design, architecture docs, technology selection
- **@dev (James)**: Code implementation, debugging, following story-driven development
- **@bmad-master**: Universal task executor for various BMad-Method capabilities
- **@pm, @po, @qa, @ux-expert, @sm, @analyst**: Specialized roles for different aspects

### Key Development Principles
- **Story-Driven Development**: All development follows structured story workflows
- **Holistic System Thinking**: Consider all components as part of larger system
- **User Experience Drives Architecture**: Start with user journeys, work backward
- **Pragmatic Technology Selection**: Choose boring tech where possible, exciting where necessary
- **Security at Every Layer**: Defense in depth implementation
- **Data-Centric Design**: Let data requirements drive architecture

### Important Files and Structure

```
cognifyapp/
├── docs/                           # Product and architecture documentation
│   ├── prd.md                     # Product requirements
│   ├── cognify-architecture.md    # System architecture
│   └── cognify-architecture/      # Detailed architecture docs
├── scripts/
│   └── shard_doc.py              # Document sharding utility
└── .cursor/rules/                # Agent persona definitions
```

## Key Constraints and Considerations

### Security & Compliance
- **Multi-region compliance**: GDPR (EU), DPDP (India), FERPA (US)
- **Zero Trust architecture**: All API access requires token validation
- **Encrypted storage**: TLS 1.3 transport, AES-256 at rest
- **Audit logging**: Immutable logs for all data-modifying actions

### Scalability
- **Stateless microservices**: Horizontal scaling on Kubernetes
- **Database**: PostgreSQL with connection pooling, sharded read replicas
- **Media handling**: Chunked uploads, adaptive streaming, regional CDN
- **Queue processing**: Kafka/RabbitMQ for burst handling

### Target Users
1. **Education Business Owners**: Efficiency, scale, automation focus
2. **Academic Coordinators**: Daily operations, attendance, timetabling
3. **Trainers/Teachers**: Content delivery, feedback, assignments
4. **Sales & Marketing**: Lead nurturing, funnel tracking, automation
5. **Students/Learners**: Course access, progress tracking, feedback
6. **Parents**: Transparency, communication, fee tracking

## Development Workflow

When implementing features:
1. Follow story-driven development patterns
2. Use appropriate agent personas (@architect for design, @dev for implementation)
3. Ensure multi-tenant considerations in all implementations
4. Implement proper RBAC and audit logging
5. Consider AI integration opportunities
6. Follow security-first principles
7. Ensure compliance with regional requirements

## Utilities

- **Document Sharding**: Use `scripts/shard_doc.py` to break large documents into manageable sections
- **Agent System**: Use `@{agent-name}` to activate specialized development personas
- **Template System**: Available templates for architecture, PRD, stories, and more