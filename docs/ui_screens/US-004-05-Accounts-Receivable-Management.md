# UI Design Specification: US-004-05 Accounts Receivable Management

## Overview

**Story ID**: US-004-05  
**Epic**: EP-004 Finance & Billing System  
**Title**: Accounts Receivable Management  
**User Story**: As a finance manager, I want to track and manage accounts receivable, so that I can monitor outstanding payments, follow up on overdue amounts, and maintain healthy cash flow  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This accounts receivable management interface follows Apple's design philosophy, focusing on clarity, organization, and delightful micro-interactions. The design empowers finance managers to efficiently track outstanding payments, follow up on overdue accounts, and maintain healthy cash flow for Cognify's education platform.

## Screen Architecture

**Layout Framework**: 64px header + 56px action bar + main content area  
**Navigation Pattern**: Primary navigation with AR dashboard, invoice tracking, follow-ups, and analytics  
**Content Organization**: Dashboard overview → Invoice management → Follow-up actions → Aging analysis → Analytics  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Action buttons, active states, primary CTAs  
**Payment Green**: #30D158 - Paid invoices, completed follow-ups, achievement indicators  
**Warning Amber**: #FF9F0A - Pending payments, flagged invoices, approaching due dates  
**Critical Red**: #FF3B30 - Overdue payments, urgent issues, escalation alerts  
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Code Font**: SF Mono for invoice codes and technical details  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Subsection titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Accounts Receivable Dashboard
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify             Accounts Receivable            🔔 👤 Priya (Finance)   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🧾 Invoices │ ⏱️ Aging │ 🔔 Follow-ups │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── AR Summary ────────────────────────────────────────────────────────┐  │
│ │ 💰 Total Receivables: $245,500   🧾 Open Invoices: 48   ⚠️ Overdue: 8  │  │
│ │ Collection Rate: 92%   Average Days to Pay: 28                         │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── AR Aging ────────────────────────────────────────────────────────────┐  │
│ │ Current: $156,200   1-30 Days: $54,300   31-60 Days: $24,000   60+ Days: $11,000 │  │
│ │ [⏱️ View Aging Report] [🔔 Schedule Follow-ups] [📥 Receive Payment]       │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Recent Activity ───────────────────────────────────────────────────┐  │
│ │ "Payment Received - Lakeside Academy"   Amount: $12,500   Date: 22 Jul 2025   │  │
│ │ "Follow-up Email Sent - Metro Institute"   Amount: $8,200   Date: 21 Jul 2025   │  │
│ │ "Invoice Created - Tech Learning Center"   Amount: $15,600   Date: 20 Jul 2025   │  │
│ │ [📋 View Details] [📧 Send Reminder] [📥 Record Payment] [⚠️ Flag]        │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Quick Actions ───────────────────────────────────────────────────────┐  │
│ │ [🧾 View Invoices] [📧 Send Reminders] [📥 Record Payment] [📈 View Analytics]│  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Invoice Management
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Invoice Management              🧾 View Invoices    │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🧾 Invoices │ ⏱️ Aging │ 🔔 Follow-ups │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Filter Options ────────────────────────────────────────────────────┐  │
│ │ Status: [All ▼] [Open] [Paid] [Overdue] [Partially Paid]              │  │
│ │ Date Range: [Last 90 Days ▼]   Amount Range: [All ▼]                   │  │
│ │ [🔍 Search Invoices] [🔄 Reset Filters] [⚙️ Save Filter]                │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Invoice List ─────────────────────────────────────────────────────┐  │
│ │ "INV-2025-123"   Customer: Lakeside Academy   Amount: $12,500   Status: Paid │  │
│ │ Due: 15 Jul 2025   Paid: 22 Jul 2025   Days Late: 7                  │  │
│ │ [📋 View Details] [📧 Send Receipt] [📥 Adjust Payment]                │  │
│ │                                                                         │  │
│ │ "INV-2025-124"   Customer: Metro Institute   Amount: $8,200   Status: Overdue │  │
│ │ Due: 18 Jul 2025   Paid: --   Days Late: 5                            │  │
│ │ [📋 View Details] [📧 Send Reminder] [📥 Record Payment]               │  │
│ │                                                                         │  │
│ │ "INV-2025-125"   Customer: Tech Learning Center   Amount: $15,600   Status: Open │  │
│ │ Due: 30 Jul 2025   Paid: --   Days Late: --                          │  │
│ │ [📋 View Details] [📧 Send Invoice] [📥 Record Payment]                │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Batch Actions ────────────────────────────────────────────────────────┐  │
│ │ [📧 Send Multiple Reminders] [📊 Generate Statement] [📥 Record Bulk Payment]│  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Aging Analysis
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Aging Analysis                ⏱️ View Aging        │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🧾 Invoices │ ⏱️ Aging │ 🔔 Follow-ups │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Aging Summary ─────────────────────────────────────────────────────┐  │
│ │                                                                         │  │
│ │ [Chart: Aging Distribution]                                            │  │
│ │                                                                         │  │
│ │ Current: $156,200 (64%)                                                │  │
│ │ 1-30 Days: $54,300 (22%)                                               │  │
│ │ 31-60 Days: $24,000 (10%)                                              │  │
│ │ 60+ Days: $11,000 (4%)                                                 │  │
│ │                                                                         │  │
│ │ [📊 View Detailed Report] [🔔 Generate Follow-up Plan] [📤 Export Data]  │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Aging Accounts ────────────────────────────────────────────────────┐  │
│ │ "Metro Institute"   Outstanding: $8,200   Days Overdue: 5            │  │
│ │ Last Contact: 21 Jul 2025   Next Action: Follow-up Call (24 Jul 2025) │  │
│ │ [📧 Send Reminder] [📞 Log Call] [📥 Record Payment]                  │  │
│ │                                                                         │  │
│ │ "Horizon College"   Outstanding: $11,000   Days Overdue: 65           │  │
│ │ Last Contact: 15 Jul 2025   Next Action: Escalate to Collections      │  │
│ │ [📧 Send Final Notice] [⚠️ Escalate] [📥 Record Payment]               │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Follow-up Management
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify               Follow-up Management            🔔 Manage Follow-ups │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🧾 Invoices │ ⏱️ Aging │ 🔔 Follow-ups │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Today's Follow-ups ───────────────────────────────────────────────┐  │
│ │ "Metro Institute"   Action: Follow-up Call   Amount: $8,200          │  │
│ │ [📞 Log Call] [📧 Send Email] [⏱️ Reschedule] [✓ Mark Complete]       │  │
│ │                                                                         │  │
│ │ "Pacific Academy"   Action: Second Reminder   Amount: $5,400          │  │
│ │ [📞 Log Call] [📧 Send Email] [⏱️ Reschedule] [✓ Mark Complete]       │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Communication Templates ───────────────────────────────────────────┐  │
│ │ [🔔 First Reminder] [🔔 Second Reminder] [🔔 Final Notice] [🔔 Thank You]  │  │
│ │ [✏️ Edit Templates] [➕ Create New Template] [📤 Export Templates]      │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Follow-up Schedule ─────────────────────────────────────────────────┐  │
│ │ Today: 2 follow-ups                                                    │  │
│ │ Tomorrow: 3 follow-ups                                                 │  │
│ │ Next 7 days: 8 follow-ups                                              │  │
│ │ [📅 View Calendar] [⏱️ Reschedule] [🔔 Set Reminder]                     │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Accounts Receivable Analytics
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                AR Analytics                 📊 Export Report      │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🧾 Invoices │ ⏱️ Aging │ 🔔 Follow-ups │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── AR Metrics ─────────────────────────────────────────────────────────┐  │
│ │ Collection Rate: 92%   Average Days to Pay: 28                         │  │
│ │ Total Receivables: $245,500   Bad Debt Ratio: 1.2%                     │  │
│ │                                                                         │  │
│ │ [Chart: Collection Efficiency]                                         │  │
│ │ [Chart: Payment Trends]                                                │  │
│ │ [Chart: Customer Payment Performance]                                  │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Customer Analysis ─────────────────────────────────────────────────┐  │
│ │ Top Paying Customers:                                                 │  │
│ │ 1. Lakeside Academy - Avg. Days to Pay: 22                           │  │
│ │ 2. Tech Learning Center - Avg. Days to Pay: 25                        │  │
│ │                                                                         │  │
│ │ Late Payment Patterns:                                                 │  │
│ │ 1. Metro Institute - Avg. Days Late: 12                               │  │
│ │ 2. Horizon College - Avg. Days Late: 45                               │  │
│ │                                                                         │  │
│ │ [📊 View Full Report] [📤 Export Data] [🔔 Set Alerts]                  │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Primary Actions
- **Invoice Management**: View, filter, and track outstanding invoices
- **Aging Analysis**: Interactive aging reports with drill-down capabilities
- **Follow-up Actions**: Schedule and manage payment reminders and follow-ups
- **Payment Recording**: Quick and detailed payment recording options

