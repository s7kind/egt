import { DM_Sans } from 'next/font/google';
import Footer from '@components/Footer';
import Header from '@components/Header';

const DMSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',
});

const Layout = ({ children }) => {
  return (
    <div className={DMSans.className}>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
