import React, { Component } from 'react';
import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxe';

class Person extends Component {
  constructor( props ) {
    super( props );
    console.log('[Person.js] inside Constructor', props);
  }

  componentWillMount() {
    console.log('Person.js inside component will mount');
  }

  componentDidMount() {
    console.log('Person.js inside component did mount');
  }

  render() {
    console.log('Person.js inside render');

    return (
      <Aux>
        <p onClick={ this.props.click }> I'm { this.props.name } and I am { this.props.age }</p>
        <p> { this.props.children}</p>
        <input type="text" onChange={ this.props.changed } value={this.props.name } />
      </Aux>
  )};
}

export default withClass(Person, classes.Person);