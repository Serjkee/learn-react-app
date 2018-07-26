import React, { PureComponent } from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  constructor( props ) {
    super( props );
    console.log('[Persons.js] inside Constructor', props);
  }

  componentWillMount() {
    console.log('Persons.js inside component will mount');
  }

  componentDidMount() {
    console.log('Persons.js inside component did mount');
  }

  componentWillReceiveProps(nextProps) {
    console.log('Update persons.js inside componentWillReceiveProps', nextProps);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   console.log( 'Update persons.js inside shouldComponentUpdate', nextProps, nextState );
  //   return nextProps.persons !== this.props.persons || nextProps.changed !== this.props.changed || nextProps.clicked !== this.props.clicked;
  //   // return true;
  // }

  componentWillUpdate(nextProps, nextState) {
    console.log( ' Update persons.js inside ccomponentwillUpdaye', nextProps, nextState);
  }

  componentDidUpdate() {
    console.log('Update persons.js inside componentDidUpdate');
  }

  render() {
    console.log('Persons.js inside render');

    return this.props.persons.map( (person, index) => {
      return <Person 
        click={ () => this.props.clicked(index) }
        name={person.name}
        key={person.id} 
        age={person.age} 
        changed={ (event) => this.props.changed(event, person.id)}/>
      });
  }
}

  export default Persons;