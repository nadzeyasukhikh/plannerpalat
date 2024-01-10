import { useEffect, useState } from "react";
import autumn from "../assets/images/todoautumn.jpg"
import spring from "../assets/images/todospring.jpg"
import summer from "../assets/images/todosummer.jpg"
import winter from "../assets/images/todowinter.jpg"
import styles from "./MenuCategoryes.module.css"

function MenuCategoryes(){
    const [categories, setCategories] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
        fetch('http://localhost:3001/categories') 
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                setCategories(data);
            })
            .catch(error => {
                console.error('Error fetching categories:', error);
            });

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


    return (
        <div className={styles.menuDiv} style={{ backgroundImage: `url(${backgroundImage})` }}>
        {categories.map(category => (
        <div key={category.id}>
            <h2>{category.name}</h2>
            <img className={styles.iconStyle} src={`http://localhost:3001${category.imageUrl}`} alt={category.name} />
        </div>
    ))}
        </div>
    )
}
export default MenuCategoryes