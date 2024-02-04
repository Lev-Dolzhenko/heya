// DATE FOR COPYRIGHT

const currDate = new Date()
const copyRightText = document.getElementById('copyrightYear')

copyRightText.textContent = currDate.getFullYear()


var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".case-button-next",
    prevEl: ".case-button-prev",
  },
});
