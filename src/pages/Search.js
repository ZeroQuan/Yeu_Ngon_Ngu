import React, { useState } from 'react';
import signsData from '../data/signs.json';
import SignCard from '../components/SignCard';
import './Search.css';

const Search = () => {
  const [query, setQuery] = useState('');

  // Lọc các ký hiệu dựa trên từ khóa
  const filteredSigns = signsData.filter((sign) =>
    sign.word && sign.word.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      <h1 className="search-title">Tìm Ký Hiệu</h1>
      <input
        type="text"
        className="search-input"
        placeholder="Nhập từ khóa..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {filteredSigns.length > 0 ? (
        <div className="signs-grid">
          {filteredSigns.map((sign) => (
            <SignCard
              key={sign.id}
              word={sign.word}
              videoUrl={sign.videoUrl}
              description={sign.description}
            />
          ))}
        </div>
      ) : (
        <p className="no-results">Không tìm thấy ký hiệu nào.</p>
      )}
    </div>
  );
};

export default Search;