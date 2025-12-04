# Modern Portfolio Application

## Overview
This is a modern, premium portfolio web application built with React, Express, and TypeScript. It features a glassmorphism design, parallax effects, and smooth animations using Framer Motion.

**Tech Stack:**
- **Frontend:** React 19 (Vite), Tailwind CSS 4, Shadcn/UI components, Framer Motion
- **Backend:** Express.js with TypeScript
- **Routing:** Wouter
- **State Management:** React Query
- **Styling:** Tailwind CSS with custom animations
- **Type Safety:** TypeScript with Zod validation

## Project Structure
```
/
├── client/              # Frontend React application
│   ├── src/
│   │   ├── components/  # UI components (Shadcn/UI + custom)
│   │   ├── pages/       # Page components (Home, Projects, About, Blog, Contact)
│   │   ├── lib/         # Utilities and helpers
│   │   └── hooks/       # React hooks
│   └── index.html
├── server/              # Backend Express server
│   ├── index.ts         # Server entry point
│   ├── routes.ts        # API routes
│   ├── storage.ts       # In-memory data storage
│   ├── vite.ts          # Vite dev middleware
│   └── static.ts        # Static file serving
├── shared/              # Shared types and schemas
│   └── schema.ts        # Drizzle ORM schemas & Zod types
└── script/              # Build scripts
    └── build.ts         # Production build script
```

## Development Setup (Replit)

### Configuration
- **Port:** 5000 (both frontend and backend run on this port)
- **Host:** 0.0.0.0 with allowedHosts enabled for Replit proxy
- **Environment:** NODE_ENV=development for dev server

### Key Features
1. **Single Server Architecture:** Express serves both API and Vite dev server in development
2. **In-Memory Storage:** Uses MemStorage class for quick prototyping (no database required)
3. **Hot Module Replacement:** Vite HMR enabled for fast development
4. **Type Safety:** Full TypeScript coverage with strict mode

### Recent Changes (December 2024)
- Fixed nested `<a>` tag issues in Navbar and Footer components
- Installed missing dependencies: `cross-env`, `nanoid`, `drizzle-orm`, `drizzle-zod`
- Configured deployment for autoscale mode
- Set up workflow to run on port 5000

## API Endpoints
- `GET /api/projects` - List all projects
- `GET /api/projects/:id` - Get single project
- `DELETE /api/projects/:id` - Delete project
- `POST /api/contact` - Submit contact form
- `GET /api/skills` - Get skills list
- `GET /api/experience` - Get experience list
- `GET /api/testimonials` - Get testimonials

## Running the Application

### Development
```bash
npm run dev
```
This starts the Express server with Vite middleware on port 5000.

### Production Build
```bash
npm run build
```
Builds both client (Vite) and server (esbuild) into the `dist/` folder.

### Production Start
```bash
npm start
```
Runs the production server from `dist/index.cjs`.

## Notes
- The application uses Wouter's `<Link>` component which renders `<a>` tags - avoid wrapping them in additional `<a>` tags
- Vite config already has `allowedHosts: true` for Replit's proxy environment
- Server uses localhost binding, frontend uses 0.0.0.0:5000
- All animations use Framer Motion for smooth, performant effects
