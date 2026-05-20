import '../styles/globals.css';

export const metadata = {
  title: 'Karthik Celiveru | DevOps Engineer',
  description: 'DevOps & Cloud Engineer Portfolio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
