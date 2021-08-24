/* eslint-disable react/jsx-props-no-spreading */
import React from "react";
import Button from "@material-ui/core/Button";
import PropTypes from "prop-types";

const CustomButton = ({ children, onClick, ...props }) => (
  <Button onClick={onClick} variant="contained" color="primary" {...props}>
    {children}
  </Button>
);

CustomButton.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
