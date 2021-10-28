import PropTypes from 'prop-types';
import style from "./Button.module.css"

const Button = ({ onClick }) => {
  return (
    <div className="Button-wraper">
      <button className={style.Button} type="button" onClick={onClick}>
        Load more
      </button>
    </div>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;