const grossProfitCalc = (machineObj, totalLanded) => {
  if (machineObj['CUSA_Invoice_Total'] && totalLanded) {
    return parseInt(machineObj['CUSA_Invoice_Total']) - totalLanded;
  }
  return null;
};

export default grossProfitCalc;