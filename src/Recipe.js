import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Recipe extends Component {
  static propTypes = {
    recipe: PropTypes.shape({
      title: PropTypes.string.isRequired
    })
  }

  render() {
    return (
      <div>
        <h3>{this.props.recipe.title}</h3>
      </div>
    )
  }
}