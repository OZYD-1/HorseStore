// Browse Category Click
const category_nav_list = document.querySelector(".category_nav_list");
function open_category_list() {
    category_nav_list.classList.toggle("active");
}
// Swiper
var swiper = new Swiper(".slide-swp", {
    pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable:true
    },
    autoplay:{
        delay:3000,
    },
    loop:true
});
// swiper slide product
setTimeout(() => {
  document.querySelectorAll('.slide_product').forEach(sliderEl => {
    const slides = sliderEl.querySelectorAll('.swiper-slide').length;
    const slidesPerView = 5;
    
    new Swiper(sliderEl, {
      slidesPerView: slidesPerView,
      spaceBetween: 20,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true
      },
      autoplay: {
        delay: 3000,
      },
      loop: slides > slidesPerView,
      watchOverflow: true,
    });
  });
}, 50);

// Item's home
const isSubPage = window.location.pathname.includes("htmlCode");
const pathPrefix = isSubPage ? "../" : "";
fetch('products.json')
.then(response => response.json())
.then(data => {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const swiper_items = document.getElementById('swiper_items')
    data.forEach(product => {
        if(product.old_price) {
            const isInCart = cart.some(cartItem => cartItem.id === product.id)
            const fav = JSON.parse(localStorage.getItem('favourite')) || [];
            const isInFav = fav.some(favItem => favItem.id === product.id);
            const percent_dis = Math.floor((product.old_price - product.price) / product.old_price * 100);
            
            
            if(swiper_items) { swiper_items.innerHTML += `
                <div class="swiper-slide product">
                            <span class="sale_present">%${percent_dis}</span>
                            <div class="img-product">
                                <a href="javascript:void(0)"><img src="${pathPrefix}${product.img}"></a>
                            </div>
                            <div class="stars">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                            </div>
                            <p class="name_product"><a href="javascript:void(0)">${product.name}</a></p>
                            <div class="price">
                                <p><span>$${product.price}</span></p>
                                <p class="old-price">$${product.old_price}</p>
                            </div>
                            <div class="icons">
                                <span class="btn_add_cart ${ isInCart? 'active' : '' }" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${ isInCart? 'Item in Cart' : 'Add To Cart' }
                                </span>
                                <span class="icon_product ${ isInFav ? 'active' : '' }" data-id="${product.id}">
                                    <i class="${ isInFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }"></i>
                                </span>
                            </div>
                        </div>
               `}
        }
    });
    // Electronics
    const swiper_elctronics = document.getElementById('swiper_elctronics')
    data.forEach(product => {
        if(product.catetory == "electronics") {
            const isInCart = cart.some(cartItem => cartItem.id === product.id)
            const fav = JSON.parse(localStorage.getItem('favourite')) || [];
            const isInFav = fav.some(favItem => favItem.id === product.id);
            const old_price_Pargrahp = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_dis_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";

            if(swiper_items) { swiper_elctronics.innerHTML += `
                    <div class="swiper-slide product">
                                ${percent_dis_div}
                                <div class="img-product">
                                    <a href="javascript:void(0)"><img src="${pathPrefix}${product.img}"></a>
                                </div>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="name_product"><a href="javascript:void(0)">${product.name}</a></p>
                                <div class="price">
                                    <p><span>$${product.price}</span></p>
                                    ${old_price_Pargrahp}
                                </div>
                                <div class="icons">
                                    <span class="btn_add_cart ${ isInCart? 'active' : '' }" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${ isInCart? 'Item in Cart' : 'Add To Cart' }
                                    </span>
                                    <span class="icon_product ${ isInFav ? 'active' : '' }" data-id="${product.id}">
                                        <i class="${ isInFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }"></i>
                                    </span>
                                </div>
                            </div>
                `}
        }
    })
    // Appliances
    const swiper_appliances = document.getElementById('swiper_appliances')
    data.forEach(product => {
        if(product.catetory == "appliances") {
            const isInCart = cart.some(cartItem => cartItem.id === product.id)
            const fav = JSON.parse(localStorage.getItem('favourite')) || [];
            const isInFav = fav.some(favItem => favItem.id === product.id);
            const old_price_Pargrahp = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_dis_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";

            if(swiper_items) { swiper_appliances.innerHTML += `
                    <div class="swiper-slide product">
                                ${percent_dis_div}
                                <div class="img-product">
                                    <a href="javascript:void(0)"><img src="${pathPrefix}${product.img}"></a>
                                </div>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="name_product"><a href="javascript:void(0)">${product.name}</a></p>
                                <div class="price">
                                    <p><span>$${product.price}</span></p>
                                    ${old_price_Pargrahp}
                                </div>
                                <div class="icons">
                                    <span class="btn_add_cart ${ isInCart? 'active' : '' }" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${ isInCart? 'Item in Cart' : 'Add To Cart' }
                                    </span>
                                    <span class="icon_product ${ isInFav ? 'active' : '' }" data-id="${product.id}">
                                        <i class="${ isInFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }"></i>
                                    </span>
                                </div>
                            </div>
                `}
        }
    })
    // mobiles
    const swiper_mobiles = document.getElementById('swiper_mobiles')
    data.forEach(product => {
        if(product.catetory == "mobiles") {
            const isInCart = cart.some(cartItem => cartItem.id === product.id)
            const fav = JSON.parse(localStorage.getItem('favourite')) || [];
            const isInFav = fav.some(favItem => favItem.id === product.id);
            const old_price_Pargrahp = product.old_price ? `<p class="old-price">$${product.old_price}</p>` : "";
            const percent_dis_div = product.old_price ? `<span class="sale_present">%${Math.floor((product.old_price - product.price) / product.old_price * 100)}</span>` : "";

            if(swiper_items) { swiper_mobiles.innerHTML += `
                    <div class="swiper-slide product">
                                ${percent_dis_div}
                                <div class="img-product">
                                    <a href="javascript:void(0)"><img src="${pathPrefix}${product.img}"></a>
                                </div>
                                <div class="stars">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                                <p class="name_product"><a href="javascript:void(0)">${product.name}</a></p>
                                <div class="price">
                                    <p><span>$${product.price}</span></p>
                                    ${old_price_Pargrahp}
                                </div>
                                <div class="icons">
                                    <span class="btn_add_cart ${ isInCart? 'active' : '' }" data-id="${product.id}">
                                    <i class="fa-solid fa-cart-shopping"></i> ${ isInCart? 'Item in Cart' : 'Add To Cart' }
                                    </span>
                                    <span class="icon_product ${ isInFav ? 'active' : '' }" data-id="${product.id}">
                                        <i class="${ isInFav ? 'fa-solid fa-heart' : 'fa-regular fa-heart' }"></i>
                                    </span>
                                </div>
                            </div>
                `}
        }
    })
})

