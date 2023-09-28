import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../main.scss'

const InnerLayout = () => {
    return (
        <>
            <Header />
            <main className="cd-main" id="content" role="main">
                <div className="container">
                    <Outlet /> 
                </div>
            </main>
            <Footer />
        </>
    )
  }
  
  export default InnerLayout;