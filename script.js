const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    nav.classList.toggle('active');
});

document.addEventListener('click', (e) => {
    if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
        hamburger.classList.remove('active');
        nav.classList.remove('active');
    }
});

// Get all headers
const headers = document.querySelectorAll('.accordion-header');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const item = header.parentElement;
    const openItem = document.querySelector('.accordion-item.active');
    
    if (openItem && openItem !== item) {
      openItem.classList.remove('active');
    }
    
    item.classList.toggle('active');
  });
});

const cards=document.querySelector('.pay-cards').children

for (const element of cards) {
  element.onclick=()=>{
    for (const e of cards) {
      e.classList.remove('active-card')
    }
    element.classList.add('active-card')
  }
}

const mainImg = document.getElementById('main-img');
const previewImgs = document.querySelectorAll('.preview');

previewImgs.forEach(img => {
  img.addEventListener('click', () => {
    previewImgs.forEach(p => p.classList.remove('active'));
    img.classList.add('active');
    mainImg.src = img.src;
  });
});