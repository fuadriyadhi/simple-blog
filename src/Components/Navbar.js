window.handleLogout = () => {
  //clear localstorage data
  localStorage.clear();

  //back to login page
  window.location.href = "/login";
};

export default function Navbar() {
  let userData = localStorage.getItem("userData");

  return `
    <nav class="w-full h-20 flex bg-orange-500">
        <div class="w-full max-w-[1440px] flex items-center justify-start px-4 mx-auto">
            <img src="./logo.svg" alt="logo kami" class="h-8 mr-2 cursor-pointer select-none"/>
            <h1 class="text-white text-3xl font-light select-none cursor-pointer">
            Go Blogs</h1>

            ${
              userData
                ? `
            <menu class="flex gap-4 text-white font-light items-center ml-auto">
                <a href="/">Home</a>
                <a href="/addBlog">Add-Blog</a>
                <a class="cursor-pointer" onclick="handleLogout()">LogOut</a>
                <span class="bg-orange-700 px-4 py-2 rounded-full cursor-default" >${JSON.parse(userData).user.email}</span>
            </menu>`
                : `
            <menu class="flex gap-4 text-white font-light items-center ml-auto">
                <a href="/">Home</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </menu>`
            }
        </div>
    </nav>
    `;
}
