import styles from "./Footer.module.css"

function Footer(){
    return(
        <div className={styles.footer}>
            <div>
                <p className={styles.title}>My contacts</p>
                <p className={styles.text}>Email: vitserresvit@gmail.com</p>
                <p className={styles.textTxt}>Phone number: +306986397429</p>
            </div>
            <div>
                <p className={styles.text}>made by: Nadzeya Sukhikh</p>
            </div>
        </div>
    )
}
export default Footer