# **Project Management Tool**

A modern project management tool built using the latest and greatest technologies, featuring a clean and responsive design with animations, and powered by a robust backend API.

---

## **Technologies Used**

### **Frontend**

- **React** with **TypeScript**
- **Redux Toolkit** (with RTK Query for state management and data fetching)
- **Tailwind CSS** for modern styling
- **Framer Motion** for animations
- **Webpack** and **PostCSS** for optimized builds

### **Backend**

- **Node.js** with **TypeScript**
- **Express.js** for API routing
- **MongoDB** for the database
- **JWT** for authentication
- **Mongoose** for object data modeling

---

## **Features**

- **Authentication**: Secure login and registration using JWT.
- **Project Management**: Create, update, and manage projects and tasks.
- **Task Board**: Kanban-style drag-and-drop task management.
- **Teams**: Collaborate with team members on shared projects.
- **Real-Time Updates**: Using websockets (future enhancement).
- **Responsive Design**: Works across all devices with Tailwind CSS.

---

## **Getting Started**

### **Prerequisites**

- **Node.js** and **npm** installed.
- **MongoDB** running locally or a cloud connection (e.g., MongoDB Atlas).

---

### **Setup Instructions**

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/project-management-tool.git
   cd project-management-tool
   ```

2. Install dependencies:

   - **Frontend**:
     ```bash
     cd frontend
     npm install
     ```
   - **Backend**:
     ```bash
     cd backend
     npm install
     ```

3. Add environment variables:

   - Create a `.env` file in the `backend` directory with the following:
     ```
     PORT=5000
     MONGO_URI=your_mongo_connection_string
     JWT_SECRET=your_secret_key
     ```

4. Run the app:

   ```bash
   npm run dev
   ```

   This will concurrently start both the frontend and backend.

5. Open the app:
   - Frontend: [http://localhost:3000](http://localhost:3000)
   - Backend API: [http://localhost:5000](http://localhost:5000)

---

## **Project Structure**

### **Frontend**

```
frontend/
├── src/
│   ├── app/                # Application-level setup
│   │   ├── store.ts        # Redux store setup
│   │   └── apiSlice.ts     # RTK Query API slice
│   ├── assets/             # Static assets (images, icons, etc.)
│   ├── components/         # Shared UI components
│   ├── features/           # Feature-specific slices and components
│   ├── hooks/              # Custom hooks
│   ├── layouts/            # App layouts
│   ├── pages/              # Application pages
│   ├── routes/             # App routing logic
│   ├── styles/             # Global and shared styles
│   ├── types/              # Global TypeScript types
│   ├── App.tsx             # Main app component
│   ├── index.tsx           # React entry point
│   └── react-app-env.d.ts  # TypeScript environment definitions
├── public/                 # Public assets
├── tailwind.config.js      # Tailwind configuration
├── postcss.config.js       # PostCSS configuration
├── webpack.config.js       # Webpack configuration
└── tsconfig.json           # TypeScript configuration
```

### **Backend**

```
backend/
├── src/
│   ├── config/             # Configuration files
│   ├── controllers/        # Request handlers
│   ├── middlewares/        # Express middlewares
│   ├── models/             # MongoDB models
│   ├── routes/             # Express routes
│   ├── services/           # Business logic
│   ├── utils/              # Utility functions
│   ├── app.ts              # Express app setup
│   └── server.ts           # Server entry point
├── .env                    # Environment variables
├── tsconfig.json           # TypeScript configuration
└── package.json
```

---

## **Contributing**

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add feature-name"
   ```
4. Push to your fork and submit a pull request.

---

## **License**

This project is licensed under the MIT License.
