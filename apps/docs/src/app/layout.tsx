import '~/styles/global.scss';
import styles from './layout.module.scss';
import { Nav } from '~/components';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Where&apos;s My Cursor</title>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <div className={styles.app}>
          <Nav />
          <main className={styles.main}>{children}</main>
        </div>
      </body>
    </html>
  );
}
