# UI Design Specification: Course Creation (US-001-01)

## Overview
**Story ID**: US-001-01  
**Screen**: Course Creation Interface  
**User Role**: Teacher/Instructor  
**Platform**: Web (Desktop Primary, Tablet Secondary)  

## Design Philosophy
Following Apple-inspired premium design with Product Hunt simplicity - "Elegant Simplicity, Purposeful Beauty"

## Screen Architecture

### Main Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ Header Navigation Bar (64px height)                            │
│ [Cognify Logo] [Course Creator] [Preview] [Publish] [Save]     │
└─────────────────────────────────────────────────────────────────┘
│                                                               │
│ ┌─────────────────────────────────────────────────────────┐   │
│ │ Progress Indicator (8px height)                         │   │
│ │ ●●●○○○ Course Info • Modules • Content • Preview       │   │
│ └─────────────────────────────────────────────────────────┘   │
│                                                               │
│ ┌─────────────────────────────────────────────────────────┐   │
│ │                Tab Navigation                           │   │
│ │ [Basic Info] [Modules] [Content] [Settings] [Preview]  │   │
│ └─────────────────────────────────────────────────────────┘   │
│                                                               │
│                  Main Content Area                            │
│                                                               │
└─────────────────────────────────────────────────────────────────┘
```

## Color Palette Implementation
- **Primary Actions**: Education Blue (#007AFF)
- **Success States**: Success Green (#34C759) 
- **Warning States**: Warning Orange (#FF9500)
- **Error States**: Danger Red (#FF3B30)
- **Text**: Primary (#1D1D1F), Secondary (#86868B), Tertiary (#C7C7CC)
- **Backgrounds**: White (#FFFFFF), Surface (#F2F2F7)
- **Borders**: Border Gray (#E5E5EA)

## Typography Scale
- **Page Title**: H1 - SF Pro Display Bold 32px/40px
- **Section Headers**: H3 - SF Pro Display Semibold 24px/32px  
- **Tab Labels**: Body - SF Pro Text Medium 16px/24px
- **Form Labels**: Body - SF Pro Text Regular 16px/24px
- **Help Text**: Caption - SF Pro Text Regular 14px/20px

## Screen Designs

### 1. Basic Info Tab
```
Course Basic Information
┌─────────────────────────────────────────────────────────────────┐
│ Course Title *                                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Introduction to Digital Marketing                           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Course Description *                                            │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Learn the fundamentals of digital marketing including...    │ │
│ │ [Rich text editor with formatting tools]                   │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌───────────────────┐ ┌─────────────────┐ ┌─────────────────┐   │
│ │ Category          │ │ Difficulty      │ │ Duration        │   │
│ │ [Marketing ▼]     │ │ [Beginner ▼]    │ │ [8 weeks ▼]     │   │
│ └───────────────────┘ └─────────────────┘ └─────────────────┘   │
│                                                                 │
│ Course Thumbnail                                                │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │             [+] Upload Course Image                         │ │
│ │         Recommended: 1200x630px, Max: 5MB                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│               [Continue to Modules →]                          │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements**:
- Card-based layout with 12px border radius
- Input fields: 40px height, 8px border radius, #C7C7CC border
- Focus state: 2px solid #007AFF border with subtle glow
- Upload area: Dashed border, drag-and-drop zone
- Primary CTA button: Education Blue, Medium SF Pro Text

### 2. Modules Tab - Course Structure Builder
```
Course Structure
┌─────────────────────────────────────────────────────────────────┐
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [+ Add Module]                          [🗂️ Import] [⚙️]    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 📚 Module 1: Introduction                    [⋮] [✏️] [🗑️] │ │
│ │ ├─ 📄 Lesson 1.1: Welcome & Overview        [⋮] [✏️]      │ │
│ │ ├─ 🎥 Lesson 1.2: Course Introduction       [⋮] [✏️]      │ │
│ │ └─ 📝 Quiz 1: Knowledge Check               [⋮] [✏️]      │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 📚 Module 2: Digital Marketing Fundamentals [⋮] [✏️] [🗑️] │ │
│ │ ├─ 📄 Lesson 2.1: What is Digital Marketing [⋮] [✏️]      │ │
│ │ ├─ 🎥 Lesson 2.2: Marketing Channels        [⋮] [✏️]      │ │
│ │ ├─ 📊 Lesson 2.3: Analytics & Metrics       [⋮] [✏️]      │ │
│ │ └─ 📝 Assignment 1: Create Marketing Plan   [⋮] [✏️]      │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ [+ Add Module]                                                  │
└─────────────────────────────────────────────────────────────────┘
```

