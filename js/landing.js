/* ════════════════════════════════════════════════
   landing.js
   랜딩 페이지("이것은 전시가 아니다") 로직
   - 참여자 27명: 이름 / A단어 / B단어 랜덤 배치
   - 호버 시 A→B 연결선 + 썸네일 표시 (한번 켜지면 유지)
   - 반응형: 화면 높이 기준 scale, 1열이 가로 폭 흡수
   - 썸네일: 원본 비율 유지, 1열(선 영역) 가로 중앙 정렬
   ════════════════════════════════════════════════ */

/* ── 데이터: 이름 | 단어A | 단어B | 썸네일 파일명 ── */
const DATA = [
  { name:"이세민", A:"모기", B:"예술가", thumb:"p01.jpg", poster:"semin_poster.jpg", en:"Semin Lee", koTitle:"모기는 예술가다", enSentence:"The mosquito is an artist", insta:"@23min.kr", descKo:"모기는 약 1억 7천만 년 전에 처음 등장한 이래 현재까지 활동 중인 작가로, 3,000종 이상의 작가군으로 구성된 모기떼(Mogitte)에 속해 있다. 남극을 제외한 전 세계 모든 대륙에서 동시에 작업하며, 살아있는 몸을 표면 삼아 점에서 시작하는 작업을 이어오고 있다. 이번 《The Moment You Notice》전이 첫 번째 공식 전시다.", descEn:"Mosquito has been active as an artist since first emerging approximately 170 million years ago, and belongs to the collective known as Mogitte, a swarm consisting of more than 3,000 species. Working simultaneously across every continent except Antarctica, Mosquito continues a practice that begins with a single point on the surface of living bodies. The Moment You Notice marks its first official exhibition." , images:["assets/images/00_semin/01.jpg", "assets/images/00_semin/02.jpg", "assets/images/00_semin/03.jpg", "assets/images/00_semin/04.jpg", "assets/images/00_semin/05.jpg"] },
  { name:"여단아", A:"캡차", B:"로봇의 메시지", thumb:"p02.jpg", poster:"dana_poster.png", en:"Dana Yeo", koTitle:"캡챠는 로봇의 메시지이다", enSentence:"CAPTCHA is a Robot's Message", insta:"@yeo_dana", descKo:"캡챠는 웹사이트 접속자가 사람인지 컴퓨터 봇인지 식별하는 데 쓰이는 인터넷 보안 기술이다. 본 작업은 기계로부터 인간을 구별해 내는 보안 시스템의 방향성을 전복시킨 인터랙티브 웹사이트이다. 첫 화면은 일반적인 캡챠의 모습을 띄고 있지만, 관람자가 로봇임이 확인되면 웹사이트는 캡챠에 숨겨져 있던 본래의 목적을 드러낸다. 로봇만이 대답할 수 있는 질문들과 검문 끝에 예전에 잃어버린 가족을 찾아 헤매던 로봇과의 영상 통화로 연결되고 관람자는 눈물겨운 상봉의 순간을 맞이하게 된다.", descEn:"CAPTCHA is an internet security technology used to identify whether a website visitor is a human or a computer bot. CAPTCHA is a Robot's Message is an interactive web artwork that subverts the conventional premise of this security system, which is designed to distinguish humans from machines. The initial screen takes the form of a typical CAPTCHA, but once the viewer is verified as a robot, the website reveals the true purpose hidden within it. Following a series of questions and a verification process that only a robot can pass, the system connects to a video call with a robot that has been searching for its long-lost family, culminating in a tearful moment of reunion for the viewer." , images:["assets/images/01_dana/01.png", "assets/images/01_dana/02.png", "assets/images/01_dana/03.png", "assets/images/01_dana/04.png", "assets/images/01_dana/05.png"] },
  { name:"박장호", A:"건강보조제", B:"요약본", thumb:"p03.jpg", poster:"jangho_poster.png", en:"Jangho Park", koTitle:"건강보조제는 요약본이다", enSentence:"Supplement is Digest", insta:"@__parkjangho__", descKo:"'건강 보조제는 요약본이다'라는 명제 아래, 복잡한 맥락과 과정을 소거하고 정제된 결과만을 제공한다는 두 대상의 공통점에 주목한다. 작업은 일간 신문 원본, A5 다이제스트 책자, 건강 보조제 캐리어의 세 단계로 구성된다. 신문은 지면 대신 접지 단면이 드러나도록 세워 배치하고, 책자는 요약 데이터를 책배의 단면에 인쇄해 펼치지 않아도 정보의 층위가 보이도록 설계했다. 다이제스트 내지의 표를 자르고 말아서 만든 종이 건강 보조제는 날짜별 봉투에 담겨 전시된다. 모든 요소에 '단면'의 형식을 관통시킴으로써, 맥락 없이 압축된 결과물만을 소비하는 현대인의 정보 습관이 자연의 유기적 맥락을 제거하고 성분만을 추출하는 보조제의 메커니즘과 본질적으로 동일함을 시각적으로 증명한다.", descEn:"Under the proposition that \"Supplement is Digest.\" the project focuses on a shared quality between two subjects: both eliminate complex contexts and processes to deliver only refined results. The work unfolds in three stages, daily newspapers, an A5 digest, and a carrier of supplements. The newspapers are arranged upright with their folded cross-sections facing forward, concealing the printed pages. The booklet prints summary data along the fore-edge, keeping information visible without opening it. The paper supplements, made by cutting and rolling the digest's pages, are stored in dated envelopes and displayed on the wall. By applying the \"cross-section\" logic across every element, the project demonstrates that consuming compressed outcomes stripped of context operates by the same mechanism as supplements, which isolate components while discarding the organic whole." , images:["assets/images/02_jangho/01.jpg", "assets/images/02_jangho/02.jpg", "assets/images/02_jangho/03.jpg", "assets/images/02_jangho/04.jpg", "assets/images/02_jangho/05.jpg"] },
  { name:"김민지", A:"손씻기", B:"비술", thumb:"p04.png", poster:"minji_poster.png", en:"Minji Kim", koTitle:"손씻기는 비술이다", enSentence:"Hand washing is Arcane technique", insta:"@zzlzlzo", descKo:"水手秘术: 수수비술 수수비술은 손을 씻는 반복적 행위와 수인(手印)의 형식적 유사성에서 출발한 작업이다. 작품은 손씻기를 단순한 위생 행위가 아닌 특정한 동작과 절차를 통해 효능을 발현하는 가상의 술법으로 재구성한다. 손끝의 움직임은 고도의 정신 수양과 신비로운 힘을 만들어내는 의식적 동작으로 치환되며 일상 속 익숙한 행위는 비밀스러운 수행 체계로 전환된다. 영상은 1990–2000년대 유행한 다이어트 비디오와 무술 수련 영상의 시각 문법을 차용한다. 일련의 시연과 효능 설명, 동작 해설을 통해 손씻기라는 행위에 대한 새로운 믿음과 해석의 가능성을 제시한다. 관객은 세면대 앞 거울을 통해 영상을 마주하게 된다. 이 설치 방식은 전시 공간을 단순한 감상의 장소가 아니라, '수수비술'을 직접 수련하고 체득하는 수행의 공간으로 변모시킨다.", descEn:"水手秘术: Shui Shui Arcane Technique. Shui Shui Arcane Technique originates from the formal resemblance between the repetitive act of handwashing and the symbolic hand gestures known as mudras (手印). The work reconstructs handwashing not as a simple hygienic act, but as a fictional arcane practice in which specific movements and procedures generate mystical efficacy. The motions of the fingertips are transformed into ritual gestures believed to cultivate heightened spiritual discipline and supernatural power, turning an ordinary daily routine into a secret system of esoteric training. The video adopts the visual language of 1990s–2000s diet videos and martial arts training tapes. Through a sequence of demonstrations, narrated effects, and instructional breakdowns of movements, the work proposes new systems of belief and interpretation surrounding the act of handwashing. Viewers encounter the video through a mirror positioned above a sink, transforming the exhibition space from a site of passive viewing into a training ground where visitors may directly practice and embody the Shui Shui Arcane Technique.", videoUrl:"https://youtu.be/lXefhMl_BjA" , images:["assets/images/03_minji/01.png", "assets/images/03_minji/02.png", "assets/images/03_minji/03.png", "assets/images/03_minji/04.png", "assets/images/03_minji/05.png"] },
  { name:"배유진", A:"QR코드", B:"자서전", thumb:"p05.jpg", poster:"yujin_poster.jpg", en:"Yujin Bae", koTitle:"QR코드는 자서전이다", enSentence:"The QR code is an autobiography", insta:"@bae_yu_j", descKo:"이 작업은 QR코드를 자서전의 형식으로 재해석한 것이다. QR코드가 인식되는 순간 정보가 드러나듯, 자서전도 읽는 행위를 통해 삶의 기록을 드러낸다. 인코딩과 데이터 배치, 오류 정정과 여백 같은 QR코드의 구조적 원리를 글과 책, 웹 기반 형식으로 확장하며, 하나의 삶이 다양한 밀도로 기록되는 방식을 보여준다. 또한 명함 속 QR코드는 직접 꺼내 확인해야 의미가 드러나도록 구성해, '바로 드러나지 않고 해독을 통해 의미가 드러나는' QR코드의 방식을 구현했다.", descEn:"This work reinterprets the QR code in the form of an autobiography. Just as a QR code reveals its information the moment it is recognized, an autobiography discloses the record of a life through the act of reading. Encoding, data arrangement, error correction, and margins—the structural principles of the QR code—are expanded into writing, books, and web-based formats, showing how a single life can be recorded with different densities. The QR code embedded in a business card is designed to be revealed only when taken out and checked, embodying the idea that meaning does not appear immediately but emerges through decoding." , images:["assets/images/04_yujin/01.jpg", "assets/images/04_yujin/02.jpg", "assets/images/04_yujin/03.jpg", "assets/images/04_yujin/04.jpg", "assets/images/04_yujin/05.jpg"] },
  { name:"김지원", A:"입", B:"팩스기", thumb:"p06.jpg", poster:"kjiwon_poster.jpg", en:"Jiwon Kim", koTitle:"입은 팩스기다", enSentence:"A MOUTH IS A FAX MACHINE", insta:"@march_jk", descKo:"인간의 발화 구조를 팩스 시스템에 빗대어, \"입은 팩스기다\"라는 가상의 명제를 제안한다. 인간은 다양한 정보를 외부로부터 입력받고, 이를 내부에서 가공한 뒤 외부로 출력한다. 이 과정에서 뇌는 정보를 생성하는 역할을 하고, 입은 그 정보를 전달하고 출력하는 역할을 수행한다. 즉, 뇌는 정보 생성 장치이며, 입은 정보 출력 장치라고 볼 수 있다. 뇌에서 생성된 생각은 입을 통해 언어로 출력되지만, 그 과정에서 의미는 압축되고 왜곡되며 원본은 끝내 전달되지 않는다. 전시장에는 서로 다른 설정값을 가진 16개의 입과, 그 입이 출력한 팩스들이 놓여 있다. 관람자는 출력된 결과물만 확인할 수 있을 뿐, 실제 생각의 원본에는 접근할 수 없다. 패키지와 사용설명서, 송신 영상 역시 작업의 일부로 구성되며, 입은 하나의 전자기기처럼 취급된다. 결국 이 작업은 우리가 '소통'이라고 믿는 행위가, 사실은 불완전한 복제와 오류를 반복하는 통신 과정에 가깝다는 점을 드러낸다.", descEn:"This work proposes the statement, \"The mouth is a fax machine,\" by comparing the structure of human speech to a fax transmission system. Humans continuously absorb information from the outside world, process it internally, and output it externally. In this process, the brain functions as an information-generating device, while the mouth functions as an information-output device. Thoughts generated in the brain are transmitted through the mouth as language, but during this process, meaning becomes compressed, distorted, and the original form can never be fully delivered. The installation consists of 16 different mouths and the fax outputs produced from them. Each mouth operates as an output device with different settings, generating distinct transmissions. Viewers can only access the printed outputs, never the original thoughts behind them. The packaging, instruction manuals, and transmission videos are also part of the work, treating the mouth as if it were an actual electronic device. Ultimately, this work suggests that what we call \"communication\" is, in fact, a transmission process built upon imperfect copies, distortion, and repeated errors." , images:["assets/images/05_kjiwon/01.jpg", "assets/images/05_kjiwon/02.jpg", "assets/images/05_kjiwon/03.jpg", "assets/images/05_kjiwon/04.jpg", "assets/images/05_kjiwon/05.png"] },
  { name:"백단하", A:"사거리", B:"갤러리", thumb:"p07.jpg", poster:"danha_poster.jpg", en:"Danha Baek", koTitle:"사거리는 갤러리다", enSentence:"The crossroads is a gallery", insta:"@badookdol", descKo:"와우산로와 홍익로가 교차하는 사거리를 하나의 갤러리로 재해석한다. 이동을 멈추고 무언가 응시하게 되는 신호 대기 시간을 작품 감상의 순간으로 바라보고, 화이트 큐브의 문법을 차용해 일상의 풍경을 관람 대상으로 전환한다. 관람자는 현실의 사거리와 가상의 갤러리가 교차하는 영상 속에서 자신의 실루엣을 마주하며, 신호를 기다리는 행위가 전시를 관람하는 태도와 크게 다르지 않음을 경험한다.", descEn:"This work reimagines the intersection of Wausan-ro and Hongik-ro as a gallery. It turns the brief pause at a traffic light into a moment of looking, borrowing the language of the white cube to frame an everyday street scene as an exhibition. In the video, the real crossroads and a virtual gallery alternate at regular intervals, allowing viewers to encounter their own silhouettes and experience waiting as a form of viewing." , images:["assets/images/06_danha/01.jpg", "assets/images/06_danha/02.jpg", "assets/images/06_danha/03.jpg", "assets/images/06_danha/04.jpg"] },
  { name:"이린", A:"슬립오버", B:"고해성사", thumb:"p08.jpg", poster:"lynn_poster.jpg", en:"Lynn Lee", koTitle:"슬립오버는 고해성사다", enSentence:"Sleepover is confession", insta:"@llnnnyl", descKo:"일상적 놀이 문화인 슬립오버와 종교적 의례인 고해성사가 갖는 행위적 유사성에 주목해, 비밀을 고백하는 공간을 재구성한다. 작업은 어린 시절 이불을 엮어 만들던 임시적 은신처의 형태를 빌린다. 구조물 내부에는 어둡고 낮은 조도를 가진 조명을 배치해 외부와 내부 공간을 분리했으며, 이는 사적인 대화와 고백이 이루어지도록 한다. 중앙에 설치된 고해소의 가림막을 연상시키는 얇은 천은 드러냄과 숨김, 친밀감과 거리감 사이의 긴장을 시각화한다. 또한 소녀들의 웃음소리와 성당의 종소리를 병치한 사운드를 공간에 삽입해, 두 가지 분위기가 공존하는 양가적 감각을 형성했다. 이를 통해 작업은 어린 시절의 놀이 공간과 종교적 고백의 장소가 모두 비밀을 공유함으로써 관계를 형성하는 구조를 가진다는 점을 탐색한다.", descEn:"Noting the behavioral similarities between sleepovers—a common form of play—and the religious rite of confession, this work has reconfigured a space for confessing secrets. The work borrows the form of the makeshift hideouts we used to create by weaving blankets together as children. Inside the structure, dim lighting was installed to separate the interior from the exterior, facilitating private conversations and confessions. A thin cloth installed in the center, reminiscent of the screen in a confessional booth, visualizes the tension between revelation and concealment, intimacy and distance. Furthermore, a soundscape juxtaposing the laughter of young girls with the tolling of church bells is incorporated into the space, creating an ambivalent atmosphere where two distinct moods coexist. Through this, the work explores how both childhood play spaces and places of religious confession share a structure in which relationships are formed through the sharing of secrets." , images:["assets/images/07_rin/01.jpg", "assets/images/07_rin/02.jpg", "assets/images/07_rin/03.jpg", "assets/images/07_rin/04.jpg", "assets/images/07_rin/05.jpg"] },
  { name:"황철호", A:"커팅매트", B:"해시계", thumb:"p09.jpg", poster:"cheolho_poster.jpg", en:"Cheolho Hwang", koTitle:"커팅매트는 해시계다", enSentence:"Cutting mat is a sundial", insta:"@s_fe_ho", descKo:"우리 주변엔 다양한 그리드가 있지만, 정확한 수치가 담긴 건 커팅매트가 거의 유일하다. 이 프로젝트는 그 재단용 그리드를 다른 의미로 바라본다. 태양과 그림자로 시간을 읽는 해시계처럼, 커팅매트 위의 선들도 그림자를 통해 시간을 보여줄 수 있다는 상상에서 출발한다.", descEn:"There are many kinds of grids around us, but the cutting mat is almost the only one marked with precise measurements. This project reinterprets that utilitarian grid through a different lens. Inspired by the way a sundial tells time through sunlight and shadow, it imagines that the lines on a cutting mat, too, can reveal time through the movement of shadows." , images:["assets/images/08_cheolho/01.jpg", "assets/images/08_cheolho/02.jpg", "assets/images/08_cheolho/03.jpg", "assets/images/08_cheolho/04.jpg"] },
  { name:"조서영", A:"세탁소", B:"화원", thumb:"p10.jpg", poster:"seoyoung_poster.png", en:"Seoyoung Jo", koTitle:"세탁소는 화원(花園)이다", enSentence:"A laundry is a flower shop", insta:"@choseoyoungcho", descKo:"세탁소 스팀의 고소한 향기, 은은한 섬유유연제 향기, 보글보글 거품, 알록달록 봉제실 더미, 정성스레 세탁되어 다려진 후 비닐에 포장된 옷다발들. 조랭이 세탁소이자 화원은 옷다발 포장 및 배달서비스를 진행한다.", descEn:"The toasty aroma of laundry steam, the subtle scent of fabric softener, bubbles, piles of colorful sewing threads, and bundles of clothes; meticulously washed, pressed, and wrapped. Joreng Laundry / Flowershop offers Laundry bouquet packaging and delivery services." , images:["assets/images/09_seoyoung/01.jpg", "assets/images/09_seoyoung/02.jpg", "assets/images/09_seoyoung/03.jpg", "assets/images/09_seoyoung/04.jpg", "assets/images/09_seoyoung/05.jpg"] },
  { name:"정지은", A:"스텔레토 힐", B:"은닉무기", thumb:"p11.jpg", poster:"jieun_poster.png", en:"Jieun Jung", koTitle:"스틸레토 힐은 은닉무기다", enSentence:"Stiletto Heels Are Concealed Weapons", insta:"@stopsilver02", descKo:"스틸레토 힐은 상대에게 매력을 어필하기 위한 패션 아이템으로 받아들여지지만, 그 뾰족한 형태와 가느다란 굽, 또각거리는 소리는 은밀하게 강한 공격성과 긴장감을 내포하고 있다. 이 힐은 여성성을 수동적인 매력의 대상으로 남길 것인지, 혹은 능동적인 선택과 공격으로 전환할 것인지에 대한 은밀한 초대장을 건넨다.", descEn:"Stiletto heels are commonly accepted as fashion items used to attract others, yet their pointed form, narrow structure, and sharp clicking sound quietly carry a strong sense of aggression and tension. They present a subtle invitation: whether to remain as passive objects of attraction or to shift toward active choice and attack." , images:["assets/images/10_jieun/01.jpg", "assets/images/10_jieun/02.jpg", "assets/images/10_jieun/03.jpg"] },
  { name:"김규빈", A:"라바콘", B:"만병통치약", thumb:"p12.jpg", poster:"gyubin_poster.png", en:"Gyubin Kim", koTitle:"라바콘은 만병통치약이다", enSentence:"Trust the Cone", insta:"@streetpessimist", descKo:"싱크홀, 균열, 함몰, 침수, 사고 현장, 공사 중 건물 주변, 가스 누출, 상하수도 공사, 전선 공사, 나무 식재, 조경 공사, 고장난 자전거, 미세먼지, 두통, 치통, 풀리지 않는 과제, 폭력과 불안과 공포 치료에 탁월합니다.", descEn:"Highly effective in treating sinkholes, cracks, subsidence, flooding, accident sites, areas surrounding buildings under construction, gas leaks, water and sewage construction, electrical wiring work, tree planting, landscaping construction, broken bicycles, fine dust, headaches, toothaches, unsolvable assignments, and violence, anxiety, and fear." , images:["assets/images/11_gyubin/01.jpg", "assets/images/11_gyubin/02.jpg", "assets/images/11_gyubin/03.jpg", "assets/images/11_gyubin/04.jpg", "assets/images/11_gyubin/05.jpg"] },
  { name:"강다현", A:"만두", B:"암살자", thumb:"p13.jpg", poster:"dahyun_poster.png", en:"Dahyun Kang", koTitle:"만두는 암살자다", enSentence:"The Dumpling Is an Assassin", insta:"@true1xver", descKo:"입안에서 터지는 뜨거운 육즙, 딱딱한 표면, 예상치 못한 더부룩함과 갈증. 얇은 피로 위장한 만두는 내부를 감춘 채, 당신의 구강과 위장으로 은밀하게 침투한다. 찌기, 굽기, 튀기기 등의 수련을 거친 만두들은 각기 다른 발동 기술을 익히며, 끝내 완전한 암살자적 주체로 거듭난다.", descEn:"Bursting hot broth, hardened surfaces, unexpected bloating and thirst. Concealed beneath thin skins, dumplings secretly infiltrate the body while hiding what lies within. Having endured the trials of steaming, grilling, and frying, they master their own methods of attack and ultimately emerge as fully formed assassins." , images:["assets/images/12_dahyun/01.jpg", "assets/images/12_dahyun/02.jpg", "assets/images/12_dahyun/03.jpg", "assets/images/12_dahyun/04.jpg", "assets/images/12_dahyun/05.jpg"] },
  { name:"강민서", A:"주석", B:"무단점유자", thumb:"p14.jpg", poster:"minseo_poster.png", en:"Minseo Kang", koTitle:"주석은 무단점유자다", enSentence:"Footnotes Are Squatters", insta:"@minseo.kr", descKo:"작은 글씨로 밀려나 있던 주석은 페이지의 가장자리에서 조용히 자리를 넓힌다. 본문을 따라붙고, 독자의 시선을 끊어내며, 여백을 자신의 영역으로 바꾸어간다. 페이지가 넘어갈수록 주석은 점차 판면 안쪽으로 침투하고 본문의 위치를 흔들며, 책 안의 조용한 점유자가 된다.", descEn:"Footnotes, once pushed aside into small type, quietly expand their place from the edges of the page. They cling to the main text, interrupt the reader's gaze, and gradually turn the margins into their own territory. As the pages turn, footnotes slowly infiltrate the page surface and unsettle the position of the main text, becoming quiet squatters within the book." , images:["assets/images/13_minseo/01.jpg", "assets/images/13_minseo/02.png", "assets/images/13_minseo/03.png", "assets/images/13_minseo/04.jpg"] },
  { name:"이지희", A:"손톱", B:"플레이리스트", thumb:"p15.png", poster:"jihee_poster.jpg", en:"Jihee Lee", koTitle:"손톱은 플레이리스트다", enSentence:"Nails are a playlist", insta:"@lee.zhixi", descKo:"플레이리스트에 좋아하는 곡을 담아 손가락을 길러보세요. 손톱이 길어질수록 당신의 플레이리스트엔 음악이 차오릅니다. 하지만 길어진 손톱은 영원히 머물지 못합니다.", descEn:"Add the songs you love to your playlist, and let your nails grow. The longer they grow, the more your playlist fills with music — yet nails, once grown, cannot remain forever." , images:["assets/images/14_jihee/01.png", "assets/images/14_jihee/02.png", "assets/images/14_jihee/03.png", "assets/images/14_jihee/04.png"] },
  { name:"정우현", A:"지도", B:"시", thumb:"p16.jpg", poster:"woohyun_poster.jpg", en:"Woohyun Jung", koTitle:"지도는 시다", enSentence:"Maps are Poetry", insta:"@faux_hyun", descKo:"지도는 지구 표면의 일부나 전체의 상태를 약속된 기호나 문자를 사용하여 일정한 비율로 줄여 평면상에 나타낸 것이다. 시는 마음속에 떠오르는 느낌을 운율이 있는 언어로 압축하여 표현한 글이다. 지도의 기호는 시에서의 언어 압축과 동일하다. 지도는 기호 체계를 이용하고, 시는 언어를 기호처럼 이용한다. 그렇기에 지도와 시는 함축적이고 상징적이다. 함축적이고 상징적이라는 말은 하나의 단위에 다양한 요소를 압축했다는 의미이다. 이로 인해 지도와 시의 기호와 언어 단위는 밀도가 높아지지만, 모든 요소를 수용할 수는 없기에 불완전하다.", descEn:"A map is a planar representation of the Earth's surface, in whole or in part, scaled down to a specific ratio using designated symbols and characters. A poem expresses the emotions of the mind by compressing them into rhythmic language. The symbols of a map are identical to the linguistic compression of a poem. A map relies on a system of symbols, while a poem uses language itself as a symbol. Therefore, both maps and poems are inherently connotative and symbolic. Being connotative and symbolic means that diverse elements are condensed into a single unit. Consequently, the symbolic and linguistic units of maps and poems achieve a high degree of density, yet they remain fundamentally incomplete because they cannot encompass every single element." , images:["assets/images/15_woohyun/01.jpg", "assets/images/15_woohyun/02.jpg", "assets/images/15_woohyun/03.jpg", "assets/images/15_woohyun/04.jpg", "assets/images/15_woohyun/05.jpg"] },
  { name:"김주현", A:"스케이트보드", B:"스캐너", thumb:"p17.jpg", poster:"juhyun_poster.png", en:"Juhyun Kim", koTitle:"스케이트보드는 스캐너이다", enSentence:"Skateboard is a Scanner", insta:"@3_jhn_3", descKo:"길 위의 단차와 요철, 마찰과 흔들림은 도로가 지닌 정보가 되며, 보드는 길 위를 주행하며 이를 몸의 움직임으로 변환한다. 『Skateboard is a Scanner』는 19개의 바닥 이미지와 스캔된 기록을 통해, 보드를 타고 길을 읽는 감각을 전달한다.", descEn:"The differences in level, uneven textures, friction, and vibrations of the road become information held by its surface, and as the board moves across it, it translates them into bodily movement. 『Skateboard is a Scanner』 conveys the sensation of reading the road through a board, through 19 images of ground surfaces and scanned records." , images:["assets/images/16_juhyun/01.jpg", "assets/images/16_juhyun/02.jpg", "assets/images/16_juhyun/03.jpg", "assets/images/16_juhyun/04.jpg", "assets/images/16_juhyun/05.jpg"] },
  { name:"양정원", A:"눈", B:"포장지", thumb:"p18.jpg", poster:"jungwon_poster.jpg", en:"Jungwon Yang", koTitle:"눈은 포장지다", enSentence:"SNOW IS WRAPPING PAPER", insta:"@moeraek", descKo:"눈은 세상을 선물처럼 포장한다. 패키지 디자인은 대상을 보호하는 기능을 넘어 첫인상과 인식을 형성한다. 재질과 질감, 여는 방식까지 포함된 경험은 대상에 대한 기대를 감정으로 이어지게 한다. 본 카탈로그는 자연이 시공한 가장 완전한 포장 사례를 기록한 도면집이다. 모든 시공은 사전 협의 없이 이루어졌으며, 일정 이후 사라진 뒤 매년 다른 방식으로 다시 포장된다.", descEn:"Snow wraps the world like a gift. Packaging design goes beyond protection, shaping first impressions and perception. Material, texture, and even the way something opens become part of the experience, turning expectation into emotion. This catalog documents nature's most complete examples of packaging. Every construction was carried out without prior agreement, disappears after a certain period of time, and returns each year wrapped in a different way." , images:["assets/images/17_jungwon/01.jpg", "assets/images/17_jungwon/02.jpg", "assets/images/17_jungwon/03.jpg", "assets/images/17_jungwon/04.jpg", "assets/images/17_jungwon/05.jpg"] },
  { name:"김성재", A:"이어폰", B:"탯줄", thumb:"p19.jpg", poster:"seongjae_poster.jpg", en:"Seongjae Kim", koTitle:"이어폰은 탯줄이다", enSentence:"EARPHONES ARE AN UMBILICAL CORD", insta:"@infth", descKo:"여성 아티스트는 어머니다. 청취자는 태아다. 음악은 영양분이다. 이어폰은 탯줄이다.", descEn:"FEMALE ARTISTS ARE MOTHERS. LISTENERS ARE FETUSES. MUSIC IS NOURISHMENT. EARPHONES ARE AN UMBILICAL CORD." , images:["assets/images/18_seongjae/1.jpg", "assets/images/18_seongjae/2.jpg", "assets/images/18_seongjae/3.jpg", "assets/images/18_seongjae/4.jpg", "assets/images/18_seongjae/5.jpg"] },
  { name:"현지우", A:"약봉투", B:"어드밴트 캘린더", thumb:"p20.jpg", poster:"jiwoo_poster.jpg", en:"Jiwoo Hyun", koTitle:"약봉투는 어드밴트 캘린더다", enSentence:"A Medicine Packet is an Advent Calendar", insta:"@youngcha.xyz", descKo:"매일 정해진 시간에 약봉투를 뜯으며 회복을 기다린 적이 있는가. 이 작품은 그 기다림의 형태를 빌려, 세계 각지에서 치유와 회복을 상징해 온 기호들을 24개의 약봉투 안에 담은 어드벤트 캘린더다. 약 대신 부적을, 처방 대신 믿음을 복용해보자.", descEn:"Here is a medicine packet. Have you ever torn it open at a set time each day, waiting to get better? This work borrows that form of waiting — an advent calendar of 24 medicine packets, each holding a symbol of healing and recovery from around the world. Instead of medicine, a talisman. Instead of a prescription, belief." , images:["assets/images/19_jiwoo/01.png", "assets/images/19_jiwoo/02.png", "assets/images/19_jiwoo/03.png", "assets/images/19_jiwoo/04.png", "assets/images/19_jiwoo/05.png"] },
  { name:"오성건", A:"책", B:"죄수", thumb:"p21.jpg", poster:"sunggun_poster.jpg", en:"Sunggun Oh", koTitle:"책은 죄수다", enSentence:"Book as Prisoner", insta:"@goshitomi", descKo:"책 대출신청은 죄수와의 면회신청이다. 〈책은 죄수다〉는 책이 책장에 꽂혀있는 모습이 마치 죄수와 같다는 발견에서 출발한다. 이것은 도서관의 '도서 대출' 시스템과 교도소의 '죄수 접견' 시스템이 구조적으로 동일하다는 통찰로 이어진다. 작품 안에서 도서의 정보(메타데이터)는 죄수의 정보로 치환된다. 관람자가 평소처럼 책을 검색하고 빌리는 과정을 밟는 동안, 분할된 화면 반댓편에서는 낯선 죄수와의 면회 신청이 동시에 이루어진다. 이를 통해 우리가 지식을 소비하고 관리하는 '보관소(Archive)'라는 시스템이 사실은 정보를 가두고 통제하는 또 다른 '감옥'은 아닌지 질문을 던진다.", descEn:"Lending a book is visiting the prisoner. It began with the observation that books standing on a bookshelf closely resemble prisoners in cells. This leads to the insight that a library's book lending system shares the exact same structural design as a prison's visitation system. Within the work, a book's metadata is substituted with a prisoner's personal records. While the viewer goes through the ordinary process of searching for and borrowing a book, a request to visit an unfamiliar prisoner simultaneously takes place on the other side of a split screen. Through this, the work questions whether the \"archive\"—the very system through which we consume and manage knowledge—is in fact another form of \"prison\" that confines and controls information." , images:["assets/images/20_sunggun/01.png", "assets/images/20_sunggun/02.png", "assets/images/20_sunggun/03.png"] },
  { name:"양의열", A:"벌금 고지서", B:"러브레터", thumb:"p22.png", poster:"euiyeol_poster.png", en:"Euiyeol Yang", koTitle:"벌금 고지서는 러브레터다", enSentence:"Penalty notice of love letter", insta:"@eui.10", descKo:"예상치 못한 고지서는 마치 러브레터와 같다. 우리의 심장을 떨리게 하고, 동시에 지난 기억을 상기시켜주는 매개체가 된다. 그리고 대체로 완벽하게 잊혀지기 전에 나타나서는 우리를 당황시킨다. 이들은 희미했던 기억들을 선명하게 해주는 대신에, 우리의 기억들이 얼마나 선택적으로 미화되어왔는지 보여준다.", descEn:"Unexpected bills are like love letters. They make our hearts race, while serving as a medium that reminds us of past memories. And they usually appear right before they are completely forgotten, catching us off guard. Instead of bringing those faded memories back into focus, they reveal just how selectively romanticized our memories have been." , images:["assets/images/21_euiyeol/01.jpg", "assets/images/21_euiyeol/02.jpg", "assets/images/21_euiyeol/03.jpg", "assets/images/21_euiyeol/04.jpg", "assets/images/21_euiyeol/05.jpg"] },
  { name:"황지원", A:"마침표", B:"골", thumb:"p23.jpg", poster:"hjiwon_poster.png", en:"Jiwon Hwang", koTitle:"마침표는 골이다", enSentence:"Period is a Goal", insta:"@now_iz_", descKo:"이 시계는 물리적 흐름으로서의 시간을 계측하는 대신, 미결의 문장이 마침표와 조우하여 완결성에 이르는 찰나를 하나의 '득점(+1)'으로 환산하는 개념적 장치이다. 궤적 끝에서 공이 골망을 흔들듯, 문장의 끝에 마침표가 오는 것은 텍스트의 유예된 상태를 종결짓는 멈춤(Full Stop)인 동시에 다음 스텝을 예비하는 주기(Period)의 전환을 표상한다.", descEn:"Rather than measuring time as a physical flow, this clock is a conceptual device that translates the exact moment an unresolved sentence meets a period and achieves completion into a single 'score (+1).' Much like a ball striking the net at the end of its trajectory, the arrival of a period at the end of a sentence signifies a 'Full Stop' that resolves the text's suspended state, while simultaneously representing the transition of a 'Period' that prepares for the next step." , images:["assets/images/22_hjiwon/01.jpg", "assets/images/22_hjiwon/02.jpg", "assets/images/22_hjiwon/03.jpg", "assets/images/22_hjiwon/04.jpg"] },
  { name:"최주혁", A:"쓰레기통", B:"자유게시판", thumb:"최주혁_thumbnail.png", poster:"juhyuk_poster.jpg", en:"Juhyuk Choi", koTitle:"쓰레기통은 자유게시판이다", enSentence:"Bin = Board", insta:"@onemoogy", descKo:"이곳에는 무엇이든 자유롭게 두고 갈 수 있다. 쓰레기통도 그렇고, 자유게시판도 그렇다. 웬만한 게시판에는 넣을 수조차 없는 것을 쓰레기통에는 넣을 수 있으니, 쓰레기통이야말로 진정한 자유게시판이 아닐까?", descEn:"Anything can be freely left here. The same goes for trash bins and bulletin boards. If something cannot even be placed on most bulletin boards but can be thrown into a trash bin, then perhaps the trash bin is the truest form of a free bulletin board." , images:["assets/images/23_juhyuk/01.jpg", "assets/images/23_juhyuk/02.jpg", "assets/images/23_juhyuk/03.jpg", "assets/images/23_juhyuk/04.jpg", "assets/images/23_juhyuk/05.jpg", "assets/images/23_juhyuk/06.jpg", "assets/images/23_juhyuk/07.jpg", "assets/images/23_juhyuk/08.jpg", "assets/images/23_juhyuk/09.jpg", "assets/images/23_juhyuk/10.png"] },
  { name:"김시현", A:"레이빙", B:"굿", thumb:"p24.jpg", poster:"sihyun_poster.jpg", en:"Sihyun Kim", koTitle:"레이빙은 굿이다", enSentence:"Raving is a Ritual", insta:"@siihyunkim", descKo:"레이빙은 굿이다. 리듬은 속도를 올리고, 몸은 그 흐름에 반응하며, 우리는 집단 속에서 경계를 흐리게 한다. 이러한 구조는 감각을 통해 몰입을 만들어낸다는 점에서 전통적인 의식과 닮아 있으며, 동시에 현실을 버틸 수 있게 해주는 하나의 방식이 되기도 한다. 어쩌면 우리는 이미 하나의 의식에 참여하고 있는 것인지도 모른다.", descEn:"Raving is a ritual. Rhythm intensifies, the body follows, and the distinction between the individual and the collective begins to dissolve. Through sound, movement, and repetition, raving produces a state of sensory immersion that echoes traditional ritual forms. It offers not an escape from reality, but a way of moving through it. Perhaps we are already participating in the ritual." , images:["assets/images/24_sihyun/05.gif", "assets/images/24_sihyun/02.jpg", "assets/images/24_sihyun/03.jpg", "assets/images/24_sihyun/04.jpg"] },
  { name:"김세은", A:"스크린샷", B:"소매치기", thumb:"p25.jpg", poster:"seeun_poster.png", en:"Seeun Kim", koTitle:"스크린샷은 소매치기다", enSentence:"A Screenshot is a Pickpocket", insta:"@kimseeunse", descKo:"『스크린샷은 소매치기다』는 스크린샷이라는 동시대의 무의식적 동작을 절취의 메타포로 연결짓는다. Capture–Crop–Possess–Circulate–Accumulate–Residue의 여섯 단계를 따라, 스크린샷이 원본의 맥락을 잘라내고 사적인 소유물로 전환되는 과정, 이미지가 네트워크 위에서 이동하고 변형되는 방식, 그리고 갤러리 속 수천 장의 파편이 쌓여가는지를 짚는다. 일상적이고 익숙한 행위를 천천히 낯설게 만들며, 화면 너머의 세계를 우리가 발 딛고 감각하는 현실과 다르지 않은 하나의 연속된 풍경으로 바라본다.", descEn:"The Screenshot Is a Pickpocket connects the contemporary, almost unconscious gesture of taking a screenshot to the metaphor of theft. Following six stages—Capture, Crop, Possess, Circulate, Accumulate, and Residue—the work traces how a screenshot severs an image from its original context and transforms it into a privately owned object, how images move and mutate across networks, and how thousands of fragments accumulate in our galleries. By gradually making this ordinary and familiar action feel strange, the work considers the world beyond the screen as part of a continuous landscape, no different from the physical reality we inhabit and perceive." , images:["assets/images/25_seeun/01.png", "assets/images/25_seeun/02.png", "assets/images/25_seeun/03.png"] },
  { name:"XU NING", A:"페퍼민트 캔디", B:"국제 통용 화폐", thumb:"p26.jpg", poster:"xuning_poster.png", en:"Xu Ning", koTitle:"페퍼민트 캔디는 국제 통용 화폐이다", enSentence:"Peppermint candy is an internationally currency", insta:"@lola1o1a", descKo:"누구에게든 페퍼민트 캔디 한 알을 건네면 거절하는 사람은 없습니다. 친구, 동료, 방금 만난 사람, 말이 통하지 않는 낯선 사람조차도요. 왜 주는지 설명할 필요 없고, 보답을 바랄 필요도 없습니다. 어떤 법정 화폐도 이렇게 할 수 없습니다. 달러를 거부하는 사람, 비트코인을 믿지 않는 사람이 있어도, 페퍼민트 캔디를 거부하는 사람은 없습니다.", descEn:"No one refuses a piece of peppermint candy, no matter who you offer it to. Friends, coworkers, someone you just met, even a stranger who doesn't speak your language. You don't need to explain why you're giving it, and you don't need anything in return. No legal tender can do this. Some people refuse dollars, some don't trust Bitcoin, but no one refuses peppermint candy." , images:["assets/images/26_xuning/01.jpg", "assets/images/26_xuning/02.jpg", "assets/images/26_xuning/03.jpg", "assets/images/26_xuning/04.jpg"] },
];

