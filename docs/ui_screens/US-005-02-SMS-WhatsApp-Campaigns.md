# UI Design Specification: US-005-02 SMS & WhatsApp Campaigns

## Overview

**Story ID**: US-005-02  
**Epic**: EP-005 Marketing & Sales Automation  
**Title**: SMS & WhatsApp Campaigns  
**User Story**: As a marketing specialist, I want to create and manage SMS and WhatsApp messaging campaigns, so that I can engage with students and prospects through their preferred mobile channels  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This messaging campaign interface follows Apple's design philosophy, focusing on clarity, direct communication, and purposeful interactions. The design empowers marketing specialists to create engaging mobile messaging campaigns that respect user attention while delivering impactful communications through SMS and WhatsApp channels.

## Screen Architecture

**Layout Framework**: 64px header + 56px action bar + main content area  
**Navigation Pattern**: Primary navigation with campaign dashboard, message builder, audience selection, scheduling, analytics  
**Content Organization**: Dashboard overview → Campaign creation → Message crafting → Audience targeting → Scheduling → Analytics  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Action buttons, active states, primary CTAs  
**Messaging Green**: #34C759 - WhatsApp messaging, delivered indicators, success metrics  
**SMS Purple**: #AF52DE - SMS messaging, texting indicators, campaign highlights  
**Warning Amber**: #FF9F0A - Pending states, delivery warnings, attention needed  
**Critical Red**: #FF3B30 - Failed deliveries, compliance warnings, errors  
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Code Font**: SF Mono for template variables and technical details  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Panel titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Messaging Campaigns Dashboard
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Messaging Campaigns          🔔 👤 Ryan (Marketing)  │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 📱 Campaigns │ ✉️ Messages │ 👥 Audience │ 📈 Analytics │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Campaign Summary ─────────────────────────────────────────────────────┐  │
│ │ Active Campaigns: 5    Scheduled: 3    Drafts: 2    Completed: 12       │  │
│ │ Messages Sent (30d): 12,450    Delivery Rate: 98.5%    Response Rate: 24.3% │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Active Campaigns ─────────────────────────────────────────────────────┐  │
│ │ "Summer Course Registration"                                            │  │
│ │ Type: WhatsApp   Status: Active   Sent: 2,450/5,000   Response: 28.5%   │  │
│ │ Next Send: Today, 15:30   Completion: 65%                               │  │
│ │ [📊 Analytics] [⏸️ Pause] [✏️ Edit] [📱 Preview]                          │  │
│ │                                                                         │  │
│ │ "Course Completion Follow-up"                                          │  │
│ │ Type: SMS   Status: Active   Sent: 1,852/2,500   Response: 31.2%        │  │
│ │ Next Send: Tomorrow, 10:00   Completion: 74%                            │  │
│ │ [📊 Analytics] [⏸️ Pause] [✏️ Edit] [📱 Preview]                          │  │
│ │                                                                         │  │
│ │ "Weekend Workshop Reminder"                                            │  │
│ │ Type: WhatsApp   Status: Active   Sent: 850/850   Response: 45.3%       │  │
│ │ Next Send: Completed   Completion: 100%                                 │  │
│ │ [📊 Analytics] [🔄 Reactivate] [✏️ Edit] [📱 Preview]                     │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Performance Insights ───────────────────────────────────────────────┐  │
│ │ [Chart: Message Delivery & Response Rates]                             │  │
│ │                                                                         │  │
│ │ 🏆 Best Performer: "Weekend Workshop Reminder" - 45.3% response rate   │  │
│ │ 🔍 WhatsApp campaigns show 18% higher engagement than SMS              │  │
│ │ 📱 Message CTR highest at 4-8pm (user local time)                      │  │
│ │                                                                         │  │
│ │ [📊 View All Analytics] [📄 Generate Report]                            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [➕ Create New Campaign] [🔒 Compliance Settings] [⚙️ Configure Channels]     │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Campaign Creation
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Create Campaign              ➕ New Campaign        │
├───────────────────────────────────────────────────────────────────────────────┤
│ 1️⃣ Details │ 2️⃣ Message │ 3️⃣ Audience │ 4️⃣ Schedule │ 5️⃣ Review │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Campaign Details ──────────────────────────────────────────────────┐  │
│ │ Campaign Name: [Fall Enrollment Promotion]                            │  │
│ │                                                                       │  │
│ │ Campaign Type:                                                        │  │
│ │ [○] SMS Campaign                                                     │  │
│ │ [●] WhatsApp Campaign                                                │  │
│ │ [○] Mixed (SMS + WhatsApp)                                          │  │
│ │                                                                       │  │
│ │ Campaign Goal:                                                        │  │
│ │ [●] Enrollment   [○] Information   [○] Reminder                     │  │
│ │ [○] Feedback    [○] Re-engagement  [○] Other                        │  │
│ │                                                                       │  │
│ │ Campaign Description:                                                 │  │
│ │ [Promote fall semester course enrollment to prospective              │  │
│ │ students with early registration discount incentives.]               │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Compliance & Settings ────────────────────────────────────────────┐  │
│ │ Sender ID: [Cognify Edu ▼]                                          │  │
│ │                                                                       │  │
│ │ Compliance Level:                                                    │  │
│ │ [✓] Include opt-out instructions                                    │  │
│ │ [✓] Honor quiet hours (9PM-8AM recipient time)                      │  │
│ │ [✓] Respect frequency caps (max 2 messages per week)                │  │
│ │ [✓] Filter opted-out contacts                                       │  │
│ │                                                                       │  │
│ │ Tracking: [✓] Link clicks   [✓] Message opens   [✓] Responses       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Campaign Template ──────────────────────────────────────────────────┐  │
│ │ Start from:                                                           │  │
│ │ [○] Blank Campaign                                                   │  │
│ │ [●] Template: [Enrollment Promotion ▼]                               │  │
│ │ [○] Previous Campaign: [Select Campaign ▼]                           │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📝 Save Draft] [➡️ Next: Message]                                          │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Message Builder
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Message Builder              ✉️ Create Message      │
├───────────────────────────────────────────────────────────────────────────────┤
│ 1️⃣ Details │ 2️⃣ Message │ 3️⃣ Audience │ 4️⃣ Schedule │ 5️⃣ Review │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Message Editor ───────────────────────────────────────────────────┐  │
│ │ Message Type: WhatsApp                                               │  │
│ │                                                                       │  │
│ │ Message Text:                                                        │  │
│ │ [Hi {{first_name}},                                                 │  │
│ │                                                                     │  │
│ │ 🎓 Fall enrollment is now open! Register by August 15th            │  │
│ │ and get 15% off your first course.                                 │  │
│ │                                                                     │  │
│ │ Browse courses: {{short_link}}                                     │  │
│ │                                                                     │  │
│ │ Reply STOP to opt out.]                                            │  │
│ │                                                                       │  │
│ │ Characters: 178/1000   Variables: 2   Links: 1                       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Message Components ─────────────────────────────────────────────────┐  │
│ │ [➕ Add Variable] [➕ Add Link] [➕ Add Media] [➕ Add Button]          │  │
│ │                                                                       │  │
│ │ Available Variables:                                                 │  │
│ │ {{first_name}} {{last_name}} {{course_interest}} {{last_course}}    │  │
│ │ {{registration_date}} {{local_campus}} {{advisor_name}}             │  │
│ │                                                                       │  │
│ │ Available Media:                                                     │  │
│ │ [🖼️ Add Image] [🎞️ Add Video] [🔉 Add Audio] [📄 Add Document]       │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Message Preview ───────────────────────────────────────────────────┐  │
│ │ ┌─WhatsApp Preview─────────────────────────┐                         │  │
│ │ │ Cognify Edu                     10:30 AM │                         │  │
│ │ │                                          │                         │  │
│ │ │ Hi Sarah,                               │                         │  │
│ │ │                                          │                         │  │
│ │ │ 🎓 Fall enrollment is now open!         │                         │  │
│ │ │ Register by August 15th and get 15%     │                         │  │
│ │ │ off your first course.                  │                         │  │
│ │ │                                          │                         │  │
│ │ │ Browse courses: https://cog.edu/fall    │                         │  │
│ │ │                                          │                         │  │
│ │ │ Reply STOP to opt out.                  │                         │  │
│ │ └──────────────────────────────────────────┘                         │  │
│ │                                                                       │  │
│ │ [📱 Preview on Device] [🔄 A/B Test]                                 │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [◀️ Back] [📝 Save Draft] [➡️ Next: Audience]                                │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Audience Selection
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Audience Selection           👥 Select Audience     │
├───────────────────────────────────────────────────────────────────────────────┤
│ 1️⃣ Details │ 2️⃣ Message │ 3️⃣ Audience │ 4️⃣ Schedule │ 5️⃣ Review │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Audience Selection ────────────────────────────────────────────────┐  │
│ │ Selection Method:                                                    │  │
│ │ [○] Saved Segment    [●] Custom Filter    [○] Import List           │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Audience Filters ──────────────────────────────────────────────────┐  │
│ │ Contact Type:                                                        │  │
│ │ [✓] Prospective Students    [✓] Current Students                    │  │
│ │ [  ] Alumni                 [  ] Parents                            │  │
│ │                                                                       │  │
│ │ Interest Areas:                                                      │  │
│ │ [✓] Business    [✓] Computer Science    [✓] Data Science            │  │
│ │ [  ] Design     [  ] Healthcare         [  ] Marketing              │  │
│ │                                                                       │  │
│ │ Engagement History:                                                  │  │
│ │ [✓] Visited website (last 30 days)                                  │  │
│ │ [✓] Opened email (last 60 days)                                     │  │
│ │ [  ] Previously enrolled                                            │  │
│ │ [  ] Completed course                                               │  │
│ │                                                                       │  │
│ │ Location:                                                           │  │
│ │ [✓] All Locations    [○] Specific: [                         ]      │  │
│ │                                                                       │  │
│ │ [➕ Add Filter] [🔄 Clear Filters]                                    │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Audience Summary ──────────────────────────────────────────────────┐  │
│ │ Estimated Recipients: 3,850                                          │  │
│ │ WhatsApp-enabled: 2,950 (76.6%)                                      │  │
│ │ SMS-only: 900 (23.4%)                                                │  │
│ │ Opt-out Rate: 2.1%                                                   │  │
│ │                                                                       │  │
│ │ [💾 Save as Segment] [📤 Export List] [📊 View Analytics]             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [◀️ Back] [📝 Save Draft] [➡️ Next: Schedule]                               │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Campaign Analytics
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Campaign Analytics           📊 Performance Metrics │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 📱 Campaigns │ ✉️ Messages │ 👥 Audience │ 📈 Analytics │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Campaign Selection ────────────────────────────────────────────────┐  │
│ │ Campaign: [Summer Course Registration ▼]                              │  │
│ │ Date Range: [Last 30 Days ▼]   Channel: [All Channels ▼]             │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Performance Summary ────────────────────────────────────────────────┐  │
│ │ Total Recipients: 5,000    Messages Sent: 2,450    Delivery Rate: 98.7% │  │
│ │ Opened: 1,850 (75.5%)    Clicked: 980 (40%)    Responded: 698 (28.5%)  │  │
│ │                                                                         │  │
│ │ [Chart: Daily Engagement Metrics]                                      │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Engagement Details ─────────────────────────────────────────────────┐  │
│ │ [Chart: Engagement Funnel]                                            │  │
│ │                                                                         │  │
│ │ Average Response Time: 2.3 hours                                       │  │
│ │ Peak Engagement Time: 6-8 PM                                           │  │
│ │ Most Engaged Audience: Business students, 24-35 age group              │  │
│ │ Top Performing Link: "Browse courses" (52% CTR)                        │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Response Analysis ──────────────────────────────────────────────────┐  │
│ │ Common Responses:                                                     │  │
│ │ "Need more information" - 32%                                         │  │
│ │ "Interest in enrollment" - 28%                                        │  │
│ │ "Price inquiry" - 18%                                                 │  │
│ │ "Schedule questions" - 15%                                            │  │
│ │ Other - 7%                                                            │  │
│ │                                                                         │  │
│ │ [🔍 View Response Details] [📋 Export Responses]                        │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Optimization Insights ────────────────────────────────────────────┐  │
│ │ 🔍 Recipients who received WhatsApp messages had 18% higher CTR      │  │
│ │ 💡 Recommendation: Prioritize WhatsApp for future campaigns         │  │
│ │                                                                       │  │
│ │ 🔍 Messages with emojis saw 12% higher open rates                    │  │
│ │ 💡 Recommendation: Continue using relevant emojis in messages       │  │
│ │                                                                       │  │
│ │ 🔍 25% of responses asked about payment plans                        │  │
│ │ 💡 Recommendation: Include payment info in next campaign            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📤 Export Report] [📊 Compare Campaigns] [🔄 Create Similar Campaign]       │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Primary Actions
- **Campaign Creation**: Multi-step wizard for messaging campaign setup
- **Message Builder**: Interactive editor with templates and personalization
- **Audience Targeting**: Intuitive segmentation and filter controls
- **Campaign Analytics**: Detailed performance metrics and insights
- **Compliance Management**: Robust tools for regulatory compliance