setTimeout(() => {
  const favButtons = document.querySelectorAll('.icon_product');
  favButtons.forEach(btn => {
    btn.addEventListener('click', async (e) => {
      const id = btn.getAttribute('data-id');
      const response = await fetch('products.json');
      const data = await response.json();
      const product = data.find(p => p.id == id);

      let fav = JSON.parse(localStorage.getItem('favourite')) || [];
      const index = fav.findIndex(item => item.id == product.id);

      if (index === -1) {
        fav.push(product);
        localStorage.setItem('favourite', JSON.stringify(fav));
        btn.classList.add('active');
        btn.innerHTML = '<i class="fa-solid fa-heart"></i>';
      } else {
        fav.splice(index, 1);
        localStorage.setItem('favourite', JSON.stringify(fav));
        btn.classList.remove('active');
        btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
      }

      updateFavourite();
    });
  });
}, 1000);

//cart
function open_close_cart() {
    const cart = document.querySelector('.cart');
    cart.classList.toggle("active");
}
// action cart
fetch('products.json')
.then(response => response.json())
.then(data => {
    const AddToCartButtons = document.querySelectorAll('.btn_add_cart');
    AddToCartButtons.forEach(button => {
        button.addEventListener("click" , (eo) => {
            const productId = eo.target.getAttribute('data-id');
            const selectedProduct = data.find(product => product.id == productId)

            addToCart(selectedProduct)

            const AllMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
            AllMatchingButtons.forEach(btn => {
                btn.classList.add("active")
                btn.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Item in Cart`
            })
        })
    }
    )
})
function addToCart(product) {
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    cart.push({... product , quantity: 1})
    localStorage.setItem('cart' , JSON.stringify(cart))

    updateCart();
}
function updateCart() {
    const CartItemsContainer = document.getElementById("cart_items")
    const Cart = JSON.parse(localStorage.getItem('cart')) || []
    const checkout_items = document.getElementById('checkout_items')
    
    let items_input = document.getElementById("items")
    let total_price_input = document.getElementById("total_price")
    let count_items_input = document.getElementById("count_items")
    if (checkout_items) {
        checkout_items.innerHTML = "";

        if (items_input && total_price_input && count_items_input) {
            items_input.value = "";
            total_price_input.value = "";
            count_items_input.value = "";
    }
}


    var totalPrice = 0
    var totalCount = 0

    CartItemsContainer.innerHTML = "";

    Cart.forEach((item , index) => {
        
        let totalPriceItem = item.price * item.quantity ;
        totalPrice += totalPriceItem ;
        totalCount += item.quantity ;
        // ceckout inputs
        if(checkout_items) {
            items_input.value += item.name + "  ---  " + "Price : " + totalPriceItem + "  ---  " +
            "Count : " + item.quantity + "\n"
            total_price_input.value = totalPrice + 20
            count_items_input.value = totalCount
        }
        
        CartItemsContainer.innerHTML += `
            <div class="item_cart">
                    <img src="${pathPrefix}${item.img}">
                    <div class="content">
                        <h4>${item.name}</h4>
                        <p class="price_cart">$${totalPriceItem}</p>
                        <div class="quantity_control">
                            <button class="decrease_quantity" data-index=${index}>-</button>
                            <span class="quantity">${item.quantity}</span>
                            <button class="increase_quantity" data-index=${index}>+</button>
                        </div>
                    </div>
                    <button class="delete_item" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
                </div>
        `
        if(checkout_items) {
            checkout_items.innerHTML += `
                <div class="item_cart">
                                <div class="image_name">
                                    <img src="${pathPrefix}${item.img}" alt="">
                                    <div class="content">
                                        <h4>${item.name}</h4>
                                        <p class="price_cart">$${totalPriceItem}</p>
                                        <div class="quantity_control">
                                            <button class="decrease_quantity" data-index=${index}>-</button>
                                            <span class="quantity">${item.quantity}</span>
                                            <button class="increase_quantity" data-index=${index}>+</button>
                                        </div>
                                    </div>
                                </div>
                                <button class="delete_item" data-index="${index}"><i class="fa-regular fa-trash-can"></i></button>
                            </div>
            `
        }
    })
    // All count
    const priceCarttotal = document.querySelector('.price_cart_toral')
    priceCarttotal.innerHTML = `$${totalPrice}` ;
    const countItemCart = document.querySelector('.Count_item_cart')
    countItemCart.innerHTML = totalCount ;
    const countItemHeader = document.querySelector('.count_item_header')
    countItemHeader.innerHTML = totalCount ;

    if(checkout_items) {
        const Subtotal_chackout = document.querySelector(".Subtotal_chackout")
        const total_chackout = document.querySelector(".total_chackout")

        Subtotal_chackout.innerHTML = `$${totalPrice}` ;
        total_chackout.innerHTML = `$${totalPrice + 20}` ;
    }

    // inc item
    const increaseButtons = document.querySelectorAll('.increase_quantity')
    increaseButtons.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            increaseQuantity(itemIndex)
        })
    })
    // dec item
    const decreaseButtons = document.querySelectorAll('.decrease_quantity')
    decreaseButtons.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.getAttribute("data-index")
            decreaseQuantity(itemIndex)
        })
    })
    // delete item
    const DeleteButtons = document.querySelectorAll('.delete_item')
    DeleteButtons.forEach(button => {
        button.addEventListener("click" , (event) => {
            const itemIndex = event.target.closest('button').getAttribute('data-index')
            removeFromCart(itemIndex)
        })
    })
}
// active inc
function increaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].quantity >= 1 && cart[index].quantity < 10) {
        cart[index].quantity += 1 ;
    }
    localStorage.setItem('cart' , JSON.stringify(cart))
    updateCart()
}
// active dec
function decreaseQuantity(index){
    let cart = JSON.parse(localStorage.getItem('cart')) || []
    if(cart[index].quantity > 1) {
        cart[index].quantity -= 1 ;
    }
    localStorage.setItem('cart' , JSON.stringify(cart))
    updateCart()
}
function removeFromCart(index) {
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const removeProduct = cart.splice(index , 1)[0]
    localStorage.setItem('cart' , JSON.stringify(cart))
    updateCart();
    updatButtonsState(removeProduct.id)
}
function updatButtonsState(productId) {
    const allMatchingButtons = document.querySelectorAll(`.btn_add_cart[data-id="${productId}"]`)
    allMatchingButtons.forEach(button => {
        button.classList.remove('active')
        button.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> Add To Cart`
    })
}
updateCart();

// Favourite-cart
function open_close_fav() {
  const fav = document.querySelector('.Favourite');
  fav.classList.toggle("active");
}

function addToFavourite(product) {
  let fav = JSON.parse(localStorage.getItem('favourite')) || [];
  const exist = fav.some(item => item.id === product.id);
  if (!exist) {
    fav.push(product);
    localStorage.setItem('favourite', JSON.stringify(fav));
  }
  updateFavourite();
}

function removeFromFavourite(index) {
  let fav = JSON.parse(localStorage.getItem('favourite')) || [];
  const removed = fav.splice(index, 1)[0];
  localStorage.setItem('favourite', JSON.stringify(fav));
  updateFavourite();
  const heartButtons = document.querySelectorAll(`.icon_product[data-id="${removed.id}"]`);
  heartButtons.forEach(btn => {
    btn.classList.remove('active');
    btn.innerHTML = '<i class="fa-regular fa-heart"></i>';
  });
}

function updateFavourite() {
  const favContainer = document.getElementById("fav_items");
  const fav = JSON.parse(localStorage.getItem('favourite')) || [];
  favContainer.innerHTML = "";

  fav.forEach((item, index) => {
    favContainer.innerHTML += `
      <div class="item_fav">
        <img src="${pathPrefix}${item.img}">
        <div class="content">
          <h4>${item.name}</h4>
          <p class="price_cart">$${item.price}</p>
        </div>
        <button class="delete_item" data-index="${index}">
          <i class="fa-regular fa-trash-can"></i>
        </button>
      </div>
    `;
  });

  document.querySelector('.Count_item_fav').innerHTML = fav.length;
  document.querySelector('.count-favourite').innerHTML = fav.length;

  const deleteButtons = document.querySelectorAll('.Favourite .delete_item');
  deleteButtons.forEach(btn => {
    btn.addEventListener("click", e => {
      const idx = e.target.closest('button').getAttribute('data-index');
      removeFromFavourite(idx);
    });
  });
}
updateFavourite();

// login & signup
const currentUser = JSON.parse(localStorage.getItem("currentUser"));
  if (currentUser) {
    const loginBtns = document.querySelector(".login_sigup");
    if (loginBtns) {
      loginBtns.innerHTML = `
        <div class="btn" style="background: var(--p_color);">
          <i class="fa-solid fa-user"></i> ${currentUser.name}
        </div>
        <div class="btn trans_bg" onclick="logout()">Logout</div>
      `;
    }
  }

  function logout() {
    localStorage.removeItem("currentUser");
    alert("Logged out successfully!");
    window.location.reload();
  }
// DarkMode
const chk = document.getElementById('chk');
const root = document.documentElement;
chk.addEventListener('change', () => {
  root.classList.toggle('active');
   
  if (root.classList.contains('active')) {
    localStorage.setItem('theme', 'dark');
  } else {
    localStorage.setItem('theme', 'light');
  }
});
window.addEventListener('load', () => {
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    root.classList.add('active');
    chk.checked = true;
  } else {
    root.classList.remove('active');
    chk.checked = false;
  }
});
