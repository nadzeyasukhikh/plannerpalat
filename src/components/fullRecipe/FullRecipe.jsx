import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useBackgroundImage from "../../useBackgroundImage";
import styles from "./FullRecipe.module.css"

function FullRecipe(){
    const { recipeId } = useParams()
    const [recipeData, setRecipeData] = useState(null);
    const backgroundImage = useBackgroundImage();
    const navigate = useNavigate()

    useEffect(() => {
        const fetchRecipeData = async () => {
            try {
                const response = await fetch(`http://localhost:3001/recipes/${recipeId}`);

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                  }
                  const data = await response.json();
                  setRecipeData(data);
            } catch (error) {
                console.error('Ошибка при запросе данных о рецепте:', error);
              }
        };
        fetchRecipeData()
    }, [recipeId]);

    return (
        <div className={styles.recipeDiv} style={{ backgroundImage: `url(${backgroundImage})` }}>
             <h2 className={styles.title}>Recipe</h2>
      {recipeData ? (
        <div >
        
          <button className={styles.btn} onClick={() => navigate("/caregoryes")}>categoryes</button>
          <button className={styles.btn} onClick={() => navigate("/allrecipes")}>All recipes</button>
          <h3 className={styles.recipeTitle}>{recipeData.title}</h3>
          
          <div className={styles.imgText}>
            <div className={styles.imgSolyd}>
          <img className={styles.icon} src={recipeData.imageUrl} alt={recipeData.title} />
          </div>
          <p className={styles.text}>{recipeData.recipeText}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
        </div>
    )
}

export default FullRecipe