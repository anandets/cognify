# UI Design Specification: US-004-10 Tax Management

## Overview

**Story ID**: US-004-10  
**Epic**: EP-004 Finance & Billing System  
**Title**: Tax Management  
**User Story**: As a finance administrator, I want to configure and apply tax rules based on location and service type, so that I can ensure compliance with tax regulations  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This tax management interface follows Apple's design philosophy, focusing on clarity, precision, and confidence. The design empowers finance administrators to configure complex tax rules with ease, ensuring Cognify's education platform remains compliant with various tax jurisdictions while minimizing cognitive load.

## Screen Architecture

**Layout Framework**: 64px header + 56px action bar + main content area  
**Navigation Pattern**: Primary navigation with tax dashboard, rule configuration, jurisdiction management, reporting, and audit trail  
**Content Organization**: Dashboard overview → Tax rules → Jurisdictions → Products/services → Reports  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Action buttons, active states, primary CTAs  
**Tax Green**: #30D158 - Tax compliance indicators, validated rules, approved states  
**Warning Amber**: #FF9F0A - Pending rules, attention needed, review states  
**Critical Red**: #FF3B30 - Non-compliance warnings, invalid rules, critical issues  
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Code Font**: SF Mono for tax codes and technical details  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Panel titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Tax Management Dashboard
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Tax Management Dashboard     🔔 👤 Michael (Finance) │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Rules │ 🌎 Jurisdictions │ 📝 Products │ 📊 Reports │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Compliance Summary ───────────────────────────────────────────────────┐  │
│ │ Active Jurisdictions: 28      Tax Rules: 156     Service Categories: 12  │  │
│ │ Compliance Status: ✅ Compliant                                         │  │
│ │ Last Tax Engine Update: 25 Jul 2025                                     │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Tax Collection Overview ─────────────────────────────────────────────┐  │
│ │ [Chart: Monthly Tax Collection by Jurisdiction Type]                   │  │
│ │                                                                         │  │
│ │ Year-to-Date Collection: $186,450                                      │  │
│ │ Previous Year: $152,300   YoY Change: +22.4%                           │  │
│ │                                                                         │  │
│ │ Top Tax Jurisdictions:                                                 │  │
│ │ California: $38,250   New York: $25,100   Texas: $22,400               │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Compliance Alerts ──────────────────────────────┐  │
│ │ ⚠️ Tax rule changes detected in 3 jurisdictions     │  │
│ │    [🔍 View Details] [🔄 Update Rules]              │  │
│ │                                                     │  │
│ │ ⚠️ GST rate change announced for Australia          │  │
│ │    Effective: 01 Aug 2025   [🔍 View Details]       │  │
│ │                                                     │  │
│ │ ✅ All service categories have valid tax mappings   │  │
│ └─────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Filing Calendar ───────────────────────────────────────────────────┐  │
│ │ Upcoming Filings:                                                    │  │
│ │ 30 Jul 2025 - UK VAT Return Q2     [📝 Prepare] [⏰ Remind Me]       │  │
│ │ 15 Aug 2025 - US Sales Tax (Multi) [📝 Prepare] [⏰ Remind Me]       │  │
│ │ 01 Sep 2025 - EU VAT Return       [📝 Prepare] [⏰ Remind Me]       │  │
│ │                                                                       │  │
│ │ [📅 View Full Calendar] [⚙️ Configure Reminders]                     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Tax Rule Configuration
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Tax Rule Configuration        ⚙️ Manage Tax Rules   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Rules │ 🌎 Jurisdictions │ 📝 Products │ 📊 Reports │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Rule Search & Filter ────────────────────────────────────────────────┐  │
│ │ Jurisdiction: [United States ▼]   State/Region: [California ▼]          │  │
│ │ Tax Type: [Sales Tax ▼]   Status: [All Statuses ▼]                      │  │
│ │                                                                         │  │
│ │ [🔍 Search Rules] [🔄 Reset Filters] [➕ Create New Rule]               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Tax Rules ───────────────────────────────────────────────────────────┐  │
│ │ "California State Sales Tax"                                           │  │
│ │ Rate: 7.25%   Type: Sales Tax   Effective: 01 Jan 2023 - Present       │  │
│ │ Applies To: All Products & Services   Override: None                    │  │
│ │ Status: ✅ Active   Last Updated: 15 Jan 2023                          │  │
│ │ [✏️ Edit] [📜 View History] [❌ Deactivate]                             │  │
│ │                                                                         │  │
│ │ "California Education Services Exemption"                              │  │
│ │ Rate: 0%   Type: Exemption   Effective: 01 Jan 2023 - Present          │  │
│ │ Applies To: Certified Education Products   Override: CA State Sales Tax │  │
│ │ Status: ✅ Active   Last Updated: 15 Jan 2023                          │  │
│ │ [✏️ Edit] [📜 View History] [❌ Deactivate]                             │  │
│ │                                                                         │  │
│ │ "San Francisco City Tax"                                               │  │
│ │ Rate: 1.25%   Type: Local Tax   Effective: 01 Apr 2023 - Present       │  │
│ │ Applies To: All Products & Services   Override: None                    │  │
│ │ Status: ✅ Active   Last Updated: 25 Mar 2023                          │  │
│ │ [✏️ Edit] [📜 View History] [❌ Deactivate]                             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Bulk Actions ────────────────────────────────────────────────────────┐  │
│ │ [🔄 Update Selected] [❌ Deactivate Selected] [📤 Export Rules]         │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Tax Rule Editor
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Tax Rule Editor               ✏️ Edit Tax Rule      │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Rules │ 🌎 Jurisdictions │ 📝 Products │ 📊 Reports │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Rule Information ──────────────────────────────────────────────────┐  │
│ │ Rule Name: [California State Sales Tax]                               │  │
│ │ Description: [Standard California state sales tax applied to taxable  │  │
│ │              goods and services]                                      │  │
│ │                                                                       │  │
│ │ Tax Type: [Sales Tax ▼]   Tax Category: [Standard Rate ▼]             │  │
│ │ Internal Code: [CA-STATE-SALES]                                       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Jurisdiction & Rate ────────────────────────────────────────────────┐  │
│ │ Country: [United States ▼]                                            │  │
│ │ State/Region: [California ▼]                                          │  │
│ │ City/Locality: [All ▼]                                                │  │
│ │                                                                       │  │
│ │ Rate: [7.25] %                                                        │  │
│ │ Compound Tax: [No ▼]                                                  │  │
│ │ Priority: [10]                                                        │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Applicability ────────────────────────────────────────────────────┐  │
│ │ Effective Date Range: [01/01/2023] to [No End Date ✓]               │  │
│ │                                                                       │  │
│ │ Apply To:                                                            │  │
│ │ [●] All Products & Services                                         │  │
│ │ [○] Specific Categories:                                            │  │
│ │      [  ] Courses   [  ] Certifications   [  ] Subscriptions        │  │
│ │      [  ] Events    [  ] Materials        [  ] Consulting           │  │
│ │                                                                       │  │
│ │ Customer Types:                                                      │  │
│ │ [✓] Individual   [✓] Business   [✓] Non-profit   [✓] Government     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Advanced Options ───────────────────────────────────────────────────┐  │
│ │ Tax Exemption Rules:                                                  │  │
│ │ [+] Add Exemption Rule                                               │  │
│ │                                                                       │  │
│ │ Documentation Required: [✓] Tax Certificate   [  ] Exemption Form    │  │
│ │                                                                       │  │
│ │ Notes: [Additional information about this tax rule]                   │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [💾 Save Changes] [🔍 Validate Rule] [🧪 Test Rule] [↩️ Cancel]              │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Tax Jurisdiction Management
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Tax Jurisdiction Management   🌎 Manage Jurisdictions│
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Rules │ 🌎 Jurisdictions │ 📝 Products │ 📊 Reports │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Jurisdiction Search ────────────────────────────────────────────────┐  │
│ │ Region: [All Regions ▼]   Status: [Active ▼]   Tax Type: [All Types ▼] │  │
│ │ [🔍 Search] [🔄 Reset] [➕ Add Jurisdiction] [🔄 Sync External Data]   │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Active Jurisdictions ────────────────────────────────────────────────┐  │
│ │ Jurisdiction         │ Tax Types      │ # Rules  │ Last Updated      │  │
│ │ United States        │ Sales Tax      │ 52       │ 25 Jul 2025       │  │
│ │  ├─ California       │ Sales Tax      │ 15       │ 25 Jul 2025       │  │
│ │  ├─ New York         │ Sales Tax      │ 12       │ 22 Jul 2025       │  │
│ │  └─ Texas            │ Sales Tax      │ 10       │ 18 Jul 2025       │  │
│ │ European Union       │ VAT            │ 27       │ 20 Jul 2025       │  │
│ │  ├─ Germany          │ VAT            │ 3        │ 20 Jul 2025       │  │
│ │  ├─ France           │ VAT            │ 3        │ 15 Jul 2025       │  │
│ │  └─ Spain            │ VAT            │ 3        │ 12 Jul 2025       │  │
│ │ United Kingdom       │ VAT            │ 1        │ 10 Jul 2025       │  │
│ │ Australia            │ GST            │ 2        │ 05 Jul 2025       │  │
│ │ Canada               │ GST/HST/PST    │ 14       │ 01 Jul 2025       │  │
│ │                                                                       │  │
│ │ [👁️ View Details] [✏️ Edit Selected] [📜 View Rule History]           │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Tax Authority Updates ────────────────────────────────────────────────┐  │
│ │ 🔔 Australia: GST rate change announced                                 │  │
│ │    Effective: 01 Aug 2025   [🔍 View Details] [✓ Acknowledge]           │  │
│ │                                                                         │  │
│ │ 🔔 EU: New digital services VAT rules                                  │  │
│ │    Effective: 01 Oct 2025   [🔍 View Details] [✓ Acknowledge]           │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Tax Reporting & Compliance
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Tax Reports & Compliance      📊 Generate Reports   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ ⚙️ Rules │ 🌎 Jurisdictions │ 📝 Products │ 📊 Reports │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Report Configuration ───────────────────────────────────────────────┐  │
│ │ Report Type: [Tax Collection Summary ▼]                                │  │
│ │ Jurisdiction: [All Jurisdictions ▼]                                    │  │
│ │ Date Range: [Q2 2025 (Apr-Jun) ▼]                                     │  │
│ │ Group By: [Jurisdiction ▼]   Format: [Detailed ▼]                      │  │
│ │                                                                       │  │
│ │ [📊 Generate Report] [📑 Save Template] [📋 Schedule Report]           │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Report Preview ────────────────────────────────────────────────────┐  │
│ │ Tax Collection Summary - Q2 2025 (Apr-Jun)                           │  │
│ │                                                                       │  │
│ │ [Chart: Tax Collection by Jurisdiction]                               │  │
│ │                                                                       │  │
│ │ Jurisdiction   │ Tax Collected  │ # Transactions │ Avg. Rate     │  │
│ │ United States  │ $48,250.75     │ 1,245          │ 7.2%          │  │
│ │  ├─ California │ $15,320.50     │ 385            │ 8.5%          │  │
│ │  ├─ New York   │ $8,750.25      │ 210            │ 8.875%        │  │
│ │  └─ Other      │ $24,180.00     │ 650            │ 6.1%          │  │
│ │ European Union │ $35,120.30     │ 925            │ 21%           │  │
│ │ United Kingdom │ $12,450.80     │ 315            │ 20%           │  │
│ │ Other          │ $5,230.15      │ 180            │ Varies        │  │
│ │ ────────────────────────────────────────────────────────────        │  │
│ │ Total          │ $101,052.00    │ 2,665          │ -             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Filing & Compliance ──────────────────────────────────────────────┐  │
│ │ Filing Requirements:                                                │  │
│ │ US Sales Tax - Q2   Due: 31 Jul 2025   Status: Ready to File       │  │
│ │ UK VAT Return - Q2   Due: 30 Jul 2025   Status: Ready to File      │  │
│ │ EU VAT MOSS - Q2     Due: 20 Jul 2025   Status: Filed ✅           │  │
│ │                                                                     │  │
│ │ [📝 Prepare Filing] [📤 Export For Filing] [📜 View Filed Returns]  │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Primary Actions
- **Tax Rule Management**: Intuitive creation and editing of tax rules
- **Jurisdiction Configuration**: Streamlined tax jurisdiction setup
- **Product Category Mapping**: Efficient product-to-tax classification
- **Tax Reporting**: Comprehensive tax collection and filing reports
- **Compliance Alerts**: Proactive notification system for tax changes