/* ── 레이아웃 상수 (피그마 px 기준) ── */
const PAGE_H     = 982;
const PAGE_MARGIN = 22;   /* 랜딩 1열(이름 컬럼)이 쓰는 왼쪽 여백과 동일 (colNames left:22px) */
const COL2_W     = 396;   /* 정보 패널 폭 */
const COL3_W     = 220;   /* 메타 패널 폭 */
const GAP_B_INFO = 21;    /* B단어 우측 ↔ 정보 패널 좌측 간격 */
const BWORD_W    = 218;   /* B단어 컬럼 폭 */
const COL_A_LEFT = 112;   /* A단어 컬럼 left */
const ROW_H      = 35;
const TOP        = 18;    /* 이름·A·B 모두 같은 top */
const GAP_LINE   = 7.6;   /* 2mm ≈ 7.56px, 단어-선 간격 */
const THUMB_BASE  = 'assets/images/thumbnails/';
const POSTER_BASE = 'assets/images/poster/';
const POSTER_PREVIEW_COUNT = 6; /* 2열 미리보기 그리드에 보여줄 개수 */
const THUMB_MAX  = 308;   /* 썸네일 최대 변 길이(긴 쪽 기준, 원본 비율 유지) */

/* 자세히 보기(전체 포스터) 그리드 상수 */
const DETAIL_COLS       = 4;      /* 열 개수 */
const DETAIL_GAP        = 24;     /* 열/행 사이 간격 (랜딩페이지처럼 여유 있게) */
const DETAIL_SIDE_GAP   = 40;     /* 2열/3열과 그리드 사이 여백 */
const POSTER_RATIO      = 210/297; /* 실제 포스터 대부분의 비율 (A4 계열, 가로/세로) */

