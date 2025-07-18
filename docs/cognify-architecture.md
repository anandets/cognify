# 🏗️ Cognify Fullstack Architecture Document

---

## 🧠 System Overview

Cognify is a multi-tenant, AI-powered SaaS platform for coaching centers, training businesses, and educational institutions (excluding K–12). It supports LMS, SIS, ERP, CRM, CMS, Marketing, Compliance, and more.

The platform will follow a microservices-first architecture, with modular service domains communicating via REST/gRPC and event-driven messaging (e.g., RabbitMQ or Kafka) where real-time sync or decoupling is critical.

A multi-tenant monorepo + polyglot service setup ensures a balance between shared libraries, service isolation, and developer velocity.

Key architectural traits:
    Global-scale SaaS with multi-tenant architecture
    Domain-driven microservices
    API-first, with clear GraphQL/REST gateways
    Built-in AI orchestration layer for workflows, triggers, and personalization
    Enterprise-grade RBAC, audit, and compliance
    Native support for offline-first operations (sync engines)

Architecture is modular microservices-first with GraphQL/REST APIs and async messaging (Kafka/RabbitMQ), built with security, AI integration, and regional compliance in mind.

### Section 2: Core Modules & Domain Services

Below is a domain-driven breakdown of Cognify's modular services, grouped for separation of concerns, scalability, and reusability.

* * * * *

🧩 Domain Services
------------------

### 1\. **LMS Service**

-   Course Builder (Content, SCORM, PPT/Word Importer, Drip Scheduling)

-   Assessment Engine (Assignments, MCQs, Proctoring, Auto-Grading)

-   Certificate Generation

-   Student Progress Tracking

-   Media Transcoder & CDN Uploader (integrated service)

### 2\. **Academic Operations Service**

-   Timetable Generator

-   Attendance (Online, Offline, Geo-based)

-   Teacher Workload Allocation

-   Report Card & Marks Entry

### 3\. **SIS (Student Information System)**

-   Student Profile & Lifecycle

-   Family / Guardian Linkage

-   Academic History

-   Access Permissions

-   Student ID & Verification

### 4\. **CRM & Marketing Service**

-   Lead Capture APIs (Web Forms, WhatsApp, Landing Pages)

-   Pipeline Stages & Automation

-   Campaign Builder (Email, SMS, WhatsApp)

-   CRM Nudges & Task Calendar

-   Social Post Generator (AI-powered)

### 5\. **Finance & Billing Service**

-   Invoice Engine (Installments, Recurring, One-Time)

-   Fee Plans & Concessions

-   GST + E-Invoice + Tally Integration

-   Payments Gateway Integration

-   Transaction Ledger per Entity

### 6\. **Website & Branding Service**

-   Drag-and-Drop Website Builder

-   Theming Engine (whitelabel, custom domain, colors)

-   Embedded Widgets (Forms, Buttons, CTAs)

### 7\. **Support & Compliance Service**

-   Ticketing System (Internal/Student-facing)

-   Audit Trail Engine

-   File Tracking Vault

-   Compliance Configuration

-   Legal Docs Management

### 8\. **BI & Analytics Service**

-   Data Warehouse Sync

-   Prebuilt Dashboards (Admin, Teacher, Business Owner)

-   Custom KPI Configurator

-   Student Heatmaps

-   Usage Monitoring (time spent, interaction, drop-offs)

### 9\. **AI Orchestration Engine**

-   Workflow Automator (IFTTT-style flow builder)

-   AI Tutor Suggestions

-   Lead Scoring

-   Student Risk Prediction

-   Task Recommender

* * * * *

🧰 Shared System Services
-------------------------

-   **Identity & Access (IAM)**\
    Auth, SSO, Role-based access, OAuth2, JWT tokens

-   **Notification Service**\
    Email, SMS, WhatsApp, In-App, Push, Queue-based delivery