**Drag & Drop Features**:
- Drag handles (⋮) for reordering modules and lessons
- Visual feedback during drag: scale to 0.95, subtle shadow
- Drop zones highlight with #007AFF background at 10% opacity
- Smooth animations: 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)

### 3. Content Editor - Lesson Creation
```
Lesson Editor: "Welcome & Overview"
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Modules        Module 1 > Lesson 1.1      [Save Draft]│
│                                                                 │
│ Lesson Title                                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Welcome & Overview                                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Content Type Selection                                          │
│ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐   │
│ │ 📄 Text │ │ 🎥 Video│ │ 🎵 Audio│ │ 📊 Slide│ │ 📝 Quiz │   │
│ └─────────┘ └─────────┘ └─────────┘ └─────────┘ └─────────┘   │
│                                                                 │
│ Content Area                                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [B] [I] [U] [🔗] [📷] [🎥] [📊]    Text Formatting Tools   │ │
│ │ ─────────────────────────────────────────────────────────── │ │
│ │                                                             │ │
│ │ Welcome to Introduction to Digital Marketing!               │ │
│ │                                                             │ │
│ │ In this comprehensive course, you'll learn...               │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Additional Resources                                            │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [📎] Attach Files   [🔗] Add Links   [📚] Add References    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│               [Save Draft]    [Preview]    [Publish]           │
└─────────────────────────────────────────────────────────────────┘
```

### 4. File Upload Interface
```
File Upload Modal
┌─────────────────────────────────────────────────────────────────┐
│ Upload Content                                            [✕]   │
│ ─────────────────────────────────────────────────────────────── │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                   📤                                        │ │
│ │          Drag & drop files here                             │ │
│ │                    or                                       │ │
│ │               [Browse Files]                                │ │
│ │                                                             │ │
│ │        Supported: MP4, MOV, AVI (max 500MB)                │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Upload Progress                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🎥 intro-video.mp4                               [✕]        │ │
│ │ ██████████████████░░░░ 85% (127MB / 150MB)                 │ │
│ │ Estimated time: 2 minutes remaining                        │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│                      [Cancel]    [Continue]                    │
└─────────────────────────────────────────────────────────────────┘
```

