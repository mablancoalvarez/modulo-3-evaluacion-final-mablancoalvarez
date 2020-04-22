import React from 'react';
import '../App.scss';
import fetchData from '../services/FetchData';
import CharacterList from './CharacterList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state= {
      data: []
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


  render() {
    console.log(this.state.data)
    return (
      <div className="App">
      <CharacterList 
      data={this.state.data}
      
      />
      </div>
    );
  }
}

export default App;