### Micro-interactions
- **Message Preview**: Real-time preview as message is composed
- **Character Counter**: Dynamic character count with visual feedback
- **Variable Insertion**: Drag-and-drop variable insertion with preview
- **Audience Estimation**: Live audience size calculation as filters change
- **Compliance Checks**: Real-time validation against messaging regulations

### Feedback Systems
- **Delivery Notifications**: Status updates for message delivery
- **Response Alerts**: Notification of recipient responses
- **Performance Updates**: Key metric changes and milestone achievements
- **Compliance Warnings**: Proactive alerts for potential compliance issues

## Responsive Behavior

### Desktop Experience (1440px+)
- **Multi-Panel Layout**: Side-by-side campaign management and analytics
- **Advanced Message Builder**: Full-featured editor with rich formatting
- **Comprehensive Analytics**: Detailed performance metrics and visualizations
- **Bulk Management**: Efficient management of multiple campaigns

### Tablet Experience (768px-1439px)
- **Tabbed Interface**: Organized sections with touch-optimized navigation
- **Simplified Message Builder**: Essential formatting with mobile preview
- **Key Analytics**: Core metrics with expandable charts
- **Streamlined Management**: Focus on individual campaign management

### Mobile Experience (below 768px)
- **Native App Feel**: Bottom navigation with quick action buttons
- **Step-By-Step Flow**: Guided campaign creation process
- **Message Preview Focus**: Emphasis on accurate message preview
- **Performance Snapshots**: Essential metrics in card-based layout

