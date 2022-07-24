import React,{useState,useEffect} from "react"
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Meals from "./components/Meals";
import Logs from "./components/Logs/Logs";
import Log from "./components/Logs/Log";

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
    const [mealLogs, setMealLogs] = useState([]);
    const [logs, setLogs] = useState([]);
    
    // Load meals, logs, and calories from previous session 
    useEffect(() => {
        for(let i = 0; i < window.localStorage.length; i++) {
            const key = window.localStorage.key(i);
            if(key === "calories") {
                setCalories(JSON.parse(window.localStorage.getItem(key)));
            } else if(key === "logs") {
                setMealLogs(JSON.parse(window.localStorage.getItem(key)));
            } else if(key === "logElement") {
                setLogs(JSON.parse(window.localStorage.getItem(key)));
            } else {
                setMeals(prevMeal => [...prevMeal,JSON.parse(window.localStorage.getItem(key))]);
            }
            
        }
    },[]);

    // Saves meals to localStorage
    useEffect(() => {
        meals.forEach(element => {
            window.localStorage.setItem(element.mealName,JSON.stringify(element));
        });
    },[meals]);
    // Saves Calories to localStorage
    useEffect(() => {
        window.localStorage.setItem("calories",JSON.stringify(calories));
    },[calories]);
    // Saves Logs to localStorage
    useEffect(() => {
        window.localStorage.setItem("logs",JSON.stringify(mealLogs));
    },[mealLogs]);
    //Saves Logs to LocalStorage
    useEffect(() => {
        window.localStorage.setItem("logElement",JSON.stringify(logs));
    },[logs]);
    

    // Updates and Maintain Daily Logs
    const addLog = () => {

        if(logs.length === 3) {
            setLogs(prevLogs => {
                return [{
                    mealLog : mealLogs,
                    cals: calories.in,
                    prot: calories.protein
                },
                ...prevLogs.filter(item => prevLogs.indexOf(item) !== 2)]
            });
        } else {
            setLogs(prevLogs => {
                return [{
                    mealLog : mealLogs,
                    cals: calories.in,
                    prot: calories.protein
                }
                ,
                ...prevLogs]
            });
        }
    }
    const handleReset = () => {
        addLog();
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
        setMealLogs([]);
    }

    // Updates Time
    useEffect(() => {
        const timer = setInterval(() => {
            setToday(new Date().toLocaleTimeString());
        },1000);
        // Resets Calories at Midnight
        if(today === "12:00:00 AM") {
            handleReset();
        } 
        return () => {
            clearInterval(timer);
        }
    },[today]);

    

    return (
        <div>
            <NavBar
            calories = {calories}
            setCalories = {setCalories}
            page = {page}
            meals = {meals}
            today = {today}
            setMealLogs = {setMealLogs}
            changePage = { (event)=> setPage(event.target.id)} 
            />
            {page === "Home" && <Home 
            calories = {calories}
            setCalories = {setCalories}
            handleReset = {handleReset}
            />}
            {page === "Meals" && <Meals 
            meals = {meals}
            setMeals = {setMeals}
            />}
            {page === "Logs" && <Logs 
            mealLogs = {mealLogs}
            calories = {calories}
            logs = {logs}
            />}
        </div>
    )
}

export default App;