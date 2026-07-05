/* ════════════════════════════════════════════════
   landing.js
   랜딩 페이지("이것은 전시가 아니다") 로직
   - 참여자 27명: 이름 / A단어 / B단어 랜덤 배치
   - 호버 시 A→B 연결선 + 썸네일 표시 (한번 켜지면 유지)
   - 반응형: 화면 높이 기준 scale, 1열이 가로 폭 흡수
   ════════════════════════════════════════════════ */

/* ── 데이터: 이름 | 단어A | 단어B | 썸네일 파일명 ── */
const DATA = [
  { name:'이세민',  A:'모기',          B:'예술가',         thumb:'p01.jpg' },
  { name:'여단아',  A:'캡차',          B:'로봇의 메시지',   thumb:'p02.jpg' },
  { name:'박장호',  A:'건강보조제',     B:'요약본',          thumb:'p03.jpg' },
  { name:'김민지',  A:'손씻기',        B:'비술',            thumb:'p04.png' },
  { name:'배유진',  A:'QR코드',        B:'자서전',          thumb:'p05.jpg' },
  { name:'김지원',  A:'입',            B:'팩스기',          thumb:'p06.jpg' },
  { name:'백단하',  A:'사거리',        B:'갤러리',          thumb:'p07.jpg' },
  { name:'이린',    A:'슬립오버',      B:'고해성사',        thumb:'p08.jpg' },
  { name:'황철호',  A:'커팅매트',      B:'해시계',          thumb:'p09.jpg' },
  { name:'조서영',  A:'세탁소',        B:'화원',            thumb:'p10.jpg' },
  { name:'정지은',  A:'스텔레토 힐',   B:'은닉무기',        thumb:'p11.jpg' },
  { name:'김규빈',  A:'라바콘',        B:'만병통치약',      thumb:'p12.jpg' },
  { name:'강다현',  A:'만두',          B:'암살자',          thumb:'p13.jpg' },
  { name:'강민서',  A:'주석',          B:'무단점유자',      thumb:'p14.jpg' },
  { name:'이지희',  A:'손톱',          B:'플레이리스트',    thumb:'p15.png' },
  { name:'정우현',  A:'지도',          B:'시',              thumb:'p16.jpg' },
  { name:'김주현',  A:'스케이트보드',  B:'스캐너',          thumb:'p17.jpg' },
  { name:'양정원',  A:'눈',            B:'포장지',          thumb:'p18.jpg' },
  { name:'김성재',  A:'이어폰',        B:'탯줄',            thumb:'p19.jpg' },
  { name:'현지우',  A:'약봉투',        B:'어드밴트 캘린더', thumb:'p20.jpg' },
  { name:'오성건',  A:'책',            B:'죄수',            thumb:'p21.jpg' },
  { name:'양의열',  A:'벌금 고지서',   B:'러브레터',        thumb:'p22.png' },
  { name:'황지원',  A:'마침표',        B:'골',              thumb:'p23.jpg' },
  { name:'최주혁',  A:'쓰레기통',      B:'자유게시판',      thumb:null },
  { name:'김시현',  A:'레이빙',        B:'굿',              thumb:'p24.jpg' },
  { name:'김세은',  A:'스크린샷',      B:'소매치기',        thumb:'p25.jpg' },
  { name:'XU NING',A:'페퍼민트 캔디', B:'국제 통용 화폐',   thumb:'p26.jpg' },
];

/* ── 레이아웃 상수 (피그마 px 기준) ── */
const PAGE_H     = 982;
const COL2_W     = 396;   /* 정보 패널 폭 */
const COL3_W     = 220;   /* 메타 패널 폭 */
const GAP_B_INFO = 21;    /* B단어 우측 ↔ 정보 패널 좌측 간격 */
const BWORD_W    = 218;   /* B단어 컬럼 폭 */
const COL_A_LEFT = 112;   /* A단어 컬럼 left */
const ROW_H      = 35;
const TOP        = 18;    /* 이름·A·B 모두 같은 top */
const GAP_LINE   = 7.6;   /* 2mm ≈ 7.56px, 단어-선 간격 */
const THUMB_BASE = 'assets/images/thumbnails/';