-   **Media Processing Service**\
    Video compression, storage, adaptive streaming, thumbnails

-   **Audit & Event Store**\
    Event sourcing, compliance trail, rollback/replay logs


## 🧩 Core Modules & Domain Services

- LMS Service: Course Builder, Assessments, Certificates, Proctoring
- Academic Ops: Timetables, Attendance, Progress
- SIS & ERP: Profiles, Fee Plans, Inventory, ID management
- CRM: Lead capture, campaigns, sales funnel, AI scoring
- Billing: Invoices, receipts, Tally & payment gateway integration
- Website Builder: Drag-drop CMS, Whitelabel theming
- Support: Ticketing, Audit, File Tracking, Legal docs
- BI & Analytics: Dashboards, KPIs, Heatmaps, Revenue tracking
- AI Orchestration: Workflow engine, chatbots, nudges, predictions

Shared Services: Auth, Notifications, Media, Audit, Events

---

## ⚙️ Tech Stack

**Backend Tech Stack as below** : 

| Component                  | Tech                                     | Rationale                                                                    |
| -------------------------- | ---------------------------------------- | ---------------------------------------------------------------------------- |
| **Core API Services**      | `Node.js (NestJS)` / `GoLang`            | Fast, scalable, dev-friendly (Node for ecosystem, Go for perf-heavy modules) |
| **Microservice Framework** | `gRPC + REST`                            | Inter-service + external API flexibility                                     |
| **Async Messaging**        | `Kafka` / `RabbitMQ`                     | For decoupled communication (e.g., billing, email, AI)                       |
| **Database**               | `PostgreSQL` (multi-tenant)              | Structured, robust, SaaS multi-schema ready                                  |
| **Cache**                  | `Redis`                                  | Session mgmt, queue rate-limiting, analytics                                 |
| **Media & CDN**            | `Cloudflare R2` or `AWS S3 + CloudFront` | Video, files, AI-based asset optimization                                    |
| **Search**                 | `ElasticSearch` / `Typesense`            | Smart search for students, content, CRM data                                 |


** Frontend Tech Stack as below** :
| Component      | Tech                             | Notes                                            |
| -------------- | -------------------------------- | ------------------------------------------------ |
| **Web App**    | `React + Next.js`                | Fast, SEO-friendly, flexible                     |
| **Mobile App** | `Flutter` / `React Native`       | Cross-platform for students, trainers, admins    |
| **UI System**  | `Tailwind + Radix UI` / `Shadcn` | Modular and modern UI components                 |
| **AI Prompts** | `LangChain.js + OpenAI`          | Embedded GPT/Claude-style flows for LMS, CRM, BI |

**Cloud & DevOps stack** :

| Component              | Tech                                              | Reason                                    |
| ---------------------- | ------------------------------------------------- | ----------------------------------------- |
| **Infra**              | `AWS` / `GCP` (multi-region ready)                | Cloud-native deployments, autoscale infra |
| **Containerization**   | `Docker` + `Kubernetes (EKS/GKE)`                 | Service scaling and isolation             |
| **CI/CD**              | `GitHub Actions` + `ArgoCD` / `Jenkins`           | Declarative, fast pipelines               |
| **Monitoring**         | `Prometheus + Grafana` / `Datadog`                | Full observability                        |
| **Logging**            | `Loki` / `ELK` Stack                              | Service logs, alert tracing               |
| **Error Tracking**     | `Sentry`                                          | Debugging for all apps                    |
| **Secrets Management** | `Hashicorp Vault` / `AWS Secrets Manager`         | 🔒 Secure creds rotation                  |
| **Security**           | `Cloudflare WAF`, `Zero Trust Proxy`, RBAC engine | Layered protection                        |

**AI/ML Stack** :

