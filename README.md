# A project management tool using all the latest and greatest technology.

## Run whole project with

## Project Structure.

frontend/
├── src/
│ ├── app/ # Application-level setup
│ │ ├── store.ts # Redux store setup
│ │ └── apiSlice.ts # RTK Query API slice
│ ├── assets/ # Static assets (images, icons, etc.)
│ │ └── logo.svg
│ ├── components/ # Shared UI components
│ │ ├── Button.tsx
│ │ ├── Modal.tsx
│ │ ├── Navbar.tsx
│ │ └── Sidebar.tsx
│ ├── features/ # Feature-based slices and components
│ │ ├── auth/ # Authentication logic
│ │ │ ├── AuthSlice.ts
│ │ │ └── LoginForm.tsx
│ │ ├── projects/ # Project-specific logic
│ │ │ ├── ProjectSlice.ts
│ │ │ └── ProjectBoard.tsx
│ │ ├── tasks/ # Task-specific logic
│ │ ├── TaskSlice.ts
│ │ └── TaskCard.tsx
│ ├── hooks/ # Custom hooks
│ │ ├── useAuth.ts
│ │ └── useSocket.ts
│ ├── layouts/ # App layouts
│ │ ├── DashboardLayout.tsx
│ │ └── AuthLayout.tsx
│ ├── pages/ # Application pages
│ │ ├── Dashboard.tsx
│ │ ├── LoginPage.tsx
│ │ └── NotFoundPage.tsx
│ ├── routes/ # App routing logic
│ │ └── AppRoutes.tsx
│ ├── styles/ # Global and shared styles
│ │ ├── index.css
│ │ └── tailwind.css
│ ├── types/ # Global TypeScript types
│ │ ├── auth.d.ts
│ │ ├── project.d.ts
│ │ └── task.d.ts
│ ├── App.tsx # Main app component
│ ├── index.tsx # React entry point
│ └── react-app-env.d.ts # TypeScript environment definitions
├── public/ # Public assets
│ ├── index.html
│ └── favicon.ico
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS configuration
├── webpack.config.js # Webpack configuration
├── tsconfig.json # TypeScript configuration
└── package.json

backend/
├── src/
│ ├── config/ # Configuration files
│ │ ├── db.ts # MongoDB connection setup
│ │ └── jwt.ts # JWT utility functions
│ ├── controllers/ # Request handlers
│ │ ├── authController.ts
│ │ ├── projectController.ts
│ │ └── taskController.ts
│ ├── middlewares/ # Express middlewares
│ │ ├── authMiddleware.ts
│ │ └── errorHandler.ts
│ ├── models/ # MongoDB models
│ │ ├── User.ts
│ │ ├── Project.ts
│ │ └── Task.ts
│ ├── routes/ # Express routes
│ │ ├── authRoutes.ts
│ │ ├── projectRoutes.ts
│ │ └── taskRoutes.ts
│ ├── services/ # Business logic
│ │ ├── authService.ts
│ │ ├── projectService.ts
│ │ └── taskService.ts
│ ├── utils/ # Utility functions
│ │ ├── logger.ts
│ │ └── validation.ts
│ ├── app.ts # Express app setup
│ └── server.ts # Server entry point
├── .env # Environment variables
├── tsconfig.json # TypeScript configuration
├── package.json
└── README.md
