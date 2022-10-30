import { ReactNode } from 'react';
import styles from './index.module.scss';

export const Demo = (props: { children: ReactNode }) => {
  const { children } = props;
  return (
    <div className={styles.wrapper}>
      <div className={styles.demo}>{children}</div>
    </div>
  );
};
