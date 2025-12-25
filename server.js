const express = require("express");
const app = express();
const sequelize = require("./config/db");
const taskRoutes = require("./routes/tasks");

app.use(express.json());
app.use("/tasks", taskRoutes);

const PORT = process.env.PORT || 3000;

// Sync database and start server
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
