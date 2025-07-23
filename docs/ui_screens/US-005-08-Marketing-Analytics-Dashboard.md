# UI Design Specification: US-005-08 Marketing Analytics Dashboard

## Overview

**Story ID**: US-005-08  
**Epic**: EP-005 Marketing & Sales Automation  
**Title**: Marketing Analytics Dashboard  
**User Story**: As a Marketing Manager, I want a comprehensive analytics dashboard that shows all marketing performance metrics in one place, so that I can make data-driven decisions and optimize my marketing strategies effectively  

## Design Philosophy

**Elegant Simplicity, Purposeful Beauty**

This marketing analytics dashboard embodies Apple's design philosophy, focusing on clarity, insight, and decision enablement. The design transforms complex marketing data into accessible, actionable intelligence through thoughtfully presented visualizations and intuitive navigation. The system balances comprehensive data with a clean interface that highlights critical trends, removes distractions, and empowers marketing managers to derive meaningful insights at a glance while supporting deeper analysis when needed.

## Screen Architecture

**Layout Framework**: 64px header + 56px filter bar + main content area with configurable dashboard widgets  
**Navigation Pattern**: Primary navigation with overview, channel-specific metrics, campaign analytics, conversion tracking, and custom reports  
**Content Organization**: Executive summary → Channel performance → Campaign effectiveness → Conversion funnels → ROI analysis → Custom reports  
**Responsive Behavior**: Desktop primary (1440px+), tablet adaptive (768px-1439px), mobile companion (below 768px)

## Color Palette Implementation

**Primary Education Blue**: #007AFF - Action buttons, active states, primary CTAs  
**Data Visualization Palette**:
  - **Engagement Green**: #34C759 - Positive metrics, growth indicators
  - **Alert Red**: #FF3B30 - Negative metrics, attention points
  - **Campaign Orange**: #FF9500 - Campaign performance, funnels
  - **Channel Purple**: #AF52DE - Channel-specific metrics
  - **Revenue Blue**: #0A84FF - Financial metrics, ROI
**Neutral Foundation**: #F2F2F7 background, #FFFFFF panels, #8E8E93 secondary text  

## Typography Scale

**Primary Font**: SF Pro Display for headings and emphasis  
**Body Font**: SF Pro Text for content and UI elements  
**Mono Font**: SF Mono for specific metrics and technical data  

- **H1 Display**: 32px/40px, semibold - Page titles
- **H2 Section**: 24px/32px, semibold - Section headers  
- **H3 Subsection**: 20px/28px, medium - Panel titles
- **Body Large**: 17px/24px, regular - Primary content
- **Body Standard**: 15px/22px, regular - Secondary content
- **Caption**: 13px/18px, regular - Metadata and labels
- **Micro**: 11px/16px, medium - Status indicators

## Screen Designs

