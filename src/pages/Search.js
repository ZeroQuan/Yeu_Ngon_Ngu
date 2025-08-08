import React, { useMemo, useState, useEffect, useRef } from 'react';
import signsData from '../data/signs.json';
import SignCard from '../components/SignCard';
import './Search.css';

const strip = (s = '') =>
  s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

const Search = () => {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);

  useEffect(() => { inputRef.current?.focus(); }, []);

  const filteredSigns = useMemo(() => {
    const q = strip(query);
    if (!q) return signsData;
    return signsData.filter(sign => strip(sign.word || '').includes(q));
  }, [query]);

  return (
    <div className="search-container">
      <h1 className="search-title">Tìm từ điển ký hiệu</h1>

      <input
        ref={inputRef}
        type="text"
        className="search-input"
        placeholder="Nhập từ khóa..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        aria-label="Ô tìm kiếm ký hiệu"
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