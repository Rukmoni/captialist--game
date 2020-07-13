import actionTypes from "../actionTypes";
import util from "../../clickerGame/utlis";

const INIT_STATE = {
  showIdleDialog: false,
  socketConnected: true,
  loading: false,
  error: null,
  totalCashAmount: 0,
  businesses: {},
  businessesConfig: {},
};

const businessGame = (state = INIT_STATE, action) => {
  switch (action.type) {
    case actionTypes.INIT_GAME:
      return { ...state, loading: true, error: null };

    case actionTypes.INIT_GAME_SUCCESS:
      return mapDBToState(state, action);

    case actionTypes.INIT_GAME_ERROR:
      return { ...state, loading: false, error: action.payload };

    // Buy Business
    case actionTypes.BUY_BUSINESS_SUCCESS:
      console.log("BUY_BUSINESS_SUCCESS");
      return buyBusiness(state, action);

    // Hire Manager
    case actionTypes.HIRE_MANAGER_SUCCESS:
      return hireManager(state, action);


       // Expand Business
    case actionTypes.EXPAND_BUSINESS_SUCCESS:
      return expandBusiness(state, action)

      //Manage Order
    case actionTypes.MANAGE_ORDER:
      return manageOrder(state, action);
    case actionTypes.MANAGE_ORDER_TICK:
      return manageOrderTick(state, action);
    case actionTypes.MANAGE_ORDER_SUCCESS:
      return { ...state, totalCashAmount: action.payload };

    default:
      return state;
  }
};
export default businessGame;

function mapDBToState(state, action) {
  return {
    ...state,
    error: null,
    loading: false,
    totalCashAmount: action.payload.gameState.totalCashAmount,
    businesses: createShops(action.payload.gameState.businesses),
    businessesConfig: action.payload.businessesConfig,
    showIdleDialog: action.payload.showIdleDialog,
    idleTime: action.payload.idleTime,
    idleRevenue: action.payload.idleRevenue,
  };
}

/* ß */
function createShops(businessesData) {
  let businesses = {};

  businessesData.map((shop) => {
    return (businesses[shop.businessKey] = {
      owner: true,
      level: shop.level,
      manager: shop.manager,
      processingOrder:false
    });
  });

  return businesses;
}
function buyBusiness(state, action) {
  console.log(action.payload);
  const businessPrice =
    state.businessesConfig[action.payload.businessKey].initialCost;
  const newState = { ...state };

  if (newState.totalCashAmount >= businessPrice) {
    newState.totalCashAmount =
      Math.round((newState.totalCashAmount - businessPrice) * 100) / 100;
    newState.businesses[action.payload.businessKey] = {
      owner: true,
      level: action.payload.level,
      managers: [],
    };

    newState.businesses[action.payload.businessKey] = {
      ...newState.businesses[action.payload.businessKey],
    };
  }

  return { ...newState, businesses: { ...newState.businesses } };
}

function manageOrder(state, action) {
  const newState = { ...state };
  const businessKey = action.payload;
  const business = newState.businesses[businessKey];

  business.processingOrder = true;
  business.timer = newState.businessesConfig[businessKey].initialTime;

  newState.businesses[businessKey] = { ...business };

  return { ...newState, businesses: { ...newState.businesses } };
}

function manageOrderTick(state, action) {
  const newState = { ...state };
  const businessKey = action.payload;
  const business = newState.businesses[businessKey];
  if (business.timer > 0) {
    business.processingOrder = true;
    business.timer = business.timer - 10;
  } else if (!business.managers || business.managers.length === 0) {
    business.timer = 0;
    business.processingOrder = false;
  } else {
    business.processingOrder = true;
    business.timer = newState.businessesConfig[businessKey].initialTime;
  }

  newState.businesses[businessKey] = { ...business };

  return { ...newState, businesses: { ...newState.businesses } };
}

function expandBusiness(state, action) {
  const newState = { ...state };
  const businessKey = action.payload.businessKey;
  const business = newState.businesses[businessKey];
  const rateGrowth = newState.businessesConfig[businessKey].coefficient;
  const costBase = newState.businessesConfig[businessKey].initialCost;
  const businessLevel =
    newState.businesses[businessKey] && business.level ? business.level : 1;
  const cost = util.getNextExpandCost(costBase, businessLevel, rateGrowth);

  newState.totalCashAmount =
    Math.round((newState.totalCashAmount - cost) * 100) / 100;
  business.level = action.payload.level;
  newState.businesses[businessKey] = { ...business };

  return { ...newState, businesses: { ...newState.businesses } };
}

function hireManager(state, action) {
  const newState = { ...state };
  const businessKey = action.payload.businessKey;
  const business = newState.businesses[businessKey];

  business.manager = true;

  const cost = newState.businessesConfig[businessKey].managerPrice;

  newState.totalCashAmount =
    Math.round((newState.totalCashAmount - cost) * 100) / 100;

  newState.businesses[businessKey] = { ...business };

  return { ...newState, businesses: { ...newState.businesses } };
}
