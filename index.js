

const tabs = document.querySelector('.tabs');

tabs.addEventListener('click', e => handleClick(e));

function handleClick(e) {
  const target = e.target;
  const tabNum = target.dataset.tab;
  const activeTab = document.querySelector('.tabs .active');
  const activeContent = document.querySelector(
    '.content .visible'
  );
  const currentContent = document.querySelector(
    `.content__section[data-tab='${tabNum}']`
  );
  
  if (!tabNum) {
    return;
  }
  
  activeTab.classList.remove('active');
  target.classList.add('active');
  activeContent.classList.remove('visible');
  currentContent.classList.add('visible');
}



// The place I saw this effect:
// https://angle2.agency/


window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleWindowResize);
  
  const spansSlow = document.querySelectorAll('.spanSlow');
  const spansFast = document.querySelectorAll('.spanFast');

  let width = window.innerWidth;

  function handleMouseMove(e) {
    let normalizedPosition = (e.pageX - width/2)/(width/2);
    let speedSlow = 100 * normalizedPosition;
    let speedFast = 200 * normalizedPosition;
    spansSlow.forEach((span) => {
      span.style.transform = `translate(${speedSlow}px)`;
    });
    spansFast.forEach((span) => {
      span.style.transform = `translate(${speedFast}px)`
    })
  }
  //we need to recalculate width when the window is resized
  function handleWindowResize() {
    width = window.innerWidth;
  }

  


const hamburger_menu = document.querySelector(".hamburger-menu");
const container = document.querySelector(".container");

hamburger_menu.addEventListener("click", () => {
  container.classList.toggle("active");
});
$(window).on("load",function(){
  $(".loader-container").fadeOut(1000);
});

