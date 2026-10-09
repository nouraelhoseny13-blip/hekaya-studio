
import { ArrowLeft, ArrowRight, Check, Sparkles } from "lucide-react";
import "./Product.css";

const features = [
  "مخطط أسبوعي لتنظيم وقتك ومهامك",
  "مخطط يومي لترتيب الأولويات",
  "متابعة الامتحانات والـ Deadlines",
  "متابعة الأهداف والتقدم الشهري",
  "5 صفحات جاهزة للطباعة بمقاس A4",
];

function Product() {
  return (
    <main className="product-page">
      <header className="product-header">
        <a href="/" className="product-back">
          <ArrowLeft size={16} /> العودة إلى حكاية
        </a>
        <span className="product-header-brand">HEKAYA STUDIO</span>
      </header>

      <section className="product-layout">
        <div className="planner-stage">
          <span className="planner-edition">THE STUDY COLLECTION · 001</span>
          <div className="planner-sheet">
            <span className="planner-small">HEKAYA STUDIO</span>
            <span className="planner-monogram">h.</span>
            <span className="planner-title">
              حكاية<br /><i>إنجازك.</i>
            </span>
            <span className="planner-subtitle">A LITTLE MORE INTENTIONAL</span>
            <div className="planner-lines">
              <span />
              <span />
              <span />
            </div>
            <span className="planner-footer">YOUR JOURNEY, YOUR STORY</span>
          </div>
          <span className="planner-caption">
            خطوة صغيرة كل يوم، إنجاز أكبر كل مرة.
          </span>
        </div>

        <div className="product-details">
          <div className="product-eyebrow">
            <Sparkles size={14} /> THE STUDY COLLECTION
          </div>

          <h1>حكاية <i>إنجازك.</i></h1>

          <p className="product-intro">
            بلانر دراسي رقمي يساعدك تنظّمي وقتك، وتتابعي أهدافك،
            وتخططي لأيامك بهدوء ووضوح.
          </p>

          <div className="product-status">DIGITAL STUDY PLANNER · PDF</div>
          <div className="product-divider" />

          <h2>خلي كل خطوة ليها حكاية.</h2>

          <p className="product-description">
            خمس صفحات مصممة بعناية عشان تساعدك ترتّبي أسبوعك،
            وتحددي أولوياتك، وتتابعي امتحاناتك وتحتفلي بتقدمك.
            جاهز للطباعة بمقاس A4.
          </p>

          <ul className="product-features">
            {features.map((feature) => (
              <li key={feature}>
                <Check size={16} /> {feature}
              </li>
            ))}
          </ul>

          <a
            className="product-interest-button"
            href="/checkout"
          >
            اشتري البلانر · 79 جنيه <ArrowRight size={17} />
          </a>

          <p className="product-note">
            ملف PDF جاهز للطباعة. افتحي الملف واطبعي الصفحات بمقاس A4.
          </p>
        </div>
      </section>

      <footer className="product-page-footer">
        <span>HEKAYA STUDIO</span>
        <span>A little idea can become a beautiful thing.</span>
      </footer>
    </main>
  );
}

export default Product;

