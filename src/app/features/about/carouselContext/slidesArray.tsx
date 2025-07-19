import { v4 as uuidv4, V4Options } from "uuid";

export type SlideArrayType = {
  height: number;
  elements: {
    key: string;
    index: number;
    text: string;
    visible: boolean;
    opacity: number;
    active: boolean;
  }[];
};

export const slideArray: SlideArrayType = {
  height: 0,
  elements: [
    {
      key: uuidv4(),
      index: 0,
      text: "first",
      visible: true,
      opacity: 0,
      active: true,
    },
    {
      key: uuidv4(),
      index: 1,
      text: "second",
      visible: true,
      opacity: 0,
      active: false,
    },
    {
      key: uuidv4(),
      index: 2,
      text: "third",
      visible: true,
      opacity: 0,
      active: false,
    },
  ],
};
