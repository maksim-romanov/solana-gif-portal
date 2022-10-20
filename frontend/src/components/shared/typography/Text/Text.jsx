import cl from 'classnames';

import * as s from './styles.module.css';

function Text({ children }) {
  return <span className={cl(s.base)}>{children}</span>;
}

export default Text;
