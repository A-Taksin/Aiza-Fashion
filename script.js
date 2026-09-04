/* ================= MOBILE MENU ================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("active");
});


/* ================= CLOSE MENU AFTER CLICK ================= */

const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {

    item.addEventListener("click", function () {
        navLinks.classList.remove("active");
    });

});


/* ================= DARK / LIGHT MODE ================= */

const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark");

    if (document.body.classList.contains("dark")) {

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }

});


/* ================= WHATSAPP ORDER ================= */

const orderButtons = document.querySelectorAll(".order-btn");

const whatsappNumber = "8801813838932";

orderButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector(".price").textContent;

        const message =
            "Hello Aiza Fashion! 👋\n\n" +
            "I want to order:\n" +
            "Product: " + productName + "\n" +
            "Price: " + productPrice + "\n\n" +
            "Please let me know the availability and delivery details.";

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(message);

        window.open(whatsappURL, "_blank");

    });

});

/* ================= CONTACT FORM ================= */

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    alert(
        "Thank you for contacting Aiza Fashion! 😊\n\n" +
        "We will get back to you soon."
    );

    contactForm.reset();

});
/* ================= BACK TO TOP ================= */

const backToTop = document.getElementById("back-to-top");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        backToTop.classList.add("show");

    } else {

        backToTop.classList.remove("show");

    }

});


backToTop.addEventListener("click", function () {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});
/* ================= SEARCH + CATEGORY FILTER ================= */

const searchInput = document.getElementById("product-search");
const products = document.querySelectorAll(".product-card");
const filterButtons = document.querySelectorAll(".filter-btn");

let selectedCategory = "all";


function filterProducts() {

    const searchText = searchInput.value.toLowerCase().trim();

    products.forEach(function (product) {

        const productName =
            product.querySelector("h3").textContent.toLowerCase();

        const productCategory =
            product.querySelector(".category").textContent;

        const matchesSearch =
            productName.includes(searchText);

        const matchesCategory =
            selectedCategory === "all" ||
            productCategory === selectedCategory;

        if (matchesSearch && matchesCategory) {

            product.style.display = "";

        } else {

            product.style.display = "none";

        }

    });

}


/* Search */

searchInput.addEventListener("input", function () {

    filterProducts();

});


/* Category */

filterButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        selectedCategory =
            button.getAttribute("data-category");


        filterButtons.forEach(function (btn) {

            btn.classList.remove("active");

        });


        button.classList.add("active");


        filterProducts();

    });

});
/* ================= PRODUCT DETAILS MODAL ================= */

const detailsButtons = document.querySelectorAll(".details-btn");

const productModal = document.getElementById("product-modal");
const modalClose = document.getElementById("modal-close");

const modalTitle = document.getElementById("modal-title");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");


detailsButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const productCard = button.closest(".product-card");

        const productName =
            productCard.querySelector("h3").textContent;

        const productPrice =
            productCard.querySelector(".price").textContent;

        const productCategory =
            productCard.querySelector(".category").textContent;


        modalTitle.textContent = productName;
        modalCategory.textContent = productCategory;
        modalPrice.textContent = productPrice;

        modalDescription.textContent =
            "Discover our stylish and comfortable " +
            productName +
            ", designed to give you a modern and elegant look.";

        productModal.classList.add("active");

    });

});


/* Close Modal */

modalClose.addEventListener("click", function () {

    productModal.classList.remove("active");

});
/* ================= MODAL WHATSAPP ORDER ================= */

const modalOrderButton =
    document.getElementById("modal-order-btn");

const productSize =
    document.getElementById("product-size");

const productQuantity =
    document.getElementById("product-quantity");

const customerName =
    document.getElementById("customer-name");

const customerPhone =
    document.getElementById("customer-phone");

const customerAddress =
    document.getElementById("customer-address");

const customerNote =
    document.getElementById("customer-note");


modalOrderButton.addEventListener("click", function () {

    const name = customerName.value.trim();
    const phone = customerPhone.value.trim();
    const address = customerAddress.value.trim();
    const note = customerNote.value.trim();


    if (name === "" || phone === "" || address === "") {

        alert(
            "Please enter your Name, Phone Number and Delivery Address."
        );

        return;

    }


    const productName =
        modalTitle.textContent;

    const productPrice =
        modalPrice.textContent;

    const selectedSize =
        productSize.value;

    const selectedQuantity =
        productQuantity.value;


    const message =
        "Hello Aiza Fashion! 👋\n\n" +

        "I want to place an order:\n\n" +

        "Product: " + productName + "\n" +
        "Price: " + productPrice + "\n" +
        "Size: " + selectedSize + "\n" +
        "Quantity: " + selectedQuantity + "\n\n" +

        "Customer Information:\n" +
        "Name: " + name + "\n" +
        "Phone: " + phone + "\n" +
        "Address: " + address + "\n" +

        (note !== ""
            ? "Order Note: " + note + "\n"
            : "") +

        "\nPlease confirm my order. Thank you!";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(message);


    window.open(whatsappURL, "_blank");

});

/* Close by clicking outside */

productModal.addEventListener("click", function (event) {

    if (event.target === productModal) {

        productModal.classList.remove("active");

    }

});
/* ================= PRODUCT GALLERY ================= */

const thumbnails = document.querySelectorAll(".thumbnail");
const mainImagePlaceholder =
    document.getElementById("main-image-placeholder");

thumbnails.forEach(function (thumbnail) {

    thumbnail.addEventListener("click", function () {

        mainImagePlaceholder.textContent =
            thumbnail.textContent;

        thumbnails.forEach(function (item) {
            item.classList.remove("active");
        });

        thumbnail.classList.add("active");

    });

});