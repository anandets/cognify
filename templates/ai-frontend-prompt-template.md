# AI Frontend Generation Prompt Template - Cognify Platform

## Instructions for Use
1. Copy this entire template
2. Replace all `[PLACEHOLDER]` sections with your specific requirements
3. Remove any sections marked with `[OPTIONAL]` if not needed
4. Paste the customized prompt into your AI frontend generation tool

---

# Cognify Platform UI Component Generation

## Project Context
You are generating frontend components for Cognify, an AI-powered SaaS platform designed as an all-in-one Education Business Operating System (EBOS). This is a multi-tenant platform serving coaching centers, tutors, and education businesses globally.

### Tech Stack
- **Framework**: React 18+ with Next.js 14+ (App Router)
- **TypeScript**: Strict mode enabled
- **Styling**: Tailwind CSS + Radix UI / Shadcn components
- **State Management**: Zustand (preferred) or React Context
- **Forms**: React Hook Form + Zod validation
- **API**: GraphQL with Apollo Client or REST with SWR
- **Authentication**: NextAuth.js with JWT
- **Multi-tenancy**: Schema-based isolation with tenant context
- **Testing**: Jest + React Testing Library
- **Build Tool**: Vite or Next.js built-in

### Design System
- **Mobile-first responsive design**: 320px → 1920px
- **Color palette**: 
  - Primary: Education Blue `#2563eb`
  - Secondary: Success Green `#10b981`
  - Accent: Warning Orange `#f59e0b`
  - Neutral: Gray `#6b7280`
  - Error: Red `#ef4444`
- **Typography**: Inter font family
- **Spacing**: 4px base unit (4, 8, 16, 24, 32, 48, 64)
- **Accessibility**: WCAG 2.1 AA compliance mandatory
- **Animation**: Framer Motion for complex animations, CSS transitions for simple ones

### File Tree Structure
```
cognifyapp/
├── src/
│   ├── components/
│   │   ├── ui/                     # Shadcn base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── input.tsx
│   │   │   └── ...
│   │   ├── layout/                 # Layout components
│   │   │   ├── navbar.tsx
│   │   │   ├── sidebar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── page-header.tsx
│   │   ├── lms/                    # LMS module components
│   │   │   ├── course-card.tsx
│   │   │   ├── assignment-list.tsx
│   │   │   ├── progress-tracker.tsx
│   │   │   └── video-player.tsx
│   │   ├── academic/               # Academic operations
│   │   │   ├── timetable.tsx
│   │   │   ├── attendance-tracker.tsx
│   │   │   └── grade-book.tsx
│   │   ├── sis/                    # Student Information System
│   │   │   ├── student-profile.tsx
│   │   │   ├── enrollment-form.tsx
│   │   │   └── student-dashboard.tsx
│   │   ├── crm/                    # CRM & Marketing
│   │   │   ├── lead-form.tsx
│   │   │   ├── campaign-builder.tsx
│   │   │   └── contact-list.tsx
│   │   ├── finance/                # Finance & Billing
│   │   │   ├── invoice-generator.tsx
│   │   │   ├── payment-form.tsx
│   │   │   └── fee-structure.tsx
│   │   ├── website/                # Website Builder
│   │   │   ├── page-builder.tsx
│   │   │   ├── theme-selector.tsx
│   │   │   └── content-editor.tsx
│   │   ├── support/                # Support & Compliance
│   │   │   ├── ticket-form.tsx
│   │   │   ├── knowledge-base.tsx
│   │   │   └── file-tracker.tsx
│   │   ├── analytics/              # BI & Analytics
│   │   │   ├── dashboard-widgets.tsx
│   │   │   ├── report-builder.tsx
│   │   │   └── student-heatmap.tsx
│   │   ├── ai/                     # AI Orchestration
│   │   │   ├── workflow-builder.tsx
│   │   │   ├── chatbot-config.tsx
│   │   │   └── ai-assistant.tsx
│   │   └── shared/                 # Shared components
│   │       ├── data-table.tsx
│   │       ├── form-fields.tsx
│   │       ├── loading-spinner.tsx
│   │       ├── error-boundary.tsx
│   │       └── modal.tsx
│   ├── lib/
│   │   ├── utils.ts                # Utility functions
│   │   ├── validations.ts          # Zod schemas
│   │   ├── api-client.ts           # API configuration
│   │   ├── auth.ts                 # Authentication utilities
│   │   └── constants.ts            # App constants
│   ├── hooks/
│   │   ├── use-api.ts              # API hooks
│   │   ├── use-auth.ts             # Authentication hooks
│   │   ├── use-tenant.ts           # Multi-tenant hooks
│   │   └── use-form.ts             # Form management hooks
│   ├── stores/
│   │   ├── auth-store.ts           # Authentication state
│   │   ├── tenant-store.ts         # Tenant context
│   │   └── ui-store.ts             # UI state
│   ├── types/
│   │   ├── api.ts                  # API response types
│   │   ├── auth.ts                 # Authentication types
│   │   ├── tenant.ts               # Multi-tenant types
│   │   └── ui.ts                   # UI component types
│   └── styles/
│       ├── globals.css             # Global styles
│       ├── components.css          # Component styles
│       └── themes.css              # Theme variables
├── public/
│   ├── icons/                      # SVG icons
│   ├── images/                     # Static images
│   └── logos/                      # Brand assets
├── docs/
│   ├── components/                 # Component documentation
│   └── style-guide.md              # Design system guide
└── tests/
    ├── components/                 # Component tests
    ├── utils/                      # Utility tests
    └── setup.ts                    # Test configuration
```

