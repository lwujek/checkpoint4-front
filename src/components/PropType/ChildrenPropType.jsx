import PropTypes from "prop-types";

const ChildrenPropType = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
export default ChildrenPropType;
