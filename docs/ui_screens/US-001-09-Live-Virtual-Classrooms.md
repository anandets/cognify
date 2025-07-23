# UI Design Specification: Live Virtual Classrooms (US-001-09)

## Overview
**Story ID**: US-001-09  
**Screen**: Live Virtual Classroom Interface  
**User Role**: Teacher/Instructor & Students  
**Platform**: Web (Desktop Primary, Tablet/Mobile Secondary)  

## Design Philosophy
Following Apple-inspired premium design with Product Hunt simplicity - "Elegant Simplicity, Purposeful Beauty" with focus on immersive learning experiences.

## Screen Architecture

### Main Layout Structure
```
┌─────────────────────────────────────────────────────────────────┐
│ Virtual Classroom Header (48px height)                         │
│ [Session Title] [🎬 Record] [⚙️ Settings] [👥 500] [End Class] │
└─────────────────────────────────────────────────────────────────┘
│                                                               │
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│ │        Video Feed Area      │ │    Control Panel &          │ │
│ │        (1200x675px)         │ │    Participants             │ │
│ │                             │ │       (300px width)         │ │
│ │  ┌─────────────────────────┐ │ │                             │ │
│ │  │   Main Speaker Video    │ │ │ ┌─────────────────────────┐ │ │
│ │  │   (Instructor/Student)  │ │ │ │ [🎤] [🎥] [📋] [💬]      │ │ │
│ │  └─────────────────────────┘ │ │ └─────────────────────────┘ │ │
│ │                             │ │                             │ │
│ │  Student Video Grid         │ │ Participants List           │ │
│ │  [👤][👤][👤][👤][👤][👤] │ │ & Chat Area                 │ │
│ └─────────────────────────────┘ └─────────────────────────────┘ │
│                                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Interactive Toolbar (64px height)                          │ │
│ │ [🖊️ Whiteboard] [📱 Screen Share] [🗣️ Polls] [👋 Hand]  │ │
│ │ [🔇 Mute All] [⭐ Reactions] [📋 Breakouts] [⏹️ Stop]      │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

## Color Palette Implementation
- **Primary Actions**: Education Blue (#007AFF)
- **Live/Recording**: Recording Red (#FF3B30)
- **Success States**: Success Green (#34C759) 
- **Warning States**: Warning Orange (#FF9500)
- **Video/Audio Controls**: Control Gray (#6B6B6B)
- **Text**: Primary (#1D1D1F), Secondary (#86868B), Tertiary (#C7C7CC)
- **Backgrounds**: Video Black (#000000), Surface (#F2F2F7), Card White (#FFFFFF)
- **Borders**: Border Gray (#E5E5EA)

## Typography Scale
- **Session Title**: H2 - SF Pro Display Semibold 28px/36px
- **Participant Names**: Body - SF Pro Text Medium 14px/20px
- **Chat Messages**: Body - SF Pro Text Regular 14px/20px
- **Control Labels**: Caption - SF Pro Text Medium 12px/16px
- **Status Text**: Caption - SF Pro Text Regular 12px/16px

## Screen Designs

### 1. Main Virtual Classroom Interface
```
Live Virtual Classroom: "Digital Marketing Fundamentals - Lesson 5"
┌─────────────────────────────────────────────────────────────────┐
│ 🎬 Recording • 47:32          Participants: 156/200      [End] │
│                                                                 │
│ ┌─────────────────────────────┐ ┌─────────────────────────────┐ │
│ │                             │ │ Instructor Controls         │ │
│ │    Main Video Feed          │ │ ┌─────────────────────────┐ │ │
│ │                             │ │ │ [🎤] [🎥] [📋] [🖊️]    │ │ │
│ │  ┌─────────────────────────┐ │ │ │ Mic   Cam  Share Board │ │ │
│ │  │                         │ │ │ └─────────────────────────┘ │ │
│ │  │   Sarah Johnson         │ │ │                             │ │
│ │  │   (Instructor)          │ │ │ Waiting Room (3)            │ │
│ │  │   🎤 Speaking           │ │ │ ┌─────────────────────────┐ │ │
│ │  └─────────────────────────┘ │ │ │ 👤 Alex Kumar           │ │ │
│ │                             │ │ │ 👤 Maria Rodriguez      │ │ │
│ │  Student Grid (2x6)         │ │ │ 👤 David Chen           │ │ │
│ │  ┌───┐┌───┐┌───┐┌───┐┌───┐ │ │ │     [Admit All]         │ │ │
│ │  │👤 ││👤 ││👤 ││🎤 ││👤 │ │ │ └─────────────────────────┘ │ │
│ │  └───┘└───┘└───┘└───┘└───┘ │ │                             │ │
│ │  ┌───┐┌───┐┌───┐┌───┐┌───┐ │ │ Active Participants         │ │
│ │  │👤 ││👤 ││🔇 ││👤 ││👤 │ │ │ ┌─────────────────────────┐ │ │
│ │  └───┘└───┘└───┘└───┘└───┘ │ │ │ 🎤 John Smith           │ │ │
│ │                             │ │ │ 👤 Emma Wilson          │ │ │
│ │  + 144 more participants    │ │ │ ✋ Mike Johnson         │ │ │
│ └─────────────────────────────┘ │ │ 👤 Lisa Brown           │ │ │
│                                 │ │ Show All (156)          │ │ │
│ ┌─────────────────────────────┐ │ └─────────────────────────┘ │ │
│ │ 💬 Chat & Q&A               │ │                             │ │
│ │ John: Great explanation!    │ │ Engagement Tools            │ │
│ │ Emma: Can you repeat that?  │ │ ┌─────────────────────────┐ │ │
│ │ Mike: ✋ Question about...  │ │ │ [📊 Poll] [❓ Q&A]     │ │ │
│ │ Lisa: 👍 Thanks!           │ │ │ [📋 Quiz] [👋 Reactions]│ │ │
│ │ ─────────────────────────── │ │ └─────────────────────────┘ │ │
│ │ Type your message...      📤│ │                             │ │
│ └─────────────────────────────┘ └─────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