### Screen 1: Marketing Analytics Overview
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Marketing Analytics        🔔 👤 Alex (Marketing)   │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 📧 Email │ 📱 SMS/WhatsApp │ 🌐 Social │ 🛒 Campaigns │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Dashboard Configuration ────────────────────────────────────────────┐  │
│ │ Date Range: [Last 30 Days ▼]   Compare With: [Previous Period ▼]      │  │
│ │                                                                       │  │
│ │ [📊 Default View] [⭐ Favorites] [🔧 Customize Dashboard] [📥 Export] │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Executive Summary ─────────────────────────────────────────────────┐  │
│ │ ┌────────────────┐  ┌────────────────┐  ┌────────────────┐           │  │
│ │ │   Total Reach  │  │   Engagement   │  │   Conversions  │           │  │
│ │ │    125,850     │  │     32,450     │  │     2,340      │           │  │
│ │ │    ↑ 18.5%     │  │    ↑ 12.3%     │  │    ↑ 8.7%      │           │  │
│ │ └────────────────┘  └────────────────┘  └────────────────┘           │  │
│ │                                                                       │  │
│ │ ┌────────────────┐  ┌────────────────┐  ┌────────────────┐           │  │
│ │ │ Leads Generated│  │    Revenue     │  │    Marketing   │           │  │
│ │ │     3,850      │  │  ₹3,750,000    │  │      ROI       │           │  │
│ │ │    ↑ 22.4%     │  │    ↑ 15.8%     │  │     425%       │           │  │
│ │ └────────────────┘  └────────────────┘  └────────────────┘           │  │
│ │                                                                       │  │
│ │ [Chart: Overall Marketing Performance Trend]                          │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Channel Performance ─────────────────────────────────────────────────┐  │
│ │ Channel      │ Reach   │ Engage. │ Leads │ Conv. │ Cost   │ ROI        │  │
│ │ ─────────────┼─────────┼─────────┼───────┼───────┼────────┼───────     │  │
│ │ Email        │ 45,000  │ 13,500  │ 1,620 │  810  │₹75,000 │ 520%       │  │
│ │ SMS/WhatsApp │ 28,500  │  8,550  │   855 │  342  │₹42,000 │ 380%       │  │
│ │ Social Media │ 35,250  │  7,050  │   705 │  282  │₹98,000 │ 210%       │  │
│ │ Paid Search  │ 12,600  │  2,520  │   630 │  504  │₹85,000 │ 348%       │  │
│ │ Affiliate    │  4,500  │    830  │   210 │  105  │₹15,000 │ 485%       │  │
│ │                                                                       │  │
│ │ [Chart: Channel Comparison by Conversion Rate]                         │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Top Performing Campaigns ───────────────────────────────────────────┐  │
│ │ Campaign              │ Reach  │ Conv. │ Rate  │ Revenue   │ ROI      │  │
│ │ ──────────────────────┼────────┼───────┼───────┼───────────┼───────── │  │
│ │ Summer Enrollment     │ 35,250 │  525  │ 1.5%  │ ₹1,575,000│ 580%     │  │
│ │ Data Science Webinar  │ 18,500 │  370  │ 2.0%  │ ₹925,000  │ 420%     │  │
│ │ Business Analytics    │ 15,750 │  245  │ 1.6%  │ ₹612,500  │ 310%     │  │
│ │ Early Bird Discount   │ 22,500 │  410  │ 1.8%  │ ₹512,500  │ 280%     │  │
│ │                                                                       │  │
│ │ [🔍 View All Campaigns]                                              │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📋 Create Report] [🔔 Set Alerts] [📅 Schedule Reports] [📤 Export Data]   │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 2: Campaign Performance Analytics
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Campaign Analytics          🛒 Campaign Performance │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 📧 Email │ 📱 SMS/WhatsApp │ 🌐 Social │ 🛒 Campaigns │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Campaign Selection ─────────────────────────────────────────────────┐  │
│ │ Campaign: [Summer Enrollment Drive ▼]                                  │  │
│ │ Date Range: [Last 30 Days ▼]   Compare With: [Previous Campaign ▼]     │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Campaign Performance ─────────────────────────────────────────────────┐  │
│ │ Status: Active   Duration: 45 days (60% complete)                       │  │
│ │ Budget: ₹250,000   Spent: ₹150,000 (60%)   Remaining: ₹100,000          │  │
│ │                                                                         │  │
│ │ ┌────────────────┐  ┌────────────────┐  ┌────────────────┐             │  │
│ │ │     Reach      │  │   Engagement   │  │    Inquiries   │             │  │
│ │ │    35,250      │  │     7,050      │  │     1,750      │             │  │
│ │ │    ↑ 22.5%     │  │    ↑ 18.3%     │  │    ↑ 12.8%     │             │  │
│ │ └────────────────┘  └────────────────┘  └────────────────┘             │  │
│ │                                                                         │  │
│ │ ┌────────────────┐  ┌────────────────┐  ┌────────────────┐             │  │
│ │ │  Applications  │  │  Enrollments   │  │   Cost per     │             │  │
│ │ │      850       │  │      525       │  │   Enrollment   │             │  │
│ │ │    ↑ 15.4%     │  │    ↑ 10.5%     │  │  ₹285 (↓ 8.2%) │             │  │
│ │ └────────────────┘  └────────────────┘  └────────────────┘             │  │
│ │                                                                         │  │
│ │ [Chart: Daily Performance Metrics]                                      │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Channel Breakdown ───────────────────────────────────────────────────┐  │
│ │ Channel      │ Budget  │ Spent   │ Reach  │ Conv. │ CPL    │ CPA       │  │
│ │ ─────────────┼─────────┼─────────┼────────┼───────┼────────┼──────     │  │
│ │ Email        │ ₹50,000 │ ₹30,000 │ 12,500 │  225  │ ₹36.0  │ ₹133.3    │  │
│ │ SMS/WhatsApp │ ₹35,000 │ ₹21,000 │  8,250 │  132  │ ₹42.0  │ ₹159.1    │  │
│ │ Social Media │ ₹85,000 │ ₹51,000 │  9,750 │   98  │ ₹89.5  │ ₹520.4    │  │
│ │ Paid Search  │ ₹65,000 │ ₹39,000 │  3,850 │   65  │ ₹108.3 │ ₹600.0    │  │
│ │ Referral     │ ₹15,000 │  ₹9,000 │    900 │    5  │ ₹300.0 │ ₹1,800.0  │  │
│ │                                                                         │  │
│ │ [Chart: Channel Performance Comparison]                                 │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Conversion Funnel ──────────────────────────────────────────────────┐  │
│ │                                                                         │  │
│ │ Awareness (35,250) ──────────────────────────────────────────────      │  │
│ │                       ↓ 20.0%                                          │  │
│ │ Interest (7,050) ─────────────────                                     │  │
│ │                    ↓ 24.8%                                             │  │
│ │ Consideration (1,750) ────────                                         │  │
│ │                       ↓ 48.6%                                          │  │
│ │ Application (850) ─────                                                │  │
│ │                   ↓ 61.8%                                              │  │
│ │ Enrollment (525) ───                                                   │  │
│ │                                                                         │  │
│ │ Overall Conversion: 1.5% (Awareness to Enrollment)                     │  │
│ │ [Chart: Stage-by-Stage Conversion with Drop-off Points]                │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📊 Deep Analysis] [⚙️ Optimize Budget] [⚡ Identify Bottlenecks]           │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 3: Channel Analytics - Email Performance
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Email Analytics            📧 Email Performance     │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 📧 Email │ 📱 SMS/WhatsApp │ 🌐 Social │ 🛒 Campaigns │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Email Campaign Selection ───────────────────────────────────────────┐  │
│ │ Campaign: [All Email Campaigns ▼]                                      │  │
│ │ Date Range: [Last 30 Days ▼]   Segment: [All Recipients ▼]            │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Email Performance Summary ──────────────────────────────────────────┐  │
│ │ Sent: 45,000   Delivered: 43,650 (97%)   Bounced: 1,350 (3%)          │  │
│ │                                                                         │  │
│ │ ┌────────────────┐  ┌────────────────┐  ┌────────────────┐             │  │
│ │ │   Open Rate    │  │   Click Rate   │  │   CTR (of      │             │  │
│ │ │     30.0%      │  │     12.8%      │  │    opens)      │             │  │
│ │ │  13,095 opens  │  │   5,587 clicks │  │     42.7%      │             │  │
│ │ │    ↑ 2.5%      │  │    ↑ 1.8%      │  │    ↓ 0.3%      │             │  │
│ │ └────────────────┘  └────────────────┘  └────────────────┘             │  │
│ │                                                                         │  │
│ │ ┌────────────────┐  ┌────────────────┐  ┌────────────────┐             │  │
│ │ │ Unsubscribe    │  │  Conversion    │  │  Revenue per   │             │  │
│ │ │     Rate       │  │     Rate       │  │     Email      │             │  │
│ │ │     0.32%      │  │     1.85%      │  │     ₹18.3      │             │  │
│ │ │    ↓ 0.05%     │  │    ↑ 0.23%     │  │    ↑ 2.1%      │             │  │
│ │ └────────────────┘  └────────────────┘  └────────────────┘             │  │
│ │                                                                         │  │
│ │ [Chart: Email Performance Trends Over Time]                            │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Top Performing Email Campaigns ───────────────────────────────────────┐  │
│ │ Campaign              │ Open % │ Click % │ Conv. % │ Revenue  │ ROI     │  │
│ │ ──────────────────────┼────────┼─────────┼─────────┼──────────┼───────  │  │
│ │ Summer Course Catalog │  38.5% │  18.2%  │   2.4%  │₹225,000  │ 750%    │  │
│ │ Data Science Webinar  │  35.2% │  16.8%  │   2.1%  │₹178,500  │ 680%    │  │
│ │ Early Bird Discount   │  32.8% │  14.5%  │   2.0%  │₹145,000  │ 580%    │  │
│ │ Alumni Special Offer  │  28.5% │  11.2%  │   1.8%  │₹108,000  │ 420%    │  │
│ │ Monthly Newsletter    │  25.4% │   8.5%  │   0.9%  │ ₹58,500  │ 320%    │  │
│ │                                                                         │  │
│ │ [🔍 View All Email Campaigns]                                          │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Email Engagement Analysis ────────────────────────────────────────────┐  │
│ │ ┌─────────────────────────────────┐  ┌─────────────────────────────┐    │  │
│ │ │                                 │  │                             │    │  │
│ │ │       Device Breakdown          │  │     Engagement by Time      │    │  │
│ │ │                                 │  │                             │    │  │
│ │ │ Mobile: 65%                     │  │ Peak Hours:                 │    │  │
│ │ │ Desktop: 28%                    │  │ 8-9am: 22% opens           │    │  │
│ │ │ Tablet: 7%                      │  │ 12-1pm: 18% opens          │    │  │
│ │ │                                 │  │ 7-9pm: 31% opens           │    │  │
│ │ │ [Chart: Device Breakdown]       │  │ [Chart: Hourly Engagement]  │    │  │
│ │ └─────────────────────────────────┘  └─────────────────────────────┘    │  │
│ │                                                                         │  │
│ │ ┌─────────────────────────────────┐  ┌─────────────────────────────┐    │  │
│ │ │                                 │  │                             │    │  │
│ │ │       Link Performance          │  │    Subject Line Analysis    │    │  │
│ │ │                                 │  │                             │    │  │
│ │ │ Primary CTA: 68% of clicks     │  │ Length: 35-50 chars optimal │    │  │
│ │ │ Secondary Links: 22% of clicks │  │ Emoji usage: +12% open rate │    │  │
│ │ │ Social Links: 5% of clicks     │  │ Personalization: +15% CTR   │    │  │
│ │ │ Footer Links: 5% of clicks     │  │ Questions: +8% open rate    │    │  │
│ │ │                                 │  │                             │    │  │
│ │ │ [Chart: Link Click Heatmap]     │  │ [Chart: Subject Analysis]   │    │  │
│ │ └─────────────────────────────────┘  └─────────────────────────────┘    │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📊 Advanced Analytics] [🧪 A/B Test Analysis] [📧 Email Recommendations]    │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 4: Marketing Attribution Analysis
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Marketing Attribution      📈 Attribution Analysis  │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 📧 Email │ 📱 SMS/WhatsApp │ 🌐 Social │ 🛒 Campaigns │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Attribution Model Configuration ────────────────────────────────────┐  │
│ │ Attribution Model: [Multi-Touch ▼]   Lookback Window: [30 Days ▼]      │  │
│ │ Conversion Type: [Enrollments ▼]     Revenue Model: [Lifetime Value ▼] │  │
│ │                                                                       │  │
│ │ [⚙️ Configure Model] [🔄 Update Analysis] [📩 Schedule Report]         │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Attribution Summary ─────────────────────────────────────────────────┐  │
│ │ Total Conversions: 2,340   Total Attributed Revenue: ₹3,750,000        │  │
│ │ Average Touchpoints to Conversion: 4.8                                  │  │
│ │ Average Conversion Time: 12.3 days                                      │  │
│ │                                                                         │  │
│ │ [Chart: Multi-Touch Attribution Flow]                                   │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Channel Attribution ─────────────────────────────────────────────────┐  │
│ │ Channel         │ First Touch │ Last Touch │ Multi-Touch │ Revenue    │  │
│ │ ────────────────┼─────────────┼────────────┼─────────────┼───────────  │  │
│ │ Organic Search  │    25.5%    │   12.8%    │    18.5%    │  ₹693,750  │  │
│ │ Paid Search     │    18.2%    │   22.5%    │    20.8%    │  ₹780,000  │  │
│ │ Email           │    12.3%    │   28.4%    │    24.6%    │  ₹922,500  │  │
│ │ Social Media    │    22.8%    │   15.2%    │    18.9%    │  ₹708,750  │  ���
│ │ SMS/WhatsApp    │     8.4%    │   10.6%    │     9.2%    │  ₹345,000  │  │
│ │ Direct          │     7.6%    │    7.2%    │     5.8%    │  ₹217,500  │  │
│ │ Referral        │     5.2%    │    3.3%    │     2.2%    │   ₹82,500  │  │
│ │                                                                         │  │
│ │ [Chart: Attribution Model Comparison by Channel]                        │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Customer Journey Analysis ──────────────────────────────────────────┐  │
│ │ Common Journey Paths:                                                  │  │
│ │                                                                         │  │
│ │ 1. Organic Search → Email → WhatsApp → Email → Website (18%)           │  │
│ │ 2. Social Ad → Website → Email → Website (15%)                         │  │
│ │ 3. Paid Search → Website → Remarketing Ad → Website (12%)              │  │
│ │ 4. Referral → Email → SMS → Website (8%)                               │  │
│ │ 5. Direct → Website → Email → Social → Website (7%)                    │  │
│ │                                                                         │  │
│ │ Average Days Between Touchpoints:                                       │  │
│ │ First to Second: 2.3 days                                              │  │
│ │ Second to Third: 3.8 days                                              │  │
│ │ Third to Conversion: 6.2 days                                          │  │
│ │                                                                         │  │
│ │ [Chart: Visual Customer Journey Map]                                    │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Assisted Conversions ─────────────────────────────────────────────────┐  │
│ │ Channel         │ Assists │ Assist Value │ Assist/Last │ Assist/First │  │
│ │ ────────────────┼─────────┼──────────────┼─────────────┼────────────── │  │
│ │ Email           │  1,580  │  ₹1,245,000  │    1.35     │    2.84      │  │
│ │ Remarketing Ads │    950  │    ₹685,000  │    2.18     │    1.25      │  │
│ │ SMS/WhatsApp    │    780  │    ₹525,000  │    1.52     │    1.68      │  │
│ │ Social Media    │    620  │    ₹450,000  │    0.98     │    0.85      │  │
│ │ Content/Blog    │    380  │    ₹245,000  │    2.85     │    1.42      │  │
│ │                                                                         │  │
│ │ [Chart: Assist Value by Channel]                                        │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📊 Advanced Models] [📋 Custom Analysis] [📤 Export Attribution Data]      │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

