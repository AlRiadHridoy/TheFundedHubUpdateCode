import Navbar from "../../../components/main/Navbar";
import Footer from "../../../components/main/Footer";
import blogOne from "../../../assets/images/blog-1.png";
import { Link, useLocation } from "react-router-dom";

import blogs from "./data";

import "./blog.css";

export default function SingleBlog() {
  const { pathname } = useLocation();

  const blog = blogs.filter(({ link }) => link === pathname.slice(6));

  return (
    <>
      <Navbar />
      <section className="single-blog bg-dark relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow">
        <div className="container z-10 relative">
          <div className="wrapper max-w-[75rem] m-auto w-full">
            <div className="flex justify-center items-center">
              <div className="blog-img p-[0.03rem] rounded-md hidden">
                <img className="rounded-md" src={blogOne} alt="" />
              </div>
            </div>

            <div className="blog-content global-shadow ">
              <div className="heading">
                <h2 className="font-medium text-2xl xs:text-[1.9rem] tracking-tight text-wht-gradient">
                  {blog[0].title}
                </h2>
              </div>

              <div className="blog-wrap-data">
                <div
                  className="data"
                  dangerouslySetInnerHTML={{
                    __html: blog[0].data,
                  }}
                />

                <div className="btn mt-10 m-auto max-w-[17rem]">
                  <Link
                    to="/"
                    className="uppercase font-Montserrat text-sm font-semibold  transition-all duration-200 glowing-btn"
                  >
                    Get Funded now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
