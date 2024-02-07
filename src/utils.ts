export const dateStringToDate = (dateString: string) => {
  //28/10/2018
  const dateParts = dateString
    .split('/')
    .map((value: string): number => +value);
  console.log(dateParts); //[ 28, 10, 2018 ]
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};

console.log(dateStringToDate('28/10/2018')); //
