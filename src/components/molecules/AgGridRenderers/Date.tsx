import moment from "moment";
import React from "react";

export interface IDateRendererProps {
  value: any;
  data: Portfolio.RoundTripTrade;
  colDef: {
    field: keyof Portfolio.RoundTripTrade;
  };
}

function DateRenderer({ data, colDef: { field } }: IDateRendererProps) {
  return <span>{data[field] && moment(data[field] as Date).fromNow()}</span>;
}

export default DateRenderer;
