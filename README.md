# KYC Frontend

A modern, responsive KYC verification interface built with React 19 and Vite. This application guides users through the Know Your Customer (KYC) process, including ID Card upload and Selfie verification with liveness checks.

## Tech Stack

This project uses the latest modern web technologies:

- **Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [TailwindCSS v4](https://tailwindcss.com/) & Vanilla CSS
- **Routing:** [React Router DOM v7](https://reactrouter.com/)
- **HTTP Client:** [Axios](https://axios-http.com/)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Camera:** [React Webcam](https://www.npmjs.com/package/react-webcam)
- **Utilities:** `clsx`, `tailwind-merge`

## Folder Structure

The source code is organized as follows in `src/`:

- **`api/`**: Contains Axios instances and functions for communicating with the Backend API.
- **`assets/`**: Static assets such as images, logos, and global font files.
- **`components/`**: Reusable UI components (buttons, input fields, cards, webcam wrapper, etc.).
- **`context/`**: React Context providers for global state management (e.g., storing current KYC session ID and step status).
- **`pages/`**: Main page views corresponding to routes (e.g., Welcome, Upload ID, Selfie, Result).
- **`App.jsx`**: Main application component and routing setup.
- **`index.css`**: Global styles and Tailwind directives.

## Features

- **Dynamic UI**: Smooth transitions and sleek, premium design.
- **Camera Integration**: In-browser camera capture for ID and Selfie.
- **Real-time Feedback**: Instant visual feedback on upload status.
- **Responsive**: Fully optimized for desktop and mobile devices.

## Setup & Run

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run development server:
   ```bash
   npm run dev
   ```
3. Build for production:
   ```bash
   npm run build
   ```

## Future Works / Improvements

- **Animations**: Add frame-framer-motion for even smoother page transitions.
- **Mobile Optimization**: Improve camera constraints for specific mobile device behaviors.
- **Accessibility**: Enhance ARIA labels and keyboard navigation support.
- **State Management**: Migrate to TanStack Query for better server-state handling.
