import dispatcher from '../dispatcher';
import _ from 'lodash';
import {returnItems, postItem} from '../api/restHelper';
import actions from '../actions/ActionsItem';

function ItemStore(){

  let items = [{id:"22",name:"putos"}];
  let listeners = [];
  returnItems()
    .then((data)=>{
      items = data;
    });

  function getItems(){
    return items;

  }

  function addItem(item){
    items.push(item);
    triggerListeners();
    postItem(item);

  }

  function deleteItem(itemId){
    _.remove(items, function(itemHere){
      return itemId === itemHere.id;
    });

    triggerListeners();
  }

  function buyItem(item){
    item.purchased = true;
    _.replace(items,itemHere=>item.id === itemHere.id,item);
    triggerListeners();
  }

  function unbuyItem(item){
    item.purchased = false;
    _.replace(items,itemHere=>item.id === itemHere.id,item);
    triggerListeners();
  }

  function onChange(listener){
    listeners.push(listener);
  }

  function triggerListeners(){
    listeners.forEach(function(listener){
      listener(items);
    });
  }

  dispatcher.register(function(event){
    let split = event.type.split(':');
    if (split[0] === 'ITEM'){
      switch(split[1]){
        case "ADD":
          addItem(event.payload);
          break;
        case "DELETE":
          deleteItem(event.payload);
          break;
        case "BUY":
          buyItem(event.payload);
          break;
        case "UNBUY":
          unbuyItem(event.payload);
          break;
      }
    }
  });

  return {
    getItems: getItems,
    onChange: onChange
  };

}

export default new ItemStore();