### Screen 5: Custom Report Builder
```
┌───────────────────────────────────────────────────────────────────────────────┐
│ ≡ Cognify                Report Builder              📋 Custom Reports       │
├───────────────────────────────────────────────────────────────────────────────┤
│ 📊 Overview │ 📧 Email │ 📱 SMS/WhatsApp │ 🌐 Social │ 🛒 Campaigns │
├───────────────────────────────────────────────────────────────────────────────┤
│                                                                               │
│ ┌─── Report Configuration ────────────────────────────────────────────────┐  │
│ │ Report Name: [Q3 Marketing Performance]                                │  │
│ │ Description: [Comprehensive analysis of Q3 marketing effectiveness]     │  │
│ │ Date Range: [Custom: Jul 1 - Sep 30, 2025]                             │  │
│ │ Comparison: [Previous Quarter ▼]                                       │  │
│ │                                                                       │  │
│ │ [💾 Save Report] [📅 Schedule] [👥 Share] [📤 Export]                 │  │
│ └─────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Widget Selection ──────────────────────────────────────────────────┐  │
│ │ ┌─────────────────────────────┐  ┌─────────────────────────────┐      │  │
│ │ │                             │  │                             │      │  │
│ │ │     Available Widgets       │  │      Selected Widgets       │      │  │
│ │ │                             │  │                             │      │  │
│ │ │ • Campaign Performance      │  │ 1. Executive Summary        │      │  │
│ │ │ • Audience Demographics     │  │ 2. Channel Performance      │      │  │
│ │ │ • Geographic Heatmap        │  │ 3. Campaign ROI Analysis    │      │  │
│ │ │ • Device Breakdown          │  │ 4. Conversion Funnel        │      │  │
│ │ │ • Content Engagement        │  │ 5. Attribution Analysis     │      │  │
│ │ │ • Social Media Metrics      │  │                             │      │  │
│ │ │ • Lead Source Analysis      │  │                             │      │  │
│ │ │ • Email Campaign Metrics    │  │                             │      │  │
│ │ │ • Landing Page Performance  │  │                             │      │  │
│ │ │ • Competitor Comparison     │  │                             │      │  │
│ │ │                             │  │                             │      │  │
│ │ │ [🔍 Search Widgets]         │  │ [⬆️⬇️ Reorder] [✏️ Configure]│      │  │
│ │ │                             │  │                             │      │  │
│ │ │ [➡️ Add Selected]           │  │ [⬅️ Remove Selected]        │      │  │
│ │ │                             │  │                             │      │  │
│ │ └─────────────────────────────┘  └─────────────────────────────┘      │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Widget Configuration - Channel Performance ────────────────────────┐  │
│ │ Title: [Channel Performance Analysis]                                 │  │
│ │ Visualization Type: [Bar Chart ▼]                                     │  │
│ │                                                                       │  │
│ │ Data Source:                                                          │  │
│ │ Metrics: [✓] Reach  [✓] Engagement  [✓] Conversions  [✓] Revenue     │  │
│ │                                                                       │  │
│ │ Filters:                                                              │  │
│ │ Channels: [✓] All  [  ] Email  [  ] Social  [  ] Search  [  ] SMS    │  │
│ │ Campaigns: [  ] All  [✓] Selected: Summer, Data Science, Business    │  │
│ │                                                                       │  │
│ │ Display Options:                                                      │  │
│ │ [✓] Show Values  [✓] Show Percentage  [✓] Include Comparison        │  │
│ │ [✓] Show Legend  [  ] Stacked View   [✓] Interactive Tooltip        │  │
│ │                                                                       │  │
│ │ [👁️ Preview Widget] [💾 Save Configuration]                          │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ ┌─── Report Preview ───────────────────────────────────────────────────────┐  │
│ │ [Widget Preview Area]                                                   │  │
│ │                                                                         │  │
│ │ [📋 Edit Layout] [🎨 Customize Colors] [📐 Adjust Size]                │  │
│ └──────────────────────────────────────────────────────────────────────────┘  │
│                                                                               │
│ [📊 Create Report] [💾 Save as Template] [🔄 Reset] [📑 Preview Full Report] │
│                                                                               │
└───────────────────────────────────────────────────────────────────────────────┘
```

