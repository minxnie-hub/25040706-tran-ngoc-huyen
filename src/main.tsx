import { useEffect, useMemo, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Check,
  ChevronDown,
  ExternalLink,
  Film,
  Headphones,
  Heart,
  Image as ImageIcon,
  Laptop,
  Mail,
  Menu,
  Palette,
  Search,
  Sparkles,
  Target,
  X,
} from 'lucide-react';
import { tasks, type Task } from './taskData';
import './styles.css';

const profile = {
  name: 'Trần Ngọc Huyền',
  school: 'Trường Đại học Ngoại ngữ',
  major: 'Ngôn ngữ Anh',
  studentId: '25040706',
  email: 'erenlapark2109@gmail.com',
};

const interests = [
  { icon: Headphones, label: 'Nghe nhạc' },
  { icon: Film, label: 'Xem phim' },
  { icon: Laptop, label: 'Khám phá công nghệ' },
  { icon: Palette, label: 'Workshop nghệ thuật' },
];

const skills = [
  'Nâng cao kỹ năng sử dụng các công cụ AI và ứng dụng số trong học tập.',
  'Phát triển kỹ năng tìm kiếm, chọn lọc và đánh giá thông tin.',
  'Cải thiện kỹ năng thiết kế, trình bày và xây dựng Portfolio.',
  'Rèn luyện tư duy phản biện, tự học và quản lý thời gian.',
];

function useHashRoute() {
  const [hash, setHash] = useState(window.location.hash || '#home');
  useEffect(() => {
    const onChange = () => setHash(window.location.hash || '#home');
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);
  return hash;
}

function useReveal() {
  useEffect(() => {
    const items = [...document.querySelectorAll<HTMLElement>('[data-reveal]')];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);
}

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <svg viewBox="0 0 56 56" role="img">
        <path d="M5 34c8-9 15-9 23 0s15 9 23 0" />
        <path d="M9 22c6-7 12-7 19 0s12 7 19 0" />
      </svg>
    </span>
  );
}

