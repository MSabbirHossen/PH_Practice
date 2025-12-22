function localCategories() {
  showSpinner();
  fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) => res.json())
    .then((data) => {
      displayCategories(data.categories);
      hideSpinner();
    });
}
function loadLevel(id) {
  showSpinner();
  fetch(`https://openapi.programming-hero.com/api/category/${id}`)
    .then((res) => res.json())
    .then((data) => {
      const allBtns = document.querySelectorAll("#categories button");
      allBtns.forEach((btn) => btn.classList.remove("active"));

      const clickedbtn = document.getElementById(`category-btn-${id}`);
      clickedbtn.classList.add("active");
      displaybyId(data.plants);
      hideSpinner();
    });
}

let totalPrice = 0;

function updateTotal(amount) {
  totalPrice += amount;
  document.getElementById("total-price").innerText = totalPrice;
}

function displaybyId(plants) {
  const divHolder = document.getElementById("api-cards");
  divHolder.innerHTML = "";

  const cartContainer = document.getElementById("price-divs");

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <div class="card bg-base-100 w-60 h-100 shadow-sm">
                <figure class="h-40 w-full px-2 py-2">
                    <img src="${plant.image}" class="rounded-xl object-cover h-full w-full" />
                </figure>
                <div class="card-body p-2">
                    <h2 class="card-title mb-1 text-sm font-bold">${plant.name}</h2>
                    <p class="text-xs mb-2">${plant.description}</p>
                    <div class="flex justify-between items-center mb-2">
                        <button class="btn btn-xs btn-modal bg-[#DCFCE7] rounded-xl border-none text-[#15803D]">${plant.category}</button>
                        <span>৳${plant.price}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn bg-green-700 w-full rounded-xl text-white add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    divHolder.appendChild(card);

    const modalBtn = card.querySelector(".btn-modal");
    modalBtn.addEventListener("click", () => {
      openModal(plant);
    });

    const addBtn = card.querySelector(".add-to-cart-btn");
    addBtn.addEventListener("click", () => {
      const cartItem = document.createElement("div");
      cartItem.className =
        "flex bg-[#CFF0DC] w-full items-center justify-between p-2 rounded mb-2";

      cartItem.innerHTML = `
                <div class="flex flex-col">
                    <span class="font-semibold">${plant.name}</span>
                    <span>৳${plant.price}</span>
                </div>
                <div>
                    <button class="remove-btn text-red-600 hover:text-red-800">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            `;

      cartContainer.appendChild(cartItem);
      updateTotal(plant.price);

      const removeBtn = cartItem.querySelector(".remove-btn");
      removeBtn.addEventListener("click", () => {
        cartItem.remove();
        updateTotal(-plant.price);
      });
    });
  });
}

function openModal(plant) {
  const modal = document.getElementById("plantModal");
  document.getElementById("modal-title").innerText = plant.name;
  document.getElementById("modal-image").src = plant.image;
  document.getElementById("modal-description").innerText = plant.description;
  document.getElementById("modal-price").innerText = `Price: ৳${plant.price}`;
  document.getElementById(
    "modal-category"
  ).innerText = `Category: ${plant.category}`;
  modal.showModal();
}

function closeModal() {
  document.getElementById("plantModal").close();
}

function loadWordDetail(id) {
  console.log(id);
}
function displayCategories(categories) {
  const container = document.getElementById("categories");
  container.innerHTML = "";
  categories.forEach((category) => {
    const btnDiv = document.createElement("div");
    btnDiv.innerHTML = `
        <button id="category-btn-${category.id}" onclick="loadLevel(${category.id})" class="text-left w-full mb-2 btn btn-sm bg-[#CFF0DC10] border-none hover:bg-green-700">${category.category_name}
        </button>
        `;
    container.appendChild(btnDiv);
  });
}

function allPlantsData() {
  showSpinner();
  fetch("https://openapi.programming-hero.com/api/plants")
    .then((res) => res.json())
    .then((data) => {
      displayAllPlantData(data.plants);
      hideSpinner();
    });
}

function displayAllPlantData(plants) {
  const divHolder = document.getElementById("api-cards");
  divHolder.innerHTML = "";
  const cartContainer = document.getElementById("price-divs");

  plants.forEach((plant) => {
    const card = document.createElement("div");
    card.innerHTML = `
            <div class="card bg-base-100 w-60 h-100 shadow-sm">
                <figure class="h-40 w-full px-2 py-2">
                    <img src="${plant.image}" class="rounded-xl object-cover h-full w-full" />
                </figure>
                <div class="card-body p-2">
                    <h2 class="card-title mb-1 text-sm font-bold">${plant.name}</h2>
                    <p class="text-xs mb-2">${plant.description}</p>
                    <div class="flex justify-between items-center mb-2">
                        <button class="btn btn-xs btn-modal bg-[#DCFCE7] rounded-xl border-none text-[#15803D]">${plant.category}</button>
                        <span>৳${plant.price}</span>
                    </div>
                    <div class="card-actions">
                        <button class="btn bg-green-700 w-full rounded-xl text-white add-to-cart-btn">Add to Cart</button>
                    </div>
                </div>
            </div>
        `;
    divHolder.appendChild(card);

    const modalBtn = card.querySelector(".btn-modal");
    modalBtn.addEventListener("click", () => {
      openModal(plant);
    });

    const addBtn = card.querySelector(".add-to-cart-btn");
    addBtn.addEventListener("click", () => {
      const cartItem = document.createElement("div");
      cartItem.className =
        "flex bg-[#CFF0DC] w-full items-center justify-between p-2 rounded mb-2";

      cartItem.innerHTML = `
                <div class="flex flex-col">
                    <span class="font-semibold">${plant.name}</span>
                    <span>৳${plant.price}</span>
                </div>
                <div>
                    <button class="remove-btn text-red-600">
                        <i class="fa-solid fa-xmark"></i>
                    </button>
                </div>
            `;

      cartContainer.appendChild(cartItem);
      updateTotal(plant.price);

      const removeBtn = cartItem.querySelector(".remove-btn");
      removeBtn.addEventListener("click", () => {
        cartItem.remove();
        updateTotal(-plant.price);
      });
    });
  });
}

function showSpinner() {
  document.getElementById("spinner").classList.remove("hidden");
}

function hideSpinner() {
  document.getElementById("spinner").classList.add("hidden");
}

localCategories();
allPlantsData();
