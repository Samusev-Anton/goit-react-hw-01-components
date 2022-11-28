import css from './PageTitle.module.css';
import PropTypes from 'prop-types';

export const PageTitle = ({ text }) => {
  return <h2 className={css.title}>{text}</h2>;
};

PageTitle.propTypes = {
  text: PropTypes.string.isRequired,
};