### Micro-interactions
- **Live Payment Updates**: Real-time updates when payments are received
- **Aging Indicators**: Visual cues for invoice aging status
- **Follow-up Confirmations**: Visual confirmation when follow-ups are scheduled or completed
- **Payment Status**: Visual indicators for payment status changes

### Feedback Systems
- **Collection Status**: Real-time tracking of collection efficiency
- **Overdue Alerts**: Contextual notifications for overdue accounts
- **Performance Insights**: AI-powered suggestions for collection optimization
- **Payment Confirmation**: Confirmation and celebration animations for received payments

## Responsive Behavior

### Desktop Experience (1440px+)
- **Multi-Panel Dashboard**: Side-by-side receivables summary and aging analysis
- **Advanced Invoice Management**: Comprehensive invoice tracking and management
- **Detailed Aging Reports**: Full aging analysis with interactive charts
- **Complete Follow-up System**: Multi-stage follow-up management

### Tablet Experience (768px-1439px)
- **Tabbed Interface**: Organized sections with touch-optimized navigation
- **Simplified Invoice View**: Essential invoice details with swipe actions
- **Key Aging Metrics**: Core aging data with expandable details
- **Streamlined Follow-ups**: Priority-based follow-up management

### Mobile Experience (below 768px)
- **Native App Feel**: Bottom navigation with quick action buttons
- **Mobile-First Invoice List**: Thumb-friendly invoice summary cards
- **Simple Aging Indicators**: Color-coded aging status
- **Quick Follow-up Actions**: One-touch follow-up initiation

