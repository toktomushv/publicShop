
import axios from 'axios';
import React, { useState } from 'react';

function Input() {
  const [inpData, setInpData] = useState({
    title: "",
    price: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInpData({ ...inpData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const res = await axios.post("https://fakestoreapi.com/products", inpData);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center p-10 ">
      <div className="w-full max-w-md ">
        <form className="bg-blue-200 shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
              Название продукта
            </label>
            <input 
              name="title"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="title"
              type="text"  
              value={inpData.title}               
              onChange={handleInputChange}     
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
              Цена
            </label>
            <input 
              name="price"
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="price"
              type="text"
              value={inpData.price}
              onChange={handleInputChange}    
            />
          </div>
          <div className="flex items-center justify-between">
            <button 
              className="bg-green-400 hover:bg-green-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Добавить продукт
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Input;