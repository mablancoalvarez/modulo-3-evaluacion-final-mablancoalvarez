import React from 'react';
import '../App.scss';
import fetchData from '../services/FetchData';
import CharacterList from './CharacterList';
import Filters from './Filters';
import CharacterDetails from './CharacterDetails';
import { Route, Switch } from 'react-router-dom';
import ErrorMessage from './ErrorMessage';
import Header from './Header';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.handleInputValue = this.handleInputValue.bind(this);
    this.renderCharacterDetail = this.renderCharacterDetail.bind(this);
    this.handleCheckbox = this.handleCheckbox.bind(this);
    this.foundItem = this.foundItem.bind(this);
    this.handleInputEpisode = this.handleInputEpisode.bind(this);
    this.handleInputLocation = this.handleInputLocation.bind(this)
    this.handleAlive = this.handleAlive.bind(this)
    this.state = {
      data: [],
      value: '',
      isFound: true,
      isHuman: false,
      isAlien: false,
      episode: '',
      location: '',
      isAlive: false
    }
  }
  componentDidMount() {

    const datavalue = JSON.parse(localStorage.getItem('datavalue'));
    const dataalive = JSON.parse(localStorage.getItem('dataalive'));
    if (datavalue !== null) {
      this.setState({
        value: datavalue
      })
    }
 
    if (dataalive !== null){
      this.setState({
        isAlive : dataalive
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
    localStorage.setItem('dataalive', JSON.stringify(this.state.isAlive));


  }


  handleInputEpisode(valuenumber) {
    this.setState({
      episode: valuenumber
    })
  }

  handleInputLocation(valuelocation) {
    this.setState({
      location: valuelocation
    })
  }
  handleInputValue(inputValue) {
    this.setState({
      value: inputValue
    })
    this.foundItem(inputValue)
  }
  handleAlive() {
    this.setState(prevState => {
      return {
        isAlive: !prevState.isAlive
      }

    })
  }
  handleCheckbox(id) {
    this.setState(prevState => {
      return {
        isHuman: (id === 'Human') ? !prevState.isHuman : prevState.isHuman,
        isAlien: (id === 'Alien') ? !prevState.isAlien : prevState.isAlien,
        isAlive: (id === 'Alive') ? !prevState.isAlive : prevState.isAlive
      }
    })
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
      return <ErrorMessage />
    }
  }
  render() {
    const { data, value, isFound, isHuman, isAlien, episode, location, isAlive } = this.state

    return (
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Header />
            <Filters handleInputValue={this.handleInputValue}
              isHuman={isHuman} isAlien={isAlien} handleCheckbox={this.handleCheckbox} handleInputEpisode={this.handleInputEpisode} handleInputLocation={this.handleInputLocation} handleAlive={this.handleAlive}
            value={value}
            isAlive={isAlive}
            // episode={episode}
            // valuelocation={location}
            />
            <div className="notfound">
              <span className={isFound === true ? 'hidden' : ''}>No hay resultados para {value}</span>
            </div>
            <CharacterList
              data={data}
              inputValue={value}
              isHuman={isHuman}
              isAlien={isAlien}
              inputNumber={episode}
              inputLocation={location}
              isAlive={isAlive}
            />
          </Route>
          <Route path="/character/:id" render={this.renderCharacterDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
