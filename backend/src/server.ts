import app from "./app";
import connectDB from "./config/db";
import logger from "./utils/logger";
import dotenv from "dotenv";

// Connect to the database
dotenv.config();

connectDB();

// Start the server
const PORT = process.env.PORT || 6000;
app.listen(PORT, () => {
  logger.info(`Server running on http://localhost:${PORT}`);
});
