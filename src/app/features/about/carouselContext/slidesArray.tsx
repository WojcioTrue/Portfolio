import { v4 as uuidv4, V4Options } from "uuid";

export type SlideArrayType = {
  width: number;
  gap: number;
  elements: {
    key: string;
    index: number;
    x: number;
    text: string;
    visible: boolean;
    opacity: number;
    active: boolean;
  }[];
};

export const slideArray: SlideArrayType = {
  width: 0,
  gap: 0,
  elements: [
    {
      key: uuidv4(),
      index: 0,
      x: 0,
      text: "first",
      visible: true,
      opacity: 0,
      active: true,
    },
    {
      key: uuidv4(),
      index: 1,
      x: 0,
      text: "second",
      visible: true,
      opacity: 0,
      active: false,
    },
    {
      key: uuidv4(),
      index: 2,
      x: 0,
      text: "third",
      visible: true,
      opacity: 0,
      active: false,
    },
  ],
};
