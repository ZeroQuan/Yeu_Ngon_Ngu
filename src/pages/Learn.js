import React from 'react';
import { Link } from 'react-router-dom';
import './Learn.css';

const Learn = () => {
  const lessons = [
    { 
      id: 1, 
      title: "Bài học cơ bản 1", 
      description: "Học các ký hiệu chữ số", 
    },
    { 
      id: 2, 
      title: "Bài học cơ bản 2", 
      description: "Tìm hiểu các ký hiệu về gia đình", 
    },
    { 
      id: 3, 
      title: "Bài học nâng cao", 
      description: "Ký hiệu phức tạp cho giao tiếp hàng ngày", 
    },
  ];

  return (
    <div className="learn-container">
      <h1 className="learn-title">Bài học Ngôn ngữ Ký hiệu</h1>
      <p className="learn-description">
        Khám phá các bài học được thiết kế để giúp bạn làm quen và thành thạo ngôn ngữ ký hiệu một cách dễ dàng.
      </p>

      {/* Danh sách bài học */}
      <div className="lessons-grid">
        {lessons.map((lesson) => (
          <div key={lesson.id} className="lesson-card">
            <h2 className="lesson-title">{lesson.title}</h2>
            <p className="lesson-description">{lesson.description}</p>
            <Link to={`/lesson/${lesson.id}`} className="lesson-link">
              Xem video <span>▶</span>
            </Link>
          </div>
        ))}
      </div>

      {/* Nút quay lại */}
      <div className="back-button">
        <Link to="/" className="back-link">Quay lại Trang chủ</Link>
      </div>
    </div>
  );
};

export default Learn;