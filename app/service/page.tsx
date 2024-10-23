import Footer from "../components/footer/Footer";
import Header from "../components/header/Header"


export default function service() {
    return (
        <div>
            <Header></Header>
        <div className="bg-red-600 h-screen">
            <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-
            bg-gradient-to-b from-neutral-50 to-red-600 text-white text-center p-20">Service We Offer</h1>
             <p className="mt-0 font-normal text-base md:text-lg text-white max-w-lg mx-auto">
                We provide many benefits for our customers such as online services, delivery services for free
                off cost etc.
             </p>
        </div>
        <Footer></Footer>
        </div>
    );
}