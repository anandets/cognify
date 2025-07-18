# ⚙️ Tech Stack

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

## Section 4: Data Models & Flows

Cognify will adopt a **multi-tenant, modular schema architecture**, enabling per-client data isolation, scalability, and shared infra benefits. Each service has its own domain models, unified via internal APIs and event streams.

* * * * *

🗂️ Key Data Models (Top-Level)
-------------------------------

## 1\. **Tenant**
-   `tenant_id`, `name`, `customizations`, `theme`, `plan`, `region`
-   Determines schema isolation + UI branding

## 2\. **User (Unified Auth)**

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

