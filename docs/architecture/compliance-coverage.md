# Compliance Coverage
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

