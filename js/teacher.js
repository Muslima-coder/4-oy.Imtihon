// let elProductTable = document.querySelector(".product-table")
// let products = JSON.parse(localStorage.getItem("products")) || []

// let elBearWrapper = document.querySelector(".bear-wrapper")
// let elMainTable = document.querySelector(".teachers-table")
// let elSearchInput = document.querySelector(".search-input")


// function handleAddTeacherClick() {
//   modalWrapper.classList.remove("scale-0")
//   modalInner.innerHTML = `
// <form autocomplete="off" class="add-teacher-form w-[981px] p-5 flex justify-around">
//   <div class="space-y-[35px]">
//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Full Name</span>
//       <input name="fullName" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Full Name" />
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Email address</span>
//       <input name="emailAddress" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Email address" />
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Subject</span>
//       <select name="chooseSubject" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
//         <option selected disabled value="0"> Subject </option>
//         <option> History </option>
//         <option> Biology</option>
//         <option> Chemistry</option>
//         <option> Mother Language</option>
//         <option> Russian Language</option>
//         <option> English Language</option>
//         <option> Geometry</option>
//         <option> Physics</option>
//         <option> Math</option>
//         <option> History of Uzbekistan</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">About</span>
//       <textarea name="aboutInput" required class="rounded-[4px] w-[400px] px-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] h-[172px]" placeholder="About"></textarea>
//     </label>
//   </div>

//   <div class="space-y-[35px]">
//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Class</span>
//       <select name="chooseClass" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
//         <option selected disabled> Class </option>
//         <option value="1"> 1</option>
//         <option value="2"> 2</option>
//         <option value="3"> 3</option>
//         <option value="4"> 4</option>
//         <option value="5"> 5</option>
//         <option value="6"> 6</option>
//         <option value="7"> 7</option>
//         <option value="8"> 8</option>
//         <option value="9"> 9</option>
//         <option value="10"> 10</option>
//         <option value="11"> 11</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Gender</span>
//       <select name="chooseGender" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
//         <option selected disabled value="0"> Gender </option>
//         <option value="0"> Male</option>
//         <option value="1"> Female</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Age</span>
//       <input name="age" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Age" />
//     </label>

//     <label>
//       <input class="add-choose-file hidden" type="file" name="file">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Import Img</span>
//       <img class="add-choosed-img mb-[12px] mx-auto" src="" alt="img" width="150" height="150" >
//     </label>

//     <button class="add-btn ml-[300px] cursor-pointer w-[120px] h-[40px] bg-[#509CDB] rounded-[8px] text-white font-semibold" type="submit">Add Teachers</button>
//   </div>
// </form>
// `
//   let elAddTeacherForm = document.querySelector(".add-teacher-form")
//   let elChooseFile = document.querySelector(".add-choose-file")
//   let elChooseImg = document.querySelector(".add-choosed-img")
//   let elSubmitBtn = document.querySelector(".add-btn")
  
//   elChooseFile.addEventListener("change",function (e) {
//     elChooseImg.src = URL.createObjectURL(e.target.files[0])
//   })

//   elAddTeacherForm.addEventListener("submit", function (evt) {
//     evt.preventDefault()

//     let teachersList = {
//       id:products[products.length - 1]?.id ? products[products.length - 1].id + 1 : 1,
//       imgURL: elChooseImg.src,
//       name: evt.target.fullName.value,
//       email: evt.target.emailAddress.value,
//       subject: evt.target.chooseSubject.value,
//       class: evt.target.chooseClass.value,
//       gender: evt.target.chooseGender.value,
//       about: evt.target.aboutInput.value,
//       age: evt.target.age.value,
//     }
    
//     products.push(teachersList)
//     localStorage.setItem("products", JSON.stringify(products))


//     setTimeout(() => {
//       elSubmitBtn.innerHTML = `<img class="w-[30px] h-[30px] mx-auto" src="./images/loading-white.png" alt="loading" >`
//       setTimeout(() => {
//         modalWrapper.classList.add("scale-0")
//         renderProducts(products, elProductTable)
//       }, 600)
//     }, 800)
//   })
// }

