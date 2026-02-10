import React, { useState } from "react";

export default function StudentManagement({ students, setStudents, courses, batches }) {
  const [s, setS] = useState({ name:"", course:"", batch:"" });
  const [msg, setMsg] = useState("");

  const add = () => {
    if (!Object.values(s).every(Boolean)) return setMsg("All fields required");
    setStudents([...students, s]);
    setS({ name:"", course:"", batch:"" });
    setMsg("Student added");
  };

  return (
    <div className="box">
      <h2>Students</h2>
      <input placeholder="Name" value={s.name} onChange={e=>setS({...s,name:e.target.value})}/>
      <select value={s.course} onChange={e=>setS({...s,course:e.target.value})}>
        <option value="">Course</option>
        {courses.map((c,i)=><option key={i}>{c.name}</option>)}
      </select>
      <select value={s.batch} onChange={e=>setS({...s,batch:e.target.value})}>
        <option value="">Batch</option>
        {batches.filter(b=>b.course===s.course).map((b,i)=><option key={i}>{b.name}</option>)}
      </select>
      <button onClick={add}>Add</button>
      <p>{msg}</p>

      <ul>
        {students.map((st,i)=>(
          <li key={i} className="slide">{st.name} - {st.course} - {st.batch}</li>
        ))}
      </ul>
    </div>
  );
      }
