import Page404 from "./src/Pages/404";
import AddBlog from "./src/Pages/AddBlog";
import Home from "./src/Pages/Home";
import Login from "./src/Pages/Login";
import Register from "./src/Pages/Register";
import "./style.css";

const page = window.location.pathname;
const userData = localStorage.getItem("userData");

switch (page) {
  case "/":
    Home();
    break;

  case "/login":
    userData ? (window.location.href = "/") : Login();
    break;

  case "/register":
    userData ? (window.location.href = "/") : Register();
    break;

  case "/addBlog":
    userData ? AddBlog() : (window.location.href = "/login");
    break;

  default:
    Page404();
}
