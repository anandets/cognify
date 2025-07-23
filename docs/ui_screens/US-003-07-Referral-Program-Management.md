# UI Design Specification: US-003-07 Referral Program Management

## Overview

**Story ID**: US-003-07  
**Epic**: EP-003 Customer Relationship Management (CRM)  
**Title**: Referral Program Management  
**User Story**: As a marketing coordinator, I want to manage and track referral programs, so that I can incentivize customers to refer new leads and increase enrollment through word-of-mouth marketing  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This referral program management interface follows Apple's design philosophy, focusing on clarity, motivation, and delightful micro-interactions. The design empowers marketing coordinators to efficiently create, monitor, and optimize referral campaigns, driving organic growth and customer engagement for Cognify's education platform.

## Screen Architecture

**Layout Framework**: 64px header + 56px action bar + main content area  
**Navigation Pattern**: Primary navigation with campaign dashboard, referral tracking, analytics, and reward management  
**Content Organization**: Dashboard overview → Campaign creation → Referral tracking → Reward management → Analytics  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Action buttons, active states, primary CTAs  
**Referral Purple**: #8B5CF6 - Referral highlights, campaign indicators, analytics  
**Success Green**: #30D158 - Successful referrals, completed rewards, achievement indicators  
**Warning Amber**: #FF9F0A - Pending rewards, flagged referrals, attention needed  
**Critical Red**: #FF3B30 - Invalid referrals, urgent issues, escalation alerts  
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Code Font**: SF Mono for referral codes and technical details  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Subsection titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Referral Program Dashboard
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Referral Dashboard           🔔 👤 Emma (Marketing) │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🎯 Campaigns │ 👥 Referrals │ 🎁 Rewards │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Program Summary ─────────────────────────────────────────────────────┐  │
│ │ 🎯 Active Campaigns: 3   👥 Total Referrals: 1,024   🎁 Rewards Issued: 312 │  │
│ │ Trend: ↑ +12% this month                                               │  │
│ └────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Recent Referrals ────────────────────────────────────────────────────┐  │
│ │ "John Doe referred Sarah Lee"   Status: Reward Pending   Date: 22 Jul 2025 │  │
│ │ [💬 Message] [🎁 Issue Reward] [📋 View Details]                        │  │
│ │ "Emily Chen referred Mike Brown"   Status: Reward Issued   Date: 21 Jul 2025│  │
│ │ [💬 Message] [🎁 View Reward] [📋 View Details]                         │  │
│ │ "Alex Kim referred Lisa Chen"   Status: Invalid Referral   Date: 20 Jul 2025│  │
│ │ [💬 Message] [⚠️ Flag] [📋 View Details]                                │  │
│ └────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Quick Actions ───────────────────────────────────────────────────────┐  │
│ │ [🎯 Create Campaign] [👥 Track Referrals] [🎁 Manage Rewards] [📈 View Analytics]│  │
│ └────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Campaign Management & Creation
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Campaign Management                💾 Save Draft    │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🎯 Campaigns │ 👥 Referrals │ 🎁 Rewards │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Campaign List ──────────────────────────────────────────────────────┐  │
│ │ "Summer Referral Blitz"   Referrals: 312   Status: Active            │  │
│ │ "Course Completion Rewards"   Referrals: 189   Status: Draft         │  │
│ │ "Alumni Referral Drive"   Referrals: 523   Status: Scheduled         │  │
│ │ [🎯 Create New Campaign] [📋 Manage Templates]                        │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Campaign Composer ─────────────────────────────────────────────────┐  │
│ │ Campaign Title: [Summer Referral Blitz]                              │  │
│ │ Details:                                                            │  │
│ │ 1. Reward: $50 Amazon Gift Card per successful referral              │  │
│ │ 2. Eligibility: New student enrollments only                         │  │
│ │ 3. Referral Code: [ABC123]                                          │  │
│ │ [➕ Add Detail] [📋 Use Template]                                    │  │
│ │ Distribution: [Email] [SMS] [Web Widget] [Schedule: 25 Jul 2025]    │  │
│ │ [💾 Save Draft] [📤 Publish Campaign] [👁️ Preview]                   │  │
│ └─────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Referral Tracking
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Referral Tracking                👥 Track           │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🎯 Campaigns │ 👥 Referrals │ 🎁 Rewards │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Referral List ──────────────────────────────────────────────────────┐  │
│ │ "Sarah Lee"   Referred by: John Doe   Status: Pending   22 Jul 2025   │  │
│ │ "Mike Brown"   Referred by: Emily Chen   Status: Reward Issued   21 Jul 2025│  │
│ │ "Lisa Chen"   Referred by: Alex Kim   Status: Invalid   20 Jul 2025   │  │
│ │ [💬 Message] [🎁 Issue/View Reward] [⚠️ Flag] [📋 View Details]         │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Referral Moderation ────────────────────────────────────────────────┐  │
│ │ [🎁 Issue Reward] [⚠️ Flag] [🗑️ Delete] [📋 Assign Action]             │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Reward Management
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Reward Management                🎁 Manage Rewards  │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🎯 Campaigns │ 👥 Referrals │ 🎁 Rewards │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Reward List ────────────────────────────────────────────────────────┐  │
│ │ "$50 Amazon Gift Card"   Issued: 189   Pending: 23   Expired: 2      │  │
│ │ "Free Course Enrollment"   Issued: 102   Pending: 12   Expired: 1    │  │
│ │ "Alumni Event Ticket"   Issued: 21   Pending: 3   Expired: 0         │  │
│ │ [🎁 Issue Reward] [📋 Manage Templates] [⚠️ Flag] [🗑️ Delete]         │  │
│ └───────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Referral Analytics Dashboard
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Referral Analytics              📊 Export Report    │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🎯 Campaigns │ 👥 Referrals │ 🎁 Rewards │ 📈 Analytics │ ⚙️ Settings │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Performance Overview ────────────────────────────────────────────────┐  │
│ │ 👥 Total Referrals: 1,024   🎁 Rewards Issued: 312   Conversion Rate: 28% │  │
│ │ Trend: ↑ +12% this month                                               │  │
│ └────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Campaign Performance ───────────────────────────────────────────────┐  │
│ │ "Summer Referral Blitz"   Referrals: 312   Conversion: 32%            │  │
│ │ "Course Completion Rewards"   Referrals: 189   Conversion: 24%        │  │
│ │ "Alumni Referral Drive"   Referrals: 523   Conversion: 29%            │  │
│ │ [📊 View Full Report] [📋 Export Data]                                 │  │
│ └────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Primary Actions
- **Campaign Creation & Distribution**: Custom campaigns, templates, multi-channel delivery
- **Referral Tracking**: Approve, flag, and reward referrals
- **Reward Management**: Issue, track, and manage rewards
- **Analytics Visualization**: Real-time referral metrics, conversion rates, trend charts

