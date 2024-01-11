
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './pages/header/Nav';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import TodoList from './pages/todoList/TodoList';
import Menu from './pages/menu/Menu';
import MenuCategoryes from './components/MenuCategoryes';
import AddRecipe from './components/AddRecipe';


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
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
