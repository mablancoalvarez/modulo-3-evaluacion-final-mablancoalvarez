import React from 'react';
import '../App.scss';
import fetchData from '../services/FetchData';
import CharacterList from './CharacterList';
import Filters from './Filters';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue= this.handleInputValue.bind(this);
    this.state= {
      data: [],
      value: ''
    } 
  }


  componentDidMount() {
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
    })
  }



  render() {
    console.log(this.state.data)
    return (
      <div className="App">
        <h1>Rick and Morty</h1>
        <Filters handleInputValue={this.handleInputValue}
                  
        
        />
      <CharacterList 
      data={this.state.data}
      inputValue={this.state.value}
      
      />
      </div>
    );
  }
}

export default App;
