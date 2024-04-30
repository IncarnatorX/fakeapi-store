// sampleProducts = [
//   {
//     image: "https://picsum.photos/200",
//     title: "Sample product",
//     description: "Sample Description",
//     price: "100 rupees",
//   },
//   {
//     image: "https://picsum.photos/200",
//     title: "Sample product",
//     description: "Sample Description",
//     price: "100 rupees",
//   },
//   {
//     image: "https://picsum.photos/200",
//     title: "Sample product",
//     description: "Sample Description",
//     price: "100 rupees",
//   },
//   {
//     image: "https://picsum.photos/200",
//     title: "Sample product",
//     description: "Sample Description",
//     price: "100 rupees",
//   },
// ];

// creatingElements(sampleProducts);

// ------------------------------------------------------------------------------------------------------------------------------------

fetch("https://fakestoreapi.com/products/")
  .then((res) => res.json())
  .then((json) => creatingElements(json));

// creatingElements is a function that being called here. Definition of the function is below.
// Instead of passing json (which is array of objects) as a argument, we can create another array of objects having the product details
//creatingElements function is the KEY. It does all the hardwork for us.

function creatingElements(fakeProducts) {
  fakeProducts.forEach((el) => {
    let productCard = document.querySelector(".products"); //product container from HTML

    let divCard = document.createElement("div"); //creating a card DIV that holds image, title, desc, price and button
    divCard.classList.add("card");

    let productImage = document.createElement("img"); //creating image
    productImage.src = el.image;
    productImage.classList.add("card-img");

    let productTitle = document.createElement("h2"); //creating title
    productTitle.innerHTML = el.title;

    let productDesc = document.createElement("h4"); //creating desc
    productDesc.innerHTML = el.description;

    let price = document.createElement("p"); //creating price
    price.innerHTML = `Price: ${el.price} rupees`;

    let _button = document.createElement("button"); //creating button
    _button.innerHTML = "Add to Cart";
    _button.classList.add("cart-btn");

    productCard.append(divCard);
    divCard.append(productImage, productTitle, productDesc, price, _button);
  });
}
