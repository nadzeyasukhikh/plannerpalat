
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './pages/header/Nav';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import TodoList from './pages/todoList/TodoList';
import Menu from './pages/menu/Menu';
import MenuCategoryes from './components/categories/MenuCategoryes';
import AddRecipe from './components/addRecipe/AddRecipe';
import AllRecipes from './components/allRecipes/AllRecipes';
import CategoriesProduct from './components/categoriesProducts/CategoriesProduct';
import FullRecipe from './components/fullRecipe/FullRecipe';


function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<TodoList />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/caregoryes" element={<MenuCategoryes />} />
        <Route path="/addrecipe" element={<AddRecipe />} />
        <Route path="/allrecipes" element={<AllRecipes />} />
        <Route path="/categories/:categoryId" element={<CategoriesProduct />} />
        <Route path="/fullrecipe/:recipeId" element={<FullRecipe />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
