import Footer from './components/Footer';
import Navbar from './components/Navbar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function RootLayout({ children }) {
  return (
    <>
      <ToastContainer autoClose={1000} limit={2} />
    <main className='flex flex-col justify-between h-screen '>
      <Navbar />
      {children}
      <Footer />
    </main>
    </>
  )
}
