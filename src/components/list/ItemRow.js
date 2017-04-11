/**
 * Created by BlisS on 22/03/17.
 */
import React from 'react';


const ItemRow = ({item, handlerDelete, handleBuy}) => {

  const didClickButton = (e) => {
    e.preventDefault();
    handleBuy(item);
  };

    return (
      <div>
        <a className={item.purchased ? "list-group-item disabled" : "list-group-item"}>
          <button value={item.id} onClick={handlerDelete} className="btn btn-danger">Borrar</button>

          {item.name}

           <input onClick={didClickButton} type="submit" className={item.purchased ? 'btn btn-success' :'btn btn-primary'} value={item.purchased ? 'Comprado' :'Falta'} />
        </a>

      </div>
    );
};

ItemRow.propTypes = {
  item: React.PropTypes.object.isRequired,
  handleBuy: React.PropTypes.func,
  handlerDelete: React.PropTypes.func

};

export default ItemRow;
