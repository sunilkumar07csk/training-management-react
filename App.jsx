import React, { useState, useEffect } from "react";
import Dashboard from "./Dashboard";
import SubjectManagement from "./SubjectManagement";
import CourseManagement from "./CourseManagement";
import BatchManagement from "./BatchManagement";
import StudentManagement from "./StudentManagement";

export default function App() {
  const [page, setPage] = useState("dashboard");

  const [subjects, setSubjects] = useState(JSON.parse(localStorage.getItem("subjects")) || []);
  const [courses, setCourses] = useState(JSON.parse(localStorage.getItem("courses")) || []);
  const [batches, setBatches] = useState(JSON.parse(localStorage.getItem("batches")) || []);
  const [students, setStudents] = useState(JSON.parse(localStorage.getItem("students")) || []);

  useEffect(() => {
    localStorage.setItem("subjects", JSON.stringify(subjects));
    localStorage.setItem("courses", JSON.stringify(courses));
    localStorage.setItem("batches", JSON.stringify(batches));
    localStorage.setItem("students", JSON.stringify(students));
  }, [subjects, courses, batches, students]);

  return (
    <div className="app">
      <h1 className="title">Training Management System</h1>

      <nav className="nav">
        {["dashboard","subjects","courses","batches","students"].map(p => (
          <button
            key={p}
            className={page === p ? "active" : ""}
            onClick={() => setPage(p)}
          >
            {p.toUpperCase()}
          </button>
        ))}
      </nav>

      <div className="page fade-in">
        {page === "dashboard" && <Dashboard subjects={subjects} courses={courses} batches={batches} students={students} />}
        {page === "subjects" && <SubjectManagement subjects={subjects} setSubjects={setSubjects} />}
        {page === "courses" && <CourseManagement courses={courses} setCourses={setCourses} subjects={subjects} />}
        {page === "batches" && <BatchManagement batches={batches} setBatches={setBatches} courses={courses} />}
        {page === "students" && <StudentManagement students={students} setStudents={setStudents} courses={courses} batches={batches} />}
      </div>
    </div>
  );
         }
