import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Person.css';
import withClass from '../../../hoc/withClass';
import Aux from '../../../hoc/Auxe';
import { AuthContext } from '../../../containers/App';

class Person extends Component {
  constructor( props ) {
    super( props );
    console.log('[Person.js] inside Constructor', props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log('Person.js inside component will mount');
  }

  componentDidMount() {
    console.log('Person.js inside component did mount');
    if (this.props.position === 0 ) this.inputElement.current.focus();
  }

  focus() {
    this.inputElement.current.focus();
  }

  render() {
    console.log('Person.js inside render');

    return (
      <Aux>
        <AuthContext.Consumer>
          {auth => auth ? <p> I'm authenticated </p> : null}
        </AuthContext.Consumer>
        <p onClick={ this.props.click }> I'm { this.props.name } and I am { this.props.age }</p>
        <p> { this.props.children}</p>
        <input 
          ref={this.inputElement}
          type="text" 
          onChange={ this.props.changed } 
          value={this.props.name } />
      </Aux>
  )};
}

Person.propTypes = {
  click: PropTypes.func,
  name: PropTypes.string,
  age: PropTypes.number,
  change: PropTypes.func
};

export default withClass(Person, classes.Person);