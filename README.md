# macOS Portfolio

A highly interactive, macOS-inspired portfolio website built with React and Vite. This project mimics the look and feel of the macOS desktop environment, featuring a functional dock, window management system, and various "apps" to showcase skills, projects, and experience.

## 🚀 Features

-   **macOS Desktop Interface**: A realistic desktop environment with a wallpaper, menu bar, and draggable icons.
-   **Interactive Dock**: A fully functional dock with magnification effects and tooltips, launching various applications.
-   **Window Management**:
    -   Draggable and resizable windows.
    -   Minimize, maximize, and close functionality.
    -   Z-index management to bring active windows to the front.
-   **Finder App**: Navigate through "files" and "folders" to explore projects and about me sections.
-   **Safari Browser**: A mock browser window to display external links and project demos.
-   **Terminal**: A functional-looking terminal displaying tech stack and skills.
-   **Photos App**: A gallery view to showcase images in a bento-style grid layout.
-   **Resume Viewer**: A built-in PDF viewer to display and download the resume.
-   **Custom Animations**: Smooth GSAP animations for opening/closing windows, dock interactions, and loading screens.
-   **Responsive Design**: Adapted for various screen sizes (with some desktop-first features).

## 🛠️ Tech Stack

-   **Frontend Framework**: [React](https://reactjs.org/)
-   **Build Tool**: [Vite](https://vitejs.dev/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Animations**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/)
-   **State Management**: [Zustand](https://github.com/pmndrs/zustand)
-   **Icons**: [Lucide React](https://lucide.dev/)
-   **PDF Rendering**: [React-PDF](https://github.com/wojtekmaj/react-pdf)
-   **Utilities**: `clsx`, `react-draggable`

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Karansd44/Mac-Portfolio.git
    cd Mac-Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Run the development server:**
    ```bash
    npm run dev
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 🎨 Customization

-   **Content**: Update `src/constants/index.js` to modify the dock apps, navigation links, and portfolio content.
-   **Images**: Add your images to the `public/images` directory and reference them in the constants file.
-   **Styles**: Customize the look and feel using Tailwind CSS classes in the components and `src/index.css`.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

*Designed and developed by Karan S D.*