### Micro-interactions
- **Rule Validation**: Real-time validation of tax rule configurations
- **Rate Calculator**: Interactive tax calculation preview
- **Jurisdiction Selection**: Map-based jurisdiction selection
- **Rule Testing**: Sample transaction testing against tax rules
- **Filing Checklist**: Interactive compliance checklist for tax filings

### Feedback Systems
- **Rule Status**: Clear visual indication of tax rule status
- **Validation Feedback**: Immediate feedback on rule configuration
- **Compliance Alerts**: Contextual notifications for regulatory changes
- **Filing Reminders**: Timely alerts for approaching filing deadlines

## Responsive Behavior

### Desktop Experience (1440px+)
- **Multi-Panel Dashboard**: Rich layout with comprehensive tax management tools
- **Advanced Rule Builder**: Full-featured tax rule configuration interface
- **Interactive Jurisdiction Maps**: Geographical visualization of tax jurisdictions
- **Complex Reporting**: Comprehensive tax reporting with drill-down capabilities

### Tablet Experience (768px-1439px)
- **Tabbed Interface**: Organized tax management sections with touch-optimized navigation
- **Simplified Rule Builder**: Essential tax rule configuration with guided workflows
- **List-Based Jurisdiction View**: Efficient list presentation of jurisdictions
- **Core Reporting**: Essential tax reports with limited customization

