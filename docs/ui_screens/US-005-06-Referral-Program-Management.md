# UI Design Specification: US-005-06 Referral Program Management

## Overview

**Story ID**: US-005-06  
**Epic**: EP-005 Marketing & Sales Automation  
**Title**: Referral Program Management System  
**User Story**: As a Marketing Manager, I want to create and manage referral programs that reward existing students for bringing new enrollments, so that I can leverage word-of-mouth marketing and reduce customer acquisition costs  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This referral program management interface embodies Apple's design philosophy, focusing on clarity, delight, and efficiency. The design enables marketing managers to create and oversee sophisticated referral programs with intuitive controls, empowering them to leverage their most valuable marketing asset—satisfied students—while providing a rewarding experience for referrers. The system balances powerful tracking features with an elegant user experience that encourages participation and maximizes referral conversions.

## Screen Architecture

**Layout Framework**: 64px header + 56px action bar + main content area with program management dashboard  
**Navigation Pattern**: Primary navigation with referral dashboard, program creation, participant management, rewards configuration, and analytics  
**Content Organization**: Program overview → Program setup → Referral links/codes → Reward configuration → Analytics → Fraud management  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Action buttons, active states, primary CTAs  
**Referral Green**: #34C759 - Success indicators, conversion metrics, approved referrals  
**Reward Gold**: #FFCC00 - Rewards, incentives, achievement indicators  
**Alert Red**: #FF3B30 - Fraud flags, errors, attention points  
**Analytics Purple**: #AF52DE - Data insights, performance metrics  
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Code Font**: SF Mono for referral codes and technical details  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Panel titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Referral Programs Dashboard
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Referral Programs            🔔 👤 Alex (Marketing)  │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🔄 Programs │ 👥 Participants │ 🎁 Rewards │ 📈 Analytics │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Referral Performance ─────────────────────────────────────────────────┐  │
│ │ Active Programs: 3   Participants: 1,250   Pending Rewards: 68          │  │
│ │ Total Referrals: 845   Successful Conversions: 215   Conv. Rate: 25.4%  │  │
│ │ Customer Acquisition Cost: $28.50 (↓62% vs. paid channels)              │  │
│ │                                                                         │  │
│ │ [Chart: Monthly Referral Performance vs. Goals]                         │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Active Referral Programs ───────────────────────────────────────────┐  │
│ │ "Bring a Friend - Fall Enrollment"                                    │  │
│ │ Status: Active   Duration: 60 days remaining                           │  │
│ │ Participants: 845   Referrals: 620   Conversions: 155   Conv. Rate: 25%│  │
│ │ Reward: $100 tuition credit (referrer) + 10% discount (referee)        │  │
│ │ [📊 Analytics] [✏️ Edit] [⏸️ Pause] [📱 Share]                           │  │
│ │                                                                         │  │
│ │ "Alumni Success Network"                                              │  │
│ │ Status: Active   Duration: Ongoing                                     │  │
│ │ Participants: 325   Referrals: 180   Conversions: 42   Conv. Rate: 23% │  │
│ │ Reward: ₹500 Amazon gift card (referrer) + free course (referee)       │  │
│ │ [📊 Analytics] [✏️ Edit] [⏸️ Pause] [📱 Share]                           │  │
│ │                                                                         │  │
│ │ "Summer Certification Boost"                                          │  │
│ │ Status: Active   Duration: 30 days remaining                           │  │
│ │ Participants: 80   Referrals: 45   Conversions: 18   Conv. Rate: 40%   │  │
│ │ Reward: 15% cash commission (referrer) + free materials (referee)      │  │
│ │ [📊 Analytics] [✏️ Edit] [⏸️ Pause] [📱 Share]                           │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Program Insights ───────────────────────────────────────────────────┐  │
│ │ 🏆 Best Performer: "Summer Certification Boost" (40% conversion)      │  │
│ │ 💰 Highest ROI: "Bring a Friend" (850% return on reward investment)   │  │
│ │ 👥 Most Active Referrers: Advanced course students (avg 4.2 referrals)│  │
│ │ 🔍 WhatsApp sharing converts 35% better than email links              │  │
│ │                                                                         │  │
│ │ [📊 View All Insights] [🔄 Apply to Programs]                         │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [➕ Create Program] [📂 Templates] [🔄 Clone Program] [📤 Export Data]     │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Create/Edit Referral Program
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Create Referral Program       🔄 Program Setup      │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🔄 Programs │ 👥 Participants │ 🎁 Rewards │ 📈 Analytics │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Program Basics ───────────────────────────────────────────────────────┐  │
│ │ Program Name: [Summer Certification Boost]                              │  │
│ │ Description: [Referral program for our certification courses...]         │  │
│ │ Status: [Active ▼]   Duration: [Fixed Period ▼]                         │  │
│ │ Start Date: [Jul 15, 2025]   End Date: [Aug 15, 2025]                   │  │
│ │ Eligible Participants: [All Students ▼]                                 │  │
│ │                                                                         │  │
│ │ Goals:                                                                  │  │
│ │ Target Participants: [200]   Target Referrals: [300]                    │  │
│ │ Target Conversions: [75]    Target Cost per Acquisition: [$30]          │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Reward Structure ──────────────────────────────────────────────────────┐  │
│ │ Reward Type: [Multi-Tier ▼]   Reward Timing: [After Enrollment ▼]        │  │
│ │                                                                         │  │
│ │ Referrer Rewards:                                                       │  │
│ │ ┌───────────────────────────────────────────────────────────────────┐   │  │
│ │ │ Tier 1 (1-3 Referrals):                                          │   │  │
│ │ │ [●] Cash: [₹1500]  [○] Credit: [    ]  [○] Product: [       ]   │   │  │
│ │ │                                                                   │   │  │
│ │ │ Tier 2 (4-10 Referrals):                                         │   │  │
│ │ │ [●] Cash: [₹2000]  [○] Credit: [    ]  [○] Product: [       ]   │   │  │
│ │ │                                                                   │   │  │
│ │ │ Tier 3 (11+ Referrals):                                          │   │  │
│ │ │ [●] Cash: [₹3000]  [○] Credit: [    ]  [○] Product: [       ]   │   │  │
│ │ │                                                                   │   │  │
│ │ │ [➕ Add Tier]                                                    │   │  │
│ │ └───────────────────────────────────────────────────────────────────┘   │  │
│ │                                                                         │  │
│ │ Referee (New Student) Benefits:                                         │  │
│ │ [✓] Discount: [15%]                                                    │  │
│ │ [✓] Free Materials: [Course Textbooks]                                 │  │
│ │ [  ] Other: [                      ]                                   │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Referral Link/Code Setup ─────────────────────────────────────────────┐  │
│ │ Generation Method: [Both Links and Codes ▼]                             │  │
│ │                                                                         │  │
│ │ Link Structure:                                                         │  │
│ │ Base URL: [https://cognify.edu/r/]                                      │  │
│ │ Parameter: [ref]                                                        │  │
│ │ Unique ID: [●] Alphanumeric  [○] Numeric  [○] Username                 │  │
│ │                                                                         │  │
│ │ Code Format:                                                            │  │
│ │ [●] Prefix: [CERT25-]  [✓] Include Username  [○] Random                │  │
│ │ Length: [8] characters   Example: CERT25-ALEX01                         │  │
│ │                                                                         │  │
│ │ [🔄 Generate Sample] [📋 Copy]                                         │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [◀️ Back] [💾 Save Draft] [▶️ Continue to Sharing Options]                  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Participant Management
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Participant Management        👥 Active Referrers   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🔄 Programs │ 👥 Participants │ 🎁 Rewards │ 📈 Analytics │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Program Selection ────────────────────────────────────────────────────┐  │
│ │ Program: [Summer Certification Boost ▼]                                 │  │
│ │ Status Filter: [All ▼]   Sort By: [Most Referrals ▼]                    │  │
│ │                                                                         │  │
│ │ [🔍 Search Participants]   [📤 Export List]   [✉️ Message All]          │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Top Performers ─────────────────────────────────────────────────────┐  │
│ │ Rank│ Participant      │ Referrals │ Conversions │ Tier │ Rewards     │  │
│ │ ────┼──────────────────┼───────────┼─────────────┼──────┼────────────  │  │
│ │  1  │ Priya M.         │     12    │      5      │   3  │ ₹15,000     │  │
│ │  2  │ Rahul S.         │      8    │      4      │   2  │ ₹8,000      │  │
│ │  3  │ Ananya K.        │      6    │      3      │   2  │ ₹6,000      │  │
│ │  4  │ Vikram J.        │      5    │      2      │   2  │ ₹4,000      │  │
│ │  5  │ Neha T.          │      4    │      2      │   2  │ ₹4,000      │  │
│ │                                                                         │  │
│ │ [👑 Send Recognition] [🎁 Bonus Reward] [📊 View Details]              │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── All Participants ───────────────────────────────────────────────────┐  │
│ │ Showing 1-10 of 80 participants                                       │  │
│ │                                                                         │  │
│ │ Participant      │ Link/Code      │ Referrals │ Conv. │ Status │ Actions │  │
│ │ ────────────────┼────────────────┼───────────┼───────┼────────┼────────  │  │
│ │ Priya M.        │ CERT25-PRIYA01 │    12     │   5   │ Active │ ···     │  │
│ │ Rahul S.        │ CERT25-RAHUL05 │     8     │   4   │ Active │ ···     │  │
│ │ Ananya K.       │ CERT25-ANAN12  │     6     │   3   │ Active │ ···     │  │
│ │ Vikram J.       │ CERT25-VIKR08  │     5     │   2   │ Active │ ···     │  │
│ │ Neha T.         │ CERT25-NEHA22  │     4     │   2   │ Active │ ···     │  │
│ │ Arjun P.        │ CERT25-ARJU10  │     3     │   1   │ Active │ ···     │  │
│ │ Divya R.        │ CERT25-DIVY15  │     3     │   0   │ Active │ ···     │  │
│ │ Sandeep K.      │ CERT25-SAND04  │     2     │   1   │ Active │ ···     │  │
│ │ Meera L.        │ CERT25-MEER18  │     1     │   0   │ Active │ ···     │  │
│ │ Karthik B.      │ CERT25-KART09  │     1     │   0   │ Flag   │ ···     │  │
│ │                                                                         │  │
│ │ [◀️ Previous] [1] [2] [3] ... [8] [▶️ Next]                           │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [➕ Add Participant] [✉️ Message Selected] [⚠️ Flag Suspicious] [🚫 Suspend]  │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Referral Analytics
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Referral Analytics           📊 Performance Metrics │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🔄 Programs │ 👥 Participants │ 🎁 Rewards │ 📈 Analytics │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Analytics Selection ────────────────────────────────────────────────┐  │
│ │ Program: [Summer Certification Boost ▼]                               │  │
│ │ Date Range: [Last 30 Days ▼]   Comparison: [Previous Period ▼]        │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Performance Overview ─────────────────────────────────────────────────┐  │
│ │ Referral Funnel:                                                        │  │
│ │ Participants: 80 active referrers                                        │  │
│ │ → Links Generated: 245 unique referral links/codes                       │  │
│ │ → Link Visits: 120 tracked visits (49% visit rate)                       │  │
│ │ → Form Submissions: 75 form completions (62.5% of visits)                │  │
│ │ → Conversions: 18 new enrollments (24% of submissions)                   │  │
│ │                                                                         │  │
│ │ Overall Efficiency: 22.5% participant-to-conversion                     │  │
│ │ Cost Per Acquisition: $28.50 (vs $75.00 for paid channels)              │  │
│ │                                                                         │  │
│ │ [Chart: Referral Funnel Visualization with Drop-off Points]             │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Channel Performance ─────────────────────────────────────────────────┐  │
│ │ Sharing Channel    │ Shares │ Visits │ Conv. │ Rate │ Trend            │  │
│ │ ──────────────────┼────────┼────────┼───────┼──────┼───────────────    │  │
│ │ WhatsApp          │   120  │   68   │   12  │ 17.6%│ ↑ 3.2%           │  │
│ │ Email             │    75  │   32   │    4  │ 12.5%│ ↓ 1.8%           │  │
│ │ Direct Link       │    50  │   20   │    2  │ 10.0%│ ↑ 0.5%           │  │
│ │                                                                         │  │
│ │ [Chart: Channel Comparison by Conversion Rate]                          │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Reward Analytics ───────────────────────────────────────────────────┐  │
│ │ Total Rewards Issued: ₹36,000                                          │  │
│ │ Average Reward Per Conversion: ₹2,000                                  │  │
│ │ ROI on Reward Investment: 450%                                          │  │
│ │ Reward Distribution:                                                    │  │
│ │ - Tier 1 (₹1,500): 10 participants                                     │  │
│ │ - Tier 2 (₹2,000): 4 participants                                      │  │
│ │ - Tier 3 (₹3,000): 1 participant                                       │  │
│ │                                                                         │  │
│ │ [Chart: Reward Cost vs. Revenue Generated]                             │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Fraud Detection ───────────────────────────────────────────────────┐  │
│ │ Flagged Activities: 3 suspicious patterns detected                    │  │
│ │ Self-Referrals Blocked: 5 attempts                                     │  │
│ │ Multiple Accounts Flagged: 2 cases                                     │  │
│ │ Unusual Pattern: High click-to-conversion (Karthik B.) - under review  │  │
│ │                                                                         │  │
│ │ [🔍 View Details] [⚠️ Manage Flags]                                   │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📊 Export Report] [📅 Schedule Reports] [🧪 A/B Test Ideas] [📧 Share]    │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Reward Management
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Reward Management            🎁 Pending Approvals   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 🔄 Programs │ 👥 Participants │ 🎁 Rewards │ 📈 Analytics │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Reward Status Overview ───────────────────────────────────────────────┐  │
│ │ Program: [All Active Programs ▼]                                        │  │
│ │                                                                         │  │
│ │ Pending Approval: 12   Ready for Distribution: 24   Distributed: 185    │  │
│ │ Total Value Pending: ₹32,500   Total Distributed: ₹283,500             │  │
│ │                                                                         │  │
│ │ [🔄 Refresh] [⚙️ Automation Settings] [📊 Reward History]               │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Pending Rewards ───────────────────────────────────────────────────────┐  │
│ │ Showing pending rewards requiring approval                               │  │
│ │                                                                         │  │
│ │ Participant    │ Program          │ Referral   │ Reward      │ Actions  │  │
│ │ ──────────────┼──────────────────┼───────────┼─────────────┼─────────  │  │
│ │ Rahul S.      │ Summer Cert.     │ Amit G.   │ ₹2,000     │ ✓ ✗ ···  │  │
│ │ Ananya K.     │ Summer Cert.     │ Sonia P.  │ ₹2,000     │ ✓ ✗ ···  │  │
│ │ Priya M.      │ Summer Cert.     │ Rohan V.  │ ₹3,000     │ ✓ ✗ ···  │  │
│ │ Meera L.      │ Fall Enrollment  │ Tarun K.  │ ₹1,500     │ ✓ ✗ ···  │  │
│ │ Vikram J.     │ Summer Cert.     │ Leela S.  │ ₹2,000     │ ✓ ✗ ···  │  │
│ │ Sandeep K.    │ Alumni Network   │ Preeti A. │ ₹500       │ ✓ ✗ ···  │  │
│ │ Divya R.      │ Fall Enrollment  │ Kunal M.  │ ₹1,500     │ ✓ ✗ ···  │  │
│ │ Arjun P.      │ Summer Cert.     │ Nisha T.  │ ₹1,500     │ ✓ ✗ ···  │  │
│ │                                                                         │  │
│ │ [✓ Approve All] [⏱️ Delay] [🔍 Review Details] [📝 Add Note]           │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Payment Methods ───────────────────────────────────────────────────────┐  │
│ │ Default Payment Methods:                                                 │  │
│ │ Cash Rewards: [Bank Transfer ▼]                                          │  │
│ │ Credit Rewards: [Automatic Account Credit ▼]                             │  │
│ │ Gift Cards: [Amazon Voucher ▼]                                           │  │
│ │                                                                         │  │
│ │ Batch Processing:                                                        │  │
│ │ [●] Weekly (Every Friday)   [○] Bi-weekly   [○] Monthly                │  │
│ │ [✓] Send notification when processed                                    │  │
│ │ [✓] Generate reward statements                                          │  │
│ │                                                                         │  │
│ │ [⚙️ Configure] [📄 Payment History] [💾 Save Settings]                  │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [✓ Approve Selected] [⏱️ Schedule Distribution] [📤 Export List]            │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Component Library

