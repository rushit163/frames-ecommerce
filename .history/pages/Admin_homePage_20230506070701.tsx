import Navbar from '@/components/Navbar';
import React from 'react';
import { useState } from 'react';

const products = [
    // 
  ];
  
  
  const Admin_homePage = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(10);
  
    // Logic to get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = products.slice(indexOfFirstItem, indexOfLastItem);
  
    // Logic to paginate
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(products.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const renderPageNumbers = pageNumbers.map(number => {
      return (
        <li
          key={number}
          className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 ${currentPage === number ? 'bg-gray-200' : ''}`}
          onClick={() => setCurrentPage(number)}
        >
          {number}
        </li>
      );
    });
  
    return (
  <>
    <Navbar/>
    <div className="flex items-center justify-center h-screen md:pl-20 md:pr-20">
      <div className="w-full h-[calc(80vh-10rem)] mt-16">
        <table className="w-full mb-20">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Product Name
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Quantity
              </th>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Edit</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {currentItems.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center p-4">
                  <h1>No items present in the table</h1>
                </td>
              </tr>
            ) : (
              currentItems.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.productName}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.quantity}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
        <ul className="flex space-x-2 mt-4">{renderPageNumbers}</ul>
      </div>
    </div>
  </>
);
  };

export default Admin_homePage;
