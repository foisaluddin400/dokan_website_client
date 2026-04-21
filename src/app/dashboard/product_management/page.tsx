"use client";

import NavigatePage from "@/components/NavigatePage";
import TableUI from "@/components/ui/TableUI";
import Link from "next/link";
import { FiEdit2, FiTrash2, FiEye } from "react-icons/fi";

const products = [
  {
    id: "PRD-1001",
    name: "Wireless Headphones",
    price: 1200,
    stock: 20,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e",
  },
  {
    id: "PRD-1002",
    name: "Smart Watch",
    price: 1800,
    stock: 15,
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30",
  },
];

const columns = [
  {
    title: "Product",
    render: (_: any, record: any) => (
      <div className="flex items-center gap-3">
        <img
          src={record.image}
          className="w-10 h-10 rounded-lg object-cover"
        />
        <span className="font-medium">{record.name}</span>
      </div>
    ),
  },
  {
    title: "Price",
    render: (_: any, record: any) => (
      <span className="font-semibold">৳ {record.price}</span>
    ),
  },
  {
    title: "Stock",
    dataIndex: "stock",
  },
  {
    title: "Action",
    render: (_: any, record: any) => (
      <div className="flex items-center gap-3">

        {/* DETAILS */}
        <Link
          href={`/dashboard/product_management/${record.id}`}
          className="text-blue-600"
        >
          <FiEye />
        </Link>

        {/* EDIT */}
        <button className="text-green-600">
          <FiEdit2 />
        </button>

        {/* DELETE */}
        <button className="text-red-600">
          <FiTrash2 />
        </button>

      </div>
    ),
  },
];

const ProductManage = () => {
  return (
    <div className="bg-white p-4 rounded-xl">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <NavigatePage title="Product Manage" />

        <button className="px-5 py-2 bg-primary text-white rounded-lg text-sm">
          + Add Product
        </button>
      </div>

      {/* TABLE */}
      <TableUI dataSource={products} columns={columns} />

    </div>
  );
};

export default ProductManage;