# UI Design Specification: Assessment Builder (US-001-03)

## Overview
**Story ID**: US-001-03  
**Screen**: Assessment Builder & Testing Interface  
**User Role**: Teacher/Instructor (Builder) & Students (Taker)  
**Platform**: Web + Mobile Responsive  

## Design Philosophy
Clean, focused assessment creation inspired by Google Forms simplicity with Apple's attention to detail. Testing interface prioritizes clarity and reduces anxiety.

## Screen Architecture

### Assessment Builder (Teacher Interface)
```
┌─────────────────────────────────────────────────────────────────┐
│ Assessment Builder                                              │
│ ┌─────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ Assessment      │ │                                         │ │
│ │ Settings        │ │           Question Editor               │ │
│ │                 │ │                                         │ │
│ │ ⚙️ Basic Info   │ │                                         │ │
│ │ 🕒 Timing       │ │                                         │ │
│ │ 🎯 Grading      │ │                                         │ │
│ │ 🛡️ Security     │ │                                         │ │
│ │ 👥 Access       │ │                                         │ │
│ └─────────────────┘ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Color Palette & Typography
- **Question Types**: Different colored indicators (Blue, Green, Orange, Purple)
- **Warning States**: Warning Orange (#FF9500) for time limits
- **Success States**: Success Green (#34C759) for completed questions
- **Draft States**: Secondary Gray (#86868B) for unpublished assessments

## Individual Screen Designs

### 1. Assessment Creation Wizard - Step 1: Basic Setup
```
Create New Assessment - Step 1 of 4
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Assessments    Assessment Setup    [Save Draft]       │
│                                                                 │
│ ● ○ ○ ○  Basic Info • Questions • Settings • Review            │
│                                                                 │
│ Assessment Information                                          │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Assessment Title *                                          │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ Module 1 Quiz: Digital Marketing Fundamentals           │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ Description                                                 │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ Test your understanding of basic digital marketing      │ │ │
│ │ │ concepts covered in this module...                      │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ ┌──────────────────────┐ ┌──────────────────────────────┐  │ │
│ │ │ Assessment Type      │ │ Category                      │  │ │
│ │ │ [Quiz ▼]             │ │ [Marketing ▼]                │  │ │
│ │ └──────────────────────┘ └──────────────────────────────┘  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Instructions for Students                                       │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Read each question carefully and select the best answer.    │ │
│ │ You have 30 minutes to complete this quiz.                 │ │
│ │ [Rich text formatting tools] 📝 ✏️ 🔗                     │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│               [Cancel]              [Continue to Questions →]   │
└─────────────────────────────────────────────────────────────────┘
```

### 2. Question Builder Interface
```
Assessment Builder - Questions (Step 2 of 4)
┌─────────────────────────────────────────────────────────────────┐
│ ← Previous Step                                    [Save Draft]  │
│                                                                 │
│ ● ● ○ ○  Basic Info • Questions • Settings • Review            │
│                                                                 │
│ ┌─────────────────┐ ┌─────────────────────────────────────────┐ │
│ │ Question List   │ │ Question Editor                         │ │
│ │                 │ │                                         │ │
│ │ [+ New Question]│ │ Question 3                              │ │
│ │                 │ │ ┌─────────────────────────────────────┐ │ │
│ │ 1. ✅ MCQ       │ │ │ Question Type                       │ │ │
│ │ 2. ✅ T/F       │ │ │ [📝 Multiple Choice ▼]              │ │ │
│ │ 3. 🔄 MCQ       │ │ └─────────────────────────────────────┘ │ │
│ │ 4. ○ Draft      │ │                                         │ │
│ │                 │ │ Question Text *                         │ │
│ │ [📚 Question    │ │ ┌─────────────────────────────────────┐ │ │
│ │ Bank]           │ │ │ Which of the following is NOT a     │ │ │
│ │                 │ │ │ component of the marketing mix?     │ │ │
│ │ [📋 Bulk        │ │ │ [Formatting tools: B I U 🔗 📷]     │ │ │
│ │ Import]         │ │ └─────────────────────────────────────┘ │ │
│ │                 │ │                                         │ │
│ │                 │ │ Answer Options                          │ │
│ │                 │ │ ┌─────────────────────────────────────┐ │ │
│ │                 │ │ │ A. ●Product                         │ │ │
│ │                 │ │ │ B. ○Price                           │ │ │
│ │                 │ │ │ C. ○Place                           │ │ │
│ │                 │ │ │ D. ○Personnel ← Correct Answer      │ │ │
│ │                 │ │ │ [+ Add Option]                      │ │ │
│ │                 │ │ └─────────────────────────────────────┘ │ │
│ │                 │ │                                         │ │
│ │                 │ │ Question Settings                       │ │
│ │                 │ │ ┌─────────────────────────────────────┐ │ │
│ │                 │ │ │ Points: [2] Required: [Yes ▼]      │ │ │
│ │                 │ │ │ Explanation:                        │ │ │
│ │                 │ │ │ Personnel is not part of the 4P... │ │ │
│ │                 │ │ └─────────────────────────────────────┘ │ │
│ │                 │ │                                         │ │
│ │                 │ │ [Delete] [Duplicate] [Save & Next →]   │ │
│ └─────────────────┘ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Question Type Icons & Colors**:
- 📝 Multiple Choice (Blue #007AFF)
- ✅ True/False (Green #34C759)  
- 📝 Fill-in-blank (Orange #FF9500)
- 📄 Essay (Purple #AF52DE)
- 🔗 Matching (Teal #32D74B)
- 📁 File Upload (Gray #8E8E93)

### 3. Question Type Templates
```
Question Type Selection Modal
┌─────────────────────────────────────────────────────────────────┐
│ Choose Question Type                                      [✕]   │
│ ─────────────────────────────────────────────────────────────── │
│                                                                 │
│ Objective Questions                                             │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │      📝     │ │      ✅     │ │      📊     │ │      🎯     │ │
│ │ Multiple    │ │ True/False  │ │ Fill Blank  │ │ Matching    │ │
│ │ Choice      │ │             │ │             │ │             │ │
│ │ Auto-grade  │ │ Auto-grade  │ │ Auto-grade  │ │ Auto-grade  │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
│                                                                 │
│ Subjective Questions                                            │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │      📄     │ │      📝     │ │      📁     │ │      🎥     │ │
│ │ Essay       │ │ Short       │ │ File        │ │ Video       │ │
│ │             │ │ Answer      │ │ Upload      │ │ Response    │ │
│ │ Manual      │ │ Manual      │ │ Manual      │ │ Manual      │ │
│ │ grade       │ │ grade       │ │ grade       │ │ grade       │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
│                                                                 │
│ Advanced Question Types                                         │
│ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ ┌─────────────┐ │
│ │      🧩     │ │      📊     │ │      🎨     │ │      💻     │ │
│ │ Drag & Drop │ │ Ranking     │ │ Hotspot     │ │ Code        │ │
│ │             │ │ Order       │ │ Click       │ │ Challenge   │ │
│ │ Interactive │ │ Interactive │ │ Interactive │ │ Auto-grade  │ │
│ └─────────────┘ └─────────────┘ └─────────────┘ └─────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 4. Assessment Settings Panel
```
Assessment Settings (Step 3 of 4)
┌─────────────────────────────────────────────────────────────────┐
│ ← Questions                                        [Save Draft]  │
│                                                                 │
│ ● ● ● ○  Basic Info • Questions • Settings • Review            │
│                                                                 │
│ Timing & Availability                                           │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Time Limit                                                  │ │
│ │ ○ No time limit    ●Set time limit: [30] minutes           │ │
│ │                                                             │ │
│ │ Availability Window                                         │ │
│ │ Opens:  📅 March 15, 2024  🕒 9:00 AM                      │ │
│ │ Closes: 📅 March 22, 2024  🕒 11:59 PM                     │ │
│ │                                                             │ │
│ │ Late Submissions: [Accept with penalty ▼]                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Attempts & Access                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Number of Attempts: [○ 1  ●2  ○3  ○Unlimited]              │ │
│ │ Grade Calculation:  [Highest Score ▼]                      │ │
│ │                                                             │ │
│ │ Access Requirements                                         │ │
│ │ ☑️ Must complete prerequisite: "Introduction Video"        │ │
│ │ ☐ Require lockdown browser                                 │ │
│ │ ☐ Require webcam proctoring                               │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Grading & Feedback                                              │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Grading Scale                                               │ │
│ │ A: 90-100%  B: 80-89%  C: 70-79%  D: 60-69%  F: <60%      │ │
│ │                                                             │ │
│ │ Feedback Options                                            │ │
│ │ ☑️ Show correct answers after submission                   │ │
│ │ ☑️ Show score immediately                                  │ │
│ │ ☑️ Show explanations for wrong answers                    │ │
│ │ ☐ Allow review of submitted answers                        │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Randomization & Security                                        │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ ☑️ Randomize question order                                │ │
│ │ ☑️ Randomize answer choices                                │ │
│ │ ☐ One question per page                                    │ │
│ │ ☐ Prevent backtracking                                     │ │
│ │                                                             │ │
│ │ Plagiarism Detection: [Enabled ▼]                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│           [← Back to Questions]            [Continue to Review →]│
└─────────────────────────────────────────────────────────────────┘
```

### 5. Student Assessment Taking Interface
```
Taking Assessment: "Module 1 Quiz"
┌─────────────────────────────────────────────────────────────────┐
│ Module 1 Quiz: Digital Marketing Fundamentals                  │
│ ────────────────────────────────────────────────                │
│ ⏱️ 24:35 remaining    Question 3 of 10    Progress: ████░░░░░░ │
│                                                                 │
│ Question 3 (2 points)                                           │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Which of the following is NOT a component of the marketing  │ │
│ │ mix (4Ps)?                                                  │ │
│ │                                                             │ │
│ │ Select one answer:                                          │ │
│ │                                                             │ │
│ │ ○ A. Product                                               │ │
│ │ ○ B. Price                                                 │ │
│ │ ● C. Personnel                                             │ │
│ │ ○ D. Place                                                 │ │
│ │ ○ E. Promotion                                             │ │
│ │                                                             │ │
│ │ [Mark for Review]                                           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Question Navigation                                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [1✅] [2✅] [3●] [4○] [5○] [6○] [7○] [8○] [9○] [10○]        │ │
│ │  ✅ Answered   ● Current   ○ Not answered   📌 Flagged     │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ [← Previous]    [Save & Next →]    [⚠️ Submit Assessment]     │
│                                                                 │
│ Auto-save: Last saved 30 seconds ago                           │
└─────────────────────────────────────────────────────────────────┘
```

**Assessment Taking Features**:
- **Timer Display**: Prominent countdown with color warnings (green→yellow→red)
- **Progress Indicator**: Visual progress bar and question counter
- **Auto-save**: Frequent automatic saving with visual confirmation
- **Navigation**: Jump between questions with status indicators
- **Mark for Review**: Flag questions for later attention

### 6. Essay Question Interface (Student View)
```
Essay Question - Student Response
┌─────────────────────────────────────────────────────────────────┐
│ ⏱️ 18:42 remaining    Question 7 of 10    Progress: ███████░░░ │
│                                                                 │
│ Question 7 (10 points) - Essay                                  │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Describe a successful digital marketing campaign you've     │ │
│ │ observed or researched. Analyze the key components that     │ │
│ │ made it effective and explain how it utilized the marketing │ │
│ │ mix principles discussed in class.                          │ │
│ │                                                             │ │
│ │ Minimum word count: 300 words                               │ │
│ │ Suggested time: 15 minutes                                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Your Response                                                   │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ One notable digital marketing campaign that exemplifies     │ │
│ │ effective use of the marketing mix is Nike's "Just Do It"   │ │
│ │ campaign...                                                 │ │
│ │                                                             │ │
│ │ [Rich text editor with basic formatting]                   │ │
│ │ B I U • • • 📎                                            │ │
│ │                                                             │ │
│ │                                                             │ │
│ │                                                             │ │
│ │                                                             │ │
│ │                                                             │ │
│ │ Word count: 347 / 300 minimum ✅                           │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ [Save Draft] [🔤 Spell Check] [← Previous] [Save & Next →]    │
└─────────────────────────────────────────────────────────────────┘
```

### 7. Assessment Review & Grading (Teacher Interface)
```
Grade Assessment: "Module 1 Quiz" - Student Submissions
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Assessments    Grade Assessment    [📊 View Report]   │
│                                                                 │
│ Assessment Overview                                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ "Module 1 Quiz"                    📊 42 submissions       │ │
│ │ Class Average: 78.5%    📈 Completion Rate: 89%            │ │
│ │ Auto-graded: 36 • Manual review needed: 6                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Submissions Requiring Review                                    │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Student               Score    Essay Questions    Action    │ │
│ │ ─────               ─────    ──────────────    ──────    │ │
│ │ Sarah Johnson        65%     2 essays pending   [Grade]   │ │
│ │ Michael Chen         72%     1 essay pending    [Grade]   │ │
│ │ Emma Williams        ?        Incomplete         [Review]  │ │
│ │ James Wilson         88%     Grade appeal        [Review]  │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Currently Grading: Sarah Johnson                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Question 7: Digital Marketing Campaign Analysis (10 pts)   │ │
│ │                                                             │ │
│ │ Student Response:                                           │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ One notable digital marketing campaign that exemplifies │ │ │
│ │ │ effective use of the marketing mix is Nike's "Just Do   │ │ │
│ │ │ It" campaign. This campaign successfully integrated...  │ │ │
│ │ │                                        [Expand to read] │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ Grading Rubric                                              │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ Content Quality    [●●●○○] 6/10 pts                    │ │ │
│ │ │ Analysis Depth     [●●●●○] 8/10 pts                    │ │ │
│ │ │ Examples Used      [●●●○○] 6/10 pts                    │ │ │
│ │ │ Writing Quality    [●●●●○] 8/10 pts                    │ │ │
│ │ │                                                         │ │ │
│ │ │ Total: 7/10 points                                      │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ Feedback Comments:                                          │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ Good analysis of the Nike campaign. Consider adding     │ │ │
│ │ │ more specific examples of how each "P" was utilized...  │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ [Save Grade] [Add to Feedback Bank] [Next Student →]       │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 8. Assessment Results Dashboard (Student View)
```
Assessment Results: "Module 1 Quiz"
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Course        Assessment Results        [📄 Print]    │
│                                                                 │
│ Your Performance                                                │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Module 1 Quiz: Digital Marketing Fundamentals               │ │
│ │                                                             │ │
│ │        Your Score: 85%    (17/20 points)                   │ │
│ │        Class Average: 78.5%                                │ │
│ │        Grade: B+                                            │ │
│ │                                                             │ │
│ │ ████████████████████████████████████████████████████░░░░ 85%│ │
│ │                                                             │ │
│ │ ✅ Passed • Completed on March 16, 2024 at 2:45 PM         │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Question Review                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [🔍 Show all] [✅ Correct only] [❌ Incorrect only]         │ │
│ │ ─────────────────────────────────────────────────────────── │ │
│ │ Q1: What is digital marketing?                      ✅ 2/2  │ │
│ │ Your answer: A comprehensive approach using digital channels │ │
│ │                                                             │ │
│ │ Q2: Which platform has the highest ROI?             ❌ 0/2  │ │
│ │ Your answer: Facebook                                       │ │
│ │ Correct answer: Email Marketing                             │ │
│ │ 💡 Explanation: Email marketing consistently shows the     │ │
│ │    highest ROI among digital channels...                   │ │
│ │                                                             │ │
│ │ Q3: True/False: SEO is a paid strategy              ✅ 1/1  │ │
│ │ Your answer: False ✓                                       │ │
│ │ ─────────────────────────────────────────────────────────── │ │
│ │                                          [Show all 10 ▼]   │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Instructor Feedback                                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Great job on this assessment! Your understanding of core    │ │
│ │ concepts is solid. Focus on studying different platform    │ │
│ │ ROI metrics for the next module.                            │ │
│ │                                                             │ │
│ │ Areas to improve: Platform comparison, ROI analysis         │ │
│ │ Strengths: Conceptual understanding, strategic thinking     │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Next Steps                                                      │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🎯 Recommended: Review "ROI Metrics" lesson                 │ │
│ │ 📚 Continue to: Module 2 - Social Media Strategy           │ │
│ │ 📅 Upcoming: Module 2 Quiz opens March 23                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Mobile Responsive Adaptations

### Mobile Assessment Taking
```
Mobile Quiz Interface
┌───────────────────────────────┐
│ Module 1 Quiz        ⏱️ 24:35 │
│ ─────────────────────────────  │
│ Q3 of 10    Progress: ████░░░ │
│                               │
│ Which is NOT part of 4Ps?     │
│                               │
│ ○ Product                     │
│ ○ Price                       │
│ ● Personnel ←                 │
│ ○ Place                       │
│ ○ Promotion                   │
│                               │
│ [Mark for Review]             │
│                               │
│ ┌─────────────────────────────┐│
│ │[1✅][2✅][3●][4○][5○]        ││
│ │[6○][7○][8○][9○][10○]       ││
│ └─────────────────────────────┘│
│                               │
│ [← Previous] [Next →]         │
│                               │
│ Auto-saved 30s ago ✅         │
└───────────────────────────────┘
```

## Interactive Elements & Micro-interactions

### Assessment Builder Features
- **Drag & Drop**: Reorder questions with visual feedback
- **Auto-save**: Pulse indicator showing save status
- **Real-time Preview**: Toggle between edit and student view
- **Question Validation**: Live feedback on incomplete questions
- **Smart Suggestions**: AI-powered question improvement hints

### Testing Interface Features
- **Smooth Transitions**: Slide animation between questions
- **Progress Animation**: Filling progress bar with celebration
- **Time Warnings**: Color-coded alerts (green→yellow→red)
- **Auto-save Confirmation**: Subtle success indicators
- **Focus Management**: Proper keyboard navigation flow

## Accessibility Features

### Assessment Builder Accessibility
- **Screen Reader Support**: Full ARIA labeling for complex interfaces
- **Keyboard Navigation**: Tab order through all interactive elements
- **High Contrast Mode**: Alternative color scheme for visibility
- **Focus Indicators**: Clear visual focus states throughout
- **Alt Text Requirements**: Mandatory alt text for image questions

### Testing Interface Accessibility  
- **Keyboard Shortcuts**: Arrow keys for navigation, Space for selection
- **Screen Reader Announcements**: Time remaining, question changes
- **Text Scaling**: Support for browser zoom up to 200%
- **Color Independence**: Status not conveyed by color alone
- **Reading Order**: Logical tab sequence through questions

## Performance Optimizations

### Assessment Loading
- **Progressive Loading**: Load questions as needed
- **Image Optimization**: Compressed images with fallbacks
- **Offline Support**: Local storage for temporary answers
- **Auto-save Debouncing**: Efficient saving without overwhelming server
- **Cache Strategy**: Smart caching of question banks

### Assessment Taking Performance
- **Minimal Latency**: Sub-200ms response for navigation
- **Background Sync**: Seamless auto-save without UI interruption
- **Connection Resilience**: Handle poor network conditions gracefully
- **Memory Management**: Efficient rendering of large assessments

## Security & Anti-Cheating Features

### Visual Security Indicators
- **Secure Mode**: Lock icon and secure connection indicators
- **Proctoring Status**: Camera/microphone permissions and status
- **Session Monitoring**: Discrete indicators for active monitoring
- **Time Tracking**: Precise timing with server synchronization
- **Browser Lock**: Visual indication of lockdown browser status

---

## AI Generation Prompt for Assessment System

When implementing this assessment system, focus on:

1. **Intuitive Creation**: Make assessment building as easy as creating a Google Form
2. **Stress-Free Testing**: Design taking interface to reduce student anxiety
3. **Comprehensive Analytics**: Provide meaningful insights without overwhelming data
4. **Fair Grading**: Tools that support consistent, transparent evaluation
5. **Accessibility First**: Ensure equal access for all students regardless of abilities
6. **Performance Reliability**: Rock-solid performance during high-stakes testing

The system should feel trustworthy and professional while being approachable for both educators and students. Every interaction should reinforce confidence in the assessment process.