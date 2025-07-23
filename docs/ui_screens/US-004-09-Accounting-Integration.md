# UI Design Specification: US-004-09 Accounting Integration

## Overview

**Story ID**: US-004-09  
**Epic**: EP-004 Finance & Billing System  
**Title**: Accounting Integration  
**User Story**: As a finance administrator, I want to integrate with standard accounting software, so that I can maintain accurate financial records without duplicate data entry  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This accounting integration interface follows Apple's design philosophy, focusing on clarity, efficiency, and seamless connections. The design empowers finance administrators to establish and manage integrations between Cognify's education platform and industry-standard accounting software with minimal friction and maximum confidence.

## Screen Architecture

**Layout Framework**: 64px header + 56px action bar + main content area  
**Navigation Pattern**: Primary navigation with integration dashboard, configuration, mapping, sync history, and logs  
**Content Organization**: Dashboard overview → Connection setup → Data mapping → Sync management → Audit trail  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Primary actions, active states, connection indicators  
**Integration Purple**: #5856D6 - Integration relationships, data mapping, connectivity indicators  
**Success Green**: #34C759 - Successful connections, healthy integrations, complete syncs  
**Warning Amber**: #FF9F0A - Warning states, attention needed, pending actions  
**Critical Red**: #FF3B30 - Failed connections, sync errors, critical issues  
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Code Font**: SF Mono for integration codes and technical details  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Panel titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Integration Dashboard
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Integration Dashboard        🔔 👤 Maria (Finance)   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Configure │ 🔄 Sync │ 📝 Mapping │ 📜 Logs │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Connected Systems ──────────────────────────────────────────────────┐  │
│ │ ✅ QuickBooks Online                                                   │  │
│ │    Status: Connected   Last Sync: 25 Jul 2025, 09:15   Health: Optimal  │  │
│ │    [🔄 Sync Now] [⚙️ Configure] [📊 View Sync History] [❌ Disconnect]   │  │
│ │                                                                         │  │
│ │ ✅ Xero                                                                │  │
│ │    Status: Connected   Last Sync: 24 Jul 2025, 15:30   Health: Warning  │  │
│ │    [🔄 Sync Now] [⚙️ Configure] [📊 View Sync History] [❌ Disconnect]   │  │
│ │    ⚠️ Warning: 3 transactions require attention                        │  │
│ │                                                                         │  │
│ │ ❌ NetSuite                                                            │  │
│ │    Status: Authentication Error   Last Sync: Failed                     │  │
│ │    [🔄 Reconnect] [⚙️ Configure] [📊 View Logs] [❌ Remove]              │  │
│ │                                                                         │  │
│ │ [➕ Add New Integration]                                                │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Sync Status Summary ────────────────────────────────────────────────┐  │
│ │ Transactions Synced Today: 58                                         │  │
│ │ Pending Transactions: 12                                              │  │
│ │ Sync Errors: 3                                                        │  │
│ │ Next Scheduled Sync: 25 Jul 2025, 18:00                               │  │
│ │                                                                         │  │
│ │ [Chart: Sync Activity - Last 7 Days]                                   │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Quick Actions ───────────────────────────────────────────────────────┐  │
│ │ [🔄 Sync All Systems] [🛠️ Troubleshoot Errors] [📊 Generate Audit Report] │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Integration Configuration
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Configure Integration        ⚙️ QuickBooks Online   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Configure │ 🔄 Sync │ 📝 Mapping │ 📜 Logs │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Connection Settings ────────────────────────────────────────────────┐  │
│ │ Integration Type: QuickBooks Online                                    │  │
│ │ Environment: [Production ▼]                                            │  │
│ │ Authentication Status: ✅ Connected                                    │  │
│ │ Connected Account: finance@cognifyedu.com                              │  │
│ │ Company ID: COG-12345-QBOE                                            │  │
│ │                                                                         │  │
│ │ [🔄 Refresh Connection] [🔑 Update Credentials] [🔒 View API Tokens]    │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Sync Settings ───────────────────────────────────────────────────────┐  │
│ │ Sync Frequency: [Every 6 Hours ▼]                                      │  │
│ │                                                                         │  │
│ │ Data to Sync:                                                          │  │
│ │ [✓] Invoices   [✓] Payments   [✓] Expenses   [✓] Chart of Accounts     │  │
│ │ [✓] Customers  [✓] Vendors    [  ] Products  [  ] Purchase Orders      │  │
│ │                                                                         │  │
│ │ Sync Direction:                                                        │  │
│ │ [○] One-way (Cognify → QuickBooks)                                    │  │
│ │ [●] Two-way (Bi-directional)                                          │  │
│ │ [○] One-way (QuickBooks → Cognify)                                    │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Advanced Settings ─────────────────────────────────────────────────┐  │
│ │ Error Handling:                                                      │  │
│ │ [○] Abort sync on any error                                         │  │
│ │ [●] Continue sync and flag errors for review                        │  │
│ │ [○] Auto-retry failed transactions (up to 3 attempts)               │  │
│ │                                                                       │  │
│ │ Notifications:                                                       │  │
│ │ [✓] Email on sync completion   To: [finance@cognifyedu.com]         │  │
│ │ [✓] Alert on sync errors      To: [finance@cognifyedu.com]         │  │
│ │ [  ] Daily sync summary      To: [                      ]         │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [💾 Save Changes] [🔄 Test Connection] [↩️ Revert to Defaults]                │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Data Mapping Configuration
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Data Field Mapping           📝 Configure Mapping   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Configure │ 🔄 Sync │ 📝 Mapping │ 📜 Logs │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Select Entity Type ─────────────────────────────────────────────────┐  │
│ │ [Invoices ▼] [Payments ▼] [Expenses ▼] [Customers ▼] [Accounts ▼]     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Invoice Field Mapping ────────────────────────────────────────────────┐  │
│ │ Cognify Field        │ Mapping Type      │ QuickBooks Field             │  │
│ │ Invoice Number       │ [Direct Map ▼]    │ InvoiceNumber                │  │
│ │ Invoice Date         │ [Direct Map ▼]    │ TxnDate                      │  │
│ │ Student Name         │ [Direct Map ▼]    │ CustomerRef.name             │  │
│ │ Course Name          │ [Direct Map ▼]    │ Line.Description             │  │
│ │ Amount               │ [Direct Map ▼]    │ TotalAmt                     │  │
│ │ Payment Terms        │ [Value Map ▼]     │ SalesTermRef                 │  │
│ │ Payment Status       │ [Custom Logic ▼]  │ [✏️ Edit Mapping Logic]      │  │
│ │ Department           │ [Direct Map ▼]    │ DepartmentRef                │  │
│ │ Class Code           │ [Direct Map ▼]    │ ClassRef                     │  │
│ │ Tax Rate             │ [Direct Map ▼]    │ TxnTaxDetail.TaxRate         │  │
│ │                                                                         │  │
│ │ [➕ Add Custom Field] [🔄 Auto-Map Fields] [↩️ Reset to Default]        │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Field Value Mapping ─────────────────────────────────────────────────┐  │
│ │ Payment Terms:                                                         │  │
│ │ Cognify Value       │ QuickBooks Value                                │  │
│ │ Net 30             │ 3 - Net 30                                      │  │
│ │ Net 15             │ 2 - Net 15                                      │  │
│ │ Due on Receipt      │ 1 - Due on Receipt                              │  │
│ │ [➕ Add Mapping]                                                       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [💾 Save Mapping] [🔄 Test Mapping] [📑 Import Mapping] [📤 Export Mapping]   │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Sync Management
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Sync Management              🔄 Manage Sync        │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Configure │ 🔄 Sync │ 📝 Mapping │ 📜 Logs │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Integration Selection ──────────────────────────────────────────────┐  │
│ │ Integration: [QuickBooks Online ▼]                                     │  │
│ │ Status: Connected   Last Sync: 25 Jul 2025, 09:15   Health: Optimal    │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Manual Sync Options ────────────────────────────────────────────────┐  │
│ │ Data Types:                                                           │  │
│ │ [✓] Invoices   [✓] Payments   [✓] Expenses   [✓] Chart of Accounts     │  │
│ │ [✓] Customers  [✓] Vendors    [  ] Products  [  ] Purchase Orders      │  │
│ │                                                                         │  │
│ │ Date Range:                                                            │  │
│ │ [○] All Data   [●] Date Range: [01/07/2025] to [25/07/2025]           │  │
│ │                                                                         │  │
│ │ [🔄 Start Sync] [⏱️ Schedule for Later]                                │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Sync History ───────────────────────────────────────────────────────┐  │
│ │ 25 Jul 2025, 09:15  │ Auto Sync    │ Completed │ 35 records  │ 00:42   │  │
│ │ 24 Jul 2025, 15:30  │ Manual Sync  │ Completed │ 28 records  │ 00:38   │  │
│ │ 24 Jul 2025, 09:00  │ Auto Sync    │ Completed │ 12 records  │ 00:23   │  │
│ │ 23 Jul 2025, 17:45  │ Manual Sync  │ Failed    │ 0 records   │ 00:05   │  │
│ │ 23 Jul 2025, 09:00  │ Auto Sync    │ Completed │ 42 records  │ 00:51   │  │
│ │                                                                         │  │
│ │ [📊 View Detailed History] [📥 Export Sync Logs]                        │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Pending Issues ──────────────────────────────────────────────────────┐  │
│ │ [❗️] Invoice #INV-2025-089 failed to sync: Invalid tax code             │  │
│ │     [🔍 View Details] [🔄 Retry] [⚙️ Edit & Retry] [⏭️ Skip]             │  │
│ │                                                                         │  │
│ │ [⚠️] Payment #PAY-2025-124 has conflicting data in both systems        │  │
│ │     [🔍 View Details] [👍 Use Cognify Data] [👍 Use QuickBooks Data]    │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Integration Logs & Audit Trail
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Integration Logs             📜 System Logs         │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Configure │ 🔄 Sync │ 📝 Mapping │ 📜 Logs │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Log Filter Options ────────────────────────────────────────────────┐  │
│ │ Integration: [QuickBooks Online ▼]                                     │  │
│ │ Log Level: [All Levels ▼]   Date Range: [Last 7 Days ▼]               │  │
│ │ Event Type: [All Events ▼]                                            │  │
│ │                                                                         │  │
│ │ [🔍 Search Logs] [🔄 Refresh] [📥 Export Logs]                         │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── System Logs ───────────────────────────────────────────────────────┐  │
│ │ 📅 25/07/2025 09:15:42 │ ✅ INFO  │ Sync started: QuickBooks Online   │  │
│ │ 📅 25/07/2025 09:15:58 │ ✅ INFO  │ Syncing invoices: 15 records      │  │
│ │ 📅 25/07/2025 09:16:12 │ ✅ INFO  │ Syncing payments: 12 records      │  │
│ │ 📅 25/07/2025 09:16:25 │ ✅ INFO  │ Syncing expenses: 8 records       │  │
│ │ 📅 25/07/2025 09:16:38 │ ⚠️ WARN  │ Mapping mismatch: Invoice tax code│  │
│ │ 📅 25/07/2025 09:16:42 │ ❌ ERROR │ Failed to sync: INV-2025-089      │  │
│ │ 📅 25/07/2025 09:16:48 │ ✅ INFO  │ Continuing sync after error       │  │
│ │ 📅 25/07/2025 09:17:02 │ ✅ INFO  │ Sync completed: 35 records total  │  │
│ │ 📅 25/07/2025 09:17:03 │ ✅ INFO  │ Sync summary: 34 success, 1 failed│  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Transaction Audit Trail ─────────────────────────────────────────────┐  │
│ │ Entity       │ Action     │ Status    │ Timestamp      │ User         │  │
│ │ INV-2025-088 │ Created    │ Success   │ 25/07 08:45:12 │ Maria.F      │  │
│ │ INV-2025-088 │ Synced     │ Success   │ 25/07 09:16:05 │ System       │  │
│ │ INV-2025-089 │ Created    │ Success   │ 25/07 08:52:30 │ Maria.F      │  │
│ │ INV-2025-089 │ Synced     │ Failed    │ 25/07 09:16:42 │ System       │  │
│ │ PAY-2025-124 │ Created    │ Success   │ 25/07 09:05:18 │ Alex.J       │  │
│ │ PAY-2025-124 │ Synced     │ Warning   │ 25/07 09:16:15 │ System       │  │
│ │                                                                         │  │
│ │ [🔍 View Details] [📥 Export Audit Trail] [📊 Generate Compliance Report]│  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Primary Actions
- **Integration Setup**: Streamlined connection process to accounting software
- **Configuration Management**: Intuitive settings for integration behavior
- **Data Mapping**: Visual field mapping between systems
- **Sync Control**: Manual and automated synchronization management
- **Error Resolution**: Interactive issue detection and resolution workflow

