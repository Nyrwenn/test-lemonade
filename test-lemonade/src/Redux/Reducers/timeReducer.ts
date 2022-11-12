export type InitialState = {
  minA: number;
  maxA: number;
  minB: number;
  maxB: number;
};

const initialState: InitialState = { minA: 0, maxA: 0, minB: 0, maxB: 0 };

export default function timeReducer(state = initialState, action: any) {
  if (action.type === "changeValue") {
    return {
      ...state,
      [action.payload.id]: action.payload.value,
    };
  } else {
    return state;
  }
}