// function renderProducts(arr, list) {
//   if (products.length === 0) {
//     elBearWrapper.classList.remove("hidden");
//     elMainTable.classList.add("hidden");
//   } else {
//     elBearWrapper.classList.add("hidden");
//     elMainTable.classList.remove("hidden");
//     list.innerHTML = null
//     arr.forEach((item) => {
//       let elTr = document.createElement("tr")
//       elTr.className = "bg-white"
//       elTr.innerHTML = `
//       <td class=" py-[16px] bg-white flex justify-center items-center gap-[4.5px] ">
//         <img class=" w-[30px] h-[30px]" src="${item.imgURL}" alt="teacher add img" width="30" height="30">
//         <span class="font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.name}</span>
//       </td>
//       <td class=" py-[16px] bg-white">
//         <span class="flex justify-center font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.subject}</span>
//       </td>
//       <td class="texr-center py-[16px] bg-white text-center">
//         <span class="font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.class}</span>
//       </td>
//       <td class="texr-center py-[16px] bg-white">
//         <span class="flex justify-center font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.email}</span>
//       </td>
//       <td class="texr-center py-[16px] bg-white text-center">
//         <span class="font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.gender}</span>
//       </td>
//      <td class="py-[17px] text-center bg-white flex justify-center">
//         <button onclick="handleUpdateProduct(${item.id})" class="cursor-pointer">
//             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M2.75012 15.8125V19.2499H6.18752L16.3255 9.11191L12.8881 5.67234L2.75012 15.8125ZM18.9847 6.45268C19.0697 6.36793 19.1372 6.26722 19.1832 6.15635C19.2292 6.04547 19.2529 5.9266 19.2529 5.80655C19.2529 5.6865 19.2292 5.56763 19.1832 5.45675C19.1372 5.34588 19.0697 5.24517 18.9847 5.16041L16.8396 3.01529C16.7548 2.93027 16.6541 2.86281 16.5432 2.81679C16.4323 2.77076 16.3135 2.74707 16.1934 2.74707C16.0734 2.74707 15.9545 2.77076 15.8436 2.81679C15.7328 2.86281 15.632 2.93027 15.5473 3.01529L13.8697 4.69827L17.3071 8.13026L18.9847 6.45268Z" fill="#3F8C8E"/>
//             </svg>
//         </button>
//         <button onclick="handleDeleteProduct(${item.id})" class="cursor-pointer ml-[18px]">
//             <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path d="M11 1.57129C11.8064 1.57129 12.5818 1.8812 13.1661 2.43693C13.7503 2.99266 14.0986 3.75168 14.139 4.557L14.1429 4.71415H18.0715C18.2717 4.71437 18.4643 4.79105 18.61 4.92853C18.7556 5.066 18.8432 5.25389 18.8549 5.45381C18.8667 5.65373 18.8016 5.85059 18.6731 6.00416C18.5446 6.15773 18.3622 6.25642 18.1634 6.28007L18.0715 6.28557H17.4044L16.4772 17.7201C16.4174 18.4579 16.0821 19.1462 15.5379 19.648C14.9937 20.1499 14.2805 20.4285 13.5402 20.4284H8.45981C7.71955 20.4285 7.00639 20.1499 6.46219 19.648C5.91799 19.1462 5.58263 18.4579 5.52281 17.7201L4.59488 6.28557H3.9286C3.73615 6.28555 3.5504 6.21489 3.40659 6.08701C3.26278 5.95913 3.1709 5.78291 3.14838 5.59179L3.14288 5.49986C3.14291 5.30741 3.21356 5.12167 3.34145 4.97785C3.46933 4.83404 3.64554 4.74216 3.83667 4.71965L3.9286 4.71415H7.85717C7.85717 3.88061 8.18829 3.08121 8.77769 2.49181C9.36709 1.90241 10.1665 1.57129 11 1.57129ZM9.23217 8.83915C9.08977 8.83915 8.95219 8.89072 8.84487 8.98432C8.73755 9.07792 8.66775 9.20721 8.64838 9.34829L8.64288 9.42843V15.7141L8.64838 15.7943C8.66779 15.9353 8.7376 16.0646 8.84492 16.1581C8.95224 16.2517 9.0898 16.3032 9.23217 16.3032C9.37454 16.3032 9.5121 16.2517 9.61942 16.1581C9.72673 16.0646 9.79655 15.9353 9.81595 15.7943L9.82145 15.7141V9.42843L9.81595 9.34829C9.79659 9.20721 9.72679 9.07792 9.61947 8.98432C9.51215 8.89072 9.37457 8.83915 9.23217 8.83915ZM12.7679 8.83915C12.6255 8.83915 12.4879 8.89072 12.3806 8.98432C12.2733 9.07792 12.2035 9.20721 12.1841 9.34829L12.1786 9.42843V15.7141L12.1841 15.7943C12.2035 15.9353 12.2733 16.0646 12.3806 16.1581C12.4879 16.2517 12.6255 16.3032 12.7679 16.3032C12.9103 16.3032 13.0478 16.2517 13.1551 16.1581C13.2624 16.0646 13.3323 15.9353 13.3517 15.7943L13.3572 15.7141V9.42843L13.3517 9.34829C13.3323 9.20721 13.2625 9.07792 13.1552 8.98432C13.0479 8.89072 12.9103 8.83915 12.7679 8.83915ZM11 3.14272C10.6036 3.14259 10.2217 3.29232 9.93102 3.56189C9.64032 3.83146 9.46226 4.20095 9.43253 4.59629L9.4286 4.71415H12.5715L12.5675 4.59629C12.5378 4.20095 12.3597 3.83146 12.069 3.56189C11.7783 3.29232 11.3965 3.14259 11 3.14272Z" fill="#FF0202"/>
//             </svg>
//         </button>
//          <a class="cursor-pointer ml-[18px]" href="./more.html">
//          <img class="w-[22px] h-[22px]" src="./images/more-svg.svg" alt="more photo">
//          </a>
//     </td>   
//     `
//       list.appendChild(elTr)
//     })
//   }
// }

