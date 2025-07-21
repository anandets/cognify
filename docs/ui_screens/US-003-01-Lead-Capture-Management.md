# US-003-01: Lead Capture and Management - UI Design Specification

## Overview
A comprehensive lead capture and management system enabling marketing coordinators to capture leads from multiple channels, automatically score them, and manage the complete lead lifecycle with intelligent assignment and nurturing workflows.

---

## 🎨 Design System Reference
**Design Philosophy**: Apple-inspired elegance with Product Hunt simplicity  
**Color Palette**: Education Blue (#007AFF), Success Green (#34C759), Warning Orange (#FF9500)  
**Typography**: SF Pro Display for headings, SF Pro Text for body content  
**Components**: Clean forms, visual scoring indicators, activity timelines

---

## 📱 Core Screen Designs

### 1. Lead Management Dashboard (Primary Screen)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ 🎯 Lead Management   🔍 Search   📊 Analytics   ⚙️ Setup │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 📈 Performance Overview                                 │
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │ 847     │ 23%     │ 2.3hrs  │ 156     │               │
│ │ New     │ Convert │ Response│ Hot     │               │
│ │ Leads   │ Rate    │ Time    │ Leads   │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ 🎯 Lead Pipeline                                        │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ New (247)   │ Contacted (89)  │ Qualified (45)     │ │
│ │ ──────────  │ ──────────────  │ ────────────────   │ │
│ │ 🔥 Sarah J  │ 🟡 Mike Chen    │ 🟢 Lisa Wang      │ │
│ │ 95 Score    │ 67 Score        │ 89 Score           │ │
│ │ Web Form    │ Facebook        │ Event              │ │
│ │ 2hrs ago    │ 1 day ago       │ 3 days ago         │ │
│ │ ──────────  │ ──────────────  │ ────────────────   │ │
│ │ + 246 more  │ + 88 more       │ + 44 more          │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 🚨 Priority Actions                                     │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ ⚡ 15 Hot leads need immediate follow-up             │ │
│ │ 📞 23 leads assigned but not contacted              │ │
│ │ ⏰ 8 leads approaching response deadline            │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Visual Elements
- **KPI Cards**: 4-card layout with real-time metrics and trend indicators
- **Kanban Pipeline**: Visual drag-drop columns for lead stages
- **Priority Alerts**: Color-coded notifications for urgent actions
- **Quick Filters**: Chips for lead source, score range, assignment status

#### Interactive Features
- Drag and drop leads between pipeline stages
- One-click lead assignment to sales reps
- Bulk selection for mass actions
- Real-time updates with WebSocket connections

### 2. Individual Lead Detail View

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ ← Back to Pipeline   👤 Sarah Johnson   📞 Call   ✉️ Email│
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🎯 Lead Score & Status                                  │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 🔥 Score: 95/100     Status: 🆕 New Lead            │ │
│ │ ████████████▓▓▓▓     Source: 🌐 Website Contact    │ │
│ │ Captured: 2hrs ago   Assigned: Mike Davis          │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 📋 Contact Information                                  │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Name: Sarah Johnson           Phone: (555) 123-4567 │ │
│ │ Email: sarah@email.com        Company: TechCorp     │ │
│ │ Interest: Data Science Course Location: SF, CA     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 📈 Scoring Breakdown                                    │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Demographics (25/25)  ████████████ Perfect Match   │ │
│ │ Behavioral (35/40)    ██████████▓▓ High Activity   │ │
│ │ Engagement (20/25)    ████████▓▓▓▓ Good Response   │ │
│ │ Intent (15/10)        ███████████████ Very High    │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 📅 Activity Timeline                                    │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 🌐 2hrs ago   Submitted contact form                │ │
│ │ 📧 1hr ago    Welcome email sent                    │ │
│ │ 👁️ 45min ago  Opened welcome email                  │ │
│ │ 🔗 30min ago  Visited pricing page                  │ │
│ │ 📞 Now        Call scheduled by Mike D              │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Key Features
- **Score Visualization**: Circular progress indicator with color coding
- **Breakdown Analysis**: Detailed scoring components with reasoning
- **Activity Timeline**: Chronological interaction history
- **Quick Actions**: One-click calling, emailing, and meeting scheduling
- **Notes Section**: Internal team notes and follow-up reminders

### 3. Lead Capture Form Builder

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ 🎨 Form Builder   📱 Preview   🔧 Settings   💾 Publish  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🔧 Form Components          📝 Form Preview             │
│ ┌─────────────────┐        ┌─────────────────────────┐  │
│ │ + Text Input    │        │ 📚 Interested in our    │  │
│ │ + Email Field   │        │    Data Science Course? │  │
│ │ + Phone Number  │        │                         │  │
│ │ + Dropdown      │        │ Name* [____________]    │  │
│ │ + Checkbox      │        │ Email* [____________]   │  │
│ │ + Text Area     │        │ Phone [____________]    │  │
│ │ + File Upload   │        │ Interest [Dropdown ⌄]  │  │
│ │                 │        │ Message                 │  │
│ │ 🎨 Styling      │        │ [________________]      │  │
│ │ + Colors        │        │                         │  │
│ │ + Typography    │        │ [📚 Get Course Info]    │  │
│ │ + Layout        │        │                         │  │
│ │                 │        │ By submitting, you      │  │
│ │ ⚙️ Behavior     │        │ agree to our privacy    │  │
│ │ + Validation    │        │ policy.                 │  │
│ │ + Redirect      │        └─────────────────────────┘  │
│ │ + Integrations  │                                     │
│ └─────────────────┘                                     │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Form Builder Features
- **Drag & Drop**: Visual form builder with component library
- **Live Preview**: Real-time form preview with mobile/desktop views
- **Smart Validation**: Automatic field validation and error handling
- **Multi-Channel**: Deploy to website, landing pages, or embedded widgets
- **A/B Testing**: Built-in form variant testing and performance tracking

### 4. Lead Scoring Configuration

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ ⚙️ Lead Scoring Setup                                   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 📊 Scoring Categories                                   │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 👤 Demographics (Max: 25 points)                    │ │
│ │ ┌─────────────────────────────────────────────────┐ │ │
│ │ │ Age 18-24        [5 points] ▪️▪️▪️▪️▪️          │ │ │
│ │ │ Age 25-34        [8 points] ▪️▪️▪️▪️▪️▪️▪️▪️    │ │ │
│ │ │ College Graduate [10 points]                   │ │ │
│ │ │ Tech Background  [2 points]                    │ │ │
│ │ └─────────────────────────────────────────────────┘ │ │
│ │                                                     │ │
│ │ 🎯 Behavioral (Max: 40 points)                      │ │
│ │ ┌─────────────────────────────────────────────────┐ │ │
│ │ │ Website Visit    [2 points] per page           │ │ │
│ │ │ Demo Request     [15 points] high intent       │ │ │
│ │ │ Pricing Page     [10 points] strong interest   │ │ │
│ │ │ Course Catalog   [5 points] browsing           │ │ │
│ │ │ Blog Engagement  [3 points] per article       │ │ │
│ │ └─────────────────────────────────────────────────┘ │ │
│ │                                                     │ │
│ │ 📧 Engagement (Max: 25 points)                      │ │
│ │ ✉️ Email Opens    [2 points]                       │ │
│ │ 🔗 Link Clicks    [5 points]                       │ │
│ │ 📱 Social Shares  [3 points]                       │ │
│ │                                                     │ │
│ │ 🔍 Intent (Max: 10 points)                          │ │
│ │ 💬 Chat Initiated [8 points]                       │ │
│ │ 📞 Called Number  [10 points]                      │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Scoring Features
- **Visual Score Builder**: Drag sliders to set point values
- **Category Weights**: Adjust importance of different scoring factors
- **Threshold Settings**: Define hot, warm, cold lead boundaries
- **Testing Mode**: Preview scoring with sample data
- **Historical Analysis**: Review scoring accuracy against conversions

---

## 🎯 Component Specifications

### Lead Score Indicators
- **Score Rings**: Circular progress from 0-100 with color coding
- **Hot (80-100)**: Danger Red (#FF3B30) - Immediate action needed
- **Warm (60-79)**: Warning Orange (#FF9500) - Follow up soon  
- **Cool (40-59)**: Education Blue (#007AFF) - Nurture sequence
- **Cold (0-39)**: Secondary Gray (#86868B) - Long-term nurturing

### Pipeline Cards
- **Card Design**: White background, subtle shadow, 12px radius
- **Lead Avatar**: 40px circular with fallback initials
- **Score Badge**: Top-right corner with color-coded score
- **Source Icons**: Visual indicators for lead source (web, social, event)
- **Time Stamps**: Relative time display (2hrs ago, 1 day ago)

### Action Buttons
- **Primary Actions**: Education Blue for call/email/schedule
- **Secondary Actions**: Outline buttons for notes/assign/move
- **Bulk Actions**: Floating action bar for selected leads
- **Quick Actions**: Icon-only buttons in compact views

---

## 📊 Interactive Elements

### Kanban Interface
- **Drag & Drop**: Smooth animations for card movement
- **Drop Zones**: Visual feedback during drag operations
- **Stage Counters**: Real-time count updates in column headers
- **Keyboard Support**: Arrow keys for navigation, space to select

### Search & Filtering
- **Global Search**: Search across name, email, company, and notes
- **Smart Filters**: Preset filters for common queries (hot leads, unassigned)
- **Date Ranges**: Calendar picker for created/updated date filtering
- **Saved Views**: Bookmark frequent filter combinations

---

## 💫 Micro-Interactions

### Lead Interactions
- **Score Animation**: Smooth progress ring filling animation
- **Status Changes**: Color transitions for status updates
- **Activity Updates**: Toast notifications for new lead activities
- **Assignment**: Visual feedback when leads are assigned

### Form Building
- **Component Hover**: Highlight effect when hovering over form components
- **Drag Feedback**: Visual placeholder during component dragging  
- **Live Updates**: Real-time preview updates as form is modified
- **Validation**: Immediate feedback for form validation rules

---

## 📱 Responsive Design

### Mobile Layout (390px)
- **Single Column**: Stacked pipeline columns with horizontal swipe
- **Quick Actions**: Bottom sheet with action buttons
- **Condensed Cards**: Essential info only with expand option
- **Touch Optimized**: Larger tap targets and swipe gestures

### Tablet Layout (834px)
- **Two-Column**: Pipeline on left, details on right
- **Floating Panels**: Modal dialogs for form building and settings
- **Touch & Mouse**: Hybrid interaction patterns

### Desktop Layout (1440px+)
- **Three-Column**: Pipeline, detail view, and activity sidebar
- **Keyboard Shortcuts**: Full keyboard navigation and hotkeys
- **Multi-Select**: Checkbox selection with bulk action toolbar

---

## 🔗 Integration UI

### Social Media Connections
- **Facebook**: Blue connection indicator with page selection
- **Instagram**: Gradient connection badge with account info
- **LinkedIn**: Professional blue styling with company page
- **WhatsApp**: Green chat bubble with business account status

### Email Integration
- **SMTP Setup**: Visual connection status and test email feature
- **Template Editor**: Rich text editor for email templates
- **Deliverability**: Visual indicators for email health metrics
- **Automation**: Flow builder for email sequence automation

---

## 📈 Analytics Dashboard

### Performance Metrics
- **Conversion Funnel**: Visual funnel showing lead progression
- **Source Analysis**: Pie chart of lead sources with conversion rates
- **Rep Performance**: Leaderboard with conversion statistics
- **Response Time**: Histogram showing response time distribution

### Real-time Updates
- **Live Counter**: Real-time lead count updates
- **Activity Feed**: Live stream of lead activities and assignments
- **Notifications**: Push notifications for high-priority leads
- **Dashboard Refresh**: Auto-refresh with loading indicators

---

## 🔐 Privacy & Compliance UI

### GDPR Controls
- **Consent Tracking**: Visual indicators for consent status
- **Data Export**: Easy export of lead data for compliance
- **Deletion Requests**: Clear process for removing lead data
- **Opt-out Management**: Unsubscribe tracking and management

### Security Features
- **Access Logs**: Activity timeline for lead data access
- **Role Permissions**: Visual role-based access indicators
- **Data Encryption**: Security badges for encrypted data
- **Audit Trail**: Complete tracking of lead data modifications

---

## ⚡ Performance Features

### Loading States
- **Skeleton Cards**: Placeholder content during lead loading
- **Progressive Loading**: Load visible leads first, others on scroll
- **Background Sync**: Non-blocking data updates
- **Optimistic Updates**: Immediate UI feedback with server confirmation

### Caching Strategy
- **Lead List Caching**: Cache frequently accessed lead lists
- **Form Builder**: Save work-in-progress forms locally
- **Search Results**: Cache recent search results
- **Offline Support**: Basic functionality when offline

---

## 🎨 Visual Hierarchy

### Typography Scale
- **Lead Names**: 18px Medium SF Pro Text
- **Lead Details**: 14px Regular SF Pro Text  
- **Scores**: 16px Bold SF Pro Display
- **Timestamps**: 12px Regular SF Pro Text (Secondary color)
- **Pipeline Headers**: 20px Semibold SF Pro Display

### Color Usage
- **High Priority**: Danger Red for urgent actions and hot leads
- **Medium Priority**: Warning Orange for warm leads and deadlines
- **Normal Priority**: Education Blue for standard actions
- **Low Priority**: Secondary Gray for cold leads and inactive items
- **Success**: Success Green for completed actions and conversions

This comprehensive lead capture and management system provides marketing coordinators with powerful tools to capture, score, and nurture leads effectively while maintaining the premium design quality that defines the Cognify platform.