/* ── 상태 ── */
let BX_L        = 657;  /* B단어 컬럼 왼쪽 x (layout()이 갱신) */
let AX_R_cur    = 335;  /* A→선 시작 x (measureEndpoints가 갱신) */
let BX_L_cur    = 657;  /* 선→B 끝 x (measureEndpoints가 갱신) */
let thumbCenterX = 470; /* 1열(선 영역) 가로 중앙 x (updateThumbCenter가 갱신) */
let gradBaseX    = 300;  /* 텍스트 그라데이션 시작 x, 2열 시작 지점 (layout()이 갱신) */
let pageLogicalW = 1600; /* 페이지 전체 논리 폭 (layout()이 갱신) — 쉬머 애니메이션이 훑는 범위 */
let naRow = null, bRow = null;       /* personIdx → 화면 행 번호 */
let detailMode = false;              /* 자세히 보기 모드 on/off */
let personMode = false;              /* 개별 디자이너 상세 페이지 모드 on/off */
let revealed = new Set();            /* 이미 선이 그려진 personIdx */
let lineEls  = {};                   /* personIdx → {base, spot, grad} (연결선 + 원형 하이라이트 선 + radialGradient) */

/* ════════════════════════════════════════════════
   레이아웃: 화면 높이 기준 scale, 가로 폭은 1열(선 영역)이 흡수
   ════════════════════════════════════════════════ */
function layout() {
  /* 모바일 뷰(#mobilePage)는 완전히 별도의 순수 CSS 레이아웃이라 #page의 좌표계산이
     전혀 필요 없음 — #page 자체가 display:none이라 인라인 스타일이 쌓여도 화면에
     영향은 없지만, 스케일링 로직을 아예 안 돌게 가드해서 모바일에서 폰트/레이아웃이
     JS 계산값에 좌우되는 일이 없도록 확실히 함 */
  if (isMobileViewport()) return;

  const scale    = window.innerHeight / PAGE_H;
  const logicalW = window.innerWidth / scale;

  const metaLeft = logicalW - COL3_W;
  const infoLeft = logicalW - COL3_W - COL2_W;
  const bRight   = infoLeft - GAP_B_INFO;
  BX_L           = bRight - BWORD_W;

  const page = document.getElementById('page');
  page.style.width     = logicalW + 'px';
  page.style.transform = `scale(${scale})`;
  /* 텍스트 그라데이션이 1열(이름/단어 컬럼)까지는 그대로 회색(b4b4b4)로 두고,
     2열(정보 패널)부터 본격적으로 어두워지도록: 2열이 시작하는 실제 x좌표(infoLeft)를
     CSS 변수로 넘겨줌. 창 크기가 바뀌어도 항상 2열 시작 지점과 정확히 맞물림 */
  gradBaseX = bRight;   /* 1열(이름/단어 컬럼)이 끝나는 지점 = 그라데이션이 바뀌기 시작하는 기준점 (고정) */
  page.style.setProperty('--grad-start', gradBaseX + 'px');  /* 참고 이미지처럼 항상 정확히 이
     지점부터 어두워지기 시작해야 하므로 흔들리지 않는 고정값으로 둠(애니메이션이 이 기준점
     자체를 건드리면, 그라데이션이 1열 안쪽에서 미리 시작되거나 3열에서도 아직 안 어두운
     순간이 생겨서 "2열부터 시작 / 3열은 거의 블랙" 기준이 흐트러지는 문제가 있었음) */
  pageLogicalW = logicalW;
  page.style.setProperty('--page-w', logicalW + 'px');   /* 텍스트 ::before들이 배경 크기 기준으로 공유 */

  /* 자세히 보기/개별 상세 모드일 땐 2열이 왼쪽으로 오되, 랜딩 1열과 같은 여백(PAGE_MARGIN)을
     두고 고정. 아닐 때는 평소 위치로 */
  const dockedLeft = (detailMode || personMode) ? PAGE_MARGIN + 'px' : infoLeft + 'px';
  document.getElementById('panelInfo').style.left = dockedLeft;
  document.getElementById('panelMeta').style.left = metaLeft + 'px';
  document.getElementById('colB').style.left      = BX_L + 'px';
  document.getElementById('linesSvg').style.width = (bRight + 4) + 'px';
  document.getElementById('mainHR').style.width   = (bRight - 20) + 'px';

  const detailNeededHeight = positionDetailGrid(metaLeft);
  const personNeededHeight = positionPerson(metaLeft);

  /* 한 화면(982px)보다 많이 필요하면 #page 자체를 그만큼 늘려서, 내부적으로
     따로 스크롤되지 않고 페이지 전체가 (2열/3열 포함) 한 흐름으로 같이 스크롤되게 함 */
  let needed = PAGE_H;
  if (detailMode) needed = Math.max(needed, detailNeededHeight);
  if (personMode) needed = Math.max(needed, personNeededHeight);
  page.style.height = needed + 'px';
  /* 스포트라이트가 페이지 전체를 하나의 좌표계로 취급해서(각 요소는 그 안의 작은
     창일 뿐) 원이 여러 행에 걸쳐 실제로 둥글게 보이도록, 요소 높이가 아니라
     페이지 전체 높이를 배경 크기로 씀 (아래 applyTextGradientPositions 참고) */
  page.style.setProperty('--page-h', needed + 'px');

  applyTextGradientPositions(page, scale);
}

/* ════════════════════════════════════════════════
   텍스트 그라데이션: 각 텍스트 요소의 #page 내 실제 x좌표(--el-x)를 계산해
   넣어줌. 요소의 CSS ::before가 이 값만큼 공유 배경(그라데이션)을 당겨서,
   페이지 전체에 그라데이션 1장이 깔린 것처럼 보이면서도 실제로는 연결선/썸네일을
   전혀 건드리지 않고 이 목록의 텍스트 요소에만 적용됨
   ════════════════════════════════════════════════ */
const GRADIENT_TEXT_SELECTOR = [
  '.row-item', '.info-title', '.info-date', '.info-desc-ko', '.info-desc-en',
  '.info-poster-label', '.info-poster-more', '.info-copyright',
  '#detailFooter .footer-copy-text', '#personFooter .footer-copy-text',
  '.person-title-ko', '.person-title-en', '.person-name', '.person-insta',
  '.person-desc-ko', '.person-desc-en', '.person-home', '.person-video',
  '.meta-univ', '.meta-studio', '.meta-label', '.meta-people',
  '.hr', '.person-hr', '.poster-box'
].join(',');
/* 주의: .info-poster-header 자체(flex 컨테이너)엔 그라데이션을 걸지 않고 그
   자식 span(.info-poster-label, .info-poster-more)에 각각 걸어야 함 —
   flex 컨테이너는 직접적인 텍스트 런이 없어서 background-clip:text가 자식
   글자 모양으로 안 잘리고 그냥 안 보이게(색이 transparent로 상속만 됨) 되는
   문제가 있었음.
   .hr(각 열 위/사이 구분선)은 텍스트가 아니라 배경색 자체가 선이므로
   background-clip:text 없이 배경 그라데이션만 그대로 보이게 함(아래 CSS 참고) —
   위치 계산(--el-x)만 이 목록에 얹어서 같이 갱신되게 함 */

function applyTextGradientPositions(page, scale) {
  const pageRect = page.getBoundingClientRect();
  document.querySelectorAll(GRADIENT_TEXT_SELECTOR).forEach(el => {
    const r = el.getBoundingClientRect();
    const x = (r.left - pageRect.left) / scale;
    const y = (r.top  - pageRect.top)  / scale;
    el.style.setProperty('--el-x', x + 'px');
    el.style.setProperty('--el-y', y + 'px');
  });
}

/* ════════════════════════════════════════════════
   자세히 보기: 전체 포스터 그리드 위치/크기 계산
   (2열 오른쪽 끝 ~ 3열 왼쪽 끝 사이, 양쪽에 여백)
   그리드 자체는 더 이상 스크롤박스가 아니라 필요한 높이만큼 자라는 일반 요소.
   반환값: 푸터까지 포함해 실제로 필요한 총 페이지 높이
   ════════════════════════════════════════════════ */
function positionDetailGrid(metaLeft) {
  const grid = document.getElementById('posterDetailGrid');
  if (!grid) return PAGE_H;

  const GRID_TOP = 24; /* 다른 열의 본문 시작 위치(23~24px)와 맞춤 */

  const left  = PAGE_MARGIN + COL2_W + DETAIL_SIDE_GAP;
  const width = metaLeft - DETAIL_SIDE_GAP - left;
  const colW  = (width - (DETAIL_COLS - 1) * DETAIL_GAP) / DETAIL_COLS;
  const rowH  = colW / POSTER_RATIO;
  /* 포스터 클릭 확대는 이제 그리드 밖의 별도 오버레이(라이트박스)로 처리하므로,
     그리드 자체의 줄 수/행 높이는 항상 고정 (27장 ÷ 4열) */
  const rows = Math.ceil(DATA.length / DETAIL_COLS);
  const gridContentHeight = rows * rowH + (rows - 1) * DETAIL_GAP;

  grid.style.top    = GRID_TOP + 'px';
  grid.style.left   = left + 'px';
  grid.style.width  = width + 'px';
  grid.style.gap    = DETAIL_GAP + 'px';
  grid.style.gridAutoRows = rowH + 'px';

  /* 위쪽 라인도 그리드와 같은 left/width, 다른 열의 첫 hr(top:17px)과 같은 높이 */
  const hr = document.getElementById('detailHR');
  if (hr) {
    hr.style.top   = '17px';
    hr.style.left  = left + 'px';
    hr.style.width = width + 'px';
  }

  /* 푸터: 왼쪽은 2열과 같은 여백(PAGE_MARGIN), 오른쪽도 같은 여백을 두고
     3열 끝까지 페이지 전체 폭으로 이어지게 함 */
  const FOOTER_MARGIN_TOP = 24;
  const FOOTER_CONTENT_H  = 61; /* hr(1) + margin-bottom(12) + 텍스트 3줄(16*3=48) */
  const logicalW    = metaLeft + COL3_W;
  const footerTop   = GRID_TOP + gridContentHeight + FOOTER_MARGIN_TOP;
  const footerLeft  = PAGE_MARGIN;
  const footerWidth = logicalW - PAGE_MARGIN * 2;

  const footer = document.getElementById('detailFooter');
  if (footer) {
    footer.style.top   = footerTop + 'px';
    footer.style.left  = footerLeft + 'px';
    footer.style.width = footerWidth + 'px';
  }

  /* 상단 여백(GRID_TOP)과 같은 만큼만 하단 여백을 둬서, 내용+선이 위쪽과
     대칭으로 페이지 맨 아래까지 닿게 함 */
  return footerTop + FOOTER_CONTENT_H + GRID_TOP;
}

