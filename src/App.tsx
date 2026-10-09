
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import { useState } from "react";
import "./App.css";
import Logo from "./Logo";
import Product from "./Product";
import Planner from "./Planner";
import Showcase from "./Showcase";
import Checkout from "./Checkout";

const products = [
  {
    number: "01",
    category: "مجموعة الدراسة · 001",
    name: "حكاية إنجازك",
    description: "وضوح أكتر، وخطوة أقرب لهدفك كل يوم.",
    price: "بلانر دراسي قابل للطباعة · PDF",
    style: "product-card-rose",
    mark: "حكاية",
  },
  {
    number: "02",
    category: "خطوتك المهنية الجاية",
    name: "The Career Kit",
    description: "ابدئي خطوتك المهنية بثقة.",
    price: "قوالب السيرة الذاتية والتوظيف",
    style: "product-card-cream",
    mark: "NEXT",
  },
  {
    number: "03",
    category: "لأفكارك الكبيرة",
    name: "The Brand Starter",
    description: "امنحي فكرتك بداية تليق بيها.",
    price: "قوالب السوشيال ميديا",
    style: "product-card-burgundy",
    mark: "STUDIO",
  },
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  if (window.location.pathname === "/planner") return <Planner />;
  if (window.location.pathname === "/showcase") return <Showcase />;
  if (window.location.pathname === "/product") return <Product />;
  if (window.location.pathname === "/checkout") return <Checkout />;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <Sparkles size={13} />
        <span>كل فكرة صغيرة ممكن تبقى حكاية جميلة.</span>
      </div>

      <header className="site-header">
        <Logo />

        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          <a href="#story" onClick={closeMenu}>حكايتنا</a>
          <a href="#collections" onClick={closeMenu}>المجموعات</a>
          <a href="#journal" onClick={closeMenu}>كلمة ليكي</a>
          <a className="nav-mobile-link" href="#collections" onClick={closeMenu}>
            اكتشفي المجموعة <ArrowUpRight size={15} />
          </a>
        </nav>

        <a className="header-cta" href="#collections">
          اكتشفي المجموعة <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "إغلاق القائمة" : "فتح القائمة"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <section className="hero" id="home">
        <div className="hero-copy">
          <motion.div
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="eyebrow-line" />
            THE STUDY COLLECTION · 001
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            حكاية
            <br />
            <span>إنجازك</span>
            <span className="period">.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            خطوة صغيرة كل يوم، إنجاز أكبر كل مرة.
            بلانر دراسي رقمي يساعدك تنظّمي وقتك،
            وتتابعي أهدافك، وتخططي لأيامك بهدوء ووضوح.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a className="button-primary" href="/product">
              اكتشفي البلانر <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#story">اعرفي حكايتنا</a>
          </motion.div>

          <div className="hero-note">
            <span className="note-star">✳</span>
            <span>متصمم بعناية، عشان كل خطوة تفرق.</span>
          </div>
        </div>

        <motion.div
          className="hero-art"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="art-backdrop" />
          <div className="art-orbit orbit-one" />
          <div className="art-orbit orbit-two" />

          <div className="art-caption art-caption-top">
            <span>FIG. 001</span>
            <span>بداية حكاية جديدة</span>
          </div>

          <div className="art-paper paper-back">
            <span className="paper-mini">ملاحظة لنفسي</span>
            <span className="paper-scribble">
              خدي خطوة
              <br />
              ورا خطوة.
            </span>
          </div>

          <div className="art-paper paper-front">
            <div className="paper-topline">
              <span>HEKAYA STUDIO</span>
              <span>EST. 2026</span>
            </div>
            <div className="paper-decoration">h.</div>
            <p className="paper-title">
              حكاية
              <br />
              <i>إنجازك.</i>
            </p>
            <span className="paper-bottom">
              كل خطوة بداية لحكاية
            </span>
          </div>

          <div className="art-flower flower-one">✳</div>
          <div className="art-flower flower-two">✳</div>
          <div className="art-stamp">خطوة<br />كل يوم</div>

          <div className="art-caption art-caption-bottom">
            <span>مصمّم عشان رحلتك</span>
            <span>01 / 03</span>
          </div>
        </motion.div>

        <a
          href="#story"
          className="scroll-indicator"
          aria-label="انتقلي إلى حكايتنا"
        >
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="ticker" aria-label="رسالتنا">
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span className="ticker-item" key={index}>
              كل خطوة ليها حكاية <span>✳</span>{" "}
              أحلامك تستاهل البداية <span>✳</span>
            </span>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="section-kicker">حكايتنا</div>
        <div className="story-content">
          <h2>
            كل إنجاز كبير
            <br />
            بيبدأ <i>بخطوة صغيرة.</i>
          </h2>

          <div className="story-description">
            <p>
              حكاية مش مجرد اسم؛ دي فكرتنا إن كل شخص وكل حلم
              وكل بداية جديدة تستحق حكاية جميلة تخصّها.
            </p>
            <p>
              بنصمم أدوات رقمية تساعدك تنظّمي يومك،
              وتقربي من أهدافك، وتخلي البداية أسهل وأوضح.
            </p>
            <a className="underlined-link" href="#collections">
              ابدئي حكايتك من هنا <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="collections-section" id="collections">
        <div className="collections-heading">
          <div>
            <div className="section-kicker">متصممة للحظاتك</div>
            <h2>
              حاجة صغيرة <i>عشانك.</i>
            </h2>
          </div>
          <span className="collection-count">
            المجموعة الأولى · 001
          </span>
        </div>

        <div className="product-grid">
          {products.map((product, index) => (
            <motion.article
              className="product-card"
              onClick={() => {
                if (product.number === "01") {
                  window.location.href = "/product";
                }
              }}
              style={{
                cursor: product.number === "01" ? "pointer" : "default",
              }}
              key={product.number}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
            >
              <div className={`product-art ${product.style}`}>
                <span className="product-index">{product.number} / 03</span>
                <div className="product-mockup">
                  <span className="mockup-overline">HEKAYA STUDIO</span>
                  <span className="mockup-mark">{product.mark}</span>
                  <span className="mockup-bottom">
                    كل خطوة ليها حكاية
                  </span>
                </div>
                <span className="product-art-label">{product.category}</span>
                <span className="product-arrow">
                  <ArrowUpRight size={18} />
                </span>
              </div>

              <div className="product-info">
                <div>
                  <h3>{product.name}</h3>
                  <p>{product.description}</p>

                  {product.number === "01" && (
                    <a
                      className="underlined-link"
                      href="/product"
                      onClick={(event) => event.stopPropagation()}
                    >
                      اكتشفي البلانر <ArrowRight size={16} />
                    </a>
                  )}
                </div>

                <span className="product-price">{product.price}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="collection-note">
          أول بلانر دراسي من حكاية جاهز يساعدك تنظّمي أيامك.
          ودي مجرد البداية، ولسه في حكايات وأدوات رقمية جاية.
        </p>
      </section>

      <section className="journal-section" id="journal">
        <div className="journal-decoration">“</div>
        <div className="section-kicker">كلمة ليكي</div>
        <h2>
          مش لازم تكون كل حاجة واضحة
          <br />
          عشان <i>تبدأي.</i>
        </h2>
        <p>حتى أصغر خطوة تستاهل تتحكي.</p>
        <a className="button-light" href="#home">
          ارجعي للبداية <ArrowUpRight size={16} />
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-logo">
          <Logo />
        </div>
        <span className="footer-center">
          كل فكرة صغيرة ممكن تبقى حكاية جميلة.
        </span>
        <span className="footer-copy">© 2026 HEKAYA STUDIO</span>
      </footer>
    </main>
  );
}

export default App;