import Navbar from "../Components/Navbar";
import axios from "axios";
const app = document.getElementById("app");

window.handleBlog = (event) => {
  event.preventDefault();

  let userData = JSON.parse(localStorage.getItem("userData"));
  let judul = event.target.judul.value;
  let img = event.target.img.value;
  let content = event.target.content.value;

  if (!judul || !img || !content) {
    return alert("Tolong Lengkapi Data!!!");
  }

  axios
    .post("http://localhost:3000/blogs", {
      userId: userData.user.id,
      author: userData.user.email,
      judul: judul,
      img: img,
      content: content,
      createdAt: new Date().toLocaleDateString(),
    })
    .then((res) => {
      alert("Upload Succsess");
      window.location.href = "/";
    })
    .catch((err) => {
      alert(err.response.data);
    });
};

export default function AddBlog() {
  //ubah doc title
  document.title = "Add Blog";

  app.innerHTML = `
    ${Navbar()}
    <div class="w-screen min-h-screen max-w-[1440px] mx-auto">
        <form class="w-[500px] flex flex-col gap-4 mx-auto mt-10" autocomplete="off" onsubmit="handleBlog(event)">
            <div class="flex flex-col gap-2 font-light">
                <label for="judul">Judul</label>
                <input type="text" id="judul" class="w-full px-3 h-10 font-light rounded-md border-slate-200 border-[2px]"/>
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="img">Link Gambar</label>
                <input type="text" id="img" class="w-full px-3 h-10 font-light rounded-md border-slate-200 border-[2px]"/>
            </div>

            <div class="flex flex-col gap-2 font-light">
                <label for="content">Konten</label>
                <textarea id="content" class="w-full p-3 h-[300px] font-light rounded-md border-slate-200 border-[2px]"></textarea>
            </div>

            <button class="h-10 w-[30%] bg-slate-700 text-white rounded-md ml-auto" type="submit">Submit</button>
        </form>
    </div>
    `;
}