### Referral Program Cards
- **Purpose**: Display program overview with key metrics
- **Usage**: Dashboard, program selection, quick status view
- **States**: Active, Paused, Draft, Completed, Flagged

### Referral Link Generators
- **Purpose**: Create and customize referral links and codes
- **Usage**: Program setup, participant management
- **Variants**: URL, Code, QR Code, with preview and copy functionality

### Reward Configuration Panels
- **Purpose**: Set up multi-tier reward structures
- **Usage**: Program creation and editing
- **Variants**: Single-tier, multi-tier, milestone-based, custom

### Participant Management Tables
- **Purpose**: Track and manage program participants
- **Usage**: Participant dashboard, reward management
- **Features**: Sorting, filtering, bulk actions, status indicators

### Referral Analytics Visualizations
- **Purpose**: Display program performance metrics
- **Usage**: Analytics dashboard, reports
- **Types**: Funnel visualization, trend charts, comparison graphs, heatmaps

### Fraud Detection Alerts
- **Purpose**: Flag suspicious activity patterns
- **Usage**: Throughout the system as needed
- **Variants**: Warning, Critical, Under Review, with action buttons

## Interaction Patterns

### Navigation Flow
1. Dashboard overview of all referral programs
2. Create/edit individual programs with multi-step setup
3. Manage participants and track activity
4. Review analytics and optimize programs
5. Process rewards and manage payouts

