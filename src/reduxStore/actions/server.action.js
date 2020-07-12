
const serverComands = {
    BUY_BUSINESS: "buyBusiness",
    MANAGE_ORDER: "manageOrder",
    MANAGE_ORDER_START: "manageOrderStart",
    EXPAND_BUSINESS: "expandBusiness",
    HIRE_MANAGER: "hireManager"
  }

export function buyBusiness(payload) {
    console.log("BUY_BUSINESS ")
    return {
      command: serverComands.BUY_BUSINESS,
      message: payload
    }
  }
  
  export function manageOrder(payload) {
    return {
      command: serverComands.MANAGE_ORDER,
      message: payload
    }
  }
  
  export function expandBusiness(payload) {
    return {
      command: serverComands.EXPAND_BUSINESS,
      message: payload
    }
  }
  
  export function hireManager(payload) {
    return {
      command: serverComands.HIRE_MANAGER,
      message: payload
    }
  }
  
  export function manageOrderStart(payload) {
    return {
      command: serverComands.MANAGE_ORDER_START,
      message: payload
    }
  }