## Accessibility Features

### Visual Accessibility
- **WCAG 2.1 AA Compliance**: Minimum 4.5:1 color contrast ratios
- **Accessible Color Combinations**: Sufficient contrast for all invoice states
- **Typography**: Scalable fonts with clear hierarchy
- **Focus Management**: Keyboard navigation support

### Functional Accessibility
- **Screen Reader Support**: ARIA labels for invoice data and actions
- **Keyboard Navigation**: All functions accessible via keyboard shortcuts
- **Voice Commands**: Integration with browser voice controls
- **Alternative Formats**: Text alternatives for charts and aging reports

### Cognitive Accessibility
- **Clear Organization**: Logical grouping of invoices, aging, and follow-ups
- **Contextual Help**: Inline guidance for payment tracking and collection
- **Error Prevention**: Smart validation for payment recording and follow-up scheduling
- **Consistent Patterns**: Familiar interaction patterns across AR functions

## Performance Considerations

### Loading Optimization
- **Progressive Enhancement**: Core dashboard loads first
- **Lazy Loading**: Analytics and invoice details load on demand
- **Image Optimization**: Automatic compression for report charts and graphics
- **Smart Caching**: Invoice data caching with intelligent invalidation

### Real-time Updates
- **WebSocket Integration**: Live invoice and payment status updates
- **Optimistic UI**: Immediate feedback for payment recording and follow-up actions
- **Background Sync**: Automatic invoice data synchronization
- **Offline Capability**: Essential AR functions work offline with queue

### Scalability Features
- **API Rate Limiting**: Intelligent API usage for invoice management
- **Batch Operations**: Efficient bulk follow-up and payment recording
- **Media Storage**: Cloud-based invoice storage with CDN delivery
- **Analytics Aggregation**: Efficient data processing for AR reporting

## Security Features

### Data Protection
- **OAuth 2.0**: Secure authentication for financial channels
- **Token Encryption**: Encrypted storage of access and refresh tokens
- **Access Control**: Role-based invoice and payment access
- **Audit Logging**: Complete payment activity tracking

### Platform Security
- **API Security**: Secure communication with payment and financial platforms
- **Content Validation**: XSS protection for user-generated payment data
- **Media Security**: Secure handling of financial documents
- **Privacy Compliance**: GDPR/CCPA compliance for customer financial data

### Publishing Safety
- **Content Approval**: Workflow-based approval for payment communications
- **Payment Validation**: Prevention of invalid payment recording
- **Platform Guidelines**: Automated compliance checking for financial communications
- **Crisis Management**: Emergency access management for financial data

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired accounts receivable dashboard, invoice management, aging analysis, follow-up system, financial analytics, education brand colors, modern icons, clean typography, sophisticated layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design a premium accounts receivable management system with SF Pro typography, education blue (#007AFF) and payment green (#30D158) accents, invoice tracker, aging dashboard, follow-up interface, and Apple-inspired visual hierarchy"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated accounts receivable interface following Apple's design principles, targeting finance managers who need unified invoice tracking, aging analysis, follow-up management, and payment recording. Focus on collection efficiency, payment visibility, and cashflow management."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: July 2025  
**Designed for**: Finance managers and education business teams  
**Approval Status**: Ready for development review