/* ════════════════════════════════════════════════
   개별 디자이너 상세 페이지: 위치 계산
   (2열은 그대로 왼쪽 도킹, 갤러리는 자세히 보기 그리드와 같은 좌우 여백 사용)
   설명 길이가 사람마다 달라서 실제 렌더된 높이(offsetHeight)를 재서 페이지 높이를 정함
   ════════════════════════════════════════════════ */
function positionPerson(metaLeft) {
  const panel   = document.getElementById('personPanel');
  const gallery = document.getElementById('personGallery');
  if (!panel || !gallery) return PAGE_H;

  const galleryLeft  = PAGE_MARGIN + COL2_W + DETAIL_SIDE_GAP;
  const galleryWidth = metaLeft - DETAIL_SIDE_GAP - galleryLeft;
  gallery.style.left  = galleryLeft + 'px';
  gallery.style.width = galleryWidth + 'px';
  panel.style.left    = PAGE_MARGIN + 'px';

  /* 다른 열들과 같은 top:17px 위치의 라인 */
  const galleryHR = document.getElementById('personGalleryHR');
  if (galleryHR) {
    galleryHR.style.top   = '17px';
    galleryHR.style.left  = galleryLeft + 'px';
    galleryHR.style.width = galleryWidth + 'px';
  }

  if (!personMode) return PAGE_H;

  /* 폭이 바뀔 때마다(리사이즈 포함) 저스티파이드 갤러리 다시 계산.
     이제 갤러리 안 사진들은 절대좌표라 gallery.offsetHeight로 측정할 필요 없이
     layoutGalleryJustified가 계산한 최종 높이를 그대로 반환받아 씀 → 확대/축소
     애니메이션이 진행 중이어도(아직 안 끝났어도) 항상 정확한 최종 값 기준으로 계산됨 */
  const galleryContentHeight = layoutGalleryJustified(gallery, galleryWidth);

  const panelBottom   = 17 + panel.offsetHeight;
  const galleryBottom = 24 + galleryContentHeight;
  const contentBottom = Math.max(panelBottom, galleryBottom);

  /* 맨 아래 저작권 푸터: 2열과 같은 왼쪽 여백, 3열 앞까지 전체 폭.
     내용(설명+갤러리)이 짧아서 한 화면(PAGE_H) 안에 다 들어갈 땐, 푸터를 내용
     바로 밑이 아니라 화면 맨 아래(랜딩 페이지 저작권과 같은 위치)에 고정해서
     불필요한 빈 공간이 남지 않게 함. 내용이 길 때만 그 밑으로 자연스럽게 밀림 */
  const FOOTER_CONTENT_H     = 61; /* hr(1) + margin-bottom(12) + 텍스트 3줄(16*3=48) */
  const FOOTER_BOTTOM_MARGIN = 24;
  const naturalFooterTop = contentBottom + 24;
  const minFooterTop     = PAGE_H - FOOTER_CONTENT_H - FOOTER_BOTTOM_MARGIN;
  const footerTop        = Math.max(naturalFooterTop, minFooterTop);

  const footer = document.getElementById('personFooter');
  if (footer) {
    footer.style.top   = footerTop + 'px';
    footer.style.left  = PAGE_MARGIN + 'px';
    footer.style.width = (metaLeft + COL3_W - PAGE_MARGIN * 2) + 'px';
  }

  return footerTop + FOOTER_CONTENT_H + FOOTER_BOTTOM_MARGIN;
}

/* ════════════════════════════════════════════════
   개별 디자이너 상세 페이지: 내용 렌더링
   - 2열: 작품 제목(한/영), 이름+인스타, 설명(한/영), 홈으로
   - 가운데: 프로젝트 이미지 (현재는 포스터 이미지 하나뿐 — 실제 프로젝트 촬영 이미지가
     생기면 여러 장을 같은 방식으로 추가하면 됨). 호버 시 살짝 확대 + 그림자
   ════════════════════════════════════════════════ */
function renderPerson(idx) {
  const person = DATA[idx];
  const panel   = document.getElementById('personPanel');
  const gallery = document.getElementById('personGallery');
  if (!panel || !gallery) return;

  panel.innerHTML = `
    <div class="person-hr"></div>
    <div class="person-title-ko">${person.koTitle || ''}</div>
    <div class="person-title-en">${person.enSentence || ''}</div>
    <div class="person-hr"></div>
    <div class="person-name">${person.name}</div>
    <div class="person-insta">${person.insta || ''}</div>
    <div class="person-hr"></div>
    <div class="person-desc-ko">${person.descKo || ''}</div>
    <div class="person-hr"></div>
    <div class="person-desc-en">${person.descEn || ''}</div>
    ${person.videoUrl ? `
    <div class="person-hr"></div>
    <a class="person-video" href="${person.videoUrl}" target="_blank" rel="noopener">영상 보기 / Watch Video</a>
    ` : ''}
    <div class="person-hr"></div>
    <div class="person-home">홈으로</div>
  `;
  const homeBtn = panel.querySelector('.person-home');
  if (homeBtn) homeBtn.addEventListener('click', closePerson);

  gallery.innerHTML = '';
  /* 실제 프로젝트 촬영 이미지(images)가 있으면 그걸 나열, 없으면(자료 확보 전)
     포스터 이미지 하나를 대신 보여줌 */
  const imgSrcs = (person.images && person.images.length)
    ? person.images
    : (person.poster ? [POSTER_BASE + encodeURIComponent(person.poster)] : []);

  imgSrcs.forEach(src => {
    const item = document.createElement('div');
    item.className = 'person-gallery-item';
    const img = document.createElement('img');
    img.src = src;
    img.alt = person.name;
    item.appendChild(img);

    /* 이미지가 2장 이상일 때만 확대 상태에서 좌우로 넘길 수 있는 화살표를 넣음 */
    if (imgSrcs.length > 1) {
      const prevBtn = document.createElement('button');
      prevBtn.type = 'button';
      prevBtn.className = 'gallery-nav gallery-nav-prev';
      prevBtn.setAttribute('aria-label', '이전 이미지');
      prevBtn.textContent = '‹';
      prevBtn.addEventListener('click', (e) => {
        e.stopPropagation(); /* item 자체의 클릭(축소) 핸들러로 안 번지게 */
        slidePersonImage(item, gallery, -1);
      });
      item.appendChild(prevBtn);

      const nextBtn = document.createElement('button');
      nextBtn.type = 'button';
      nextBtn.className = 'gallery-nav gallery-nav-next';
      nextBtn.setAttribute('aria-label', '다음 이미지');
      nextBtn.textContent = '›';
      nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        slidePersonImage(item, gallery, 1);
      });
      item.appendChild(nextBtn);
    }

    item.addEventListener('click', () => togglePersonImageExpand(item, gallery));
    gallery.appendChild(item);
  });

  layoutGalleryWhenReady(gallery);

  const footer = document.getElementById('personFooter');
  if (footer) {
    footer.innerHTML = `
      <div class="hr"></div>
      <div class="footer-copy-text">
        2026 © Hongik University<br>
        Dept. of Visual Communication Design.<br>
        All Rights Reserved
      </div>`;
  }
}

/* ════════════════════════════════════════════════
   상세 이미지 클릭 → 그 이미지 한 장만 2열 폭 꽉 차게 확대되고 나머지는 숨김.
   다시 클릭하면 전부 원래 저스티파이드 배치로 복귀 (라이트박스 방식)
   ════════════════════════════════════════════════ */
function togglePersonImageExpand(item, gallery) {
  const wasExpanded = item.classList.contains('expanded');
  const allItems = [...gallery.querySelectorAll('.person-gallery-item')];

  if (wasExpanded) {
    /* 접기: 전부 다시 보이게 */
    allItems.forEach(el => {
      el.classList.remove('expanded');
      el.style.display = '';
    });
  } else {
    /* 펼치기: 클릭한 것만 남기고 나머지는 완전히 숨김 (자리 차지 안 함) */
    allItems.forEach(el => {
      if (el === item) {
        el.classList.add('expanded');
        el.style.display = '';
      } else {
        el.classList.remove('expanded');
        el.style.display = 'none';
      }
    });
  }

  /* 절대좌표 배치라 layoutGalleryJustified가 반환하는 높이가 항상 최종값이므로,
     transition이 끝나길 기다리지 않고 바로 layout()으로 페이지/푸터 위치를 맞춰도 됨 */
  layout();
}

/* ════════════════════════════════════════════════
   확대된 상태에서 좌우 화살표로 이전/다음 이미지로 슬라이드 전환
   (양 끝에서도 반대쪽으로 순환)
   ════════════════════════════════════════════════ */
function slidePersonImage(item, gallery, direction) {
  const allItems = [...gallery.querySelectorAll('.person-gallery-item')];
  if (allItems.length < 2) return;
  const idx = allItems.indexOf(item);
  const nextIdx = (idx + direction + allItems.length) % allItems.length;
  const nextItem = allItems[nextIdx];
  if (nextItem === item) return;

  /* 슬라이드(translateX) 애니메이션 제거 — 퀄리티가 떨어져 보인다는 피드백으로
     그냥 즉시 전환으로 바꿈 */
  item.classList.remove('expanded');
  item.style.display = 'none';

  nextItem.classList.add('expanded');
  nextItem.style.display = '';
  layout(); /* positionPerson()이 layoutGalleryJustified를 다시 호출해 새 이미지 크기/위치 계산 */
}

/* ════════════════════════════════════════════════
   저스티파이드 갤러리: 가로/세로 사진이 섞여 있어도 크롭 없이
   줄마다 2열 폭을 정확히 채우도록 각 사진의 크기를 계산해서 지정
   (구글 포토 갤러리와 같은 방식)
   ════════════════════════════════════════════════ */
function layoutGalleryJustified(gallery, containerWidth) {
  const GAP = 16, TARGET_H = 170;   /* 스크롤을 줄이기 위해 기본 크기를 작게 */
  /* display:none으로 숨겨둔(라이트박스로 확대 중일 때 나머지) 이미지는 계산에서 제외 */
  const items = [...gallery.querySelectorAll('.person-gallery-item')].filter(el => el.style.display !== 'none');
  if (!items.length) { gallery.style.height = '0px'; return 0; }
  if (!containerWidth) containerWidth = gallery.getBoundingClientRect().width;
  if (!containerWidth) return 0;

  let row = [];
  let rowWidth = 0;
  const rows = [];   /* { type:'row', items:[...] } | { type:'expanded', item, ratio } */

  function flushRow() {
    if (row.length) { rows.push({ type: 'row', items: row }); row = []; rowWidth = 0; }
  }

  items.forEach(item => {
    const img = item.querySelector('img');
    const ratio = (img.naturalWidth && img.naturalHeight) ? img.naturalWidth / img.naturalHeight : 1;

    /* 클릭해서 확대된 이미지는 줄 계산에서 빼고, 자기 혼자 폭 전체를 차지하는
       한 줄로 처리 (다른 이미지들은 그 앞/뒤에서 평소처럼 배치됨) */
    if (item.classList.contains('expanded')) {
      flushRow();
      rows.push({ type: 'expanded', item, ratio });
      return;
    }

    const w = TARGET_H * ratio;
    if (row.length > 0 && rowWidth + GAP + w > containerWidth) {
      flushRow();
    }
    row.push({ item, ratio, w });
    rowWidth += (row.length > 1 ? GAP : 0) + w;
  });
  flushRow();

  /* 한 줄에 사진이 1장만 남는 경우를 없앰 (무조건 한 줄에 2장 이상).
     앞 줄로 합칠 수 있으면 앞으로, 안 되면(맨 첫 줄인 경우) 뒷 줄로 합침.
     (라이트박스로 확대된 'expanded' 줄은 원래 혼자인 게 의도이므로 대상에서 제외) */
  for (let i = rows.length - 1; i >= 0; i--) {
    if (rows[i].type !== 'row' || rows[i].items.length !== 1) continue;

    let j = i - 1;
    while (j >= 0 && rows[j].type !== 'row') j--;
    if (j >= 0) {
      rows[j].items.push(...rows[i].items);
      rows.splice(i, 1);
      continue;
    }

    let k = i + 1;
    while (k < rows.length && rows[k].type !== 'row') k++;
    if (k < rows.length) {
      rows[k].items.unshift(...rows[i].items);
      rows.splice(i, 1);
    }
    /* j도 k도 없으면(이미지가 총 1장뿐) 어쩔 수 없이 그대로 둠 */
  }

  /* 줄에 사진이 몇 장 남든 예외 없이 2열 가로 폭을 항상 정확히 채움
     (그만큼 높이가 커지는 줄이 생길 수 있음).
     flex-wrap 대신 top/left를 직접 계산해서 절대좌표로 배치 — 이렇게 해야
     한 장의 크기가 transition으로 바뀌는 동안 브라우저가 매 프레임 줄바꿈을
     다시 계산하면서 다른 사진들까지 덜그덕거리며 움직이는 문제가 없어짐 */
  let curY = 0;
  rows.forEach(r => {
    if (r.type === 'expanded') {
      const h = containerWidth / r.ratio;
      r.item.style.left   = '0px';
      r.item.style.top    = curY + 'px';
      r.item.style.width  = containerWidth + 'px';
      r.item.style.height = h + 'px';

      /* 좌우 화살표는 이미지 세로 중앙이 아니라 상단 고정 위치에 둠 — 이미지마다
         높이(h)가 달라서 중앙 기준으로 하면 사진이 바뀔 때마다 위치가 들쭉날쭉했음.
         상단에서부터 일정 거리(NAV_TOP_OFFSET)는 높이와 무관하게 항상 동일함 */
      const NAV_TOP_OFFSET = 28;
      const navTop = curY + NAV_TOP_OFFSET;
      const prevBtn = r.item.querySelector('.gallery-nav-prev');
      const nextBtn = r.item.querySelector('.gallery-nav-next');
      if (prevBtn) prevBtn.style.top = navTop + 'px';
      if (nextBtn) nextBtn.style.top = navTop + 'px';

      curY += h + GAP;
      return;
    }
    const totalGap = GAP * (r.items.length - 1);
    const sumW = r.items.reduce((s, x) => s + x.w, 0);
    const scale = (containerWidth - totalGap) / sumW;
    const rowH = TARGET_H * scale;
    let curX = 0;
    r.items.forEach(x => {
      const w = x.ratio * rowH;
      x.item.style.left   = curX + 'px';
      x.item.style.top    = curY + 'px';
      x.item.style.height = rowH + 'px';
      x.item.style.width  = w + 'px';
      curX += w + GAP;
    });
    curY += rowH + GAP;
  });

  const totalHeight = Math.max(0, curY - GAP);
  gallery.style.height = totalHeight + 'px';
  return totalHeight;
}

/* 갤러리 안 이미지들이 다 로드된 뒤(원본 크기를 알아야 계산 가능) 저스티파이드 레이아웃 실행 */
function layoutGalleryWhenReady(gallery) {
  const imgs = [...gallery.querySelectorAll('img')];
  if (!imgs.length) return;
  let remaining = imgs.length;
  const done = () => {
    remaining--;
    if (remaining <= 0) {
      layoutGalleryJustified(gallery);
      layout(); /* 이미지 크기가 확정된 뒤 페이지 높이도 다시 계산 */
    }
  };
  imgs.forEach(img => {
    if (img.complete && img.naturalWidth) {
      done();
    } else {
      img.addEventListener('load', done);
      img.addEventListener('error', done);
    }
  });
}

/* ════════════════════════════════════════════════
   개별 디자이너 상세 페이지 열기/닫기
   ════════════════════════════════════════════════ */
function updateScrollClass() {
  document.documentElement.classList.toggle('detail-scroll', detailMode || personMode);
}

function openPerson(idx) {
  const panel = document.getElementById('panelInfo');
  fadeOutThen(panel, () => {
    if (detailMode) {
      detailMode = false;
      document.getElementById('page').classList.remove('detail-mode');
    }
    personMode = true;
    document.getElementById('page').classList.add('person-mode');
    renderPerson(idx);
    updateScrollClass();
    document.body.scrollTop = 0;
    layout();
    /* 개인 상세 모드에선 2열(panelInfo) 자체가 계속 숨겨져 있어야 하므로
       (#page.person-mode #panelInfo { opacity:0 }) 다시 페이드인하지 않음 */
  });
}

function closePerson() {
  const panel = document.getElementById('panelInfo');
  personMode = false;
  document.getElementById('page').classList.remove('person-mode');
  updateScrollClass();
  document.body.scrollTop = 0;
  layout();
  fadeIn(panel); /* 개인 상세 모드 동안 숨겨져 있던 2열을 다시 페이드인 */
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

  updateThumbCenter();
}

/* 1열(이름·A·B 사이 연결선 영역)의 가로 중앙 x 좌표 갱신 */
function updateThumbCenter() {
  thumbCenterX = (AX_R_cur + BX_L_cur) / 2;
}

/* ════════════════════════════════════════════════
   연결선: 호버 시 생성, 한번 생성되면 유지
   ════════════════════════════════════════════════ */
/* #linesSvg 안에 <defs>가 아직 없으면 하나 만들어서 재사용 (쉬머용
   linearGradient들을 담는 곳) */
