// 메인비주얼
const mainVisualSmallThumb = document.querySelectorAll(
  ".main-visual-swiper .small-thumb-group > li"
);
const mainVisualSlides = document.querySelectorAll(
  ".main-visual-swiper .swiper-slide"
);
const mainVisualMatch = matchMedia("(max-width:768px)");
const mainVisualSwiper = new Swiper(".main-visual-swiper", {
  autoplay: {
    delay: 2500,
  },

  spaceBetween: 0.5,

  breakpoints: {
    768: {
      slidesPerView: 1,
      spaceBetween: 0.5,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    },
  },
  on: {
    init: function () {
      mainVisualSmallThumb[0].classList.add("active");
    },
    slideChange: function () {
      mainVisualSmallThumb.forEach((b) => {
        b.classList.remove("active");
      });
      mainVisualSmallThumb[this.activeIndex].classList.add("active");
    },
  },
});

//작은 썸네일 마우스 호버 시
mainVisualSmallThumb.forEach((a, i) => {
  a.addEventListener("mouseenter", function () {
    mainVisualSmallThumb.forEach((b) => {
      b.classList.remove("active");
    });
    a.classList.add("active");
    let findIdx = [...mainVisualSlides].findIndex(
      (c) => c.dataset.id === a.dataset.id
    );
    mainVisualSwiper.slideTo(findIdx);
  });
});

//반응형 메인비주얼스와이퍼 이미지 바꾸기,
function mainVisualLoadImg() {
  if (mainVisualMatch.matches) {
    document
      .querySelectorAll(".main-visual-swiper .swiper-slide img")
      .forEach((a, i) => {
        if (a.getAttribute("src") != `img/main-img/res-main-visual (${i + 1}).gif`) {
          a.setAttribute("src", `img/main-img/res-main-visual (${i + 1}).gif`);
        }
      });
  } else {
    document
      .querySelectorAll(".main-visual-swiper .swiper-slide img")
      .forEach((a, i) => {
        if (a.getAttribute("src") != `img/main-img/main-visual (${i + 1}).jpg`) {
          a.setAttribute("src", `img/main-img/main-visual (${i + 1}).jpg`);
        }
      });
  }
}
mainVisualMatch.addEventListener("change", function () {
  mainVisualLoadImg();
});
mainVisualLoadImg();

// top-banner -----------------------
const topBannerSwiper = new Swiper(".top-banner-swiper", {
  slidesPerView: "3",
  spaceBetween: 16,
  loop: true,

  navigation: {
    nextEl: ".top-banner-next",
    prevEl: ".top-banner-prev",
  },
  pagination: {
    el: ".swiper-pagination.top-banner-pagi",
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 23,
    },
    480: {
      slidesPerView: 1.3,
      spaceBetween: 30,
    },
    0: {
      slidesPerView: 1,
      spaceBetween: 0,
    },
  },
});

