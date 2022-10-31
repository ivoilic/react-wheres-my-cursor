import { Demo } from '~/components/Demo';
import styles from './page.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.demo}>
        <Demo>1</Demo>
        <Demo>2</Demo>
        <Demo>3</Demo>
        <Demo>4</Demo>
        <Demo>5</Demo>
        <Demo>6</Demo>
        <Demo>7</Demo>
        <Demo>8</Demo>
      </div>
    </div>
  );
}
