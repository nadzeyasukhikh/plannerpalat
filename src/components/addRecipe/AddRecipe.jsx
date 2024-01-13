import { useEffect, useState } from "react";
import styles from "./AddRecipe.module.css";
import useBackgroundImage from "../../useBackgroundImage";
import { useNavigate } from "react-router-dom";


function AddRecipe() {
  const [title, setTitle] = useState("");
  const [recipeText, setRecipeText] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const [image, setImage] = useState(null);
  const [categories, setCategories] = useState([]);
  const [titleError, setTitleError] = useState(""); 
  const [recipeTextError, setRecipeTextError] = useState(""); 
  const [categoryIdError, setCategoryIdError] = useState(""); 
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const backgroundImage = useBackgroundImage();

  const navigate = useNavigate()
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("http://localhost:3001/categories");
        if (!response.ok) {
          throw new Error(`Ошибка: ${response.status}`);
        }
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Ошибка при загрузке категорий:", error);
      }
    };

    fetchCategories();
   
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    
    setTitleError("");
    setRecipeTextError("");
    setCategoryIdError("");
  
    
    if (title.trim() === "") {
      setTitleError("Recipe name is required");
      return;
    }
  
    if (recipeText.trim() === "") {
      setRecipeTextError("Recipe text is required");
      return;
    }
  
    if (categoryName === "") {
      setCategoryIdError("Category is required");
      return;
    }
  
    const formData = new FormData();
    formData.append("title", title);
    formData.append("recipeText", recipeText);
    formData.append("categoryName", categoryName); 
    if (image) {
      formData.append("image", image);
    }
  
    try {
      const response = await fetch("http://localhost:3001/recipes", {
        method: "POST",
        body: formData,
      });
  
      if (!response.ok) {
        throw new Error(`Ошибка: ${response.status}`);
      }
  
      const result = await response.json();
      console.log("Рецепт добавлен:", result);
      setShowSuccessModal(true);
      setTitle("");
      setRecipeText("");
      setCategoryName("");
      setImage(null);
    } catch (error) {
      console.error("Ошибка при добавлении рецепта:", error);
    }
  };
  
  const closeModal = () => {
   
    setShowSuccessModal(false);
  };

  return (
    <div className={styles.addRecip} style={{ backgroundImage: `url(${backgroundImage})` }}>
       <div className={styles.btnTitle}>
        <button className={styles.btnTwo} onClick={() => navigate("/menu")}>back</button>
             <h2 className={styles.title}>Add Recipe</h2>
             </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe name:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
          {titleError && <p className={styles.error}>{titleError}</p>}
        </div>
        <div>
          <label>Recipe text:</label>
          <textarea value={recipeText} onChange={(e) => setRecipeText(e.target.value)} />
          {recipeTextError && <p className={styles.error}>{recipeTextError}</p>}
        </div>
        <div>
          <label>Category:</label>
          <select value={categoryName} onChange={(e) => setCategoryName(e.target.value)}>
            <option value="">Choose category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.name}>
                {category.name}
              </option>
            ))}
          </select>
          {categoryIdError && <p className={styles.error}>{categoryIdError}</p>}
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button className={styles.addBtn} type="submit">Add recipe</button>
      </form>
      {showSuccessModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <p>Recipe added successfully!</p>
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default AddRecipe;