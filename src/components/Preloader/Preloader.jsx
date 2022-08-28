import React from 'react';
import style from "./Preloader.module.css";

const Preloader = () => {
    return (
        <div className={style.cont}>
            <svg className={style.circular} height="48" width="48">
                <circle className={style.path} cx="25" cy="25" r="20" fill="none" strokeWidth="5"
                        strokeMiterlimit="10"/>
            </svg>
        </div>
    );
};

export default Preloader;
