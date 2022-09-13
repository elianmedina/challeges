import { useState } from "react";
import { AddCategory } from "./AddCategory";
import { GifGrid } from "./GifGrid";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState([''])

    const onAddCategory = (category) => {

        setCategories(list => [...list, category])
        console.log("Lista de categorias: ", categories)
    }

    return (
        <>
            <h1>Gif Expert Web-App</h1>
            <AddCategory onAddCategory={onAddCategory} />
            <ol>
            {
                categories.map(
                    (category, key) => {
                        return <GifGrid category={category} key={key} />
                    }
                )
            }
            </ol>
        </>
    )
}