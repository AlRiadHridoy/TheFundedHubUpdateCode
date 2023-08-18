import { useState } from "react";
import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import MotionX from "../../ui/MotionX";
import blogOne from "../../assets/images/blog-1.png";

import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../ui/usePagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Blog() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const perItem = [
    2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2,
  ];
  const count = Math.ceil(perItem.length / PER_PAGE);
  const data = usePagination(perItem, PER_PAGE);

  const handleChange = (e, p) => {
    setPage(p);
    data.jump(p);
  };

  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const d = new Date();
  let month = months[d.getMonth()];
  let day = d.getDate();
  let year = d.getFullYear();
  return (
    <>
      <Navbar />
      <section className="blog relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadown">
        <div className="container z-10 relative">
          <div className="wrapper max-w-[75rem] m-auto w-full">
            <div className="header flex justify-between w-full">
              <h2 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient">
                Blog
              </h2>
            </div>

            {/* blogs */}
            <div className="blogs mt-12 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {/* blog */}
              {data.currentData().map((m) => (
                <Link
                  key={m}
                  to="/blog/single-blog"
                  className="blog p-[0.9rem] bg-light/20 backdrop-blur-3xl rounded-xl"
                >
                  <div className="blog-img rounded-md relative">
                    <img
                      className="rounded-md w-full h-full leading-none"
                      src={blogOne}
                      alt=""
                    />
                  </div>

                  {/* texts */}
                  <div className="texts mt-8 grid gap-3">
                    <h3 className="font-semibold">
                      Inspiring Journey of a True Forex Funds Trader
                    </h3>
                    <p>
                      Welcome to the next installment of our Trading Success
                      interview series, where we explore the insights and
                      experiences of some of the top traders at True Forex
                      Funds. In this blog post, we’ll be sharing highlights{" "}
                    </p>

                    <div className="date text-sm">{`${month} ${day}, ${year}`}</div>
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
