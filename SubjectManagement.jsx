
import React, { useState } from "react";

export default function SubjectManagement({ subjects, setSubjects }) {
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");

  const add = () => {
    if (!name.trim()) return setMsg("Subject name required");
    if (subjects.includes(name)) return setMsg("Duplicate subject");
    setSubjects([...subjects, name]);
    setName("");
    setMsg("Added successfully");
  };

  return (
    <div className="box">
      <h2>Subjects</h2>
      <input value={name} onChange={e => setName(e.target.value)} placeholder="Subject name" />
      <button onClick={add}>Add</button>
      <p>{msg}</p>

      <ul>
        {subjects.map((s, i) => (
          <li key={i} className="slide">
            {s}
            <button onClick={() => setSubjects(subjects.filter(x => x !== s))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