### 5. Course Preview Mode
```
Course Preview - Student View
┌─────────────────────────────────────────────────────────────────┐
│ ← Exit Preview                                [👁️] Student View│
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                Course Hero Section                          │ │
│ │ ┌───────────────────────┐ Introduction to Digital Marketing │ │
│ │ │                       │ by Sarah Johnson                  │ │
│ │ │    Course Thumbnail   │                                   │ │
│ │ │                       │ ⭐⭐⭐⭐⭐ 4.8 (234 reviews)      │ │
│ │ └───────────────────────┘                                   │ │
│ │ 📚 12 modules • 🎥 45 lessons • ⏱️ 8 weeks                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────┐ ┌─────────────────────────────────────┐ │
│ │ Course Content      │ │ Module 1: Introduction              │ │
│ │                     │ │ ✅ Lesson 1.1: Welcome & Overview   │ │
│ │ 📚 Module 1         │ │ ⏸️ Lesson 1.2: Course Introduction  │ │
│ │ ├─ Lesson 1.1 ✅    │ │ 🔒 Quiz 1: Knowledge Check          │ │
│ │ ├─ Lesson 1.2 ⏸️    │ │                                     │ │
│ │ └─ Quiz 1 🔒       │ │ Content Area                        │ │
│ │                     │ │ ┌─────────────────────────────────┐ │ │
│ │ 📚 Module 2         │ │ │                                 │ │ │
│ │ ├─ Lesson 2.1 🔒    │ │ │     📄 Text Content Display     │ │ │
│ │ ├─ Lesson 2.2 🔒    │ │ │                                 │ │ │
│ │ └─ Assignment 1 🔒  │ │ └─────────────────────────────────┘ │ │
│ └─────────────────────┘ └─────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 6. Settings & Publishing Tab
```
Course Settings & Publication
┌─────────────────────────────────────────────────────────────────┐
│ Publication Settings                                            │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Course Status     [Draft ▼]                                 │ │
│ │ Visibility        [○ Public  ●Private  ○Scheduled]         │ │
│ │ Access Type       [●Free  ○Paid  ○Subscription]           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Student Enrollment                                              │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Max Students      [∞ Unlimited ▼]                          │ │
│ │ Prerequisites     [None selected ▼]                        │ │
│ │ Certification     [☑️] Issue certificate upon completion   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Course Policies                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Discussion Forums [☑️] Enable student discussions          │ │
│ │ Download Content  [☑️] Allow content downloads             │ │
│ │ Mobile Access     [☑️] Enable mobile app access            │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Publishing                                                      │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ ⚠️ Course Readiness Check                                  │ │
│ │ ✅ Course title and description complete                   │ │
│ │ ✅ At least one module created                             │ │
│ │ ✅ Course thumbnail uploaded                               │ │
│ │ ❌ At least one published lesson required                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│            [Save Draft]         [Publish Course]               │
└─────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Buttons
- **Primary Button**: #007AFF background, white text, 8px radius, 40px height
- **Secondary Button**: #E5E5EA border, #007AFF text, 8px radius, 40px height  
- **Ghost Button**: No background, #007AFF text
- **Destructive Button**: #FF3B30 background, white text
- **Hover States**: Scale to 0.95 in 0.1s, color transition in 0.2s

### Form Elements
- **Text Inputs**: 1px solid #C7C7CC border, focus: 2px solid #007AFF
- **Dropdowns**: Chevron down icon, #86868B color
- **Checkboxes**: Custom styled with #007AFF accent
- **File Upload**: Dashed border drag zone with hover effects

### Micro-interactions
- **Save Indicator**: Subtle pulse animation on auto-save
- **Upload Progress**: Smooth progress bar with percentage
- **Drag & Drop**: Visual feedback with scale and shadow effects
- **Tab Switching**: Slide transition between content areas
- **Button Press**: 0.95 scale feedback

## Responsive Behavior

### Tablet (834px)
- Stack sidebar and main content vertically
- Reduce padding to 16px
- Collapsible course content navigation
- Touch-optimized drag handles

### Mobile (390px)
- Single column layout
- Bottom navigation tabs
- Simplified toolbar
- Swipe gestures for tab navigation
- Modal-based editors

## Accessibility Features
- **Keyboard Navigation**: Full tab order support
- **Screen Reader**: Proper ARIA labels and descriptions
- **Color Contrast**: 4.5:1 minimum contrast ratio
- **Touch Targets**: 44px minimum touch target size
- **Focus Indicators**: 2px blue outline on focus states

## Error Handling UI
- **Validation Messages**: Red text below invalid fields
- **Upload Errors**: Toast notifications with retry options
- **Network Errors**: Offline indicator with sync status
- **Form Errors**: Inline validation with helpful messaging

## Success States
- **Save Confirmation**: Green checkmark with fade-out
- **Upload Complete**: Success badge with file details
- **Publish Success**: Celebration modal with course link
- **Auto-save**: Subtle "Saved" indicator in corner

## Performance Considerations
- **Progressive Loading**: Skeleton screens for content areas
- **Image Optimization**: Auto-compress uploaded images
- **Lazy Loading**: Load course content on demand
- **Debounced Auto-save**: 2-second delay after typing stops

---

## AI Generation Prompt for Implementation

When implementing this design, focus on:
1. **Apple-like Polish**: Clean lines, generous whitespace, subtle shadows
2. **Product Hunt Simplicity**: Intuitive workflows, minimal cognitive load
3. **Educational Context**: Clear hierarchy, progress indicators, helpful guidance
4. **Premium Feel**: Quality typography, consistent spacing, smooth animations
5. **Accessibility First**: WCAG 2.1 AA compliance throughout

The design should feel like a premium education tool that teachers love using and students find engaging and easy to navigate.