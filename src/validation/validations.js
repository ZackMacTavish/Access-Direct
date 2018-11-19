
// export const isEmpty = value => {
//   if (value == null) {
//       return false;
//   }
//
//   if (value === ''){
//       return false;
//   }
//
//   return true;
// };

export const isGreaterThan = (value, limit) => {
    if(value > limit) {
        return true;
    } else {
        return false;
    }
};

export const isLessThan = (value, limit) => {
  if(value < limit){
      return true;
  } else {
      return false;
  }
};