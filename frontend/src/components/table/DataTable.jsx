import React, { useMemo } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { AiOutlineEye } from "react-icons/ai";
import { FiEdit, FiTrash2 } from "react-icons/fi";
import { formatDate } from "@utils/commonUtils";

const DataTable = ({ data }) => {
  const columns = useMemo(
    () => [
      {
        header: "User",
        accessorKey: "name",
        cell: ({ row }) => {
          const user = row.original;
          return (
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 flex items-center justify-center">
                  <span className="text-sm font-medium text-white">
                    {user.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">
                  {user.name}
                </div>
                <div className="text-sm text-gray-500">{user.email}</div>
              </div>
            </div>
          );
        },
      },
      {
        header: "Role",
        accessorKey: "role",
        cell: (info) => (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
            {info.getValue()}
          </span>
        ),
      },
      {
        header: "Status",
        accessorKey: "status",
        cell: (info) => {
          const value = info.getValue();
          return (
            <span
              className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                value === "Active"
                  ? "bg-green-100 text-green-800"
                  : "bg-red-100 text-red-800"
              }`}
            >
              {value}
            </span>
          );
        },
      },
      {
        header: "Last Login",
        accessorKey: "lastLoggedIn",
        cell: (info) => {
          return (
            <span className="text-sm text-gray-700">
              {formatDate(info.getValue())}
            </span>
          );
        },
      },

      {
        header: "Actions",
        id: "actions",
        cell: () => (
          <div className="flex items-center space-x-2">
            <button className="text-blue-600 hover:text-blue-900 p-1 rounded hover:bg-blue-50">
              <AiOutlineEye size={16} />
            </button>
            <button className="text-green-600 hover:text-green-900 p-1 rounded hover:bg-green-50">
              <FiEdit size={16} />
            </button>
            <button className="text-red-600 hover:text-red-900 p-1 rounded hover:bg-red-50">
              <FiTrash2 size={16} />
            </button>
          </div>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div className="bg-green-50 rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    key={header.id}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          <tbody className="bg-green-50 divide-y divide-gray-200">
            {table.getRowModel().rows.map((row) => (
              <tr
                key={row.id}
                className="hover:bg-[#e5f0e0] transition-colors duration-150"
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
