"use client";

import NavigatePage from "@/components/NavigatePage";
import TableUI from "@/components/ui/TableUI";
import Link from "next/link";

const orders = [
  {
    id: "ORD-1001",
    customer: "Rakibul Islam",
    total: 2500,
    status: "Delivered",
    payment: "Paid",
    date: "2026-04-20",
  },
  {
    id: "ORD-1002",
    customer: "Ayesha Khan",
    total: 4200,
    status: "Processing",
    payment: "Pending",
    date: "2026-04-21",
  },
  {
    id: "ORD-1003",
    customer: "Samiul Hoque",
    total: 3150,
    status: "Shipped",
    payment: "Paid",
    date: "2026-04-19",
  },
];

const columns = [
  {
    title: "Order ID",
    dataIndex: "id",
  },
  {
    title: "Customer",
    dataIndex: "customer",
  },
  {
    title: "Total",
    render: (_: any, record: any) => (
      <span className="font-semibold">৳ {record.total}</span>
    ),
  },
  {
    title: "Status",
    render: (_: any, record: any) => (
      <span
        className={`px-3 py-1 rounded-full text-xs font-medium
        ${
          record.status === "Delivered"
            ? "bg-green-100 text-green-600"
            : record.status === "Processing"
            ? "bg-yellow-100 text-yellow-600"
            : "bg-blue-100 text-blue-600"
        }`}
      >
        {record.status}
      </span>
    ),
  },
  {
    title: "Payment",
    render: (_: any, record: any) => (
      <span
        className={`font-medium ${
          record.payment === "Paid" ? "text-green-600" : "text-red-500"
        }`}
      >
        {record.payment}
      </span>
    ),
  },
  {
    title: "Date",
    dataIndex: "date",
  },
  {
    title: "Action",
    render: (_: any, record: any) => (
      <Link
                    href={`/dashboard/order/${record.id}`}
                    className="text-primary font-medium hover:underline"
                  >
                    View
                  </Link>
    ),
  },
];

const OrderPage = () => {
  return (
    <div className="bg-white p-3 h-[87vh] overflow-auto">

      {/* Header */}
      <NavigatePage title="My Orders" />

      {/* Table Card */}
      <div className="bg-white rounded-xl border border-border p-2">
        <TableUI dataSource={orders} columns={columns} />
      </div>

    </div>
  );
};

export default OrderPage;