import React from "react";
import {
  Search,
  Plus,
  MoreVertical,
  Package,
} from "lucide-react";

const Products = () => {
  const products = [
    {
      id: 1,
      name: "Premium Watch",
      category: "Accessories",
      price: "$120",
      stock: 45,
      status: "In Stock",
    },
    {
      id: 2,
      name: "Sports Shoes",
      category: "Footwear",
      price: "$95",
      stock: 20,
      status: "In Stock",
    },
    {
      id: 3,
      name: "Leather Bag",
      category: "Fashion",
      price: "$75",
      stock: 0,
      status: "Out of Stock",
    },
    {
      id: 4,
      name: "Wireless Headphone",
      category: "Electronics",
      price: "$150",
      stock: 12,
      status: "Low Stock",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            Products
          </h1>
          <p className="text-gray-500">
            Manage your products and inventory.
          </p>
        </div>

        <button className="flex items-center gap-2 bg-indigo-600 text-white px-5 py-3 rounded-xl hover:bg-indigo-700 transition">
          <Plus size={18} />
          Add Product
        </button>
      </div>

      {/* Search */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />
          <input
            type="text"
            placeholder="Search products..."
            className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>
      </div>

      {/* Products Table */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr>
                <th className="text-left p-4">Product</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Stock</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Action</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-gray-100 hover:bg-gray-50 transition"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600">
                        <Package size={22} />
                      </div>
                      <span className="font-medium text-gray-800">
                        {product.name}
                      </span>
                    </div>
                  </td>

                  <td className="p-4 text-gray-600">
                    {product.category}
                  </td>

                  <td className="p-4 font-semibold text-gray-800">
                    {product.price}
                  </td>

                  <td className="p-4 text-gray-600">
                    {product.stock}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-medium ${
                        product.status === "In Stock"
                          ? "bg-green-100 text-green-600"
                          : product.status === "Low Stock"
                          ? "bg-yellow-100 text-yellow-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="p-4 text-center">
                    <button className="p-2 rounded-lg hover:bg-gray-100">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;