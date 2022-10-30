'use client';
import { ReactNode, useRef } from 'react';
import { useWheresMyCursor } from '@wheres-my-cursor/react';
import styles from './index.module.scss';

export const Demo = (props: { children: ReactNode }) => {
  const { children } = props;
  const ref = useRef<HTMLDivElement>();
  const { angle } = useWheresMyCursor(ref);
  return (
    <div className={styles.wrapper} ref={ref} style={{ '--angle': `${angle.degrees}deg` }}>
      <div className={styles.demo}>{children}</div>
    </div>
  );
};