function getLinesDefs() {
  const svg = document.getElementById('linesSvg');
  let defs = svg.querySelector('defs');
  if (!defs) {
    defs = document.createElementNS('http://www.w3.org/2000/svg', 'defs');
    svg.insertBefore(defs, svg.firstChild);
  }
  return defs;
}

/* 텍스트와 동일한 쉬머(밝은 띠) 하이라이트를 연결선에도 적용하기 위한
   linearGradient 생성. x1/x2는 tickShimmer가 매 프레임 갱신(모든 선이 같은
   x값을 공유), y1/y2는 이 선의 세로 중앙에 고정해서 수평 띠가 되도록 함 */
function buildLineSpotGradient(pi, cy) {
  const defs = getLinesDefs();
  const grad = document.createElementNS('http://www.w3.org/2000/svg', 'radialGradient');
  grad.setAttribute('id', 'lineSpot' + pi);
  grad.setAttribute('gradientUnits', 'userSpaceOnUse');
  grad.setAttribute('cx', -9999);
  grad.setAttribute('cy', cy);
  grad.setAttribute('r', 2900);
  [['0%', '0.95'], ['40%', '0.35'], ['75%', '0']].forEach(([offset, opacity]) => {
    const stop = document.createElementNS('http://www.w3.org/2000/svg', 'stop');
    stop.setAttribute('offset', offset);
    stop.setAttribute('stop-color', '#ffffff');
    stop.setAttribute('stop-opacity', opacity);
    grad.appendChild(stop);
  });
  defs.appendChild(grad);
  return grad;
}

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

  /* 같은 좌표의 선을 하나 더 그려서 위에 겹치고, 쉬머 그라데이션을 stroke로
     줘서 screen 블렌드로 빛이 지나갈 때만 밝아지게 함 */
  const cy = (y1 + y2) / 2;
  const grad = buildLineSpotGradient(pi, cy);
  const spot = document.createElementNS('http://www.w3.org/2000/svg', 'line');
  spot.setAttribute('x1', AX_R_cur); spot.setAttribute('y1', y1);
  spot.setAttribute('x2', BX_L_cur); spot.setAttribute('y2', y2);
  spot.setAttribute('stroke-width', '2.5');  /* 기본 선(0.8px)보다 두껍게: 얇은 선 위에서 하이라이트가 너무 옅어서 거의 안 보이던 문제 보완 */
  spot.setAttribute('stroke', 'url(#lineSpot' + pi + ')');
  spot.classList.add('line-spot');

  return { base: ln, spot, grad };
}

function revealLine(pi) {
  if (!revealed.has(pi)) {
    revealed.add(pi);
    const svg = document.getElementById('linesSvg');
    const entry = buildLineFor(pi);
    lineEls[pi] = entry;
    svg.appendChild(entry.base);
    svg.appendChild(entry.spot);
    /* 다음 프레임에 dashoffset 0 → 선이 그려지는 애니메이션 */
    requestAnimationFrame(() => requestAnimationFrame(() => {
      entry.base.style.strokeDashoffset = '0';
    }));
  }
  focusLine(pi);
}

/* 썸네일 박스를 이미지 원본 비율대로 크기 계산 + 1열 중앙에 배치 */
function positionThumb(box, naturalW, naturalH) {
  if (!naturalW || !naturalH) return;
  const scale = Math.min(THUMB_MAX / naturalW, THUMB_MAX / naturalH);
  const w = naturalW * scale;
  const h = naturalH * scale;
  box.style.width  = w + 'px';
  box.style.height = h + 'px';
  box.style.left   = (thumbCenterX - w / 2) + 'px';
  /* top:50%+transform:translateY(-50%) 대신 top을 px로 직접 계산해서 지정.
     transform은 (z-index와 마찬가지로) 별도의 stacking context를 만들어서
     안의 img에 걸린 mix-blend-mode가 #linesSvg를 더 이상 backdrop으로
     인식하지 못하게 막는 문제가 있었음 */
  box.style.top = (PAGE_H / 2 - h / 2) + 'px';
}

/* 썸네일 표시: 이미지 로드 완료 후(또는 이미 로드돼 있으면 즉시) 위치/크기 계산 */
function showThumb(thumb, box, img) {
  const src = THUMB_BASE + encodeURIComponent(thumb);
  const ready = () => {
    positionThumb(box, img.naturalWidth, img.naturalHeight);
    box.classList.add('show');
  };
  if (img.getAttribute('src') === src && img.complete && img.naturalWidth) {
    ready();
  } else {
    img.onload = ready;
    img.src = src;
  }
}

/* 호버 중: 해당 선 + 해당 텍스트(이름/A/B) 모두 회색 강조 + 썸네일 표시 */
function focusLine(pi) {
  const ln = lineEls[pi] && lineEls[pi].base;
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
    showThumb(thumb, box, img);
  } else {
    box.classList.remove('show');
  }
}

