import actionTypes from '../actionTypes';
import data from '../../serverDB/data.json';

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
            return mapInitData(state,action);
        case actionTypes.INIT_GAME_SUCCESS:
            return { ...state, loading: true, error: null };
        case actionTypes.BUY_SHOP:
            return buyShop(state,action)
            default:
                return state;
    }
}
export default businessGame;

function mapInitData(state,action){
    console.log("mapInitData",data.initState);
    return {...state,
        totalCashAmount: data.initState.totalCashAmount,
        shopsConfig: data.shopsConfig,
        ShopsList:createShops(data.initState.ShopsList)
    }

}
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