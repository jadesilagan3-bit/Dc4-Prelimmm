import Header from "./components/Header.jsx";
import StudentCard from "./components/StudentCard.jsx";
import AttendanceCounter from "./components/AttendanceCounter.jsx";

export default function App() {
  return (
    <div className="app">
      <Header />

      <main>
        <section>
          <h2>Student List</h2>
          <div className="student-grid">
            <StudentCard
              name="Angel Cruz"
              age={20}
              course="BSIT"
              isRegular={true}
            />
            <StudentCard
              name="Mark Santos"
              age={21}
              course="BSIT"
              isRegular={false}
            />
            <StudentCard
              name="Jasmine Reyes"
              age={20}
              course="BSIT"
              isRegular={true}
            />
          </div>
        </section>

        <AttendanceCounter />
      </main>
      <footer>React Fundamentals · Student Directory</footer>
    </div>
  );
}