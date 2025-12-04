# Modern MERN Portfolio - Replit Configuration

## Project Overview
A premium, responsive portfolio web application built with React, Vite, and Tailwind CSS. This is a frontend-only application showcasing a modern portfolio with glassmorphism design, parallax effects, and interactive UI components.

## Current State
- **Status**: Fully operational in Replit environment
- **Last Updated**: December 4, 2025
- **Environment**: Development ready, deployment configured

## Tech Stack
- **Frontend Framework**: React 19.2.0 with TypeScript
- **Build Tool**: Vite 7.1.9
- **Styling**: Tailwind CSS 4.1.14 with custom animations
- **Routing**: Wouter 3.3.5 (lightweight React router)
- **UI Components**: Shadcn/UI with Radix UI primitives
- **Animations**: Framer Motion 12.23.24
- **State Management**: TanStack React Query 5.60.5
- **Theme**: next-themes (dark/light mode support)

## Project Structure
```
/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── contact/    # Contact form components
│   │   │   ├── home/       # Home page sections
│   │   │   ├── layout/     # Navbar, Footer
│   │   │   ├── projects/   # Project cards
│   │   │   └── ui/         # Shadcn UI components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utilities and data
│   │   ├── pages/          # Route pages
│   │   ├── App.tsx         # Main app component
│   │   ├── main.tsx        # Entry point
│   │   └── index.css       # Global styles
│   ├── public/             # Static assets
│   └── index.html          # HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies and scripts
```

## Replit Setup

### Workflow Configuration
- **Workflow Name**: Start application
- **Command**: `npm run dev`
- **Port**: 5000
- **Output Type**: webview
- **Status**: Running

### Vite Configuration
The `vite.config.ts` is properly configured for Replit:
- Host: `0.0.0.0` (required for Replit proxy)
- Port: `5000` (standard frontend port)
- `allowedHosts: true` (allows Replit's iframe proxy)
- Root: `client/` directory
- Build output: `dist/` directory

### Deployment Configuration
- **Type**: Static site
- **Build Command**: `npm run build`
- **Public Directory**: `dist`
- **Platform**: Ready for Replit deployments

## Development

### Available Scripts
- `npm run dev` - Start development server on port 5000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm check` - Type check with TypeScript

### Key Features
1. **Premium UI/UX**: Glassmorphism design with parallax effects
2. **Project Showcase**: Filterable project listing with case studies
3. **Contact Form**: Functional form with validation
4. **Theme Toggle**: Dark/light mode support
5. **Responsive Design**: Optimized for all device sizes
6. **Custom Components**: Extensive Shadcn/UI component library

## Notes
- This is a frontend-only application (no backend currently active)
- Server and shared directories mentioned in README are planned but not implemented
- All data is currently mock data from `client/src/lib/data.ts`
- Images are served from `client/public/images/`

## Architecture Decisions
- **Date**: December 4, 2025
- Configured for Replit environment with proper host settings
- Static deployment configuration for production
- TypeScript strict mode enabled for type safety
- Path aliases configured (`@/` maps to `client/src/`)

## Performance Optimizations (December 4, 2025)
- **Direct Page Imports**: Removed React.lazy() for instant navigation between pages
- **Optimized CustomCursor**: Uses requestAnimationFrame with refs instead of framer-motion springs, disabled on touch devices
- **Streamlined Navbar**: Removed Magnetic wrappers, added RAF-throttled scroll listener, memoized component
- **Reduced Animation Overhead**: Simplified transitions for faster perceived performance

## UX Improvements (December 4, 2025)

### Hero Section
- Added sparkles icon to "Open to Opportunities" badge
- Added status indicators (Available for freelance, 3+ Years Experience, Remote Worldwide)
- Interactive scroll indicator at bottom with click-to-scroll functionality
- Responsive typography scaling for mobile

### Projects Page
- Project cards show dates with calendar icon
- Improved filter buttons with rounded pill design
- Search field with clear button
- Count indicator when filtering ("Showing X of Y projects")
- Better empty state design with icon

### About Page
- Replaced circular skill meters with horizontal progress bars
- Added "My Values" section with 4 value cards (Passion-Driven, Performance First, Collaboration, Attention to Detail)
- Quantifiable achievements highlighted (3+ years, etc.)
- Improved mobile layout and spacing

### Contact Page
- Trust signals displayed (Response within 24 hours, Free consultation, Satisfaction guaranteed)
- "Book a call" CTA card
- Improved contact info card layout
- Better form structure

### Global
- Reduced-motion CSS support for accessibility
- Smooth scrolling for users without reduced-motion preference
- Memoized Footer component
- Cleaner footer design with "Let's Talk" CTA
