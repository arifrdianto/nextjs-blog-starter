// eslint-disable-next-line import/no-unresolved
import cn from 'classnames';
import propTypes from 'prop-types';
import styles from '../styles/alert.module.css';

export default function Alert({ children, type }) {
  return (
    <div
      className={cn({
        [styles.success]: type === 'success',
        [styles.error]: type === 'error'
      })}
    >
      {children}
    </div>
  );
}

Alert.propTypes = {
  children: propTypes.string.isRequired,
  type: propTypes.string.isRequired
};