## Accessibility Features

### Visual Accessibility
- **WCAG 2.1 AA Compliance**: Minimum 4.5:1 color contrast ratios
- **Status Indicators**: Multiple cues beyond color for message status
- **Typography**: Scalable fonts with clear hierarchy
- **Focus Management**: Visible focus indicators for keyboard navigation

### Functional Accessibility
- **Screen Reader Support**: ARIA labels for all messaging elements
- **Keyboard Navigation**: Complete keyboard accessibility for all functions
- **Progressive Enhancement**: Core functionality works without JavaScript
- **Alternative Formats**: Text alternatives for media content

### Cognitive Accessibility
- **Clear Terminology**: Plain language for messaging concepts
- **Step-By-Step Guidance**: Progressive disclosure for complex tasks
- **Contextual Help**: Inline guidance for messaging compliance
- **Consistent Patterns**: Familiar interaction patterns across messaging functions

## Performance Considerations

### Loading Optimization
- **Progressive Enhancement**: Core messaging functionality loads first
- **Lazy Loading**: Campaign history and analytics load on demand
- **Media Optimization**: Automatic compression of message media
- **Minimal Transfers**: Efficient API calls for campaign management

### Real-time Updates
- **WebSocket Integration**: Live delivery and response updates
- **Optimistic UI**: Immediate feedback for messaging actions
- **Background Processing**: Non-blocking message sending
- **Offline Support**: Draft campaign creation in offline mode

