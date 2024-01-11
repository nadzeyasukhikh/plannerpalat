import { useEffect, useState } from "react";
import autumn from "../../assets/images/todoautumn.jpg"
import spring from "../../assets/images/todospring.jpg"
import summer from "../../assets/images/todosummer.jpg"
import winter from "../../assets/images/todowinter.jpg"
import styles from "./Menu.module.css"
import { useNavigate } from "react-router-dom";


function Menu(){
    
    const [backgroundImage, setBackgroundImage] = useState('');
    const navigate = useNavigate()

    useEffect(() => {
        

            const month = new Date().getMonth();
            if (month >= 3 && month < 6) {
                setBackgroundImage(spring);
            } else if (month >= 6 && month < 9) {
                setBackgroundImage(summer);
            } else if (month >= 9 && month < 12) {
                setBackgroundImage(autumn);
            } else {
                setBackgroundImage(winter);
            }
        }, []);

    return(
    
        <div className={styles.menuDiv} style={{ backgroundImage: `url(${backgroundImage})` }}>
        
            <div className={styles.categoryesDiv} onClick={() => navigate("/caregoryes")}>
                <p className={styles.categoryesText}>CATEGORIES</p>
            </div>
            <div className={styles.categoryesDiv}>
                <p className={styles.categoryesText}>ALL RECIPES</p>
            </div>
            <div className={styles.categoryesDiv}>
                <p className={styles.categoryesText} onClick={() => navigate("/addrecipe")}>ADD RECIPE</p>
            </div>
            </div>
           
    )
}
export default Menu