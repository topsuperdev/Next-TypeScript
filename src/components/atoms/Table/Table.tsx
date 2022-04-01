import React from "react";

export interface TableProps extends JasesCommon.BaseProps {
  /**
   * Children To be renders in Body of Table
   */
  children: React.ReactNode;

  /**
   * Columns To be Display in Header of Table
   */
  columns: string[];
}

function Table({ children, columns }: TableProps) {
    console.log('columns ', columns);
  return (
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-background-color">
        <tr>
          {columns.map((column, index) => (
            <th
              key={index}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-primary-dark uppercase tracking-wider"
            >
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>{children}</tbody>
    </table>
  );
}

export default Table;
