import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";

export default function Checkout() {
  return (
    <>
      <Navbar />
      <section className="py-32 lg:py-44 relative purple-shadow">
        <div className="container z-10 relative">
          <div className="wrapper h-full grid gap-3 justify-center items-center text-center text-2xl sm:text-3xl md:text-[2rem] lg:text-4xl ">
            <h1>Your payment has been successfully processed!</h1>
            <h1>Thank you!</h1>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
