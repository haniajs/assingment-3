import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Link from "next/link";

function ContactPage(){
    return(
      <div>
        <Header></Header>
  
        <main className="bg-white bg-cover bg-center bg-no-repeat">
          <div className="w-full h-screen flex justify-center items-center bg-black bg-opacity-25">
            <aside className="bg-white w-full max-w-md rounded-xl bg-opacity-20 shadow-lg shadow-red-600">
              <h1 className="text-center text-white font-light text-4xl bg-red-600 rounded-t-xl m-0 py-4">
                Sign Up</h1>

                <form className="p-6">
                 
                <input type="text" name="" placeholder="Username" className="py-2 px-3 w-full text-black 
                  text-lg font-light outline-none"/>

                <input type="e-mail" name="" placeholder="E-mail" className="py-2 px-3 w-full text-black 
                  text-lg font-light outline-none mt-3"/>

                 <input type="text" name="" placeholder="password" className="py-2 px-3 w-full text-black 
                  text-lg font-light outline-none mt-3" />

                 <input type="text" name="" placeholder="Confirm password" className="py-2 px-3 w-full text-black 
                  text-lg font-light outline-none mt-3" />

                  <div className="flex mt-5 justify-between items-center">
                    <Link href="/" className="text-red-600 cursor-pointer transition hover:text-black">
                      Already Register?</Link>
                      <button type="submit" className="bg-red-600 text-white font-medium py-2 px-8 transition
                      hover:text-black">
                        Sign Up</button>
                  </div>
                </form>

            </aside>
          </div>

        </main>
      
        <Footer></Footer>
      </div>
    );
  }
  
  export default ContactPage;