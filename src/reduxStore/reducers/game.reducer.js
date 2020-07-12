import actionTypes from '../actionTypes';


const INIT_STATE={
    showIdleDialog: false,
  socketConnected: true,
  loading: false,
  error: null,
  totalCashAmount: 0,
  ShopsList: {},
  shopsConfig: {}

}

const businessGame=(state=INIT_STATE,action)=>{
    switch(action.type){
        case actionTypes.INIT_GAME:
            return {...state,loading:true,error:null}

        case actionTypes.INIT_GAME_SUCCESS:
            return mapDBToState(state,action);

        case actionTypes.INIT_GAME_ERROR:
      return { ...state, loading: false, error: action.payload };

     
            default:
                return state;
    }
}
export default businessGame;

function mapDBToState(state,action){
   
    return {
       ...state,
       error:null,
       loading:false,
       totalCashAmount: action.payload.gameState.totalCashAmount,
       ShopsList: createShops(action.payload.gameState.businesses),
       shopsConfig: action.payload.businessesConfig,
       showIdleDialog: action.payload.showIdleDialog,
       idleTime: action.payload.idleTime,
       idleRevenue: action.payload.idleRevenue
    }

}

/* ß */
function createShops(ShopsListData){
    let ShopsList={}
   
    ShopsListData.map((shop)=>{
        return ShopsList[shop.shopkey]={
            owner:true,
            level:shop.level,
            manamger:shop.manager
        }
    }); 
  
return ShopsList;

}
function buyShop(state,action){
    console.log("shopKey",action.payload)
    const shopPrice = state.shopsConfig[action.payload].initialCost;
    const newState = { ...state };
  
    if (newState.totalCashAmount >= shopPrice) {
      newState.totalCashAmount = Math.round((newState.totalCashAmount - shopPrice) * 100) / 100;
      newState.ShopsList[action.payload] = {
        owner: true,
        level: action.payload.level,
        managers: []
      }
  
      newState.ShopsList[action.payload.shopkey] = { ...newState.ShopsList[action.payload.shopkey] };

    }
    return { ...newState, ShopsList: { ...newState.ShopsList } };
}