### Micro-interactions
- **Live Referral Updates**: Real-time referral status as new leads are referred
- **Campaign Preview**: Instant preview of campaign appearance and logic
- **Referral Moderation**: Inline moderation with status indicators
- **Reward Status**: Visual progress indicators for rewards

### Feedback Systems
- **Referral Status**: Real-time referral tracking and reward issuance
- **Escalation Alerts**: Contextual notifications for invalid referrals
- **Performance Insights**: AI-powered suggestions for campaign optimization
- **Reward Completion**: Confirmation and celebration animations

## Responsive Behavior

### Desktop Experience (1440px+)
- **Multi-Panel Dashboard**: Side-by-side campaign summary and analytics
- **Advanced Campaign Composer**: Split-screen campaign creation and preview
- **Comprehensive Analytics**: Full chart suite with drill-down capabilities
- **Detailed Reward Management**: Multi-column reward tracking

### Tablet Experience (768px-1439px)
- **Tabbed Interface**: Organized sections with touch-optimized navigation
- **Simplified Campaign Composer**: Single-panel creation with swipe previews
- **Essential Analytics**: Key metrics with expandable detail views
- **Reward List**: Card-based reward management

### Mobile Experience (below 768px)
- **Native App Feel**: Bottom navigation with quick action buttons
- **Mobile-First Campaign Composer**: Thumb-friendly interface
- **List-Based Analytics**: Card-based metrics with swipe navigation
- **Reward Quick Actions**: Fast issuance and completion

## Accessibility Features

### Visual Accessibility
- **WCAG 2.1 AA Compliance**: Minimum 4.5:1 color contrast ratios
- **Accessible Color Combinations**: Sufficient contrast for all referral states
- **Typography**: Scalable fonts with clear hierarchy
- **Focus Management**: Keyboard navigation support

### Functional Accessibility
- **Screen Reader Support**: ARIA labels for referral data and actions
- **Keyboard Navigation**: All functions accessible via keyboard shortcuts
- **Voice Commands**: Integration with browser voice controls
- **Alternative Formats**: Text alternatives for charts and campaign content

### Cognitive Accessibility
- **Clear Organization**: Logical grouping of campaigns, referrals, and rewards
- **Contextual Help**: Inline guidance for campaign creation and analytics
- **Error Prevention**: Smart validation for campaign logic and referral moderation
- **Consistent Patterns**: Familiar interaction patterns across referral channels

## Performance Considerations

### Loading Optimization
- **Progressive Enhancement**: Core dashboard loads first
- **Lazy Loading**: Analytics and campaign details load on demand
- **Image Optimization**: Automatic compression for reward media
- **Smart Caching**: Referral data caching with intelligent invalidation

### Real-time Updates
- **WebSocket Integration**: Live referral and reward status updates
- **Optimistic UI**: Immediate feedback for campaign publishing and referral moderation
- **Background Sync**: Automatic referral data synchronization
- **Offline Capability**: Essential referral functions work offline with queue

### Scalability Features
- **API Rate Limiting**: Intelligent API usage for referral and campaign distribution
- **Batch Operations**: Efficient bulk campaign and reward management
- **Media Storage**: Cloud-based reward media storage with CDN delivery
- **Analytics Aggregation**: Efficient data processing for reporting

## Security Features

### Data Protection
- **OAuth 2.0**: Secure authentication for referral channels
- **Token Encryption**: Encrypted storage of access and refresh tokens
- **Access Control**: Role-based referral and campaign access
- **Audit Logging**: Complete referral activity tracking

### Platform Security
- **API Security**: Secure communication with referral and campaign platforms
- **Content Validation**: XSS protection for user-generated referral data
- **Media Security**: Secure handling of uploaded reward images and videos
- **Privacy Compliance**: GDPR/CCPA compliance for referral data

### Publishing Safety
- **Content Approval**: Workflow-based approval for public campaigns
- **Campaign Validation**: Prevention of invalid campaign logic
- **Platform Guidelines**: Automated compliance checking
- **Crisis Management**: Emergency referral suspension capabilities

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired referral program dashboard, campaign composer, referral tracking, reward management, analytics visualization, education brand colors, modern icons, clean typography, sophisticated layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design a premium referral program management system with SF Pro typography, education blue (#007AFF) and referral purple (#8B5CF6) accents, campaign composer, referral tracking, reward dashboard, and Apple-inspired visual hierarchy"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated referral program management interface following Apple's design principles, targeting marketing coordinators who need unified campaign creation, referral tracking, and reward management. Focus on referral collection efficiency and performance insights."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: July 2025  
**Designed for**: Marketing coordinators and education business teams  
**Approval Status**: Ready for development review
