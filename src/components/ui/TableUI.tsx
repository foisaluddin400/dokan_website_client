"use client";

import React from "react";

interface TableUIProps {
  dataSource: any[];
  columns: any[];
}

const TableUI = ({ dataSource, columns }: TableUIProps) => {
  return (
    <div className="w-full overflow-x-auto">
      <table className="w-full min-w-[700px] border border-border rounded-lg overflow-hidden">
        
        {/* HEADER */}
        <thead className="bg-surface-2 text-left text-sm text-text-secondary">
          <tr>
            {columns.map((col, index) => (
              <th key={index} className="p-4 font-medium whitespace-nowrap">
                {col.title}
              </th>
            ))}
          </tr>
        </thead>

        {/* BODY */}
        <tbody className="text-sm">
          {dataSource.map((record, rowIndex) => (
            <tr
              key={record.key || rowIndex}
              className="border-t border-border hover:bg-surface transition"
            >
              {columns.map((col, colIndex) => (
                <td key={colIndex} className="p-4 whitespace-nowrap">
                  
                  {/* render support (Ant style) */}
                  {col.render
                    ? col.render(record[col.dataIndex], record, rowIndex)
                    : record[col.dataIndex]}
                    
                </td>
              ))}
            </tr>
          ))}
        </tbody>

      </table>
    </div>
  );
};

export default TableUI;