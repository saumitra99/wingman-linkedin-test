/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { JSX, useState } from "react";

type Column = {
  header: string;
  accessor: string | ((row: any) => JSX.Element);
  className?: string;
  sortable?: boolean;
};

type TableProps = {
  columns: Column[];
  data: any[];
};

const Table: React.FC<TableProps> = ({ columns, data }) => {
  const [sortConfig, setSortConfig] = useState<{
    key: string;
    direction: "asc" | "desc";
  } | null>(null);

  const sortedData = React.useMemo(() => {
    if (sortConfig) {
      const sorted = [...data].sort((a, b) => {
        const aValue =
          typeof sortConfig.key === "string" ? a[sortConfig.key] : "";
        const bValue =
          typeof sortConfig.key === "string" ? b[sortConfig.key] : "";

        if (aValue < bValue) return sortConfig.direction === "asc" ? -1 : 1;
        if (aValue > bValue) return sortConfig.direction === "asc" ? 1 : -1;
        return 0;
      });
      return sorted;
    }
    return data;
  }, [data, sortConfig]);

  const handleSort = (accessor: string) => {
    if (sortConfig?.key === accessor) {
      setSortConfig({
        key: accessor,
        direction: sortConfig.direction === "asc" ? "desc" : "asc",
      });
    } else {
      setSortConfig({ key: accessor, direction: "asc" });
    }
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse table-auto border border-gray-200 rounded-lg shadow-sm">
        <thead className="bg-gray-100 rounded-t-lg">
          <tr>
            {columns.map((column, index) => (
              <th
                key={index}
                className={`px-6 py-3 text-left text-sm font-medium text-gray-600 ${
                  column.className || ""
                } ${column.sortable ? "cursor-pointer" : ""}`}
                onClick={() =>
                  column.sortable &&
                  typeof column.accessor === "string" &&
                  handleSort(column.accessor)
                }
              >
                {column.header}
                {column.sortable && sortConfig?.key === column.accessor && (
                  <span className="ml-2">
                    {sortConfig.direction === "asc" ? "\u2191" : "\u2193"}
                  </span>
                )}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200 rounded-b-lg">
          {sortedData.map((row, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td
                  key={colIndex}
                  className={`px-6 py-4 text-sm text-gray-700 ${
                    column.className || ""
                  }`}
                >
                  {typeof column.accessor === "function"
                    ? column.accessor(row)
                    : row[column.accessor]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
