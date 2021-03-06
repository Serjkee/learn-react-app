import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Auxe';

const cockpit = ( props ) => {
  let assignedClasses = [];
  let btnClass= '';
  if (props.showPersons) {
    btnClass = classes.Red;
  }

    if(props.persons.length <= 2) {
      assignedClasses.push(classes.red);
    } 
    if (props.persons.length <= 1) {
      assignedClasses.push(classes.bold);
    }

  return(
    <Aux>
      <div className={classes.Cockpit}>
        <h1>{ props.appTitle }</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button 
          className={btnClass}
          onClick={ props.clicked }> Toggle Persons </button>
        <button onClick={props.login}>Log in</button>
      </div>
    </Aux>
  );
}

export default cockpit;