import CourseCard from "@/components/CourseCard/CourseCard";
import React from "react";
import CourseCardStudentPortal from "@/components/CourseCardStudentPortal/CourseCardStudentPortal";
import styles from "./CourseCardListStudentPortal.module.css"



const CourseCardListStudentPortal = ({ user_courses }) => {
    return (
        <div className={styles.CourseCardListStudentPortal}>
            <ul>
                {user_courses.map((item, index) => (
                    <li key={index}>
                        <CourseCardStudentPortal
                            courseImage={item.courseImage}
                            courseDescription={item.courseDescription}
                            courseTittle={item.courseTittle}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseCardListStudentPortal