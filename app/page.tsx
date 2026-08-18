"use client";

import { useEffect, useMemo, useRef, useState, type CSSProperties } from "react";
import { members, milestones, releases, seasons, type Release, type ReleaseKind } from "./discography";

type Filter = "all" | ReleaseKind;

const filters: { value: Filter; label: string }[] = [
  { value: "all", label: "全部" },
  { value: "studio", label: "錄音室" },
  { value: "live", label: "現場" },
  { value: "rerecorded", label: "重錄" },
];

function ArrowIcon({ direction = "right" }: { direction?: "left" | "right" | "down" }) {
  const rotation = direction === "left" ? "rotate(180 12 12)" : direction === "down" ? "rotate(90 12 12)" : undefined;
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <g transform={rotation}>
        <path d="M4 12h15M14 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </g>
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true">
      <path d="M7 5h8v8M15 5 5 15" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PlayIcon({ playing = false }: { playing?: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {playing ? (
        <><path d="M8 6v12M16 6v12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></>
      ) : (
        <path d="m9 7 8 5-8 5V7Z" fill="currentColor" />
      )}
    </svg>
  );
}

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {open ? (
        <path d="m6 6 12 12M18 6 6 18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      ) : (
        <path d="M5 8h14M5 16h14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      )}
    </svg>
  );
}

function Cover({ release, className = "" }: { release: Release; className?: string }) {
  return (
    <span className={`cover ${className}`}>
      {/* Remote artwork is served directly by Apple Music; no copyrighted media is bundled. */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={release.cover} alt={`${release.title} 專輯封面`} loading="lazy" />
    </span>
  );
}

export default function Home() {
  const [filter, setFilter] = useState<Filter>("all");
  const [selectedId, setSelectedId] = useState(1593446659);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [playing, setPlaying] = useState<{ releaseId: number; trackIndex: number } | null>(null);
  const [progress, setProgress] = useState(0);
  const railRef = useRef<HTMLDivElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const visibleReleases = useMemo(
    () => releases.filter((release) => filter === "all" || release.kind === filter),
    [filter],
  );
  const selected = releases.find((release) => release.id === selectedId) ?? releases[0];

  const selectRelease = (release: Release, scroll = false) => {
    audioRef.current?.pause();
    setPlaying(null);
    setProgress(0);
    setSelectedId(release.id);
    if (scroll) requestAnimationFrame(() => document.querySelector("#now-playing")?.scrollIntoView({ behavior: "smooth" }));
  };

  const playTrack = (release: Release, trackIndex: number) => {
    const track = release.tracks[trackIndex];
    const audio = audioRef.current;
    if (!audio || !track.previewUrl) return;

    const isCurrent = playing?.releaseId === release.id && playing.trackIndex === trackIndex;
    if (isCurrent && !audio.paused) {
      audio.pause();
      setPlaying(null);
      return;
    }

    if (!isCurrent) {
      audio.src = track.previewUrl;
      setProgress(0);
    }
    void audio.play();
    setPlaying({ releaseId: release.id, trackIndex });
  };

  const moveRail = (direction: "left" | "right") => {
    railRef.current?.scrollBy({ left: direction === "right" ? 560 : -560, behavior: "smooth" });
  };

  const playingIndex = playing?.releaseId === selected.id ? playing.trackIndex : -1;

  return (
    <main style={{ "--album-color": selected.color } as CSSProperties}>
      <audio
        ref={audioRef}
        onTimeUpdate={(event) => {
          const audio = event.currentTarget;
          setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
        }}
        onEnded={() => { setPlaying(null); setProgress(0); }}
      />

      <header className={scrolled ? "site-header is-scrolled" : "site-header"}>
        <a className="wordmark" href="#top" aria-label="回到首頁" onClick={() => setMenuOpen(false)}>
          <span>sodagreen</span><b>蘇打綠</b>
        </a>
        <nav className={menuOpen ? "is-open" : ""} aria-label="主要導覽">
          <a href="#works" onClick={() => setMenuOpen(false)}>作品</a><i>/</i>
          <a href="#seasons" onClick={() => setMenuOpen(false)}>四季</a><i>/</i>
          <a href="#time" onClick={() => setMenuOpen(false)}>時間</a><i>/</i>
          <a href="#about" onClick={() => setMenuOpen(false)}>關於</a>
        </nav>
        <a className="apple-link" href="https://music.apple.com/tw/artist/%E8%98%87%E6%89%93%E7%B6%A0/345954909" target="_blank" rel="noreferrer">
          APPLE MUSIC <ExternalIcon />
        </a>
        <button className="menu-button" type="button" aria-label={menuOpen ? "關閉選單" : "開啟選單"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          <MenuIcon open={menuOpen} />
        </button>
      </header>

      <section className="hero" id="top">
        <div className="hero-mist" aria-hidden="true" />
        <div className="hero-copy">
          <h1>在音樂裡，<br />遇見每一種天氣。</h1>
          <p>從《蘇打綠》到《冬 未了》，收藏六個人與二十年之間，所有流動的光。</p>
          <a className="primary-action" href="#works">
            翻開唱片 <ArrowIcon />
          </a>
        </div>
        <div className="hero-object" aria-hidden="true">
          <span className="orbit orbit-a" />
          <span className="orbit orbit-b" />
          <span className="orbit orbit-c" />
          <div className="hero-record">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/black-vinyl.png" alt="" />
            <span className="record-glint" />
          </div>
          <span className="tonearm"><i /></span>
        </div>
      </section>

      <section className="works" id="works" aria-labelledby="works-title">
        <div className="works-head section-pad">
          <h2 id="works-title">作品唱片室</h2>
          <div className="filters" role="group" aria-label="依作品類型篩選">
            {filters.map((item) => (
              <button key={item.value} type="button" className={filter === item.value ? "is-active" : ""} onClick={() => setFilter(item.value)}>
                {item.label}
              </button>
            ))}
          </div>
          <div className="rail-arrows">
            <button type="button" onClick={() => moveRail("left")} aria-label="向前瀏覽作品"><ArrowIcon direction="left" /></button>
            <span />
            <button type="button" onClick={() => moveRail("right")} aria-label="向後瀏覽作品"><ArrowIcon /></button>
          </div>
        </div>

        <div className="release-rail" ref={railRef}>
          {visibleReleases.map((release, index) => (
            <button
              key={release.id}
              type="button"
              className={`release-card ${release.id === selected.id ? "is-selected" : ""}`}
              onClick={() => selectRelease(release, true)}
              aria-label={`查看 ${release.title} 曲目`}
            >
              <span className="release-media">
                <span className="mini-vinyl" aria-hidden="true">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src="/assets/black-vinyl.png" alt="" />
                </span>
                <Cover release={release} />
              </span>
              <span className="release-meta">
                <strong>{release.title}</strong>
                <small>{release.year} · {release.kindLabel}</small>
              </span>
              <span className="release-index">{String(index + 1).padStart(2, "0")}</span>
            </button>
          ))}
        </div>
        <div className="rail-line section-pad" aria-hidden="true"><span /></div>
      </section>

      <section className="now-playing section-pad" id="now-playing" aria-labelledby="now-title">
        <div className="section-rule-title">
          <h2 id="now-title">現在播放</h2>
          <span className={playingIndex >= 0 ? "wave is-moving" : "wave"} aria-hidden="true" />
        </div>
        <div className="album-detail" key={selected.id}>
          <div className="album-object">
            <div className="acrylic-sleeve"><Cover release={selected} className="detail-cover" /></div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={playingIndex >= 0 ? "detail-vinyl is-playing" : "detail-vinyl"} src="/assets/black-vinyl.png" alt="" aria-hidden="true" />
            <span className={playingIndex >= 0 ? "detail-tonearm is-engaged" : "detail-tonearm"} aria-hidden="true"><i /></span>
          </div>

          <div className="album-copy">
            <h3>{selected.title}</h3>
            <div className="album-labels"><span>{selected.year}</span><i /><span>{selected.kindLabel}</span></div>
            <p>{selected.description}</p>
            <div className="album-links">
              <a href={selected.appleUrl} target="_blank" rel="noreferrer">在 Apple Music 聆聽 <ExternalIcon /></a>
              {selected.videoUrl && <a href={selected.videoUrl} target="_blank" rel="noreferrer">官方影像 <ExternalIcon /></a>}
            </div>

            <ol className="track-list">
              {selected.tracks.map((track, index) => {
                const isPlaying = playingIndex === index;
                return (
                  <li key={`${selected.id}-${track.title}`} className={isPlaying ? "is-playing" : ""}>
                    <button type="button" onClick={() => playTrack(selected, index)} disabled={!track.previewUrl} aria-label={track.previewUrl ? `${isPlaying ? "暫停" : "試聽"}${track.title}` : `${track.title} 暫無試聽`}>
                      <span className="track-control"><PlayIcon playing={isPlaying} /></span>
                      <span className="track-no">{String(index + 1).padStart(2, "0")}</span>
                      <span className="track-title">{track.title}</span>
                      <span className="track-duration">{track.duration}</span>
                      <span className="track-state">{track.previewUrl ? (isPlaying ? "播放中" : "試聽") : "曲目"}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
            <div className="player-progress" aria-hidden="true"><span style={{ width: `${progress}%` }} /></div>
            <p className="preview-note">Apple Music 提供 30 秒試聽；完整作品請前往官方音樂平台。</p>
          </div>
        </div>
      </section>

      <section className="seasons section-pad" id="seasons" aria-labelledby="seasons-title">
        <div className="section-rule-title season-title">
          <div>
            <h2 id="seasons-title">韋瓦第計畫</h2>
            <p>四座城市，四種氣候，完成一輪從日光到未了的長途旅行。</p>
          </div>
          <span className="spark" aria-hidden="true">✦</span>
        </div>
        <div className="season-spectrum">
          {seasons.map((season) => (
            <button key={season.name} type="button" onClick={() => selectRelease(season.release, true)} style={{ "--season-color": season.release.color } as CSSProperties}>
              <Cover release={season.release} />
              <span className="season-dot" />
              <strong>{season.name}</strong>
              <small>{season.release.year} · {season.place}</small>
            </button>
          ))}
        </div>
      </section>

      <section className="timeline section-pad" id="time" aria-labelledby="time-title">
        <header>
          <h2 id="time-title">二十年，一刻。</h2>
          <p>歌一直往前走，時間則在每一次合唱裡留下刻度。</p>
        </header>
        <div className="time-stream" aria-hidden="true">
          <svg viewBox="0 0 1200 160" preserveAspectRatio="none">
            <path d="M0 80 C110 20 180 140 300 80 S480 20 600 80 790 145 900 78 1080 20 1200 80" />
            <path d="M0 90 C110 30 180 150 300 90 S480 30 600 90 790 155 900 88 1080 30 1200 90" />
          </svg>
        </div>
        <ol className="milestones">
          {milestones.map((item) => (
            <li key={item.year}>
              <span className="time-dot" />
              <time>{item.year}</time>
              <h3>{item.title}</h3>
              <p>{item.note}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="members section-pad" id="about" aria-labelledby="members-title">
        <header>
          <h2 id="members-title">六個人，一個宇宙。</h2>
          <p>從校園到小巨蛋，名字並排的方式一直沒有變。</p>
        </header>
        <ul>
          {members.map((member) => (
            <li key={member.name}>
              <button type="button" className="member-card" aria-label={`${member.name}，${member.role}：${member.bio}`}>
                <span className="member-name-anchor">
                  <strong>{member.name}</strong>
                  <i className="member-pop" aria-hidden="true">
                    <small>{member.alias} · {member.role}</small>
                    <p>{member.bio}</p>
                  </i>
                </span>
                <span className="member-role">{member.role}</span>
              </button>
            </li>
          ))}
        </ul>
      </section>

      <footer className="site-footer section-pad">
        <div className="footer-word" aria-hidden="true">sodagreen</div>
        <div className="footer-copy">
          <p>這是一座非官方、由聽眾整理的作品檔案。<br />音樂與影像版權屬原權利人所有。</p>
          <div>
            <a href="https://music.apple.com/tw/artist/%E8%98%87%E6%89%93%E7%B6%A0/345954909" target="_blank" rel="noreferrer">APPLE MUSIC <ExternalIcon /></a>
            <a href="https://www.youtube.com/@sodagreenofficial" target="_blank" rel="noreferrer">YOUTUBE <ExternalIcon /></a>
          </div>
        </div>
        <a className="back-top" href="#top">TOP <ArrowIcon direction="left" /></a>
      </footer>
    </main>
  );
}
