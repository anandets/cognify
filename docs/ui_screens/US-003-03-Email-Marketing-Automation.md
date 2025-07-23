# UI Design Specification: US-003-03 Email Marketing Automation

## Overview

**Story ID**: US-003-03  
**Epic**: EP-003 Customer Relationship Management (CRM)  
**Title**: Email Marketing Automation  
**User Story**: As a marketing coordinator, I want to create automated email sequences with personalized content, so that I can nurture leads and increase student enrollment through targeted communication  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This email marketing automation interface embodies Apple's design philosophy with clean lines, intuitive workflows, and purposeful interactions. The design prioritizes the marketing coordinator's workflow efficiency while maintaining the sophisticated aesthetic that reflects Cognify's premium positioning in the education technology space.

## Screen Architecture

**Layout Framework**: 64px header + 56px action bar + main content area  
**Navigation Pattern**: Primary navigation with secondary sub-navigation for email marketing features  
**Content Organization**: Dashboard overview → Campaign builder → Template designer → Analytics  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)  

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Action buttons, active states, primary CTAs  
**Marketing Green**: #30D158 - Success states, delivered emails, positive metrics  
**Warning Amber**: #FF9F0A - Draft states, pending approvals, attention needed  
**Critical Red**: #FF3B30 - Failed sends, bounce alerts, critical issues  
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  
**Professional Depth**: Multiple blue tones from #E3F2FD to #0D47A1 for information hierarchy  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Code Font**: SF Mono for template code and technical details  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Subsection titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Email Automation Dashboard
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                    Email Marketing         🔔 👤 Sarah (Marketing)    │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 📧 Dashboard │ 🔧 Campaigns │ 📝 Templates │ 👥 Lists │ 📊 Analytics │ ⚙️ Settings │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─── Email Marketing Overview ──────────────────────────────────────────────┐   │
│ │ 📈 Performance This Month                    + Create New Campaign     │   │
│ │                                                                         │   │
│ │ ┌─ Sent ──┐ ┌─ Opened ┐ ┌─ Clicked ┐ ┌─ Enrolled ┐                      │   │
│ │ │ 24,387  │ │  45.2%  │ │   8.7%   │ │    127    │                      │   │
│ │ │  emails │ │  rate   │ │   rate   │ │ students  │                      │   │
│ │ └─────────┘ └─────────┘ └─────────┘ └─────────────┘                      │   │
│ └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│ ┌─── Active Automations ──────────────────────────────────────────────────┐   │
│ │                                                                         │   │
│ │ 🟢 Welcome Series - New Leads          📊 85% open rate    ⚙️ Edit      │   │
│ │ 🟢 Course Inquiry Follow-up            📊 62% open rate    ⚙️ Edit      │   │
│ │ 🟡 Re-engagement Campaign               📊 23% open rate    ⚙️ Edit      │   │
│ │ 🔴 Cart Abandonment Recovery           📊 18% open rate    ⚙️ Edit      │   │
│ │                                                                         │   │
│ │ + Add New Automation                                                    │   │
│ └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
│ ┌─── Recent Campaigns ────────────────────────────────────────────────────┐   │
│ │                                                                         │   │
│ │ 📧 "New Course Launch - Data Science"    Sent: 2 hours ago   📊 View   │   │
│ │ 📧 "Weekend Workshop Reminder"           Sent: 1 day ago     📊 View   │   │
│ │ 📧 "Student Success Stories"             Sent: 3 days ago    📊 View   │   │
│ │                                                                         │   │
│ │ View All Campaigns →                                                    │   │
│ └─────────────────────────────────────────────────────────────────────────┘   │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Automation Sequence Builder
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify              Automation Builder: Welcome Series           💾 Save    │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ← Back to Dashboard │ 📧 Campaigns │ 📝 Templates │ 👥 Lists │ 📊 Analytics      │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─── Sequence Flow ──────────────────────────────────────────────────────────┐ │
│ │                                                                           │ │
│ │     [📥 Trigger]           Wait 1 Hour         [📧 Email 1]              │ │
│ │   New Lead Signup  ────────────────────  Welcome Email                   │ │
│ │                                                │                         │ │
│ │                    Wait 2 Days         [📧 Email 2]                      │ │
│ │                 ─────────────────  Course Overview                       │ │
│ │                                                │                         │ │
│ │                 ┌─ Opened? ───┐                                          │ │
│ │                 │     Yes     │  Wait 3 Days   [📧 Email 3]              │ │
│ │                 │            ──────────────  Success Stories             │ │
│ │                 │     No      │                                          │ │
│ │                 │            ──  Wait 1 Day   [📧 Email 2b]              │ │
│ │                 └─────────────┘              Different Subject            │ │
│ │                                                                           │ │
│ │ + Add Step      🔧 Edit Trigger    📊 Analytics    ▶️ Test Sequence      │ │
│ └───────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─── Step Details ───────────────────────────────────────────────────────────┐ │
│ │ Selected: Email 1 - Welcome Email                                          │ │
│ │                                                                             │ │
│ │ Template: [Welcome Template ▼]         Subject: "Welcome to Our Learning..." │ │
│ │ Send Time: [Immediately ▼]             Personalization: [Name, Course] ✓   │ │
│ │                                                                             │ │
│ │ Conditions:                                                                 │ │
│ │ ☑️ Contact has email address           ☑️ Not unsubscribed                 │ │
│ │ ☑️ Lead source is website              ☐ Custom field condition            │ │
│ │                                                                             │ │
│ │ 🎯 A/B Testing:     ☐ Enable  [Subject Line Testing ▼]                    │ │
│ │ 📊 Tracking:        ☑️ Open   ☑️ Click   ☑️ Conversion                      │ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Email Template Designer
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Template Designer               💾 Save   👁️ Preview  │
├─────────────────────────────────────────────────────────────────────────────────┤
│ ← Automation Builder │ 🏗️ Templates │ 📦 Blocks │ 🎨 Design │ ⚙️ Settings        │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─ Blocks ─┐ ┌─────────── Email Canvas ─────────────────┐ ┌─── Properties ───┐ │
│ │          │ │                                          │ │                  │ │
│ │ 📄 Text   │ │ ┌─ Header ──────────────────────────────┐ │ │ Text Block       │ │
│ │ 🖼️ Image  │ │ │ [LOGO] Cognify Academy                │ │ │                  │ │
│ │ 🔘 Button │ │ │                        social icons ►  │ │ │ Font: [SF Pro ▼] │ │
│ │ 📊 Columns│ │ └────────────────────────────────────────┘ │ │ Size: [16px ▼]   │ │
│ │ ➖ Divider│ │                                            │ │ Color: [#1D1D1F] │ │
│ │ 👥 Social │ │ ┌─ Hero Section ─────────────────────────┐ │ │ Align: [Left ▼]  │ │
│ │ 🏷️ Footer │ │ │ Hi {{first_name}},                    │ │ │                  │ │
│ │          │ │ │                                        │ │ │ 📱 Mobile View   │ │
│ │ + Custom │ │ │ Welcome to your learning journey!      │ │ │ ┌────────────────┐ │
│ │          │ │ │                                        │ │ │ │ [Responsive    │ │
│ │          │ │ │ [Course Image Placeholder]             │ │ │ │  Preview]      │ │
│ │          │ │ └────────────────────────────────────────┘ │ │ │                │ │
│ │          │ │                                            │ │ │                │ │
│ │          │ │ ┌─ Content Block ────────────────────────┐ │ │ └────────────────┘ │
│ │          │ │ │ You're now part of our community of   │ │ │                  │ │
│ │          │ │ │ learners. Here's what you can expect: │ │ │ 🎨 Brand Colors  │ │
│ │          │ │ │                                        │ │ │ ● #007AFF        │ │
│ │          │ │ │ • Expert-led courses                   │ │ │ ● #30D158        │ │
│ │          │ │ │ • Interactive learning                 │ │ │ ● #FF9F0A        │ │
│ │          │ │ │ • Career guidance                      │ │ │                  │ │
│ │          │ │ └────────────────────────────────────────┘ │ │ 📏 Spacing       │ │
│ │          │ │                                            │ │ Padding: [20px]  │ │
│ │          │ │ ┌─ CTA Button ───────────────────────────┐ │ │ Margin: [10px]   │ │
│ │          │ │ │     🎯 Start Learning Now              │ │ │                  │ │
│ │          │ │ └────────────────────────────────────────┘ │ │                  │ │
│ └──────────┘ └────────────────────────────────────────────┘ └──────────────────┘ │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Contact List Management
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Contact Lists                 + Create List    📤 Import│
├─────────────────────────────────────────────────────────────────────────────────┤
│ 📧 Dashboard │ 🔧 Campaigns │ 📝 Templates │ 👥 Lists │ 📊 Analytics │ ⚙️ Settings │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─── Smart Segmentation ─────────────────────────────────────────────────────┐  │
│ │ 🔍 [Search contacts or create segment...]                    🎯 Create   │  │
│ │                                                                           │  │
│ │ Quick Filters:                                                            │  │
│ │ [📚 Course Interest ▼] [📍 Location ▼] [📈 Engagement ▼] [📅 Date Added ▼] │  │
│ │                                                                           │  │
│ │ Smart Segments:                                                           │  │
│ │ 🟢 Highly Engaged (2,847)     🟡 Moderately Engaged (5,132)             │  │
│ │ 🔴 Re-engagement Needed (892)  🆕 New Leads (234)                        │  │
│ └───────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
│ ┌─── Contact Lists ─────────────────────────────────────────────────┐          │
│ │                                                                   │          │
│ │ ☑️ All Contacts                                    9,105 contacts │ 📊 View │
│ │ ☑️ Website Leads                                   2,847 contacts │ 📊 View │
│ │ ☑️ Data Science Interested                         1,923 contacts │ 📊 View │
│ │ ☑️ Marketing Course Leads                          1,456 contacts │ 📊 View │
│ │ ☑️ Webinar Attendees                                987 contacts  │ 📊 View │
│ │ ☑️ Newsletter Subscribers                          3,234 contacts │ 📊 View │
│ │ ☐ Unsubscribed                                       234 contacts │ 📊 View │
│ │ ☐ Bounced Emails                                      89 contacts  │ 📊 View │
│ │                                                                   │          │
│ │ + Create New List    📋 Manage Lists    🧹 Clean Lists             │          │
│ └───────────────────────────────────────────────────────────────────┘          │
│                                                                                 │
│ ┌─── List Health Overview ───────────────────────────────────────────────────┐  │
│ │                                                                             │  │
│ │ 📈 Growth Rate: +12.3% this month    📉 Unsubscribe Rate: 0.8%            │  │
│ │ 🎯 Engagement Score: 7.2/10          ⚠️ Bounces: 89 (0.9%)                │  │
│ │                                                                             │  │
│ │ 🔍 Recent Activity:                                                         │  │
│ │ • 127 new subscribers today                                                 │  │
│ │ • 23 unsubscribes this week                                                 │  │
│ │ • 4 email bounces requiring attention                                       │  │
│ │                                                                             │  │
│ │ 🛠️ Recommended Actions:                                                     │  │
│ │ • Remove 15 hard bounces from main list                                     │  │
│ │ • Create re-engagement campaign for 892 inactive contacts                   │  │
│ │ • Update segmentation rules for better targeting                            │  │
│ └─────────────────────────────────────────────────────────────────────────────┘  │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Campaign Analytics Dashboard
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify              Email Analytics                    📊 Export   📅 Filter │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 📧 Dashboard │ 🔧 Campaigns │ 📝 Templates │ 👥 Lists │ 📊 Analytics │ ⚙️ Settings │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─── Performance Overview ───────────────────────────────────────────────────┐  │
│ │ 📈 Campaign: "New Course Launch - Data Science"   Sent: 2,847 emails      │  │
│ │                                                                             │  │
│ │ ┌─ Delivered ┐ ┌─ Opened ──┐ ┌─ Clicked ─┐ ┌─ Converted ┐ ┌─ Revenue ───┐  │
│ │ │   2,815    │ │   1,284   │ │    247    │ │     23     │ │  ₹1,84,000  │  │
│ │ │  (98.9%)   │ │  (45.6%)  │ │   (8.8%)  │ │   (0.8%)   │ │             │  │
│ │ └────────────┘ └───────────┘ └───────────┘ └────────────┘ └─────────────┘  │
│ │                                                                             │  │
│ │ 📊 Engagement Timeline:                                                     │  │
│ │ ┌─────────────────────────────────────────────────────────────────────────┐ │
│ │ │     ▁▃▇█▆▃▁     Opens peaked 2 hours after send                        │ │
│ │ │   ▁▂▃▅▇▅▃▁     Clicks highest during business hours                     │ │
│ │ │ ▁▁▁▂▃▃▂▁▁▁     Conversions spread over 3 days                          │ │
│ │ └─────────────────────────────────────────────────────────────────────────┘ │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─── A/B Testing Results ────────────────────────────────────────────────────┐  │
│ │                                                                             │  │
│ │ Subject Line Test: 🏆 Winner Declared                                      │  │
│ │                                                                             │  │
│ │ Version A: "Master Data Science in 12 Weeks"        📧 1,423 sent         │  │
│ │ Opens: 672 (47.2%)   Clicks: 134 (9.4%)            📈 Performance: +12%   │  │
│ │                                                                             │  │
│ │ Version B: "Transform Your Career with Data Science" 📧 1,424 sent         │  │
│ │ Opens: 612 (43.0%)   Clicks: 113 (7.9%)            📉 Performance: Base   │  │
│ │                                                                             │  │
│ │ 📊 Statistical Significance: 94.3% confidence                              │  │
│ │ 💡 Recommendation: Use Version A for future campaigns                      │  │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─── Deliverability Health ──────────────────────────────────────────────────┐  │
│ │                                                                             │  │
│ │ 🟢 Overall Health: Excellent     📫 Inbox Rate: 94.2%                     │  │
│ │ 🟢 Sender Reputation: 9.1/10     🗂️ Spam Rate: 0.3%                       │  │
│ │ 🟢 Domain Authentication: ✓ SPF, ✓ DKIM, ✓ DMARC                          │  │
│ │                                                                             │  │
│ │ ⚠️ Attention Needed:                                                        │  │
│ │ • 4 hard bounces from invalid email addresses                              │  │
│ │ • 2 spam complaints (monitor for patterns)                                 │  │
│ │ • Consider warming up new sending domain                                   │  │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

### Screen 6: Automation Settings & Compliance
```
┌─────────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify              Email Settings                           💾 Save Changes │
├─────────────────────────────────────────────────────────────────────────────────┤
│ 📧 Dashboard │ 🔧 Campaigns │ 📝 Templates │ 👥 Lists │ 📊 Analytics │ ⚙️ Settings │
├─────────────────────────────────────────────────────────────────────────────────┤
│                                                                                 │
│ ┌─── Sending Configuration ──────────────────────────────────────────────────┐  │
│ │                                                                             │  │
│ │ 📧 Email Service Provider: [SendGrid ▼]    ✅ Connected                    │  │
│ │ 🌐 Sending Domain: mail.cognifyacademy.com  ✅ Authenticated               │  │
│ │ 📊 Daily Send Limit: [10,000 emails ▼]     Usage: 2,847/10,000           │  │
│ │ ⏰ Send Rate: [500 emails/minute ▼]                                        │  │
│ │                                                                             │  │
│ │ 🔐 Authentication Status:                                                   │  │
│ │ ✅ SPF Record Configured                                                    │  │
│ │ ✅ DKIM Signing Enabled                                                     │  │
│ │ ✅ DMARC Policy Active                                                      │  │
│ │ ⚠️ Dedicated IP Setup (Recommended for high volume)                        │  │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─── Compliance & Privacy ───────────────────────────────────────────────────┐  │
│ │                                                                             │  │
│ │ 🛡️ GDPR Compliance:                                                         │  │
│ │ ☑️ Double opt-in confirmation required                                      │  │
│ │ ☑️ Consent tracking enabled                                                 │  │
│ │ ☑️ Data retention policy: 3 years inactive                                 │  │
│ │ ☑️ Right to be forgotten automation                                         │  │
│ │                                                                             │  │
│ │ 📧 Unsubscribe Management:                                                  │  │
│ │ ☑️ One-click unsubscribe link in all emails                                │  │
│ │ ☑️ Unsubscribe confirmation page                                            │  │
│ │ ☑️ Preference center for granular control                                  │  │
│ │ ☑️ Automatic list removal within 24 hours                                  │  │
│ │                                                                             │  │
│ │ 🚫 Suppression Lists:                                                       │  │
│ │ Global Suppression: 234 contacts    Bounced: 89 contacts                  │  │
│ │ Spam Complaints: 12 contacts        Role Accounts: 45 contacts            │  │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
│ ┌─── Automation Safeguards ──────────────────────────────────────────────────┐  │
│ │                                                                             │  │
│ │ ⚡ Frequency Capping:                                                       │  │
│ │ Maximum emails per contact: [5 per week ▼]                                 │  │
│ │ Minimum time between emails: [4 hours ▼]                                   │  │
│ │ Exclude weekends: ☑️    Respect timezone: ☑️                              │  │
│ │                                                                             │  │
│ │ 🎯 Send Time Optimization:                                                  │  │
│ │ ☑️ AI-powered optimal send times                                            │  │
│ │ Fallback time: [9:00 AM local time ▼]                                      │  │
│ │ Holiday exclusions: ☑️ Major holidays    🎌 Indian holidays               │  │
│ │                                                                             │  │
│ │ 🛑 Emergency Controls:                                                      │  │
│ │ [🔴 Pause All Automations]   [⚠️ Emergency Stop]   [📞 Support Contact]    │  │
│ └─────────────────────────────────────────────────────────────────────────────┘ │
│                                                                                 │
└─────────────────────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Primary Actions
- **Campaign Creation**: Prominent "+" buttons with contextual tooltips
- **Template Editing**: Drag-and-drop interface with real-time preview
- **Automation Triggers**: Visual workflow builder with conditional logic
- **A/B Testing Setup**: One-click testing activation with statistical tracking

### Micro-interactions
- **Email Status Updates**: Smooth color transitions for delivery status
- **Analytics Charts**: Hover details with engagement insights
- **Template Blocks**: Snap-to-grid positioning with visual feedback
- **Send Rate Monitoring**: Real-time progress indicators

### Feedback Systems
- **Deliverability Alerts**: Contextual warnings with improvement suggestions
- **Performance Insights**: AI-powered recommendations for optimization
- **Compliance Checking**: Real-time validation for email content and settings
- **Error Prevention**: Smart warnings before potentially harmful actions

## Responsive Behavior

### Desktop Experience (1440px+)
- **Full Dashboard**: Complete analytics overview with detailed charts
- **Split-screen Template Designer**: Side-by-side editing and preview
- **Advanced Segmentation**: Multi-criteria filtering interface
- **Detailed Automation Builder**: Complex workflow visualization

### Tablet Experience (768px-1439px)
- **Collapsible Sidebars**: Expandable template blocks and properties
- **Tabbed Analytics**: Organized performance metrics
- **Touch-optimized Workflow**: Larger touch targets for automation building
- **Simplified Navigation**: Consolidated menu structure

### Mobile Experience (below 768px)
- **Campaign Overview**: Essential metrics in card format
- **Quick Actions**: Primary tasks accessible within two taps
- **Status Monitoring**: Push notifications for campaign status
- **Emergency Controls**: Prominent pause and stop buttons

## Accessibility Features

### Visual Accessibility
- **WCAG 2.1 AA Compliance**: Minimum 4.5:1 color contrast ratios
- **Color-blind Friendly**: Status indicators use icons + colors
- **Typography**: Scalable fonts with clear hierarchy
- **Focus Management**: Keyboard navigation support

### Functional Accessibility
- **Screen Reader Support**: Comprehensive ARIA labels
- **Keyboard Navigation**: All functions accessible via keyboard
- **Voice Commands**: Integration with browser voice controls
- **Alternative Formats**: Text alternatives for visual elements

### Cognitive Accessibility
- **Progress Indicators**: Clear steps in complex workflows
- **Error Prevention**: Contextual warnings and confirmations
- **Help Integration**: Contextual tooltips and guidance
- **Consistent Patterns**: Familiar interaction patterns throughout

## Performance Considerations

### Loading Optimization
- **Progressive Enhancement**: Core functionality loads first
- **Lazy Loading**: Analytics charts load on demand
- **Caching Strategy**: Template and campaign data caching
- **Minimal API Calls**: Batch operations for efficiency

### Real-time Updates
- **WebSocket Integration**: Live campaign status updates
- **Optimistic UI**: Immediate feedback for user actions
- **Background Sync**: Automatic data synchronization
- **Offline Capability**: Essential functions work offline

### Scalability Features
- **Virtualized Lists**: Efficient rendering of large contact lists
- **Paginated Results**: Smart pagination for performance
- **Incremental Loading**: Progressive data loading
- **Resource Management**: Memory-efficient component lifecycle

## Security Features

### Data Protection
- **Encryption**: TLS 1.3 for data transmission
- **Access Control**: Role-based permissions
- **Audit Logging**: Complete activity tracking
- **Data Anonymization**: Privacy-preserving analytics

### Email Security
- **Content Scanning**: XSS protection for templates
- **Link Verification**: Safe link checking
- **Sender Authentication**: SPF/DKIM/DMARC validation
- **Spam Prevention**: Content analysis and recommendations

### Compliance Management
- **GDPR Tools**: Consent management and data portability
- **Audit Trails**: Complete compliance documentation
- **Privacy Controls**: Granular privacy settings
- **Data Retention**: Automated data lifecycle management

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired email marketing dashboard, clean white interface, education technology platform, blue accent colors, drag-and-drop email builder, professional typography, modern icons, sophisticated layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design a premium email automation interface with SF Pro typography, education blue (#007AFF) accents, drag-and-drop workflow builder, real-time analytics charts, and Apple-inspired visual hierarchy"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated email marketing automation interface following Apple's design principles, targeting education professionals who need powerful tools wrapped in intuitive interfaces. Focus on workflow efficiency and data-driven insights."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: January 2024  
**Designed for**: Marketing coordinators and automation specialists  
**Approval Status**: Ready for development review