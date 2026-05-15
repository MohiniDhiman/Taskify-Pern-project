import Loader from "@components/loader/Loader";
import Pagination from "@components/pagination/Pagination";
import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

const CommonTable = ({
  loading,
  tableData,
  columns,
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const table = useReactTable({
    data: tableData || [],
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      {loading && <Loader />}
      <div className="overflow-x-auto rounded-xl mt-5 border border-white/5 shadow-2xl">
        <table className="min-w-full divide-y divide-white/5 bg-surface rounded-xl">
          {/* Table Head */}
          <thead className="bg-[#1c1c22] border-b border-white/5 text-xs font-semibold text-text-dim uppercase text-center tracking-wider">
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th key={header.id} className="px-6 py-4">
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                          header.column.columnDef.header,
                          header.getContext(),
                        )}
                  </th>
                ))}
              </tr>
            ))}
          </thead>

          {/* Table Body */}
          <tbody className="divide-y divide-white/5 text-center">
            {table.getRowModel().rows.length > 0 ? (
              table.getRowModel().rows.map((row) => (
                <tr
                  key={row.id}
                  className="hover:bg-white/[0.02] transition-colors duration-200"
                >
                  {row.getVisibleCells().map((cell) => (
                    <td
                      key={cell.id}
                      className="px-6 py-4 whitespace-nowrap text-white/90 font-medium"
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center py-10 text-text-dim italic"
                >
                  No data available
                </td>
              </tr>
            )}
          </tbody>
        </table>
        {tableData?.length > 0 && (
          <div className="bg-surface border-t border-white/5 p-4">
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={onPageChange}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default CommonTable;
