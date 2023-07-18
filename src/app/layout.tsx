import '../assets/style/reset.scss';
import Recoil from '@components/Recoil';

export const metadata = {
  title: 'maze-maker',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        id="body"
        style={{
          maxWidth: '575px',
          margin: '0 auto',
          position: 'relative',
          minHeight: '100vh',
          border: '1px solid #3c4043',
          borderRadius: '5px',
        }}
      >
        <Recoil>
          {children}
        </Recoil>
      </body>
    </html>
  );
}
