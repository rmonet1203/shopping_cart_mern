import dispatcher from '../dispatcher';

export default {
  add: function(item){
    dispatcher.dispatch({
      type: "ITEM:ADD",
      payload: item
    });
  },
  delete: function(item){
    dispatcher.dispatch({
      type: "ITEM:DELETE",
      payload: item
    });
  },
  buy: function(item){
    dispatcher.dispatch({
      type: "ITEM:BUY",
      payload: item
    });
  },
  unbuy: function(item){
    dispatcher.dispatch({
      type: "ITEM:UNBUY",
      payload: item
    });
  }
}
