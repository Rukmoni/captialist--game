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

   // Buy SHOP
   BUY_SHOP: '[SHOP] Buy SHOP',
   BUY_SHOP_SUCCESS: '[Server] Buy SHOP Success',
   BUY_SHOP_ERROR: '[Server] Buy SHOP Error',
 
   // Manage Order
   MANAGE_ORDER: '[SHOP] Manage Order',
   MANAGE_ORDER_SUCCESS: '[Server] Manage Order Success',
   MANAGE_ORDER_ERROR: '[Server] Manage Order Error',
   MANAGE_ORDER_TICK: '[Timer] Manage Order Tick',
   MANAGE_ORDER_FINISH: '[Timer] Manage Order Finish',
 
   // Expand SHOP
   EXPAND_SHOP: '[SHOP] Expand',
   EXPAND_SHOP_SUCCESS: '[Server] Expand Success',
   EXPAND_SHOP_ERROR: '[Server] Expand Error',
 
   // Hire Manager
   HIRE_MANAGER: '[SHOP] Hire Manager',
   HIRE_MANAGER_SUCCESS: '[Server] Hire Manager Success',
   HIRE_MANAGER_ERROR: '[Server] Hire Manager Error',
 
   // Others
   CLOSE_IDLE_DIALOG: '[Dialog] Close Idle Dialog'

}

export default actionTypes;