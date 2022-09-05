import React from 'react';

import { HiOutlineArrowNarrowRight } from 'react-icons/hi';
import { FaRegBookmark, FaRegHeart, FaRegComment } from 'react-icons/fa';

import styles from "./SecondCard.module.css";

const SecondCard = () => {
    return (
        <>
            <div className={styles["card-second"]}>
                <div className={styles["card-second-header"]}>
                    <p className={styles["card-second-header-date"]}>12 Aug 2016</p>
                    <div className={styles["card-second-header-icons"]}>
                        <div>
                            <i><FaRegBookmark /></i>
                        </div>

                        <div>
                            <p>13</p>
                            <i><FaRegHeart /></i>
                        </div>

                        <div>
                            <p>18</p>
                            <i><FaRegComment /></i>
                        </div>
                    </div>
                </div>
                
                <div className={styles["card-second-box"]}>
                    <div className={styles["card-second-box-header"]}>
                        <p>Jane Doe</p>
                    </div>

                    <h1 className={styles["card-second-box-title"]}>Stranger Things: The sound of the Upside Down</h1>
                    <p className={styles["card-second-box-detail"]}>The antsy bingers of Netflix will eagerly anticipate the digital release of the Survive soundtrack, out today.</p>
                    <div className={styles["card-second-box-button"]}>
                        <p>Read more</p>
                        <i className={styles["card-second-box-button-icon"]}><HiOutlineArrowNarrowRight /></i>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SecondCard;