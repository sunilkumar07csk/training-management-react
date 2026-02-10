import React, { useState } from "react";

export default function BatchManagement({ batches, setBatches, courses }) {
  const [data, setData] = useState({ name:"", course:"", start:"", end:"" });
  const [msg, setMsg] = useState("");

  const create = () => {
    if (!Object.values(data).every(Boolean)) return setMsg("All fields required");
    if (data.start >= data.end) return setMsg("Invalid time");
    setBatches([...batches, data]);
    setData({ name:"", course:"", start:"", end:"" });
    setMsg("Batch added");
  };

  return (
    <div className="box">
      <h2>Batches</h2>
      <input placeholder="Batch name" value={data.name} onChange={e => setData({...data,name:e.target.value})}/>
      <select value={data.course} onChange={e => setData({...data,course:e.target.value})}>
        <option value="">Select course</option>
        {courses.map((c,i)=><option key={i}>{c.name}</option>)}
      </select>
      <input type="time" value={data.start} onChange={e => setData({...data,start:e.target.value})}/>
      <input type="time" value={data.end} onChange={e => setData({...data,end:e.target.value})}/>
      <button onClick={create}>Add</button>
      <p>{msg}</p>

      <ul>
        {batches.map((b,i)=>(
          <li key={i} className="slide">{b.name} ({b.course}) {b.start}-{b.end}</li>
        ))}
      </ul>
    </div>
  );
}
