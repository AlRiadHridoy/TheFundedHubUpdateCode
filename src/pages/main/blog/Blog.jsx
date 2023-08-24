import { useState } from "react";
import Navbar from "../../../components/main/Navbar";
import Footer from "../../../components/main/Footer";
import blogOne from "../../../assets/images/blog-1.png";

import { Link } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import usePagination from "../../../ui/usePagination";
import Stack from "@mui/material/Stack";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Blog() {
  let [page, setPage] = useState(1);
  const PER_PAGE = 6;
  const perItem = [
    {
      link: "leveraging",
      title: "Leveraging Leverage: A Guide for Forex Traders",
      para: "Explore the power of leveragen forex trading and how it can magnify your potential gains and losses. Discover how to use leverage wisely with valuable insights throughout the post.",

      date: "18 August 2023",
    },
    {
      link: "exploring",
      title: `Exploring the World of Forex Market Hours: A Guide to
                  Optimizing Your Trading Strategy`,
      para: `Discover the significance of forex market hours and how they
                  impact your trading strategy. Learn how The Funded Hub offers
                  trading capital to successful traders,`,
      date: "17 August 2023",
    },
    {
      link: "understanding",
      title: `Understanding Major, Minor, and Exotic Currency Pairs in Forex Trading`,
      para: `Dive into the world of forex
                  trading and grasp the concept of major, minor, and exotic
                  currency pairs. Explore the dynamics of each pair and learn
                  how to leverage them to your advantage in the forex market.`,
      date: "16 August 2023",
    },
    {
      link: "how-does-work",
      title: "How Does Forex Trading Work? A Comprehensive Guide",
      para: `potential with The Funded Hub. Learn how forex trading works:
                  currency pairs, bid/ask prices, leverage, and more. Trade with
                  proprietary capital,`,
      date: "15 August 2023",
    },
    {
      link: "introduction",
      title:
        "Introduction to Forex Trading with The Funded Hub: A Beginner&apos;s Guide",
      para: "Unlock forex trading&apos;s potential with The Funded Hub. Learn how forex trading works: currency pairs,",
      date: "14 August 2023",
    },
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
              {data.currentData().map((blog) => (
                <Link
                  key={blog}
                  to={`/blog/${blog.link}`}
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
                  <div className="texts mt-6 grid gap-3 pb-8">
                    <h3 className="font-semibold">{blog.title}</h3>
                    <p>{blog.para.slice(0, 140) + "..."}</p>

                    <div className="date text-sm absolute bottom-3">{blog.date}</div>
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
