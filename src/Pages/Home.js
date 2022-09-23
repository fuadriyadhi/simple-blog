import axios from "axios";
import Navbar from "../Components/Navbar";

const app = document.getElementById("app");

export default function Home() {
  //ubah doc title
  document.title = "Home Page";

  axios.get("http://localhost:3000/blogs?_sort=id&_order=desc").then((res) => {
    app.innerHTML += Navbar();
    res.data.forEach((e) => {
      app.innerHTML += `
      <div class="flex flex-col gap-4 max-w-[900px] shadow-lg mx-auto my-6 p-6 bg-white rounded-md">
        <h1 class="text-4xl">${e.judul}</h1>
        <small>${e.author} - ${e.createdAt}</small>
        <img src="${e.img} alt="${e.judul}"  class="w-full h-[280px] my-4 object-cover rounded-lg"/>
        <p>${e.content}</p>
        <a class="bg-slate-700 w-[22%] text-center py-2 rounded-md ml-auto text-white" href="/details?id=${e.id}">Lihat Selengkapnya >>></a>
      </div>
      `;
    });
  });

  // app.innerHTML = `
  //   ${Navbar()}
  //   <div class="w-screen min-h-screen max-w-[1440px] mx-auto">
  //       <h1 class="text-orange-500 p-4">Home Page</h1>
  //   </div>
  //   `;
}
