import PropTypes from "prop-types";
import React from "react";
import { connect } from "react-redux";

export const AdminPage = (props) => {
  return <div>adminPage</div>;
};

AdminPage.propTypes = {
  second: PropTypes.third,
};

const mapStateToProps = (state) => ({});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(AdminPage);