### Micro-interactions
- **Connection Status**: Real-time visual indicators of integration health
- **Mapping Validation**: Immediate feedback on field mapping compatibility
- **Sync Progress**: Animated progress indicators during synchronization
- **Error Resolution**: Step-by-step guidance for resolving integration issues

### Feedback Systems
- **Connection Status**: Clear visual indication of integration health
- **Sync Confirmation**: Visual and notification feedback for completed syncs
- **Error Alerting**: Contextual error notifications with resolution options
- **System Notifications**: Important integration status changes and alerts

## Responsive Behavior

### Desktop Experience (1440px+)
- **Multi-Panel Dashboard**: Rich layout with comprehensive integration status
- **Advanced Configuration**: Full-featured integration settings and mapping tools
- **Detailed Analytics**: Comprehensive sync history and audit trails
- **Multi-System Management**: Simultaneous management of multiple integrations

### Tablet Experience (768px-1439px)
- **Tabbed Interface**: Organized integration sections with touch-optimized navigation
- **Simplified Configuration**: Essential integration settings with guided workflows
- **Focused Analytics**: Key integration metrics with expandable details
- **Sequential Management**: Focused management of one integration at a time

### Mobile Experience (below 768px)
- **Native App Feel**: Bottom navigation with quick access to essential functions
- **Wizard-Based Setup**: Step-by-step integration setup and configuration
- **Summary View**: Integration health indicators and critical alerts
- **Action-Based Interface**: Common integration actions prioritized for mobile

