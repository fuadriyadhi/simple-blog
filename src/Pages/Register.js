import Navbar from "../Components/Navbar";
import axios from "axios";
const app = document.getElementById("app");

window.handleRegister = (event) => {
  event.preventDefault();

  let email = event.target.email.value;
  let password = event.target.password.value;
  let password2 = event.target.password2.value;

  //validator
  if (!email || !password || !password2) {
    return alert("Silahkan Lengakpi Data");
  }

  if (password !== password2) {
    return alert("Password Harus Sama!!!");
  }

  axios
    .post("http://localhost:3000/register", {
      email: email,
      password: password,
    })
    .then((res) => {
      alert("Registrasi Berhasil");
      console.info(res)
      window.location.href = "/login";
    })
    .catch((err) => {
      alert(err.response.data);
      console.error(err);
    });
};

export default function Register() {
  //ubah doc title
  document.title = "Register Page";
  app.innerHTML = `
  ${Navbar()}
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto">
        <h1 class="text-orange-500 p-4">Register Page</h1>
        
        <form class="w-[320px] flex flex-col gap-4 mx-auto" autocomplete="off" onsubmit="handleRegister(event)">
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

          <div class="flex flex-col gap-2 font-light">
              <label for="password2">Repeat Password</label>
              <input type="password" id="password2" class="h-10 px-3 font-light rounded-md
              border-slate-200 border-[2px]"/>
          </div>

          <button class="h-10 w-[30%] bg-orange-500 text-white rounded-md ml-auto">
          Register
          </button>
        </form>
    </div>
    `;
}
