import React,{useState,useEffect} from "react"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Meals from "./components/Meals";
import Logs from "./components/Logs/Logs";

function App() {
    // States
    const [calories, setCalories] = useState({
        in: 0,
        out: 2381,
        proteinTotal: 203,
        protein: 0,
        carbsTotal: 270,
        carbs: 0,
        fatsTotal: 61,
        fats: 0
    });
    const [page, setPage] = useState("Home");
    const [meals,setMeals] = useState([]);
    const [today, setToday] = useState();
    const logs = [];
    // Load meals from previous session 
    useEffect(() => {
        for(let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            setMeals(prevMeal => [...prevMeal,JSON.parse(window.localStorage.getItem(key))]);
        }
    },[]);
    // Saves meals to localStorage
    useEffect(() => {
        meals.forEach(element => {
            window.localStorage.setItem(element.mealName,JSON.stringify(element));
        });
    },[meals]);
    // Updates Time
    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date().toLocaleTimeString());
        },1000);
        // Resets Calories at Midnight
        if(today === "12:00:00 AM") {
            setCalories({
                in: 0,
                out: 2381,
                proteinTotal: 203,
                protein: 0,
                carbsTotal: 270,
                carbs: 0,
                fatsTotal: 61,
                fats: 0
            });
        } 

        return () => {
            clearInterval(timer);
        }
    });
    
    return (
        <div>
            <NavBar
            calories = {calories}
            setCalories = {setCalories}
            page = {page}
            meals = {meals}
            today = {today}
            changePage = { (event)=> setPage(event.target.id)} 
            />
            {page === "Home" && <Home 
            calories = {calories}
            />}
            {page === "Meals" && <Meals 
            meals = {meals}
            setMeals = {setMeals}/>}
            {page === "Logs" && <Logs />}
        </div>
    )
}

export default App;