**Key Design Elements**:
- **Video Feed**: 16:9 aspect ratio with instructor prominently displayed
- **Student Grid**: Adaptive grid showing 12 participants with "view more" option
- **Live Indicators**: Red recording dot, participant count, session timer
- **Mute/Video Icons**: Clear visual indicators for participant status
- **Waiting Room**: Separate admission control area

### 2. Screen Sharing Mode
```
Screen Share - Marketing Presentation
┌─────────────────────────────────────────────────────────────────┐
│ 🎬 Recording • 52:15    👁️ Presenting: Sarah's Screen    [Stop] │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                                                             │ │
│ │                  Shared Screen Content                      │ │
│ │                                                             │ │
│ │     ┌─────────────────────────────────────┐                 │ │
│ │     │                                     │                 │ │
│ │     │    PowerPoint Presentation          │                 │ │
│ │     │    "Digital Marketing Funnel"       │                 │ │
│ │     │                                     │                 │ │
│ │     │    📊 Awareness → Interest →        │                 │ │
│ │     │    Consideration → Purchase         │                 │ │
│ │     │                                     │                 │ │
│ │     └─────────────────────────────────────┘                 │ │
│ │                                                             │ │
│ │  ┌─────────────────────┐                                   │ │
│ │  │   Presenter Video   │                                   │ │
│ │  │   ┌───────────────┐ │   [📱 Stop Share] [🖊️ Annotate] │ │
│ │  │   │  Sarah        │ │   [⏸️ Pause] [📹 Record Focus]   │ │
│ │  │   │  (Instructor) │ │                                   │ │
│ │  │   └───────────────┘ │                                   │ │
│ │  └─────────────────────┘                                   │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Student Reactions: 👍 45  ✋ 3  ❓ 2  🎯 12                │ │
│ │ Recent Chat: "This is very clear!" - Mike                  │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 3. Interactive Whiteboard Mode
```
Digital Whiteboard - Class Collaboration
┌─────────────────────────────────────────────────────────────────┐
│ ← Back to Video   Whiteboard: "Marketing Concepts"    [Save] │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ 🖊️ Draw  📝 Text  📐 Shapes  🎨 Colors  ↩️ Undo  🗑️ Clear │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                    Digital Whiteboard                       │ │
│ │                                                             │ │
│ │     Marketing Funnel (Drawn by Sarah)                      │ │
│ │                                                             │ │
│ │     📧 Email Marketing ←→ 📱 Social Media                   │ │
│ │              ↓                    ↓                        │ │
│ │         Lead Magnet         Brand Awareness                 │ │
│ │              ↓                    ↓                        │ │
│ │         Sales Page ←─────── Content Marketing              │ │
│ │              ↓                                             │ │
│ │         💰 Purchase                                        │ │
│ │                                                             │ │
│ │     Student Additions:                                      │ │
│ │     • "What about SEO?" - Mike (in red)                    │ │
│ │     • "Add influencer marketing" - Emma (in blue)          │ │
│ │                                                             │ │
│ │  ┌─────────────────┐  ┌─────────────────┐                 │ │
│ │  │ Active Users:   │  │ Drawing Tools:   │                 │ │
│ │  │ 👤 Sarah (🖊️)  │  │ ✏️ Thin Brush   │                 │ │
│ │  │ 👤 Mike (🖊️)   │  │ 🖊️ Medium Brush │                 │ │
│ │  │ 👤 Emma (📝)    │  │ 🖌️ Thick Brush  │                 │ │
│ │  │ + 8 viewing     │  │ 📝 Text Tool    │                 │ │
│ │  └─────────────────┘  └─────────────────┘                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [👥 Enable All Drawing] [📋 Save to Course] [📤 Share PNG] │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 4. Breakout Rooms Management
```
Breakout Rooms - Group Activity
┌─────────────────────────────────────────────────────────────────┐
│ 🏠 Main Room (47 participants)           Breakout Timer: 15:30 │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                 Breakout Room Manager                       │ │
│ │                                                             │ │
│ │ ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │ │
│ │ │ Room 1 (12)  │ │ Room 2 (14)  │ │ Room 3 (11)  │         │ │
│ │ │ 🟢 Active    │ │ 🟢 Active    │ │ 🟢 Active    │         │ │
│ │ │              │ │              │ │              │         │ │
│ │ │ 👤 Alex      │ │ 👤 Emma      │ │ 👤 David     │         │ │
│ │ │ 👤 John      │ │ 👤 Lisa      │ │ 👤 Maria     │         │ │
│ │ │ 👤 Mike      │ │ 👤 Sarah     │ │ 👤 James     │         │ │
│ │ │ + 9 more     │ │ + 11 more    │ │ + 8 more     │         │ │
│ │ │              │ │              │ │              │         │ │
│ │ │ [👁️ Visit]   │ │ [👁️ Visit]   │ │ [👁️ Visit]   │         │ │
│ │ │ [📝 Message] │ │ [📝 Message] │ │ [📝 Message] │         │ │
│ │ └──────────────┘ └──────────────┘ └──────────────┘         │ │
│ │                                                             │ │
│ │ ┌──────────────┐ ┌──────────────┐                         │ │
│ │ │ Room 4 (8)   │ │ Room 5 (9)   │     Room Actions:       │ │
│ │ │ 🟢 Active    │ │ 🟢 Active    │                         │ │
│ │ │              │ │              │     [+ Add Room]        │ │
│ │ │ 👤 Peter     │ │ 👤 Anna      │     [🔀 Shuffle]        │ │
│ │ │ 👤 Kate      │ │ 👤 Tom       │     [📢 Broadcast]      │ │
│ │ │ + 6 more     │ │ + 7 more     │     [⏰ Extend Time]    │ │
│ │ │              │ │              │     [🏠 Return All]     │ │
│ │ │ [👁️ Visit]   │ │ [👁️ Visit]   │                         │ │
│ │ │ [📝 Message] │ │ [📝 Message] │                         │ │
│ │ └──────────────┘ └──────────────┘                         │ │
│ │                                                             │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Activity: "Discuss marketing strategies for your industry"  │ │
│ │ Instructions sent to all rooms • Auto-return in 15:30      │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 5. Polls and Engagement Tools
```
Live Poll - Real-time Student Feedback
┌─────────────────────────────────────────────────────────────────┐
│ 🎬 Recording • 58:45    📊 Poll Active    Responses: 89/156   │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │                   Live Poll Results                         │ │
│ │                                                             │ │
│ │ Question: "Which marketing channel is most effective for    │ │
│ │ reaching your target audience?"                             │ │
│ │                                                             │ │
│ │ A) Social Media Marketing                                   │ │
│ │ ████████████████████████████████ 45% (40 votes)            │ │
│ │                                                             │ │
│ │ B) Email Marketing                                          │ │
│ │ ████████████████████ 25% (22 votes)                        │ │
│ │                                                             │ │
│ │ C) Content Marketing                                        │ │
│ │ ████████████ 18% (16 votes)                                │ │
│ │                                                             │ │
│ │ D) Paid Advertising                                         │ │
│ │ ████████ 12% (11 votes)                                    │ │
│ │                                                             │ │
│ │ ┌─────────────────────────────────────────────────────────┐ │ │
│ │ │ Poll Actions:                                           │ │ │
│ │ │ [⏹️ End Poll] [📊 Show Results] [💾 Save] [🔄 Reset] │ │ │
│ │ └─────────────────────────────────────────────────────────┘ │ │
│ │                                                             │ │
│ │ 📈 Response Rate: 57% • Still Active: 30 seconds remaining │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Engagement Dashboard                                        │ │
│ │ ┌────────────────┐ ┌────────────────┐ ┌────────────────┐   │ │
│ │ │ ✋ Raised Hands │ │ 💬 Chat Active │ │ 📊 Poll Active │   │ │
│ │ │      7         │ │      23        │ │      89        │   │ │
│ │ └────────────────┘ └────────────────┘ └────────────────┘   │ │
│ │                                                             │ │
│ │ Recent Activity:                                            │ │
│ │ • 3 new chat messages                                       │ │
│ │ • 2 students raised hands                                   │ │
│ │ • Poll response rate increased 15%                          │ │
│ └─────────────────────────────────────────────────────────────┘ │
└─────────────────────────────────────────────────────────────────┘
```

### 6. Session Settings and Controls
```
Virtual Classroom Settings
┌─────────────────────────────────────────────────────────────────┐
│ Session Settings                                          [✕]   │
│ ─────────────────────────────────────────────────────────────── │
│                                                                 │
│ Recording & Storage                                             │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ [☑️] Auto-record session                                   │ │
│ │ [☑️] Save chat messages                                    │ │
│ │ [☑️] Generate automatic transcript                         │ │
│ │ [☐] Record breakout rooms                                  │ │
│ │ Storage: Cloud (2.3GB used / 100GB limit)                 │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Participant Permissions                                         │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Camera Access:     [○ On Entry  ●Off Entry  ○Host Only]   │ │
│ │ Microphone:        [○ On Entry  ●Off Entry  ○Host Only]   │ │
│ │ Screen Sharing:    [○ Everyone  ●Host Only  ○Disabled]    │ │
│ │ Chat Messaging:    [●Everyone  ○Host Only   ○Disabled]    │ │
│ │ Whiteboard Access: [○ Everyone  ●Instructor ○Disabled]    │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Session Quality                                                 │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Video Quality:     [○ 720p  ●1080p  ○Auto Adjust]        │ │
│ │ Audio Quality:     [○ Good  ●High   ○Bandwidth Saver]     │ │
│ │ Max Participants:  [500] (Current: 156)                   │ │
│ │ Waiting Room:      [☑️] Enable admission control          │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│ Security Settings                                               │
│ ┌─────────────────────────────────────────────────────────────┐ │
│ │ Meeting Password:  [●Required  ○Optional  ○None]          │ │
│ │ Join Before Host:  [○Allow     ●Require   ○10min Early]   │ │
│ │ Session Lock:      [☑️] Lock after session starts        │ │
│ │ Remove Participant: [☑️] Host can remove disruptive users │ │
│ └─────────────────────────────────────────────────────────────┘ │
│                                                                 │
│               [Cancel]           [Save Settings]               │
└─────────────────────────────────────────────────────────────────┘
```

## Interactive Elements

### Video Controls
- **Mute/Unmute Button**: Toggle with visual feedback (red when muted)
- **Camera Toggle**: On/off with preview thumbnail
- **Screen Share**: One-click sharing with application selection
- **Record Button**: Red dot indicator with session timer
- **End Session**: Confirmation modal before ending

### Participant Management
- **Raise Hand**: Visual queue with notification sound
- **Admit from Waiting**: Batch admit or individual control
- **Participant Grid**: Expandable view showing all participants
- **Mute All**: Quick classroom management control
- **Remove Participant**: Moderation control with confirmation

### Engagement Tools
- **Poll Creation**: Quick poll builder with multiple choice options
- **Chat Messages**: Real-time messaging with emoji support
- **Reactions**: Quick emoji reactions (👍 👎 ✋ ❓ 🎯)
- **Whiteboard**: Collaborative drawing with tool palette
- **Breakout Rooms**: Automated room assignment and timer

## Responsive Behavior

### Tablet (834px)
- **Video Layout**: Stack main video above participant grid
- **Control Panel**: Bottom slide-up panel for chat and participants
- **Touch Controls**: Larger touch targets for video controls
- **Simplified Toolbar**: Essential tools only, expandable menu

### Mobile (390px)
- **Full Screen Video**: Main speaker takes full screen
- **Swipe Navigation**: Swipe between video, chat, and participants
- **Voice-First**: Prioritize audio controls over video
- **Picture-in-Picture**: Minimize video for multitasking
- **Bottom Navigation**: Persistent controls at bottom

## Accessibility Features
- **Keyboard Navigation**: Full keyboard support for all controls
- **Screen Reader**: ARIA labels for all interface elements
- **High Contrast**: Enhanced contrast mode for video controls
- **Captions**: Real-time captions and transcript generation
- **Audio Descriptions**: Audio cues for visual changes
- **Focus Indicators**: Clear focus states for all interactive elements

## Performance Considerations
- **Adaptive Streaming**: Automatic quality adjustment based on bandwidth
- **Video Optimization**: VP9/H.264 codec with hardware acceleration
- **Memory Management**: Efficient handling of 500+ video streams
- **Battery Optimization**: Reduced frame rate on mobile devices
- **Network Recovery**: Automatic reconnection and sync recovery

## Security Features
- **End-to-End Encryption**: AES-256 encryption for all streams
- **Waiting Room**: Pre-admission screening and control
- **Session Authentication**: JWT tokens for authorized access
- **Recording Security**: Encrypted storage with access controls
- **Screen Share Control**: Prevent unauthorized screen sharing

---

## AI Generation Prompt for Implementation

When implementing this design, focus on:
1. **Professional Video Quality**: Ensure HD video with minimal latency
2. **Intuitive Controls**: Make all tools easily discoverable and accessible
3. **Scalable Architecture**: Support 500+ participants without performance degradation
4. **Engagement Focus**: Prioritize tools that increase student participation
5. **Accessibility First**: WCAG 2.1 AA compliance for all users
6. **Mobile Optimization**: Seamless experience across all devices

The design should feel like a premium virtual classroom that rivals Zoom/Teams while being specifically optimized for educational use cases and large-scale teaching scenarios.