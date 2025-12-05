# Modern Developer Portfolio

A premium, high-performance portfolio website designed to showcase software development projects, technical skills, and professional experience. Built with modern web technologies, focusing on aesthetics, accessibility, and performance.

## 🚀 Features

- **Premium UI/UX:** Immersive design with glassmorphism, parallax scrolling, and fluid animations using **Framer Motion**.
- **Responsive Design:** Fully optimized for all devices, from mobile to extra-large desktops.
- **Interactive Sections:**
    -   **Hero Section:** Dynamic background with text reveal animations.
    -   **Tech Stack:** Grid layout showcasing skills with progress indicators.
    -   **Experience Timeline:** Visual representation of professional history.
    -   **Project Showcase:** Detailed cards with hover effects, categorization, and dedicated detail pages.
    -   **Services:** Highlighting core competencies and offerings.
    -   **Contact Form:** Fully functional form with validation using **Zod** and **React Hook Form**.
- **Theme System:** Built-in Dark/Light mode support.
- **Performance:** Lightning-fast load times powered by **Vite** and **React 19**.

## 🛠️ Tech Stack

This project is built using a robust modern stack:

-   **Core:** [React 19](https://react.dev/), [TypeScript](https://www.typescriptlang.org/), [Vite](https://vitejs.dev/)
-   **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/), [React CountUp](https://github.com/glennreilly/react-countup), [React Simple Typewriter](https://github.com/awran5/react-simple-typewriter)
-   **Routing:** [Wouter](https://github.com/molefrog/wouter)
-   **State & Data:** [TanStack Query](https://tanstack.com/query/latest)
-   **Forms:** [React Hook Form](https://react-hook-form.com/), [Zod](https://zod.dev/)
-   **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives), [Lucide React](https://lucide.dev/) (Icons)

## 🏃‍♂️ Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd My_Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at `http://localhost:5000`.

4.  **Build for production:**
    ```bash
    npm run build
    ```
    The build output will be in the `dist` folder.

## 📂 Project Structure

```
/
├── client/
│   ├── public/             # Static assets (images, icons)
│   └── src/
│       ├── components/     # React components
│       │   ├── contact/    # Contact form components
│       │   ├── home/       # Landing page sections (Hero, Stats, etc.)
│       │   ├── layout/     # Global layout (Navbar, Footer)
│       │   ├── projects/   # Project card and gallery components
│       │   └── ui/         # Reusable UI primitives (Buttons, Inputs, etc.)
│       ├── hooks/          # Custom hooks (use-mobile, use-toast)
│       ├── lib/            # Utilities and Configuration
│       │   ├── data.ts     # CENTRAL DATA FILE (Edit this to change content)
│       │   └── utils.ts    # Helper functions
│       ├── pages/          # Application routes/pages
│       └── App.tsx         # Main app entry point
├── package.json            # Project dependencies and scripts
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite build configuration
```

## 🎨 Customization

This portfolio is designed to be easily customizable without deep code changes.

### 1. Update Content (`client/src/lib/data.ts`)
Open `client/src/lib/data.ts`. This file contains all the static data for the site:
-   **Projects:** Add your own projects to the `projects` array.
-   **Skills:** Update the `skillCategories` to reflect your tech stack.
-   **Experience:** Modify the `experiences` array.
-   **Services:** Change the `services` list.

### 2. Update Images
Place your images in `client/public/images/`.
-   Update the references in `data.ts` (e.g., `image: "/images/your-project.png"`).
-   Replace default assets like `professional_developer_avatar.png` with your own photo.

### 3. Styling
Global styles are defined in `client/src/index.css`. Since this project uses Tailwind CSS, most styling changes can be made directly in the components or by updating the Tailwind configuration.

## 🚢 Deployment

This project is a static site (SPA) and can be deployed to any static hosting provider.

### Vercel / Netlify / Render
1.  Push your code to a Git repository (GitHub/GitLab).
2.  Connect your repository to the hosting platform.
3.  **Build Settings:**
    -   **Framework Preset:** Vite
    -   **Build Command:** `npm run build`
    -   **Output Directory:** `dist`
4.  Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).
