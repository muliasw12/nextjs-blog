import MainLayout from '../src/components/layout/main-layout';
import 'bootstrap/dist/css/bootstrap.css'; 
import '../styles/styles.css';
import '../styles/profile.css';
import '../styles/explore.css';
import { useEffect } from "react";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
    }, []);
  return (
    <>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
}


export default MyApp;


