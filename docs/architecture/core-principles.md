# ✅ Core Principles

-   **Zero Trust by Default**: All API access requires token validation + scope filtering
-   **Principle of Least Privilege**: User roles + feature flags determine access dynamically
-   **Encrypted at Rest + Transit**: TLS 1.3 for transport, AES-256 for all stored data
-   **Audit Logging**: Immutable, timestamped logs of all data-modifying actions
-   **Session Expiry + Rotation**: Refresh tokens + active session termination

## 🔒 Authentication

-   OAuth2 / OpenID Connect with support for:
    -   Email/password login
    -   Google/Microsoft SSO
    -   Admin-enforced 2FA (OTP / App-based)

## 🔍 Authorization & Permissions
-   Role-Based Access Control (RBAC) via middleware
-   Tenant-level permission engine (scopes: student, teacher, admin, support, owner)
-   Optional row-level security on PostgreSQL (data tenancy boundaries)

