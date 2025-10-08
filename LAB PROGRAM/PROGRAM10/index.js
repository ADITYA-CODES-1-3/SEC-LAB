const con = document.getElementById("container");

// 1️⃣ Render local car data
const mydata = [
  { name: "Shelby", image: "https://cdn.motor1.com/images/mgl/9mZpXv/s3/2020-2022-ford-mustang-shelby-gt500kr.jpg", power: "760hp" },
  { name: "Ferrari", image: "https://cdn.classic-trader.com/I/images/300_225_inset/vehicle_ad_standard_image_fe58360bb8984733b8b22feeff3cbd11.jpg", power: "800hp" },
  { name: "Mustang", image: "https://media.ed.edmunds-media.com/ford/mustang/2026/oem/2026_ford_mustang_coupe_dark-horse_fq_oem_1_1280.jpg", power: "450hp" }
];

mydata.forEach(car => {
  con.innerHTML += `
    <div class="car-item">
      <h1>${car.name}</h1>
      <img src="${car.image}" />
      <h3>Power: ${car.power}</h3>
    </div>
  `;
});

// 2️⃣ Fetch products and append
fetch('https://fakestoreapi.com/products')
  .then(res => res.json())
  .then(data => {
    data.forEach(product => {
      con.innerHTML += `
        <div class="car-item">
          <h1>${product.title}</h1>
          <img src="${product.image}" />
          <h3>Price: $${product.price}</h3>
        </div>
      `;
    });
  })
  .catch(err => console.error(err));
