import springImage from '../../assets/images/spring.jpg';
import summerImage from '../../assets/images/summer.jpg';
import autumnImage from '../../assets/images/autumn.jpg';
import winterImage from '../../assets/images/winter.jpg';
import { useEffect, useState } from 'react';
import styles from "./Main.module.css"


function Main(){

    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        const month = new Date().getMonth();

        if (month >= 3 && month < 6) {
            setBackgroundImage(springImage);
        } else if (month >= 6 && month < 9) {
            setBackgroundImage(summerImage);
        } else if (month >= 9 && month < 12) {
            setBackgroundImage(autumnImage);
        } else {
            setBackgroundImage(winterImage);
        }
    }, []);

    return(
        <div className={styles.mainStyle}  style={{ backgroundImage: `url(${backgroundImage})` }}>
           <div className={styles.mainDiv}>
            <p className={styles.mainText}>Todo List</p>
           </div>
           <div className={styles.mainDiv}>
            <p className={styles.mainText}>Menu</p>
           </div>

            </div>
    )
}

export default Main