## High-Level Goal
[REPLACE WITH SPECIFIC COMPONENT GOAL]

**Example**: "Create a responsive student dashboard component with course progress tracking, upcoming assignments, and attendance overview for the Cognify LMS module."

## Detailed Instructions

### 1. Component Structure
- Create a new TypeScript component file: `[COMPONENT_PATH]`
- Use functional components with React hooks
- Implement proper TypeScript interfaces for all props and data structures
- Follow the existing file structure: `src/components/[MODULE]/[COMPONENT_NAME].tsx`
- [OPTIONAL] Create associated test file: `tests/components/[MODULE]/[COMPONENT_NAME].test.tsx`

### 2. Data Integration
- Use the provided GraphQL schema or REST API endpoints (see API Contract below)
- Implement proper error handling and loading states using React Query or SWR
- Add optimistic updates where appropriate
- Include proper data validation using Zod schemas
- [OPTIONAL] Implement caching strategy for frequently accessed data

### 3. Responsive UI Implementation

#### Mobile Layout (320px-768px)
- Stack elements vertically
- Use full-width cards and containers
- Minimize text and use icons where possible
- Touch-friendly button sizes (minimum 44px)
- Collapsible sections for secondary information

#### Tablet Layout (768px-1024px)
- 2-column grid layout where appropriate
- Slightly larger text and spacing
- Side navigation or tabs for content organization
- Balanced information density

#### Desktop Layout (1024px+)
- Multi-column layout with proper spacing
- Full feature set visible without scrolling
- Hover states and tooltips
- Keyboard shortcuts support

### 4. Component Implementation Details
- Use Shadcn components as base: `[LIST_REQUIRED_COMPONENTS]`
- Implement proper loading skeletons and empty states
- Add meaningful micro-interactions and feedback
- Include proper form validation and error messages
- [OPTIONAL] Add data export/import functionality

### 5. Accessibility & UX Requirements
- Add proper ARIA labels, roles, and properties
- Ensure keyboard navigation works correctly (Tab, Enter, Escape, Arrow keys)
- Include focus management and screen reader support
- Implement proper color contrast ratios (4.5:1 minimum)
- Add meaningful loading states and progress indicators
- Support for reduced motion preferences

