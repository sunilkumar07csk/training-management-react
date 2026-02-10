import React, { useState } from "react";

export default function CourseManagement({ courses, setCourses, subjects }) {
  const [name, setName] = useState("");
  const [sel, setSel] = useState([]);
  const [msg, setMsg] = useState("");

  const create = () => {
    if (!name || sel.length < 2) return setMsg("Min 2 subjects required");
    setCourses([...courses, { name, subjects: sel }]);
    setName(""); setSel([]); setMsg("Course created");
  };

  return (
    <div className="box">
      <h2>Courses</h2>
      <input placeholder="Course name" value={name} onChange={e => setName(e.target.value)} />
      {subjects.map(s => (
        <label key={s} className="check">
          <input type="checkbox" checked={sel.includes(s)} onChange={() =>
            setSel(sel.includes(s) ? sel.filter(x => x !== s) : [...sel, s])
          } />
          {s}
        </label>
      ))}
      <button onClick={create}>Create</button>
      <p>{msg}</p>

      <ul>
        {courses.map((c, i) => (
          <li key={i} className="slide">{c.name} → {c.subjects.join(", ")}</li>
        ))}
      </ul>
    </div>
  );
        }
