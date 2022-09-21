import Navbar from "../Components/Navbar";
import axios from "axios";
const app = document.getElementById("app");

window.handleLogin = (event) => {
  event.preventDefault();

  let email = event.target.email.value;
  let password = event.target.password.value;

  axios
    .post("http://localhost:3000/login", {
      email: email,
      password: password,
    })
    .then((res) => {
      alert("Login Berhasil");
      localStorage.setItem("userData", JSON.stringify(res.data));
      window.location.href = "/";
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

export default function Login() {
  //ubah doc title
  document.title = "Login Page";
  app.innerHTML = `
    ${Navbar()}
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto">
        <h1 class="text-orange-500 p-4">Login Page</h1>

        <form class="w-[320px] flex flex-col gap-4 mx-auto" autocomplete="off" onsubmit="handleLogin(event)">
        <div class="flex flex-col gap-2 font-light">
            <label for="email">Email</label>
            <input type="email" id="email" class="h-10 px-3 font-light rounded-md
            border-slate-200 border-[2px] "/>
        </div>

        <div class="flex flex-col gap-2 font-light">
            <label for="password">Password</label>
            <input type="password" id="password" class="h-10 px-3 font-light rounded-md
            border-slate-200 border-[2px]"/>
        </div>

        <button class="h-10 w-[30%] bg-orange-500 text-white rounded-md ml-auto">
        Login
        </button>
      </form>
    </div>
    `;
}
