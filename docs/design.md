# Quiz UI/UX Design Specification

## Design Principles
- Match AOB brand: elegant, earthy, warm
- Mobile-first responsive design
- Smooth transitions between questions
- Clear visual hierarchy

## Color Palette
- Primary: `#2D5A4A` (deep forest green)
- Secondary: `#D4A574` (warm gold/sand)
- Accent: `#8B4513` (saddle brown)
- Background: `#FAF7F2` (warm white)
- Text: `#333333` (dark gray)
- Light: `#F5EFE6` (cream)

## Typography
- Headings: Playfair Display (serif, elegant)
- Body: Lato (clean, readable)

## Page Structure

### Landing Page (Quiz Selection)
```
┌─────────────────────────────────┐
│           Header                 │
│    [Logo]  Navigation           │
├─────────────────────────────────┤
│                                 │
│   Discover Your Breathwork      │
│        Style Quiz              │
│   ┌─────────────────────┐      │
│   │   [Start Quiz]      │      │
│   └─────────────────────┘      │
│                                 │
│   Discover Your Trauma         │
│      Healing Path              │
│   ┌─────────────────────┐      │
│   │   [Start Quiz]      │      │
│   └─────────────────────┘      │
│                                 │
├─────────────────────────────────┤
│           Footer               │
└─────────────────────────────────┘
```

### Quiz Page
```
┌─────────────────────────────────┐
│  Progress: ●●●○○○ (3/5)        │
├─────────────────────────────────┤
│                                 │
│   Question Title               │
│                                 │
│   ┌─────────────────────┐      │
│   │   Option A          │      │
│   └─────────────────────┘      │
│   ┌─────────────────────┐      │
│   │   Option B          │      │
│   └─────────────────────┘      │
│   ┌─────────────────────┐      │
│   │   Option C          │      │
│   └─────────────────────┘      │
│   ┌─────────────────────┐      │
│   │   Option D          │      │
│   └─────────────────────┘      │
│                                 │
│        [Back]  [Next]          │
│                                 │
├─────────────────────────────────┤
│   Progress Bar ████████░░░░░    │
└─────────────────────────────────┘
```

### Email Capture (Post-Quiz)
```
┌─────────────────────────────────┐
│                                 │
│   🎉 You're Almost There!      │
│                                 │
│   Enter your email to see      │
│   your personalized results:   │
│                                 │
│   ┌─────────────────────┐      │
│   │  your@email.com     │      │
│   └─────────────────────┘      │
│                                 │
│   ┌─────────────────────┐      │
│   │  [See My Results]  │      │
│   └─────────────────────┘      │
│                                 │
│   🔒 We respect your privacy  │
│                                 │
└─────────────────────────────────┘
```

### Results Page
```
┌─────────────────────────────────┐
│        Your Result Title        │
│         (e.g., The Calm        │
│           Observer)             │
├─────────────────────────────────┤
│                                 │
│   [Illustration/Icon]          │
│                                 │
│   Description of the result    │
│   and what it means...         │
│                                 │
│   ─────────────────────────    │
│                                 │
│   YOUR RECOMMENDED PATH:        │
│   • Practice 1                 │
│   • Practice 2                 │
│   • Practice 3                 │
│                                 │
│   ┌─────────────────────┐      │
│   │ [Get Your Free     │      │
│   │  Personalized      │      │
│   │  Consultation]     │      │
│   └─────────────────────┘      │
│                                 │
│   ┌─────────────────────┐      │
│   │ [Share Your        │      │
│   │  Results]          │      │
│   └─────────────────────┘      │
│                                 │
└─────────────────────────────────┘
```

## Components

### Button States
- Default: Primary color background
- Hover: Darker shade + slight scale
- Active: Pressed effect
- Disabled: Grayed out

### Progress Bar
- Animated fill
- Smooth transitions

### Answer Cards
- Default: Light background, subtle border
- Hover: Elevated shadow, border highlight
- Selected: Primary color border, checkmark

### Animations
- Page transitions: Fade + slide
- Question transitions: Crossfade
- Results reveal: Scale up + fade in
- Progress bar: Smooth width transition

## Responsive Breakpoints
- Mobile: < 640px (single column, full width)
- Tablet: 640px - 1024px (centered content)
- Desktop: > 1024px (max-width: 800px container)
