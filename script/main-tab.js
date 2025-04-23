const data = [
  [
    {
      img: "img/main-img/sec5_musical00.gif",
      title: "뮤지컬 <알라딘> 한국 초연",
    },
    {
      img: "img/main-img/sec5_musical01.gif",
      title: "최현우 19＋I",
    },
    {
      img: "img/main-img/sec5_musical02.gif",
      title: "뮤지컬 〈스윙 데이즈_암호명 A〉",
    },
  ],
  [
    {
      img: "img/main-img/sec5_concert01.gif",
      title: "찰리푸스 내한공연",
    },
    {
      img: "img/main-img/sec5_concert02.gif",
      title: "콜드플레이 내한공연",
    },
    {
      img: "img/main-img/sec5_concert03.gif",
      title: "2024 영탁 단독 콘서트 “TAK SHOW3”",
    },
  ],
  [
    {
      img: "img/main-img/sec5_sport01.gif",
      title: "UFC 더블 챔피언 알렉스 페레이라＆불합리한 VIP 디너 및 팬미팅",
    },
    {
      img: "img/main-img/sec5_sport02.gif",
      title: "UFC 챔피언 알렉스 페레이라의 불합리한 타격 세미나",
    },
    {
      img: "img/main-img/sec5_sport03.gif",
      title: "전남드래곤즈 vs 부산아이파크 (11.21)",
    },
  ],
  [
    {
      img: "img/main-img/sec5_event01.gif",
      title: "디즈니 백년 특별전",
    },
    {
      img: "img/main-img/sec5_event02.gif",
      title: "대구간송미술관 개관기념 국보.보물전 〈여세동보(與世同寶)〉",
    },
    {
      img: "img/main-img/sec5_classic03.gif",
      title: "미셸 앙리",
    },
  ],
  [
    {
      img: "img/main-img/sec5_classic01.gif",

      title: "신카이 마코토 공식 하이라이트 필름콘서트 ",
    },
    {
      img: "img/main-img/sec5_classic02.gif",
      title: "프리마 델라 프리마 〈라 보엠〉",
    },
    {
      img: "img/main-img/sec5_classic03.gif",
      title: "유니버설발레단 〈호두까기인형〉",
    },
  ],
  [
    {
      img: "img/main-img/sec5_kids01.gif",

      title: "뮤지컬 〈장수탕 선녀님〉",
    },
    {
      img: "img/main-img/sec5_kids02.gif",
      title: "가족뮤지컬 〈드래곤하이 스페셜〉",
    },
    {
      img: "img/main-img/sec5_kids03.gif",
      title: "가족뮤지컬 〈꼬마버스 타요 - 용감한 구조대 레스큐 타요〉",
    },
  ],
  [
    {
      img: "img/main-img/sec5_play01.gif",

      title: "연극 〈늘근도둑이야기〉",
    },
    {
      img: "img/main-img/sec5_play02.gif",
      title: "한뼘사이",
    },
    {
      img: "img/main-img/sec5_play03.gif",
      title: "행오버",
    },
  ],
  [
    {
      img: "img/main-img/sec5_camp01.gif",

      title: "2024 안성맞춤캠핑장",
    },
    {
      img: "img/main-img/sec5_camp02.gif",
      title: "한탄강 관광지 오토캠핑장",
    },
    {
      img: "img/main-img/sec5_camp03.gif",
      title: "자라섬캠핑장",
    },
  ],
];

const tabBtn = document.querySelectorAll(".ranking-tabs>ul>li");

tabBtn.forEach((a, i) => {
  a.addEventListener("click", function () {
    tabBtn.forEach((b, j) => {
      b.classList.remove("active");
    });
    a.classList.add("active");
    let imgs = document.querySelectorAll(".rank-poster>a>img");
    let title = document.querySelectorAll(".rank-poster-title");
    imgs.forEach((b, j) => {
      b.setAttribute("src", `${data[i][j].img}`);
    });
    title.forEach((b, j) => {
      console.log(b);
      b.textContent = `${data[i][j].title}`;
    });
  });0
});
