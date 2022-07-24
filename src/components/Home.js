
function Home(props) {
    
    return (
        <main className="home-container">
            <div className="macros">
                <h2>Protein</h2>
                <h2>Carbs</h2>
                <h2>Fats</h2>
            </div>
            <div className="intake">
                <h2>Total</h2>
                <h4>{props.calories.proteinTotal}</h4>
                <h4>{props.calories.carbsTotal}</h4>
                <h4>{props.calories.fatsTotal}</h4>
            </div>
            <div className="intake">
                <h2>Intake</h2>
                <h4>{(props.calories.protein)}</h4>
                <h4>{(props.calories.carbs)}</h4>
                <h4>{(props.calories.fats)}</h4>
            </div>
            <div className="intake">
                <h2>Left</h2>
                <h4>{(props.calories.proteinTotal)-props.calories.protein}</h4>
                <h4>{(props.calories.carbsTotal)-props.calories.carbs}</h4>
                <h4>{(props.calories.fatsTotal)-props.calories.fats}</h4>
            </div>
            <button 
            onClick={props.handleReset}
            style={
                {
                    display:"flex",
                    flexDirection:"column",
                    height:30,
                    width: 60,
                    marginTop:350,
                }
            }>
            Reset
            </button>
        </main>
    )
}

export default Home;