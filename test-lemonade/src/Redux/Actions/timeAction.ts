export const timeState = (id: string, value: number) => ({
  type: "timeState",
  payload: {
    id: id,
    value: value,
  },
});
