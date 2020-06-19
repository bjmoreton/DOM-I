const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let anchorTags = document.querySelectorAll("nav a");
let link1 = document.createElement("a");
let link2 = document.createElement("a");

link1.textContent = "Test One";
link2.textContent = "Test Two";

link1.setAttribute("href", "#");
link2.setAttribute("href", "#");
link1.style.color = "green";
link2.style.color = "green";

document.querySelector("nav").appendChild(link1);
document.querySelector("nav").appendChild(link2);

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"]);

let ctaImg = document.getElementById("cta-img");
ctaImg.setAttribute('src', siteContent["cta"]["img-src"]);

let middleImg = document.getElementById("middle-img");
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"]);

anchorTags.forEach((anchor, index) => {
  anchor.textContent = siteContent["nav"]["nav-item-" + (index + 1)];
  anchor.style.color = "green";
});

let ctaH1 = document.querySelector(".cta-text h1");
ctaH1.textContent = siteContent["cta"]["h1"];

let ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

let topContent = document.querySelectorAll(".top-content .text-content");
topContent[0].querySelector("h4").textContent = siteContent["main-content"]["features-h4"];
topContent[0].querySelector("p").textContent = siteContent["main-content"]["features-content"];
topContent[1].querySelector("h4").textContent = siteContent["main-content"]["about-h4"];
topContent[1].querySelector("p").textContent = siteContent["main-content"]["about-content"];

let bottomContent = document.querySelectorAll(".bottom-content .text-content");
bottomContent[0].querySelector("h4").textContent = siteContent["main-content"]["services-h4"];
bottomContent[0].querySelector("p").textContent = siteContent["main-content"]["services-content"];
bottomContent[1].querySelector("h4").textContent = siteContent["main-content"]["product-h4"];
bottomContent[1].querySelector("p").textContent = siteContent["main-content"]["product-content"];
bottomContent[2].querySelector("h4").textContent = siteContent["main-content"]["vision-h4"];
bottomContent[2].querySelector("p").textContent = siteContent["main-content"]["vision-content"];

let contact = document.querySelector(".contact");
contact.querySelector("h4").textContent = siteContent["contact"]["contact-h4"];
let contactAddress = document.querySelectorAll(".contact p");
contactAddress[0].textContent = siteContent["contact"]["address"];
contactAddress[1].textContent = siteContent["contact"]["phone"];
contactAddress[2].textContent = siteContent["contact"]["email"];
let footer = document.querySelector("footer p");
footer.textContent = siteContent["footer"]["copyright"];