## Component Library

### Marketing Metric Cards
- **Purpose**: Display key performance indicators with trends
- **Usage**: Dashboard, summaries, quick insights
- **Variants**: Standard, Comparative, Milestone, Alert

### Data Visualization Charts
- **Purpose**: Present marketing metrics visually
- **Usage**: Throughout dashboard for trend analysis
- **Types**: Line, Bar, Pie, Funnel, Heatmap, Flow Diagram

### Marketing Channel Panels
- **Purpose**: Organize metrics by marketing channel
- **Usage**: Channel-specific analysis and comparison
- **Variants**: Overview, Detailed, Comparative, ROI-focused

### Campaign Analysis Tables
- **Purpose**: Present campaign data in sortable format
- **Usage**: Campaign comparison, performance tracking
- **Features**: Sorting, filtering, highlighting, trend indicators

### Attribution Visualizations
- **Purpose**: Illustrate multi-touch attribution models
- **Usage**: Attribution analysis, journey mapping
- **Types**: Funnel, Flow, Path, Contribution, Value distribution

### Report Builder Components
- **Purpose**: Create customizable marketing reports
- **Usage**: Custom analysis, executive reporting
- **Features**: Drag-drop interface, widget library, layout tools

## Interaction Patterns

### Navigation Flow
1. Marketing overview dashboard with summary KPIs
2. Channel-specific drill-down analysis
3. Campaign performance evaluation
4. Attribution and customer journey mapping
5. Custom report creation and distribution

