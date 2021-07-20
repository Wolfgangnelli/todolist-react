import React from "react";
import PropTypes from "prop-types";

const filterlink = props => {
  let { actionType, children, onClickFilter, activeFilter } = props;
  if (activeFilter === actionType) {
    return <p className="text-blue-500 border-b border-blue-500">{children}</p>;
  }
  return (
    <a
      href="#"
      className="hover:text-blue-600"
      onClick={e => {
        e.preventDefault();
        // faccio qui il dispatch
        onClickFilter(actionType);
      }}
    >
      {children}
    </a>
  );
};

filterlink.propTypes = {
  props: PropTypes.shape({
    actionType: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
    onClickFilter: PropTypes.func.isRequired,
    activeFilter: PropTypes.string.isRequired
  })
};

export default filterlink;
