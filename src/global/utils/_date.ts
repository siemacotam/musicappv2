export const roundData = (data: number) => {
  return new Date(data).toLocaleString().split("T")[0];
};
