

import * as actions from '../actions/websocket.action';
import actionTypes from "../actionTypes";

const webSocketMiddleware = () => {
  let socket = null;

  const onOpen = store => (event) => {
    store.dispatch(actions.wsConnected(event.target.url));
  };

  const onClose = store => () => {
    store.dispatch(actions.wsDisconnected());
  };

  const onMessage = store => (event) => {
    const wsMessage = event.data;
    if (wsMessage) {
      try {
        const message = JSON.parse(wsMessage);
        store.dispatch({ type: message.type, payload: message.payload });        
      } catch (error) {
        console.error(error);     
      }
    }
  };

  // the middleware part of this function
  return store => next => action => {
    switch (action.type) {
      case actionTypes.WS_CONNECT:
        if (socket !== null) {
          socket.close();
        }

        // connect to the remote host
        socket = new WebSocket(action.host);

        // websocket handlers
        socket.onmessage = onMessage(store);
        socket.onclose = onClose(store);
        socket.onopen = onOpen(store);

        break;
      case actionTypes.WS_DISCONNECT:
        if (socket !== null) {
          socket.close();
        }
        socket = null;
        break;
      case actionTypes.WS_MESSAGE:
        try {
          socket.send(JSON.stringify({ command: action.payload.command, payload: action.payload.message }));
        } catch (err) {
          console.log(err);
        }
        break;
      default:
        return next(action);
    }
  };
};

export default webSocketMiddleware();