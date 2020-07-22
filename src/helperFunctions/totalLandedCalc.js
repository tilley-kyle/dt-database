const totalLandedCalc = (machineObj) => {
  const totalLandedItems = ['TW_Invoice_Total', 'Duty_Tarrif', 'Port_Handling', 'Devaning', 'Other_Handling'];
  let totalLanded = 0;
  for (const item of totalLandedItems) {
    if (machineObj[item]) {
      totalLanded += parseFloat(machineObj[item]);
    }
  }
  return totalLanded;
};

export default totalLandedCalc;