# Modern Developer Portfolio

A premium, high-performance portfolio website designed to showcase software development projects and technical skills. Built with modern web technologies, focusing on aesthetics, accessibility, and performance.

## 🚀 Features

- **Premium UI/UX:** Immersive design with glassmorphism, parallax scrolling, and fluid animations using **Framer Motion**.
- **Responsive Design:** Fully optimized for all devices, from mobile to extra-large desktops.
- **Interactive Components:**
    -   Dynamic "Tech Stack" grid with hover effects.
    -   Project showcase with detailed views.
    -   Smooth page transitions and gesture-based interactions.
- **Theme System:** Built-in Dark/Light mode support (defaulting to system preference).
- **Performance:** Lightning-fast load times powered by **Vite** and **React 19**.

## 🛠️ Tech Stack

This project is built using the following technologies:

-   **Framework:** [React 19](https://react.dev/)
-   **Build Tool:** [Vite](https://vitejs.dev/)
-   **Language:** [TypeScript](https://www.typescriptlang.org/)
-   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
-   **Animations:** [Framer Motion](https://www.framer.com/motion/)
-   **Routing:** [Wouter](https://github.com/molefrog/wouter)
-   **UI Components:** [Shadcn UI](https://ui.shadcn.com/) (Radix UI primitives)
-   **Icons:** [Lucide React](https://lucide.dev/)

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

## 📂 Project Structure

```
/
├── client/
│   ├── public/             # Static assets
│   └── src/
│       ├── components/     # UI and Feature components
│       │   ├── home/       # Homepage sections
│       │   ├── layout/     # Navbar, Footer
│       │   ├── projects/   # Project related components
│       │   └── ui/         # Shared UI components (Buttons, Cards, etc.)
│       ├── hooks/          # Custom React hooks
│       ├── lib/            # Utilities and Data constants
│       ├── pages/          # Route components (Home, About, Projects, Contact)
│       └── App.tsx         # Main application component
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## 🎨 Customization

You can easily customize the content by editing the data files:

-   **Personal Info & Projects:** Edit `client/src/lib/data.ts` to update your bio, experience, projects, and skills.
-   **Styling:** Modify `client/src/index.css` or `tailwind.config.js` (if added) to change global styles and themes.

## 🚢 Deployment

This project is static-site ready and can be easily deployed to platforms like **Vercel**, **Netlify**, or **Render**.

### Vercel

1.  Push your code to a Git repository.
2.  Import the project into Vercel.
3.  Vercel should automatically detect Vite.
4.  Deploy!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).