
import "./Showcase.css";

const pages = [
  { number: "01", title: "الغلاف", subtitle: "حكاية إنجازك", type: "cover" },
  { number: "02", title: "مخطط الأسبوع", subtitle: "أسبوع جديد، فرصة جديدة", type: "weekly" },
  { number: "03", title: "مخطط اليوم", subtitle: "خطوة واحدة في كل مرة", type: "daily" },
  { number: "04", title: "متابعة الامتحانات", subtitle: "كل موعد واضح قدامك", type: "exams" },
  { number: "05", title: "التقدم الشهري", subtitle: "احتفلي بكل خطوة", type: "monthly" },
];

function PagePreview({ page }: { page: (typeof pages)[number] }) {
  return (
    <article className={`showcase-page ${page.type}`}>
      <div className="preview-brand">h. HEKAYA STUDIO</div>
      {page.type === "cover" ? (
        <div className="preview-cover-content">
          <span>STUDY COLLECTION · 2026</span>
          <h3>حكاية<br /><i>إنجازك</i></h3>
          <p>مخططك الدراسي لتنظيم الوقت، وتحقيق أهدافك خطوة بخطوة.</p>
          <div className="preview-cover-line" />
          <small>YOUR NEW CHAPTER STARTS HERE</small>
        </div>
      ) : (
        <div className="preview-page-content">
          <span className="preview-eyebrow">STUDY EDITION</span>
          <h3>{page.title}</h3>
          <p>{page.subtitle}</p>
          {page.type === "weekly" && (
            <div className="preview-days">
              {["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"].map((day) => (
                <div key={day}><b>{day}</b><span /><span /></div>
              ))}
            </div>
          )}
          {page.type === "daily" && (
            <div className="preview-lines">
              {["أهم هدف لليوم", "قائمة المهام", "جدول المذاكرة", "إنجاز أفتخر به"].map((item) => (
                <div key={item}><b>{item}</b><span /><span /></div>
              ))}
            </div>
          )}
          {page.type === "exams" && (
            <div className="preview-table">
              <div>المادة</div><div>الموعد</div><div>تم؟</div>
              {Array.from({ length: 5 }, (_, i) => <div className="preview-empty" key={i} />)}
            </div>
          )}
          {page.type === "monthly" && (
            <div className="preview-habits">
              {["مذاكرة يومية", "مراجعة الدروس", "نوم كافٍ", "وقت بدون موبايل"].map((habit) => (
                <div key={habit}><span>{habit}</span><i /><i /><i /><i /></div>
              ))}
            </div>
          )}
        </div>
      )}
      <div className="preview-footer"><span>HEKAYA STUDIO</span><span>{page.number} / 05</span></div>
    </article>
  );
}

export default function Showcase() {
  return (
    <main className="showcase">
      <header className="showcase-nav">
        <a href="/" className="showcase-logo">h. <span>HEKAYA STUDIO</span></a>
        <span>THE STUDY COLLECTION · 001</span>
      </header>

      <section className="showcase-hero">
        <div className="showcase-copy">
          <span className="showcase-kicker">A LITTLE MORE INTENTIONAL</span>
          <h1>حكاية <i>إنجازك.</i></h1>
          <p>مخطط دراسي صُمّم عشان يساعدك ترتّبي وقتك، وتتابعي أهدافك، وتحتفلي بكل خطوة بتقربي بيها من حلمك.</p>
          <div className="showcase-tags"><span>5 صفحات للطباعة</span><span>مقاس A4</span><span>نسخة رقمية PDF</span></div>
          <a className="showcase-button" href="/planner">استكشفي المخطط <span>↗</span></a>
          <small>STUDY EDITION · 2026</small>
        </div>
        <div className="showcase-art">
          <div className="showcase-back-card"><span>WEEKLY PLAN</span><b>خطوة<br />بخطوة.</b></div>
          <div className="showcase-front-card">
            <div className="showcase-card-brand">h. HEKAYA STUDIO</div>
            <div className="showcase-card-center"><span>STUDY COLLECTION</span><h2>حكاية<br /><i>إنجازك</i></h2><p>مخططك الدراسي</p></div>
            <div className="showcase-card-bottom">YOUR NEW CHAPTER STARTS HERE</div>
          </div>
          <span className="showcase-stamp">A FRESH<br />START ✳</span>
        </div>
      </section>

      <section className="showcase-pages-section">
        <div className="showcase-section-heading">
          <span>INSIDE YOUR PLANNER</span>
          <h2>كل صفحة، <i>خطوة لقدّام.</i></h2>
          <p>خمس صفحات عملية تساعدك تخططي، تنظمي، وتتابعي تقدمك.</p>
        </div>
        <div className="showcase-pages">
          {pages.map((page) => (
            <div className="showcase-page-item" key={page.number}>
              <PagePreview page={page} />
              <div className="showcase-page-label"><span>{page.number}</span><b>{page.title}</b></div>
            </div>
          ))}
        </div>
      </section>

      <section className="showcase-quote">
        <span>✳</span>
        <h2>خطوة صغيرة كل يوم<br /><i>تصنع فرقًا كبيرًا.</i></h2>
        <p>ابدئي من مكانك، وبالإمكانيات اللي عندك.</p>
      </section>

      <footer className="showcase-footer"><a href="/">h. HEKAYA STUDIO</a><span>A LITTLE IDEA CAN BECOME A BEAUTIFUL THING.</span><span>© 2026</span></footer>
    </main>
  );
}