// ticket-open
const ticketOpenSwiper = new Swiper(".ticket-open-swiper", {
  slidesPerView: 5,
  spaceBetween: 40,
  navigation: {
    nextEl: ".swiper-button-next.open-next",
    prevEl: ".swiper-button-prev.open-prev",
  },
  breakpoints: {
    1400: {
      slidesPerView: 5,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 30,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      grid: {
        fill: "column",
        rows: 1,
      },
    },
    480: {
      slidesPerView: 2.5,
      spaceBetween: 18,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    0: {
      slidesPerView: 1.5,
      spaceBetween: 18,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
  },
});

// 경현 part

const interParkPlaySwiper = new Swiper(".interParkPlaySwiper", {
  effect: "coverflow",
  centeredSlides: true,
  initialSlide: 1,
  slidesPerView: "2.5",
  spaceBetween: 70,
  speed: 600,
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 200,
    modifier: 1,
    slideShadows: false,
  },
  on: {
    slideChange: function () {
      if (this.activeIndex == 0) {
        document
          .querySelector(
            ".interpark-play .swiper-button-prev.play-prev-responsive"
          )
          .classList.add("disabled");
      } else {
        document
          .querySelector(
            ".interpark-play .swiper-button-prev.play-prev-responsive"
          )
          .classList.remove("disabled");
      }

      if (this.activeIndex == this.slides.length - 1) {
        document
          .querySelector(
            ".interpark-play .swiper-button-next.play-next-responsive"
          )
          .classList.add("disabled");
      } else {
        document
          .querySelector(
            ".interpark-play .swiper-button-next.play-next-responsive"
          )
          .classList.remove("disabled");
      }
    },
  },
  navigation: {
    nextEl: ".swiper-button-next.play-next",
    prevEl: ".swiper-button-prev.play-prev",
  },

  breakpoints: {
    1200: { slidesPerView: 2.5 },
    1024: {
      slidesPerView: 2.2,
    },
    768: {
      slidesPerView: 2,
    },
    0: {
      slidesPerView: 1,
    },
  },
});
document
  .querySelector(".swiper-button-next.play-next-responsive")
  .addEventListener("click", function () {
    interParkPlaySwiper.slideNext();
  });
document
  .querySelector(".swiper-button-prev.play-prev-responsive")
  .addEventListener("click", function () {
    interParkPlaySwiper.slidePrev();
  });

const bestReviewSwiper01 = new Swiper(".bestReviewSwiper01", {
  direction: "vertical",
  slidesPerView: 4,
  speed: 2000,
  spaceBetween: 15,
  autoplay: {
    delay: 1,
    disableOnInteraction: false,
  },
  loop: true,
});

const bestReviewSwiper02 = new Swiper(".bestReviewSwiper02", {
  direction: "vertical",
  loop: true,
  slidesPerView: 4,
  speed: 2000,
  spaceBetween: 15,
  autoplay: {
    delay: 1,
    reverseDirection: true,
    disableOnInteraction: false,
  },
  loop: true,
});

document.querySelectorAll(".best-review-content>div ").forEach((a) => {
  a.addEventListener("mouseover", function () {
    bestReviewSwiper01.autoplay.stop();
    bestReviewSwiper02.autoplay.stop();
  });
  a.addEventListener("mouseout", function () {
    bestReviewSwiper01.autoplay.start();
    bestReviewSwiper02.autoplay.start();
  });
});

const bottomBannerSwiper = new Swiper(".bottomBannerSwiper", {
  navigation: {
    nextEl: ".swiper-button-next.bottom-banner-next",
    prevEl: ".swiper-button-prev.bottom-banner-prev",
  },
  pagination: {
    el: ".swiper-pagination.bottom-banner-pagination",
    clickable: true,
  },
  slidesPerView: 4,
  spaceBetween: 15,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
    768: {
      spaceBetween: 15,
      slidesPerView: 3,
      grid: {
        fill: "column",
        rows: 1,
      },
    },
    480: {
      spaceBetween: 18,
      slidesPerView: 2,
      grid: {
        fill: "row",
        rows: 2,
      },
    },
    0: {
      slidesPerView: 1,
      grid: {
        fill: "column",
        rows: 1,
      },
    },
  },
});
const mainRightAdSwiper = new Swiper(".mainRightAdSwiper", {
  pagination: {
    el: ".swiper-pagination.main-right-ad-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2500,
  },
});

document
  .querySelector(".mainRightAdSwiper .main-right-ad-pause")
  .addEventListener("click", function () {
    mainRightAdSwiper.autoplay.stop();
    this.style.display = "none";
    this.nextElementSibling.style.display = "block";
  });
document
  .querySelector(".mainRightAdSwiper .main-right-ad-play")
  .addEventListener("click", function () {
    mainRightAdSwiper.autoplay.start();
    this.style.display = "none";
    this.previousElementSibling.style.display = "block";
  });
