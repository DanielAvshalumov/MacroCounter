import react, {useState} from "react"

function NavBar(props) {
    const clickedTab = {
        backgroundColor: "#F2BB05",
        borderRadius: 3
    }
    const unclickedTab = {
        //TODO: design css for idle tabs

    }

    const [selectedMeal,setSelectedMeal] = useState("");

    function handleSubmit(e) {
        e.preventDefault(); 
        props.meals.forEach(element => {
            if(element.mealName === selectedMeal) {
                props.setCalories(oldCals => ({
                    ...oldCals,
                    in: +oldCals.in + +element.calories,
                    protein: +oldCals.protein + +element.protein,
                    carbs: +oldCals.carbs + +element.carbs,
                    fats: +oldCals.fats + +element.fats
                }))
            }
        })
        props.setMealLogs(prev => {
            return [...prev,selectedMeal]
        })
    }

    // Creates drop down menu for meals

    let selectMeal = (
    <form onSubmit={handleSubmit}>
        <select value={selectedMeal} onChange={e => {setSelectedMeal(e.target.value)} }>
            <option value="">Choose a Meal</option>
            {props.meals.map((element,key) => <option key={key}>{element.mealName}</option>)}
        </select>
        <button>Add</button>
    </form>
    );

    return (
        <div className="nav-container">
            <nav>
                <div className="nav">
                    <h3 id="Home" onClick={props.changePage} style={props.page === "Home" ? clickedTab:unclickedTab}>Home</h3>
                    <h3 id="Meals" onClick={props.changePage} style ={props.page === "Meals" ? clickedTab : unclickedTab}>Meals</h3>
                    <h3 id="Logs" onClick={props.changePage} style={props.page === "Logs" ? clickedTab : unclickedTab}>Logs</h3>
                </div>
                <div className="calorie-counter">
                    <h4>Calories Out: {props.calories.out}</h4>
                    <h4>Calories in: {props.calories.in}</h4>
                </div>
            </nav>
            <div className="net-calories">
                {selectMeal}
                <h3>Calories Left: {(props.calories.out)-(props.calories.in)}</h3>
                <h3>{props.today}</h3>
            </div>
            <div className="clock">
                
            </div>
        </div>
    )
}

export default NavBar;