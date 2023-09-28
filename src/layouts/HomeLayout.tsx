import { Outlet } from 'react-router-dom';

import Header from '../components/home/Header';
import Footer from '../components/home/Footer';

// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../Styles.scss';

const HomeLayout = () => {
    return (
        <div id='homepage'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default HomeLayout;
