import { useEffect, useState } from "react";

import styles from "./AllRecipes.module.css"
import useBackgroundImage from "../../useBackgroundImage";
import { useNavigate } from "react-router-dom";

function AllRecipes (){
    const [recipes, setRecipes] = useState([]);
    const [selectedRecipeId, setSelectedRecipeId] = useState(null);
    const [showConfirmationModal, setShowConfirmationModal] = useState(false);
    const backgroundImage = useBackgroundImage();
    const navigate = useNavigate()
    useEffect(() => {
        
        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3001/recipes");
                const data = await response.json();
                setRecipes(data); 
            } catch (error) {
                console.error("Ошибка при получении рецептов:", error);
            }
        };

        fetchData();
        
    }, []);

    const handleDeleteRecipe = async () => {
        if (selectedRecipeId) {
            try {
                const response = await fetch(`http://localhost:3001/recipes/${selectedRecipeId}`, {
                    method: "DELETE",
                });

                if (response.status === 204) {
                   
                    setRecipes((prevRecipes) => prevRecipes.filter((recipe) => recipe.id !== selectedRecipeId));
                } else {
                    console.error("Ошибка при удалении рецепта:", response.statusText);
                }
            } catch (error) {
                console.error("Ошибка при удалении рецепта:", error);
            }
        }

       
        setSelectedRecipeId(null);
        setShowConfirmationModal(false);
    };

    return (
        <div className={styles.allRecipesDiv} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.btnTitle}>
        <button className={styles.btnTwo} onClick={() => navigate("/menu")}>back</button>
             <h2 className={styles.title}>All Recipes</h2>
             </div>
            <div className={styles.cardDiv}>
                {recipes.length > 0 ? (
                    recipes.map((recipe) => (
                        <div className={styles.card} key={recipe.id}>
                            <img className={styles.iconStyle} src={recipe.imageUrl} alt={recipe.title} />
                            <p className={styles.name}>{recipe.title}</p>
                            <button className={styles.btn} onClick={() => {
        setSelectedRecipeId(recipe.id);
        setShowConfirmationModal(true);
    }}>X</button>
                        </div>
                    ))
                ) : (
                    <p>No recipes available</p>
                )}
            </div>
            {showConfirmationModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>Delete a recipe?</p>
                        <button className={styles.modalButtonYes} onClick={handleDeleteRecipe}>Yes</button>
                        <button className={styles.modalButtonNo} onClick={() => setShowConfirmationModal(false)}>No</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default AllRecipes