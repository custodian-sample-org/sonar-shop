import React from 'react';
import PropTypes from "prop-types";

export const Card = (props) => {
  return (
    <div className="card">
      <h3>{props.title}{props.count ? `(${props.count})` : ''}</h3>
      {props.children}
    </div>
  );
};


Card.propTypes = {
  title: PropTypes.string.isRequired,
  count: PropTypes.number,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]).isRequired
}
