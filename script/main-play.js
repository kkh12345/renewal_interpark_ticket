const slidesData = {
  recomended: [
    {img: 'img/main-img/recommended1.jpg',
    title: '러브레터 & 냉정과 열정사이 시네마 콘서트'},
    {img: 'img/main-img/recommended2.jpg',
    title: '뮤지컬 〈광화문연가〉'},
    {img: 'img/main-img/recommended3.jpg',
    title: '뮤지컬 〈스윙 데이즈_암호명 A〉'},
    {img: 'img/main-img/recommended4.jpg',
    title: '경기도극단 레퍼토리시즌 〈우리읍내〉 - 수원'},
    {img: 'img/main-img/recommended5.jpg',
    title: '2024 마술사 유호진 단독 콘서트 〈오푸스〉'},
    {img: 'img/main-img/recommended6.jpg',
    title: '뮤지컬 〈드라이 플라워〉'}
  ],
  musical: [
    {img: 'img/main-img/musical1.jpg',
    title: '뮤지컬 〈이프덴〉'},
    {img: 'img/main-img/musical2.jpg',
    title: '뮤지컬 〈면면면〉'},
    {img: 'img/main-img/musical3.jpg',
    title: '뮤지컬 〈시라노〉'},
    {img: 'img/main-img/musical4.jpg',
    title: '뮤지컬 〈여신님이 보고 계셔〉'},
    {img: 'img/main-img/musical5.jpg',
    title: '뮤지컬 〈해적〉 : THE LAST VOYAGE'},
    {img: 'img/main-img/musical6.jpg',
    title: '뮤지컬 〈마타하리〉'}
  ],
  concert: [
    {img: 'img/main-img/concert1.jpg',
    title: '7 ROCK PRIME 2024'},
    {img: 'img/main-img/concert2.jpg',
    title: '2024 JAY B CONCERT TAPE : RE LOAD'},
    {img: 'img/main-img/concert3.jpg',
    title: '2024 CRUSH CONCERT [CRUSH HOUR : O]'},
    {img: 'img/main-img/concert4.jpg',
    title: '2024 노을 전국투어 콘서트 〈노을이 내린 밤〉-서울'},
    {img: 'img/main-img/concert5.jpg',
    title: '2024 임한별의 별(別) 연말 콘서트 〈크리스마스타(A Christmas’ Star)〉 in 서울'},
    {img: 'img/main-img/concert6.jpg',
    title: '2024-25 허각 전국투어 콘서트 〈공연각〉 in 서울'}
  ],
  display: [
    {img: 'img/main-img/display1.jpg',
    title: '[HYBE INSIGHT] 지민 전시 ‘The Truth Untold : 전하지 못한 진심’'},
    {img: 'img/main-img/display2.jpg',
    title: '툴루즈 로트렉'},
    {img: 'img/main-img/display3.jpg',
    title: '다니엘 아샴: 서울 3024'},
    {img: 'img/main-img/display4.jpg',
    title: '디즈니 100년 특별전'}
  ],
  classic: [
    {img: 'img/main-img/classic1.jpg',
    title: '유니버설발레단 〈호두까기인형〉'},
    {img: 'img/main-img/classic2.jpg',
    title: '지브리＆디즈니 영화음악 FESTA'},
    {img: 'img/main-img/classic3.jpg',
    title: '히사이시 조 영화음악 콘서트 2024_서울(세종)'},
    {img: 'img/main-img/classic4.jpg',
    title: '로열 클래식 발레단 내한공연 〈호두까기 인형〉 - 대구'}
  ],
  family: [
    {img: 'img/main-img/family1.jpg',
    title: '가족뮤지컬 〈드래곤하이 스페셜〉'},
    {img: 'img/main-img/family2.jpg',
    title: '가족매직쇼 〈구구쌤의 매직쑈라구〉 - 김해 장유'},
    {img: 'img/main-img/family3.jpg',
    title: '베베핀 뮤지컬 〈우당탕탕 패밀리〉'},
    {img: 'img/main-img/family4.jpg',
    title: '뮤지컬 〈달 샤베트〉 - 서울숲'}
  ],
  theater: [
    {img: 'img/main-img/theater1.jpg',
    title: '연극 〈테베랜드〉'},
    {img: 'img/main-img/theater2.jpg',
    title: '연극 〈나와 할아버지〉 : 공연배달서비스 간다 20주년 퍼레이드'},
    {img: 'img/main-img/theater3.jpg',
    title: '연극 〈더 파더〉'},
    {img: 'img/main-img/theater4.jpg',
    title: '2024 예술의전당 토월정통연극 〈햄릿〉'},
    {img: 'img/main-img/theater5.jpg',
    title: '연극 〈더 드레서〉'},
    {img: 'img/main-img/theater6.jpg',
    title: '연극 〈사운드 인사이드〉'},
  ]
}

const playTabBtn = document.querySelectorAll('.tap-menu > li');
const playListContainer = document.querySelector('.interParkPlaySwiper .swiper-wrapper');

function interparkPlay(genre) {
  playListContainer.innerHTML = '';

  slidesData[genre].forEach((item,i) => {

    const slide = document.createElement('div');
    slide.classList.add('swiper-slide');

    const link = document.createElement('a');
    link.href = '#none';
    
    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    

    link.appendChild(img);

    const hoverText = document.createElement('div');
    hoverText.classList.add('interParkPlayhover');
    hoverText.textContent = item.title;

    // 슬라이드에 요소 추가
    slide.appendChild(link);
    slide.appendChild(hoverText);

    // 슬라이드를 컨테이너에 추가
    playListContainer.appendChild(slide);
  });
}

// 탭 클릭 이벤트 설정

playTabBtn.forEach((tab, index) => {
  tab.addEventListener('click', () => {
    
    if(window.innerWidth<768){
      interParkPlaySwiper.slideTo(0)
    }
    else{
      interParkPlaySwiper.slideTo(1)}
    
  
    // 모든 탭의 selected 클래스 제거
    playTabBtn.forEach(btn => btn.classList.remove('selected'));
    tab.classList.add('selected'); // 선택된 탭에 클래스 추가

    // 장르에 따라 슬라이드 업데이트
    const genre = Object.keys(slidesData)[index];
  
    interparkPlay(genre);
    interParkPlaySwiper.update();
  });
});

// 초기 실행: 첫 번째 탭 데이터를 기본으로 렌더링
interparkPlay(Object.keys(slidesData)[0]);

