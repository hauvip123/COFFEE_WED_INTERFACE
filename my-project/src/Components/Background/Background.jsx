import React from "react";
import { useState } from "react";
import {
  BookOpen,
  Clock,
  Star,
  Users,
  Calendar,
  DollarSign,
} from "lucide-react";

const courses = [
  {
    title: "TOEIC 450+ Cơ Bản",
    description: "Nền tảng từ vựng, ngữ pháp và kỹ năng làm bài cơ bản.",
    level: "Cơ bản",
    duration: "6 tuần",
    rating: "4.5",
    students: 1200,
    price: "1.200.000đ",
    startDate: "15/04/2025",
  },
  {
    title: "TOEIC 650+ Trung Cấp",
    description: "Rèn luyện kỹ năng Part 3-4-5-6, chiến thuật xử lý câu hỏi.",
    level: "Trung cấp",
    duration: "8 tuần",
    rating: "4.7",
    students: 950,
    price: "1.800.000đ",
    startDate: "22/04/2025",
  },
  {
    title: "TOEIC 800+ Nâng Cao",
    description: "Tăng tốc luyện đề và kỹ năng phản xạ đề thi thực tế.",
    level: "Nâng cao",
    duration: "10 tuần",
    rating: "4.9",
    students: 620,
    price: "2.400.000đ",
    startDate: "01/05/2025",
  },
];

const Background = () => {
  const [selectedCourse, setSelectedCourse] = useState(1);
  return (
    <div className="flex flex-col py-20 px-12 bg-blue-800 rounded-[48px] max-md:px-5 max-md:py-24">
      <div className="flex justify-between">
        <div className="text-white w-[60%] py-[62px] pr-[133px]">
          <div className="text-xl font-semibold leading-snug max-md:ml-2.5">
            Xin chào Bạn!
          </div>
          <div className="mt-5 text-5xl font-bold leading-[60px] max-md:max-w-full max-md:text-4xl max-md:leading-[56px]">
            Thiết kế lộ trình học dành riêng cho bạn, ngay tại đây!
          </div>
        </div>
        <div className="items-center w-[40%]">
          <img
            src="https://prepedu.com/images/bee/bee_select_level_2.png"
            className="w-full"
            alt="Bee mascot"
          />
        </div>
      </div>

      <div className="flex max-md:flex-col text-lg max-lg:text-base border border-solid font-bold gap-6 rounded-full max-md:rounded-md p-3 justify-around items-center bg-gray-100 m-10">
        <div
          onClick={() => setSelectedCourse(1)}
          className={`px-[90px] py-[30px] max-lg:px-[50px] text-center rounded-full cursor-pointer duration-300 hover:bg-opacity-90 ${
            selectedCourse === 1
              ? "text-black bg-blue-300"
              : "text-blue-800 bg-sky-100"
          }`}
        >
          TOEIC Listening & Reading
        </div>
        <div
          onClick={() => setSelectedCourse(2)}
          className={`px-[90px] py-[30px] max-lg:px-[50px] text-center rounded-full cursor-pointer duration-300 hover:bg-opacity-90 ${
            selectedCourse === 2
              ? "text-black bg-blue-300"
              : "text-blue-800 bg-sky-100"
          }`}
        >
          TOEIC Speaking & Writing
        </div>
        <div
          onClick={() => setSelectedCourse(3)}
          className={`px-[90px] py-[30px] max-lg:px-[50px] text-center rounded-full cursor-pointer duration-300 hover:bg-opacity-90 ${
            selectedCourse === 3
              ? "text-black bg-blue-300"
              : "text-blue-800 bg-sky-100"
          }`}
        >
          TOEIC 4 kỹ năng
        </div>
      </div>
      <div className="bg-gradient-to-br from-blue-50 to-indigo-100  py-10 px-4 rounded-xl">
        <h2 className="text-4xl font-bold text-center mb-14 text-indigo-700 drop-shadow">
          📘 Danh sách khóa học TOEIC{" "}
          {selectedCourse === 1 && "Listening & Reading"}
          {selectedCourse === 2 && "Speaking & Writing"}
          {selectedCourse === 3 && "4 kỹ năng"}
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white/80 backdrop-blur-md border-2 border-transparent hover:border-indigo-400 hover:shadow-2xl rounded-2xl p-6 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="mb-4">
                <h3 className="text-2xl font-semibold text-indigo-700 mb-2">
                  {course.title}
                </h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
              <div className="text-sm text-gray-700 mt-4 space-y-2">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  <span>
                    <strong>Cấp độ:</strong> {course.level}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <span>
                    <strong>Thời lượng:</strong> {course.duration}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>
                    <strong>Đánh giá:</strong> {course.rating}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-indigo-500" />
                  <span>
                    <strong>Học viên:</strong> {course.students}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  <span>
                    <strong>Khai giảng:</strong> {course.startDate}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-green-600" />
                  <span>
                    <strong>Học phí:</strong>{" "}
                    <span className="text-green-600 font-semibold">
                      {course.price}
                    </span>
                  </span>
                </div>
              </div>
              <div className="mt-6 text-right">
                <button className="bg-green-500 text-white px-4 py-2 rounded-xl text-sm hover:bg-green-600 transition">
                  Đăng ký khóa học
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Background;