### Key Interactions
- **Date Range Selection**: Consistent date picker across all screens
- **Comparative Analysis**: Overlay and compare different time periods
- **Drill-Down Navigation**: From summary to detailed metrics
- **Dashboard Customization**: Rearrange widgets and save layouts
- **Report Generation**: Create, schedule, and share marketing reports

## Accessibility Considerations

### Keyboard Navigation
- Tab order follows logical content flow
- Shortcut keys for common analytics actions
- Focus states clearly visible on all interactive elements

### Screen Reader Support
- Semantic HTML structure with proper ARIA labels
- Alt text for all charts and visualizations
- Data table alternatives for complex visualizations

### Color and Contrast
- All text meets WCAG AA standard (4.5:1 for normal text)
- Non-color indicators for trend directions
- Colorblind-friendly data visualization palette

## Responsive Behavior

### Desktop (1440px+)
- Full dashboard layout with multi-column widget grid
- Advanced visualizations with detailed tooltips
- Side-by-side comparative analysis

### Tablet (768px-1439px)
- Streamlined layout with prioritized metrics
- Scrollable sections for detailed analysis
- Optimized charts with essential information

### Mobile (<768px)
- Single column layout with collapsible sections
- Summary metrics with drill-down capability
- Simplified visualizations optimized for touch

