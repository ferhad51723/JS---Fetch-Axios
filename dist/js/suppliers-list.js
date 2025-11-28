fetch("https://northwind.vercel.app/api/suppliers")
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    RenderData(data);
  })
  .catch(error => {
    console.error("Xəta baş verdi:", error);
  });



function RenderData(data) {
  const supplierList = document.querySelector(".supplier-list");

  data.forEach(element => {
    const supplierItemCard = document.createElement('article');
    supplierItemCard.classList.add("supplier-item");

    supplierItemCard.innerHTML = `
        <p class="supplier-item__id">${element.id}</p>
        <h2 class="supplier-item__company-name">${element.companyName}</h2>
        <p class="supplier-item__contact-title">${element.contactTitle}</p>
        <address class="supplier-item__address">${element.address.country}</address>
        <p class="supplier-item__phone">${element.address.phone}</p>
        <p class="supplier-item__postal-code">${element.address.postalCode}</p>
        <a href="details.html" class="supplier-item__details">Details</a>
        <button class="supplier-item__delete">Delete</button>
        `;

    supplierItemCard.querySelector(".supplier-item__delete").addEventListener("click", () => {
      supplierItemCard.remove();
      fetch(`https://northwind.vercel.app/api/suppliers/${element.id}`, {
        // method: "DELETE"
      })
    });

    supplierList.appendChild(supplierItemCard);
  });
}




