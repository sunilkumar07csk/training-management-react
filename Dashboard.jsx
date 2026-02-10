import React from "react";

export default function Dashboard({ subjects, courses, batches, students }) {
  return (
    <div className="grid">
      <div className="card zoom">Subjects<br />{subjects.length}</div>
      <div className="card zoom">Courses<br />{courses.length}</div>
      <div className="card zoom">Batches<br />{batches.length}</div>
      <div className="card zoom">Students<br />{students.length}</div>
    </div>
  );
}
