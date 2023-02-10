const card_data = [
  {
    img: "./image/zoro3.jpg",
    name: "Roronoa Zoro",
    DevilFruit: "None",
    Origin: "East Blue",
    Occupation: "Sworsdman",
  },
  {
    img: "./image/nami.jpg",
    name: "Nami",
    DevilFruit: "None",
    Origin: "Cocoyashi Village",
    Occupation: "Navigator",
  },
  {
    img: "./image/usopp.jpg",
    name: "Usopp",
    DevilFruit: "None",
    Origin: "Syrup Village",
    Occupation: "Sniper",
  },
  {
    img: "./image/sanji.jpg",
    name: "Vinsmoke Sanji",
    DevilFruit: "None",
    Origin: "North Blue",
    Occupation: "Cook",
  },
];
const cards = document.querySelector("#cards");
function show_card() {
  card_data.map(function (e) {
    const article = document.createElement("article");
    const card_img = document.createElement("div");
    const img = document.createElement("img");
    const card_text = document.createElement("div");
    const h1 = document.createElement("h1");
    const s1 = document.createElement("span");
    const s2 = document.createElement("span");
    const s3 = document.createElement("span");
    const card_button = document.createElement("div");
    const a = document.createElement("a");
    article.className = "card";
    card_img.className = "card-img";
    card_text.className = "card-text";
    card_button.className = "card-button";
    img.src = e.img;
    h1.innerText = e.name;
    s1.innerText = "DevilFruit: " + e.DevilFruit;
    s2.innerText = "Origin: " + e.Origin;
    s3.innerText = "Occupation: " + e.Occupation;
    card_button.innerText = "Read-more";
    card_img.appendChild(img);
    card_text.appendChild(h1);
    card_text.appendChild(s1);
    card_text.appendChild(s2);
    card_text.appendChild(s3);
    article.appendChild(card_img);
    article.appendChild(card_text);
    article.appendChild(card_button);
    cards.appendChild(article);
  });
}

humburger = document.querySelector(".humburger");
humburger.onclick = function () {
  navBar = document.querySelector(".nav-bar");
  flag = document.querySelector(".flag");

  navBar.classList.toggle("active");

  if (navBar.classList.contains("active")) {
    console.log("dfd");
    flag.style.display = "none";
  } else {
    flag.style.display = "inline";
  }
};
show_card();
