import Navbar from "../../components/main/Navbar";
import Footer from "../../components/main/Footer";
import ContactForm from "../../components/ContactForm";

import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import SocialIcons from "../../components/SocialIcons";
import FaqCollaps from "../../components/FaqCollaps";

export default function Faq() {
  const [option, setOption] = useState("Started");
  const { pathname } = useLocation();

  const collapsInfo = {
    Started: [
      [
        "Trading instruments",
        `<div className="paras">
                <ul>
                  <li>
                    <h5>Tradable Instruments and Commission: </h5> You have the
                    opportunity to trade a variety of instruments, including
                    Forex, Crypto, Indices, Metals, and Energies, all with RAW
                    spreads. For each standard lot round turn, there is a $3
                    commission fee. It&apos;s worth noting that trading Indices
                    does not incur any commission fees.
                  </li>
                  <li>
                    <h5>Trading Equities on the Master Account: </h5>
                    Trading equities is strictly prohibited on the Master
                    account, also known as the Funded account. Engaging in
                    equity trading on this account type will result in a direct
                    violation of the account's terms.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "Inactivity",
        `<div className="paras">
                <ul>
                  <li>
                    Any trading account inactive for 30 days will be
                    automatically suspended.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "What happens if I breach a trading objective?",
        `<div className="paras">
                <ul>
                  <li>
                    If you breach any trading objective or you commit an hard
                    breach, all your open trades will be closed, your limit &
                    stop orders will be cancelled and the account is switched to
                    view-only mode. In your account dashboard on our website,
                    you will see which trading objective(s) you have breached
                    with the exact time. Also, we will notify you by E-mail if
                    we detect a breach of a trading objective.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "Executing trades",
        `<div className="paras">
                <ul>
                  <li>
                    Ensure you use the correct executable trading pair for the
                    instrument you intend to trade.
                  </li>
                  <li>
                    Executable Forex and Metals pairs are denoted with a "p" at
                    the end, such as XAUUSDp and EURUSDp.
                  </li>
                  <li>
                    In contrast, Indices and Crypto pairs do not include the "p"
                    at the end, for example, BTCUSD and US30.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "Commissions",
        `<div className="paras">
                <ul>
                  <li>
                    Trading opportunities encompass Forex, Crypto, Indices,
                    Metals, and Energies, all with RAW spreads. A standard lot
                    round turn (open-close) incurs a $3 commission. Notably,
                    trading Indices is commission-free.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "Tradable instruments",
        `<div className="paras">
                <ul>
                  <li>
                    Trading opportunities encompass Forex, Crypto, Indices,
                    Metals, and Energies, all with RAW spreads. A standard lot
                    round turn (open-close) incurs a $3 commission. Notably,
                    trading Indices is commission-free.
                  </li>
                  <li>
                    However, it&rsquo;s essential to note that trading equities,
                    also referred to as stocks, is strictly prohibited on the
                    Funded account.
                  </li>
                  <li>
                    Engaging in such trading activities will directly contravene
                    the terms of the account and result in account violations.
                  </li>
                </ul>
              </div>`,
      ],
    ],

    Evaluation: [
      [
        "Evaluation (Challenge) Phases 1 & 2",
        `<div className="paras">
                <ul>
                  <li>
                    We offer The Funded Hub Evaluation Course, consisting of two
                    phases: Student and Practitioner. Successfully completing
                    these phases will elevate you to the status of a Funded
                    Trader (formerly known as a Master Trader). It is imperative
                    to possess a dynamic trading system and a robust risk
                    management profile to excel in the evaluation course. After
                    achieving your profit target in Phase 2, our Risk Team will
                    conduct a thorough manual review of your entire evaluation
                    period, which will be completed within two working days.
                  </li>
                  <li>
                    <h5>2.1. The Student Phase (Phase I):</h5>The Student Phase
                    assesses your trading skills while establishing your
                    identity as a trader. In this phase, you must attain a
                    profit target of 8% without any rule violations. Upon
                    passing, you will receive access to your Phase 2 account
                    within 24 hours.
                  </li>
                  <li>
                    <h5>2.2. The Practitioner Phase (Phase II):</h5>The
                    Practitioner Phase serves to confirm the results and
                    outcomes of the Student Phase. During this phase, you must
                    achieve a profit target of 5% without violating any rules.
                  </li>
                  <li>
                    <h5>2.3. Weekend and News Trading Allowed:</h5>
                    You are permitted to hold trades over the weekend and engage
                    in trading during news events during the evaluation stage.
                  </li>
                  <li>
                    <h5>2.4. 5% Maximum Daily Loss Limit:</h5>
                    The Maximum Daily Loss Limit is the maximum amount a trader
                    is allowed to lose in a single day. For calculation
                    purposes, the higher value between equity and balance is
                    considered. This limit is set at 5% of the initial equity or
                    balance each day. It is important to note that the daily
                    maximum loss resets at 00:00 CEST/server time every day.
                  </li>
                  <li>
                    <h5>2.5. 10% Maximum Loss Limit:</h5>
                    The Maximum Loss Limit specifies the minimum level to which
                    equity or balance cannot fall. This limit is set at 10% of
                    the initial account size. For example, if a trader holds a
                    $100,000 account, the equity or balance cannot dip below
                    $90,000 at any given time.
                  </li>
                  <li>
                    <h5>2.6. Trading Strategy:</h5>
                    You have the freedom to trade as you see fit. You can employ
                    Expert Advisors (EAs), hold positions during news events,
                    keep trades open over the weekend, and utilize lot sizes in
                    accordance with the leverage provided. However, it's
                    essential to refrain from any trading activities aimed at
                    exploiting MetaTrader inefficiencies, such as Gap trading,
                    high-frequency trading, martingale trading, toxic trading
                    flow, layering, server spamming, latency arbitrage, grid
                    trading, hedging, long short arbitrage, reverse arbitrage,
                    tick scalping, server execution, opposite account trading.
                    Copy trading or third-party account management will also
                    result in account termination when associated with Funding
                    Pips. Remember, success is achieved through genuine trading
                    skills, and attempting to circumvent the rules is not
                    permissible.
                  </li>
                  <li>
                    <h5>Note Regarding Layering/Grid (Guideline):</h5>
                    You are allowed to have a maximum of 3 positions while in a
                    Drawdown. Adding a fourth position while the other entries
                    are in drawdown will be considered Grid/Layering, leading to
                    a violation of your account, a decline in your evaluation,
                    or forfeiture of your payout.
                  </li>
                </ul>
              </div>`,
      ],
      [
        'Is there a second chance, aka "Free Retry"?',
        `    <div className="paras">
                <ul>
                  <li>
                    We want to clarify that a free retry option is available
                    exclusively for those who have chosen to purchase a
                    challenge with specific time limits, such as the 30-day
                    Phase 1 or 60-day Phase 2, or the 45-day combined Phase 1
                    and 2.
                  </li>
                  <li>
                    To be eligible for a free retry, your trading account must
                    show a profit of at least 1% total, e.g. On a $100.000
                    challenge account, it should be in profit of at least $1.000
                    at the moment of the breach to be eligible for a free retry.
                  </li>
                  <li>
                    Please note that, if you choose a no time limit
                    configuration, we do not offer free retries. You have the
                    flexibility to trade and reach your profit target at your
                    own pace without the stress or pressure of a deadline.
                  </li>
                  <li>
                    We encourage you to take your time and trade comfortably,
                    ensuring that your trading decisions are well thought out
                    and strategic.
                  </li>
                </ul>
              </div>`,
      ],
    ],

    TFH: [
      [
        "Merging Accounts",
        `<div className="paras">
                <ul>
                  <li>
                    The initial trading account you will manage will be the size
                    you originally enrolled for, which could be $5.000, $10.000,
                    $25.000, $50.000, $100.000 or $200.000. You will have the
                    opportunity to trade up to a combined total of $400,000.
                  </li>
                  <li>
                    <h5>1.5.1 Individual Evaluation (Phase 1 and 2) Trading</h5>
                    It is important to note that each Challenge phase, whether
                    Phase 1 or Phase 2, must be traded individually. You cannot
                    duplicate or mirror trades (whether through an EA or manual
                    trading) from a master account to an evaluation account or
                    from one Evaluation account to another. This is to ensure
                    that each phase is passed based on its unique trades and
                    trade ideas.
                  </li>
                  <li>
                    <h5>1.5.2 Master Account Merging</h5>
                    Following successful completion of the evaluation process,
                    you have the option to either combine your Master/Funded
                    accounts into a single account or keep them separate, based
                    on your personal preference. To merge your Master/Funded
                    accounts into one consolidated account, kindly contact our
                    team at
                    <a href="https://help@thefundedhub.com/">
                      help@thefundedhub.com
                    </a>
                    or open a ticket through the helpdesk. We are here to assist
                    you with the process.
                  </li>
                </ul>
              </div>`,
      ],
    ],

    TradingRules: [
      [
        "Trading Behaviour and rules applicable on the Master account",
        `<div className="paras">
                <ul>
                  <li>
                    The following trading behavior rules are designed to ensure
                    that once you are funded, you maintain your funding status.
                  </li>
                  <li>
                    In the event of a breach of any rules mentioned in this
                    section, all positions on the broker&rsquo;s platform will
                    be closed immediately, and the Customer&rsquo;s Trading
                    Account will be blocked.
                  </li>
                  <li>
                    <h5>5% Maximum Daily Loss Limit:</h5>The Maximum Daily Loss
                    Limit represents the maximum amount a trader is allowed to
                    lose each day. For calculation purposes, the higher value
                    between equity and balance is considered.
                  </li>
                  <li>
                    This limit is set at 5% of the starting equity or balance
                    every day. The rule stipulates that the equity of the day,
                    derived from the currently floating Profit and Loss (PnL)
                    combined with all closed positions of that day, must not
                    exceed the Maximum Daily Loss Limit. This limit resets daily
                    at 00:00 CEST/server time.
                  </li>
                  <li>
                    <h5>10% Maximum Loss Limit:</h5>
                    The Maximum Loss Limit signifies the minimum level to which
                    equity or balance cannot fall. This rule is set at 10% of
                    the initial account size. For instance, if a trader
                    possesses a $100,000 account, the equity or balance cannot
                    drop below $90,000 at any given moment.
                  </li>
                  <li>
                    <h5>Required Stop Loss Rule On Master Accounts:</h5>This
                    rule specifically applies to Master accounts. It mandates
                    the placement of a Stop Loss on every trade within 60
                    seconds after opening the trade. If a Stop Loss is not set
                    within this timeframe, the trade will be automatically
                    closed. <br />
                    Traders are allowed two instances of not adhering to this
                    rule; a third instance will result in a violation of trading
                    rules, leading to the closure of the Master account. The
                    Stop Loss count resets every week.
                  </li>
                  <li>
                    <h5>
                      Allowed to Hold Trades During News and Over the Weekend:
                    </h5>
                    Traders are permitted to maintain trades during news events
                    and over the weekend. Profits from trades initiated 2
                    minutes before and after a high-impact news event affecting
                    the currency will not be counted. Our system will
                    automatically close trades opened within the prohibited time
                    window.
                  </li>
                  <li>
                    Engaging in high-impact news event trading will result in
                    the deduction of profits made from trades executed within
                    the restricted 4-minute window. <br />
                    We source our news calendar data from Forex Factory. If
                    deductions result in a breach of the daily loss limit or
                    maximum loss limit, the trader is accountable for the
                    violation.
                    <br />
                    Please refer to our FAQ &ldquo;Can I hold trades during news
                    and over the weekend?&ldquo; for more information.
                  </li>
                  <li>
                    <i>
                      Note: If a trade is opened before the prohibited time
                      window and closed within that window, the trade will be
                      counted.
                    </i>
                  </li>
                  <li>
                    <h5>Trading Strategy:</h5>
                    Traders have the freedom to adopt their preferred trading
                    strategies. Whether utilizing Expert Advisors (EAs), holding
                    positions during news events, maintaining trades over the
                    weekend, or trading with lot sizes as large as the leverage
                    permits, you have the flexibility to trade according to your
                    strategy. <br />
                    However, trading activities exploiting MetaTrader
                    inefficiencies (such as Gap trading, high-frequency trading,
                    martingale trading, toxic trading flow, layering, server
                    spamming, latency arbitrage, grid trading, hedging, long
                    short arbitrage, reverse arbitrage, tick scalping, server
                    execution, opposite account trading) are strictly
                    prohibited. <br />
                    Additionally, copy trading or account management by a
                    third-party vendor will lead to account termination.
                    Remember, your ideas come with our risk.
                  </li>
                  <li>
                    To secure funding and thrive as a trader, you must possess
                    genuine trading skills. There are no shortcuts.
                  </li>
                  <li>
                    <i>
                      Note: To avoid confusion, we adhere to the following
                      guideline for Layering/Grid: Traders are allowed a maximum
                      of 3 positions in Drawdown. Introducing a fourth position
                      while existing entries are in drawdown will be considered
                      Grid/Layering, leading to account violation, evaluation
                      decline, or forfeiture of payout.
                    </i>
                  </li>
                </ul>
              </div>`,
      ],
      [
        "IP Addresses",
        `  <div className="paras">
                <ul>
                  <li>
                    <h5>IP Address matching Challenge Stages and Funded</h5>
                    The region of your IP address(es) used to purchase the
                    Evaluation, log in to our
                    <a href="https://thefundedhub.com/login">
                      thefundedhub.com/login
                    </a>
                    , Phase 1 trading account , Phase 2 trading account and the
                    Funded trading account should match. If our Risk Team
                    detects a change in region, they may reach out to you to
                    confirm and request proof.
                  </li>
                  <li>
                    <h5>IP Address Funded Account</h5>
                    The region of your IP address(es) used to log into the
                    Funded account must remain consistent. If our Risk Team
                    detects a change in region, they may reach out to you to
                    confirm and request proof, such as a plane ticket, passport
                    stamp, or live video from the location. This measure is in
                    place to protect you from third-party vendors. If you
                    anticipate traveling, kindly notify our support team
                    beforehand to keep us informed and prevent interference from
                    our end.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "Trading Style Restrictions",
        `<div className="paras">
                <ul>
                  <li>
                    <span>Layering / Grid:</span>
                    You are allowed to enter into positions - We define
                    layering/grid as having three positions and entering into a
                    fourth. If we see this your account will be terminated up to
                    and including profits
                  </li>
                  <li>
                    <span>Martingale:</span>
                    You cannot martingale trading. Maven defines martinadle as
                    after a losing trade you increase the trade sizina hobina to
                    win back your losses. Adding multiple positions of the same
                    size will also count towards being martingale. You cannot
                    increase your total margin(on a pair) on the account after a
                    loss. If we see martingale three times. the account will be
                    terminated
                  </li>
                  <li>
                    <span>Cheating: </span>
                    Taking advantage of the Meta Trader inefficiencies such as
                    High Frequency Trading. Toxic Trading Order Flow. Lona/Short
                    arbitrage. reverse arbitrage. tick scalping. server
                    execution is strictly prohibited and your account will be
                    terminated up to and including profits.
                  </li>
                  <li>
                    <span>Reverse / Group Hedging:</span> Using your account to
                    bet in one direction on a singular trade against another
                    account is not allowed. As this is an attempt at reversing
                    the trade of another account, for a 100% chance of winning
                  </li>
                  <li>
                    <span>Hedging:</span> here are numerous malicious A hedging
                    bots that aim to exploit the demo-trading environment, you
                    cannot exclusively hedge your way through a challenge or
                    live account. We cannot accurately copy your trading onto a
                    live server. If over 50% of your trades are hedging trades
                    you will be asked to retake the challenge or have your
                    profits denied and asked to alter your strategy. Hedging may
                    be defined as true if any time you are betting on the same
                    pair in two different directions.
                  </li>
                  <li>
                    <span>Gambling: </span>You cannot gamble your way through a
                    challenge phase. We define gambling as:
                    <ul>
                      <li>
                        Greater than 75% of your trades being placed without a
                        stow loss(this includes if your stop loss is further
                        than the breachable limit)
                      </li>
                      <li>
                        More than 50% of your profit coming from a news event
                      </li>
                      <li>
                        More than 50% of your trades being taken under 1 minute
                        hold time
                      </li>
                      <li> Passing a challenge in one or two trades</li>
                      <li>
                        Having more than 75% of your trades maximizing the lot
                        size restrictions
                      </li>
                      <li>
                        If we see this we will ask you to alter your trading
                        strategy and make you rerun the challenge phase. This
                        rule is in place as we cannot accurately coo your
                        trading over to our live servers with this type of
                        trading.
                      </li>
                    </ul>
                  </li>
                  <li>
                    <span>**Lot size Restrictions: </span>We limit each trader
                    to having a maximum of 25 lots per pair at any given time.
                    However you can have as many assets running at once as you
                    like. For accounts under 100k in size, we limit to 10 lots.
                  </li>
                  <li>
                    <span>EA:</span>EAs are permitted so long as they do not
                    break any of the above rules. We may ask for proof of your
                    EA to ensure that the EA you are using is not malicious.
                    HFT, hedge zone etc are not permitted at Maven and will
                    result in a termination of your account.if you cannot
                    provide the code to your EA, your account will be terminated
                  </li>
                  <li>
                    <span>NOTE:</span>A &apos;trade&apos; can be determined as a
                    position held by the trader on a specific pair. A
                    &apos;Trade&apos; may be one entry or multiple entries with
                    similar timings and lot sizes. A trade could be determined
                    by multiple entries on the same pair at the same time.Trades
                    with vastly smaller lot sizes, will NOT count as a trade.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "Expert Advisor (EA) usage on Challenge and Funded Account",
        `<div className="paras">
                <p>
                  We strictly prohibit the execution of trades through Expert
                  Advisors (EAs) on both Challenge and Funded accounts.
                </p>
                <p>
                  Our system is designed to disable EA trade execution at the
                  server level.
                </p>
                <p>
                  However, should our risk management system detect any attempts
                  to open trades using an Expert Advisor, this will be
                  considered a direct violation of our rules, constituting an
                  attempt to bypass our security features.
                </p>
                <p>
                  As a result, this breach will lead to the immediate
                  termination of your account.
                </p>
                <p>
                  Once you&rsquo;ve demonstrated your trading proficiency and
                  successfully completed Phase 1, your account status will be
                  marked as &rsquo;Passed&rsquo; on your Personal Hub dashboard.
                </p>
                <p>
                  In addition, you will receive a confirmation email notifying
                  you of your Phase 1 success.
                </p>
                <p>
                  Right after this, you will promptly receive the credentials
                  for your Phase 2 trading account.
                </p>
                <p>
                  You&rsquo;ll find this new account listed in your Personal Hub
                  on our website, and you will also receive a notification email
                  regarding Phase 2.
                </p>
              </div>`,
      ],
      [
        "Maximum Daily Loss Explained",
        `   <div className="paras">
                <ul>
                  <li>
                    The Maximum Daily Loss represents the maximum allowable
                    daily loss for your account. <br />
                    This rule calculates the daily loss limit based on the
                    higher value between your equity and balance.
                    <br />
                    The limit is expressed as a percentage of your initial
                    equity or balance and applies each day. <br />
                    The rule dictates that your daily equity, which combines
                    your current floating Profit and Loss (PnL) and all closed
                    positions for that day, must not breach the Maximum Daily
                    Loss Limit. The daily loss limit resets at 00:00 CEST/server
                    every day.
                  </li>
                  <li>
                    <h5>Example 1: Higher Equity at the Start of the Day</h5>
                  </li>
                  <li>
                    Let&apos;s consider day 5, where your account balance is
                    $105,000, and your equity stands at $107,000. In this case,
                    the Daily Loss Limit is calculated at 5% of the equity
                    because it is the higher value:
                  </li>
                  <li>
                    <i>Daily loss = $107,000 * 5% = $5,350 Daily Loss Limit.</i>
                  </li>
                  <li>
                    This signifies that your equity cannot drop below $101,650
                    on day 5. If, at any moment on that day, your equity falls
                    below $101,650, your account will be closed.
                  </li>
                  <li>
                    <h5>Example 2: Higher Balance at the Start of the Day</h5>
                  </li>
                  <li>
                    Now, let&apos;s examine day 7, where your account balance is
                    $100,000, and your equity is $99,000. In this scenario, the
                    Daily Loss Limit is calculated as 5% of the balance because
                    it is the higher value:
                  </li>
                  <li>
                    <i>Daily loss = $100,000 * 5% = $5,000 Daily Loss Limit.</i>
                  </li>
                  <li>
                    This means your equity must not fall below $95,000 on day 7.
                    Should your equity dip below $95,000 at any point during
                    that day, your account will be closed.
                  </li>
                </ul>
              </div>`,
      ],
      [
        "Maximum Total Loss Explained",
        `<div className="paras">
                <ul>
                  <li>
                    The Maximum Loss Limit is the threshold that your equity or
                    balance must not fall below. <br />
                    This rule is configured at 10% of your initial account size.
                    <br />
                    To illustrate, if your account balance is $100,000 and the
                    Maximum Loss Limit is set at 10%, your equity or balance
                    should never drop below $90,000 under any circumstances.
                  </li>
                  <li>
                    <i>Example:</i>
                  </li>
                  <li>
                    Let&apos;s consider you have opted for a $100,000 account.
                    <br />
                    In this example, the Maximum Loss Limit is calculated as 10%
                    of the initial balance, which amounts to $100,000.
                  </li>
                  <li>
                    <h5>
                      Maximum Loss = $100,000 * 10% = $10,000 (Maximum Loss
                      Limit).
                    </h5>
                  </li>
                  <li>
                    This indicates that your equity or balance must always
                    remain above $90,000.
                    <br />
                    Should your equity or balance dip below $90,000 at any
                    point, your account will be subject to closure.
                  </li>
                </ul>
              </div>`,
      ],
    ],
    Billing: [
      [
        "Payouts & Profit Splits",
        `    <div className="paras">
                <ul>
                  <li>
                    <h5>First Payout after 30 Days + 80% Profit Split:</h5>
                    Following the execution of the first trade on the funded
                    account, the initial payout becomes available after 30
                    calendar days. Subsequently, traders are eligible to request
                    payouts with an 80% profit split applied.
                  </li>
                  <li>
                    <h5>Bi-Weekly Payouts + 85% Profit Split:</h5>
                    After the first payout, traders can request bi-weekly
                    payouts, which can be made every 14 calendar days.
                    Additionally, the profit split for these payouts increases
                    to 85%.
                  </li>
                  <li>
                    <h5>Weekly Payouts + 90% Profit Split:</h5>* After the 4th
                    payout, the payout schedule transitions to weekly payouts,
                    which can be requested every 7 calendar days. Additionally,
                    the profit split for these payouts increases to 90%.
                  </li>
                  <li>
                    We provide you with four convenient withdrawal options: Wire
                    transfer, Wise, PayPal, and Crypto. Among these, Crypto
                    stands out as the most favored choice due to its
                    cost-effectiveness and speed.
                  </li>
                  <li>
                    If you wish to withdraw funds directly to your bank account,
                    we can certainly accommodate that. However, kindly note that
                    we require a minimum of $1000 in available profit split to
                    initiate this method; failing to meet this threshold may
                    result in additional charges.
                  </li>
                  <li>
                    Requesting a withdrawal is a straightforward process. You
                    can simply submit your Withdrawal Request through the
                    Dashboard, and our system will automatically compute the
                    withdrawal amount based on your account type and ranking.
                    Once the withdrawal is successfully processed, your account
                    will be reset accordingly.
                  </li>
                  <li>
                    <h5>
                      Note: The minimum amount for a payout is 1% of the initial
                      balance, including our split.
                    </h5>
                  </li>
                </ul>
              </div>`,
      ],
    ],
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <>
      <Navbar />
      <section className="faq bg-dark relative purple-shadow pt-16 sm:pt-28">
        <div className="container relative">
          <div className="wrapper relative pb-24 sm:pb-36 md:pb-44 w-full grid gap-16 xs:gap-20 md:gap-32 max-w-[75rem] m-auto">
            {/* Top content */}
            <div className="top-content py-10 md:py-20 relative">
              <div className="header grid relative">
                <div className="">
                  <h1 className="text-2xl xs:text-[1.65rem] xs:leading-[0.95] md:text-[1.6rem] font-codePro !leading-8 capitalize mt-2 text-wht-gradient">
                    Frequently asked questions
                  </h1>
                </div>
              </div>

              <div className="content grid md:grid-cols-12 gap-12 mt-10 relative faq-content">
                {/* left */}
                <div className="left md:col-span-3 relative">
                  <div className="options sm:mr-[1rem] flex flex-wrap xs:grid grid-cols-2 md:grid-cols-1 gap-3 relative">
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Started"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("Started")}
                    >
                      <h5 className="px-3 sm:px-5">General</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Evaluation"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("Evaluation")}
                    >
                      <h5 className="px-3 sm:px-5">Evaluation Program</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "TFH"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("TFH")}
                    >
                      <h5 className="px-3 sm:px-5">TFH Funded</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "TradingRules"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("TradingRules")}
                    >
                      <h5 className="px-3 sm:px-5">Trading Rules</h5>
                    </div>
                    {/* option */}
                    <div
                      className={`option text-center text-sm sm:text-base py-2 sm:py-3 md:py-2.5 rounded-xl border-[3px] bg-light/[15%]  backdrop-blur-3xl cursor-pointer relative transition-all duration-200 before:transition-all before:duration-200 ${
                        option === "Billing"
                          ? "border-primary/30 before:opacity-40"
                          : "border-transparent before:opacity-0 hover:border-primary/40"
                      }`}
                      onClick={() => setOption("Billing")}
                    >
                      <h5 className="px-3 sm:px-5">Order and Billing</h5>
                    </div>
                  </div>
                </div>
                {/* right */}
                <div className="right faq-collaps md:col-span-9 flex flex-col gap-4 relative">
                  {collapsInfo[option].map((item, index) => (
                    <FaqCollaps
                      key={index + option}
                      heading={item[0]}
                      para={item[1]}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* bottom-cotent */}
            <div className="flex items-center relative">
              <div className="content grid md:grid-cols-3 gap-10  w-full">
                {/* left */}
                <div className="left md:col-span-1 break-all relative">
                  <div className="heading grid gap-2">
                    <div className="wrap">
                      <h3 className="text-3xl text-wht-gradient">Contact Us</h3>
                    </div>
                    <p>
                      Questions? Doubts? <br /> Please contact us anytime and
                      our team will take care of you!
                    </p>
                  </div>

                  <div className="mt-5">
                    <SocialIcons />
                  </div>
                </div>
                {/* Right */}
                <div className="right md:col-span-2 relative">
                  {/* Form */}
                  <ContactForm />
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