### Mobile Experience (below 768px)
- **Native App Feel**: Bottom navigation with quick access to essential functions
- **Wizard-Based Rule Creation**: Step-by-step tax rule configuration
- **Jurisdiction Summary**: High-level jurisdiction overview with key details
- **Report Snapshots**: Simplified tax report summaries

## Accessibility Features

### Visual Accessibility
- **WCAG 2.1 AA Compliance**: Minimum 4.5:1 color contrast ratios
- **Status Indicators**: Multiple cues beyond color for rule status
- **Typography**: Scalable fonts with clear hierarchy for tax information
- **Focus Management**: Visible focus indicators for keyboard navigation

### Functional Accessibility
- **Screen Reader Support**: ARIA labels for all tax management elements
- **Keyboard Navigation**: Complete keyboard accessibility for all functions
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Error Identification**: Clear error messaging with remediation guidance

### Cognitive Accessibility
- **Clear Terminology**: Simplified tax terminology with tooltips
- **Step-By-Step Guidance**: Progressive disclosure for complex tax configurations
- **Contextual Help**: Inline guidance for tax rule creation and management
- **Consistent Patterns**: Familiar interaction patterns across tax functions

## Performance Considerations

### Loading Optimization
- **Progressive Enhancement**: Core tax management functionality loads first
- **Lazy Loading**: Detailed rule lists and reports load on demand
- **Pagination**: Efficient display of large tax rule sets
- **Minimal Transfers**: Optimized API calls for tax configuration

