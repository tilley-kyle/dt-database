const grossProfitCalc = (machineObj, totalLanded) => {
  if (machineObj['CUSA-Invoice-Total'] && totalLanded) {
    return parseInt(machineObj['CUSA-Invoice-Total']) - totalLanded;
  }
  return null;
};

export default grossProfitCalc;