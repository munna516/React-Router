import { useLoaderData } from "react-router-dom";
import Meal from "../Meal/Meal";

const Meals = () => {
    const meals = useLoaderData()
    return (
        <div>
            <h1 className='text-xl font-bold text-center text-red-400 mt-10'>This is meal Section</h1>
            <div className="grid grid-cols-3 gap-3 mt-5">
            {
                meals.categories.map((meal) => <Meal key={meal.idCategory} meal={meal}></Meal>)
            }
            </div>
        </div>
    );
};

export default Meals;