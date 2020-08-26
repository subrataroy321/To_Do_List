import React, {Component} from 'react';
import './App.css';
import ListItem from './components/ListItem.js'

class MyList extends Component {

  constructor (props) {
    super()
    this.state = {
      toDoItemArray: props.theList
    }
  }

  state = {
    newItem: ''
  }
  
  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }
  
  
  addItem = (e) => {
    e.preventDefault()
    let newToDoItemArray = this.state.toDoItemArray
    newToDoItemArray.push(this.state.newItem)
    console.log(newToDoItemArray)
    this.setState({
      toDoItems: newToDoItemArray,
      newItem: '' 
    })
  }
  
  clearList (e) {
    console.log('clearing List!')
    this.setState({
      toDoItemArray: [],
      toDoItems: this.state.toDoItemArray
    })
  }

  render() {
    let todoItems = this.state.toDoItemArray.map((item, index)=> (
      <ListItem doThis={item} key={'todo' + index} />
    ))
    return (
      <div>
        <h1> Things I should stop procrastinating:</h1>
        <ul>
          {todoItems}
        </ul>
        <form>
          <input type="text" placeholder="Type an item here" onChange={(e) => this.newItemChange(e)} value={this.state.newItem} />
          <button onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button onClick={(e) => this.clearList(e)}>Finished the List!</button>
      </div>
    )
  }
}

export default MyList;
