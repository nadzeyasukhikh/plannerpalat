import { Link } from "react-router-dom"
import logo from "../../assets/images/logo.jpg"
import styles from "./Nav.module.css"
import { useEffect, useState } from "react";

function Nav(){

    const [currentTime, setCurrentTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const timeString = currentTime.toLocaleTimeString();
    const dateString = currentTime.toLocaleDateString('default', { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' });


    return(
        <div className={styles.nav}>
            <div className={styles.imgTxt}>
           <img className={styles.logoImg} src={logo} alt="logo" />
           <p className={styles.titleLogo}>My Planner Palat</p>
           </div>
           <div className={styles.time}>
                <p className={styles.timeStyle}>{timeString}</p>
                <p className={styles.timeStyle}>{dateString}</p>
            </div>
           <div className={styles.link}>
           <Link className={styles.linkStyles} to="/">Home</Link>
           <Link className={styles.linkStyles} to="/todo">Todo List</Link>
           <Link className={styles.linkStyles} to="/menu">Menu</Link>
           </div>
        </div>
    )
}

export default Nav