### Real-time Updates
- **WebSocket Integration**: Live tax rule status updates
- **Optimistic UI**: Immediate feedback for tax configuration actions
- **Background Validation**: Asynchronous tax rule validation
- **Intelligent Polling**: Adaptive tax authority update checking

### Scalability Features
- **Rule Indexing**: Efficient retrieval of applicable tax rules
- **Calculation Caching**: Performance-optimized tax calculation
- **Report Generation**: Background processing for large tax reports
- **Jurisdiction Updates**: Efficient handling of tax jurisdiction updates

## Security Features

### Data Protection
- **Access Control**: Role-based permissions for tax configuration
- **Audit Trail**: Comprehensive logging of tax rule changes
- **Version Control**: Historical versioning of tax rules
- **Change Approval**: Workflow-based approval for tax rule modifications

### Platform Security
- **API Security**: Secure communication with tax authority systems
- **Input Validation**: Protection against injection in tax configurations
- **Session Security**: Secure session management for tax operations
- **Data Integrity**: Checksums for critical tax data

### Compliance Features
- **Regulatory Tracking**: Automated monitoring of tax regulation changes
- **Filing Evidence**: Cryptographic proof of tax filings
- **Data Retention**: Policy-based retention of tax records
- **Audit Support**: Comprehensive records for tax audits

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired tax management interface for an education platform, showing tax rule configuration, jurisdiction management, compliance dashboard, and reporting tools with clean typography, education blue color scheme, and modern layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design a tax management system with SF Pro typography, education blue (#007AFF) and tax green (#30D158) accents, rule configuration interface, jurisdiction management, compliance tools, and reporting features following Apple's design language"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated tax management interface following Apple's design principles, targeting finance administrators who need to configure and manage complex tax rules across multiple jurisdictions. Focus on rule creation, jurisdiction management, compliance tools, and reporting capabilities with clarity and confidence."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: July 2025  
**Designed for**: Finance administrators and tax compliance teams  
**Approval Status**: Ready for development review
