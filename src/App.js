import './App.css';
import React from 'react';
import photo from"./image1.jpg"
import Timer from './timer';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      fullName:'Med',
      bio:'ne le 21 octobre 2000',
      imgSrc:photo,
      profession:'Instractor',
      show:true,
    }
  }
showtest= () => {
  this.setState({
    show:!this.state.show,
  })
}
  render(){

    let userName = this.state.fullName;

    return <div className='App'>
      <p style={{color:'red'}} >hello from my class component</p>
      <br/>
    {this.state.show=== true? <p>{userName},{this.state.bio},     <img src={this.state.imgSrc}/>    ,{this.state.profession}</p>:<p>unknown</p>}
    <br/>
    <button on onClick={this.showtest }>{this.state.show?"hide profile":"show profile"} </button>
    <div style={{marginTop: '70px'}}>
      <Timer/>
    </div>
    </div>
  }
}



export default App;
