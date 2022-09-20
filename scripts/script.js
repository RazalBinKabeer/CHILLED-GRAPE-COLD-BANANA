const productsContainer = document.querySelector(".products-container");

const fetchData = async () => {
    // Fetching API Data
    const apiUrl =
        "https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products";

    const response = await fetch(apiUrl);
    const data = await response.json();
    const products = data[0];

    // Creating html elements for each data
    for (let i = 0; i < products.length - 1; i++) {
        const productContainer = document.createElement("div");
        productContainer.setAttribute("class", "product-container");

        // Image element
        const productImg = document.createElement("img");
        productImg.setAttribute("src", `${products[i].image}`);

        // Name element
        const productName = document.createElement("h3");
        const productText = document.createTextNode(
            `${products[i].product_name}`
        );
        productName.appendChild(productText);

        // Price element
        const productPrice = document.createElement("p");
        const priceText = document.createTextNode(`$${products[i].price}`);
        productPrice.appendChild(priceText);

        productContainer.appendChild(productImg);
        productContainer.appendChild(productName);
        productContainer.appendChild(productPrice);

        productsContainer.appendChild(productContainer);
    }
};

fetchData();
