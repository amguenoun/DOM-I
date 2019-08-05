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
const logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//Update the links for the nav
const links = document.querySelectorAll('nav a');
links.forEach((item, index) => {
  item.textContent = siteContent["nav"][`nav-item-${index + 1}`];
});

//Update the cta section
//The cta h1 element
const ctaHeader = document.querySelector(".cta-text h1");
ctaHeader.textContent = siteContent["cta"]["h1"];

//the cta button element
const ctaButton = document.querySelector(".cta-text button");
ctaButton.textContent = siteContent["cta"]["button"];

//the cta img element
const ctaImg = document.querySelector("#cta-img");
ctaImg.src = siteContent["cta"]["img-src"];


//Update the main content
//Updates top-content's text-content
const topTextContent = document.querySelectorAll(".top-content .text-content");
topTextContent.forEach((item, index) => {
  if (index === 0) {
    item.querySelector('h4').textContent = siteContent["main-content"]["features-h4"];
    item.querySelector('p').textContent = siteContent["main-content"]["features-content"];
  }
  else {
    item.querySelector('h4').textContent = siteContent["main-content"]["about-h4"];
    item.querySelector('p').textContent = siteContent["main-content"]["about-content"];
  }
});

//Update middle img
const middleImg = document.querySelector('#middle-img');
middleImg.src = siteContent["main-content"]["middle-img-src"];

//Updates bottom-content's text-content
const bottomTextContent = document.querySelectorAll(".bottom-content .text-content");
bottomTextContent.forEach((item, index) => {
  if (index === 0) {
    item.querySelector('h4').textContent = siteContent["main-content"]["services-h4"];
    item.querySelector('p').textContent = siteContent["main-content"]["services-content"];
  }
  else if (index === 1) {
    item.querySelector('h4').textContent = siteContent["main-content"]["product-h4"];
    item.querySelector('p').textContent = siteContent["main-content"]["product-content"];
  }
  else {
    item.querySelector('h4').textContent = siteContent["main-content"]["vision-h4"];
    item.querySelector('p').textContent = siteContent["main-content"]["vision-content"];
  }
});

//Updates the contact section
//Updates contact header
const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = siteContent["contact"]["contact-h4"];

//Updates contact Paragraphs
const contactParagraphs = document.querySelectorAll('.contact p');
contactParagraphs.forEach((item, index) => {
  if (index === 0) {
    item.textContent = siteContent.contact.address;
  }
  else if (index === 1) {
    item.textContent = siteContent.contact.phone;
  }
  else {
    item.textContent = siteContent.contact.email;
  }
});

//Updates footer section
const footerPara = document.querySelector('footer p');
footerPara.textContent = siteContent.footer.copyright;