// renderProducts(products, elProductTable)

// //Search
// elSearchInput.addEventListener("input", (e) => {
//   let search = e.target.value.toLowerCase().trim();

//   let filtered = products.filter(teacher =>
//     teacher.name.toLowerCase().includes(search) ||
//     teacher.email.toLowerCase().includes(search)
//   )

//   renderProducts(filtered, elProductTable);
// })



// // Update Part 
// function handleUpdateProduct(id) {
//   let findedObj = products.find(item => item.id == id)
//   console.log(findedObj)
//   modalWrapper.classList.remove("scale-0")
//   modalInner.innerHTML = `
// <form autocomplete="off" class="update-teacher-form w-[981px] p-5 flex justify-around">
//   <div class="space-y-[35px]">
//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Full Name</span>
//       <input value="${findedObj.name}" name="fullName"  required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Full Name" />
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Email address</span>
//       <input value="${findedObj.email}" name="emailAddress" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Email address" />
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Subject</span>
//       <select name="chooseSubject" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
//         <option ${findedObj.subject.toLowerCase().includes("history") ? "selected" : ""} value="History"> History </option>
//         <option ${findedObj.subject.toLowerCase().includes("biology") ? "selected" : ""} value="Biology"> Biology</option>
//         <option ${findedObj.subject.toLowerCase().includes("chemistry") ? "selected" : ""} value="Chemistry">Chemistry</option>
//         <option ${findedObj.subject.toLowerCase().includes("mother ") ? "selected" : ""} value="Mother Language"> Mother Language</option>
//         <option ${findedObj.subject.toLowerCase().includes("russian") ? "selected" : ""} value="Russian Language"> Russian Language</option>
//         <option ${findedObj.subject.toLowerCase().includes("english") ? "selected" : ""} value="English Language"> English Language</option>
//         <option ${findedObj.subject.toLowerCase().includes("geometry") ? "selected" : ""} value="Geometry"> Geometry</option>
//         <option ${findedObj.subject.toLowerCase().includes("physics") ? "selected" : ""} value="Physics"> Physics</option>
//         <option ${findedObj.subject.toLowerCase().includes("math") ? "selected" : ""} value="Math"> Math</option>
//         <option ${findedObj.subject.toLowerCase().includes("history of Uzbekistan") ? "selected" : ""} value="History of Uzbekistan"> History of Uzbekistan</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">About</span>
//       <textarea name="aboutInput" required class="rounded-[4px] w-[400px] px-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] h-[172px]" placeholder="About">${findedObj.about}</textarea>
//     </label>
//   </div>

//   <div class="space-y-[35px]">
//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Class</span>
//       <select name="chooseClass" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
//         <option ${findedObj.class == "1" ? "selected" : ""} value="1"> 1</option>
//         <option ${findedObj.class == "2" ? "selected" : ""} value="2"> 2</option>
//         <option ${findedObj.class == "3" ? "selected" : ""} value="3"> 3</option>
//         <option ${findedObj.class == "4" ? "selected" : ""} value="4"> 4</option>
//         <option ${findedObj.class == "5" ? "selected" : ""} value="5"> 5</option>
//         <option ${findedObj.class == "6" ? "selected" : ""} value="6"> 6</option>
//         <option ${findedObj.class == "7" ? "selected" : ""} value="7"> 7</option>
//         <option ${findedObj.class == "8" ? "selected" : ""} value="8"> 8</option>
//         <option ${findedObj.class == "9" ? "selected" : ""} value="9"> 9</option>
//         <option ${findedObj.class == "10" ? "selected" : ""} value="10"> 10</option>
//         <option ${findedObj.class == "11" ? "selected" : ""} value="11"> 11</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Gender</span>
//       <select name="chooseGender" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
//         <option value="0" value="${findedObj.gender == "0" ? "selected" : ""}"> Male</option>
//         <option value="1" value="${findedObj.gender == "1" ? "selected" : ""}"> Female</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Age</span>
//       <input value="${findedObj.age}" name="age" required type="number" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Age" />
//     </label>

//     <label>
//       <input class="change-img-input hidden" type="file" name="file" required>
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Import Img</span>
//       <img class="change-img mb-[12px] mx-auto" src="${findedObj.imgURL}" alt="img" width="150" height="150" >
//     </label>

//     <button class="add-btn  ml-[300px] cursor-pointer w-[140px] h-[40px] bg-[#509CDB] rounded-[8px] text-white font-semibold" type="submit">Update Teachers</button>
//   </div>
// </form>
// `

//   let elUpdatePoolForm = document.querySelector(".update-teacher-form")
//   let elChooseFile = document.querySelector(".change-img-input")
//   let elChooseImg = document.querySelector(".change-img")
//   let elSubmitBtn = document.querySelector(".add-btn")