| Component            | Tech                                                       | Role                                      |
| -------------------- | ---------------------------------------------------------- | ----------------------------------------- |
| **Workflow Engine**  | `Node-RED` / Custom Builder (BPMN style)                   | Drag-drop business logic                  |
| **AI Service Layer** | `FastAPI` + `LangChain`, `LLM Gateway`                     | NLP-powered automation                    |
| **Model Hosting**    | `Replicate`, `AWS Bedrock`, `OpenRouter`, `NVIDIA Triton`  | Flexibility across commercial + open LLMs |
| **Proctoring AI**    | `Computer Vision model + Face detection + Browser monitor` | Online exam integrity                     |
| **Analytics Engine** | `dbt + BigQuery` or `Redshift`                             | Transform + query warehouse data          |




**Backend:** Node.js/NestJS + Go, PostgreSQL, Kafka, Redis, Elastic  
**Frontend:** React + Next.js, Tailwind/Shadcn, Flutter/React Native  
**Infra:** AWS/GCP, Docker, K8s, ArgoCD, Grafana, Loki, Sentry  
**AI/ML:** LangChain, OpenRouter, FastAPI, Replicate, Node-RED  
**Compliance:** GDPR, DPDP, FERPA, country-based storage

---

### Section 4: Data Models & Flows

Cognify will adopt a **multi-tenant, modular schema architecture**, enabling per-client data isolation, scalability, and shared infra benefits. Each service has its own domain models, unified via internal APIs and event streams.

* * * * *

🗂️ Key Data Models (Top-Level)
-------------------------------

### 1\. **Tenant**
-   `tenant_id`, `name`, `customizations`, `theme`, `plan`, `region`
-   Determines schema isolation + UI branding

### 2\. **User (Unified Auth)**

-   `user_id`, `role`, `permissions`, `tenant_id`, `login_type`
-   Shared across all services (JWT-based SSO)
-   Role groups: `student`, `teacher`, `admin`, `owner`, `parent`

**LMS Model**

| Model          | Key Fields                                            |
| -------------- | ----------------------------------------------------- |
| `Course`       | `title`, `type`, `tags`, `media`, `drip_schedule`     |
| `Module`       | `course_id`, `name`, `sequence`, `content_block_refs` |
| `Assessment`   | `course_id`, `type`, `questions`, `time_limit`        |
| `Certificate`  | `user_id`, `course_id`, `score`, `template_id`        |
| `ContentBlock` | Rich content type: video, file, doc, quiz, AI         |

**CRM Model**

| Model          | Key Fields                                           |
| -------------- | ---------------------------------------------------- |
| `Lead`         | `name`, `source`, `contact`, `status`, `assigned_to` |
| `Campaign`     | `medium`, `target_group`, `template`, `schedule`     |
| `Task`         | `title`, `due_date`, `assigned_to`, `linked_lead_id` |
| `Conversation` | WhatsApp / Email / SMS history per lead              |

**SIS/ERP Model**
| Model        | Key Fields                                                      |
| ------------ | --------------------------------------------------------------- |
| `Student`    | `personal_info`, `academic_history`, `guardian_id`, `tenant_id` |
| `Attendance` | `student_id`, `status`, `method`, `timestamp`, `reason`         |
| `Timetable`  | `classroom_id`, `periods`, `teachers`, `subjects`, `weeks`      |
| `Invoice`    | `student_id`, `amount`, `status`, `due_date`, `txn_id`          |
| `Payment`    | `txn_id`, `gateway_ref`, `method`, `invoice_id`, `status`       |

**BI & Analytics Model**
| Model        | Key Fields                                             |
| ------------ | ------------------------------------------------------ |
| `KPI_Event`  | `event_type`, `timestamp`, `source`, `user_id`, `tags` |
| `Engagement` | `user_id`, `course_id`, `time_spent`, `activity_score` |
| `FunnelStep` | `lead_id`, `step`, `time_taken`, `conversion_flag`     |


🔁 Data Flow Overview
---------------------
1.  **Lead Capture → CRM Pipeline**
    -   Lead is created from form/WhatsApp → task assigned → campaign triggers
