export default function StudentCard(props) {
  return (
    <article className="student-card">
      <div className="avatar" aria-hidden="true">
        {props.name.charAt(0)}
      </div>
      <div>
        <h3>{props.name}</h3>
        <p><strong>Age:</strong> {props.age}</p>
        <p><strong>Course:</strong> {props.course}</p>
        <span className={props.isRegular ? "status regular" : "status irregular"}>
          {props.isRegular ? "Regular Student" : "Irregular Student"}
        </span>
      </div>
    </article>
  );
}