//   elUpdatePoolForm.addEventListener("submit", function(e){
//     e.preventDefault()
//     findedObj.name = e.target.fullName
//     findedObj.imgURL =  elChooseImg.src,
//     findedObj.name =  evt.target.fullName.value,  
//     findedObj.email = evt.target.emailAddress.value,
//     findedObj.subject = evt.target.chooseSubject.value,
//     findedObj.class = evt.target.chooseClass.value,
//     findedObj.gender = evt.target.chooseGender.value,
//     findedObj.about =  evt.target.aboutInput.value,
//     findedObj.age = evt.target.age.value,


//     // Update localStorage
//     localStorage.setItem("products", JSON.stringify(products));

//     setTimeout(() => {
//       elSubmitBtn.innerHTML = `<img class="w-[30px] h-[30px] mx-auto" src="./images/loading-white.png" alt="loading">`;
//       setTimeout(() => {
//         modalWrapper.classList.add("scale-0");
//         renderProducts(products, elProductTable);
//       }, 600);
//     }, 800);
//   })

//   elChooseFile.addEventListener("change", function (e) {
//     elChooseImg.src = URL.createObjectURL(e.target.files[0])
//     elChooseImg.className = "w-[100px] h-[100px] rounded-full mx-auto mb-[12px]"
//   })

// }


// // Delete Part start
// let handleDeleteProduct = (id) => {
//   modalWrapper.classList.remove("scale-0")
//   modalInner.innerHTML = `
//          <div class="w-[600px]">
//             <h1 class="font-bold mb-[20px] text-[35px] text-center">Do you wanna delete?</h1>
//             <div class="flex items-center justify-center gap-[20px]">
//                 <button onclick="handleCancel()" class="hover:opacity-[70%] duration-300 w-[48%] p-[8px] bg-green-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px]">Cancel</button>
//                 <button onclick="deleteProduct(${id})" class="hover:opacity-[70%] duration-300 w-[48%] p-[8px] bg-red-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px]">Delete</button>
//             </div>
//         </div>
//     `
// }
// function deleteProduct(id) {
//   let deleteId = products.findIndex(item => item.id == id)
  
//   products.splice(deleteId, 1)
//   renderProducts(products, elProductTable)
//   modalWrapper.classList.add("scale-0")
//   localStorage.setItem("products", JSON.stringify(products))
// }



let elProductTable = document.querySelector(".product-table")
let products = JSON.parse(localStorage.getItem("products")) || []

let elBearWrapper = document.querySelector(".bear-wrapper")
let elMainTable = document.querySelector(".teachers-table")
let elSearchInput = document.querySelector(".search-input")


function handleAddTeacherClick() {
  modalWrapper.classList.remove("scale-0")
  modalInner.innerHTML = `
<form autocomplete="off" class="add-teacher-form w-[981px] p-5 flex justify-around">
  <div class="space-y-[35px]">
    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Full Name</span>
      <input name="fullName" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Full Name" />
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Email address</span>
      <input name="emailAddress" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Email address" />
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Subject</span>
      <select name="chooseSubject" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
        <option selected disabled value="0"> Subject </option>
        <option> History </option>
        <option> Biology</option>
        <option> Chemistry</option>
        <option> Mother Language</option>
        <option> Russian Language</option>
        <option> English Language</option>
        <option> Geometry</option>
        <option> Physics</option>
        <option> Math</option>
        <option> History of Uzbekistan</option>
      </select>
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">About</span>
      <textarea name="aboutInput" required class="rounded-[4px] w-[400px] px-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] h-[172px]" placeholder="About"></textarea>
    </label>
  </div>

  <div class="space-y-[35px]">
    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Class</span>
      <select name="chooseClass" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
        <option selected disabled> Class </option>
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
        <option value="5"> 5</option>
        <option value="6"> 6</option>
        <option value="7"> 7</option>
        <option value="8"> 8</option>
        <option value="9"> 9</option>
        <option value="10"> 10</option>
        <option value="11"> 11</option>
      </select>
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Gender</span>
      <select name="chooseGender" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] ">
        <option selected disabled value="0"> Gender </option>
        <option value="0"> Male</option>
        <option value="1"> Female</option>
      </select>
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Age</span>
      <input name="age" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Age" />
    </label>

    <label>
      <input class="add-choose-file hidden" type="file" name="file">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Import Img</span>
      <img class="add-choosed-img mb-[12px] mx-auto" src="" alt="img" width="150" height="150" >
    </label>

    <button class="add-btn ml-[300px] cursor-pointer w-[120px] h-[40px] bg-[#509CDB] rounded-[8px] text-white font-semibold" type="submit">Add Teachers</button>
  </div>
</form>
`
  let elAddTeacherForm = document.querySelector(".add-teacher-form")
  let elChooseFile = document.querySelector(".add-choose-file")
  let elChooseImg = document.querySelector(".add-choosed-img")
  let elSubmitBtn = document.querySelector(".add-btn")
  
  elChooseFile.addEventListener("change",function (e) {
    elChooseImg.src = URL.createObjectURL(e.target.files[0])
  })

  elAddTeacherForm.addEventListener("submit", function (evt) {
    evt.preventDefault()

    let teachersList = {
      id:products[products.length - 1]?.id ? products[products.length - 1].id + 1 : 1,
      imgURL: elChooseImg.src,
      name: evt.target.fullName.value,
      email: evt.target.emailAddress.value,
      subject: evt.target.chooseSubject.value,
      class: evt.target.chooseClass.value,
      gender: evt.target.chooseGender.value,
      about: evt.target.aboutInput.value,
      age: evt.target.age.value,
    }
    
    products.push(teachersList)
    localStorage.setItem("products", JSON.stringify(products))


    setTimeout(() => {
      elSubmitBtn.innerHTML = `<img class="w-[30px] h-[30px] mx-auto" src="./images/loading-white.png" alt="loading" >`
      setTimeout(() => {
        modalWrapper.classList.add("scale-0")
        renderProducts(products, elProductTable)
      }, 600)
    }, 800)
  })
}