/* 호버 해제: 선은 검정으로 고정, 텍스트 강조 해제, 썸네일 숨김 */
function unfocusLine(pi) {
  const ln = lineEls[pi] && lineEls[pi].base;
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
  Object.entries(lineEls).forEach(([pi, entry]) => {
    pi = Number(pi);
    const y1 = TOP + naRow[pi] * ROW_H + ROW_H / 2;
    const y2 = TOP + bRow[pi]  * ROW_H + ROW_H / 2;
    [entry.base, entry.spot].forEach(ln => {
      ln.style.transition = 'none';
      ln.setAttribute('x1', AX_R_cur); ln.setAttribute('y1', y1);
      ln.setAttribute('x2', BX_L_cur); ln.setAttribute('y2', y2);
      ln.style.strokeDasharray  = '';
      ln.style.strokeDashoffset = '0';
    });
    const cy = (y1 + y2) / 2;
    entry.grad.setAttribute('cy', cy);
  });
  requestAnimationFrame(() => {
    Object.values(lineEls).forEach(entry => {
      entry.base.style.transition = '';
      entry.spot.style.transition = '';
    });
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
  el.addEventListener('click', () => openPerson(pi)); /* 이름/A단어/B단어 클릭 → 개별 상세 페이지 */
  el.style.cursor = 'pointer';
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

  renderPosterGrid();
  renderPosterDetailGrid();
  renderDetailFooter();

  /* "자세히 보기" 클릭 → 전체 포스터 그리드 모드 토글 */
  document.querySelector('.info-poster-more').addEventListener('click', toggleDetail);

  /* 포스터 확대뷰: 이미지 자체가 아니라 주변부(배경)를 클릭했을 때만 닫힘 */
  const posterLightbox = document.getElementById('posterLightbox');
  if (posterLightbox) {
    posterLightbox.addEventListener('click', (e) => {
      if (e.target === posterLightbox) closePosterLightbox();
    });
  }

  /* 스크립트 맨 아래에서 최초 1회 layout()이 이미 실행됐지만, 그 시점엔
     이름/A/B단어(.row-item) 등이 아직 DOM에 없어서 텍스트 그라데이션 위치
     계산이 빠졌었음. 여기서 내용 렌더링이 다 끝난 뒤 다시 한 번 호출 */
  layout();

  playInitialReveal();
}

/* ════════════════════════════════════════════════
   초기 진입 리빌 애니메이션: 페이지를 처음 열었을 때 텍스트가 슬라이드/이동 없이
   왼쪽부터 서서히(잉크가 번지듯) 나타나게 함. 각 요소의 실제 x좌표에 비례해서
   opacity 트랜지션 시작 시점을 미세하게 늦춰서 왼쪽->오른쪽으로 퍼져나가는
   느낌을 줌. init()에서 내용이 다 채워진 뒤 최초 1회만 호출됨 */
const REVEAL_SELECTOR = '.row-item, .info-title, .info-date, .info-desc-ko, ' +
  '.info-desc-en, .info-poster-header, .info-copyright, ' +
  '.meta-univ, .meta-studio, .meta-label, .meta-people';
const REVEAL_MS_PER_PX = 0.6;  /* x좌표 1px당 지연시간(ms) - 클수록 퍼지는 속도가 느려짐 */
const REVEAL_MAX_DELAY = 500;  /* 지연시간 상한(ms) */
const REVEAL_DURATION  = 700;  /* CSS .reveal-init의 transition 시간(ms)과 맞춤 */

function playInitialReveal() {
  const page = document.getElementById('page');
  if (!page) return;
  const pageRect = page.getBoundingClientRect();
  const scale = pageRect.width / page.offsetWidth;
  const els = [...document.querySelectorAll(REVEAL_SELECTOR)];
  if (!els.length) return;

  els.forEach(el => {
    const r = el.getBoundingClientRect();
    const x = (r.left - pageRect.left) / scale;
    const delay = Math.min(REVEAL_MAX_DELAY, Math.max(0, x) * REVEAL_MS_PER_PX);
    el.style.transitionDelay = delay + 'ms';
    el.classList.add('reveal-init');
  });

  /* 강제 리플로우 후 revealed를 붙여야 opacity:0 -> 1 트랜지션이 확실히 시작됨 */
  void page.offsetWidth;
  requestAnimationFrame(() => {
    els.forEach(el => el.classList.add('revealed'));
  });

  /* 다 끝난 뒤엔 클래스/지연시간을 치워서 이후 호버 등 다른 opacity 트랜지션과
     안 꼬이게 함 (.row-item 자체의 opacity 트랜지션이 다시 정상 동작하도록) */
  setTimeout(() => {
    els.forEach(el => {
      el.classList.remove('reveal-init', 'revealed');
      el.style.transitionDelay = '';
    });
  }, REVEAL_MAX_DELAY + REVEAL_DURATION + 300);
}

/* ════════════════════════════════════════════════
   2열: 27개의 포스터 미리보기 그리드 렌더링
   (원본 이미지 비율 유지, object-fit:contain으로 크롭 없이 표시)
   ════════════════════════════════════════════════ */
function renderPosterGrid() {
  const grid = document.getElementById('posterGrid');
  if (!grid) return;
  /* 실제 포스터 이미지 대신 아웃라인만 있는 빈 박스로 미리보기 (와이어프레임 느낌) */
  for (let i = 0; i < POSTER_PREVIEW_COUNT; i++) {
    const box = document.createElement('div');
    box.className = 'poster-box';
    grid.appendChild(box);
  }
}

/* ════════════════════════════════════════════════
   한글 조사 처리: 받침 유무에 따라 '은/는' 선택
   ════════════════════════════════════════════════ */
function hasBatchim(word) {
  const ch = word.trim().slice(-1);
  const code = ch.charCodeAt(0);
  if (code < 0xAC00 || code > 0xD7A3) return false; /* 한글 완성형 음절이 아니면 판단 불가 → false */
  return (code - 0xAC00) % 28 !== 0;
}
function eunNeun(word) {
  return hasBatchim(word) ? '은' : '는';
}

/* ════════════════════════════════════════════════
   자세히 보기: 전체 포스터(27개) 그리드 렌더링
   - 실제 포스터 원본 비율(object-fit:contain) 유지
   - 호버 시 이름/영문명 + "A는 B이다" 문장 오버레이
     (영문 문장은 번역이 아니라 별도로 큐레이션이 필요해 지금은 비워둠)
   ════════════════════════════════════════════════ */
function renderPosterDetailGrid() {
  const grid = document.getElementById('posterDetailGrid');
  if (!grid) return;
  /* "자세히 보기"를 열 때마다 새로 셔플해서 다시 그림 */
  grid.innerHTML = '';
  shuffle(DATA).forEach(person => {
    const box = document.createElement('div');
    box.className = 'detail-poster-box';

    if (person.poster) {
      const img = document.createElement('img');
      img.src = POSTER_BASE + encodeURIComponent(person.poster);
      img.alt = person.name;
      box.appendChild(img);
    }

    const overlay = document.createElement('div');
    overlay.className = 'detail-poster-overlay';

    const nameEl = document.createElement('div');
    nameEl.className = 'detail-poster-name';
    nameEl.innerHTML = `${person.name} <span class="en">| ${person.en}</span>`;
    overlay.appendChild(nameEl);

    /* 실제 작품 제목(koTitle)이 있으면 그걸 그대로 쓰고, 없으면(XU NING 등
       자료 확보 전) A/B 단어로 조사만 맞춰서 임시 생성 */
    if (person.koTitle || (person.A && person.B)) {
      const sentenceEl = document.createElement('div');
      sentenceEl.className = 'detail-poster-sentence';
      sentenceEl.textContent = person.koTitle || `${person.A}${eunNeun(person.A)} ${person.B}이다`;
      overlay.appendChild(sentenceEl);
    }

    /* 영문 문장은 기계번역이 아니라 큐레이션이 필요해서, enSentence가 채워진
       사람만 표시 (아직 전원 분 확보 전) */
    if (person.enSentence) {
      const enSentenceEl = document.createElement('div');
      enSentenceEl.className = 'detail-poster-sentence-en';
      enSentenceEl.textContent = person.enSentence;
      overlay.appendChild(enSentenceEl);
    }

    box.appendChild(overlay);

    box.addEventListener('click', () => openPosterLightbox(person, box));

    grid.appendChild(box);
  });
}

/* ════════════════════════════════════════════════
   포스터 클릭 → 확대뷰(라이트박스). #page 밖의 고정 오버레이라서
   그리드 레이아웃/페이지 높이에는 전혀 영향 없음(스크롤해도 항상 화면 중앙 고정).
   주변부(배경) 클릭하면 닫힘 — 리스너는 init()에서 한 번만 연결
   ════════════════════════════════════════════════ */
function openPosterLightbox(person, boxEl) {
  if (!person.poster) return;
  const lightbox = document.getElementById('posterLightbox');
  const img = document.getElementById('posterLightboxImg');
  if (!lightbox || !img) return;

  img.src = POSTER_BASE + encodeURIComponent(person.poster);
  img.alt = person.name;

  /* 가로 폭: 뷰포트 비율(vw)이 아니라, 클릭한 포스터가 속한 "행"(4개씩,
     DETAIL_COLS=4)에서 실제로 옆 칸 2개가 차지하는 화면상 폭을 그대로 재서 씀.
     그 행의 첫 두 칸(왼쪽 끝 ~ 두번째 칸 오른쪽 끝) 사이 거리 = 포스터 2개 폭 + 칸 사이 간격 1개.
     #page의 scale 변환이 이미 반영된 실제 화면 좌표라 별도 계산 없이 그대로 쓸 수 있음 */
  function computeTargetWidth() {
    if (!boxEl) return null;
    const r0 = boxEl.getBoundingClientRect();
    if (r0.width === 0 && r0.height === 0) return null;
    const rowBoxes = [...document.querySelectorAll('.detail-poster-box')]
      .map(b => b.getBoundingClientRect())
      .filter(r => Math.abs(r.top - r0.top) < 2)
      .sort((a, b) => a.left - b.left);
    if (rowBoxes.length < 2) return null;
    return rowBoxes[1].right - rowBoxes[0].left;
  }

  /* 폭은 항상 행의 포스터 2개 분량(고정) — 어떤 포스터를 클릭해도 크기가 일정해야
     "확실히 확대된" 느낌이 남.
     가로/세로 중앙 모두 그리드 전체의 고정된 위치나 특정 행(예: "2번째 행")이
     아니라, 지금 스크롤해서 실제로 화면에 보이고 있는 그리드 부분(현재 보고 있는
     포스터 라인들)의 중앙을 씀. "그리드 전체 중앙"으로 하면 스크롤 위치와 무관하게
     그리드 전체 범위 기준 고정값이 나오고, "2번째 행 고정"으로 하면 스크롤해서
     다른 행을 보고 있을 때 그 행과 무관한 위치에 뜨는 문제가 있었음 */
  function computeGridVisibleRect() {
    const grid = document.getElementById('posterDetailGrid');
    if (!grid) return null;
    const r = grid.getBoundingClientRect();
    if (r.width === 0 && r.height === 0) return null;
    const hr = document.getElementById('detailHR');
    const hrBottom = hr ? Math.max(hr.getBoundingClientRect().bottom, 0) : 0;
    const visibleTop    = Math.max(r.top, hrBottom, 0);
    const visibleBottom = Math.min(r.bottom, window.innerHeight);
    return {
      centerX: (r.left + r.right) / 2,
      centerY: (visibleTop + visibleBottom) / 2,
    };
  }

  function computeLayout() {
    const targetWidth = computeTargetWidth(); // 행의 포스터 2개 폭(상한)
    const visibleRect = computeGridVisibleRect();
    let centerY = window.innerHeight / 2;

    const centerX = visibleRect ? visibleRect.centerX : null;
    lightbox.style.setProperty('--lightbox-center-x', (centerX !== null ? centerX + 'px' : '50%'));

    if (img.naturalWidth && img.naturalHeight) {
      const naturalRatio = img.naturalWidth / img.naturalHeight; // width/height

      // 폭 상한(행의 포스터 2개 분량)과 별개로, 세로 높이도 뷰포트의 55%를 넘지
      // 않게 상한을 둠. 가로로 넓은/짧은 창(예: 태블릿 가로모드)에서는 폭 기준
      // 크기의 세로 길이가 뷰포트보다 커져서 화면 안전장치(clamp)가 계속 이겨버려
      // "현재 보고 있는 부분"과 무관한 위치로 밀려나는 문제가 있었음
      const widthCap  = targetWidth || Math.min(window.innerWidth * 0.55, img.naturalWidth);
      const heightCap = window.innerHeight * 0.55;
      const finalWidth = Math.min(widthCap, heightCap * naturalRatio);

      img.style.width    = finalWidth + 'px';
      img.style.maxWidth = 'none';

      const renderedH = finalWidth / naturalRatio;
      const half = renderedH / 2;

      if (visibleRect) centerY = visibleRect.centerY;

      // 그래도 남는 극단적인 경우를 위한 안전장치: 그리드 상단 라인보다 위로
      // 올라가거나 화면 아래로 잘리지 않게 clamp
      const hr = document.getElementById('detailHR');
      const hrBottom = hr ? Math.max(hr.getBoundingClientRect().bottom, 0) : 0;
      const margin = 8;
      const minCenter = hrBottom + half + margin;
      const maxCenter = window.innerHeight - half - margin;
      if (minCenter <= maxCenter) {
        centerY = Math.min(Math.max(centerY, minCenter), maxCenter);
      } else {
        centerY = window.innerHeight / 2;
      }
    } else {
      // 이미지 로드 전 임시값
      if (targetWidth) {
        img.style.width    = targetWidth + 'px';
        img.style.maxWidth = 'none';
      } else {
        img.style.width    = '';
        img.style.maxWidth  = '55vw';
      }
      if (visibleRect) centerY = visibleRect.centerY;
    }

    lightbox.style.setProperty('--lightbox-center-y', centerY + 'px');
  }

  if (img.complete && img.naturalWidth) {
    computeLayout();
  } else {
    computeLayout(); // 로드 전 임시값(이후 로드되면 재계산)
    img.onload = computeLayout;
  }

  lightbox.classList.add('active');
  document.getElementById('posterDetailGrid')?.classList.add('lightbox-open');
}

function closePosterLightbox() {
  const lightbox = document.getElementById('posterLightbox');
  if (!lightbox) return;
  lightbox.classList.remove('active');
  document.getElementById('posterDetailGrid')?.classList.remove('lightbox-open');
}

/* ════════════════════════════════════════════════
   자세히 보기 푸터 렌더링 (그리드와 독립된 별도 요소.
   위치/폭은 positionDetailGrid가 계산해서 매번 갱신)
   ════════════════════════════════════════════════ */
function renderDetailFooter() {
  const footer = document.getElementById('detailFooter');
  if (!footer) return;
  footer.innerHTML = `
    <div class="hr"></div>
    <div class="footer-copy-text">
      2026 © Hongik University<br>
      Dept. of Visual Communication Design.<br>
      All Rights Reserved
    </div>`;
}

/* ════════════════════════════════════════════════
   "자세히 보기" 토글: 1열 숨기고 2열을 왼쪽에 고정, 전체 포스터 그리드 표시
   ════════════════════════════════════════════════ */
/* 2열(panelInfo)이 슬라이딩하지 않고, 안 보이는 동안 위치만 순간 이동한 뒤
   다시 나타나도록 페이드아웃 → 콜백(모드 전환 + layout) → 페이드인 순서로 실행 */
const PANEL_FADE_MS = 260;
function fadeOutThen(el, callback) {
  el.style.opacity = '0';
  setTimeout(callback, PANEL_FADE_MS);
}
function fadeIn(el) {
  void el.offsetWidth; /* 강제 리플로우: 이후 opacity 변경이 transition을 타도록 함 */
  el.style.opacity = '1';
}

function toggleDetail() {
  const panel = document.getElementById('panelInfo');
  fadeOutThen(panel, () => {
    detailMode = !detailMode;
    document.getElementById('page').classList.toggle('detail-mode', detailMode);
    updateScrollClass();
    document.querySelector('.info-poster-more').textContent = detailMode ? '홈으로' : '자세히 보기';
    if (detailMode) renderPosterDetailGrid(); /* 열 때마다 순서를 새로 랜덤배치 */
    if (!detailMode) document.body.scrollTop = 0; /* 랜딩으로 돌아갈 땐 스크롤 위치 초기화 (body가 스크롤 컨테이너) */
    layout();
    fadeIn(panel);
  });
}

/* ════════════════════════════════════════════════
   모바일 반응형: 화면 폭이 좁으면 #page(데스크톱, 화면 높이 기준 scale) 대신
   #mobilePage(피그마 [모바일] 랜딩 시안 기준 — 상단 제목|날짜 2단 그리드,
   ABOUT/POSTERS 하단 고정 탭)를 보여줌. DATA는 그대로 재사용하고, 정적 텍스트
   (날짜/설명/메타)는 데스크톱 DOM(#panelInfo, #panelMeta)에서 그대로 복제해와서
   내용을 두 군데에 따로 유지보수하지 않아도 되게 함 ════════════════════════════════════════════════ */
const MOBILE_BREAKPOINT   = 700;  /* (참고용 상수 — 실제 판정은 아래 isMobileViewport의
                                      shortSide 기준을 씀) */
const PHONE_SHORT_SIDE_MAX = 600; /* 짧은 변(가로/세로 중 작은 값)이 이보다 작으면 폰으로 간주해
                                      화면 방향과 무관하게 항상 모바일(폰 레이아웃). 폰은 가로로
                                      눕혀도 짧은 변(세로 길이)이 보통 360~480px대라 이 기준에 걸림 */
const TABLET_MAX_WIDTH    = 1366; /* 긴 변이 이 폭(px)까지는 "태블릿 구간" — 세로/가로 방향에 따라
                                      자동 전환(iPad 계열 세로 768~1024px, 가로 1024~1366px 포괄).
                                      이보다 크면(=일반 데스크톱/노트북 화면) 방향과 무관하게 웹 버전 */
let mobileInited = false;
let mRowOrder = []; /* row(index) → DATA index — [버그 수정] 예전엔 이름/제목이 서로 다른
   행에 독립적으로 섞여있어(mNameOrder/mTitleOrder 분리) 클릭하면 진짜 짝을 찾아 SVG
   선을 그리는 "발견" 상호작용이었음. 이제는 각 행이 처음부터 같은 사람의 이름+작품명을
   함께 보여주는 단순 1:1 목록으로 바뀌어서, 행 순서 하나만 셔플하면 됨 */
let mNavigating = false; /* 상세 페이지로 이동 중 중복 클릭 방지 */
let mSavedScrollTop = 0;       /* 상세 페이지 열기 직전의 랜딩 스크롤 위치 (닫을 때 복원) */
let mLandingHeaderLeftHTML  = ''; /* #mHeader 1단(전시 제목) 원래 내용 캐시 */
let mLandingHeaderRightHTML = ''; /* #mHeader 2단(날짜) 원래 내용 캐시 */

/* [버그 수정] PC 데스크톱에서 브라우저 창을 좁게 줄이거나(예: 화면 분할,
   작은 노트북 해상도) 세로로 긴 비율로 리사이즈하면, 아래 shortSide/longSide
   판정만으로는 "태블릿을 세로로 든 상태"와 구분이 안 돼 터치 없는 일반
   PC인데도 모바일 403px 카드 레이아웃(body.mobile-mode #mobilePage{max-width:
   402px})이 강제 적용되어 화면 양옆에 여백만 남고 답답하게 압축되어 보이는
   문제가 있었음. 마우스/트랙패드만 있는 PC는 창 크기·비율과 무관하게 항상
   웹 버전을 써야 하므로, "터치 입력이 가능한 기기인지"를 최우선 게이트로
   추가함 — 태블릿(터치 있음)의 세로/가로 자동 전환 기능은 그대로 유지됨 */
function isTouchCapableDevice() {
  return (navigator.maxTouchPoints > 0) ||
         ('ontouchstart' in window) ||
         (navigator.msMaxTouchPoints > 0);
}

/* 태블릿(iPad 등) 접속 시 화면 방향에 따라 자동 전환: 세로(portrait)=모바일,
   가로(landscape)=웹. 순수 폭(width)만 보면 "폰을 가로로 눕힌 경우"(예: 844×390)도
   폭이 커서 태블릿 구간으로 잘못 잡혀 데스크톱 레이아웃이 나와 버림 — 그래서
   폭이 아니라 "짧은 변"(shortSide = min(width, height))으로 폰인지 먼저 가려냄:
   0) 터치가 전혀 안 되는 기기(PC/노트북) → 창 크기·비율과 무관하게 항상 웹
   1) shortSide < 600px → 폰(가로로 눕혀도 짧은 변은 여전히 작음) → 방향 무관 항상 모바일
   2) 긴 변이 1366px 이하(태블릿 구간) → width < height(세로)면 모바일, 아니면(가로) 웹
   3) 그 이상(일반 데스크톱/노트북) → 방향 무관 항상 웹 */
function isMobileViewport() {
  if (!isTouchCapableDevice()) return false;
  const w = window.innerWidth;
  const h = window.innerHeight;
  const shortSide = Math.min(w, h);
  const longSide  = Math.max(w, h);
  if (shortSide < PHONE_SHORT_SIDE_MAX) return true;
  if (longSide <= TABLET_MAX_WIDTH) return w < h;
  return false;
}

/* [버그 수정] 예전엔 이름/제목을 서로 다른 행에 독립적으로 섞어두고(mNameOrder/
   mTitleOrder), 클릭하면 같은 사람의 진짜 짝을 다른 칸에서 찾아 SVG 대각선을
   그리는 "발견" 상호작용이었음(파격적 대각선 크로스 매칭 + 화면 가시 영역
   한정 알고리즘까지 여러 차례 다듬었던 기능). 이번 요청으로 모바일에서만 이
   개념을 완전히 걷어내고, 각 행이 처음부터 같은 사람의 이름+작품명을 나란히
   보여주는 단순 1:1 목록으로 바꿈 — 그래서 이름/제목을 따로 섞고 화면 안에
   붙잡아두기 위한 코드(estimateVisibleRows/boundedPermutation/
   farBiasedPermutation/chunkedFarBiasedPermutation/computeVisibleMobileRowIndices)
   와 SVG 연결선을 긋던 코드(connectMobilePair/getTextRect/drawMobileConnectLine/
   mLastLineNameEl 등)가 전부 필요 없어져 삭제함. 데스크톱(#linesSvg 등)은
   완전히 별개의 코드라 그대로 유지됨 */
function buildMobileList() {
  const list = document.getElementById('mList');
  list.innerHTML = '';

  /* 새로고침(진입)할 때마다 27명의 세로 배치 "순서"만 무작위로 섞음 —
     이름/제목은 항상 같은 사람끼리 한 행(.m-row)에 나란히 표시되므로
     (A는 좌측 정렬, B는 우측 정렬), 더 이상 행 사이 매칭을 계산할 필요가
     없음 */
  const order = shuffle(DATA.map((_, i) => i));
  mRowOrder = order;

  order.forEach(pi => {
    const row = document.createElement('div');
    row.className = 'm-row';
    row.dataset.pi = pi;
    row.innerHTML =
      `<span class="m-row-name">${DATA[pi].name}</span>` +
      `<span class="m-row-title">${DATA[pi].koTitle || ''}</span>`;
    /* 행 전체를 클릭 영역으로 써서 어디를 눌러도(이름 쪽/제목 쪽 상관없이)
       바로 해당 디자이너의 상세 페이지로 이동함 — 더 이상 선이 그려지길
       기다릴 필요가 없으므로 지연 없이 즉시 이동함 */
    row.addEventListener('click', () => {
      if (mNavigating) return;
      mNavigating = true;
      openMobilePerson(pi);
    });
    list.appendChild(row);
  });
}


/* ABOUT 탭: 데스크톱 소개글(.info-desc-ko/en) + 메타 정보(지도교수/참여자/코퍼라이트) */
/* 데스크톱 원본(.info-desc-ko/.info-desc-en)은 문단 2개가 <br> 하나로만
   구분되고, 2번째 문단의 들여쓰기는 &nbsp;를 12개 나열해서 흉내낸 것 —
   이제 진짜 4개의 <p>로 쪼개서 nth-child로 문단별 text-indent/여백을
   개별 제어할 수 있게 함(&nbsp; 들여쓰기는 text-indent로 대체되므로 제거) */
function splitIntoParagraphs(html) {
  if (!html) return ['', ''];
  const idx = html.indexOf('<br>');
  if (idx === -1) return [html.trim(), ''];
  const p1 = html.slice(0, idx).trim();
  const p2 = html.slice(idx + 4).replace(/^(?:\s|&nbsp;)+/, '').trim();
  return [p1, p2];
}

function buildMobileAbout() {
  const descKoEl = document.querySelector('.info-desc-ko');
  const descEnEl = document.querySelector('.info-desc-en');
  const [koP1, koP2] = splitIntoParagraphs(descKoEl ? descKoEl.innerHTML : '');
  const [enP1, enP2] = splitIntoParagraphs(descEnEl ? descEnEl.innerHTML : '');
  /* 전시 기조글(한글/영문) 전체를 .about-intro-text 하나로 묶고, 문단
     4개(한글 2 + 영문 2)를 .about-p로 나눔 — 문단별 들여쓰기/여백은 CSS
     nth-child로 개별 제어(1번째 무들여쓰기, 2번째 들여쓰기, 3번째
     무들여쓰기, 4번째 들여쓰기 + 2/3번째 사이만 큰 여백) */
  document.getElementById('mAbout').innerHTML = `
    <div class="about-statement-wrapper">
      <p class="about-p about-p-ko">${koP1}</p>
      <p class="about-p about-p-ko">${koP2}</p>
      <p class="about-p about-p-en">${enP1}</p>
      <p class="about-p about-p-en">${enP2}</p>
    </div>
  `;

  const univEl   = document.querySelector('.meta-univ');
  const studioEl = document.querySelector('.meta-studio');
  const peopleEl = document.querySelector('.meta-people');
  const copyEl   = document.querySelector('.info-copyright');

  /* .meta-people의 첫 줄(첫 <br> 이전)은 지도교수 이름 — 데스크톱(.meta-label
     "지도교수/참여자" + .meta-people "석재원/명단...")과 동일하게 라벨-값을
     정확히 짝지어 보여줌 */
  const peopleHTML = peopleEl ? peopleEl.innerHTML : '';
  const firstBreak = peopleHTML.indexOf('<br>');
  const advisorName = firstBreak !== -1 ? peopleHTML.slice(0, firstBreak) : peopleHTML;

  /* 참여자 명단: 데스크톱 .meta-people의 줄바꿈(다른 순서/그룹)을 그대로
     쓰지 않고, DATA 배열 순서(=요청된 4명씩 7줄 그룹과 정확히 동일한 순서)로
     각 이름을 개별 grid item으로 렌더링 — .m-participant-grid가
     grid-template-columns:repeat(4, auto)로 항상 한 줄에 4명씩 고정함 */
  const participantsGridHTML = DATA
    .map((p) => `<span class="m-participant-name">${p.name}</span>`)
    .join('');

  const mMetaEl = document.getElementById('mMeta');
  mMetaEl.classList.add('about-credits-wrapper');
  mMetaEl.innerHTML = `
    <div class="m-meta-univ-block">${univEl ? univEl.innerHTML : ''}</div>
    <div class="m-meta-univ-block">${studioEl ? studioEl.innerHTML : ''}</div>
    <div class="m-meta-row"><span class="m-meta-label-inline">지도교수</span><span class="m-meta-value">${advisorName}</span></div>
    <div class="m-meta-row m-meta-row--participants"><span class="m-meta-label-inline">참여자</span><span class="m-meta-value"><span class="m-participant-grid">${participantsGridHTML}</span></span></div>
  `;

  /* 카피라이트는 .about-credits-wrapper 밖의 독립 형제 요소(#mAboutFooter) —
     크레딧 블록의 세로선이 참여자 명단 끝에서 멈추고, 카피라이트에는 선이
     없어야 하므로 별도 컨테이너로 분리함 */
  const footerEl = document.getElementById('mAboutFooter');
  if (footerEl) {
    footerEl.innerHTML = `<div class="about-copyright-footer common-footer">${copyEl ? copyEl.innerHTML : ''}</div>`;
  }
}

/* [히어로 뷰 스펙 정정] 서문(.about-statement-wrapper)과 지도교수/참여자
   명단(#mMeta)은 스크롤 없이 첫 화면에 전부 보여야 하고, 카피라이트 영문
   푸터(#mAboutFooter)만 반드시 스크롤을 내려야 보이게 해야 함 — 이전엔
   서문 박스 자체를 뷰포트 높이만큼 부풀려서 크레딧까지 통째로 밀어냈었는데,
   그게 아니라 "크레딧 바로 다음, 푸터 바로 앞"에만 여백을 둬야 함. 화면
   높이가 기기마다 달라(특히 아이패드처럼 큰 기기) 크레딧이 끝나는 지점부터
   화면 하단까지 남는 여백이 매번 다르므로, 고정 px 여백만으로는 큰 화면에서
   푸터가 그대로 첫 화면에 노출됨 — 그래서 그 남은 거리를 실측해서 최소
   여백(90px)에 더해 정확히 화면 밖으로 밀려나는 지점까지 margin-top을
   동적으로 계산함(#mHeader/#mTabs 좌표를 실측하던 기존 updateMobileGradientMetrics
   패턴과 동일한 방식) */
const ABOUT_FOOTER_MIN_GAP = 90; /* 요청하신 80~100px 사이 값 — 크레딧-푸터 사이 최소 간격 */

function updateAboutFooterPush() {
  if (!document.body.classList.contains('mobile-mode')) return;
  const aboutView = document.getElementById('mAboutView');
  const meta = document.getElementById('mMeta');
  const footerInner = document.querySelector('.about-copyright-footer');
  if (!aboutView || aboutView.hidden || !meta || !footerInner) return;
  footerInner.style.marginTop = '0px'; /* 이전 계산값이 남아있으면 측정이 누적 오차를 일으키므로 항상 리셋 후 다시 잼 */
  const metaBottom = meta.getBoundingClientRect().bottom; /* 크레딧 하단의 현재 뷰포트 기준 y좌표 */
  const viewportH = window.innerHeight;
  const gapToViewportBottom = viewportH - metaBottom; /* 크레딧 하단부터 화면 맨 밑까지 남은 거리(화면이 넉넉한 태블릿일수록 큼, 이미 화면을 넘겼으면 음수) */
  const push = Math.max(ABOUT_FOOTER_MIN_GAP, gapToViewportBottom + ABOUT_FOOTER_MIN_GAP);
  footerInner.style.marginTop = push + 'px';
}

/* POSTERS 탭: 데스크톱 버전(#posterDetailGrid)과 동일한 27개 포스터를
   2열 그리드로 렌더링. 데스크톱의 renderPosterDetailGrid()처럼 열 때마다
   다시 셔플해서 그림. 캡션은 호버가 없는 모바일 특성상 이미지 아래에
   "이름 | English name" 형식으로 항상 노출함.
   [기능 추가] 포스터 이미지/이름 클릭 시 해당 인물의 개인 상세 페이지로
   바로 이동 — 랜딩 리스트(.m-row)가 openMobilePerson(idx)를 호출하는 것과
   완전히 동일한 방식. shuffle()은 얕은 복사본을 섞을 뿐 DATA 원본 순서는
   바꾸지 않으므로(각 person은 DATA와 같은 객체 참조), DATA.indexOf(person)로
   원래 인덱스를 정확히 되찾을 수 있음 */
function renderMobilePosterGrid() {
  const grid = document.getElementById('mPosterGrid');
  if (!grid) return;
  grid.innerHTML = '';
  shuffle(DATA).forEach(person => {
    const idx = DATA.indexOf(person);
    const item = document.createElement('div');
    item.className = 'm-poster-item';
    item.dataset.pi = idx;

    if (person.poster) {
      const img = document.createElement('img');
      img.src = POSTER_BASE + encodeURIComponent(person.poster);
      img.alt = person.name;
      item.appendChild(img);
    }

    const caption = document.createElement('div');
    caption.className = 'm-poster-caption';
    caption.innerHTML = `${person.name} <span class="en">| ${person.en}</span>`;
    item.appendChild(caption);

    /* [기능 추가] 카드 전체(이미지+캡션) 어디를 클릭해도 상세 페이지로
       이동 — 랜딩 리스트 행 클릭과 동일하게 mNavigating으로 중복 클릭만
       방지함. openMobilePerson은 person-open 클래스만 추가하고 기존
       posters-open 클래스는 그대로 두므로, 상세 페이지에서 닫기(✕)를 누르면
       closeMobilePerson()이 person-open만 제거해 자동으로 POSTERS 그리드로
       돌아옴(추가 상태 관리 불필요 — 기존 구조가 이미 그렇게 동작함) */
    item.addEventListener('click', () => {
      if (mNavigating) return;
      mNavigating = true;
      openMobilePerson(idx);
    });

    grid.appendChild(item);
  });
}

/* 하단 ABOUT/POSTERS 탭 전환: 기본(랜딩) 리스트는 탭과 무관한 별도 화면이라,
   ABOUT/POSTERS 둘 다 여기서 관리하는 "탭 하위 화면"으로만 취급함.
   POSTERS = 데스크톱과 동일한 27개 포스터 그리드, ABOUT = 전시 정보 */
function switchMobileTab(tab) {
  document.querySelectorAll('.m-tab').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.tab === tab);
  });
  document.getElementById('mListView').hidden = true;
  document.getElementById('mPostersView').hidden = tab !== 'posters';
  document.getElementById('mAboutView').hidden = tab !== 'about';
  if (tab === 'posters') renderMobilePosterGrid();
  /* 랜딩 리스트가 기본 화면 — ABOUT/POSTERS 둘 중 하나가 열려 있는 동안엔
     person-open과 마찬가지로 하단 탭이 왼쪽으로 밀려나고 ✕(닫기, 목록으로)가
     나타남. 언더라인(.m-tab.active)도 이 두 하위 화면에 있을 때만 보임 */
  const mobilePage = document.getElementById('mobilePage');
  mobilePage.classList.toggle('about-open', tab === 'about');
  mobilePage.classList.toggle('posters-open', tab === 'posters');
  closeMobilePerson();
  document.body.scrollTop = 0; /* 탭 전환은 항상 새 탭 맨 위에서 시작 (closeMobilePerson의 스크롤 복원을 덮어씀) */
  scheduleMobileGradientMetricsUpdate(); /* 탭마다 콘텐츠 높이가 다르므로 --page-h/각 요소 위치를 다시 잼 */
  updateBodyScrollFade(); /* 방금 scrollTop=0으로 되돌렸으니 헤더 페이드도 즉시 꺼진 상태로 동기화 */
}

