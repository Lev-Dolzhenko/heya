// DATE FOR COPYRIGHT

const currDate = new Date();
const copyRightText = document.getElementById("copyrightYear");

copyRightText.textContent = currDate.getFullYear();

var swiper = new Swiper(".mySwiper", {
  loop: true,
  navigation: {
    nextEl: ".case-button-next",
    prevEl: ".case-button-prev",
  },
});

// ADD TAGS TO SEARCH

const tags = document.querySelectorAll(".header__tags_item");
const searchTags = document.querySelectorAll(".form__wrapper_tag");
const closeTags = document.querySelectorAll(".button_tag");
const screenWidth = window.screen.width;

for (let tag of tags) {
  tag.addEventListener("click", function () {
    const tagAtr = tag.getAttribute("data-tag");
    for (let searchTag of searchTags) {
      const searchTagAtr = searchTag.getAttribute("data-search-tag");
      if (tagAtr === searchTagAtr) {
        if (screenWidth >= 680) {
          searchTag.classList.remove("none");
        } else if (screenWidth < 680) {
          tag.classList.toggle("active");
        }
      }
    }
  });
}

for (let closeTag of closeTags) {
  const closeTagAtr = closeTag.getAttribute("data-close");
  closeTag.addEventListener("click", function (e) {
    e.preventDefault();
    for (let searchTag of searchTags) {
      const searchTagAtr = searchTag.getAttribute("data-search-tag");
      if (closeTagAtr === searchTagAtr) {
        searchTag.classList.add("none");
      }
    }
  });
}

// DROPDOWN

const dropdowns = document.querySelectorAll(".data-gropdown");
const dropdownsButtons = document.querySelectorAll(".data-gropdown-button");

for (let dropdownsButton of dropdownsButtons) {
  const dropdownsButtonAtr = dropdownsButton.getAttribute(
    "data-gropdown-button"
  );
  dropdownsButton.addEventListener("click", function () {
    for (let dropdown of dropdowns) {
      const dropdownAtr = dropdown.getAttribute("data-gropdown");
      if (dropdownsButtonAtr === dropdownAtr) {
        dropdown.classList.toggle("none");
      }
    }
  });
}

// MOBILE NAV

const burgerIcon = document.getElementById("burgerIcon");
const mobileMenu = document.querySelector(".header__row_nav_mobile");
const overlay = document.querySelector(".overlay");

burgerIcon.addEventListener("click", function (e) {
  e.preventDefault()
  mobileMenu.classList.toggle("show");
  overlay.classList.toggle("show");
});
