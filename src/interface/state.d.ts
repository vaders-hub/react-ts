import { BoardResponse } from "../apis/bbs";

export type Action = {
  type: string;
  list?: BoardResponse[];
};

export type State = {
  bbsList: BoardResponse[] | undefined;
  bbs?: bbsList;
};

namespace State {
  export const other = 1;
}
