import React, { useState, useCallback } from "react";
import "./Test.css";

const Test = () => {
  const questions = [
    {
      video: "https://qipedc.moet.gov.vn/videos/W03990.mp4?autoplay=true",
      options: ["A. Xin chào", "B. Cảm ơn", "C. Tạm biệt", "D. Xin lỗi"],
      answer: "D. Xin lỗi",
    },
    {
      video: "https://qipedc.moet.gov.vn/videos/W00482.mp4?autoplay=true",
      options: ["A. Ông bà", "B. Ba mẹ", "C. Con gái", "D. Con trai"],
      answer: "B. Ba mẹ",
    },
    {
      video: "https://qipedc.moet.gov.vn/videos/D0029N.mp4?autoplay=true",
      options: ["A. Thói quen", "B. Cảm ơn", "C. Tham ăn", "D. Cười vỡ bụng"],
      answer: "A. Thói quen",
    },
    {
      video: "https://qipedc.moet.gov.vn/videos/D0026.mp4?autoplay=true",
      options: ["A. Hói đầu", "B. Lung tung", "C. Hấp dẫn", "D. Thèm"],
      answer: "D. Thèm",
    },
    {
      video: "https://qipedc.moet.gov.vn/videos/D0018.mp4?autoplay=true",
      options: ["A. Nổi da gà", "B. Ghen tị", "C. Mù chữ", "D. Vô tình"],
      answer: "A. Nổi da gà",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const [showFeedback, setShowFeedback] = useState(false); // hiển thị đúng/sai sau khi bấm kiểm tra

  const total = questions.length;
  const q = questions[current];
  const progress = Math.round((current / total) * 100);

  const handleSelect = (opt) => {
    if (showFeedback) return; // khóa chọn khi đang hiển thị feedback
    setSelected(opt);
  };

  const goNext = useCallback(() => {
    setSelected("");
    setShowFeedback(false);
    setCurrent((c) => c + 1);
  }, []);

  const handleCheck = () => {
    if (!q) return;
    if (!showFeedback) {
      // lần đầu bấm -> chấm điểm + show feedback
      if (selected && selected === q.answer) setScore((s) => s + 1);
      setShowFeedback(true);
    } else {
      // đang feedback -> sang câu kế tiếp
      goNext();
    }
  };

  const handleSkip = () => {
    if (!showFeedback) {
      // skip khi chưa chấm
      goNext();
    } else {
      // nếu đang feedback thì cũng coi như tiếp tục
      goNext();
    }
  };

  const restart = () => {
    setCurrent(0);
    setScore(0);
    setSelected("");
    setShowFeedback(false);
  };

  if (current >= total) {
    return (
      <div className="test">
        <div className="card score">
          <h2>Bạn được {score}/{total} điểm</h2>
          <p className="subtitle">Luyện thêm để quen động tác nhé!</p>
          <button className="btn again" onClick={restart}>Làm lại</button>
        </div>
      </div>
    );
  }

  return (
    <div className="test">
      <div className="card">
        
          <h1>Bài kiểm tra</h1>
          <span className="subtitle">Chọn đáp án đúng theo video minh họa</span>

        <div className="media">
          {/* lấy video theo câu hiện tại */}
          <video src={q.video} autoPlay loop muted playsInline />
        </div>

        <div className="options">
          {q.options.map((opt) => {
            const isSelected = selected === opt;
            // tô viền xanh/đỏ khi showFeedback
            const isCorrect = showFeedback && opt === q.answer;
            const isIncorrect = showFeedback && isSelected && opt !== q.answer;

            const classes = [
              "option",
              isSelected ? "selected" : "",
              isCorrect ? "correct" : "",
              isIncorrect ? "incorrect" : "",
            ].join(" ").trim();

            return (
              <button
                key={opt}
                className={classes}
                onClick={() => handleSelect(opt)}
                disabled={showFeedback} // khóa khi đang feedback
              >
                {opt}
              </button>
            );
          })}
        </div>

        <div className="actions">
          <button
            className="btn"
            onClick={handleCheck}
            disabled={!selected && !showFeedback}
            title={!selected && !showFeedback ? "Hãy chọn một đáp án" : ""}
          >
            {showFeedback ? "Tiếp tục" : "Kiểm tra"}
          </button>
          <button className="btn secondary" onClick={handleSkip}>
            Bỏ qua
          </button>
        </div>

        <div className="meta">
          <div className="progress">
            <span style={{ "--progress": `${progress}%` }} />
          </div>
          <span>{current + 1}/{total}</span>
        </div>
      </div>
    </div>
  );
};

export default Test;