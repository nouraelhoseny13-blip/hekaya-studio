import "./Planner.css";

const days = ["السبت", "الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة"];

function Header({ title, subtitle }: { title: string; subtitle: string }) {
return ( <header className="planner-header"> <div className="planner-brand">hekaya <span>studio.</span></div> <div className="planner-heading"> <h2>{title}</h2> <p>{subtitle}</p> </div> <div className="planner-line" /> </header>
);
}

function Lines({ count = 5 }: { count?: number }) {
return ( <div className="planner-lines">
{Array.from({ length: count }, (_, i) => <div key={i} />)} </div>
);
}

function Planner() {
return ( <main className="planner-document" dir="rtl"> <section className="planner-page planner-cover"> <div className="cover-top"> <span>HEKAYA STUDIO</span> <span>STUDY COLLECTION</span> </div> <div className="cover-decoration">h.</div> <div className="cover-content"> <p className="cover-eyebrow">YOUR NEW CHAPTER STARTS HERE</p> <h1>حكاية<br /><span>إنجازك</span></h1> <p className="cover-description">
مخططك الدراسي لتنظيم الوقت، <br />
وتحقيق أهدافك خطوة بخطوة. </p> <div className="cover-name"> <span>الاسم</span> <div /> </div> </div> <div className="cover-bottom"> <span>STUDY EDITION · 2026</span> <span>خطوة صغيرة كل يوم تصنع فرقًا كبيرًا</span> </div> </section>
  <section className="planner-page">
    <Header title="مخطط الأسبوع" subtitle="أسبوع جديد، فرصة جديدة للإنجاز" />
    <div className="planner-meta">
      <span>الأسبوع من: __________</span>
      <span>إلى: __________</span>
    </div>
    <div className="weekly-grid">
      {days.map(day => (
        <div className="day-card" key={day}>
          <h3>{day}</h3>
          <Lines count={5} />
        </div>
      ))}
    </div>
    <div className="planner-two-columns">
      <div className="planner-panel">
        <h3>أهم 3 أهداف للأسبوع</h3>
        <Lines count={3} />
      </div>
      <div className="planner-panel">
        <h3>ملاحظات وتذكيرات</h3>
        <Lines count={3} />
      </div>
    </div>
    <footer className="planner-footer">
      <span>HEKAYA STUDIO</span>
      <span>02 / WEEKLY PLAN</span>
    </footer>
  </section>

  <section className="planner-page">
    <Header title="مخطط اليوم" subtitle="ركّزي على خطوة واحدة في كل مرة" />
    <div className="planner-meta">
      <span>التاريخ: ____ / ____ / ______</span>
      <span>اليوم: __________</span>
    </div>
    <div className="planner-panel daily-focus">
      <h3>أهم هدف لليوم</h3>
      <Lines count={2} />
    </div>
    <div className="daily-layout">
      <div className="planner-panel">
        <h3>قائمة المهام</h3>
        {Array.from({ length: 8 }, (_, i) => (
          <div className="check-line" key={i}>
            <span className="empty-check" />
            <div />
          </div>
        ))}
      </div>
      <div className="planner-panel">
        <h3>جدول المذاكرة</h3>
        {["8:00", "9:00", "10:00", "11:00", "12:00", "1:00", "2:00", "3:00"].map(time => (
          <div className="time-line" key={time}>
            <span>{time}</span>
            <div />
          </div>
        ))}
      </div>
    </div>
    <div className="planner-two-columns">
      <div className="planner-panel">
        <h3>إنجاز أفتخر به</h3>
        <Lines count={2} />
      </div>
      <div className="planner-panel">
        <h3>ملاحظات</h3>
        <Lines count={2} />
      </div>
    </div>
    <footer className="planner-footer">
      <span>HEKAYA STUDIO</span>
      <span>03 / DAILY PLAN</span>
    </footer>
  </section>

  <section className="planner-page">
    <Header title="متابعة الامتحانات والتسليمات" subtitle="خلي كل موعد واضح قدامك" />
    <div className="planner-meta">
      <span>الشهر: __________</span>
      <span>الفصل الدراسي: __________</span>
    </div>
    <table className="exam-table">
      <thead>
        <tr>
          <th>المادة</th>
          <th>النوع</th>
          <th>الموعد</th>
          <th>الأولوية</th>
          <th>تم؟</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }, (_, i) => (
          <tr key={i}>
            <td />
            <td />
            <td />
            <td />
            <td><span className="empty-check" /></td>
          </tr>
        ))}
      </tbody>
    </table>
    <div className="planner-panel exam-notes">
      <h3>المواد اللي محتاجة مراجعة إضافية</h3>
      <Lines count={4} />
    </div>
    <div className="planner-panel exam-notes">
      <h3>خطة الاستعداد للامتحانات</h3>
      <Lines count={3} />
    </div>
    <footer className="planner-footer">
      <span>HEKAYA STUDIO</span>
      <span>04 / EXAM TRACKER</span>
    </footer>
  </section>

  <section className="planner-page">
    <Header title="متابعة التقدم الشهري" subtitle="احتفلي بتقدمك، حتى لو كان بسيطًا" />
    <div className="planner-meta">
      <span>الشهر: __________</span>
      <span>هدفي الأساسي: __________</span>
    </div>
    <div className="planner-panel monthly-goals">
      <h3>أهدافي لهذا الشهر</h3>
      {Array.from({ length: 4 }, (_, i) => (
        <div className="check-line" key={i}>
          <span className="empty-check" />
          <div />
        </div>
      ))}
    </div>
    <div className="planner-panel habit-panel">
      <h3>عاداتي الدراسية</h3>
      <table className="habit-table">
        <thead>
          <tr>
            <th>العادة</th>
            {Array.from({ length: 7 }, (_, i) => <th key={i}>{i + 1}</th>)}
          </tr>
        </thead>
        <tbody>
          {["مذاكرة يومية", "مراجعة الدروس", "نوم كافٍ", "وقت بدون موبايل"].map(habit => (
            <tr key={habit}>
              <td>{habit}</td>
              {Array.from({ length: 7 }, (_, i) => <td key={i} />)}
            </tr>
          ))}
        </tbody>
      </table>
      <p className="habit-note">كرري الجدول لكل أسبوع من الشهر.</p>
    </div>
    <div className="planner-two-columns">
      <div className="planner-panel">
        <h3>إيه اللي نجح معايا؟</h3>
        <Lines count={3} />
      </div>
      <div className="planner-panel">
        <h3>إيه اللي هحسّنه؟</h3>
        <Lines count={3} />
      </div>
    </div>
    <div className="monthly-quote">كل صفحة بتكتبيها هي خطوة أقرب لحلمك.</div>
    <footer className="planner-footer">
      <span>HEKAYA STUDIO</span>
      <span>05 / MONTHLY PROGRESS</span>
    </footer>
  </section>

  <div className="planner-actions">
    <button onClick={() => window.print()}>حفظ أو طباعة الـ Planner PDF</button>
    <a href="/">العودة إلى Hekaya Studio</a>
  </div>
</main>
);
}

export default Planner;