/* ── 상태 ── */
let BX_L     = 657;  /* B단어 컬럼 왼쪽 x (layout()이 갱신) */
let AX_R_cur = 335;  /* A→선 시작 x (measureEndpoints가 갱신) */
let BX_L_cur = 657;  /* 선→B 끝 x (measureEndpoints가 갱신) */
let naRow = null, bRow = null;       /* personIdx → 화면 행 번호 */
let revealed = new Set();            /* 이미 선이 그려진 personIdx */
let lineEls  = {};                   /* personIdx → <line> 엘리먼트 */

/* ════════════════════════════════════════════════
   레이아웃: 화면 높이 기준 scale, 가로 폭은 1열(선 영역)이 흡수
   ════════════════════════════════════════════════ */
function layout() {
  const scale    = window.innerHeight / PAGE_H;
  const logicalW = window.innerWidth / scale;

  const metaLeft = logicalW - COL3_W;
  const infoLeft = logicalW - COL3_W - COL2_W;
  const bRight   = infoLeft - GAP_B_INFO;
  BX_L           = bRight - BWORD_W;

  const page = document.getElementById('page');
  page.style.width     = logicalW + 'px';
  page.style.transform = `scale(${scale})`;

  document.getElementById('panelInfo').style.left = infoLeft + 'px';
  document.getElementById('panelMeta').style.left = metaLeft + 'px';
  document.getElementById('colB').style.left      = BX_L + 'px';
  document.getElementById('linesSvg').style.width = (bRight + 4) + 'px';
  document.getElementById('mainHR').style.width   = (bRight - 20) + 'px';
}

/* ════════════════════════════════════════════════
   실제 렌더된 텍스트 너비 측정 → 선의 시작/끝 좌표 결정
   (가장 긴 단어 기준 + 2mm 간격)
   ════════════════════════════════════════════════ */
function measureEndpoints() {
  let maxA = 0;
  document.querySelectorAll('#colA .row-item').forEach(el => {
    maxA = Math.max(maxA, el.offsetWidth);
  });
  AX_R_cur = COL_A_LEFT + maxA + GAP_LINE;

  let maxB = 0;
  document.querySelectorAll('#colB .row-item').forEach(el => {
    maxB = Math.max(maxB, el.offsetWidth);
  });
  BX_L_cur = BX_L + (BWORD_W - maxB) - GAP_LINE;
}

/* ════════════════════════════════════════════════
   연결선: 호버 시 생성, 한번 생성되면 유지
   ════════════════════════════════════════════════ */
function buildLineFor(pi) {
  const y1 = TOP + naRow[pi] * ROW_H + ROW_H / 2;
  const y2 = TOP + bRow[pi]  * ROW_H + ROW_H / 2;
  const ln = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  ln.setAttribute('x1', AX_R_cur); ln.setAttribute('y1', y1);
  ln.setAttribute('x2', BX_L_cur); ln.setAttribute('y2', y2);
  ln.setAttribute('stroke-width', '0.8');
  ln.classList.add('settled');
  const len = Math.hypot(BX_L_cur - AX_R_cur, y2 - y1);
  ln.style.strokeDasharray  = len;
  ln.style.strokeDashoffset = len;
  return ln;
}

function revealLine(pi) {
  if (!revealed.has(pi)) {
    revealed.add(pi);
    const svg = document.getElementById('linesSvg');
    const ln  = buildLineFor(pi);
    lineEls[pi] = ln;
    svg.appendChild(ln);
    /* 다음 프레임에 dashoffset 0 → 선이 그려지는 애니메이션 */
    requestAnimationFrame(() => requestAnimationFrame(() => {
      ln.style.strokeDashoffset = '0';
    }));
  }
  focusLine(pi);
}

