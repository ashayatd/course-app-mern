import React, { useState } from "react";
import { useNavigate } from "react-router";

function Draft() {
  const navigate = useNavigate();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [courseDataArray, ] = useState([
    {
      "title": "Introduction to Python Programming",
      "imageLink": "https://i.postimg.cc/K3f93kVt/python-course.jpg",
      "description": "Dive into the world of programming with our 'Introduction to Python Programming' course. Python is a versatile and beginner-friendly language used in web development, data analysis, and more. In this course, you'll learn the fundamentals of Python, including basic syntax, data types, control structures, functions, and modules. Whether you're a complete beginner or have some coding experience, this course will equip you with essential programming skills.",
      "price": 49.99,
      "language": "English",
      "duration": 30,
      "level": "Beginner",
      "whatYoullLearn": [
        "Basic Python syntax",
        "Data types and variables",
        "Control structures",
        "Functions and modules"
      ],
      "category": "Programming",
      "prerequisites": "No prior programming experience required.",
      "createdBy": "John Doe",
      "published": true
    },
    {
      "title": "Web Development with React",
      "imageLink": "https://i.postimg.cc/xNfwZ2Vy/react-course.jpg",
      "description": "Embark on a journey to build modern web applications with our 'Web Development with React' course. React is a popular JavaScript library used for creating user interfaces. In this course, you'll explore React components and state management, learn about routing with React Router, integrate APIs, and master responsive design techniques. Whether you're an aspiring web developer or looking to enhance your skills, this course will empower you to create interactive web apps.",
      "price": 79.99,
      "language": "English",
      "duration": 45,
      "level": "Intermediate",
      "whatYoullLearn": [
        "React components and state",
        "Routing with React Router",
        "API integration",
        "Responsive design"
      ],
      "category": "Web Development",
      "prerequisites": "Basic knowledge of HTML, CSS, and JavaScript.",
      "createdBy": "Jane Smith",
      "published": true
    },
    {
      "title": "Data Science Fundamentals",
      "imageLink": "https://i.postimg.cc/kD7PGxR6/data-science-course.jpg",
      "description": "Explore the fascinating world of data science and analytics with our 'Data Science Fundamentals' course. Data science is at the heart of modern decision-making, and this course will equip you with the essential skills to analyze data effectively. Learn data analysis with Python, dive into machine learning algorithms, create compelling data visualizations, and gain proficiency in statistics and hypothesis testing. Whether you're a data enthusiast or pursuing a career in data science, this course is your gateway to data-driven insights.",
      "price": 69.99,
      "language": "English",
      "duration": 60,
      "level": "Intermediate",
      "whatYoullLearn": [
        "Data analysis with Python",
        "Machine learning algorithms",
        "Data visualization",
        "Statistics and hypothesis testing"
      ],
      "category": "Data Science",
      "prerequisites": "Basic Python knowledge and understanding of statistics.",
      "createdBy": "Alice Johnson",
      "published": true
    },
    {
      "title": "Digital Marketing Essentials",
      "imageLink": "https://i.postimg.cc/9zBVYxHY/digital-marketing-course.jpg",
      "description": "Master the essentials of digital marketing Master the essentials of digital marketing Master the essentials of digital marketing strategies with our 'Digital Marketing Essentials' course. In today's digital age, marketing plays a crucial role in business success. This course will guide you through social media marketing, search engine optimization (SEO), content marketing, email marketing, and the art of tracking analytics and return on investment (ROI). Whether you're a marketing novice or want to refine your digital marketing skills, this course will empower you to create effective online marketing campaigns.",
      "price": 59.99,
      "language": "English",
      "duration": 40,
      "level": "Beginner",
      "whatYoullLearn": [
        "Social media marketing",
        "SEO and content marketing",
        "Email marketing",
        "Analytics and ROI tracking"
      ],
      "category": "Digital Marketing",
      "prerequisites": "No prior marketing experience required.",
      "createdBy": "David Brown",
      "published": true
    }
  ]);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handelShowBigDiv = (courseData) => {
    console.log(courseData._id);
    navigate(`/courseview/${courseData._id}`);
  };


  return (
    <React.Fragment>
      <h1 className="login-heading">
        Dra<span>ft</span>
      </h1>
      <div className="container">
      {courseDataArray.map((courseData, index) => (
          <div
            className="divtable"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            key={index}
          >
            <img src={courseData.imageLink} alt="graphic" className="pic1" />
            <div className="logoname">
              <h3 className="author">LIVE</h3>
              <div className="price">${courseData.price}</div>
            </div>
            <div className="tname">{courseData.title}</div>
            {hoveredIndex === index && (
              <div className="popup">
                <p className="popuptitle">{courseData.title}</p>{" "}
                  
                <p className="popupdesc">
                <p className="popuptitle"></p>
                {courseData.whatYoullLearn.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}
                  </li>
                ))}
                </p>
                <div className="two-buttons">
                <button
                  className="popupbutton"
                  onClick={(e) => {
                    handelShowBigDiv(courseData);
                  }}
                >
                  Read More
                </button>
                <button
                  className="popupbutton"
                >
                  Publish
                </button>
                </div>
              </div>
            )}
            <div className="description">
              {courseData.whatYoullLearn}
            </div>
          </div>
        ))}
      </div>
    </React.Fragment>
  );
}

export default Draft;