function renderProducts(arr, list) {
  if (products.length === 0) {
    elBearWrapper.classList.remove("hidden");
    elMainTable.classList.add("hidden");
  } else {
    elBearWrapper.classList.add("hidden");
    elMainTable.classList.remove("hidden");
    list.innerHTML = null
    arr.forEach((item) => {
      let elTr = document.createElement("tr")
      elTr.className = "bg-white"
      elTr.innerHTML = `
      <td class=" py-[16px] bg-white flex justify-center items-center gap-[4.5px] ">
        <img class=" w-[30px] h-[30px]" src="${item.imgURL}" alt="teacher add img" width="30" height="30">
        <span class="font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.name}</span>
      </td>
      <td class=" py-[16px] bg-white">
        <span class="flex justify-center font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.subject}</span>
      </td>
      <td class="texr-center py-[16px] bg-white text-center">
        <span class="font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.class}</span>
      </td>
      <td class="texr-center py-[16px] bg-white">
        <span class="flex justify-center font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.email}</span>
      </td>
      <td class="texr-center py-[16px] bg-white text-center">
        <span class="font-medium text-[12px] text-[rgba(79,79,79,1)] ">${item.gender}</span>
      </td>
     <td class="py-[17px] text-center bg-white flex">
        <button onclick="handleUpdateProduct(${item.id})" class="cursor-pointer">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.75012 15.8125V19.2499H6.18752L16.3255 9.11191L12.8881 5.67234L2.75012 15.8125ZM18.9847 6.45268C19.0697 6.36793 19.1372 6.26722 19.1832 6.15635C19.2292 6.04547 19.2529 5.9266 19.2529 5.80655C19.2529 5.6865 19.2292 5.56763 19.1832 5.45675C19.1372 5.34588 19.0697 5.24517 18.9847 5.16041L16.8396 3.01529C16.7548 2.93027 16.6541 2.86281 16.5432 2.81679C16.4323 2.77076 16.3135 2.74707 16.1934 2.74707C16.0734 2.74707 15.9545 2.77076 15.8436 2.81679C15.7328 2.86281 15.632 2.93027 15.5473 3.01529L13.8697 4.69827L17.3071 8.13026L18.9847 6.45268Z" fill="#3F8C8E"/>
            </svg>
        </button>
        <button onclick="handleDeleteProduct(${item.id})" class="cursor-pointer ml-[18px]">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11 1.57129C11.8064 1.57129 12.5818 1.8812 13.1661 2.43693C13.7503 2.99266 14.0986 3.75168 14.139 4.557L14.1429 4.71415H18.0715C18.2717 4.71437 18.4643 4.79105 18.61 4.92853C18.7556 5.066 18.8432 5.25389 18.8549 5.45381C18.8667 5.65373 18.8016 5.85059 18.6731 6.00416C18.5446 6.15773 18.3622 6.25642 18.1634 6.28007L18.0715 6.28557H17.4044L16.4772 17.7201C16.4174 18.4579 16.0821 19.1462 15.5379 19.648C14.9937 20.1499 14.2805 20.4285 13.5402 20.4284H8.45981C7.71955 20.4285 7.00639 20.1499 6.46219 19.648C5.91799 19.1462 5.58263 18.4579 5.52281 17.7201L4.59488 6.28557H3.9286C3.73615 6.28555 3.5504 6.21489 3.40659 6.08701C3.26278 5.95913 3.1709 5.78291 3.14838 5.59179L3.14288 5.49986C3.14291 5.30741 3.21356 5.12167 3.34145 4.97785C3.46933 4.83404 3.64554 4.74216 3.83667 4.71965L3.9286 4.71415H7.85717C7.85717 3.88061 8.18829 3.08121 8.77769 2.49181C9.36709 1.90241 10.1665 1.57129 11 1.57129ZM9.23217 8.83915C9.08977 8.83915 8.95219 8.89072 8.84487 8.98432C8.73755 9.07792 8.66775 9.20721 8.64838 9.34829L8.64288 9.42843V15.7141L8.64838 15.7943C8.66779 15.9353 8.7376 16.0646 8.84492 16.1581C8.95224 16.2517 9.0898 16.3032 9.23217 16.3032C9.37454 16.3032 9.5121 16.2517 9.61942 16.1581C9.72673 16.0646 9.79655 15.9353 9.81595 15.7943L9.82145 15.7141V9.42843L9.81595 9.34829C9.79659 9.20721 9.72679 9.07792 9.61947 8.98432C9.51215 8.89072 9.37457 8.83915 9.23217 8.83915ZM12.7679 8.83915C12.6255 8.83915 12.4879 8.89072 12.3806 8.98432C12.2733 9.07792 12.2035 9.20721 12.1841 9.34829L12.1786 9.42843V15.7141L12.1841 15.7943C12.2035 15.9353 12.2733 16.0646 12.3806 16.1581C12.4879 16.2517 12.6255 16.3032 12.7679 16.3032C12.9103 16.3032 13.0478 16.2517 13.1551 16.1581C13.2624 16.0646 13.3323 15.9353 13.3517 15.7943L13.3572 15.7141V9.42843L13.3517 9.34829C13.3323 9.20721 13.2625 9.07792 13.1552 8.98432C13.0479 8.89072 12.9103 8.83915 12.7679 8.83915ZM11 3.14272C10.6036 3.14259 10.2217 3.29232 9.93102 3.56189C9.64032 3.83146 9.46226 4.20095 9.43253 4.59629L9.4286 4.71415H12.5715L12.5675 4.59629C12.5378 4.20095 12.3597 3.83146 12.069 3.56189C11.7783 3.29232 11.3965 3.14259 11 3.14272Z" fill="#FF0202"/>
            </svg>
        </button>
        <a class="cursor-pointer ml-[18px]" href="./more.html">
         <img class="w-[22px] h-[22px]" src="./images/more-svg.svg" alt="more photo">
         </a>
    </td>   
    `
      list.appendChild(elTr)
    })
  }
}