/* 호버 중: 해당 선 + 해당 텍스트(이름/A/B) 모두 회색 강조 + 썸네일 표시 */
function focusLine(pi) {
  const ln = lineEls[pi];
  if (ln) {
    ln.classList.remove('settled');
    ln.classList.add('active');
  }
  document.querySelectorAll(`.row-item[data-pi="${pi}"]`).forEach(el => {
    el.classList.add('active');
  });

  const thumb = DATA[pi].thumb;
  const box = document.getElementById('thumbBox');
  const img = document.getElementById('thumbImg');
  if (thumb) {
    img.src = THUMB_BASE + encodeURIComponent(thumb);
    box.classList.add('show');
  } else {
    box.classList.remove('show');
  }
}

/* 호버 해제: 선은 검정으로 고정, 텍스트 강조 해제, 썸네일 숨김 */
function unfocusLine(pi) {
  const ln = lineEls[pi];
  if (ln) {
    ln.classList.remove('active');
    ln.classList.add('settled');
  }
  document.querySelectorAll(`.row-item[data-pi="${pi}"]`).forEach(el => {
    el.classList.remove('active');
  });
  document.getElementById('thumbBox').classList.remove('show');
}

/* 리사이즈 시 이미 켜진 선들 좌표만 갱신 (애니메이션 없이) */
function repositionLines() {
  Object.entries(lineEls).forEach(([pi, ln]) => {
    pi = Number(pi);
    const y1 = TOP + naRow[pi] * ROW_H + ROW_H / 2;
    const y2 = TOP + bRow[pi]  * ROW_H + ROW_H / 2;
    ln.style.transition = 'none';
    ln.setAttribute('x1', AX_R_cur); ln.setAttribute('y1', y1);
    ln.setAttribute('x2', BX_L_cur); ln.setAttribute('y2', y2);
    ln.style.strokeDasharray  = '';
    ln.style.strokeDashoffset = '0';
  });
  requestAnimationFrame(() => {
    Object.values(lineEls).forEach(ln => { ln.style.transition = ''; });
  });
}

/* ════════════════════════════════════════════════
   셔플 + DOM 생성
   ════════════════════════════════════════════════ */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function makeItem(text, row, pi) {
  const el = document.createElement('div');
  el.className = 'row-item';
  el.style.top = (TOP + row * ROW_H) + 'px';
  el.textContent = text;
  el.dataset.pi = pi;
  el.addEventListener('mouseenter', () => revealLine(pi));
  el.addEventListener('mouseleave', () => unfocusLine(pi));
  return el;
}

/* ── 초기화 ── */
async function init() {
  const idx     = DATA.map((_, i) => i);
  const naOrder = shuffle(idx); /* 이름+A는 함께 셔플 (같은 행 유지) */
  const bOrder  = shuffle(idx); /* B는 독립 셔플 */

  naRow = {}; bRow = {};
  naOrder.forEach((pi, r) => { naRow[pi] = r; });
  bOrder .forEach((pi, r) => { bRow[pi]  = r; });

  const cn = document.getElementById('colNames');
  const ca = document.getElementById('colA');
  const cb = document.getElementById('colB');

  naOrder.forEach((pi, r) => {
    cn.appendChild(makeItem(DATA[pi].name, r, pi));
    ca.appendChild(makeItem(DATA[pi].A,    r, pi));
  });
  bOrder.forEach((pi, r) => {
    cb.appendChild(makeItem(DATA[pi].B, r, pi));
  });

  /* 폰트 로드 완료 후 실제 너비 측정 (선은 호버 시에만 그려짐) */
  await document.fonts.ready;
  measureEndpoints();
}

/* ── 리사이즈 ── */
function onResize() {
  layout();
  let maxB = 0;
  document.querySelectorAll('#colB .row-item').forEach(el => {
    maxB = Math.max(maxB, el.offsetWidth);
  });
  BX_L_cur = BX_L + (BWORD_W - maxB) - GAP_LINE;
  repositionLines();
}

/* ── 실행 ── */
layout();
init();
window.addEventListener('resize', onResize);
