import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <Link to="/" className="logo" aria-label="Trang chủ">
        <div className="hand-circle">
          <span className="hand-icon">🤟</span>
        </div>
        <h1 className="logo-text">Yêu Ngôn Ngữ</h1>
      </Link>

      <nav className="nav">
        <NavLink to="/" end className="nav-link">Trang chủ</NavLink>
        <NavLink to="/learn" className="nav-link">Bài học</NavLink>
        <NavLink to="/test" className="nav-link">Bài kiểm tra</NavLink>
        <NavLink to="/search" className="nav-link">Tra từ điển</NavLink>
      </nav>

      <div className="actions">
        <button className="action-btn" title="Tạo nhanh">+</button>
        <span className="ai-icon">AI</span>
      </div>
    </header>
  );
};

export default Header;