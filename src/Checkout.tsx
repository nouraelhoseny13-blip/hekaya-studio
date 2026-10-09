import { useState, type FormEvent } from "react";
import { ArrowLeft, ArrowRight, CheckCircle2, Copy, ShieldCheck, Wallet } from "lucide-react";
import "./Checkout.css";

const walletNumber = "01093198772";
const whatsappNumber = "201093198772";

function Checkout() {
  const [customerName, setCustomerName] = useState("");
  const [customerPhone, setCustomerPhone] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [copied, setCopied] = useState(false);

  const copyWallet = async () => {
    try {
      await navigator.clipboard.writeText(walletNumber);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const submitOrder = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const message = [
      "مرحبًا HEKAYA STUDIO 🤍",
      "عايزة أطلب بلانر حكاية إنجازك.",
      "",
      `الاسم: ${customerName}`,
      `رقم الموبايل: ${customerPhone}`,
      "المنتج: Study Planner PDF",
      "السعر: 79 جنيه",
      `رقم عملية التحويل: ${transactionId || "لم يُضف بعد"}`,
      "",
      "برجاء مراجعة التحويل وتأكيد الطلب بعد وصول المبلغ."
    ].join("\n");

    window.location.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
  };

  return (
    <main className="checkout-page">
      <header className="checkout-header">
        <a href="/product" className="checkout-back">
          <ArrowLeft size={16} /> العودة للبلانر
        </a>
        <a href="/" className="checkout-brand">h.HEKAYA STUDIO</a>
        <span className="checkout-secure"><ShieldCheck size={15} /> SECURE ORDER</span>
      </header>

      <section className="checkout-layout">
        <div className="checkout-intro">
          <span className="checkout-kicker">THE STUDY COLLECTION · 001</span>
          <h1>كل بداية حلوة، <i>وراها حكاية.</i></h1>
          <p>خطوة صغيرة لتنظيم أيامك وتقريبك من أهدافك. كمّلي بياناتك عشان تطلبي البلانر.</p>

          <div className="checkout-product">
            <div className="checkout-product-mark">h.</div>
            <div className="checkout-product-info">
              <span>HEKAYA STUDIO</span>
              <h2>حكاية إنجازك.</h2>
              <p>Printable Study Planner · PDF · 5 صفحات A4</p>
            </div>
            <strong>79 ج.م</strong>
          </div>

          <div className="checkout-includes">
            <span><CheckCircle2 size={17} /> مخطط يومي وأسبوعي</span>
            <span><CheckCircle2 size={17} /> متابعة الأهداف والامتحانات</span>
            <span><CheckCircle2 size={17} /> ملف PDF جاهز للطباعة</span>
          </div>
        </div>

        <div className="checkout-card">
          <span className="checkout-kicker">YOUR ORDER</span>
          <h2>إتمام الطلب</h2>
          <p className="checkout-card-description">حوّلي 79 جنيه على فودافون كاش، وبعدها ابعتي بيانات الطلب على واتساب.</p>

          <div className="checkout-payment">
            <div className="checkout-payment-heading">
              <Wallet size={20} />
              <span>الدفع عبر Vodafone Cash</span>
            </div>
            <span className="checkout-wallet-label">حوّلي المبلغ إلى الرقم التالي</span>
            <div className="checkout-wallet-number" dir="ltr">{walletNumber}</div>
            <button className="checkout-copy" type="button" onClick={copyWallet}>
              <Copy size={15} /> {copied ? "تم نسخ الرقم" : "نسخ رقم المحفظة"}
            </button>
            <div className="checkout-total">
              <span>إجمالي الطلب</span>
              <strong>79 جنيه</strong>
            </div>
          </div>

          <form className="checkout-form" onSubmit={submitOrder}>
            <label htmlFor="customerName">الاسم بالكامل</label>
            <input id="customerName" value={customerName} onChange={(event) => setCustomerName(event.target.value)} placeholder="اكتبي اسمك" required />

            <label htmlFor="customerPhone">رقم موبايلك</label>
            <input id="customerPhone" type="tel" value={customerPhone} onChange={(event) => setCustomerPhone(event.target.value)} placeholder="01xxxxxxxxx" pattern="01[0-9]{9}" title="اكتبي رقم موبايل مصري مكوّن من 11 رقمًا ويبدأ بـ 01" required />

            <label htmlFor="transactionId">رقم عملية التحويل (اختياري)</label>
            <input id="transactionId" value={transactionId} onChange={(event) => setTransactionId(event.target.value)} placeholder="اكتبيه لو حولتي بالفعل" />

            <button className="checkout-submit" type="submit">
              إرسال الطلب على واتساب <ArrowRight size={17} />
            </button>
          </form>

          <p className="checkout-disclaimer">إرسال الطلب لا يعني تأكيد الدفع. هنراجع التحويل يدويًا قبل تأكيد الطلب.</p>
        </div>
      </section>

      <footer className="checkout-footer">
        <a href="/product"> <ArrowLeft size={14} /> الرجوع لتفاصيل البلانر</a>
        <span>HEKAYA STUDIO · 2026</span>
      </footer>
    </main>
  );
}

export default Checkout;
