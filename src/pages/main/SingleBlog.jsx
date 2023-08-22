import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import blogOne from "../../assets/images/blog-1.png";
import { Link } from "react-router-dom";

export default function SingleBlog() {
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
      <section className="single-blog relative pt-32 sm:pt-48 pb-28 sm:pb-44 purple-shadow">
        <div className="container z-10 relative">
          <div className="wrapper max-w-[75rem] m-auto w-full">
            <div className="flex justify-center items-center">
              <div className="blog-img p-[0.03rem] rounded-md">
                <img className="rounded-md" src={blogOne} alt="" />
              </div>
            </div>
            {/* content */}
            <div className="content mt-10 grid gap-5 max-w-[768px] m-auto">
              <div className="heading">
                <h2 className="font-medium text-2xl xs:text-[1.9rem] tracking-tight text-wht-gradient">
                  Unlocking Success with True Forex Funds: Prop Trading vs.
                  Brokers
                </h2>
              </div>

              {/* main content */}
              <div className="main-content mt-4 grid gap-6 font-Montserrat py-10 px-8 bg-light/30 rounded-xl font-normal">
                <i>
                  Welcome to the next installment of our Trading Success
                  interview series, where we explore the insights and
                  experiences of some of the top traders at True Forex Funds. In
                  this blog post, we’ll be sharing highlights from our recent
                  video interview with Marvin, a highly successful trader who
                  has graciously shared his strategies, philosophy, and tips for
                  trading excellence. Get ready to gain valuable knowledge as we
                  dive into his unique approach.
                </i>

                <div className="video flex justify-center items-center">
                  <iframe
                    className="w-[80%] h-[320px]"
                    src="https://www.youtube.com/embed/ylssgHLVZaE"
                    title="One Piece OST: The Very Very Very Strongest | EPIC VERSION"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                  ></iframe>
                </div>

                {/* btn */}
                <div className="btn mt-2 flex justify-center">
                  <Link
                    to="/"
                    className="uppercase font-Montserrat text-sm font-semibold py-3 px-12 bg-primary/20 grd-btn-wht rounded-3xl"
                  >
                    Get Funded
                  </Link>
                </div>

                {/* para */}
                <div className="paras grid gap-5">
                  <p>
                    Marvin, a graduate research assistant from Tema, Ghana, has
                    been trading with True Forex Funds for the past 7 months.
                    Despite starting his trading journey at the beginning of
                    2022 with self-taught lessons from YouTube videos, he
                    initially faced challenges and lost a significant amount of
                    money. However, determined to gain a deeper understanding of
                    trading, he sought out a trading mentor and invested in
                    online courses.
                  </p>

                  <i className="border-l-4 border-primary pl-6 font-semibold">
                    &quot;It helped me a lot, because when you have a mentor,
                    someone to learn from, it helps to avoid all the unnecessary
                    mistakes.&quot;
                  </i>

                  <p>
                    His mentor taught him that even if you don’t have huge
                    capital, purchasing the smallest account still earns you
                    profit if you are a good trader. This is what motivated
                    Marvin and was his main objective in trading.
                  </p>

                  <p>
                    After losing several $50K accounts in phase 1, instead of
                    giving up, Marvin tried again, changing his strategy to use
                    an even bigger account. He would go back to the basics and
                    practise with demo accounts until he felt confident enough
                    that he could pass his next try with a $200K account.
                  </p>

                  <i className="border-l-4 border-primary pl-6 font-semibold">
                    &quot;When I passed, that was a milestone for me. I thought
                    this account was huge; if I make just 1% of it, that’s
                    $2,000, and $2,000 is quite an amount of money.&quot;
                  </i>
                  <p>
                    Recently, Marvin achieved three funded payouts from True
                    Forex Funds, showcasing his progress and dedication to his
                    trading journey.
                  </p>

                  <i className="border-l-4 border-primary pl-6 font-semibold">
                    &quot; was really glad, and I made my first payout, which
                    was somewhere around $6,000. I got $8,000 because of the
                    size of my account. Three weeks later, another payout of
                    $8,000. Then, three weeks later, I made another
                    $10,000.&quot;
                  </i>

                  <p>
                    His mentor taught him that even if you don’t have huge
                    capital, purchasing the smallest account still earns you
                    profit if you are a good trader. This is what motivated
                    Marvin and was his main objective in trading.
                  </p>

                  <i className="border-l-4 border-primary pl-6 font-semibold">
                    &quot;The first thing you have to understand about trading
                    is that you will lose money. Every day can’t be a good day.
                    It helps to have this in the back of your mind. If I lose, I
                    will just go like, Oh, it’s a part of trading. You have to
                    think of something you can lose that can’t affect you.&quot;
                  </i>
                  <p>
                    We hope you’ve enjoyed this sneak peek into our interview
                    with Marvin, one of the top traders at True Forex Funds. To
                    learn even more, watch the full video interview, which is
                    packed with wisdom and practical advice from a seasoned
                    trading professional.
                  </p>
                </div>

                {/* post */}
                <div className="post mt-3 grid justify-center sm:flex sm:justify-between items-center p-7 bg-all/[15%] rounded-md border border-dashed border-white  shadow-[0_0_30px_rgb(195,129,252,0.7)]">
                  <div className="left max-w-[20rem]">
                    <h2 className="font-semibold text-2xl tracking-tight text-wht-gradient">
                      Do you have what it takes to trade like Marvin? Get
                      started with True Forex Funds
                    </h2>
                  </div>

                  {/* rigt */}
                  <div className="right">
                    {/* btn */}
                    <div className="btn mt-2 flex justify-center">
                      <Link
                        to="/"
                        className="uppercase font-Montserrat text-sm font-semibold py-3 px-12 bg-primary/20 sm:hover:bg-primary sm:bg-primary/80 transition-all duration-200 sm:bg-primary rounded-3xl text-main-bg"
                      >
                        Get Funded
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* related blogs */}
            <div className="related-blogs max-w-[768px] m-auto mt-20">
              <div className="head text-center">
                <h3 className="font-medium text-2xl xs:text-[1.7rem] tracking-tight text-wht-gradient ">
                  Other articles in this topic
                </h3>
              </div>
              <div className="blogs mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {/* blog */}
                {months.map((m, index) => {
                  if (index < 3)
                    return (
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
                            Welcome to the next installment of our Trading
                            Success interview series, where we explore the
                            insights and experiences of some of the top traders
                            at True Forex Funds. In this blog post, we’ll be
                            sharing highlights{" "}
                          </p>

                          <div className="date text-sm">{`${month} ${day}, ${year}`}</div>
                        </div>
                      </Link>
                    );
                  else return "";
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
