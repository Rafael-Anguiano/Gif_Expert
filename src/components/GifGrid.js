import React /* { useState, useEffect } */ from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';

const GifGrid = ({category}) => {

    const {data:images, loading} = useFetchGifs(category);

    return (
        <>
            <h3>{category}</h3>
            { loading && <p>Loading...</p>}

            <div className='card-grid animate_animated animate__fadeInDown animate__delay-5s'>
                { 
                    images.map( (img) =>  (
                        <GifGridItem 
                        key={img.id} 
                        {...img}
                        />
                        ))
                    }
            </div>
        </>
    )
}

export default GifGrid