renderProducts(products, elProductTable)

//Search
elSearchInput.addEventListener("input", (e) => {
  let search = e.target.value.toLowerCase().trim();

  let filtered = products.filter(teacher =>
    teacher.name.toLowerCase().includes(search) ||
    teacher.email.toLowerCase().includes(search)
  )

  renderProducts(filtered, elProductTable);
})


// Update Part 
// function handleUpdateProduct(id) {
//   let findedObj = products.find(item => item.id == id);
//   console.log(findedObj);
  
//   modalWrapper.classList.remove("scale-0");
//   modalInner.innerHTML = `
// <form autocomplete="off" class="update-teacher-form w-[981px] p-5 flex justify-around">
//   <div class="space-y-[35px]">
//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Full Name</span>
//       <input value="${findedObj.name}" name="fullName" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Full Name" />
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Email address</span>
//       <input value="${findedObj.email}" name="emailAddress" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Email address" />
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Subject</span>
//       <select name="chooseSubject" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]">
//         <option ${findedObj.subject == "History" ? "selected" : ""} value="History">History</option>
//         <option ${findedObj.subject == "Biology" ? "selected" : ""} value="Biology">Biology</option>
//         <option ${findedObj.subject == "Chemistry" ? "selected" : ""} value="Chemistry">Chemistry</option>
//         <option ${findedObj.subject == "Mother Language" ? "selected" : ""} value="Mother Language">Mother Language</option>
//         <option ${findedObj.subject == "Russian Language" ? "selected" : ""} value="Russian Language">Russian Language</option>
//         <option ${findedObj.subject == "English Language" ? "selected" : ""} value="English Language">English Language</option>
//         <option ${findedObj.subject == "Geometry" ? "selected" : ""} value="Geometry">Geometry</option>
//         <option ${findedObj.subject == "Physics" ? "selected" : ""} value="Physics">Physics</option>
//         <option ${findedObj.subject == "Math" ? "selected" : ""} value="Math">Math</option>
//         <option ${findedObj.subject == "History of Uzbekistan" ? "selected" : ""} value="History of Uzbekistan">History of Uzbekistan</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">About</span>
//       <textarea name="aboutInput" required class="rounded-[4px] w-[400px] px-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] h-[172px]" placeholder="About">${findedObj.about}</textarea>
//     </label>
//   </div>

