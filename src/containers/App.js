import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import Aux from '../hoc/Auxe';
import withClass from '../hoc/withClass';


class App extends PureComponent {
  constructor( props ) {
    super( props );
    console.log('[App.js] inside Constructor', props);
    this.state = {
      persons: [
        { id: 'dgdg', name: 'Max', age: 28 },
        { id: 'afdgdfg', name: 'Manu', age: 29 },
        { id: 'dfgfg', name: 'Stephanie', age: 26 }
      ],
      otherState: 'some other value',
      showPersons: false,
      toggleClicked: 0
    };
  }

  // state = {
  //   persons: [
  //     { id: 'dgdg', name: 'Max', age: 28 },
  //     { id: 'afdgdfg', name: 'Manu', age: 29 },
  //     { id: 'dfgfg', name: 'Stephanie', age: 26 }
  //   ],
  //   otherState: 'some other value',
  //   showPersons: false
  // }

  componentWillMount() {
    console.log('App.js inside component will mount');
  }

  componentDidMount() {
    console.log('App.js inside component did mount');
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log( 'Update app.js inside shouldComponentUpdate', nextProps, nextState );
  //   return nextState.persons !== this.state.persons || nextState.showPersons !== this.state.showPersons;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log( ' Update app.js inside ccomponentwillUpdaye', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Update app.js inside componentDidUpdate');
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState((prevState, props) => {
      return {
        showPersons: !doesShow, 
        toggleClicked: prevState.toggleClicked + 1
      }
    });
  }

  nameChangedHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    });

    const person = {...this.state.persons[personIndex]};

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
    })
  }

  deletePersonHandler = (personIndex) => {
    const persons = this.state.persons.slice();
    persons.splice(personIndex, 1);
    this.setState({persons: persons});
  }

  render() {
    console.log('App.js inside render');
    let persons = null;

    if (this.state.showPersons) {
      persons = <Persons 
            persons={this.state.persons} 
            clicked={this.deletePersonHandler} 
            changed={this.nameChangedHandler}/>
    }

    return (
      <Aux>
        <button onClick={ () => {this.setState({showPersons: true})} }>Show Persons</button>
          <Cockpit 
            appTitle={this.props.title}
            showPersons={this.state.showPersons}
            clicked={this.togglePersonsHandler} 
            persons={this.state.persons}/>
          {persons}
      </Aux>
    );
  }
}

export default withClass(App, classes.App);
