
import { ArrowLeft, ArrowUpLeft, Check, Sparkles, CalendarDays, Clock3, Target, GraduationCap, Printer, FileText } from "lucide-react";
import "./Product.css";

const features = [
  {
    icon: CalendarDays,
    number: "01",
    title: "خططي لأسبوعك",
    description: "نظّمي مهامك ومواعيدك في مكان واحد.",
  },
  {
    icon: Clock3,
    number: "02",
    title: "رتّبي أولوياتك",
    description: "حددي أهم مهامك وابدئي بالأهم.",
  },
  {
    icon: GraduationCap,
    number: "03",
    title: "استعدّي لامتحاناتك",
    description: "تابعي الامتحانات والـ Deadlines بسهولة.",
  },
  {
    icon: Target,
    number: "04",
    title: "تابعي إنجازك",
    description: "راقبي أهدافك واحتفلي بتقدمك كل شهر.",
  },
];

function Product() {
  return (
    <main className="product-page" dir="rtl">
      <header className="product-header">
        <a href="/" className="product-back">
          <ArrowLeft size={16} />
          العودة للرئيسية
        </a>
        <a href="/" className="product-header-brand" dir="ltr">
          <span className="product-brand-mark">h.</span>
          HEKAYA STUDIO
        </a>
      </header>

      <section className="product-hero">
        <div className="planner-stage">
          <span className="planner-edition" dir="ltr">
            THE STUDY COLLECTION · 001
          </span>

          <div className="planner-sheet">
            <div className="planner-sheet-top" dir="ltr">
              <span>HEKAYA STUDIO</span>
              <span>001 / 2026</span>
            </div>

            <div className="planner-orbit planner-orbit-one" />
            <div className="planner-orbit planner-orbit-two" />

            <div className="planner-cover-content">
              <span className="planner-monogram">h.</span>
              <span className="planner-cover-label">
                مساحتك الصغيرة للإنجاز
              </span>
              <h2 className="planner-title">
                حكاية
                <br />
                <i>إنجازك.</i>
              </h2>
              <span className="planner-cover-subtitle" dir="ltr">
                A LITTLE MORE INTENTIONAL
              </span>
            </div>

            <div className="planner-cover-bottom">
              <span>خطوة بخطوة، يوم بيوم.</span>
              <span className="planner-cover-stamp">A4 · PDF</span>
            </div>
          </div>

          <div className="planner-floating-note">
            <Sparkles size={16} />
            <span>
              <strong>كل خطوة بتفرق</strong>
              <small>ابدئي من هنا</small>
            </span>
          </div>

          <span className="planner-caption">
            صُمّم بحب، عشان حكاية إنجازك تستاهل.
          </span>
        </div>

        <div className="product-summary-card">
          <div className="product-eyebrow">
            <Sparkles size={15} />
            <span>مجموعة الدراسة · 001</span>
          </div>

          <span className="product-mini-label">YOUR NEW STUDY COMPANION</span>

          <h1>
            كل يوم فرصة
            <br />
            <i>لإنجاز جديد.</i>
          </h1>

          <p className="product-intro">
            مش لازم تنجزي كل حاجة مرة واحدة. رتّبي أفكارك،
            ونظّمي وقتك، وقرّبي من أهدافك بخطوات صغيرة
            وواضحة مع بلانر حكاية إنجازك.
          </p>

          <div className="product-trust-row">
            <span><Check size={14} /> 5 صفحات عملية</span>
            <span><Check size={14} /> ملف PDF</span>
          </div>

          <div className="product-price-card">
            <div>
              <span className="product-price-caption">سعر البلانر</span>
              <div className="product-price">
                79 <small>جنيه</small>
              </div>
            </div>
            <span className="product-digital-badge">
              <FileText size={15} />
              منتج رقمي
            </span>
          </div>

          <a className="product-interest-button" href="/checkout">
            <span>ابدئي حكاية إنجازك</span>
            <ArrowUpLeft size={19} />
          </a>

          <p className="product-note">
            <Printer size={15} />
            PDF جاهز للطباعة على ورق A4.
          </p>
        </div>
      </section>

      <section className="product-features-section">
        <div className="product-section-heading">
          <span className="product-section-kicker">MADE FOR YOUR JOURNEY</span>
          <h2>
            مساحة صغيرة،
            <i> لفرق كبير.</i>
          </h2>
          <p>
            كل اللي تحتاجيه عشان يومك يبقى أوضح، وخطواتك أقرب لأهدافك.
          </p>
        </div>

        <div className="product-features-grid">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article className="product-feature-card" key={feature.number}>
                <div className="feature-card-top">
                  <span className="feature-card-number">{feature.number}</span>
                  <span className="feature-card-icon">
                    <Icon size={21} strokeWidth={1.6} />
                  </span>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <span className="feature-card-line" />
              </article>
            );
          })}
        </div>
      </section>

      <section className="product-included-card">
        <div className="included-icon">
          <FileText size={27} strokeWidth={1.5} />
        </div>
        <div className="included-copy">
          <span className="product-section-kicker">WHAT'S INCLUDED</span>
          <h2>كل ده في ملف واحد.</h2>
          <p>
            5 صفحات رقمية بتصميم موحّد، جاهزة للطباعة والاستخدام
            في تنظيم دراستك ومتابعة تقدمك.
          </p>
        </div>
        <div className="included-pages">
          <strong>05</strong>
          <span>صفحات</span>
          <small>A4 · PDF</small>
        </div>
      </section>

      <section className="product-bottom-cta">
        <span className="product-section-kicker">YOUR STORY STARTS HERE</span>
        <h2>
          حكاية إنجازك
          <br />
          <i>لسه في أولها.</i>
        </h2>
        <p>ابدئي بخطوة صغيرة النهارده، وسيبي الباقي على رحلتك.</p>
        <a className="product-interest-button" href="/checkout">
          اشتري البلانر · 79 جنيه
          <ArrowLeft size={18} />
        </a>
      </section>

      <footer className="product-page-footer">
        <span dir="ltr">HEKAYA STUDIO</span>
        <span>A little idea can become a beautiful thing.</span>
      </footer>
    </main>
  );
}

export default Product;