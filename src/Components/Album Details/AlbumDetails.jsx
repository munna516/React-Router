import { useLoaderData, useNavigate } from "react-router-dom";

const AlbumDetails = () => {
    const details = useLoaderData()
    const { id, userId, title } = details
    const navigate = useNavigate()
    const back = ()=>navigate(-1)
    return (
        <div className="text-center mt-10 bg-red-300 py-5 text-white font-bold rounded-lg">
            <h1>id : {id}</h1>
            <p>userId : {userId}</p>
            <p>Title : {title}</p>
            <button onClick={back} className="border rounded-lg py-1 px-3 mt-5 hover:bg-green-400 hover:outline-none"> Back</button>
        </div>
    );
};

export default AlbumDetails;