### Scalability Features
- **Efficient Rendering**: Virtualized lists for large campaigns
- **Batch Operations**: Optimized bulk message processing
- **Resource Management**: Efficient handling of media assets
- **Progressive Loading**: Incremental loading of campaign history

## Security Features

### Data Protection
- **End-to-End Encryption**: Secure message content transmission
- **Access Control**: Role-based permissions for campaign management
- **Audit Trail**: Comprehensive logging of messaging activities
- **Data Minimization**: Only essential recipient data stored

### Platform Security
- **API Security**: Secure communication with messaging providers
- **Input Validation**: Protection against injection in message content
- **Rate Limiting**: Protection against excessive message sending
- **Session Management**: Secure session handling for campaign operations

### Compliance Features
- **Opt-out Management**: Automated handling of unsubscribe requests
- **Quiet Hours**: Intelligent delivery timing based on recipient timezone
- **Frequency Caps**: Prevention of excessive messaging to recipients
- **Regulatory Compliance**: Built-in rules for global messaging regulations

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired mobile messaging campaign interface for education platform, showing WhatsApp and SMS campaign management, message creation, audience targeting, and analytics with clean typography, education blue and messaging green color scheme, modern layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design a messaging campaign system with SF Pro typography, education blue (#007AFF), messaging green (#34C759) and SMS purple (#AF52DE) accents, campaign dashboard, message builder, audience targeting, and analytics views following Apple's design language"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated mobile messaging interface following Apple's design principles, targeting marketing specialists who need to create SMS and WhatsApp campaigns. Focus on message composition, audience targeting, compliance management, and performance analytics with clarity and purpose."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: July 2025  
**Designed for**: Marketing specialists and communication teams  
**Approval Status**: Ready for development review
