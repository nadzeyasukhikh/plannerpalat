
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Nav from './pages/header/Nav';
import Main from './pages/main/Main';
import Footer from './pages/footer/Footer';
import TodoList from './pages/todoList/TodoList';


function App() {
  return (
    <div className='app'>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/todo" element={<TodoList />} />
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
