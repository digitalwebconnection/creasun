# Creasun Solar

Creasun Solar is a comprehensive full-stack web application built for a solar energy company. It features a modern, responsive public-facing website and a secure admin dashboard for content management.

## 🚀 Features

*   **Public Facing Website**: Engaging pages including Home, About Us, Projects, Services (Residential, Commercial, Industrial, Ground-mounted), Blog, and Contact Us.
*   **Admin Dashboard**: Secure authentication and content management system for managing blogs, projects, and other dynamic content.
*   **Modern UI/UX**: Built with React, Tailwind CSS, and Framer Motion for smooth animations and responsive design.
*   **Rich Text Editing**: Integrated Tiptap editor for creating and formatting blog posts and content.
*   **Customer Engagement**: Integrated WhatsApp Chatbot for instant customer support.
*   **Performance Monitoring**: Vercel Speed Insights integrated for performance tracking.

## 💻 Tech Stack

### Frontend
*   **Framework**: [React 19](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
*   **Routing**: [React Router DOM](https://reactrouter.com/)
*   **Animations**: [Framer Motion](https://www.framer.com/motion/)
*   **Editor**: [Tiptap](https://tiptap.dev/)
*   **Other**: jsPDF, React Helmet Async, Lucide React

### Backend
*   **Runtime**: [Node.js](https://nodejs.org/)
*   **Framework**: [Express.js](https://expressjs.com/)
*   **Database**: [MongoDB](https://www.mongodb.com/) with [Mongoose](https://mongoosejs.com/)
*   **File Uploads & Storage**: [Multer](https://github.com/expressjs/multer) & [Cloudinary](https://cloudinary.com/)
*   **Other**: Cors, Compression, Dotenv

## 📂 Project Structure

```text
creasun/
├── backend/            # Express.js REST API
│   ├── config/         # Database and third-party configurations
│   ├── controllers/    # Route controllers
│   ├── middleware/     # Custom middlewares (auth, upload, etc.)
│   ├── models/         # Mongoose schemas
│   ├── routes/         # API routes
│   └── server.js       # Entry point
└── frontend/           # React frontend application
    ├── src/
    │   ├── assets/     # Static assets like images
    │   ├── component/  # React components and pages
    │   ├── lib/        # Utility functions
    │   ├── App.tsx     # Main application routing
    │   └── main.tsx    # Entry point
    └── package.json
```

## 🛠️ Getting Started

### Prerequisites
*   Node.js (v18 or higher recommended)
*   MongoDB instance (local or Atlas)
*   Cloudinary account (for image uploads)

### Installation

1.  **Clone the repository** (if applicable):
    ```bash
    git clone <repository-url>
    cd creasun
    ```

2.  **Backend Setup**:
    ```bash
    cd backend
    npm install
    ```
    *   Create a `.env` file in the `backend` directory and add your environment variables (MongoDB URI, Cloudinary credentials, JWT Secret, etc.).
    *   Start the development server:
        ```bash
        npm run dev
        ```

3.  **Frontend Setup**:
    ```bash
    cd ../frontend
    npm install
    ```
    *   Create a `.env` file in the `frontend` directory for any necessary API URLs or public keys.
    *   Start the development server:
        ```bash
        npm run dev
        ```

## 📜 License

[Add License Information Here]