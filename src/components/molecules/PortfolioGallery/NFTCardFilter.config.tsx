import React from "react";
import ViewGridIcon from "src/components/atoms/Icons/ViewGrid";
import ViewListIcon from "src/components/atoms/Icons/ViewList";
import GridView, {
  IGridViewProps,
} from "./GalleryViews/GalleryGridView/GridView";
import ListView, {
  IListViewProps,
} from "./GalleryViews/GalleryListView/ListView";

type TButtonFilterComponent = {
  children: React.ReactText | React.ReactChild;
  component: (prop: any) => React.ReactText | React.ReactChild;
};

export type TGridSwitchButtons = TButtonFilterComponent[];

export const gridSwithButtons: TGridSwitchButtons = [
  {
    children: <ViewListIcon />,
    component: (props: IListViewProps) => <ListView {...props} />,
  },
  {
    children: <ViewGridIcon />,
    component: (props: IGridViewProps) => <GridView {...props} />,
  },
];

export const defaultIndex = 0;
