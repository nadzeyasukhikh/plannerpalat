import { useEffect, useState } from "react";
import autumn from "../../assets/images/todoautumn.jpg"
import spring from "../../assets/images/todospring.jpg"
import summer from "../../assets/images/todosummer.jpg"
import winter from "../../assets/images/todowinter.jpg"
import styles from "./TodoList.module.css"

function TodoList(){
    const [backgroundImage, setBackgroundImage] = useState('');

    useEffect(() => {
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

    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    useEffect(() => {
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
        setTasks(storedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

    const handleAddTask = (event) => {
        event.preventDefault()
        if (newTask.trim() !== '') {
            setTasks([...tasks, { id: Date.now(), text: newTask, completed: false }]);
            setNewTask('');
        }
    };

    const handleTaskChange = (id) => {
        setTasks(tasks.map(task => 
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    const handleDeleteTask = (id) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return(
        <div className={styles.todoDiv} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <form className={styles.todoForm} onSubmit={handleAddTask}>
             <input 
             className={styles.inputForm}
                type="text"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="Add a new task"
            />
            <button className={styles.taskBtn} type="submit">Add Task</button>
            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <div className={styles.liStyle}>
                        <input 
                        className={styles.checkbox}
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => handleTaskChange(task.id)}
                        />
                        <p className={styles.todoText}>{task.text}</p>
                        <button className={styles.deleteBtn} onClick={() => handleDeleteTask(task.id)}>Delete</button>
                        </div>
                    </li>
                ))}
            </ul>
            </form>
            </div>
    )
}
export default TodoList