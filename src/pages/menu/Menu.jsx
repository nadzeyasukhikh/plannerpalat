
import styles from "./Menu.module.css"
import { useNavigate } from "react-router-dom";
import useBackgroundImage from "../../useBackgroundImage.js";

function Menu(){
    
    
    const navigate = useNavigate()
    const backgroundImage = useBackgroundImage();

    

    return(
    
        <div className={styles.menuDiv} style={{ backgroundImage: `url(${backgroundImage})` }}>
        
            <div className={styles.categoryesDiv} onClick={() => navigate("/caregoryes")}>
                <p className={styles.categoryesText}>CATEGORIES</p>
            </div>
            <div className={styles.categoryesDiv}>
                <p className={styles.categoryesText} onClick={() => navigate("/allrecipes")}>ALL RECIPES</p>
            </div>
            <div className={styles.categoryesDiv}>
                <p className={styles.categoryesText} onClick={() => navigate("/addrecipe")}>ADD RECIPE</p>
            </div>
            </div>
           
    )
}
export default Menu