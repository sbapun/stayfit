const createNav = () => {
  let nav = document.querySelector(".navbar");

  nav.innerHTML = `
   <div class="nav">
     <a href ="/index.html"><img src="../img/logo.png" class="brand-logo" alt="" /></a>
     <div class="nav-items">
     <div class="search">
      <input
        type="text"
        class="search-box"
        placeholder="search brand ,product"
      />
      <button class="search-btn">search</button>
     </div>
     <a>
       <img src="../img/user.png" id="user-img" alt="" />
       <div class ="login-logout-popup hide">
         <P class="account-info">log in as, name</P>
         <div class = "button-wrapper">
         <button class="btn" id="user-btn">Log out</button>
         <form method='post' action='/my_orders'>
         <button class="my-orders" id="user-btn">My orders</button>
         </form>
         </div>
       </div>
       
     </a>
     <a href ="/seller">
       <img src="../img/user.png" id="user-img" alt="" />
       <div class ="login-logout-popup hide">
         <P class="account-info">log in as, name</P>
         <button class="btn" id="user-btn">Log out</button>
       </div>
     </a>
     <a href="/cart"><img src="../img/cart.png" alt="" /></a>
     </div>
   </div>
   <ul class="links-container">
    <li class="link-item"><a href="index.html" class="link">home</a></li>
   <li class="link-item"><a href="#" class="link">women</a></li>
   <li class="link-item"><a href="#" class="link">men</a></li>
   <li class="link-item"><a href="#" class="link">accesories</a></li>
   </ul> 
  `;
};
createNav();

//nav popup
const userImageButton = document.querySelector("#user-img");
const userPop = document.querySelector(".login-logout-popup");
const popuptext = document.querySelector(".account-info");
const actionBtn = document.querySelector(".btn");
const ordersBtn = document.querySelector(".my-orders");

userImageButton.addEventListener("click", () => {
  userPop.classList.toggle("hide");
});

window.onload = () => {
  let user = JSON.parse(sessionStorage.user || null);
  if (user != null) {
    //mean user logged in
    popuptext.innerHTML = `log in as , ${user.name}`;
    actionBtn.innerHTML = "log out";
    actionBtn.addEventListener("click", () => {
      sessionStorage.clear();
      location.reload();
    });
  } else {
    //user is logged out
    popuptext.innerHTML = "log in to place order";
    actionBtn.innerHTML = "log in";
    actionBtn.addEventListener("click", () => {
      location.href = "/login";
    });
  }
};

//search box
const searchBtn = document.querySelector(".search-btn");
const searchBox = document.querySelector(".search-box");
searchBtn.addEventListener("click", () => {
  if (searchBox.value.length) {
    location.href = `/search/${searchBox.value}`;
  }
});
