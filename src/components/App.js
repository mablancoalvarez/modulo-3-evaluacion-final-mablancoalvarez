import React from 'react';
import '../App.scss';
import fetchData from '../services/FetchData';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetails';
import { Route, Switch } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import Header from './Header';
// import logo from '../images/logo.png';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.foundItem = this.foundItem.bind(this);
    this.state = {
      data: [],
      value: '',
      isFound: true
    }
  }

  componentDidMount() {

    const datavalue = JSON.parse(localStorage.getItem('datavalue'));
    if (datavalue !== null) {
      this.setState({
        value: datavalue
      })
    }
    fetchData()
      .then(data => {
        this.setState({
          data: data.results
        })
      })
  }

  componentDidUpdate() {
    localStorage.setItem('datavalue', JSON.stringify(this.state.value));

  }
  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
    })
    this.foundItem(inputValue)
  }

  foundItem(inputValue) {
    const characters = this.state.data;
    let found = false;
    for (let character of characters) {
      if (character.name.toLowerCase().includes(inputValue.toLowerCase()) || inputValue === '') {
        found = true;
        break;
      }
    }
    if (found) {
      this.setState({
        isFound: true
      })
    } else {
      this.setState({
        isFound: false
      })
    }
  }

  renderCharacterDetail(props) {
    console.log(props)
    const routeId = props.match.params.id;
    const characters = this.state.data;
    let found = false;
    let characterFound;
    for (let character of characters) {
      if (character.id === parseInt(routeId)) {
        found = true;
        characterFound = character;
        break;
      }
    }
    if (found) {
        return <CharacterDetails charactObj={characterFound} />
      } else {
        return <ErrorMessage/>
      }
    }
  

  render() {
    const { data, value, isFound } = this.state

    return (

      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filters handleInputValue={this.handleInputValue}
              value={value}
            />
            <span className={isFound === true ? 'hidden' : ''}>No hay resultados para {value}</span>
            <CharacterList
              data={data}
              inputValue={value}
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
