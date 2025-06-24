import React, { useState } from "react";
import "./CoursesPage.css";

const coursesData = [
  { id: 1, title: "Web Development", category: "Technology", difficulty: "Beginner" },
  { id: 2, title: "Data Science", category: "Technology", difficulty: "Intermediate" },
  { id: 3, title: "Marketing Strategies", category: "Business", difficulty: "Beginner" },
  { id: 4, title: "Financial Management", category: "Business", difficulty: "Advanced" },
  { id: 5, title: "Graphic Design", category: "Creative", difficulty: "Intermediate" },
  { id: 6, title: "Cybersecurity Basics", category: "Technology", difficulty: "Beginner" },
  { id: 7, title: "Artificial Intelligence", category: "Technology", difficulty: "Advanced" },
  { id: 8, title: "Project Management", category: "Business", difficulty: "Intermediate" },
  { id: 9, title: "UI/UX Design", category: "Creative", difficulty: "Beginner" },
  { id: 10, title: "Digital Marketing", category: "Business", difficulty: "Intermediate" }
];

const studentsData = [
  { id: 1, name: "Alice Johnson", course: "Web Development", contact: "alice@example.com" },
  { id: 2, name: "Bob Smith", course: "Data Science", contact: "bob@example.com" },
  { id: 3, name: "Charlie Brown", course: "Marketing Strategies", contact: "charlie@example.com" },
  { id: 4, name: "Diana Clark", course: "Financial Management", contact: "diana@example.com" },
  { id: 5, name: "Emily Davis", course: "Graphic Design", contact: "emily@example.com" },
  { id: 6, name: "Frank Wilson", course: "Cybersecurity Basics", contact: "frank@example.com" },
  { id: 7, name: "George Lopez", course: "Artificial Intelligence", contact: "george@example.com" },
  { id: 8, name: "Hannah Lee", course: "Project Management", contact: "hannah@example.com" },
  { id: 9, name: "Ian Wright", course: "UI/UX Design", contact: "ian@example.com" },
  { id: 10, name: "Jessica Turner", course: "Digital Marketing", contact: "jessica@example.com" }
];

export default function CoursesPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");
  const [selectedBook, setSelectedBook] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [peerSearch, setPeerSearch] = useState("");
  const [peerCourseFilter, setPeerCourseFilter] = useState("All");

  const filteredCourses = coursesData.filter((course) =>
    course.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || course.category === category) &&
    (difficulty === "All" || course.difficulty === difficulty)
  );

  const filteredStudents = studentsData.filter((student) =>
    student.name.toLowerCase().includes(peerSearch.toLowerCase()) &&
    (peerCourseFilter === "All" || student.course === peerCourseFilter)
  );

  const uniqueCourses = [...new Set(studentsData.map(student => student.course))];

  const handlePlayAudiobook = () => {
    const searchQuery = `${selectedBook} audiobook ${selectedLanguage}`;
    window.open(
      `https://www.audible.com/search?keywords=${encodeURIComponent(searchQuery)}`,
      "_blank"
    );
  };

  const handleEnrollNow = () => {
    window.open('#', '_blank');
  };

  return (
    <div className="courses-page">
      <h1>Explore Courses</h1>
      <p>Learn new skills and boost your career.</p>

      <input
        type="text"
        placeholder="Search for courses..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-bar"
      />

      <div className="filters">
        <select onChange={(e) => setCategory(e.target.value)} value={category}>
          <option value="All">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Business">Business</option>
          <option value="Creative">Creative</option>
        </select>

        <select onChange={(e) => setDifficulty(e.target.value)} value={difficulty}>
          <option value="All">All Levels</option>
          <option value="Beginner">Beginner</option>
          <option value="Intermediate">Intermediate</option>
          <option value="Advanced">Advanced</option>
        </select>
      </div>

      <div className="course-list">
        {filteredCourses.length > 0 ? (
          filteredCourses.map((course) => (
            <div key={course.id} className="course-card">
              <h3>{course.title}</h3>
              <p>Category: {course.category}</p>
              <p>Difficulty: {course.difficulty}</p>
              <button onClick={handleEnrollNow}>Enroll Now</button>
            </div>
          ))
        ) : (
          <p className="no-results">No courses found.</p>
        )}
      </div>

      {/* Networking Feature */}
      <div className="networking-section">
        <h2>Connect with Peers</h2>
        <p>Study together with students taking the same course for better learning outcomes.</p>

        <div className="peer-filters">
          <input
            type="text"
            placeholder="Search for peers..."
            value={peerSearch}
            onChange={(e) => setPeerSearch(e.target.value)}
            className="search-bar"
          />

          <select 
            onChange={(e) => setPeerCourseFilter(e.target.value)} 
            value={peerCourseFilter}
          >
            <option value="All">All Courses</option>
            {uniqueCourses.map((course, index) => (
              <option key={index} value={course}>{course}</option>
            ))}
          </select>
        </div>

        <div className="student-list">
          {filteredStudents.length > 0 ? (
            filteredStudents.map((student) => (
              <div key={student.id} className="student-card">
                <h4>{student.name}</h4>
                <p>Course: {student.course}</p>
                <p>Email: <a href={`mailto:${student.contact}`}>{student.contact}</a></p>
              </div>
            ))
          ) : (
            <p className="no-results">No students found.</p>
          )}
        </div>
      </div>

      {/* Audiobook Feature */}
      <div className="audiobook-section">
        <h2>Listen to Textbooks</h2>
        <p>Overcome language barriers by listening to audiobooks in your preferred language.</p>

        <div className="audiobook-controls">
          <select onChange={(e) => setSelectedBook(e.target.value)} value={selectedBook}>
            <option value="">Select a Textbook</option>
            {coursesData.map((course) => (
              <option key={course.id} value={course.title}>
                {course.title}
              </option>
            ))}
          </select>

          <select onChange={(e) => setSelectedLanguage(e.target.value)} value={selectedLanguage}>
            <option value="">Select a Language</option>
            <option value="English">English</option>
            <option value="Spanish">Spanish</option>
            <option value="French">French</option>
            <option value="German">German</option>
            <option value="Chinese">Chinese</option>
          </select>

          <button 
            disabled={!selectedBook || !selectedLanguage}
            onClick={handlePlayAudiobook}
          >
            Play Audiobook
          </button>
        </div>
      </div>
    </div>
  );
}