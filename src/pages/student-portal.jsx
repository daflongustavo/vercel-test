import React from "react";
import Layout from "@/components/Layout/layout";
import CourseCardStudentPortal from "@/components/CourseCardStudentPortal/CourseCardStudentPortal";
import CourseCardListStudentPortal from "@/components/CourseCardStudentPortal/CourseCardListStudentPortal";

const StudentPortal = () => {
    let user_courses = [{}, {}, {}, {}]


    return (
        <>
            <Layout pageHeaderTittle=".PortalDoEstudante">
                <CourseCardListStudentPortal user_courses={user_courses}/>
            </Layout>
        </>
    );
};

export default StudentPortal;