//   <div class="space-y-[35px]">
//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Class</span>
//       <select name="chooseClass" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]">
//         <option ${findedObj.class == "1" ? "selected" : ""} value="1">1</option>
//         <option ${findedObj.class == "2" ? "selected" : ""} value="2">2</option>
//         <option ${findedObj.class == "3" ? "selected" : ""} value="3">3</option>
//         <option ${findedObj.class == "4" ? "selected" : ""} value="4">4</option>
//         <option ${findedObj.class == "5" ? "selected" : ""} value="5">5</option>
//         <option ${findedObj.class == "6" ? "selected" : ""} value="6">6</option>
//         <option ${findedObj.class == "7" ? "selected" : ""} value="7">7</option>
//         <option ${findedObj.class == "8" ? "selected" : ""} value="8">8</option>
//         <option ${findedObj.class == "9" ? "selected" : ""} value="9">9</option>
//         <option ${findedObj.class == "10" ? "selected" : ""} value="10">10</option>
//         <option ${findedObj.class == "11" ? "selected" : ""} value="11">11</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Gender</span>
//       <select name="chooseGender" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]">
//         <option ${findedObj.gender == "0" ? "selected" : ""} value="0">Male</option>
//         <option ${findedObj.gender == "1" ? "selected" : ""} value="1">Female</option>
//       </select>
//     </label>

//     <label class="flex flex-col">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Age</span>
//       <input value="${findedObj.age}" name="age" required type="number" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Age" />
//     </label>

//     <label>
//       <input class="change-img-input hidden" type="file" name="file">
//       <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Import Img</span>
//       <img class="change-img mb-[12px] mx-auto" src="${findedObj.imgURL}" alt="img" width="150" height="150">
//     </label>

//     <button class="add-btn ml-[300px] cursor-pointer w-[140px] h-[40px] bg-[#509CDB] rounded-[8px] text-white font-semibold" type="submit">Update Teachers</button>
//   </div>
// </form>
// `;

//   let elUpdateTeacherForm = document.querySelector(".update-teacher-form");
//   let elChooseFile = document.querySelector(".change-img-input");
//   let elChooseImg = document.querySelector(".change-img");
//   let elSubmitBtn = document.querySelector(".add-btn");

//   elChooseFile.addEventListener("change", function(e) {
//     elChooseImg.src = URL.createObjectURL(e.target.files[0]);
//   });

//   elUpdateTeacherForm.addEventListener("submit", function(evt) {
//     evt.preventDefault();

//     // Update the found object with new values
//     findedObj.imgURL = elChooseImg.src;
//     findedObj.name = evt.target.fullName.value;
//     findedObj.email = evt.target.emailAddress.value;
//     findedObj.subject = evt.target.chooseSubject.value;
//     findedObj.class = evt.target.chooseClass.value;
//     findedObj.gender = evt.target.chooseGender.value;
//     findedObj.about = evt.target.aboutInput.value;
//     findedObj.age = evt.target.age.value;

//     // Update localStorage
//     localStorage.setItem("products", JSON.stringify(products));

//     setTimeout(() => {
//       elSubmitBtn.innerHTML = `<img class="w-[30px] h-[30px] mx-auto" src="./images/loading-white.png" alt="loading">`;
//       setTimeout(() => {
//         modalWrapper.classList.add("scale-0");
//         renderProducts(products, elProductTable);
//       }, 600);
//     }, 800);
//   });
// }

function handleUpdateProduct(id) {
  let findedObj = products.find(item => item.id == id);
  
  modalWrapper.classList.remove("scale-0");
  modalInner.innerHTML = `
<form autocomplete="off" class="update-teacher-form w-[981px] p-5 flex justify-around">
  <div class="space-y-[35px]">
    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Full Name</span>
      <input value="${findedObj.name}" name="fullName" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Full Name" />
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]"> Email address</span>
      <input value="${findedObj.email}" name="emailAddress" required type="text" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Email address" />
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Subject</span>
      <select name="chooseSubject" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]">
        <option ${findedObj.subject == "History" ? "selected" : ""} value="History">History</option>
        <option ${findedObj.subject == "Biology" ? "selected" : ""} value="Biology">Biology</option>
        <option ${findedObj.subject == "Chemistry" ? "selected" : ""} value="Chemistry">Chemistry</option>
        <option ${findedObj.subject == "Mother Language" ? "selected" : ""} value="Mother Language">Mother Language</option>
        <option ${findedObj.subject == "Russian Language" ? "selected" : ""} value="Russian Language">Russian Language</option>
        <option ${findedObj.subject == "English Language" ? "selected" : ""} value="English Language">English Language</option>
        <option ${findedObj.subject == "Geometry" ? "selected" : ""} value="Geometry">Geometry</option>
        <option ${findedObj.subject == "Physics" ? "selected" : ""} value="Physics">Physics</option>
        <option ${findedObj.subject == "Math" ? "selected" : ""} value="Math">Math</option>
        <option ${findedObj.subject == "History of Uzbekistan" ? "selected" : ""} value="History of Uzbekistan">History of Uzbekistan</option>
      </select>
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">About</span>
      <textarea name="aboutInput" required class="rounded-[4px] w-[400px] px-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)] h-[172px]" placeholder="About">${findedObj.about}</textarea>
    </label>
  </div>

  <div class="space-y-[35px]">
    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Class</span>
      <select name="chooseClass" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]">
        <option ${findedObj.class == "1" ? "selected" : ""} value="1">1</option>
        <option ${findedObj.class == "2" ? "selected" : ""} value="2">2</option>
        <option ${findedObj.class == "3" ? "selected" : ""} value="3">3</option>
        <option ${findedObj.class == "4" ? "selected" : ""} value="4">4</option>
        <option ${findedObj.class == "5" ? "selected" : ""} value="5">5</option>
        <option ${findedObj.class == "6" ? "selected" : ""} value="6">6</option>
        <option ${findedObj.class == "7" ? "selected" : ""} value="7">7</option>
        <option ${findedObj.class == "8" ? "selected" : ""} value="8">8</option>
        <option ${findedObj.class == "9" ? "selected" : ""} value="9">9</option>
        <option ${findedObj.class == "10" ? "selected" : ""} value="10">10</option>
        <option ${findedObj.class == "11" ? "selected" : ""} value="11">11</option>
      </select>
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Gender</span>
      <select name="chooseGender" required class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]">
        <option ${findedObj.gender == "0" ? "selected" : ""} value="0">Male</option>
        <option ${findedObj.gender == "1" ? "selected" : ""} value="1">Female</option>
      </select>
    </label>

    <label class="flex flex-col">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Age</span>
      <input value="${findedObj.age}" name="age" required type="number" class="rounded-[4px] w-[400px] pl-10 font-medium text-[14px] text-[rgba(138,138,138,1)] py-4 bg-white border-[1px] border-[rgba(167,167,167,1)]" placeholder="Age" />
    </label>

    <label>
      <input class="change-img-input hidden" type="file" name="file">
      <span class="font-medium text-[14px] text-[rgba(138,138,138,1)] mb-[5px]">Import Img</span>
      <img class="change-img mb-[12px] mx-auto" src="${findedObj.imgURL}" alt="img" width="150" height="150">
    </label>

    <button class="add-btn ml-[300px] cursor-pointer w-[140px] h-[40px] bg-[#509CDB] rounded-[8px] text-white font-semibold" type="submit">Update Teachers</button>
  </div>
</form>
`;

  let elUpdateTeacherForm = document.querySelector(".update-teacher-form");
  let elChooseFile = document.querySelector(".change-img-input");
  let elChooseImg = document.querySelector(".change-img");
  let elSubmitBtn = document.querySelector(".add-btn");

  // Store the original image URL
  let originalImgURL = findedObj.imgURL;

  elChooseFile.addEventListener("change", function(e) {
    if (e.target.files && e.target.files[0]) {
      elChooseImg.src = URL.createObjectURL(e.target.files[0]);
    }
  });

  elUpdateTeacherForm.addEventListener("submit", function(evt) {
    evt.preventDefault();

    // Update the found object with new values
    findedObj.name = evt.target.fullName.value;
    findedObj.email = evt.target.emailAddress.value;
    findedObj.subject = evt.target.chooseSubject.value;
    findedObj.class = evt.target.chooseClass.value;
    findedObj.gender = evt.target.chooseGender.value;
    findedObj.about = evt.target.aboutInput.value;
    findedObj.age = evt.target.age.value;

    
    // Only update the image if a new one was selected
    if (elChooseFile.files && elChooseFile.files[0]) {
      findedObj.imgURL = URL.createObjectURL(elChooseFile.files[0]);
    } 
    else {
      findedObj.imgURL = originalImgURL;
    }

    // Update localStorage
    localStorage.setItem("products", JSON.stringify(products));

    setTimeout(() => {
      elSubmitBtn.innerHTML = `<img class="w-[30px] h-[30px] mx-auto" src="./images/loading-white.png" alt="loading">`;
      setTimeout(() => {
        modalWrapper.classList.add("scale-0");
        renderProducts(products, elProductTable);
      }, 600);
    }, 800);
  });
}

// Delete Part start
let handleDeleteProduct = (id) => {
  modalWrapper.classList.remove("scale-0")
  modalInner.innerHTML = `
         <div class="w-[600px]">
            <h1 class="font-bold mb-[20px] text-[35px] text-center">Do you wanna delete?</h1>
            <div class="flex items-center justify-center gap-[20px]">
                <button onclick="handleCancel()" class="hover:opacity-[70%] duration-300 w-[48%] p-[8px] bg-green-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px]">Cancel</button>
                <button onclick="deleteProduct(${id})" class="hover:opacity-[70%] duration-300 w-[48%] p-[8px] bg-red-700 cursor-pointer text-white font-normal text-[25px] rounded-[35px]">Delete</button>
            </div>
        </div>
    `
}
function deleteProduct(id) {
  let deleteId = products.findIndex(item => item.id == id)
  
  products.splice(deleteId, 1)
  renderProducts(products, elProductTable)
  modalWrapper.classList.add("scale-0")
  localStorage.setItem("products", JSON.stringify(products))
}