2.  **Enrollment → LMS + SIS Sync**
    -   On payment, student is provisioned in SIS + added to course + granted permissions
3.  **Live Activity → Analytics**
    -   Attendance, course time, CRM clicks sent to BI service (event-based)
4.  **Workflow Engine**
    -   If [Student inactive 7 days] → trigger email + CRM task
5.  **Proctoring + Exam → Certificate Engine**
    -   Exam results → scoring engine → auto-certification → storage in user profile

## 🧬 Data Models & Flow

- Unified Tenant and User system (RBAC, JWT)
- Modular schemas per domain (Course, CRM, Payment, etc.)
- Asynchronous event sourcing for usage, BI, automations
- LMS ↔ CRM ↔ SIS ↔ Billing tightly integrated via workflow


### Section 5: Security, Scalability & Compliance Strategy

This section outlines how Cognify will remain **secure**, **scalable**, and **compliant** across international markets --- without compromising speed or UX.
Security Architecture
------------------------

## ✅ Core Principles

-   **Zero Trust by Default**: All API access requires token validation + scope filtering
-   **Principle of Least Privilege**: User roles + feature flags determine access dynamically
-   **Encrypted at Rest + Transit**: TLS 1.3 for transport, AES-256 for all stored data
-   **Audit Logging**: Immutable, timestamped logs of all data-modifying actions
-   **Session Expiry + Rotation**: Refresh tokens + active session termination

### 🔒 Authentication

-   OAuth2 / OpenID Connect with support for:
    -   Email/password login
    -   Google/Microsoft SSO
    -   Admin-enforced 2FA (OTP / App-based)

### 🔍 Authorization & Permissions
-   Role-Based Access Control (RBAC) via middleware
-   Tenant-level permission engine (scopes: student, teacher, admin, support, owner)
-   Optional row-level security on PostgreSQL (data tenancy boundaries)

## Scalability Strategy
| Layer         | Strategy                                                     |
| ------------- | ------------------------------------------------------------ |
| **App Layer** | Stateless microservices + horizontal scaling on K8s          |
| **Database**  | Postgres with connection pooling, sharded read replicas      |
| **AI Models** | Host large models on Bedrock/OpenRouter, small models on GPU |
| **Media/CDN** | Chunked uploads + adaptive streaming, regional edge caching  |
| **Queue**     | Kafka/RabbitMQ for burst processing + retries                |

Elastic Autoscaling : API and worker pods auto-scale on CPU/memory

## Compliance Coverage
| Region                | Compliance Strategy                                                |
| --------------------- | ------------------------------------------------------------------ |
| **India**             | DPDP Act + GST rules + Tally audit log format                      |
| **EU**                | GDPR (consent mgmt, data exports, right to forget)                 |
| **US**                | FERPA (for academic records), COPPA (if <13 learners)              |
| **Middle East / SEA** | Data residency via region-specific S3 buckets (e.g., `ap-south-1`) |

Other Protections
-----------------
-   **WAF**: Cloudflare WAF for DDoS, SQLi, XSS
-   **VAPT**: Periodic Penetration Testing for vulnerabilities
-   **Backup Strategy**: Hourly snapshots, cross-region archival
-   **Incident Response**: Auto escalation + rollback plan (runbooks per service)

Background tasks offloaded to distributed queues

## 🛡️ Security, Scalability & Compliance

- Zero Trust: OAuth2 + SSO + MFA
- RBAC + multi-schema PostgreSQL
- Encrypted storage (TLS + AES-256)
- DDoS/WAF + Secrets Vault + VAPT
- Region-based backup, data export, retention policies
- 99.9% uptime SLA with autoscaling

-

## Summary

Cognify will launch not as an MVP but as a complete SaaS platform — combining scalability, modularity, AI orchestration, and all critical ops in one place.