## API Contract & Data Structures

### [REPLACE WITH YOUR API ENDPOINT]
```typescript
// Example API Response Type
interface [COMPONENT_DATA_TYPE] {
  [PROPERTY_NAME]: [TYPE];
  // Add your specific data structure here
}

// Example API Functions
async function fetch[COMPONENT_DATA](tenantId: string, userId: string): Promise<[COMPONENT_DATA_TYPE]> {
  // Implementation
}
```

### Component Props Interface
```typescript
interface [COMPONENT_NAME]Props {
  tenantId: string;
  [ADDITIONAL_PROPS]: [TYPE];
  className?: string;
  [OPTIONAL_PROPS]?: [TYPE];
}
```

### [OPTIONAL] State Management
```typescript
// If using Zustand store
interface [COMPONENT_NAME]Store {
  [STATE_PROPERTIES]: [TYPE];
  [ACTION_METHODS]: [FUNCTION_TYPE];
}
```

## Required Dependencies
- `@radix-ui/react-*` components via Shadcn
- `clsx` for conditional classes
- `date-fns` for date formatting
- `lucide-react` for icons
- `react-hook-form` for form management
- `zod` for validation
- [OPTIONAL] `framer-motion` for animations
- [OPTIONAL] `recharts` for data visualization

## Constraints & Requirements

### Must Do
- ✅ Support multi-tenant architecture (all data must be tenant-scoped)
- ✅ Include proper error boundaries
- ✅ Support dark mode via Tailwind `dark:` classes
- ✅ Implement proper TypeScript types
- ✅ Follow existing naming conventions
- ✅ Include loading and error states
- ✅ Support internationalization (i18n) patterns
- ✅ Add proper data validation
- ✅ Include unit tests [OPTIONAL]

### Must Not Do
- ❌ Modify existing layout components (Navbar, Sidebar, Footer)
- ❌ Add new external dependencies without explicit approval
- ❌ Implement authentication logic (handled by layout)
- ❌ Hardcode tenant-specific data or configuration
- ❌ Use inline styles instead of Tailwind classes
- ❌ Skip accessibility requirements
- ❌ Ignore responsive design requirements
- ❌ Modify global state management configuration

## Strict Scope
You should ONLY create the following files:
- `[COMPONENT_PATH]` - Main component file
- [OPTIONAL] `[TEST_PATH]` - Component test file
- [OPTIONAL] `[TYPES_PATH]` - Additional type definitions
- [OPTIONAL] `[HOOK_PATH]` - Custom hooks if needed

Do NOT modify these existing files:
- Layout components (Navbar, Sidebar, Footer)
- Authentication logic
- Global state management
- API client configuration
- Theme configuration
- Build configuration

## Additional Context
- This component will be used across multiple education business types
- Performance is critical - implement code splitting where appropriate
- Consider offline functionality for mobile users
- The component should handle different user roles and permissions
- Multi-language support may be required in the future
- Consider different time zones for date/time displays
- [OPTIONAL] Integration with third-party services: [LIST_SERVICES]

## Success Criteria
- Component renders correctly on all screen sizes
- All interactive elements are accessible via keyboard
- Loading states provide clear feedback
- Error handling is comprehensive and user-friendly
- Component follows established design patterns
- Code is properly typed and documented
- Performance is optimized (< 100ms render time)
- [OPTIONAL] Test coverage > 80%

---

## Template Customization Checklist
Before using this template, ensure you have:
- [ ] Replaced all `[PLACEHOLDER]` sections
- [ ] Specified the exact component path and file names
- [ ] Defined the API contract and data structures
- [ ] Listed required Shadcn components
- [ ] Specified any optional features needed
- [ ] Removed unnecessary [OPTIONAL] sections
- [ ] Added any project-specific constraints
- [ ] Verified the file tree structure matches your project

