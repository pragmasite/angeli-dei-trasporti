# Angeli dei Trasporti - Website

## Overview
This is a professional, modern single-page website built for Angeli dei Trasporti, a transportation service for seniors and disabled individuals in Bellinzona, Switzerland.

### Business Details
- **Name:** Angeli dei Trasporti
- **Location:** Via alle Bolle 1, 6500 Bellinzona, Switzerland
- **Phone:** +41 77 402 97 67
- **Email:** angelideitrasporti@gmail.com
- **Hours:** Monday-Friday 08:00-17:30, Saturday-Sunday 24/7 (Open)
- **Type:** Senior & Disability Transportation Service

## Technology Stack
- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS
- **UI Components:** shadcn/ui
- **Animations:** Framer Motion
- **Routing:** React Router v6

## Languages Supported
1. **Italian** (Primary) - `/` 
2. **English** (Secondary) - `/en`
3. **German** (Tertiary) - `/de`

Language switching is available via dropdown in the header.

## Design System
### Colors
- **Primary:** Teal (#287266) - Professional, trustworthy
- **Accent:** Golden Orange (#FF8C42) - Energetic, welcoming
- **Background:** Cream (#F8F6F0) - Calm, clean
- **Foreground:** Dark Teal (#1F3D35) - High contrast readability

### Typography
- **Headings:** Libre Baskerville (Serif) - Elegant, professional
- **Body:** Inter (Sans-Serif) - Modern, readable

### Border Radius
- Custom radius: 0.75rem (12px) throughout

## Sections

### 1. Header
- Sticky header that changes appearance on scroll
- Logo with business name
- Navigation menu with all main sections
- Language switcher dropdown
- Call-to-action phone button
- Mobile-responsive hamburger menu

### 2. Hero Section
- Full-viewport hero with gradient overlay
- Business tagline and description
- Two CTA buttons: "Book Now" (phone) and "Send Email"
- Location badge
- Animated scroll indicator
- Smooth scrolling enabled

### 3. About Section
- Business value proposition
- Key features (4 cards with icons)
- Statistics cards (Years of Experience, Satisfied Clients, Completed Trips, 24/7 Service)
- Professional narrative about the service

### 4. Services Section
- 6 service offerings displayed in grid
- Each service has title and description
- Hover effects on cards
- Covers: Transportation, Medical Transport, Shopping Assistance, Shuttle Service, Apartment Clearance, Custom Transportation

### 5. Gallery Section
- Placeholder gallery for future images
- Responsive grid layout (2 columns mobile, 3 columns desktop)
- Ready for image integration

### 6. Hours Section
- Opening hours table
- Today's day is highlighted
- Shows current day with CheckCircle icon
- 24/7 availability message
- Clean, accessible table design

### 7. Contact Section
- Contact information display (phone, email, address)
- Embedded Google Map showing business location
- Direct call CTA button
- Responsive two-column layout (mobile-friendly)

### 8. Footer
- Company description and tagline
- Navigation links to all sections
- Contact information with icons
- Social media links (Facebook, LinkedIn)
- Copyright information

### 9. Disclaimer Modal
- Shows on first visit
- Uses sessionStorage to not repeat on same session
- Professional disclaimer about website being preview
- Styled with alert icon and dismissable button

## Features

### Accessibility & UX
- ✓ Smooth scrolling enabled
- ✓ Clickable scroll indicator
- ✓ Mobile responsive (mobile-first approach)
- ✓ High contrast colors for readability
- ✓ Semantic HTML structure
- ✓ ARIA labels and roles where needed

### Animations
- ✓ Framer Motion for smooth transitions
- ✓ Fade-in animations on scroll
- ✓ Hero section entrance animations
- ✓ Floating background elements
- ✓ Card hover effects
- ✓ Modal enter/exit animations

### SEO & Meta Tags
- ✓ Proper title tags
- ✓ Meta descriptions
- ✓ Open Graph tags for social sharing
- ✓ Twitter card tags
- ✓ Favicon and apple touch icon
- ✓ Language tags
- ✓ Robots and canonical tags

### Translations
All content is fully translated into Italian, English, and German including:
- Navigation labels
- Section titles and descriptions
- Button text
- Placeholder content
- Accessibility labels

## File Structure
```
src/
├── components/
│   ├── Header.tsx          # Navigation header with language switcher
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── About.tsx           # About section
│   ├── Services.tsx        # Services grid
│   ├── Gallery.tsx         # Gallery section (placeholder)
│   ├── Hours.tsx           # Hours table with today highlight
│   ├── Contact.tsx         # Contact info and map
│   ├── Footer.tsx          # Footer navigation
│   ├── DisclaimerModal.tsx # Disclaimer modal
│   └── ui/                 # shadcn/ui components
├── hooks/
│   └── useLanguage.tsx     # Language context and hook
├── lib/
│   └── translations.ts     # All translations (IT, EN, DE)
├── pages/
│   └── Index.tsx           # Main page composition
├── App.tsx                 # App routing
├── main.tsx                # Entry point
└── index.css               # Design system & custom styles
```

## Build & Deployment

### Build
```bash
npm run build
```
Output: `dist/` folder ready for deployment

### Development
```bash
npm run dev
```

### File Sizes (Production)
- HTML: 1.81 kB (gzip: 0.62 kB)
- CSS: 64.48 kB (gzip: 11.29 kB)
- JS: 465.03 kB (gzip: 148.98 kB)
- **Total: ~596 kB**

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes
- Logo is used as favicon and header brand
- No contact form - direct contact info displayed instead
- Gallery is placeholder - ready for image integration
- All times and business info can be easily updated in source code
- Email and phone numbers are clickable links (tel: and mailto:)
- Website is fully functional as-is, ready for deployment

## Future Enhancements
- Add real images to gallery
- Integrate with booking system
- Add testimonials section
- Implement newsletter signup
- Add multi-language URL structure for SEO

---

Generated: January 7, 2026
Technology: Vite + React + TypeScript + shadcn/ui + Framer Motion
