import { ButtonHTMLAttributes, ReactNode } from "react";

// nav Data types
export interface singleMenuTypes {
    label: string;
    to?: string;
    icon?: boolean;
  }
  
  // section items
  export interface sectionItemTypes {
    title: string;
    subTitle: string;
    options: string[];
    link: string;
    targetBlank: boolean;
  }
  
  // panel section types
  export interface panelSectionType {
    sectionTitleId: number;
    sectionTitle: string;
    data: sectionItemTypes[];
  }
  
  // panel type
  export interface panelTypes {
    title: string;
    sections: panelSectionType[];
  }
  
  // nav Data types
  export interface navDataTypes extends singleMenuTypes {
    panel?: panelTypes;
  }


  export type ButtonProps = {
    className?: string;
    translate?: string;
    sizeClass?: string;
    fontSize?: string;
    //
    loading?: boolean;
    disabled?: boolean;
    secondary?: boolean;
    type?: ButtonHTMLAttributes<HTMLButtonElement>["type"];
    to?: string;
    targetBlank?: boolean;
    onClick?: () => void;
    children?: ReactNode;
    icon?: string;
  };


  export interface ShapeTypes {
    className?: string;
    color?: string;
    title: string;
    description: string;
    shape: string;
  }
  