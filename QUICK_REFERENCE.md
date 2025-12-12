# Quick Reference — Button & Header Guide

## 🚀 Quick Start

### To Use Buttons in Your Components

```tsx
import Button from "@/components/Button";

// Primary (main CTA)
<Button href="#contact" variant="primary">
  Book a Session
</Button>

// Secondary (alternative action)
<Button href="#gallery" variant="secondary">
  View Gallery
</Button>

// Ghost (optional/tertiary)
<Button href="#" variant="ghost">
  Learn More
</Button>

// With onClick handler
<Button onClick={() => alert('Clicked!')} variant="primary">
  Click Me
</Button>
```

---

## 🎨 Button Styles at a Glance

| Variant | Default | Hover | Use Case |
|---------|---------|-------|----------|
| **primary** | White bg, black text | Black fill from bottom, white text | Main action |
| **secondary** | Black bg, white text, white border | White fill from bottom, black text | Alternative |
| **ghost** | Transparent, white border/text | White fill from bottom, black text | Optional |

---

## 📐 Button Specs

```
Padding:       0.75rem 1.5rem (12px 24px)
Height:        ~44px
Border:        2px (or none for primary)
Border Radius: 50rem (full pill)
Font Size:     0.875rem (14px)
Font Weight:   600 (semi-bold)
Animation:     0.3s ease-out
```

---

## 🎯 Where Buttons Are

1. **Hero Section**
   - "View Portfolio" (primary)

2. **About Section**
   - "Book a Session" (primary)
   - "View Gallery" (secondary)

3. **Contact Section**
   - "Send Email" (primary)

---

## 🔍 Header Details

### Large State (scrollY < 60px)
```
Padding:          1rem vertical
Background:       rgba(11,11,12,0.4)
Backdrop Filter:  blur(4px)
Logo Height:      48px
Brand Text:       Visible
```

### Small State (scrollY >= 60px)
```
Padding:          0.5rem vertical
Background:       rgba(11,11,12,0.7)
Backdrop Filter:  blur(6px)
Shadow:           0 2px 12px rgba(0,0,0,0.2)
Logo Height:      40px (shrinks)
Brand Text:       Still visible
```

---

## 💻 CSS Classes Used

**Button Classes**:
- `.btn` - Base styles
- `.btn-primary` - White background variant
- `.btn-secondary` - Black background variant
- `.btn-ghost` - Transparent variant

**Header Classes**:
- `.header-large` - Default state
- `.header-small` - Scrolled state
- `.brand-handwritten` - Logo text styling
- `.logo-mark` - Logo image sizing

---

## 🎬 Animation Breakdown

```
On Hover:

T=0ms:    height: 0%       (no fill)
          opacity: 1.0     (normal)
          color: #000000   (black text)

T=150ms:  height: 50%      (halfway)
          (smooth transition)

T=300ms:  height: 100%     (complete)
          opacity: 1.0     (normal)
          color: #FFFFFF   (white text)
```

---

## 🔐 Accessibility

✅ **Focus State**: 2px outline, 2px offset
✅ **Color Contrast**: WCAG AA compliant
✅ **Keyboard**: Tab + Enter works
✅ **Screen Readers**: Proper aria labels
✅ **Mobile**: Touch targets 44x44px+
✅ **Reduced Motion**: Respects `prefers-reduced-motion`

---

## 📱 Responsive Behavior

```
Mobile (< 640px):
  - Logo: 48px
  - Padding: 0.75rem
  - Button: Full padding, responsive

Tablet (640px - 1024px):
  - Logo: 48px
  - Padding: 1rem (or 0.5rem when scrolled)
  - Button: Full padding

Desktop (> 1024px):
  - Logo: 48px (40px when scrolled)
  - Padding: 1rem (or 0.5rem when scrolled)
  - Button: Full padding
```

---

## 🐛 Troubleshooting

**Button not showing**:
- Check if Button component is imported
- Verify variant prop is correct: `primary`, `secondary`, or `ghost`
- Check z-index if overlapped by other elements

**Animation not smooth**:
- Check browser DevTools for rendering issues
- Ensure GPU acceleration is enabled
- Try adding `will-change: height` to `.btn::after`

**Header logo not showing**:
- Check `/logo.svg` exists in `/public` folder
- Verify fallback to `/assets/st_logo.png` works
- Check browser console for image load errors

**Header not shrinking on scroll**:
- Verify scroll listener is attached (check React DevTools)
- Ensure window height > viewport height (need scrollable content)
- Check z-index conflicts with other fixed elements

---

## 🎨 Customization

### Change Button Color
```css
.btn-primary {
  background-color: #your-color;
}

.btn-primary::after {
  background-color: #your-hover-color;
}
```

### Change Animation Speed
```css
.btn,
.btn::after {
  transition: all 0.5s ease-out; /* Change from 0.3s */
}
```

### Change Button Shape
```css
.btn {
  border-radius: 8px; /* More rectangular */
}
```

### Change Font Size
```css
.btn {
  font-size: 1rem; /* Larger text */
  padding: 1rem 2rem; /* Adjust padding too */
}
```

---

## 📊 Browser Support

| Browser | Version | Support |
|---------|---------|---------|
| Chrome | Latest | ✅ Full |
| Firefox | Latest | ✅ Full |
| Safari | Latest | ✅ Full |
| Edge | Latest | ✅ Full |
| Mobile Safari | Latest | ✅ Full |
| Android Chrome | Latest | ✅ Full |

---

## 🔗 Key Files

```
src/
├── components/
│   ├── Button.tsx          ← Button component
│   └── Header.tsx          ← Header with logo
├── app/
│   ├── globals.css         ← Button + header styles
│   ├── layout.tsx          ← Root layout
│   └── page.tsx            ← Uses buttons
└── public/
    ├── logo.svg            ← Logo file
    └── assets/
        └── st_logo.png     ← Fallback logo
```

---

## 📝 Notes

- All buttons use the Button component (no hardcoded button HTML)
- Header logo automatically scales on scroll
- Animations are GPU-accelerated for smooth performance
- All styles are in globals.css (no component-level CSS)
- No external animation libraries needed

---

## ✅ Verification Checklist

Before deploying:

- [ ] `npm run build` completes successfully
- [ ] No TypeScript errors
- [ ] `npm start` server runs on :3000
- [ ] Header shows logo and "Sahit" text
- [ ] Buttons have proper padding and size
- [ ] Button animation smooth on hover
- [ ] Header shrinks on scroll
- [ ] Mobile responsive on all breakpoints
- [ ] Focus-visible outlines appear on Tab
- [ ] All links work correctly

---

**Version**: 1.0
**Last Updated**: Dec 12, 2025
**Status**: ✅ Production Ready
