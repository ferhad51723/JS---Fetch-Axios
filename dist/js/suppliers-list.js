fetch("https://northwind.vercel.app/api/suppliers")
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    renderSuppliersList(data);
  })
  .catch((error) => {
    console.error("Xəta baş verdi:", error);
  });


function renderSuppliersList(data) {
  const supplierList = document.querySelector(".supplier-list");
  supplierList.innerHTML = "";

  data.forEach((element) => {
    const card = document.createElement("article");
    card.classList.add("supplier-item");

    card.innerHTML = `
      <p class="supplier-item__id">${element.id}</p>
      <h2 class="supplier-item__company-name">${element.companyName}</h2>
      <p class="supplier-item__contact-title">${element.contactTitle}</p>
      <address class="supplier-item__address">${element.address.country}</address>
      <p class="supplier-item__phone">${element.address.phone}</p>
      <p class="supplier-item__postal-code">${element.address.postalCode}</p>
      <button class="supplier-item__details" data-id="${element.id}">Details</button>
      <button class="supplier-item__delete">Delete</button>
    `;

    supplierList.appendChild(card);
  });
}


document.querySelector(".supplier-list").addEventListener("click", async (event) => {
  if (event.target.classList.contains("supplier-item__details")) {
    const id = event.target.dataset.id;

    const response = await fetch(`https://northwind.vercel.app/api/suppliers/${id}`);
    const data = await response.json();

    renderSupplierDetails(data);
  }
});

function importCss(){
  const link = document.createElement("link");
  link.setAttribute("rel","stylesheet");
  link.setAttribute("href","css/details.css");

  document.querySelector("head").appendChild(link);
}

function renderSupplierDetails(data) {
  const supplierList = document.querySelector(".supplier-list");
  supplierList.innerHTML = "";

  const details = document.createElement("article");
  details.classList.add("details");
  details.innerHTML = `
        <h1 class="details__company-name">${data.companyName}</h1>

        <section class="details__info">
            <ul class="details__list">
                <li class="details__item"><b>Contact Title:</b> ${data.contactTitle}</li>
                <li class="details__item"><b>Country:</b> ${data.address.country}</li>
                <li class="details__item"><b>Phone:</b> ${data.address.phone}</li>
                <li class="details__item"><b>Postal Code:</b> ${data.address.postalCode}</li>
            </ul>
            <button onclick="location.reload()" class="details__go-back">Go Back</button>
        </section>
  `;

  supplierList.appendChild(details);
  importCss();
}
