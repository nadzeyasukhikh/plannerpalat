import { useEffect, useState } from "react";
import styles from "./AddRecipe.module.css"
import autumn from "../assets/images/todoautumn.jpg"
import spring from "../assets/images/todospring.jpg"
import summer from "../assets/images/todosummer.jpg"
import winter from "../assets/images/todowinter.jpg"

function AddRecipe() {
    const [title, setTitle] = useState('');
    const [recipeText, setRecipeText] = useState('');
    const [categoryId, setCategoryId] = useState('');
    const [image, setImage] = useState(null);
    const [categories, setCategories] = useState([]);
    const [backgroundImage, setBackgroundImage] = useState('');
  
    useEffect(() => {
      const fetchCategories = async () => {
        try {
          const response = await fetch('http://localhost:3001/categories');
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }
          const data = await response.json();
          setCategories(data);
        } catch (error) {
          console.error('Ошибка при загрузке категорий:', error);
        }
      };
  
      fetchCategories();
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
  
    const handleSubmit = async (e) => {
        e.preventDefault();
      
        const formData = new FormData();
        formData.append('title', title);
        formData.append('recipeText', recipeText);
        formData.append('categoryId', categoryId);
        if (image) {
          formData.append('image', image);
        }
      
        try {
          const response = await fetch('http://localhost:3001/recipes', {
            method: 'POST',
            body: formData,
          });
      
          if (!response.ok) {
            throw new Error(`Ошибка: ${response.status}`);
          }
      
          const result = await response.json();
          console.log('Рецепт добавлен:', result);
          
        } catch (error) {
          console.error('Ошибка при добавлении рецепта:', error);
        }
      };
  
    return (
        <div className={styles.addRecip} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <h2 className={styles.title}>ADD RECIPE</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Recipe name:</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div>
          <label>Recipe text:</label>
          <textarea value={recipeText} onChange={(e) => setRecipeText(e.target.value)} />
        </div>
        <div>
          <label>Category:</label>
          <select value={categoryId} onChange={(e) => setCategoryId(e.target.value)}>
            <option value="">Choose category</option>
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        </div>
        <button type="submit">Add recipe</button>
      </form>
      </div>
    );
  }
  
  export default AddRecipe;