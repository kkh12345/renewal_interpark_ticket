let HOME_PATH = window.HOME_PATH || '.';
let cityhall = new naver.maps.LatLng(37.5666805, 126.9784147);
let map = new naver.maps.Map('map', {
  center: cityhall,
  zoom: 15,
});

let locationArr = [
  {
    place: '블루스퀘어',
    lat: [37.540839, 127.002648],
    address: '서울특별시 용산구 이태원로 294',
    link: 'http://www.bluesquare.kr',
  },
  {
    place: '예술의전당',
    lat: [37.479448, 127.012845],
    address: '서울특별시 서초구 남부순환로 2406',
    link: 'http://www.sac.or.kr',
  },
  {
    place: '세종문화회관',
    lat: [37.572725, 126.975593],
    address: '서울특별시 종로구 세종대로 175',
    link: 'http://www.sejongpac.or.kr',
  },
  {
    place: '충무아트센터',
    lat: [37.566159, 127.014763],
    address: '서울특별시 중구 퇴계로 387',
    link: 'https://www.caci.or.kr',
  },
  {
    place: '유니버설아트센터',
    lat: [37.550973, 127.087959],
    address: '서울특별시 광진구 천호대로 664',
    link: 'http://www.uac.co.kr',
  },
  {
    place: '두산아트센터',
    lat: [37.571944, 127.001027],
    address: '서울특별시 종로구 종로33길 15',
    link: 'http://www.doosanartcenter.com',
  },
  {
    place: '신한카드artium',
    lat: [37.510211, 127.061468],
    address: '서울특별시 강남구 영동대로 513 코엑스아티움',
    link: 'http://www.coexartium.co.kr',
  },
  {
    place: '경기아트센터',
    lat: [37.262078, 127.037378],
    address: '경기도 수원시 팔달구 효원로307번길 20',
    link: 'http://www.ggac.or.kr',
  },
  {
    place: '성남아트센터',
    lat: [37.40312, 127.131431],
    address: '경기도 성남시 분당구 성남대로 808',
    link: 'https://www.snart.or.kr',
  },
  {
    place: '대전문화예술의전당',
    lat: [36.366667, 127.384087],
    address: '대전광역시 서구 둔산대로 135',
    link: 'https://www.daejeon.go.kr',
  },
  {
    place: '한국소리문화의전당',
    lat: [35.856264, 127.138247],
    address: '전북특별자치도 전주시 덕진구 소리로 31',
    link: 'https://www.sori21.co.kr',
  },
  {
    place: '세종시문화재단',
    lat: [36.498702, 127.263911],
    address: '세종특별자치시 갈매로 387',
    link: 'http://www.sjcf.or.kr',
  },
  {
    place: '대구문화예술회관',
    lat: [35.844841, 128.558827],
    address: '대구광역시 달서구 공원순환로 201',
    link: 'https://daeguartscenter.or.kr',
  },
  {
    place: '의정부문화재단',
    lat: [37.736204, 127.035062],
    address: '경기도 의정부시 의정로 1',
    link: 'http://www.uac.or.kr ',
  },
];

locationArr.forEach((a, i) => {
  let marker = new naver.maps.Marker({
    map: map,
    position: new naver.maps.LatLng(a.lat[0], a.lat[1]),
  });
  let contentString = `
  <div style="
      position: relative;
      background: white;
      border: 2px solid var(--purple);
      border-radius: 10px;
      padding: 15px 10px;
      box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
      min-width: 200px;">
      <h3 style="
          margin: 0;
          font-size: 16px;
          color: let(--purple);">${a.place}</h3>

      <p style="
      
          font-size: 13px;
          color: #333;">
          <span style="display:block;margin:5px 0 8px">${a.address}</span>
          <a href="${a.link}" target="_blank" style="
              color: #03A1E2; 
              text-decoration: none;">${a.link}</a>
      </p>
      <div class="custom-tail"></div> 
  </div>
`;
  let infowindow = new naver.maps.InfoWindow({
    content: contentString, // 말풍선 HTML 커스터마이징
    maxWidth: 200, // 최대 너비
    backgroundColor: 'transparent', // 기본 배경 제거
    borderWidth: 0, // 기본 테두리 제거
    pixelOffset: new naver.maps.Point(0, -20), // 위치 조정
    disableAnchor: true,
  });
  naver.maps.Event.addListener(marker, 'click', function (e) {
    if (infowindow.getMap()) {
      infowindow.close();
    } else {
      infowindow.open(map, marker);
    }
  });
});

naver.maps.Event.addListener(map, 'size_changed', function (e) {
  map.setCenter(cityhall);
});
