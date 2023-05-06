import Navbar from '@/components/admin/Navbar';
import React, { useState } from 'react';

const AddProducts = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  const [price, setPrice] = useState<number>(0);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
  };

  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="max-w-2xl mx-auto">
              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter product name"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product Description
                  </label>
                  <textarea
                    name="description"
                    id="description"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter product description"
                    rows={5}
                    value={description}
                    onChange={(event) => setDescription(event.target.value)}
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="price"
                    className="block text-gray-700 font-bold mb-2"
                  >
                    Product Price
                  </label>
                  <input
                    type="number"
                    name="price"
                    id="price"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter product price"
                    value={price}
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                      setPrice(Number(event.target.value))
                    }
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Add Product
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddProducts;
