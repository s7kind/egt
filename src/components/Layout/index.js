import { Roboto } from 'next/font/google';
import Footer from '@components/Footer';
import Header from '@components/Header';

const roboto = Roboto({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
});

const Layout = ({ children }) => {
  return (
    <div className={roboto.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