## Accessibility Features

### Visual Accessibility
- **WCAG 2.1 AA Compliance**: Minimum 4.5:1 color contrast ratios
- **Status Indicators**: Multiple cues beyond color for integration status
- **Typography**: Scalable fonts with clear hierarchy
- **Focus Management**: Visible focus indicators for keyboard navigation

### Functional Accessibility
- **Screen Reader Support**: ARIA labels for all integration elements
- **Keyboard Navigation**: Complete keyboard accessibility for all functions
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Error Identification**: Clear error messaging with guidance

### Cognitive Accessibility
- **Clear Terminology**: Simplified integration terminology
- **Step-By-Step Guidance**: Progressive disclosure for complex integration tasks
- **Contextual Help**: Inline guidance for integration configuration
- **Consistent Patterns**: Familiar interaction patterns across integration functions

## Performance Considerations

### Loading Optimization
- **Progressive Enhancement**: Core integration functionality loads first
- **Lazy Loading**: Detailed logs and history load on demand
- **Data Pagination**: Efficient display of large log histories
- **Minimal Transfers**: Optimized API calls for integration status

### Real-time Updates
- **WebSocket Integration**: Live integration status updates
- **Optimistic UI**: Immediate feedback for integration actions
- **Background Processes**: Synchronization runs in background threads
- **Intelligent Polling**: Adaptive status checking based on integration activity

