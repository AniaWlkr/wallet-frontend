import PropTypes from 'prop-types';
export default function TableItem(props) {
  const defaultColor = '000000';
  return (
    <li className={props.class}>
      {props.box ? (
        <span
          className={`${props.class}_box`}
          style={{ backgroundColor: `${props.item.color}` }}
        ></span>
      ) : (
        ''
      )}
      <p className={`${props.class}_text`}>{props.item.categoryName}</p>

      <p
        className={`${props.class}_sum`}
        style={{ color: !props.box ? props.item.color : defaultColor }}
      >
        {props.item.total}
      </p>
    </li>
  );
}
TableItem.propTypes = {
  item: PropTypes.shape({
    categoryName: PropTypes.string,
    total: PropTypes.string,
    color: PropTypes.string,
  }),
  class: PropTypes.string,
  box: PropTypes.bool,
};
