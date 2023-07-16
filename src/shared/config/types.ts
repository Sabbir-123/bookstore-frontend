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