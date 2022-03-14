//App setup and imports
require("dotenv").config();
const { default: mongoose } = require("mongoose");
const { getUserIdFromToken } = require("./middleware/getUserFromToken");
const { app } = require("./setup");
const port = process.env.PORT;

app.use(getUserIdFromToken);
app.use("/api/users", require("./routes/users"));
app.use("/api/userProfiles", require("./routes/userProfiles"));

//Startup server and connect to database
app.listen(port, async () => {
  try {
    console.log("Connecting to database...");
    await mongoose.connect(process.env.DB_URL, {
      useNewUrlParser: true,
    });
    console.log(`Connected to database @ ${Date.now()}`);
    console.log(`Server started on PORT:${process.env.port}`);
  } catch (error) {
    console.log(error);
  }
});
