import styles from "./PageHeader.module.css"
import React from "react";

const PageHeader = ({ tittle ,description= null }) => {
    return (
        <div className={description ? styles.PageHeaderWithDescription : styles.PageHeader}>
            <div>
                <h2>
                    { tittle }
                </h2>
                <p className="text-md  md:text-2xl  mt-10 text-justify md:w-1/2">
                    Invista em você e se torne um profissional excepcional de Backend e
                    DevOps com nossos cursos. Com nossa orientação especializada e
                    prática, você estará preparado para enfrentar qualquer desafio em
                    seu trabalho e elevar sua carreira a novos patamares.
                </p>
            </div>
        </div>
    );
}

export default PageHeader;