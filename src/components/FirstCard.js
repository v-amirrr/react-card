import React, { useState } from 'react';

import { HiDotsHorizontal } from 'react-icons/hi';
import { FaRegBookmark, FaRegHeart, FaRegComment } from 'react-icons/fa';

import styles from "./FirstCard.module.css";

const FirstCard = () => {

    const [menuShow, setMenuShow] = useState(false);

    return (
        <>
            <div className={styles["card-first"]}>
                <div className={styles["card-first-date"]}>
                    <p>12</p>
                    <p>AUG</p>
                    <p>2016</p>
                </div>

                <div className={styles["card-first-box"]}>
                    <div className={menuShow ? styles["menu-show"] : styles["menu-hide"]}>
                        <div>
                            <p>2</p>
                            <i><FaRegBookmark /></i>
                        </div>

                        <div>
                            <p>47</p>
                            <i><FaRegHeart /></i>
                        </div>

                        <div>
                            <p>8</p>
                            <i><FaRegComment /></i>
                        </div>
                    </div>

                    <div className={styles["card-first-box-header"]}>
                        <p>Jane Doe</p>
                        <i onClick={() => setMenuShow(prevState => !prevState)}><HiDotsHorizontal /></i>
                    </div>

                    <h1 className={styles["card-first-box-title"]}>Boxing icon has the will for a couple more fights</h1>
                    <p className={styles["card-first-box-detail"]}>The highly anticipated world championship fight will take place at 10am and is the second major boxing blockbuster in the nation after 43 years.</p>
                </div>
            </div>
        </>
    );
};

export default FirstCard;