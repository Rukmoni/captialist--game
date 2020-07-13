// Maths
function msToHMS(ms){
  let secNum = ms / 1000;
  let hours = Math.floor(secNum / 3600);
  let minutes = Math.floor((secNum - hours * 3600) / 60);
  let seconds = secNum - hours * 3600 - minutes * 60;

  if (hours < 10) {
    hours = "0" + hours;
  }
  if (minutes < 10) {
    minutes = "0" + minutes;
  }
  if (seconds < 10) {
    seconds = "0" + seconds;
  }

  let timer = hours + ":" + minutes + ":" + seconds;
  return timer;

}

function getBusinessRevenue(initialProductivity, businessLevel, ms) {
    const revenue = (initialProductivity * businessLevel) * (ms / 1000);
    return Math.round(revenue * 100) / 100;
  }
  
  function getNextExpandCost(initialCost, businessLevel, rateGrowth) {
  
    // Fix initial cost for limonade, the first one is free, next 4
    const costBase = initialCost || 3.738;
    const owned = businessLevel;
    const cost = Math.round(costBase * Math.pow(rateGrowth, owned) * 100) / 100;
    return cost;
  }
  
  function getBusinessRevenuePerSecond(initialProductivity, businessLevel) {
    const revenuePerSecond = (initialProductivity * businessLevel);
    return Math.round(revenuePerSecond * 100) / 100;
  }
  
  export default {
    msToHMS,
    getBusinessRevenue,
    getNextExpandCost,
    getBusinessRevenuePerSecond
  }