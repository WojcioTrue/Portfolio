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
  elements: [
    {
      key: uuidv4(),
      index: 0,
      header: "Header 1",
      description: "Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4Description 4 Description 4 Description 4 Description 4Description 4 Description 4 Description 4 Description 4Description 4 Description 4 Description 4 Description 4Description 4 Description 4 Description 4 Description 4Description 4 Description 4 Description 4 Description 4",
      href: "href 1",
      liveView: "liveView 1",
      visible: true,
      opacity: 0,
      active: true,
    },
    {
      key: uuidv4(),
      index: 1,
      header: "Header 2",
      description: "Description 2",
      href: "href 2",
      liveView: "liveView 2",
      visible: true,
      opacity: 0,
      active: false,
    },
    {
      key: uuidv4(),
      index: 2,
      header: "Header 3",
      description: "Description 3",
      href: "href 3",
      liveView: "liveView 3",
      visible: true,
      opacity: 0,
      active: false,
    },
    {
      key: uuidv4(),
      index: 3,
      header: "Header 4",
      description: "Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4 Description 4Description 4 Description 4 Description 4 Description 4Description 4 Description 4",
      href: "href 4",
      liveView: "liveView 4",
      visible: true,
      opacity: 0,
      active: false,
    },
    {
      key: uuidv4(),
      index: 4,
      header: "Header 5",
      description: "Description 5",
      href: "href 5",
      liveView: "liveView 5",
      visible: true,
      opacity: 0,
      active: false,
    },
  ],
};

export const emptyArr: SlideArrayType = {
  height: 0,
  elements: [
    {
      key: uuidv4(),
      index: 0,
      header: "OOOOppppSSSS!!!!!!",
      description:
        "Looks like your slide Array is empty. Put something inside it!",
      href: undefined,
      liveView: undefined,
      visible: true,
      opacity: 0,
      active: true,
    },

  ],
};
