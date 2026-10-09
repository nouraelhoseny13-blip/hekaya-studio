
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
    category: "READY TO EXPLORE",
    name: "حكاية إنجازك",
    description: "A little more clarity, every day.",
    price: "Printable Study Planner · PDF",
    style: "product-card-rose",
    mark: "حكاية",
  },
  {
    number: "02",
    category: "FOR YOUR NEXT CHAPTER",
    name: "The Career Kit",
    description: "Make your next move with confidence.",
    price: "CV & career templates",
    style: "product-card-cream",
    mark: "NEXT",
  },
  {
    number: "03",
    category: "FOR YOUR BIG IDEAS",
    name: "The Brand Starter",
    description: "Give your little idea a beautiful start.",
    price: "Social media templates",
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
  if (window.location.pathname === "/checkout") return <Checkout />;

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="announcement">
        <Sparkles size={13} />
        <span>A little idea can become a beautiful thing.</span>
      </div>

      <header className="site-header">
        <Logo />

        <nav className={menuOpen ? "navigation navigation-open" : "navigation"}>
          <a href="#story" onClick={closeMenu}>Our story</a>
          <a href="#collections" onClick={closeMenu}>Collections</a>
          <a href="#journal" onClick={closeMenu}>The journal</a>
          <a className="nav-mobile-link" href="#collections" onClick={closeMenu}>
            Explore the studio <ArrowUpRight size={15} />
          </a>
        </nav>

        <a className="header-cta" href="#collections">
          Explore the studio <ArrowUpRight size={15} />
        </a>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
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
            A CREATIVE LITTLE CORNER
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.12 }}
          >
            Your ideas
            <br />
            deserve a
            <br />
            <span>beautiful</span>
            <br />
            beginning<span className="period">.</span>
          </motion.h1>

          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            Thoughtfully designed digital goods for your everyday,
            your ambitions, and every little dream in between.
          </motion.p>

          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <a className="button-primary" href="#collections">
              Find your little something <ArrowRight size={17} />
            </a>
            <a className="text-link" href="#story">Get to know us</a>
          </motion.div>

          <div className="hero-note">
            <span className="note-star">✳</span>
            <span>Made with intention. Designed for you.</span>
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
            <span>THE ART OF BEGINNING</span>
          </div>

          <div className="art-paper paper-back">
            <span className="paper-mini">A NOTE TO SELF</span>
            <span className="paper-scribble">
              make room<br />for wonder.
            </span>
          </div>

          <div className="art-paper paper-front">
            <div className="paper-topline">
              <span>HEKAYA STUDIO</span>
              <span>EST. 2026</span>
            </div>
            <div className="paper-decoration">h.</div>
            <p className="paper-title">
              A beautiful<br /><i>beginning.</i>
            </p>
            <span className="paper-bottom">
              YOUR NEXT CHAPTER STARTS HERE
            </span>
          </div>

          <div className="art-flower flower-one">✳</div>
          <div className="art-flower flower-two">✳</div>
          <div className="art-stamp">A LITTLE<br />MORE YOU</div>

          <div className="art-caption art-caption-bottom">
            <span>CREATED FOR YOUR NEXT CHAPTER</span>
            <span>01 / 03</span>
          </div>
        </motion.div>

        <a
          href="#story"
          className="scroll-indicator"
          aria-label="Scroll to our story"
        >
          <ArrowDown size={16} />
        </a>
      </section>

      <section className="ticker" aria-label="Our philosophy">
        <div className="ticker-track">
          {Array.from({ length: 4 }, (_, index) => (
            <span className="ticker-item" key={index}>
              LITTLE IDEAS, LOVELY THINGS <span>✳</span>{" "}
              MADE FOR YOUR NEXT CHAPTER <span>✳</span>
            </span>
          ))}
        </div>
      </section>

      <section className="story-section" id="story">
        <div className="section-kicker">A LITTLE ABOUT US</div>
        <div className="story-content">
          <h2>
            Every big thing
            <br />
            starts with a <i>little</i> idea.
          </h2>

          <div className="story-description">
            <p>
              Hekaya means story. And we believe every person, every dream,
              and every new beginning deserves its own beautiful one.
            </p>
            <p>
              We create thoughtful digital tools that make your days feel
              lighter, your ideas feel closer, and your next chapter feel
              a little more possible.
            </p>
            <a className="underlined-link" href="#collections">
              This is where your story begins <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <section className="collections-section" id="collections">
        <div className="collections-heading">
          <div>
            <div className="section-kicker">MADE FOR YOUR MOMENTS</div>
            <h2>
              A little something <i>for you.</i>
            </h2>
          </div>
          <span className="collection-count">
            THE FIRST COLLECTION · 001
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
                    A LITTLE MORE INTENTIONAL
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
                      Explore the planner <ArrowRight size={16} />
                    </a>
                  )}
                </div>

                <span className="product-price">{product.price}</span>
              </div>
            </motion.article>
          ))}
        </div>

        <p className="collection-note">
          Our first study planner is ready for your next chapter. More
          thoughtful digital collections are in the making.
        </p>
      </section>

      <section className="journal-section" id="journal">
        <div className="journal-decoration">“</div>
        <div className="section-kicker">A THOUGHT TO KEEP</div>
        <h2>
          You don’t have to have it all figured out
          <br />
          to <i>begin.</i>
        </h2>
        <p>One small step is still a story worth telling.</p>
        <a className="button-light" href="#home">
          Back to the beginning <ArrowUpRight size={16} />
        </a>
      </section>

      <footer className="site-footer">
        <div className="footer-logo">
          <Logo />
        </div>
        <span className="footer-center">
          A little idea can become a beautiful thing.
        </span>
        <span className="footer-copy">© 2026 HEKAYA STUDIO</span>
      </footer>
    </main>
  );
}

export default App;





