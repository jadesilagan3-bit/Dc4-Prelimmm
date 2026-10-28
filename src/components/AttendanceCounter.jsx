import { useState } from "react";

export default function AttendanceCounter() {
  const [presentCount, setPresentCount] = useState(0);

  function markPresent() {
    setPresentCount((currentCount) => currentCount + 1);
  }

  function undo() {
    setPresentCount((currentCount) => Math.max(0, currentCount - 1));
  }

  function reset() {
    setPresentCount(0);
  }

  return (
    <section className="attendance-panel">
      <div>
        <p className="eyebrow">ATTENDANCE TRACKER</p>
        <h2>Students Present</h2>
        <p className="attendance-help">Use the buttons to update today's count.</p>
      </div>
      <div className="count" aria-live="polite">{presentCount}</div>
      <div className="button-row">
        <button className="primary" onClick={markPresent}>Mark Present</button>
        <button className="secondary" onClick={undo}>Undo</button>
        <button className="secondary" onClick={reset}>Reset</button>
      </div>
    </section>
  );
}