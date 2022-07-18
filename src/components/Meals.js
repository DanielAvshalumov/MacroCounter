import react,{useEffect, useState} from "react"

function Meals(props) {

    const [mealMacros,setMealMacros] = useState({
        protein:0,
        carbs:0,
        fats:0,
        calories:0,
        name: ""
        }
    );

    // Add a meal
    function addMeal(e) {
        e.preventDefault();
        let newMeal = {
            mealName: mealMacros.name,
            calories: mealMacros.calories,
            protein: mealMacros.protein,
            carbs: mealMacros.carbs,
            fats: mealMacros.fats
        }
        // TODO: do not allow for duplicate meals
        
        let flag = false;

        props.meals.forEach(element => {
            if(element.mealName === newMeal.mealName) {
                alert("You already submitted this meal");
                flag = true;
            }         
        })

        if(flag === false) {
            props.setMeals(prevMeals => [...prevMeals,newMeal]); 
        } 

    };

    // Delete a meal
    function handleDelete(e) {
        props.meals.forEach(element => {
           if(element.mealName === e.target.value) {
                props.setMeals(prevMeals => {
                    const newMeals = prevMeals.filter(element => element.mealName !== e.target.value);
                    window.localStorage.removeItem(e.target.value);
                    return newMeals;
                })
           } 
        });
    }

    const mealList = props.meals.map((element,key) => (
    <div className="list-meal" key={key}>
        <div>{element.mealName}</div>
        <div>{element.calories}</div>
        <div>{element.protein}</div>
        <div>{element.carbs}</div>
        <div>{element.fats}</div>
        <button value={element.mealName} onClick={handleDelete}>Delete</button>
    </div>
    ));

    return (
        <main>
            <form onSubmit={addMeal}>
                <div className="add-meal">
                    <div className="add-macro">
                        <br/>
                        <label>Protein: 
                            <input type="number" name="protein"
                            onChange={e => setMealMacros(prevState => ({...prevState,protein:e.target.value}))}
                            />
                        </label>
                        <br/><br/>
                        <label>Carbs: 
                            <input type="number" name="carbs"
                            onChange={e => setMealMacros(prevState => ({...prevState,carbs:e.target.value}))}
                            />
                        </label><br/><br/>
                        <label>Fats: 
                            <input type="number" name="fats"
                            onChange={e => setMealMacros(prevState => ({...prevState,fats:e.target.value}))}
                            />
                        </label><br/>
                    </div>
                    <div>
                        <label>Calories: 
                            <input type="number" name="caloreis"
                            onChange={e => setMealMacros(prevState => ({...prevState,calories:e.target.value}))}
                            />
                        </label>
                        <label>Meal Name
                            <input type="text" name="mealName"
                            onChange={e => setMealMacros(prevState => ({...prevState,name:e.target.value}))}
                            /> 
                        </label>
                    </div>
                    <button>Add</button>
                </div>
            </form>
            <div className="list">
                <div className="list-meal">
                    <div>Meal Name</div>
                    <div>Calories</div>
                    <div>Protein</div>
                    <div>Carbs</div>
                    <div>Fats</div>
                    <div>DELETE</div>
                </div>
                {mealList}
            </div>
        </main>
    )
}

export default Meals;