import { GifItem } from "./GetItem";
//import { useFetchGifs } from "./useFetchGifs";
import { useState } from "react";
import { useEffect } from "react";
import { getGifs } from "./getGifs";
//import {MostrarGifs} from "./GifGrid";

export const MostrarGifs = (category) => {

    const [imagenes, setImages] = useState([]);

    const getImages = async () =>{
        const images = await getGifs(category)
        setImages(images);
    }

    useEffect( () =>{
        getImages();
    }, [])

    return {
        images : imagenes,
        isoading: false
    }
}

export const GifGrid = ({ category }) => {

    const { images, isLoading } = MostrarGifs(category)

    return (
        <>
            <h3>{category}</h3>
            <div className="card-grid">
                {
                    images.map((image, key) => {
                        return <GifItem key={key}{...image}></GifItem>
                    })
                }
            </div>
        </>
    )
}

