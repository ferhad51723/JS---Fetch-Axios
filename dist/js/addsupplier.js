const form = document.querySelector(".supplier-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const newSupplier = {
    companyName: document.getElementById("company-name").value,
    contactTitle: document.getElementById("contact-title").value,
    address: {
      country: document.getElementById("country").value,
      phone: document.getElementById("phone").value,
      postalCode: document.getElementById("postal-code").value,
    },
  };

  fetch("https://northwind.vercel.app/api/suppliers", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newSupplier),
  });

  alert("Supplier added!");
});
