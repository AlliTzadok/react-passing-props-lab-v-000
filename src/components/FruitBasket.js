import React, { Component }  from 'react';
import PropTypes from 'prop-types';

import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';

const FruitBasket = props => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={props.updateFilterCallback} />
      <FilteredFruitList
        filter={props.currentFilter} />
    </div>
  )
}

FruitBasket.defaultProps = {
  filters: PropTypes.array,
  fruit: PropTypes.array,
  currentFilter: PropTypes.string,
  updateFilterCallback: PropTypes.func
}

export default FruitBasket;
