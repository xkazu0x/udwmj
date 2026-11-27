const express = require("express");
const fs = require("fs");

const app = express();
app.set("view engine", "ejs")
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

////////////////////////////////
// NOTE: Sign in

app.get("/", (req, res) => {
  res.render("sign-layout", { error: null, page: "signin" });
})

app.post("/", (req, res) => {
  const { email, password } = req.body;
  if (fs.existsSync("./tmp/users.json")) {
    const users = JSON.parse(fs.readFileSync("./tmp/users.json"));
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      return(res.redirect("/posts"));
    }
  }
  return(res.render("sign-layout", { error: "Invalid email or password!", page: "signin" }));
})

////////////////////////////////
// NOTE: Sign up

app.get("/signup", (req, res) => {
  res.render("sign-layout", { error: null, page: "signup" });
})

app.post("/signup", (req, res) => {
  const { name, email, username, password, confirm_password } = req.body;

  if (password !== confirm_password) {
    return(res.render("sign-layout", { error: "The passwords does not match!", page: "signup" }));
  }

  fs.mkdirSync("tmp", { recursive: true });
  if (!fs.existsSync("./tmp/users.json")) fs.writeFileSync("./tmp/users.json", "[]");

  const users = JSON.parse(fs.readFileSync("./tmp/users.json"));
  users.push({ name, email, username, password });

  fs.writeFileSync("./tmp/users.json", JSON.stringify(users));
  return(res.redirect("/"));
})

////////////////////////////////
// NOTE: Landing Page

// NOTE: posts
app.get("/posts", (req, res) => {
  const posts = JSON.parse(fs.readFileSync("./data/posts.json"));
  res.render("page-layout", { page: "posts", data: posts });
})

// NOTE: tasks
app.get("/tasks", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("./data/tasks.json"));
  res.render("page-layout", { page: "tasks", data: tasks });
})

app.get("/tasks/:id", (req, res) => {
  const tasks = JSON.parse(fs.readFileSync("./data/tasks.json"));
  const task = tasks.find(t => t.id === req.params.id)
  if (!task) {
    return(res.status(404).send("Task not found"));
  }
  res.render("show-layout", { page: "tasks", data: task });
})

// NOTE: resume
app.get("/resume", (req, res) => {
  res.render("page-layout", { page: "resume" });
})

const PORT = 8080;
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
