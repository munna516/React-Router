import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Album = ({ album }) => {
    const { id } = album
    return (
        <div className="border-2 rounded-lg text-center py-5 ">
            <h1>Album Id : {id}</h1>
            <Link to={`/albums/album/${id}`}><button className="mt-3 border-2 rounded-lg  px-3 py-1 hover:bg-green-400 hover:border-none">Show Details</button></Link>
        </div >
    );
};
Album.propTypes = {
    album: PropTypes.object
}
export default Album;