const express = require("express");

const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

// --- Sign in ----------------------------------------------------------------

const user = {
  email: "rclm@email.com",
  password: "rclm!123",
};

app.get("/", (req, res) => {
  res.render("signin.ejs", { error: null });
})

app.post("/", (req, res) => {
  const { email, password } = req.body;
  if (email === user.email && password === user.password) {
    return(res.redirect("/home"));
  } else {
    return(res.render("signin.ejs", { error: "Invalid email or password!"}));
  }
})

// --- Sign up ----------------------------------------------------------------

app.get("/signup", (req, res) => {
  res.render("signup.ejs");
})

app.post("/signup", (req, res) => {
  return(res.redirect("/"));
})

// --- Home -------------------------------------------------------------------

app.get("/home", (req, res) => {
  res.render("home.ejs");
})

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
