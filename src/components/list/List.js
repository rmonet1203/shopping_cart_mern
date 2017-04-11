/**
 * Created by BlisS on 10/04/17.
 */
import React from 'react';
import ItemRow from './ItemRow';
import AddItem from './AddItem';
import ItemStore from '../../stores/ItemStore';
import actions from '../../actions/ActionsItem';



class List extends React.Component {
  constructor(){
  super();

  this.state = {
    items: ItemStore.getItems()
  };

  this.deleteItem = this.deleteItem.bind(this);
  this.handleBuy = this.handleBuy.bind(this);
  }


  deleteItem(e){
    e.preventDefault();
    let itemId = e.target.value;
    actions.delete(itemId);
  }

  handleBuy(item){
    if(item.purchased){
      actions.unbuy(item);
    } else {
      actions.buy(item);
    }
  }

  render(){
    return (
      <div className="jumbotron">
        <h1>Lista de Compras</h1>
        <ul className="list-group">
          {this.state.items.map(item=>
            <ItemRow key={item.id} item={item} handlerDelete={this.deleteItem} handleBuy={this.handleBuy} />
          )}
        </ul>
        <AddItem />
      </div>
    );
  }
}

export default List;
