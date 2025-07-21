# US-004-01: Invoice Generation - UI Design Specification

## Overview
A professional invoice generation system enabling finance managers to create customizable, automated invoices with comprehensive billing management, tax calculations, and multi-channel delivery options for education services.

---

## 🎨 Design System Reference
**Design Philosophy**: Apple-inspired elegance with Product Hunt simplicity  
**Color Palette**: Education Blue (#007AFF), Success Green (#34C759), Warning Orange (#FF9500)  
**Typography**: SF Pro Display for headings, SF Pro Text for body content  
**Components**: Professional forms, document previews, status indicators

---

## 📱 Core Screen Designs

### 1. Invoice Management Dashboard (Primary Screen)

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ 💰 Invoices   🔍 Search   📊 Reports   ➕ New Invoice   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 📈 Financial Overview                                   │
│ ┌─────────┬─────────┬─────────┬─────────┐               │
│ │ $45,230 │ $12,890 │ $2,340  │ 85.6%   │               │
│ │ Total   │ Overdue │ Draft   │ Paid    │               │
│ │ Revenue │ Amount  │ Amount  │ Rate    │               │
│ └─────────┴─────────┴─────────┴─────────┘               │
│                                                         │
│ 📋 Invoice Status Pipeline                              │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Draft (12)  │ Sent (34)   │ Paid (156)  │ Overdue(8)│ │
│ │ ──────────  │ ──────────  │ ──────────  │ ──────── │ │
│ │ 📝 INV-2024 │ 📧 INV-2023 │ ✅ INV-2022 │ 🚨 INV   │ │
│ │ -0001       │ -0002       │ -0003       │ -0004     │ │
│ │ $1,200      │ $2,500      │ $1,800      │ $950      │ │
│ │ S. Johnson  │ M. Chen     │ L. Wang     │ T. Brown  │ │
│ │ Edit Draft  │ Track Email │ Receipt     │ Send Rem. │ │
│ │ ──────────  │ ──────────  │ ──────────  │ ──────── │ │
│ │ + 11 more   │ + 33 more   │ + 155 more  │ + 7 more  │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ ⚡ Quick Actions                                         │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ 📊 Generate Monthly Batch    🔄 Send Payment Reminders│ │
│ │ 📈 View Financial Reports    ⚠️  Review Overdue (8)   │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Visual Elements
- **Financial KPIs**: 4-card layout with revenue metrics and trend indicators  
- **Status Pipeline**: Kanban-style columns for invoice lifecycle management
- **Invoice Cards**: Clean cards with essential info and quick actions
- **Alert Badges**: Color-coded status indicators and overdue warnings

#### Interactive Features
- Drag-drop invoices between status columns
- Bulk selection for batch operations
- Quick preview with document thumbnails
- One-click payment reminders and follow-ups

### 2. Invoice Creation/Edit Interface

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ ← Back   💰 New Invoice   👁️ Preview   💾 Save Draft    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 👤 Customer Information                                 │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Student/Customer* [Search or Add New............] 🔍│ │
│ │ Selected: Sarah Johnson (ST-2024-0123)             │ │
│ │ Email: sarah.johnson@email.com                     │ │
│ │ Phone: +1 (555) 123-4567                           │ │
│ │ Program: Data Science Bootcamp                     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 📄 Invoice Details                                      │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Invoice # [INV-2024-0001]    Due Date [2024-02-15] │ │
│ │ Issue Date [2024-01-15]      Terms [Net 30 ⌄]      │ │
│ │ Currency [USD ⌄]             Template [Modern ⌄]   │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 📝 Line Items                                           │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Description           Qty    Rate      Total        │ │
│ │ ──────────────────── ─── ────────── ──────────      │ │
│ │ Course Tuition Fee    1   $2,500.00  $2,500.00     │ │
│ │ Lab Access Fee        1   $200.00    $200.00       │ │
│ │ Material Kit          1   $150.00    $150.00       │ │
│ │ [+ Add Line Item]                                   │ │
│ │ ──────────────────────────────────── ──────────     │ │
│ │                         Subtotal:    $2,850.00     │ │
│ │                         Tax (8.5%):  $242.25       │ │
│ │                         Discount:    -$50.00       │ │
│ │                         Total:       $3,042.25     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 💬 Notes & Terms                                        │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Payment Terms: Net 30 days from invoice date       │ │
│ │ Late Fee: 1.5% monthly on overdue balance          │ │
│ │ Thank you for your business!                        │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Form Features
- **Smart Customer Search**: Auto-complete with student/customer database
- **Line Item Builder**: Dynamic add/remove with automatic calculations
- **Tax Calculator**: Real-time tax computation based on location
- **Template Selector**: Choose from predefined professional templates
- **Terms Builder**: Customizable payment terms and conditions

### 3. Invoice Preview & Templates

#### Layout Structure  
```
┌─────────────────────────────────────────────────────────┐
│ 👁️ Invoice Preview    🎨 Template   📧 Send   💾 Save   │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 📄 Invoice Document Preview                             │
│ ┌─────────────────────────────────────────────────────┐ │
│ │                                                     │ │
│ │ [COMPANY LOGO]           INVOICE                    │ │
│ │ Education Academy         INV-2024-0001             │ │
│ │ 123 Learning St.         Date: Jan 15, 2024        │ │
│ │ City, ST 12345           Due: Feb 15, 2024         │ │
│ │                                                     │ │
│ │ Bill To:                                            │ │
│ │ Sarah Johnson                                       │ │
│ │ sarah.johnson@email.com                            │ │
│ │ +1 (555) 123-4567                                  │ │
│ │                                                     │ │
│ │ ──────────────────────────────────────────────────  │ │
│ │ Description         Qty  Rate      Total           │ │
│ │ ──────────────────────────────────────────────────  │ │
│ │ Course Tuition Fee   1   $2,500.00  $2,500.00     │ │
│ │ Lab Access Fee       1   $200.00    $200.00       │ │
│ │ Material Kit         1   $150.00    $150.00       │ │
│ │ ──────────────────────────────────────────────────  │ │
│ │                         Subtotal:    $2,850.00     │ │
│ │                         Tax (8.5%):  $242.25       │ │
│ │                         Total:       $3,042.25     │ │
│ │                                                     │ │
│ │ Payment Terms: Net 30 days                         │ │
│ │ Thank you for your business!                        │ │
│ │                                                     │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 🎨 Template Options                                     │
│ [Modern] [Classic] [Minimal] [Corporate] [Custom]      │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Template Features
- **Live Preview**: Real-time document rendering
- **Multiple Templates**: Modern, Classic, Minimal, Corporate designs
- **Brand Customization**: Logo, colors, and fonts customization
- **Print Optimization**: High-quality PDF generation
- **Mobile Preview**: See how invoice appears on mobile devices

### 4. Batch Invoice Generation

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ 📊 Batch Invoice Generation                             │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🎯 Generation Criteria                                  │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Invoice Type   [Monthly Tuition ⌄]                  │ │
│ │ Billing Period [January 2024 ⌄]                     │ │
│ │ Student Filter [All Active Students ⌄]             │ │
│ │ Due Date       [2024-02-15]                         │ │
│ │ Template       [Corporate ⌄]                        │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 👥 Selected Students (247 students)                     │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ ☑️ Select All  🔍 Search Students                   │ │
│ │ ──────────────────────────────────────────────────  │ │
│ │ ✅ Sarah Johnson    Data Science    $2,500  Jan 15 │ │
│ │ ✅ Mike Chen        Web Dev         $1,800  Jan 15 │ │
│ │ ✅ Lisa Wang        UX Design       $2,200  Jan 15 │ │
│ │ ✅ Tom Brown        Analytics       $2,800  Jan 15 │ │
│ │ ⏸️ Jane Doe         On Hold         $0      ---    │ │
│ │ + 242 more students...                             │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
│ 📊 Generation Summary                                   │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Students Selected: 247                              │ │
│ │ Total Amount: $547,300                              │ │
│ │ Estimated Processing Time: 3-5 minutes              │ │
│ │ Email Delivery: 📧 Enabled                          │ │
│ │                                                     │ │
│ │ [📊 Preview Sample] [⚡ Generate Invoices]          │ │
│ └─────────────────────────────────────────────────────┘ │
│                                                         │
└─────────────────────────────────────────────────────────┘
```

#### Batch Features
- **Smart Filtering**: Filter students by program, status, payment history
- **Preview Sampling**: Review sample invoices before batch generation
- **Progress Tracking**: Real-time progress bar during generation
- **Error Handling**: Clear reporting of any generation failures
- **Delivery Options**: Email, SMS, or portal notification choices

### 5. Payment Tracking & Reminders

#### Layout Structure
```
┌─────────────────────────────────────────────────────────┐
│ 💳 Payment Tracking & Reminders                         │
├─────────────────────────────────────────────────────────┤
│                                                         │
│ 🚨 Overdue Invoices (8 invoices)                       │
│ ┌─────────────────────────────────────────────────────┐ │
│ │ Invoice #      Student        Amount    Days Late    │ │
│ │ ──────────────────────────────────────────────────  │ │
│ │ INV-2023-0890  Tom Brown      $950     🔴 15 days   │ │
│ │ INV-2023-0885  Jane Smith     $1,200   🟠 8 days    │ │  
│ │ INV-2023-0882  Bob Wilson     $750     🟡 3 days    │ │
│ │ + 5 more overdue...                                 │ │
│ │                                                     │ │
│ │ 🚀 Bulk Actions                                     │ │
│ │ [📧 Send Reminders] [📞 Generate Call List] [More] │ │
│ └─────────────────────────────────────────────────────┘ │
│ │                                                     │ │
│ │ 📈 Payment Trend Analysis                           │ │
│ │ ┌─────────────────────────────────────────────────┐ │ │
│ │ │ Payment Rate: 85.6% (↑ 2.3% from last month)   │ │ │
│ │ │ Avg Collection Time: 22 days                    │ │ │
│ │ │ Most Common Payment: Online (68%)               │ │ │
│ │ │ Peak Payment Day: 1st & 15th of month          │ │ │
│ │ └─────────────────────────────────────────────────┘ │ │
│ │                                                     │ │
│ │ ⚙️ Automatic Reminder Settings                      │ │
│ │ ┌─────────────────────────────────────────────────┐ │ │
│ │ │ 📧 Email Reminder: 3 days before due           │ │ │
│ │ │ 📱 SMS Reminder: 1 day before due              │ │ │
│ │ │ 🚨 Overdue Notice: 1, 7, 15 days after due    │ │ │
│ │ │ 📞 Call List: Generate at 15 days overdue      │ │ │
│ │ └─────────────────────────────────────────────────┘ │ │
│ │                                                     │ │
└─────────────────────────────────────────────────────────┘
```

#### Payment Features
- **Overdue Dashboard**: Color-coded urgency levels for late payments
- **Automated Reminders**: Scheduled email/SMS reminder sequences
- **Payment Analytics**: Trend analysis and collection insights
- **Bulk Actions**: Mass reminder sending and follow-up generation

---

## 🎯 Component Specifications

### Invoice Status Badges
- **Draft**: Secondary Gray with edit icon
- **Sent**: Education Blue with email icon  
- **Paid**: Success Green with checkmark
- **Overdue**: Danger Red with warning triangle
- **Cancelled**: Secondary Gray with X icon

### Amount Display
- **Large Amounts**: Bold typography with proper comma formatting
- **Currency Symbols**: Consistent positioning and sizing
- **Negative Values**: Red color for refunds/credits
- **Zero Values**: Gray color with "No Charge" text

### Action Buttons
- **Primary**: Send Invoice, Generate PDF (Education Blue)
- **Secondary**: Edit Draft, View Details (Outline style)
- **Destructive**: Cancel Invoice, Delete Draft (Danger Red)
- **Quick Actions**: Icon-only buttons for compact views

---

## 📊 Interactive Elements

### Invoice Builder
- **Line Item Editor**: Inline editing with automatic calculations
- **Tax Calculator**: Real-time tax computation as items are added
- **Template Switcher**: Live preview updates when changing templates
- **Customer Search**: Autocomplete with recent selections

### Batch Operations  
- **Student Selector**: Checkbox grid with search and filters
- **Progress Indicator**: Step-by-step progress during generation
- **Error Handling**: Clear error messages with retry options
- **Success Confirmation**: Summary of successfully generated invoices

---

## 💫 Micro-Interactions

### Document Generation
- **PDF Creation**: Progress animation with completion feedback
- **Email Sending**: Loading state with delivery confirmation
- **Template Changes**: Smooth transitions between template previews
- **Auto-save**: Periodic saving with visual confirmation

### Payment Updates
- **Status Changes**: Color transitions when payment status updates
- **Reminder Scheduling**: Animation when reminder is queued
- **Overdue Alerts**: Pulsing animation for urgent overdue items
- **Collection Updates**: Smooth updates to payment statistics

---

## 📱 Responsive Design

### Mobile Layout (390px)
- **Single Column**: Stacked invoice cards with essential info
- **Quick Actions**: Bottom sheet with action buttons
- **Simplified Editor**: Essential fields with expandable sections
- **Touch PDF**: Mobile-optimized PDF viewing and sharing

### Tablet Layout (834px)
- **Split View**: Invoice list on left, details on right
- **Modal Editing**: Full-screen invoice creation/editing
- **Touch Templates**: Swipeable template gallery

### Desktop Layout (1440px+)
- **Full Dashboard**: All components visible simultaneously
- **Multi-Panel**: Side-by-side invoice list and preview
- **Keyboard Shortcuts**: Power user keyboard navigation
- **Bulk Operations**: Advanced selection and batch processing

---

## 🔐 Financial Security UI

### Data Protection
- **Encrypted Indicators**: Visual badges for encrypted financial data
- **Access Audit**: Activity log for sensitive invoice access
- **PCI Compliance**: Security indicators for payment information
- **Role Permissions**: Clear visual indicators of user access levels

### Approval Workflows
- **Approval Status**: Visual workflow status for high-value invoices
- **Digital Signatures**: Secure signature capture and verification
- **Audit Trail**: Complete tracking of invoice modifications
- **Compliance Badges**: Visual indicators for regulatory compliance

---

## 📈 Reporting Interface

### Financial Reports
- **Revenue Charts**: Visual revenue trends with period comparisons
- **Collection Reports**: Aging reports with actionable insights
- **Tax Reports**: Automated tax calculation summaries
- **Performance Metrics**: KPI dashboards with drill-down capability

### Export Options
- **PDF Reports**: Professional formatting for stakeholder distribution
- **Excel Export**: Detailed data export for accounting software
- **CSV Download**: Raw data export for analysis
- **Scheduled Reports**: Automated report delivery via email

---

## ⚡ Performance Features

### Loading Optimization
- **Lazy Loading**: Load invoice details on demand
- **Background Processing**: Non-blocking batch operations
- **Progressive PDF**: Stream PDF generation for large documents
- **Caching**: Store frequently accessed invoices locally

### Real-time Updates
- **Payment Notifications**: Instant updates when payments received
- **Status Sync**: Real-time invoice status synchronization
- **Collaborative Editing**: Live updates when multiple users editing
- **Background Sync**: Automatic data synchronization

---

## 🎨 Visual Hierarchy

### Typography Scale
- **Invoice Numbers**: 24px Bold SF Pro Display
- **Customer Names**: 18px Medium SF Pro Text  
- **Amount Values**: 20px Medium SF Pro Display
- **Line Items**: 16px Regular SF Pro Text
- **Terms & Notes**: 14px Regular SF Pro Text

### Financial Color Coding
- **Revenue/Income**: Success Green for positive amounts
- **Expenses/Refunds**: Danger Red for negative amounts  
- **Pending/Processing**: Warning Orange for unconfirmed amounts
- **Neutral/Info**: Education Blue for informational amounts

This comprehensive invoice generation system provides finance managers with professional, efficient tools for managing the complete invoice lifecycle while maintaining the premium design standards and user experience that defines the Cognify platform.