### Key Interactions
- **Program Creation**: Step-by-step wizard with validation
- **Link Sharing**: Direct copying, social sharing, QR code generation
- **Reward Approval**: Single or batch processing with verification
- **Fraud Management**: Flag, review, approve/deny suspicious activities

## Accessibility Considerations

### Keyboard Navigation
- Tab order follows logical content flow
- Shortcut keys for common actions (Alt+C for create, etc.)
- Focus states clearly visible on all interactive elements

### Screen Reader Support
- Semantic HTML structure with proper ARIA labels
- Clear descriptive text for charts and data visualizations
- Status updates announced for important actions

### Color and Contrast
- All text meets WCAG AA standard (4.5:1 for normal text)
- Non-color indicators for program status and performance
- High contrast mode support for all interactive elements

## Responsive Behavior

### Desktop (1440px+)
- Full dashboard layout with side-by-side panels
- Advanced analytics visualizations
- Multi-column tables with all metrics visible

### Tablet (768px-1439px)
- Streamlined layout with prioritized metrics
- Collapsible sections for detailed information
- Simplified charts with core metrics

### Mobile (<768px)
- Single column layout with progressive disclosure
- Essential metrics and actions prioritized
- Card-based interface for program management

## Technical Requirements

### Data Requirements
- Real-time tracking of referral links and conversions
- Unique identifier generation for participants
- Secure reward distribution tracking
- Fraud detection algorithm integration

