# Modern MERN Portfolio

A premium, responsive, and interactive portfolio web application built with the MERN stack (MongoDB, Express, React, Node.js).

## Features

- **Premium UI/UX:** Glassmorphism design, parallax effects, and 3D tilt interactions using Framer Motion and Tailwind CSS.
- **Project Management:** Filterable project listing with detailed case study pages.
- **Admin Dashboard:** Protected admin area to manage projects and content (Simulated in this mockup).
- **Contact Form:** Functional contact form with validation.
- **Dark/Light Mode:** Fully accessible theme toggle.
- **Responsive:** Optimized for all device sizes.

## Tech Stack

- **Client:** React (Vite), Tailwind CSS, Framer Motion, Wouter (Routing), React Query, Shadcn/UI.
- **Server (Planned):** Node.js, Express.
- **Database (Planned):** MongoDB Atlas.

## Getting Started

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Installation

1.  Clone the repository.
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the development server:
    ```bash
    npm run dev
    ```
    This will start both the client (port 5000) and the server (port 3000) concurrently.

## Deployment

### Vercel (Frontend Only / Full Stack)

1.  Push your code to GitHub.
2.  Import the project into Vercel.
3.  Set the `Root Directory` to `client` if deploying only the frontend, or configure Vercel for a monorepo if deploying full stack.
4.  Add environment variables from `.env.example`.
5.  Deploy.

### Render (Full Stack)

1.  Create a new Web Service on Render.
2.  Connect your GitHub repository.
3.  Set the Build Command to: `npm install && npm run build`
4.  Set the Start Command to: `npm start`
5.  Add environment variables.

## Project Structure

```
/
├── client/                 # Frontend React Application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── lib/            # Utilities and Mock Data
│   │   ├── pages/          # Route pages (Home, Projects, Admin, etc.)
│   │   └── App.tsx         # Main application entry
│   └── index.html
├── server/                 # Backend Express API (Mockup Mode - Not Active)
├── shared/                 # Shared types and schemas
└── package.json            # Root dependencies and scripts
```

## Troubleshooting

-   **Images not loading:** Ensure all assets are correctly placed in the `public` or `attached_assets` folder and referenced with the correct path.
-   **Routing 404s:** If deploying to a static host, ensure you have a rewrite rule that directs all traffic to `index.html`.
