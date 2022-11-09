export const convertDate = (date: string) => {
  const dateObject = new Date(date);
  const day = dateObject.getDate();
  const month = dateObject.getMonth() + 1;
  const year = dateObject.getUTCFullYear();

  return `${day}/${month}/${year}`;
}
