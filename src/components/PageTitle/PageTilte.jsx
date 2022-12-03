import css from './PageTitle.module.css';
import PropTypes from 'prop-types';

export const PageTitle = ({ text }) => {
  return (<div>
    {text && <h2 className={css.title}>{text}</h2>}
  </div> );
};

PageTitle.propTypes = {
  text: PropTypes.string,
};