### API Dependencies
- Authentication service for secure access
- Student/user database for participant validation
- Payment processing for reward distribution
- Analytics engine for performance metrics

### Performance Considerations
- Efficient loading of participant lists (pagination)
- Optimized analytics calculations for real-time dashboards
- Caching strategy for frequently accessed program data

## Platform Security

### Authentication & Authorization
- Role-based access for marketing team members
- Secure handling of referral codes and links
- Audit logging for all reward transactions

### Fraud Prevention
- Duplicate detection for self-referrals
- Unusual pattern recognition for suspicious activities
- IP tracking and device fingerprinting
- Time-based analysis of referral patterns

### Data Protection
- Secure storage of payment information
- Compliance with data privacy regulations
- Encrypted communication for link sharing

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired referral program management interface for education platform, showing referral dashboard, reward tiers, participant management, and performance analytics with clean typography, reward gold and education blue color scheme, modern layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design a referral program management interface with SF Pro typography, education blue (#007AFF) and reward gold (#FFCC00) accents, featuring program dashboard, reward configuration, participant management, and analytics views following Apple's design language"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated referral program management interface following Apple's design principles, targeting marketing managers who need to create and track word-of-mouth marketing campaigns. Focus on program creation, participant tracking, reward distribution, and performance analytics with clarity and strategic precision."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: July 23, 2025  
**Designed for**: Marketing managers and program administrators  
**Approval Status**: Ready for development review
