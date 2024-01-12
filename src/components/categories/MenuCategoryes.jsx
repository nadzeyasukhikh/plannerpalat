import { useEffect, useState } from "react";
import styles from "./MenuCategoryes.module.css"
import { useNavigate } from "react-router-dom";
import useBackgroundImage from "../../useBackgroundImage";

function MenuCategoryes(){
    const [categories, setCategories] = useState([]);
    const backgroundImage = useBackgroundImage();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:3001/categories');
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();

        
        }, []);


    return (
        <div className={styles.menuDiv} style={{ backgroundImage: `url(${backgroundImage})` }}>
             <h2 className={styles.title}>CATEGORIES</h2>
            <div className={styles.cardDiv}>
               
        {categories.map(category => (
            
        <div className={styles.card} key={category.id}>
            <h2 className={styles.name}>{category.name}</h2>
            <img 
            className={styles.iconStyle} 
            src={`http://localhost:3001${category.imageUrl}`} 
            alt={category.name} 
             onClick={() => navigate(`/categories/${category.id}`)}
             />
        </div>
        
    ))}
        </div>
        </div>
    )
}
export default MenuCategoryes