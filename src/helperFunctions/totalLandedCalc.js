const totalLandedCalc = (machineObj) => {
  const totalLandedItems = ['TW-Invoice-Total', 'Duty/Tarrif', 'Port-Handling', 'Devaning', 'Other-Handling'];
  let totalLanded = 0;
  for (const item of totalLandedItems) {
    if (machineObj[item]) {
      totalLanded += parseInt(machineObj[item]);
    }
  }
  return totalLanded;
};

export default totalLandedCalc;