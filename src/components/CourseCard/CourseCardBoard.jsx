import React from "react";
import CourseCard from "@/components/CourseCard/CourseCard";
import styles from "./CourseCardBoard.module.css";


let courselist = [
    { courseTittle: 'docker',courseDescription: 'docker compose and docker file', courseImage: 'https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon-thumbnail.png'},
    { courseTittle: 'docker',courseDescription: 'docker compose and docker file', courseImage: 'https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon-thumbnail.png'},
    { courseTittle: 'docker',courseDescription: 'docker compose and docker file', courseImage: 'https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon-thumbnail.png'},
    { courseTittle: 'docker',courseDescription: 'docker compose and docker file', courseImage: 'https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon-thumbnail.png'},
    { courseTittle: 'docker',courseDescription: 'docker compose and docker file', courseImage: 'https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon-thumbnail.png'},
    // { courseTittle: 'docker',courseDescription: 'docker compose and docker file', courseImage: 'https://w7.pngwing.com/pngs/627/244/png-transparent-docker-logo-logos-logos-and-brands-icon-thumbnail.png'}
]

const CourseCardBoard = ({ data= courselist }) => {
    return (
        <div className={styles.CourseCardBoard}>
            <ul>
                {courselist.map((item, index) => (
                    <li key={index}>
                        <CourseCard
                            courseImage={item.courseImage}
                            courseDescription={item.courseDescription}
                            courseTittle={item.courseTittle}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CourseCardBoard;
