# 蘇打綠｜作品唱片室

一座由聽眾整理的非官方互動作品檔案。從同名專輯到《冬 未了》，以唱片、四季、時間與歌詞為線索，重新翻閱蘇打綠二十年的音樂軌跡。

## 特色

- **作品唱片室**：依錄音室、現場與重錄作品篩選專輯，使用橫向唱片架瀏覽。
- **互動播放區**：以黑膠、唱臂與進度動畫呈現當前專輯，支援 Apple Music 提供的 30 秒試聽。
- **韋瓦第計畫**：串起《春・日光》《夏 / 狂熱》《秋：故事》《冬 未了》四張作品與四座城市。
- **歌詞標本**：以半透明唱片內頁收藏短摘句，並在頁面各處加入低對比歌詞邊注。
- **二十年時間軸**：整理成團、四季計畫、休團、回歸與二十週年的重要節點。
- **六位成員**：透過鍵盤友善的毛玻璃提示卡呈現成員角色與簡介。
- **完整響應式設計**：針對桌面、平板與手機重新編排，並支援 `prefers-reduced-motion`。

## 技術

- Next.js 16（App Router）
- React 19
- TypeScript
- 原生 CSS 動畫、View Timeline、`color-mix()` 與 Backdrop Filter
- ESLint

## 本地執行

需要 Node.js 與 npm。

```bash
npm install
npm run dev
```

開啟 [http://localhost:3000](http://localhost:3000)。

## 檢查與建置

```bash
npm run lint
npm run build
npm start
```

## 專案結構

```text
app/
├── discography.ts   # 專輯、曲目、四季、歌詞與成員資料
├── globals.css      # 視覺系統、動畫與響應式樣式
├── layout.tsx       # 頁面 metadata 與根版型
└── page.tsx         # 首頁結構、篩選與播放互動
public/assets/       # 唱片視覺素材
```

## 內容與版權

本專案為非官方、非商業的聽眾作品檔案。專輯封面與試聽音源由外部音樂服務提供，音樂、歌詞、影像與相關素材版權均屬原權利人所有；頁面中的短摘句僅作作品索引與設計展示。

