import React from "react";
import { AgGridColumn, AgGridReact } from "ag-grid-react";
import "ag-grid-community/dist/styles/ag-grid.css";
// import "ag-grid-community/dist/styles/ag-theme-alpine.css";
import { ColDef, RowClickedEvent } from "ag-grid-community";

export interface ITableProps<T> extends JasesCommon.BaseProps {
  data: T[];
  frameworkComponents?:
    | {
        [p: string]: {
          new (): any;
        };
      }
    | any;
  columns: ColDef[];
  onRowClicked?: (event: RowClickedEvent) => void;
}

function AgGridTable<T extends object>({
  data,
  frameworkComponents = {},
  columns = [],
  onRowClicked = () => {},
}: ITableProps<T>) {
  return (
    <div className="ag-theme-alpine w-full">
      <AgGridReact
        defaultColDef={{
          flex: 1,
          minWidth: 100,
          enableValue: false,
          enableRowGroup: false,
          enablePivot: false,
          sortable: true,
          filter: false,
          suppressMenu: true,
        }}
        frameworkComponents={frameworkComponents}
        rowData={data}
        rowHeight={80}
        onRowClicked={onRowClicked}
        className="border-2 border-plain-contrast-light rounded-md overflow-hidden"
        rowClass="border-1 border-background-color"
        rowClassRules={{
          "bg-app-background-light": (params) => params.rowIndex % 2 !== 0,
        }}
      >
        {columns.map((column, index) => (
          <AgGridColumn
            key={index}
            {...column}
            cellClass="text-primary-dark cursor-pointer pl-4"
            headerClass="bg-app-background-light text-primary-dark pl-4"
          ></AgGridColumn>
        ))}
      </AgGridReact>
    </div>
  );
}

export default AgGridTable;
