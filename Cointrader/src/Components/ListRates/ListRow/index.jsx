import React from 'react';
import PropTypes from 'prop-types';

const ListRow = (props) => {

  return (
    <div>
      <p className="base">{props.base}</p>
      <p className="rate">{props.rate}</p>
    </div>
  );
}

ListRow.propTypes = {
  base : PropTypes.string,
  rate : PropTypes.string
}
export default ListRow;
 