/* 기본(랜딩) 리스트로 되돌아감: ABOUT/POSTERS 어느 쪽도 활성/밑줄 표시되지
   않는 원래 상태 — ✕ 버튼이 about-open/posters-open 상태에서 눌렸을 때 씀 */
function showLandingList() {
  document.querySelectorAll('.m-tab').forEach(btn => btn.classList.remove('active'));
  document.getElementById('mListView').hidden = false;
  document.getElementById('mPostersView').hidden = true;
  document.getElementById('mAboutView').hidden = true;
  document.getElementById('mobilePage').classList.remove('about-open', 'posters-open');
  document.body.scrollTop = 0;
  scheduleMobileGradientMetricsUpdate();
  updateBodyScrollFade();
}

function initMobile() {
  if (mobileInited) return;
  mobileInited = true;

  const dateEl = document.querySelector('.info-date');
  document.getElementById('mHeaderDate').innerHTML = dateEl ? dateEl.innerHTML : '';

  /* 상세 페이지에 들어갈 때 헤더 내용을 작품 제목/작가 정보로 바꿔치기했다가
     닫을 때 그대로 되돌리기 위해, 전시 제목/날짜 원본을 미리 캐시해둠 */
  mLandingHeaderLeftHTML  = document.querySelector('.m-header-left').innerHTML;
  mLandingHeaderRightHTML = document.getElementById('mHeaderDate').innerHTML;

  buildMobileList();
  buildMobileAbout();

  document.querySelectorAll('.m-tab').forEach(btn => {
    btn.addEventListener('click', () => switchMobileTab(btn.dataset.tab));
  });
  /* X버튼: person-open이면 상세 페이지를 닫고, 그게 아니라
     about-open/posters-open(ABOUT 또는 POSTERS 그리드가 열려 있는 상태)이면
     기본 랜딩 리스트로 되돌아감 — 셋 다 '기본 화면이 아닌 상태를 닫는다'는
     동일한 동작이다 */
  document.getElementById('mCloseDetail').addEventListener('click', () => {
    const mobilePage = document.getElementById('mobilePage');
    if (mobilePage.classList.contains('person-open')) {
      closeMobilePerson();
    } else if (mobilePage.classList.contains('about-open') || mobilePage.classList.contains('posters-open')) {
      showLandingList();
    }
  });

  initMobileTabFade();
  scheduleMobileGradientMetricsUpdate(); /* 랜딩 리스트가 처음 그려진 직후 그라데이션 좌표 계산 */

  /* [버그 수정] #mList가 자체 스크롤(overflow-y:auto)을 갖게 되면서, 리스트를
     내부 스크롤할 때 각 행의 화면상 위치(getBoundingClientRect)는 바뀌지만
     #mobilePage 자체는 움직이지 않아 --el-x/--el-y가 갱신되지 않으면
     그라데이션이 스크롤된 행과 어긋나 보일 수 있음. 리스트 스크롤 시
     rAF로 스로틀링하여 좌표를 다시 잼 */
  /* [동적 스크롤 페이드] body 스크롤(ABOUT/POSTERS/개인상세 공통)에도 동일하게
     rAF 스로틀링 리스너를 붙여 헤더 하단 페이드 오버레이를 스크롤 위치에 따라
     켜고 끔 */
  let mBodyScrollTicking = false;
  document.body.addEventListener('scroll', () => {
    if (mBodyScrollTicking) return;
    mBodyScrollTicking = true;
    requestAnimationFrame(() => {
      updateBodyScrollFade();
      mBodyScrollTicking = false;
    });
  }, { passive: true });
  updateBodyScrollFade();
}

/* [동적 스크롤 페이드] 헤더(#mHeader) 바로 아래 오버레이(.m-header-fade)는
   ABOUT/POSTERS/개인상세처럼 body 자체가 스크롤되는 화면에서 콘텐츠가 헤더
   밑으로 사라지는 지점을 부드럽게 해주는 용도라, 맨 위(스크롤 전)일 때는
   가려질 콘텐츠가 없으므로 꺼서 텍스트가 100% 선명하게 보이게 함. 하단은
   기존 #mTabs의 .is-bottom(IntersectionObserver, initMobileTabFade)이 이미
   동일한 역할을 하고 있어 여기서 새로 만들 필요가 없음 */
function updateBodyScrollFade() {
  const isTop = document.body.scrollTop <= 5;
  document.body.classList.toggle('is-scroll-top', isTop);
}

/* 하단 고정 탭의 그라데이션 배경은 리스트/소개글 위를 지나갈 땐 텍스트가
   자연스럽게 묻히도록 흰색으로 페이드되어 있어야 하지만, 맨 아래 푸터(크레딧)
   영역까지 스크롤되면 오히려 카피라이트 문구를 가리게 됨. #mFooter가 뷰포트에
   보이는 동안엔 탭에 .is-bottom을 붙여 배경을 완전히 투명하게 바꿔줌 */
function initMobileTabFade() {
  const footer = document.getElementById('mFooter');
  const tabs = document.getElementById('mTabs');
  if (!footer || !tabs || !('IntersectionObserver' in window)) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      tabs.classList.toggle('is-bottom', entry.isIntersecting);
    });
  }, { root: null, threshold: 0 });
  observer.observe(footer);
}

/* 2번 시안: 제목/작가 정보는 #mHeader(공용 상단 헤더)가 이미 보여주므로,
   여기(.detail-content)는 작업물 이미지가 세로로 차곡차곡 쌓이는 갤러리만 담당 */
/* 2번 시안: 작업 소개글(긴 한글/영문 서술문)은 완전히 제거하고, 헤더 바로
   아래부터 작업 이미지/포스터가 세로로 연속 스크롤되는 갤러리만 보여줌.
   헤더(글자)와 사진 사이를 나누던 가로 구분선(m-person-hr)도 제거 —
   간격은 .m-gallery/.m-person-video 자체의 margin-top으로만 줌 */
function renderMobilePerson(idx) {
  const person = DATA[idx];
  const view = document.getElementById('mPersonView');
  const imgSrcs = (person.images && person.images.length)
    ? person.images
    : (person.poster ? [POSTER_BASE + encodeURIComponent(person.poster)] : []);
  const hasDesc = !!(person.descKo || person.descEn);
  view.innerHTML = `
    ${person.videoUrl ? `<a class="m-person-video" href="${person.videoUrl}" target="_blank" rel="noopener">영상 보기 / Watch Video</a>` : ''}
    ${hasDesc ? `
    <div class="detail-description-wrapper">
      ${person.descKo ? `<div class="detail-desc-ko">${person.descKo}</div>` : ''}
      ${person.descEn ? `<div class="detail-desc-en">${person.descEn}</div>` : ''}
    </div>` : ''}
    <div class="m-gallery">${imgSrcs.map(src => `<img src="${src}" alt="${person.name}"/>`).join('')}</div>
  `;
}

/* 상세 페이지에 들어가는 동안 #mHeader의 1단(제목)/2단(날짜) 자리를
   작품 제목(한/영)·작가 이름/인스타로 바꿔치기 — 같은 그리드/세로선을
   그대로 재사용하므로 x=12/x=186 정렬이 자동으로 유지됨 */
function showPersonHeader(idx) {
  const person = DATA[idx];
  document.querySelector('.m-header-left').innerHTML = `
    <div class="m-title-ko">${person.koTitle || ''}</div>
    <div class="m-title-en">${person.enSentence || ''}</div>
  `;
  document.getElementById('mHeaderDate').innerHTML = `
    <div>${person.name}</div>
    <div>${person.insta || ''}</div>
  `;
}

function restoreLandingHeader() {
  document.querySelector('.m-header-left').innerHTML = mLandingHeaderLeftHTML;
  document.getElementById('mHeaderDate').innerHTML   = mLandingHeaderRightHTML;
}

function openMobilePerson(idx) {
  mSavedScrollTop = document.body.scrollTop; /* 목록으로 돌아왔을 때 원래 보던 위치로 복원하기 위해 저장 */
  renderMobilePerson(idx);
  showPersonHeader(idx);
  document.getElementById('mobilePage').classList.add('person-open');
  /* [버그 수정] POSTERS 그리드에서 포스터를 클릭해 개인 상세 페이지로 들어와도
     .m-tab[data-tab="posters"]에 남아있던 .active(밑줄)가 그대로 유지되는
     문제가 있었음 — 개인 상세 페이지는 ABOUT/POSTERS 탭이 활성화된 상태가
     아니라 완전히 별개의 상태이므로, 진입 시 모든 탭의 밑줄을 꺼줌
     (posters-open 클래스 자체는 건드리지 않으므로 닫기(✕)를 누르면 그대로
     POSTERS 그리드로 돌아감 — 밑줄만 closeMobilePerson()에서 다시 복원) */
  document.querySelectorAll('.m-tab').forEach(btn => btn.classList.remove('active'));
  document.body.scrollTop = 0; /* body가 실제 스크롤 컨테이너 — 상세 페이지는 항상 맨 위에서 시작 */
  scheduleMobileGradientMetricsUpdate(); /* 상세 페이지 콘텐츠(설명문/갤러리)로 --page-h/좌표 다시 계산 */
}

function closeMobilePerson() {
  const mobilePage = document.getElementById('mobilePage');
  mobilePage.classList.remove('person-open');
  /* [버그 수정] 위 openMobilePerson()에서 꺼둔 탭 밑줄을, 상세 페이지를 닫고
     원래 있던 ABOUT/POSTERS 그리드로 돌아올 때 다시 켜줌 — mobilePage에
     그대로 남아있던 about-open/posters-open 클래스를 기준으로 판단함
     (랜딩 리스트에서 바로 들어온 경우엔 둘 다 없으므로 아무 탭도 안 켜짐,
     기존 동작과 동일) */
  if (mobilePage.classList.contains('about-open')) {
    const aboutTab = document.querySelector('.m-tab[data-tab="about"]');
    if (aboutTab) aboutTab.classList.add('active');
  } else if (mobilePage.classList.contains('posters-open')) {
    const postersTab = document.querySelector('.m-tab[data-tab="posters"]');
    if (postersTab) postersTab.classList.add('active');
  }
  restoreLandingHeader();
  mNavigating = false; /* 목록으로 돌아왔으니 다음 클릭을 다시 받을 수 있게 해제 */
  document.body.scrollTop = mSavedScrollTop; /* 원래 목록 스크롤 위치로 복원 */
  scheduleMobileGradientMetricsUpdate(); /* 랜딩 리스트로 돌아왔으니 다시 랜딩 기준으로 재계산 */
}

function applyResponsiveMode() {
  if (isMobileViewport()) {
    initMobile();
    document.body.classList.add('mobile-mode');
    /* [기능 추가] 아이패드 세로처럼 "짧은 변이 폰 기준(600px)보다 넓은" 태블릿
       구간에서는 모바일 카드(#mobilePage)를 402px로 고정하지 않고 더 넓게
       채움 — body.tablet-mode 마커만 붙이고 실제 폭 값은 CSS(body.tablet-mode
       #mobilePage)가 담당. 폰(shortSide < 600)은 이 클래스가 안 붙어 기존
       402px 고정 그대로 유지됨 */
    const shortSide = Math.min(window.innerWidth, window.innerHeight);
    document.body.classList.toggle('tablet-mode', shortSide >= PHONE_SHORT_SIDE_MAX);
    resetDesktopPageStyle();
  } else {
    document.body.classList.remove('mobile-mode');
    document.body.classList.remove('tablet-mode');
  }
}

/* 데스크톱 #page에 JS가 붙여둔 transform:scale / 강제 width 등 인라인 스타일을
   전부 제거 — 모바일에서는 이 좌표계가 전혀 쓰이지 않는다는 걸 실제 DOM 상태로도
   보장함(예: 개발자 도구로 확인해도 남아있는 값이 없음) */
function resetDesktopPageStyle() {
  const page = document.getElementById('page');
  if (!page) return;
  page.style.transform = '';
  page.style.width = '';
  page.style.height = '';
  page.style.removeProperty('--grad-start');
  page.style.removeProperty('--page-w');
  page.style.removeProperty('--page-h');
  page.style.removeProperty('--shimmer-x');
}

