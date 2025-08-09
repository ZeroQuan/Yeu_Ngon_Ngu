import React from 'react';
import './Home.css'; // Assuming you have a CSS file for Home component styles

const Home = () => {
  return (
    <div className="home-container">
      {/* Banner */}
      <div className="banner">
        <img
          src="https://imapvietnam.org/storage.imapvietnam.org/uploads/posts/104_post_acb4106edffa771810c082868b093870dnn.jpg"
          alt="Diverse group of people communicating using sign language"
          className="banner-img"
        />
        <div className="overlay">
          <h2>Thành thạo ngôn ngữ kí hiệu hơn bao giờ hết</h2>
        </div>
      </div>

      {/* Welcome Section */}
      <div className="welcome">
        <h3>Chào mừng đến với người mới!</h3>
        <p>
          Sứ mệnh của chúng tôi là giúp việc học ngôn ngữ ký hiệu trở nên dễ tiếp cận và thú vị thông qua các bài học tương tác, phản hồi theo thời gian thực và tài nguyên học tập toàn diện.
        </p>
      </div>

      {/* Features */}
      <div className="features">
        <div className="feature-card">
          <h4>Học tập tương tác</h4>
          <p>Các bài học video hấp dẫn được phân loại căn bản đến nâng cao và chủ đề nhằm giúp bạn học hiểu biết về xây dựng vốn từ vựng ngôn ngữ kí hiệu (thủ ngữ).</p>
        </div>
        <div className="feature-card">
          <h4>Luyện tập và kiểm tra</h4>
          <p>Sử dụng webcam của bạn để luyện tập ký hiệu và nhận phản hồi ngay lập tức về độ chính xác.</p>
        </div>
        <div className="feature-card">
          <h4>Từ điển toàn diện</h4>
          <p>Tìm kiếm trong cơ sở dữ liệu ký hiệu của chúng tôi với các ví dụ video để tra cứu nhanh chóng.</p>
        </div>
      </div>

      {/* Getting Started */}
      <div className="getting-started">
        <h3>Bắt đầu học</h3>
        <ol>
          <li>Khám phá mục <strong>Bài học</strong> để bắt đầu với các ký hiệu cơ bản.</li>
          <li>Luyện tập những gì bạn đã học trong mục <strong>Bài kiểm tra</strong>.</li>
          <li>Tra cứu các ký hiệu cụ thể trong mục <strong>Tra cứu</strong>.</li>
        </ol>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="logo">
          <div className="hand-circle">
            <span className="hand-icon">🤟</span>
          </div>
          <span>Yêu Ngôn ngữ</span>
        </div>
        <p>© 2025 Bản quyền. | Thiết kế vì sự tiếp cận dành cho mọi người</p>
      </footer>
    </div>
  );
}

export default Home;