

export const getGifs = async ( category ) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=JiCdYcXYnt7RKT63SFJAQCIr8sLmU1lE&q=${category}&limit=1&offset=0&rating=g&lang=en`
   
    const respt = await  fetch(url)
    const { data } = await respt.json()
    const gifs = data.map( img =>{
        return{
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url
        }
    })
    console.log(category, gifs)
    return gifs
}