

const heroSlider = new Swiper(".heroSwiper",{

  loop:true,

  autoplay:{
    delay:3000,
    disableOnInteraction:false,
  },

  pagination:{
    el:".swiper-pagination",
    clickable:true,
  },

  navigation:{
    nextEl:".swiper-button-next",
    prevEl:".swiper-button-prev",
  },

});




const tabButtons = document.querySelectorAll(".tab-button");

const tabContents = document.querySelectorAll(".tab-content");


tabButtons.forEach((button)=>{

  button.addEventListener("click",()=>{

    const currentTab = button.dataset.tab;

    tabButtons.forEach((btn)=>{
      btn.classList.remove("active");
    });

    tabContents.forEach((content)=>{
      content.classList.remove("active");
    });

    button.classList.add("active");

    document
      .getElementById(`tab-${currentTab}`)
      .classList.add("active");

  });

});