### Scalability Features
- **Connection Pooling**: Efficient management of multiple accounting connections
- **Batch Processing**: Optimized handling of large data synchronizations
- **Queue Management**: Prioritized handling of sync operations
- **Resource Optimization**: Efficient use of system resources during sync

## Security Features

### Data Protection
- **Credential Security**: Secure storage of accounting system credentials
- **OAuth Implementation**: Modern authentication with accounting platforms
- **Data Encryption**: End-to-end encryption for sensitive financial data
- **Access Control**: Role-based permissions for integration management

### Platform Security
- **API Security**: Secure communication with accounting platforms
- **Rate Limiting**: Protection against excessive API calls
- **Input Validation**: Protection against injection attacks
- **Session Security**: Secure session management for integration operations

### Compliance Features
- **Audit Trail**: Comprehensive logging of all integration activities
- **Data Integrity**: Validation checks to ensure financial data accuracy
- **Non-repudiation**: Cryptographic evidence of sync operations
- **Compliance Reporting**: Built-in reports for audit requirements

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired accounting integration dashboard, showing connection status, data mapping interface, sync management, and audit logs with clean typography, education blue and integration purple color scheme, modern layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design an accounting integration system with SF Pro typography, education blue (#007AFF) and integration purple (#5856D6) accents, connection dashboard, mapping interface, sync management, and audit logs following Apple's design language"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated accounting integration interface following Apple's design principles, targeting finance administrators who need to connect with standard accounting platforms. Focus on connection management, data mapping, synchronization control, and audit capabilities with minimal friction and maximum confidence."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: July 2025  
**Designed for**: Finance administrators and accounting teams  
**Approval Status**: Ready for development review
