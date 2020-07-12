import actionTypes  from '../actionTypes';

export function initGame(){
    return{
        type:actionTypes.INIT_GAME,
        payload:null
    }
}

export function buyShop(shopKey) {
    return {
      type: actionTypes.BUY_SHOP,
      payload: shopKey
    }
  }
  
  export function manageOrder(shopKey) {
    return {
      type: actionTypes.MANAGE_ORDER,
      payload: shopKey
    }
  }
  
  export function expandBusiness(shopKey) {
    return {
      type: actionTypes.EXPAND_SHOP,
      payload: shopKey
    }
  }
  
  export function hireManager(shopKey){
    return {
      type: actionTypes.HIRE_MANAGER,
      payload: shopKey
    }
  }
  
  export function closeIdleDialog() {
    return {
      type: actionTypes.CLOSE_IDLE_DIALOG,
      payload: null
    }
  }
  