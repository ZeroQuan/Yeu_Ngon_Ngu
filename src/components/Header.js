import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; // Assuming you have a CSS file for Header component styles

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <div className="hand-circle">
          <span className="hand-icon">🤟</span>
        </div>
        <h1 className="logo-text">Yêu Ngôn Ngữ</h1>
      </div>
      <nav className="nav">
        <Link to="/" className="nav-link">Trang chủ</Link>
        <Link to="/learn" className="nav-link">Bài học</Link>
        <Link to="/test" className="nav-link">Bài kiểm tra</Link>
        <Link to="/search" className="nav-link">Tra từ điển</Link>
      </nav>
      <div className="actions">
        <button className="action-btn">+</button>
        <span className="ai-icon">AI</span>
      </div>
    </header>
  );
};

export default Header;