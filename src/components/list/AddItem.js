import React from 'react';
import actions from '../../actions/ActionsItem';

export default class AddItem extends React.Component {
  constructor(){
    super();

    this.state = {
      input: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.addItem = this.addItem.bind(this);

  }

  handleInput(e){
    this.setState({
      input: e.target.value
    });
    console.log(this.state.input);
  }

  addItem(e){
    e.preventDefault();
    console.log('Agregando item...', this.state.input);
    actions.add({
      id: this.state.input + 1,
      name: this.state.input
    });
    this.setState({
      input: ""
    });

  }

  render(){
    return(
      <form onSubmit={this.addItem}>
        <input onChange={this.handleInput} value={this.state.input} type="text" className="form-control" placeholder="Agrega algún item"/>
        <input type="submit" className="btn btn-success"/>
      </form>
    );
  }
}