## Technical Requirements

### Data Requirements
- Real-time marketing data aggregation
- Historical data comparison capability
- Multi-channel data integration
- Custom segmentation and filtering

### API Dependencies
- Integration with all marketing channel data sources
- Analytics API for advanced metrics calculation
- Report generation and export capabilities
- Authentication for personalized dashboards

### Performance Considerations
- Efficient data loading for dashboard widgets
- Lazy loading for historical data
- Caching strategy for frequently accessed metrics
- Responsive rendering for various screen sizes

## Platform Security

### Data Access Controls
- Role-based access to marketing analytics
- Secure handling of customer attribution data
- Audit logging for report generation and exports

### Compliance Features
- GDPR-compliant data handling
- Anonymized data presentation options
- Retention policies for marketing analytics

## AI Integration Prompts

### For Midjourney/DALL-E
```
"Apple-inspired marketing analytics dashboard for education platform, showing campaign performance metrics, channel comparisons, conversion funnels, and attribution analysis with clean typography, data visualization color palette, and modern layout --ar 16:9 --style modern"
```

### For Figma AI Features
```
"Design a marketing analytics dashboard with SF Pro typography, education blue (#007AFF) primary color and data visualization palette, featuring executive summary, channel performance, campaign analytics, attribution analysis, and custom reporting following Apple's design language"
```

### For Claude/ChatGPT Design Assistance
```
"Create a sophisticated marketing analytics dashboard following Apple's design principles, targeting marketing managers who need to make data-driven decisions. Focus on executive summary metrics, channel performance comparison, campaign analytics, attribution modeling, and custom report building with clarity and strategic precision."
```

---

**Design System**: Cognify Education Platform v2.0  
**Last Updated**: July 23, 2025  
**Designed for**: Marketing managers and data analysts  
**Approval Status**: Ready for development review