🎨 Story-to-Template Mapping Strategy

  Decision Matrix for Template Usage

  | Story Complexity          | UI Components  | Template Type       | Time Investment | Expected Output     |
  |---------------------------|----------------|---------------------|-----------------|---------------------|
  | High (8+ story points)    | 5+ components  | Full Template       | 30-45 min       | Complete feature UI |
  | Medium (5-7 story points) | 2-4 components | Simplified Template | 15-20 min       | Core functionality  |
  | Low (1-4 story points)    | 1-2 components | Minimal Prompt      | 5-10 min        | Single component    |

  Template Selection Criteria

  Use Full Template When:
  - ✅ Story has complex user workflows
  - ✅ Multiple data sources/APIs involved
  - ✅ Advanced UI patterns (drag-drop, rich editor, dashboards)
  - ✅ Complex state management needed
  - ✅ Multiple user roles/permissions

  Use Simplified Template When:
  - ✅ Standard CRUD operations
  - ✅ Simple forms and lists
  - ✅ Basic responsive requirements
  - ✅ Single API endpoint
  - ✅ Straightforward user workflow

  Use Minimal Prompt When:
  - ✅ Simple components (cards, badges, buttons)
  - ✅ Static content display
  - ✅ Basic interactions
  - ✅ Reusable UI elements
  - ✅ Quick prototyping needs

  📊 Recommended Implementation Approach

  Phase 1: Foundation (Weeks 1-2)

  Full Template Usage for Core Features:
  1. US-001-01: Course Creation - Sets foundation for content management
  2. US-002-01: Student Profile - Establishes user management patterns
  3. US-003-01: Lead Capture - Creates CRM foundation

  Phase 2: Expansion (Weeks 3-4)

  Simplified Template for Standard Features:
  1. US-002-04: Attendance Management
  2. US-004-03: Fee Structure Management
  3. US-001-04: Student Progress Tracking

  Phase 3: Polish (Weeks 5-6)

  Minimal Prompts for Supporting Features:
  1. US-002-06: Parent Portal notifications
  2. US-003-07: Referral Program widgets
  3. US-004-06: Refund Management forms

  🔧 Template Customization Guide

  Story-Specific Template Sections

  For LMS Stories (US-001-xx):
  - Add media handling requirements
  - Include content delivery specifications
  - Specify offline capability needs
  - Add progress tracking components

  For SIS Stories (US-002-xx):
  - Include data privacy requirements
  - Add bulk operations support
  - Specify search/filter capabilities
  - Include audit trail requirements

  For CRM Stories (US-003-xx):
  - Add lead scoring logic
  - Include campaign tracking
  - Specify integration requirements
  - Add analytics components

  For Finance Stories (US-004-xx):
  - Include payment processing
  - Add financial reporting
  - Specify compliance requirements
  - Include invoice generation

⏺ Update Todos
  ⎿  ☒ Analyze story-driven development workflow for UI generation         
     ☒ Evaluate template usage strategy for different story types
     ☒ Provide recommendations for template application across user stories

⏺ 💡 Final Recommendations

  Efficient Development Workflow

  ✅ Strategic Template Usage:
  - 20% Full Template - Complex stories that set architectural patterns
  - 60% Simplified Template - Standard CRUD and form-based stories
  - 20% Minimal Prompts - Simple components and supporting features

  ✅ Template Evolution:
  - Start with full template for first story in each module
  - Create module-specific template variants based on patterns
  - Build a component library from successful generations
  - Iterate and refine templates based on AI output quality

  ✅ Quality Assurance:
  - Always review AI-generated code for security and performance
  - Maintain consistent design patterns across all stories
  - Ensure accessibility compliance in all template variations
  - Test responsive behavior across different screen sizes

  🎯 Expected Outcomes:
  - 70% reduction in UI development time
  - Consistent design patterns across all modules
  - Higher quality initial implementations
  - Faster iteration cycles for user feedback

  This strategic approach ensures you invest your time wisely while maintaining high-quality, consistent UI components across your entire Cognify
  platform!
