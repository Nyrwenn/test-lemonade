export type IntervalState = {
  intervals: number[];
};

const intervalState: IntervalState = { intervals: [] };

export default function intervalReducer(state = intervalState, action: any) {
  if (action.type === "intervalState") {
    return {
      ...state,
      intervals: action.payload,
    };
  } else {
    return state;
  }
}
