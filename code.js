const utils = {};

utils.getInitials = str => {
  //your code here
  let strArr = str.split(" ");
  let initialsArr = [];

  for (let i = 0; i < strArr.length; i++) {
    initialsArr.push(strArr[i][0]);
  }
  return initialsArr.join("").toUpperCase();
};

utils.generateGroups = (arr, size) => {
  //your code here
  for (let i = 0; i < arr.length; i++) {
    return [arr.slice(0, size), arr.slice(size)];
  }
};

// utils.getInitials = str => {
//   //your code here
//   let strArr = str.split(" ");
//   let initialsArr = [];

//   for (let i = strArr.length + 1; i > strArr.length; i++) {
//     initialsArr.push(strArr[1]);
//   }
//   return initialsArr.join("").toUpperCase();
// };
