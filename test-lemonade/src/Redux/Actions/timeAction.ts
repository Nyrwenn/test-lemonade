export const changeValue = (id: string, value: number) => ({
  type: "changeValue",
  payload: {
    id: id,
    value: value,
  },
});
