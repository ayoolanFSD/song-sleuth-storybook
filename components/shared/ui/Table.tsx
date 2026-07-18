import React from 'react';

type TableProps = {
  columns: React.ReactNode[];
  data: React.ReactNode[][];
};

// Thanks, on mobile I also want a minimum width set for the table so the cells don't collapse. So fixed width on mobile and to see the hidden column the user would need to scroll slighty as it will be out of view. If you have a better way to make this table behave on mobile I'm open to suggestions:
export default function Table({ columns, data }: TableProps) {
  return (
    <div className="w-full overflow-x-auto">
      <table className="min-w-[200px] w-full border-collapse">
        <thead>
          <tr>
            {columns.map((col, idx) => {
              // 3rd column (idx === 2) and last column (idx === columns.length - 1)
              const isMobileHidden = idx === 2 || idx === columns.length - 1 || idx === 0;
              return (
                <th
                  key={idx}
                  className={`
                    border-b px-4 py-2
                    ${idx === columns.length - 1 ? 'text-right' : 'text-left'}
                    ${isMobileHidden ? 'hidden lg:table-cell' : ''}
                  `}
                >
                  {col}
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx}>
              {row.map((cell, cidx) => {
                const isMobileHidden = cidx === 2 || cidx === columns.length - 1 || cidx === 0;
                return (
                  <td
                    key={cidx}
                    className={`
                      border-b px-4 py-2
                      ${cidx === columns.length - 1 ? 'text-right' : ''}
                      ${isMobileHidden ? 'hidden lg:table-cell' : ''}
                    `}
                  >
                    {cell}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
