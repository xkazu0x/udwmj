const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("sign-layout.ejs", { error: null, page: "signin" });
})

app.post("/", (req, res) => {
  const { email, password } = req.body;

  if (fs.existsSync("users.json")) {
    const users = JSON.parse(fs.readFileSync("users.json"));
    const user = users.find(u => u.email === email && u.password === password);
    if (user) return(res.redirect("/posts"));
  }

  return(res.render("sign-layout.ejs", { error: "Invalid email or password!", page: "signin" }));
})

app.get("/signup", (req, res) => {
  res.render("sign-layout.ejs", { error: null, page: "signup" });
})

app.post("/signup", (req, res) => {
  const { name, email, username, password } = req.body;
  if (!fs.existsSync("users.json")) fs.writeFileSync("users.json", "[]");

  const users = JSON.parse(fs.readFileSync("users.json"));
  users.push({ name, email, username, password });

  fs.writeFileSync("users.json", JSON.stringify(users));
  return(res.redirect("/"));
})

app.get("/posts", (req, res) => {
  const posts = JSON.parse(fs.readFileSync("posts.json"));
  res.render("home-layout.ejs", { page: "posts",  posts });
})

app.get("/projects", (req, res) => {
  res.render("home-layout.ejs", { page: "projects" });
})

app.get("/resume", (req, res) => {
  res.render("home-layout.ejs", { page: "resume" });
})

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