/* ── 리사이즈 ── */
function onResize() {
  applyResponsiveMode();
  if (isMobileViewport()) {
    /* [버그 수정] 예전엔 리사이즈/회전 때마다 가시 행 수(N)가 바뀌었는지 보고
       필요하면 리스트를 다시 섞었음(A-B가 화면 밖으로 벗어나지 않게 하려고).
       이제는 각 행이 이미 같은 사람의 이름+작품명을 함께 보여주므로 그 문제
       자체가 없어져 리스트를 다시 섞을 이유가 없음 — 배경 그라데이션 좌표만
       다시 계산하면 됨 */
    scheduleMobileGradientMetricsUpdate(); /* 모바일 모드일 땐 #page가 숨겨져 있으니 데스크톱 좌표 계산은 건너뛰고, 대신 모바일 그라데이션 좌표를 다시 잼 */
    updateBodyScrollFade();
    return;
  }
  layout();
  let maxB = 0;
  document.querySelectorAll('#colB .row-item').forEach(el => {
    maxB = Math.max(maxB, el.offsetWidth);
  });
  BX_L_cur = BX_L + (BWORD_W - maxB) - GAP_LINE;
  updateThumbCenter();
  repositionLines();
}

/* ════════════════════════════════════════════════
   원형 스포트라이트 애니메이션: 텍스트 자체의 색(회색→검정 그라데이션, --grad-start)은
   그대로 두고, 그 위로 둥근 빛 하나가 왼쪽에서 오른쪽으로 한 방향으로 지나가며 훑음.
   이전엔 행마다 시차(phase)를 줘서 "세로 막대"를 피하려 했지만, 그러면 대각선 띠처럼
   보이는 문제가 생겼음. 대신 이제 배경 크기 자체를 요소 높이가 아니라 페이지 전체
   높이(--page-h)로 잡고 위치도 (--el-x, --el-y)로 정확히 옮겨서, 모든 행이 "페이지
   전체에 걸친 하나의 실제 원"을 공유하는 창일 뿐이게 함 — 원의 중심(y=50%, 즉 페이지
   세로 중앙)에 가까운 행일수록 밝고, 멀어질수록 자연스럽게 옅어져서 진짜 원형으로
   보임(시차 트릭 불필요, --shimmer-x는 #page에 한 번만 설정하고 상속됨).
   페이지 폭보다 넉넉히 밖(SPOT_MARGIN)에서 시작해서 밖으로 나가며 끝나므로, 다음
   바퀴로 순간 복귀할 때 이미 화면 밖(완전히 투명)이라 끊기는 느낌 없이 한 방향으로만
   흐르는 것처럼 보임 ════════════════════════════════════════════════ */
const SPOT_ANIM_PERIOD_MS  = 8500;  /* 한 번 좌→우로 훑는 데 걸리는 시간 (조금 더 느리게) */
const SPOT_MARGIN          = 3100;  /* 시작/끝 지점을 페이지 밖으로 얼마나 뺄지 (원 반경 2900px보다 크게) */

/* ════════════════════════════════════════════════
   모바일 버전에도 데스크톱과 동일한 "지나가는 원형 하이라이트" 배경
   그라데이션 애니메이션을 적용. 원리는 데스크톱과 완전히 동일(공유 배경
   --page-w/--page-h 위에서 각 텍스트 요소가 자기 실제 위치(--el-x/--el-y)
   만큼 배경을 당겨보는 창 역할) — 다만 모바일은 JS scale transform이 없고
   (cqw 비례라 항상 scale=1) 대신 화면 폭이 훨씬 좁고(402px 기준) 4개 뷰
   (랜딩/ABOUT/POSTERS/개인상세)마다 세로 콘텐츠 높이가 크게 달라서, 뷰가
   바뀔 때마다 --page-h/각 요소 위치를 다시 재야 함(desktopLayout()의
   applyTextGradientPositions에 대응하는 모바일 전용 버전) ════════════════════════════════════════════════ */
const MOBILE_SPOT_ANIM_PERIOD_MS = 8500; /* 데스크톱과 같은 체감 속도(폭이 좁아진 만큼 이동거리도 비례해서 짧아짐) */
const MOBILE_SPOT_MIN_RADIUS_PX = 1400; /* 원 반지름 최소값(짧은 뷰 — ABOUT/개인상세 등) */
const MOBILE_SPOT_RADIUS_RATIO = 2.95; /* 데스크톱(#page) 실제 값을 그대로 이식: 데스크톱은 radius 2900px / 기준 --page-h 982px ≈ 2.95배 비율로 원이 페이지 세로 길이를 훨씬 넉넉히 덮음 — 모바일도 동일 비율을 페이지 실제 높이에 곱해서 웹과 같은 체감 크기/퍼짐을 유지 */

let mobilePageLogicalW = 402;
let mobilePageLogicalH = 900;
let mobileSpotRadiusPx = MOBILE_SPOT_MIN_RADIUS_PX;
let mobileSpotMarginPx = MOBILE_SPOT_MIN_RADIUS_PX * 1.08;

/* 모바일 그라데이션이 적용되는 텍스트/구분선 요소 전체 — 데스크톱의
   GRADIENT_TEXT_SELECTOR와 같은 역할. 4개 뷰(랜딩/ABOUT/POSTERS/개인상세)의
   모든 텍스트 요소를 망라함 */
const MOBILE_GRADIENT_SELECTOR = [
  '.m-row-name', '.m-row-title', '.m-title-ko', '.m-title-en', '.m-header-right',
  '.about-p-ko', '.about-p-en', '.m-meta-univ-block', '.m-meta-row',
  '.m-participant-name', '.common-footer', '.detail-desc-ko', '.detail-desc-en',
  '.m-person-video', '.m-poster-caption', '.m-hr',
  '.m-vertical-line', /* [버그 수정] 헤더/리스트 좌측 세로선(예전엔 ::before 가상요소라
                          좌표를 잴 수 없었음 — 이제 실제 div라 다른 요소들과 동일하게
                          --el-x/--el-y가 매겨져 그라데이션이 지나감) */
  /* [버그 수정] .m-tab/.m-tab-close는 여기서 뺌 — 이제 #mTabsBg(항상 흰색
     그라데이션 캡슐) 위에 늘 떠 있어서 이미 항상 선명하게 보이는데, 여기
     등록되어 있으면 움직이는 스팟 하이라이트(각진 박스)까지 겹쳐져서 스팟이
     지나갈 때마다 버튼 글자 주변에 흰 네모 상자가 튀어나오는 것처럼 보이는
     버그가 있었음(CSS 쪽 공유 ::before 버킷에서도 함께 제외함) */
  '.about-statement-wrapper', '.about-credits-wrapper', '.detail-description-wrapper'
  /* [버그 수정] ABOUT 기조문 세로선(x=14)/크레딧 세로선(x=186)과 개인상세
     설명문 세로선(x=14, "거짓말 워크숍 결과물 전시" 옆 세로선처럼 헤더뿐
     아니라 본문에도 이런 border-left 세로선이 여러 개 더 있었음)도 등록 */
].join(',');

/* 현재 화면에 보이는(hidden 아닌) 뷰의 실제 콘텐츠 높이를 --page-h로 잡고,
   그 안의 모든 텍스트 요소의 #mobilePage 기준 상대 좌표를 --el-x/--el-y로
   저장 — 데스크톱 applyTextGradientPositions와 동일한 방식이지만 scale
   나눗셈이 없음(모바일은 항상 scale=1, cqw로 비례) */
function updateMobileGradientMetrics() {
  const mp = document.getElementById('mobilePage');
  if (!mp || !document.body.classList.contains('mobile-mode')) return;
  const mpRect = mp.getBoundingClientRect();
  mobilePageLogicalW = mp.offsetWidth || 402;
  mobilePageLogicalH = Math.max(mp.scrollHeight, mp.offsetHeight, window.innerHeight) || 900;
  mp.style.setProperty('--page-w', mobilePageLogicalW + 'px');
  mp.style.setProperty('--page-h', mobilePageLogicalH + 'px');
  /* [버그 수정] 원 반지름이 고정값(650px)이면 페이지가 그보다 훨씬 길 때
     (예: 27명 전체 리스트) 세로 중앙(y=50%) 근처 몇 줄만 밝아지고 위/아래
     끝쪽 줄들은 원이 닿지 않아 절대 밝아지지 않는 문제가 있었음("그라데이션이
     일부 영역에만 갇힘"). 반지름을 페이지 실제 높이에 맞춰 동적으로 늘려서
     — 항상 페이지 전체 세로 길이(의 절반 이상)를 덮도록 — 27개 행 전체가
     스윕 도중 반드시 한 번은 밝아지게 함 */
  /* [버그 수정] 반지름을 페이지 높이의 0.62배에서 0.85배로 키워서, 27개
     리스트처럼 긴 뷰에서도 원 하나가 화면 세로 길이를 훨씬 넉넉히 덮고
     겹치는 구간이 커져 "화면 전체와 이름 리스트 전체에 부드럽게 번지는"
     느낌이 나도록 확대함 */
  /* 데스크톱과 동일한 비율(MOBILE_SPOT_RADIUS_RATIO≈2.95)로 반지름을 페이지
     실제 높이에 비례시킴 — 27개 리스트처럼 긴 뷰에서도 데스크톱과 똑같은
     "화면 전체에 걸친 넉넉한 원" 느낌이 유지되고, ABOUT/개인상세처럼 짧은
     뷰에서는 최소값(MOBILE_SPOT_MIN_RADIUS_PX)으로 바닥을 받쳐줌 */
  mobileSpotRadiusPx = Math.max(MOBILE_SPOT_MIN_RADIUS_PX, mobilePageLogicalH * MOBILE_SPOT_RADIUS_RATIO);
  mobileSpotMarginPx = mobileSpotRadiusPx * 1.08;
  mp.style.setProperty('--spot-radius', mobileSpotRadiusPx + 'px');
  mp.querySelectorAll(MOBILE_GRADIENT_SELECTOR).forEach(el => {
    const r = el.getBoundingClientRect();
    el.style.setProperty('--el-x', (r.left - mpRect.left) + 'px');
    el.style.setProperty('--el-y', (r.top  - mpRect.top)  + 'px');
  });
}

/* [버그 수정 - 가시 행 제한 로직 완전 삭제] #mList가 더 이상 자체 max-height/
   overflow-y:auto를 갖지 않으므로(body 스크롤 하나로 통일), 헤더/탭바 사이
   여유 높이를 매번 측정해서 --m-list-max-h를 넣어주던 updateMobileListMaxHeight()
   함수 자체가 필요 없어져 완전히 삭제함 */

/* 뷰 전환/리사이즈 직후엔 아직 브라우저가 새 레이아웃을 확정하기 전이라
   getBoundingClientRect()가 이전 값을 돌려줄 수 있음 — 더블 rAF로 한 프레임
   흘려보내 레이아웃이 완전히 정착된 다음에 측정함(이 코드베이스 다른 곳의
   동일한 패턴과 통일) */
/* [히어로 스펙 재적용] updateAboutFooterPush()는 "크레딧 바로 다음에만
   여백을 두고 푸터를 화면 밖으로 미는" 구 스펙 전용 계산이었는데, 이제
   .about-statement-wrapper 자체의 min-height(calc(100dvh - 100px))가
   크레딧+푸터 전체를 스크롤 후 영역으로 미는 역할을 대신하므로 더 이상
   호출하지 않음(함수 정의 자체는 되돌릴 경우를 대비해 남겨둠) */
function scheduleMobileGradientMetricsUpdate() {
  requestAnimationFrame(() => requestAnimationFrame(() => {
    updateMobileGradientMetrics();
  }));
}

/* [버그 수정] #mHeader(position:sticky) 안쪽에 있는 헤더 세로선 2개
   (.m-header-line, .m-header-line-right)만 실제 아이폰 사파리에서 공유
   캔버스(background-position:calc(...) + 상속된 CSS 변수) 기반 하이라이트가
   전혀 적용되지 않고 항상 검정으로 고정되는 문제가 실측 화면 녹화로
   확인됨(같은 방식을 쓰는 다른 모든 텍스트 요소는 정상 작동 — sticky
   조상 + 절대위치 가상요소 + calc() 조합에서만 나타나는 사파리 특유의
   렌더링 문제로 보임). 크로미움에서는 재현되지 않아 원인을 code-level로
   더 좁히기 어려워서, 아예 이 두 선만 공유 매커니즘에서 빼고 매 프레임
   JS가 직접 밝기(0~1)를 계산해 --line-glow로 꽂아주는 독립적인 방식으로
   교체함(계산식은 CSS의 radial-gradient 색 정지점 0%/40%/75%와 동일하게
   맞춤 — 시각적으로는 100% 동일해야 함) */
let mHeaderLineEls = null;
function glowForDistance(dist, radius) {
  const p = dist / radius;
  if (p <= 0.40) return 0.75 - (p / 0.40) * (0.75 - 0.38);
  if (p <= 0.75) return 0.38 * (1 - (p - 0.40) / 0.35);
  return 0;
}
function updateHeaderLineGlow(shimmerX) {
  if (!mHeaderLineEls) {
    mHeaderLineEls = [
      document.querySelector('.m-header-line'),
      document.querySelector('.m-header-line-right'),
    ].filter(Boolean);
  }
  if (!mHeaderLineEls.length) return;
  const centerY = mobilePageLogicalH / 2; /* 공유 그라데이션의 세로 중심(50%)과 동일 기준 */
  mHeaderLineEls.forEach(el => {
    const elX = parseFloat(el.style.getPropertyValue('--el-x')) || 0;
    const elY = parseFloat(el.style.getPropertyValue('--el-y')) || 0;
    const dx = shimmerX - elX;
    const dy = centerY - elY;
    const dist = Math.sqrt(dx * dx + dy * dy);
    const glow = glowForDistance(dist, mobileSpotRadiusPx);
    /* [버그 수정 2차] --line-glow를 opacity로 쓰는 ::before 오버레이 방식도
       실기기에서 효과가 없었음 -- 자식 가상요소가 부모(.m-vertical-line, 검정
       배경) 위에 그려지는 페인트 순서 자체가 sticky 조상 안에서 사파리가
       깨뜨리는 것으로 의심됨(가상요소 자체를 아예 안 씀). 그래서 이제
       가상요소를 완전히 배제하고, 선 요소 자신의 실제 background-color를
       흰색(255)/검정(0) 사이에서 직접 보간해 매 프레임 인라인으로 씀 --
       페인트 순서에 의존하지 않는 가장 단순하고 확실한 방식(라디얼
       그라데이션의 흰색이 검정 배경 위에 알파 glow로 얹힌 것과 동일한
       최종 색이 나오도록 v=255*glow로 환산) */
    const v = Math.round(Math.max(0, Math.min(1, glow)) * 255);
    el.style.backgroundColor = 'rgb(' + v + ',' + v + ',' + v + ')';
  });
}

function tickShimmer(now) {
  if (isMobileViewport()) {
    const t = (now % MOBILE_SPOT_ANIM_PERIOD_MS) / MOBILE_SPOT_ANIM_PERIOD_MS;
    const x = -mobileSpotMarginPx + t * (mobilePageLogicalW + mobileSpotMarginPx * 2);
    const mp = document.getElementById('mobilePage');
    if (mp) mp.style.setProperty('--shimmer-x', x + 'px');
    updateHeaderLineGlow(x);
    requestAnimationFrame(tickShimmer);
    return;
  }
  const t = (now % SPOT_ANIM_PERIOD_MS) / SPOT_ANIM_PERIOD_MS; /* 0→1, 한 방향으로만 진행 후 반복 */
  const x = -SPOT_MARGIN + t * (pageLogicalW + SPOT_MARGIN * 2);
  const page = document.getElementById('page');
  if (page) page.style.setProperty('--shimmer-x', x + 'px');
  /* 연결선(#linesSvg)은 CSS 상속이 아니라 SVG 어트리뷰트라서 선마다 직접 갱신.
     각 선은 이미 실제 절대 y좌표(cy)를 갖고 있어서 시차 없이도 자연스럽게 원의
     세로 단면만큼만 밝아짐 */
  Object.values(lineEls).forEach(entry => {
    entry.grad.setAttribute('cx', x);
  });
  requestAnimationFrame(tickShimmer);
}

/* ── 실행 ── */
layout();
init();
applyResponsiveMode(); /* 최초 진입 시 화면 폭에 따라 데스크톱/모바일 결정 */
window.addEventListener('resize', onResize);
/* 태블릿 회전(가로↔세로) 시 일부 브라우저에서 resize가 즉시/안정적으로 안
   따라오는 경우가 있어 orientationchange도 별도로 같이 들음(중복 호출돼도
   onResize/applyResponsiveMode는 멱등이라 안전함) */
window.addEventListener('orientationchange', onResize);

/* [크로스 브라우징] iOS Safari는 주소창이 접히고 펼쳐질 때 window의 resize
   이벤트를 안정적으로 쏘지 않는 경우가 있어(visualViewport만 변함) —
   #mobilePage 자체의 실제 렌더링 크기를 감시하는 ResizeObserver를 별도로
   둬서, resize 이벤트 유무와 무관하게 실제 레이아웃이 바뀔 때마다 모바일
   그라데이션 좌표를 다시 계산함(연결선 재계산은 더 이상 필요 없어 제거) */
if (typeof ResizeObserver !== 'undefined') {
  const mobilePageResizeObserver = new ResizeObserver(() => {
    if (!document.body.classList.contains('mobile-mode')) return;
    scheduleMobileGradientMetricsUpdate();
  });
  const mobilePageEl = document.getElementById('mobilePage');
  if (mobilePageEl) mobilePageResizeObserver.observe(mobilePageEl);
}

requestAnimationFrame(tickShimmer);
