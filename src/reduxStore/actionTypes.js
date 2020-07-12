const actionTypes={

 

      // Init Game
  INIT_GAME: '[Game] Init',
  INIT_GAME_SUCCESS: '[Server] Init Succesfully',
  INIT_GAME_ERROR: '[Server] Init Error',

      // Websocket
  WS_CONNECT: "[Websocket] Connect",
  WS_CONNECTING: "[Websocket] Connecting",
  WS_CONNECTED: "[Websocket] Connected",
  WS_DISCONNECT: "[Websocket] Disconnect",
  WS_DISCONNECTED: "[Websocket] Disconnected",
  WS_MESSAGE: "[Websocket] Send Message",

   // Buy BUSINESS
   BUY_BUSINESS: '[BUSINESS] Buy BUSINESS',
   BUY_BUSINESS_SUCCESS: '[Server] Buy BUSINESS Success',
   BUY_BUSINESS_ERROR: '[Server] Buy BUSINESS Error',
 
   // Manage Order
   MANAGE_ORDER: '[BUSINESS] Manage Order',
   MANAGE_ORDER_SUCCESS: '[Server] Manage Order Success',
   MANAGE_ORDER_ERROR: '[Server] Manage Order Error',
   MANAGE_ORDER_TICK: '[Timer] Manage Order Tick',
   MANAGE_ORDER_FINISH: '[Timer] Manage Order Finish',
 
   // Expand BUSINESS
   EXPAND_BUSINESS: '[BUSINESS] Expand',
   EXPAND_BUSINESS_SUCCESS: '[Server] Expand Success',
   EXPAND_BUSINESS_ERROR: '[Server] Expand Error',
 
   // Hire Manager
   HIRE_MANAGER: '[BUSINESS] Hire Manager',
   HIRE_MANAGER_SUCCESS: '[Server] Hire Manager Success',
   HIRE_MANAGER_ERROR: '[Server] Hire Manager Error',
 
   // Others
   CLOSE_IDLE_DIALOG: '[Dialog] Close Idle Dialog'

}

export default actionTypes;