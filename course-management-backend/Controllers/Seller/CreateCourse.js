const courses = require("../../Models/Courses");
const seller = require("../../Models/Seller");

async function CreateCourse(req, res) {
  console.log("Reached Inside Create Course");
  try {
    let { 
      CourseTitle,
      CourseDescription,
      CourseCategory,
      CourseLanguage,
      CourseLevel,
      CourseDuration,
      CoursePrice,
      CourseImage,
      Status,
      Prerequisites,
      inputValues,
      CreatedBy
     } =
      req.body; // input from user

    console.log(req.body);

    if (!req.body) {
      res.status(400);
      return res.send(JSON.stringify({ message: "all input required" }));
    }

    {
      const CreateCourse = await courses.create({
      title:CourseTitle ,
      imageLink: CourseImage,
      description: CourseDescription,
      price: CoursePrice,
      language:CourseLanguage ,
      duration:CourseDuration ,
      level:CourseLevel ,
      whatYoullLearn:inputValues ,
      category:CourseCategory,
      prerequisites:Prerequisites ,
      createdBy:CreatedBy ,
      published:Status ,
        
      });

      if (CreateCourse) {
        console.log("Created the Data");
        // Update the ID of course into Seller profile.published Courses
        const sellerdata = await seller.findOne({ _id: CreatedBy });
        const updatecourse = await sellerdata.publishedCourses.push(
          CreateCourse._id
        );
        await sellerdata.save();
        if (!updatecourse) {
          return res.status(500).json({ msg: "Problemm in storing course" });
        }

        return res.status(200).json({ msg: "Your Course Generate" });
      } else {
        return res.status(500).json({ msg: "Internal Server Error" });
      }
    }
  } catch (err) {
    console.log("Error in Register route:", err.message);
    return res.status(500);
  }
}

module.exports = CreateCourse;