function SiteHeader({ detail = false }: { detail?: boolean }) {
  const [open, setOpen] = useState(false);
  const navItems = [
    ['#about', 'Về mình'],
    ['#goals', 'Mục tiêu'],
    ['#projects', 'Bài tập'],
    ['#reflection', 'Tổng kết'],
  ];

  useEffect(() => {
    setOpen(false);
  }, [detail]);

  return (
    <header className="site-header">
      <a className="brand" href="#home" aria-label="Về trang đầu">
        <BrandMark />
        <span>
          <strong>Ngọc Huyền</strong>
          <small>Digital Learning Portfolio</small>
        </span>
      </a>
      {!detail && (
        <>
          <button className="nav-toggle" type="button" onClick={() => setOpen(!open)} aria-label="Mở menu">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={open ? 'site-nav is-open' : 'site-nav'} aria-label="Điều hướng chính">
            {navItems.map(([href, label]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>
        </>
      )}
      {detail && (
        <a className="header-back" href="#projects">
          <ArrowLeft size={17} /> Trở về danh sách bài
        </a>
      )}
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-art" aria-hidden="true">
        <span className="bubble bubble-a" />
        <span className="bubble bubble-b" />
        <span className="spark spark-a">✦</span>
        <span className="spark spark-b">✿</span>
        <svg className="hero-wave" viewBox="0 0 800 280" preserveAspectRatio="none">
          <path d="M0 160C120 30 260 280 390 145S640 45 800 150" />
          <path d="M0 195C130 75 260 290 410 175S650 95 800 190" />
        </svg>
      </div>
      <div className="container hero-grid">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow"><Sparkles size={15} /> Portfolio học tập · 2026</div>
          <p className="hero-pretitle">Xin chào, mình là</p>
          <h1>Trần Ngọc <em>Huyền</em></h1>
          <p className="hero-lead">
            Sinh viên Ngôn ngữ Anh, yêu thích công nghệ số, AI và những trải nghiệm sáng tạo trong học tập.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">
              Khám phá 6 bài tập <ArrowRight size={18} />
            </a>
            <a className="button button-ghost" href={`mailto:${profile.email}`}>
              <Mail size={18} /> Liên hệ
            </a>
          </div>
          <dl className="hero-facts">
            <div><dt>MSSV</dt><dd>{profile.studentId}</dd></div>
            <div><dt>Ngành</dt><dd>{profile.major}</dd></div>
            <div><dt>Trường</dt><dd>Đại học Ngoại ngữ</dd></div>
          </dl>
        </div>
        <div className="hero-portrait-wrap" data-reveal>
          <div className="portrait-orbit orbit-one" />
          <div className="portrait-orbit orbit-two" />
          <figure className="hero-portrait">
            <img src="./assets/profile/huyen-portrait.webp" alt="Ảnh chân dung Trần Ngọc Huyền" />
          </figure>
          <span className="floating-note note-one">English Language</span>
          <span className="floating-note note-two"><Heart size={14} /> creative mind</span>
          <span className="floating-flower" aria-hidden="true">✿</span>
        </div>
      </div>
      <a className="scroll-cue" href="#about" aria-label="Cuộn xuống phần giới thiệu">
        <span>Cuộn để khám phá</span><ChevronDown size={19} />
      </a>
    </section>
  );
}

function About() {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-index">01</span>
          <div>
            <p className="eyebrow">Về mình</p>
            <h2>Học hỏi bằng sự chủ động,<br />sáng tạo bằng trải nghiệm.</h2>
          </div>
        </div>
        <div className="about-grid">
          <div className="about-copy paper-card" data-reveal>
            <span className="paper-pin" aria-hidden="true" />
            <p className="dropcap">
              Mình là sinh viên luôn mong muốn học hỏi và hoàn thiện bản thân. Mình yêu thích việc ứng dụng công nghệ vào học tập, đặc biệt là các công cụ số và AI để nâng cao hiệu quả làm việc, đồng thời không ngừng rèn luyện tư duy sáng tạo và kỹ năng mềm.
            </p>
            <div className="interest-grid">
              {interests.map(({ icon: Icon, label }) => (
                <div className="interest-chip" key={label}>
                  <Icon size={18} /> <span>{label}</span>
                </div>
              ))}
            </div>
            <a className="email-link" href={`mailto:${profile.email}`}>
              <Mail size={17} /> {profile.email}
            </a>
          </div>
          <div className="photo-collage" data-reveal>
            <figure className="photo-card photo-main">
              <img src="./assets/profile/huyen-red-wall.webp" alt="Khoảnh khắc của Trần Ngọc Huyền bên bức tường đỏ" />
            </figure>
            <figure className="photo-card photo-small">
              <img src="./assets/profile/huyen-memory.webp" alt="Một khoảnh khắc của Trần Ngọc Huyền" />
            </figure>
            <div className="collage-caption"><ImageIcon size={15} /> những khoảnh khắc mình yêu thích</div>
            <span className="tape tape-one" aria-hidden="true" />
            <span className="doodle-heart" aria-hidden="true">♡</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function Goals() {
  return (
    <section className="section goals-section" id="goals">
      <div className="container">
        <div className="section-heading compact" data-reveal>
          <span className="section-index">02</span>
          <div>
            <p className="eyebrow">Mục tiêu & định hướng</p>
            <h2>Đi xa hơn với ngoại ngữ, công nghệ và tư duy sáng tạo.</h2>
          </div>
        </div>
        <div className="goals-bento">
          <article className="goal-card goal-primary" data-reveal>
            <div className="goal-icon"><Target size={25} /></div>
            <span className="goal-number">A</span>
            <h3>Mục tiêu học tập</h3>
            <p>
              Mình đặt mục tiêu nâng cao kiến thức chuyên môn, phát triển ngoại ngữ và kỹ năng số, đặc biệt là ứng dụng AI trong học tập. Đồng thời, mình sẽ rèn luyện tư duy sáng tạo, kỹ năng mềm và tích lũy kinh nghiệm để sẵn sàng cho học tập và nghề nghiệp trong tương lai.
            </p>
          </article>
          <article className="goal-card goal-secondary" data-reveal>
            <div className="goal-icon"><Sparkles size={25} /></div>
            <span className="goal-number">B</span>
            <h3>Định hướng cá nhân</h3>
            <p>
              Mình mong muốn trở thành một người chủ động, sáng tạo và luôn sẵn sàng học hỏi. Trong thời gian tới, mình sẽ tiếp tục phát triển chuyên môn, nâng cao kỹ năng công nghệ và ngoại ngữ, đồng thời xây dựng một portfolio chất lượng để ghi lại quá trình học tập và tạo nền tảng cho cơ hội nghề nghiệp sau khi tốt nghiệp.
            </p>
          </article>
          <aside className="goal-quote" data-reveal>
            <span>“</span>
            <p>Portfolio là bản đồ ghi lại từng bước mình đã học, đã thử và đã trưởng thành.</p>
          </aside>
        </div>
      </div>
    </section>
  );
}

function TaskPreview({ task }: { task: Task }) {
  if (task.preview) {
    return <img src={task.preview} alt="" loading="lazy" />;
  }
  return (
    <div className="table-preview" aria-hidden="true">
      <div className="table-preview-head"><span /><span /><span /></div>
      {[1, 2, 3, 4].map((row) => <div className="table-preview-row" key={row}><span /><span /><span /></div>)}
    </div>
  );
}

function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <div className="section-heading projects-heading" data-reveal>
          <span className="section-index">03</span>
          <div>
            <p className="eyebrow">Hồ sơ bài tập</p>
            <h2>6 bài tập, 6 lát cắt của hành trình học tập số.</h2>
          </div>
          <p className="section-note">Mỗi bài được trình bày theo đúng thứ tự nội dung, bảng biểu và ảnh minh chứng trong tài liệu gốc.</p>
        </div>
        <div className="task-grid">
          {tasks.map((task) => (
            <a className={`task-card accent-${task.accent}`} href={`#${task.id}`} key={task.id} data-reveal>
              <div className="task-card-top">
                <span className="task-number">{task.number}</span>
                <span className="task-kicker">{task.kicker}</span>
                <span className="task-arrow"><ArrowRight size={18} /></span>
              </div>
              <div className="task-preview"><TaskPreview task={task} /></div>
              <div className="task-card-body">
                <h3>{task.title}</h3>
                <p>{task.summary}</p>
                <div className="task-meta">
                  {task.meta.map((item) => <span key={item}>{item}</span>)}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Reflection() {
  return (
    <section className="section reflection-section" id="reflection">
      <div className="container">
        <div className="section-heading" data-reveal>
          <span className="section-index">04</span>
          <div>
            <p className="eyebrow">Tổng kết cá nhân</p>
            <h2>Nhìn lại để thấy mình đã tiến bộ như thế nào.</h2>
          </div>
        </div>
        <div className="reflection-layout">
          <article className="reflection-story" data-reveal>
            <div className="story-label"><BookOpen size={18} /> Trải nghiệm và cảm nhận</div>
            <p>
              Trong quá trình xây dựng Portfolio, mình có cơ hội tổng hợp các sản phẩm học tập và nhìn lại quá trình phát triển của bản thân. Việc sử dụng các công cụ số và AI giúp mình hoàn thành công việc hiệu quả hơn, đồng thời rèn luyện kỹ năng tổ chức, sáng tạo và trình bày nội dung một cách khoa học.
            </p>
            <div className="reflection-highlight">
              <Sparkles size={20} />
              <p>
                Điều mình tâm đắc nhất là nhận ra Portfolio không chỉ là nơi lưu trữ sản phẩm mà còn phản ánh quá trình học tập và sự tiến bộ của bản thân.
              </p>
            </div>
          </article>
          <aside className="skills-card" data-reveal>
            <p className="eyebrow">Kiến thức & kỹ năng đạt được</p>
            <ul>
              {skills.map((skill) => (
                <li key={skill}><span><Check size={15} /></span>{skill}</li>
              ))}
            </ul>
          </aside>
          <article className="challenge-card" data-reveal>
            <p className="eyebrow">Thách thức lớn nhất</p>
            <p>
              Lựa chọn nội dung phù hợp, sắp xếp thông tin logic và chỉnh sửa kết quả do AI tạo ra để đảm bảo tính chính xác, phù hợp với mục tiêu học tập và phong cách cá nhân.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <BrandMark />
          <h2>Cảm ơn bạn đã ghé thăm portfolio của mình.</h2>
        </div>
        <div className="footer-contact">
          <span>{profile.name} · {profile.studentId}</span>
          <a href={`mailto:${profile.email}`}><Mail size={16} /> {profile.email}</a>
        </div>
      </div>
      <div className="footer-wave" aria-hidden="true" />
    </footer>
  );
}

function HomePage() {
  useReveal();
  useEffect(() => {
    const id = window.location.hash.replace('#', '');
    if (id && id !== 'home' && !id.startsWith('task-')) {
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView({ block: 'start' }));
    }
  }, []);
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Goals />
        <Projects />
        <Reflection />
      </main>
      <Footer />
    </>
  );
}

type TocItem = { id: string; text: string; level: number };

function TaskDetail({ task }: { task: Task }) {
  const [content, setContent] = useState('');
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const articleRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`./content/${task.id}.html`)
      .then((response) => {
        if (!response.ok) throw new Error('Không thể tải nội dung bài tập.');
        return response.text();
      })
      .then((html) => {
        if (!cancelled) {
          setContent(html);
          setLoading(false);
          window.scrollTo({ top: 0, behavior: 'instant' });
        }
      })
      .catch(() => {
        if (!cancelled) {
          setContent('<p>Không thể tải nội dung bài tập. Vui lòng tải lại trang.</p>');
          setLoading(false);
        }
      });
    return () => { cancelled = true; };
  }, [task.id]);

  const toc = useMemo<TocItem[]>(() => {
    if (!content) return [];
    const doc = new DOMParser().parseFromString(content, 'text/html');
    return [...doc.querySelectorAll<HTMLElement>('h1, h2, h3')]
      .map((node) => ({
        id: node.id,
        text: (node.textContent || '').replace(/\s+/g, ' ').trim(),
        level: Number(node.tagName.substring(1)),
      }))
      .filter((item) => item.id && item.text && item.text.length < 160)
      .slice(0, 18);
  }, [content]);

  const onArticleClick = (event: React.MouseEvent<HTMLElement>) => {
    const target = event.target as HTMLElement;
    if (target.tagName === 'IMG') {
      setLightbox((target as HTMLImageElement).src);
    }
  };

  return (
    <div className="detail-page">
      <SiteHeader detail />
      <main>
        <section className={`detail-hero accent-${task.accent}`}>
          <div className="detail-hero-wave" aria-hidden="true" />
          <div className="container detail-hero-inner">
            <div>
              <a className="detail-back-inline" href="#projects"><ArrowLeft size={17} /> Danh sách bài tập</a>
              <p className="eyebrow">Bài {task.number} · {task.kicker}</p>
              <h1>{task.title}</h1>
              <p>{task.summary}</p>
              <div className="detail-meta">
                {task.meta.map((item) => <span key={item}><Check size={14} /> {item}</span>)}
              </div>
            </div>
            <div className="detail-number" aria-hidden="true">{task.number}</div>
          </div>
        </section>

        <div className="container article-layout">
          <aside className="article-sidebar">
            <a href="#projects" className="side-back"><ArrowLeft size={16} /> Trở về</a>
            {toc.length > 0 && (
              <nav aria-label="Mục lục bài tập">
                <p>Mục lục</p>
                {toc.map((item) => (
                  <button
                    type="button"
                    className={`toc-level-${item.level}`}
                    key={`${item.id}-${item.text}`}
                    onClick={() => articleRef.current?.querySelector<HTMLElement>(`#${CSS.escape(item.id)}`)?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  >
                    {item.text}
                  </button>
                ))}
              </nav>
            )}
          </aside>
          <article className="article-paper" ref={articleRef} onClick={onArticleClick}>
            {loading ? (
              <div className="article-loading"><span /><span /><span /><p>Đang mở bài tập…</p></div>
            ) : (
              <div className="doc-content" dangerouslySetInnerHTML={{ __html: content }} />
            )}
          </article>
        </div>
      </main>
      <footer className="detail-footer">
        <div className="container">
          <a href="#projects"><ArrowLeft size={17} /> Xem các bài tập khác</a>
          <a href={`mailto:${profile.email}`}>{profile.email} <ExternalLink size={15} /></a>
        </div>
      </footer>
      {lightbox && (
        <div className="lightbox" role="dialog" aria-modal="true" aria-label="Xem ảnh minh chứng" onClick={() => setLightbox(null)}>
          <button type="button" onClick={() => setLightbox(null)} aria-label="Đóng ảnh"><X size={22} /></button>
          <img src={lightbox} alt="Ảnh minh chứng phóng to" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </div>
  );
}

function App() {
  const hash = useHashRoute();
  const taskId = hash.replace('#', '');
  const task = tasks.find((item) => item.id === taskId);
  return task ? <TaskDetail task={task} /> : <HomePage />;
}

createRoot(document.getElementById('root')!).render(<App />);
