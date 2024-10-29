import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Meal = ({ meal }) => {
    const { strCategory, strCategoryThumb } = meal
    console.log(meal);
    return (
        <div className='border-2 rounded-lg p-5'>
            <img src={strCategoryThumb} alt="" />
            <h1 className='text-center font-bold'>{strCategory}</h1>
            <div className='text-center'>
                <Link ><button className='btn border-2 py-1 px-2 rounded-lg hover:bg-green-400 hover:border-none'>More Details</button></Link>
            </div>
        </div>
    );
};
Meal.propTypes = {
    meal: PropTypes.object
}

export default Meal;