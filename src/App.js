import './App.css';
import React, {Component} from 'react'
import {Button} from 'react-bootstrap'
import Gifts from './Gifts'

class App extends Component {

  state={
    gifts: [],
  }

  addGift=()=>{
    const {gifts} =this.state;
    const id = gifts.map(gifts => gifts.id);
    const max_id = id.length > 0 ? Math.max(...id) : 0
    gifts.push({id : max_id+1})
    this.setState(gifts)
  }

  removeGifts=(id)=>{
    const giftsDelete = this.state.gifts.filter(idGifts => idGifts.id !== id)
    this.setState({gifts:giftsDelete})
  }

  render(){
    const {gifts} = this.state;
    const  divChildren = gifts.map(element =>{
      return(
            <Gifts 
              removeGifts={this.removeGifts}
              key={element.id}
              gifts={element.id}/>
      )
    })

    return(
      <div className="App">
          <h2>Gift Giver</h2>
        <div className='gifts-list'>
          {divChildren}
        </div>
        <Button className='btn-add' onClick={this.addGift}>Add gift</Button>
         
  
      </div>
    );
    
  }

   

  
}

export default App;
