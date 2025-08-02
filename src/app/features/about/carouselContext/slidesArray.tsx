import { v4 as uuidv4, V4Options } from "uuid";

export type SlideArrayType = {
  height: number;
  elements: {
    key: string;
    index: number;
    header: string;
    description: string;
    href: string | undefined;
    liveView: string | undefined;
    visible: boolean;
    opacity: number;
    active: boolean;
  }[];
};

export const slideArray: SlideArrayType = {
  height: 0,
  elements: [],
};

export const emptyArr: SlideArrayType = {
  height: 0,
  elements: [
    {
      key: uuidv4(),
      index: 0,
      header: "OOOOppppSSSS!!!!!!",
      description:
        "Looks like your array for slides is empty. Put something inside it!",
      href: undefined,
      liveView: undefined,
      visible: true,
      opacity: 0,
      active: true,
    },
  ],
};
