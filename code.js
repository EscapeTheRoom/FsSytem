const utils = {};

utils.getInitials = str => {
  //your code here
  let strArr = str.split(" ");
  let initialsArr = [];

  for (let i = 0; i < strArr.length; i++) {
    initialsArr.push(strArr[i]);
  }
  return initialsArr.join("").toUpperCase();
};
