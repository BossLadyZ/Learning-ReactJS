import React from 'react';
//import ReactDOM from 'react-dom';



class App extends React.Component {
state= {
  LambaDaya: 0,
  LambaBiyu: 0,
  Result: 0
};

onSubmit = (e) => {
  e.preventDefault()
  //const result = Number(this.state.LambaDaya) + Number(this.state.LambaBiyu)
  //alert("Your Result is : " + result );
}

onAddClick = (e) => {
  e.preventDefault()
  const result = Number(this.state.LambaDaya) + Number(this.state.LambaBiyu)
  alert("Your Result is : " + result );
}

onMinusClick = (e) => {
  e.preventDefault()
  const subtract = Number(this.state.LambaDaya) - Number(this.state.LambaBiyu)
  alert("Your Result is : " + subtract );
}

  render(){
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <label>Enter your first number: </label>
            <input
            type="number"
            name="LambaDaya"
            //onChange={this.onInputChange}
          //uncontrolled  //onChange={(e) => console.log(e.target.value)}
          value={this.state.name}
          onChange={(e) => this.setState({
            [e.target.name]: e.target.value
          })}
            />
          </div>
          <div>
            <label>Enter your Second number: </label>
            
            <input
            type="number"
            name="LambaBiyu"
            
            //onChange={this.onInputChange}
          //uncontrolled  //onChange={(e) => console.log(e.target.value)}
          
          value={this.state.name}
          onChange={(e) => this.setState({
            [e.target.name]: e.target.value
          })}
            />
          </div>
          
          <input
          type="submit"
          value="Add"
          onClick={this.onAddClick}
          />


          <input
          type="submit"
          value="Subtract"
          onClick={this.onMinusClick}
          />
          </form>

      </div>


      //on click of the button, i want values from both input to be added and the 
      //results shown
    );

  }
}
 export default App
