import React, { useEffect, useState } from 'react'
import axios from "axios";


function Card() {

    const [data, setData] = useState([]);
    
    const API = "https://fakestoreapi.com/products";

    const getData = async () => {
        try {
            const response = await axios (API);
            setData(response.data);
        }
        catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getData();
    }, []);


  return (
    <div>
      <h1>Card</h1>
      <div className='w-full flex flex-wrap gap-28 '>
      {data.map((item) => (

      
      <div key={item.id} className='w-52 h-60 border border-blue-900 bg-blue-200 hover:scale-110 transition-transform'>
      <div className='m-auto mt-1 mb-2'>
        <img className='w-20 h-32 m-auto ' src={item.image} alt="" />
        </div>
      <div className='w-[90%] m-auto'>
        <p className='text-xs'>{item.title}</p>
        <div className='w-full flex justify-between'>
            <p>Цена:</p>
            <p>{item.price}$</p>
        </div>
    </div>
</div>
      ))}
         </div>

    </div>
  );
}


export default Card
