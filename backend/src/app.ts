import express from "express";
import { setupMiddlewares } from "./middlewares/setupMiddlewares";
import authRoutes from "./routes/authRoutes";

const app = express();

// Setup middlewares
setupMiddlewares(app);

// Routes
app.use("/auth", authRoutes);

// Default route for API information
app.get("/", (req, res) => {
  res.json({
    message: "Welcome to Jacob's Project Management Tool API",
    routes: {
      users: "/api/v1/users",
      friends: "/api/v1/friends",
    },
  });
});

// Default route for undefined endpoints
app.use((req, res) => {
  res.status(404).json({ error: "Route not found :-(" });
});

export default app;
