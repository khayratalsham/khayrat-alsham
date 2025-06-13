const products = [
{
  name: "عسل طبيعي",
  price: "10 يورو",
  image: "images/honey.jpg"
},

  {
    name: "زعتر بلدي",
    price: "15 ريال",
    image: "images/thyme.jpg"
  },
  {
    name: "دبس رمان طبيعي",
    price: "20 ريال",
    image: "images/pomegranate.jpg"
  }
];

const phoneNumber = "966XXXXXXXXX"; // رقم الواتساب بدون +

const container = document.getElementById("product-list");

products.forEach(product => {
  const card = document.createElement("div");
  card.className = "product";

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <div class="product-content">
      <h3>${product.name}</h3>
      <p>السعر: ${product.price}</p>
      <a href="https://wa.me/${phoneNumber}?text=مرحبًا، أرغب بطلب: ${encodeURIComponent(product.name)} بسعر ${product.price}" target="_blank">اطلب عبر واتساب</a>
    </div>
  `;

  container.appendChild(card);
});
