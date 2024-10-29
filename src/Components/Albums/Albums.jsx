import { useLoaderData } from "react-router-dom";
import Album from "../Album/Album";

const Albums = () => {
    const albums = useLoaderData()
    console.log(albums)
    return (
        <div>
            <h1 className='text-xl font-bold text-center text-red-400 mt-10'>This is Album Section</h1>
            <div className="grid grid-cols-4 gap-10 mt-5">
                {
                    albums.map(album => <Album key={album.id} album={album}></Album>)
                }
            </div>
        </div>
    );
};

export default Albums;