let isUser = document.querySelector(".logined-user")
let findedUser = JSON.parse(localStorage.getItem("user"))

isUser.innerHTML = `${findedUser.firstName} ${findedUser.lastName}`

let logOut = document.querySelector(".log-out-btn")

//Modal
let modalWrapper = document.querySelector(".modal-wrapper")
let modalInner = document.querySelector(".modal-inner")
modalWrapper.addEventListener("click", (e) => e.target.id == "wrapper" && modalWrapper.classList.add("scale-0"))

//Change img
let changeInput = document.querySelector(".change-img-input")
let changeImg = document.querySelector(".change-img")
changeImg.src = "./images/admin-img.svg"

changeInput.addEventListener("change", function (e) {
  changeImg.src = URL.createObjectURL(e.target.files[0])
   changeImg.className = "w-[100px] h-[100px] rounded-full mx-auto mb-[12px]"
})


//Sign out start
logOut.addEventListener("click", () => {
    modalWrapper.classList.remove("scale-0")
    modalInner.innerHTML = `
    <div class="w-[600px]">
    <div class="flex ">
    <h1 class="font-bold mb-[20px] text-[35px] text-center">Are you sure you want to log out?</h1>
     <svg class="w-[35px] h-[35px] mt-[10px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048" style="enable-background:new 0 0 2048 2048" xml:space="preserve"><style>.st12{fill:#f1a221}.st20{fill:#542a19}</style><g id="Layer_6"><linearGradient id="SVGID_1_" gradientUnits="userSpaceOnUse" x1="280.28" y1="1024" x2="1767.72" y2="1024"><stop offset="0" style="stop-color:#fedc52"/><stop offset=".995" style="stop-color:#fcb117"/></linearGradient><circle cx="1024" cy="1024" r="743.72" style="fill:url(#SVGID_1_)"/><g style="opacity:.81"><path d="M540.23 770.15c-2.07 0-4.16-.21-6.27-.66-16.21-3.44-26.55-19.38-23.11-35.58 21.98-103.42 83.1-188.9 176.75-247.22 76.03-47.35 171.5-74.41 262.28-74.41.78 0 1.54 0 2.31.01 16.57.08 29.93 13.58 29.85 30.15-.08 16.52-13.5 29.85-30 29.85h-1.93c-130.25 0-337.77 72.7-380.58 274.11-2.98 14.09-15.44 23.75-29.3 23.75z" style="fill:#fff"/></g><path class="st12" d="M1061.18 1422.59c-12.02 28.52-71.72 25.18-123.34 1.81-36.17-16.38-77.31-18.96-114.01-3.79-6.94 2.87-10.51 4.91-10.51 4.91s80.01-5.6 88.81 32.27c3.74 16.36.18 33.43-5.15 47.56-7.11 18.76-17.16 32.36-17.16 32.36s36.27 26.31 24.27 62.94c-4.27 13.16-10.49 24.98-16.71 34.85-11.11 17.69-22.31 28.8-22.31 28.8s10.4 39.56-33.25 70.77c-23.74 16.89-49.25 15.47-67.65 10.67-15.56-4.09-26.05-10.67-26.05-10.67s-110.33 85.35-220.65-24.98c-62.41-66.59-64.54-160.29-8.36-233.1 2.31-2.93 4.53-5.96 6.58-8.89 15.38-21.07 26.67-41.52 35.21-60.45 19.47-43.47 24-79.12 26.94-97.17 7.29-44.99-3.11-90.86 16.63-97.88 29.25-10.31 66.23-.45 83.3 60.36 7.56 26.76 5.69 50.41-3.2 75.3-4.45 12.36-10.67 25.07-18.23 38.67 183.05-79.74 204.73-67.75 253.72-62.06 48.96 5.79 166.15 61.98 151.12 97.72z"/><path class="st12" d="M879.83 1537.72s-37.52-15.64-104.37 9.16c24.99-24.99 55.73-39.47 84.96-43.05 18.3-2.24 30.34 19.03 19.41 33.89zM865.29 1664.09l-.23.23s-16.58-39.47-94.92-24.47c35.03-21.82 59.79-28.13 83.9-21.38 19.7 5.51 25.59 31.02 11.25 45.62zM674.55 1348.27c-4.45 12.36-10.67 25.07-18.23 38.67l-.09.09s-62.05 16.62-140.55 81.08c15.38-21.07 26.67-41.52 35.21-60.45 19.47-43.47 24-79.12 26.94-97.17 7.29-44.99-3.11-90.86 16.63-97.88 29.25-10.31 66.23-.45 83.3 60.36 7.55 26.76 5.68 50.41-3.21 75.3zM794.03 1704.85c-9.87 13.87-21.42 29.6-29.87 40.89-15.56-4.09-26.05-10.67-26.05-10.67s34.41-25.77 55.92-30.22z"/><path d="M752.56 1275.96c18.33-46.53 65.23-115.35 156.87-128.23 112.42-9.53 264.46 134.53 328.43 201.27 4.92 5.13-1.46 13.09-7.54 9.4-70.84-43.1-222.93-130.89-297.8-138.09-72.34-6.96-136.48 36.54-170.62 62.71-4.89 3.73-11.6-1.34-9.34-7.06z" style="opacity:.76;fill:#461515"/><g><ellipse class="st20" cx="775.69" cy="837.96" rx="62.77" ry="88.74"/><ellipse class="st20" cx="1272.31" cy="837.96" rx="62.77" ry="88.74"/></g></g></svg>
    </div>
    <div class="flex items-center justify-center gap-[20px]">
    <button onclick="handleCancel()" class="hover:bg-transparent hover:text-green-700   border-[2px] border-green-700 duration-300 w-[48%] p-[8px] bg-green-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px] " >
    No
    </button>
    <button onclick="handleSignOut()" class="hover:bg-transparent hover:text-red-700  border-[2px] border-red-700 duration-300 w-[48%] p-[8px] bg-red-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px] ">
    Yes
    </button>
    </div>
    </div>
    `
})

function handleCancel(){
    modalWrapper.classList.add("scale-0")
}
function handleSignOut(){
    modalWrapper.classList.add("scale-0")
    setTimeout(() => {
        localStorage.clear()
        location.pathname = "/"
    },800)
}

