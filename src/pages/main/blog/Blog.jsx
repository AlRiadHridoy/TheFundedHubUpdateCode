import { useState } from "react";
import Navbar from "../../../components/main/Navbar";
import Footer from "../../../components/main/Footer";
// import blogOne from "../../../assets/images/blog-1.png";

import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../../ui/usePagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

import blogs from "./data";
import "./blog.css";

export default function Blog() {
  let [page, setPage] = useState(1);

  const PER_PAGE = 6;

  const count = Math.ceil(blogs.length / PER_PAGE);
  const data = usePagination(blogs, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  return (
    <>
      <Navbar />
      <section className="blog relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow">
        <div className="container z-10 relative">
          <div className="wrapper max-w-[75rem] m-auto w-full">
            <div className="header flex justify-between w-full">
              <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                Blog
              </h2>
            </div>

            {/* blogs */}
            <div className="blogs mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6 relative">
              {/* blog */}
              {data.currentData().map((blog, index) => (
                <Link
                  key={blog.title + index}
                  to={`/blog/${blog.link}`}
                  className="single-blog p-[0.9rem] bg-light/20 backdrop-blur-3xl rounded-xl !relative"
                >
                  <div className="blog-img rounded-md">
                    <img
                      className="rounded-md w-full h-full leading-none hidden"
                      src=""
                      alt=""
                    />
                  </div>

                  {/* texts */}
                  <div className="texts fmt-6 grid gap-3 pb-8">
                    <h3 className="font-semibold">{blog.title}</h3>
                    <div className="blog-para-slice">
                      <p
                        dangerouslySetInnerHTML={{
                          __html: blog.para.slice(0, 140) + "....",
                        }}
                      />
                    </div>
                    <div className="date text-sm absolute bottom-3">
                      {blog.date}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* pagination */}
            <div className="pagination mt-10 flex justify-center">
              <ThemeProvider theme={darkTheme}>
                <Stack spacing={2}>
                  <Pagination
                    count={count}
                    page={page}
                    shape="rounded"
                    variant="outlined"
                    color="secondary"
                    onChange={handleChange}
                  />
                </Stack>
              </ThemeProvider>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
