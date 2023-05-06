import Navbar from '@/components/admin/Navbar';
import { useState } from 'react';
import { Products } from '../../utils/constants'
  
  const Dashboard = () => {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [itemsPerPage, setItemsPerPage] = useState<number>(10);
  
    // Logic to get current items
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = Products.slice(indexOfFirstItem, indexOfLastItem);
  
    // Logic to paginate
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(Products.length / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    const tableHeight = `${currentItems.length * 8}rem`; // adjust this value to fit your table row height
  
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
        <Navbar />
        <div className="flex items-center justify-center h-screen md:pl-20 md:pr-20">
          <div className="w-full h-[80vh] text-sm">
            <table className={`w-full ${tableHeight}`}>
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Brand
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Product Name
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Quantity
                  </th>
                  <th
                    scope="col"
                    className="px-4 py-2 text-left font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
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
                      <td className="px-4 py-2 whitespace-nowrap">{product.name}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{product.productName}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{product.quantity}</td>
                      <td className="px-4 py-2 whitespace-nowrap">{product.price}</td>
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

export default Dashboard;
