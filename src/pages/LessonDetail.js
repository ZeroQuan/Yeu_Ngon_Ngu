import React from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactPlayer from 'react-player'
import './LessonDetail.css';


const LessonDetail = () => {

    // Lấy ID từ URL
    const { id } = useParams();

    // Dữ liệu mẫu cho các bài học, sử dụng URL trực tuyến và cục bộ
    const lessons = [
        {
            id: 1,
            title: "Bài học cơ bản 1",
            description: "Học các ký hiệu chữ số",
            videos: [
                { id: 'v1', title: "1", src: "https://qipedc.moet.gov.vn/videos/D0530.mp4?autoplay=true" },
                { id: 'v2', title: "2", src: "https://qipedc.moet.gov.vn/videos/D0531.mp4?autoplay=true" },
                { id: 'v3', title: "3", src: "https://qipedc.moet.gov.vn/videos/D0532.mp4?autoplay=true" },
                { id: 'v4', title: "4", src: "https://qipedc.moet.gov.vn/videos/D0533.mp4?autoplay=true" },
                { id: 'v5', title: "5", src: "https://qipedc.moet.gov.vn/videos/D0534.mp4?autoplay=true" },
                { id: 'v6', title: "10", src: "https://qipedc.moet.gov.vn/videos/D0539.mp4?autoplay=true" },
            ]
        },
        {
            id: 2,
            title: "Bài học cơ bản 2",
            description: "Tìm hiểu các ký hiệu về gia đình",
            videos: [
                { id: 'v10', title: "Cha mẹ", src: "https://qipedc.moet.gov.vn/videos/W00482.mp4?autoplay=true" },
                { id: 'v11', title: "Chú", src: "https://qipedc.moet.gov.vn/videos/W00506.mp4?autoplay=true" },
                { id: 'v12', title: "Họ", src: "https://qipedc.moet.gov.vn/videos/D0137.mp4?autoplay=true" },
                { id: 'v13', title: "Ông bà", src: "https://qipedc.moet.gov.vn/videos/D0151N.mp4?autoplay=true" },
                
            ]
        },
        {
            id: 3,
            title: "Bài học nâng cao",
            description: "Ký hiệu phức tạp cho giao tiếp hàng ngày",
            videos: [
                { id: 'v15', title: "Chào mừng", src: "https://qipedc.moet.gov.vn/videos/W00492.mp4?autoplay=true" },
                { id: 'v16', title: "Gặp gỡ", src: "https://qipedc.moet.gov.vn/videos/W01395.mp4?autoplay=true" },
                { id: 'v17', title: "Niềm vui", src: "https://qipedc.moet.gov.vn/videos/W02517.mp4?autoplay=true" },
                { id: 'v18', title: "Ngày giỗ tổ Hùng Vương", src: "https://qipedc.moet.gov.vn/videos/D0051N.mp4?autoplay=true" },
                { id: 'v19', title: "Ngày Ngôn ngữ kí hiệu Quốc tế 23/9", src: "https://qipedc.moet.gov.vn/videos/D0052N.mp4?autoplay=true" },
            ]
        },
    ];

    // Tìm bài học dựa trên ID
    const lesson = lessons.find((l) => l.id === parseInt(id));

    if (!lesson) {
        return <div className="container mx-auto p-4">Bài học không tìm thấy</div>;
    }
  
    return (
        <div className="lesson-detail-container">
            <h1 className="lesson-detail-title">{lesson.title}</h1>
            <p className="lesson-detail-description">{lesson.description}</p>

            {/* Danh sách video */}
            <div className="videos-grid">
                {lesson.videos.map((video) => (
                    <div key={video.id} className="video-card">
                        <h3 className="video-title">{video.title}</h3>
                        <div className="video-player">
                            <ReactPlayer
                                url={video.src}
                                width="100%"
                                height="200px" // Chiều cao theo yêu cầu
                                controls={true}
                                playing={false}
                                config={{
                                    file: {
                                        attributes: {
                                            controlsList: 'nodownload', // Ngăn tải video
                                        },
                                    },
                                }}
                                onError={(e) => console.log(`Lỗi phát video ${video.title}:`, e)} // Debug lỗi
                            />
                        </div>
                    </div>
                ))}
            </div>

            {/* Nút quay lại */}
            <div className="back-button">
                <Link to="/learn" className="back-link">Quay lại Bài học</Link>
            </div>
        </div>
    );
};

export default LessonDetail;