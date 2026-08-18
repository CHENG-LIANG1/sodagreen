export type ReleaseKind = "studio" | "live" | "rerecorded";

export type Track = {
  title: string;
  duration: string;
  previewUrl?: string;
};

export type Release = {
  id: number;
  title: string;
  year: string;
  kind: ReleaseKind;
  kindLabel: string;
  cover: string;
  appleUrl: string;
  videoUrl?: string;
  description: string;
  color: string;
  tracks: Track[];
};

const art = (url: string) => url.replace("100x100bb", "1200x1200bb");

export const releases: Release[] = [
  {
    id: 1830927060,
    title: "20 Special Moments",
    year: "2025",
    kind: "live",
    kindLabel: "二十週年現場",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/fe/b1/cd/feb1cdc6-a397-61a2-22c9-6a861454aa0a/196873479316.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/20-special-moments/1830927060",
    videoUrl: "https://www.youtube.com/@sodagreenofficial",
    description: "把二十年的現場折疊成二十個瞬間，回到歌與聽眾彼此照亮的地方。",
    color: "#77a997",
    tracks: [
      { title: "你不需要多完美 (Live)", duration: "4:39" },
      { title: "黎明前最暗時候 (Live)", duration: "4:43" },
      { title: "夜光 (Live)", duration: "4:10" },
      { title: "Silent Angel (Live)", duration: "5:01" },
      { title: "白日夢繩索 (Live)", duration: "4:01" },
      { title: "只有可以 (Live)", duration: "4:06" },
    ],
  },
  {
    id: 1795424991,
    title: "冬 未了（蘇打綠版）",
    year: "2025",
    kind: "rerecorded",
    kindLabel: "重新錄製",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/3c/41/73/3c417389-499e-b5ff-e816-1ff56451c501/196872866964.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/winter-endless-sodagreen-version/1795424991",
    videoUrl: "https://www.youtube.com/@sodagreenofficial",
    description: "十年後再次走進冬天，讓交響的長夢以蘇打綠自己的聲音繼續未了。",
    color: "#b8ced0",
    tracks: [
      { title: "痛快的哀艷（蘇打綠版）", duration: "6:05" },
      { title: "對殺人狂指控（蘇打綠版）", duration: "3:54" },
      { title: "下雨的夜晚（蘇打綠版）", duration: "4:27" },
      { title: "他舉起右手點名（蘇打綠版）", duration: "3:40" },
      { title: "未了（蘇打綠版）", duration: "5:09" },
      { title: "Must Keep Singing（蘇打綠版）", duration: "6:38" },
    ],
  },
  {
    id: 1777357248,
    title: "秋：故事（蘇打綠版）",
    year: "2024",
    kind: "rerecorded",
    kindLabel: "重新錄製",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/74/d2/d6/74d2d636-0a5a-3e71-5d06-0a598e1da123/196872607048.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/autumn-stories-sodagreen-version/1777357248",
    description: "城市、落葉與重逢。故事重新被說起，時間也有了另一種溫度。",
    color: "#c49a62",
    tracks: [
      { title: "故事（蘇打綠版）", duration: "4:44" },
      { title: "獨處的時候（蘇打綠版）", duration: "4:35" },
      { title: "我好想你（蘇打綠版）", duration: "5:29" },
      { title: "天天晴朗（蘇打綠版）", duration: "4:19" },
      { title: "再遇見（蘇打綠版）", duration: "4:37" },
      { title: "小星星（蘇打綠版）", duration: "6:15" },
    ],
  },
  {
    id: 1764451494,
    title: "夏 / 狂熱（蘇打綠版）",
    year: "2024",
    kind: "rerecorded",
    kindLabel: "重新錄製",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music221/v4/84/d2/fb/84d2fbf0-f04a-660e-fa0e-4ae8cf0abf0f/196872413335.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/summer-fever-sodagreen-version/1764451494",
    description: "倫敦的熱、汗水與躁動，被重新壓回一張仍然滾燙的唱片。",
    color: "#d37c58",
    tracks: [
      { title: "掌聲落下（蘇打綠版）", duration: "2:50" },
      { title: "他夏了夏天（蘇打綠版）", duration: "5:03" },
      { title: "蟬想（蘇打綠版）", duration: "4:59" },
      { title: "無眠（蘇打綠版）", duration: "3:48" },
      { title: "狂熱（蘇打綠版）", duration: "3:26" },
      { title: "近未來（蘇打綠版）", duration: "6:28" },
    ],
  },
  {
    id: 1747448092,
    title: "春・日光（蘇打綠版）",
    year: "2024",
    kind: "rerecorded",
    kindLabel: "重新錄製",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/52/5b/e8/525be86f-43fc-3b3d-9c40-ae9fd0b73c2b/196872131260.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/spring-daylight-sodagreen-version/1747448092",
    description: "從台東的風裡重新出發，民謠、土地與日光在新的聲音裡發芽。",
    color: "#a8c477",
    tracks: [
      { title: "融雪之前（蘇打綠版）", duration: "4:13" },
      { title: "日光（蘇打綠版）", duration: "3:03" },
      { title: "各站停靠（蘇打綠版）", duration: "4:05" },
      { title: "交響夢（蘇打綠版）", duration: "4:47" },
      { title: "異次元的玫瑰（蘇打綠版）", duration: "3:11" },
      { title: "早點回家（蘇打綠版）", duration: "4:00" },
    ],
  },
  {
    id: 1593446659,
    title: "冬 未了",
    year: "2015",
    kind: "studio",
    kindLabel: "第十張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/6e/b1/6e/6eb16e18-c22e-e2ee-7587-de25ba4892a2/cover.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E5%86%AC-%E6%9C%AA%E4%BA%86/1593446659",
    videoUrl: "https://www.youtube.com/@sodagreenofficial",
    description: "當搖滾樂團與交響樂相遇，冬天被寫成一場未完的長夢。",
    color: "#92b0ad",
    tracks: [
      { title: "痛快的哀艷", duration: "6:00", previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/bc/02/93/bc029358-124d-3372-a408-745a06250f59/mzaf_12089006478229192143.plus.aac.p.m4a" },
      { title: "對殺人狂指控", duration: "3:53", previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/ad/5b/4e/ad5b4ef8-0f71-c9c2-d18c-23e2adc9a5e0/mzaf_8697188946421415434.plus.aac.p.m4a" },
      { title: "地平線", duration: "4:16", previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/ff/6a/97/ff6a974f-d879-6c97-6f42-fc9b849af708/mzaf_4755616835146236860.plus.aac.p.m4a" },
      { title: "下雨的夜晚", duration: "4:30", previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/e3/80/02/e3800247-e0cc-3f46-3267-1a48a45d4695/mzaf_11441741620044487678.plus.aac.p.m4a" },
      { title: "他舉起右手點名", duration: "3:42", previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview126/v4/53/fd/e2/53fde286-5137-47e1-c399-3f2e405f7bca/mzaf_2353961045287640830.plus.aac.p.m4a" },
      { title: "未了", duration: "5:06", previewUrl: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview116/v4/80/88/ff/8088ff69-85b8-a609-c7df-7af3bca3c3fa/mzaf_10895362609116658141.plus.aac.p.m4a" },
    ],
  },
  {
    id: 1480716925,
    title: "秋：故事",
    year: "2013",
    kind: "studio",
    kindLabel: "第九張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/65/35/4c/65354cf3-63af-b625-f0ef-e240dbdd1762/cover.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E7%A7%8B-%E6%95%85%E4%BA%8B/1480716925",
    description: "北京城的秋天與人的故事，在葉落以前把相遇、獨處與告別寫進城市。",
    color: "#ba8954",
    tracks: [
      { title: "故事", duration: "4:39" },
      { title: "從一片落葉開始", duration: "3:34" },
      { title: "獨處的時候", duration: "4:34" },
      { title: "我好想你", duration: "5:26" },
      { title: "再遇見", duration: "4:37" },
      { title: "小星星", duration: "6:06" },
    ],
  },
  {
    id: 1461040610,
    title: "你在煩惱什麼",
    year: "2011",
    kind: "studio",
    kindLabel: "第八張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/a3/60/f7/a360f736-b3db-4a53-577f-9d15640894cb/cover.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E4%BD%A0%E5%9C%A8%E7%85%A9%E6%83%B1%E4%BB%80%E9%BA%BC/1461040610",
    description: "在失去與陪伴之間留下一句提問，也留下一張最貼近日常的唱片。",
    color: "#6f8a65",
    tracks: [
      { title: "幸福額度", duration: "4:59" },
      { title: "你被寫在我的歌裡", duration: "4:35" },
      { title: "喜歡寂寞", duration: "4:24" },
      { title: "當我們一起走過", duration: "4:44" },
      { title: "控制狂", duration: "4:12" },
      { title: "你在煩惱什麼", duration: "4:35" },
    ],
  },
  {
    id: 1461735092,
    title: "夏 / 狂熱",
    year: "2009",
    kind: "studio",
    kindLabel: "第六張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music124/v4/e7/f0/d9/e7f0d9ef-919b-37f7-6381-f24537c511dd/cover.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E5%A4%8F-%E7%8B%82%E7%86%B1/1461735092",
    description: "從台北飛往倫敦，讓夏日裡的城市、搖滾與青春全部升到沸點。",
    color: "#cf7851",
    tracks: [
      { title: "掌聲落下", duration: "2:49" },
      { title: "他夏了夏天", duration: "5:04" },
      { title: "蟬想", duration: "4:43" },
      { title: "共舞", duration: "3:30" },
      { title: "無眠", duration: "3:46" },
      { title: "近未來", duration: "6:29" },
    ],
  },
  {
    id: 1461726842,
    title: "春・日光",
    year: "2009",
    kind: "studio",
    kindLabel: "第五張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music113/v4/f3/2c/1a/f32c1a08-f7dc-fb86-0366-7b9ddff7f256/cover.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E6%98%A5-%E6%97%A5%E5%85%89/1461726842",
    description: "在台東收集土地、風與民謠的顏色，韋瓦第計畫由一束日光開始。",
    color: "#abc477",
    tracks: [
      { title: "融雪之前", duration: "4:15" },
      { title: "日光", duration: "3:02" },
      { title: "各站停靠", duration: "4:04" },
      { title: "一千座噴泉", duration: "2:34" },
      { title: "交響夢", duration: "4:43" },
      { title: "早點回家", duration: "3:52" },
    ],
  },
  {
    id: 1443209385,
    title: "無與倫比的美麗",
    year: "2007",
    kind: "studio",
    kindLabel: "第四張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/9e/e7/2f/9ee72f56-b02b-62dd-9975-4547f97d0bc4/00602488962575.rgb.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E7%84%A1%E8%88%87%E5%80%AB%E6%AF%94%E7%9A%84%E7%BE%8E%E9%BA%97/1443209385",
    description: "從陪伴出發的歌，讓樂團的浪漫與華麗真正長成了自己的形狀。",
    color: "#566f83",
    tracks: [
      { title: "遊樂", duration: "3:13" },
      { title: "花茶", duration: "5:30" },
      { title: "左邊", duration: "4:18" },
      { title: "無與倫比的美麗", duration: "5:06" },
      { title: "這天", duration: "5:04" },
      { title: "相信", duration: "7:07" },
    ],
  },
  {
    id: 1461046017,
    title: "小宇宙",
    year: "2006",
    kind: "studio",
    kindLabel: "第二張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music123/v4/7f/bd/4a/7fbd4a4b-8f43-a16d-4c20-55d6df89e3a5/cover.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E5%B0%8F%E5%AE%87%E5%AE%99/1461046017",
    description: "世界很吵，六個人卻在裡面找到屬於自己的頻率與一座小宇宙。",
    color: "#53767b",
    tracks: [
      { title: "You Are, You Will", duration: "4:38" },
      { title: "小宇宙", duration: "4:24" },
      { title: "小情歌", duration: "4:33" },
      { title: "被雨困住的城市", duration: "4:18" },
      { title: "背著你", duration: "4:26" },
      { title: "無言歌", duration: "4:44" },
    ],
  },
  {
    id: 1443094831,
    title: "蘇打綠同名專輯",
    year: "2005",
    kind: "studio",
    kindLabel: "首張專輯",
    cover: art("https://is1-ssl.mzstatic.com/image/thumb/Music128/v4/04/87/b9/0487b9f5-24e5-dc48-cff5-99702c296910/00602488962551.rgb.jpg/100x100bb.jpg"),
    appleUrl: "https://music.apple.com/tw/album/%E8%98%87%E6%89%93%E7%B6%A0%E5%90%8C%E5%90%8D%E5%B0%88%E8%BC%AF/1443094831",
    description: "像蘇打氣泡一樣的聲音第一次被裝進唱片，怪奇、透明又自由。",
    color: "#6c8e75",
    tracks: [
      { title: "後悔莫及", duration: "3:40" },
      { title: "飛魚", duration: "4:37" },
      { title: "是我的海", duration: "5:51" },
      { title: "頻率", duration: "5:47" },
      { title: "相對論 IV", duration: "4:44" },
      { title: "窺", duration: "5:04" },
    ],
  },
];

export const seasons = [
  { name: "春・日光", place: "台東", releaseId: 1461726842 },
  { name: "夏 / 狂熱", place: "倫敦", releaseId: 1461735092 },
  { name: "秋：故事", place: "北京", releaseId: 1480716925 },
  { name: "冬 未了", place: "柏林", releaseId: 1593446659 },
].map((season) => ({ ...season, release: releases.find((release) => release.id === season.releaseId)! }));

export const lyricFragments = [
  { song: "控制狂", line: "丟掉自由，就是自由的方法。", album: "你在煩惱什麼", year: "2011" },
  { song: "回車諾比的夢", line: "那等不到的道歉，交給風。", album: "冬 未了", year: "2015" },
  { song: "融雪之前", line: "日代替月，笑著醒過來。", album: "春・日光", year: "2009" },
  { song: "他夏了夏天", line: "汗水在他的身上化成了彩虹。", album: "夏 / 狂熱", year: "2009" },
];

export const milestones = [
  { year: "2001", title: "成團", note: "在政大金旋獎相遇的六個人，開始以蘇打綠的名字一起寫歌。" },
  { year: "2005", title: "同名專輯", note: "第一張完整專輯發行，清澈又古怪的聲音正式被聽見。" },
  { year: "2009", title: "韋瓦第計畫開始", note: "從《春・日光》出發，用四座城市與四種氣候完成一場長途創作。" },
  { year: "2015", title: "《冬 未了》與休團", note: "和交響樂一起完成四季，故事在最盛大的地方按下暫停。" },
  { year: "2020", title: "魚丁糸", note: "以新的名字重新聚合，讓六個人的音樂繼續向前。" },
  { year: "2023", title: "蘇打綠回歸", note: "熟悉的名字再次亮起，重新錄製計畫也逐步完成。" },
  { year: "2025", title: "二十週年", note: "二十年不是終點，而是把每一首歌帶回現場的新刻度。" },
];

export type Member = {
  name: string;
  role: string;
  alias: string;
  bio: string;
};

export const members: Member[] = [
  { name: "吳青峰", role: "主唱", alias: "青峰", bio: "樂團的詞曲創作核心，以極具辨識度的聲線與詩意的文字，寫下蘇打綠大半的音樂風景。" },
  { name: "謝馨儀", role: "貝斯", alias: "馨儀", bio: "創團成員之一，穩定的低頻是六個人的地基；舞台之外，也打理著樂團的大小事。" },
  { name: "史俊威", role: "鼓手", alias: "小威", bio: "節奏與能量的來源，以紮實的鼓點撐起現場；筆下也寫出〈頻率〉等早期代表作。" },
  { name: "何景揚", role: "木吉他", alias: "阿福", bio: "溫暖的木吉他底色與合聲，是蘇打綠聲響裡最柔軟的一層，也是舞台上的開心果。" },
  { name: "劉家凱", role: "電吉他", alias: "家凱", bio: "以精準而富表情的吉他線條著稱，樂團之外也以個人名義發表創作、參與製作。" },
  { name: "龔鈺祺", role: "鍵盤 / 中提琴", alias: "阿龔", bio: "古典音樂訓練出身，以琴聲與中提琴為編曲鋪陳層次，是蘇打綠華麗編制的關鍵。" },
];
