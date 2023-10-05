import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


// main pages
import Home from "./pages/main/Home";
import Login from "./pages/main/Login";
import Contact from "./pages/main/Contact";
import Faq from "./pages/main/Faq";
import CookiePolicy from "./pages/main/CookiePolicy";
import PrivacyPolicy from "./pages/main/PrivacyPolicy";
import TermCondition from "./pages/main/TermCondition";
import RiskDisclosure from "./pages/main/RiskDisclosure";
import ReportProblem from "./pages/main/ReportProblem";

// Dashboard pages
import Dashboard from "./pages/dashboard/Dashboard";
import Withdraw from "./pages/dashboard/Withdraw";
import TopUpReset from "./pages/dashboard/TopUpReset";
// import Help from "./pages/dashboard/Help";
import Profile from "./pages/dashboard/Profile";
// import DashContact from "./pages/dashboard/DashContact";
import Billing from "./pages/dashboard/Billing";
import StartNewChallenge from "./pages/dashboard/StartNewChallenge";
import Certificate from "./pages/dashboard/Certificate";

// payment
import ThankYou from "./pages/payment/ThankYou";
import PaymentError from "./pages/payment/PaymentError";

// cookie page
import Cookies from "./ui/Cookies";
// blog
import Blog from "./pages/main/blog/Blog";
import SingleBlog from "./pages/main/Blog/singleBlog";
// CSS
import "./App.css";
// import SingleBlog from "./pages/main/blog/SingleBlog";
// import WaitingList from "./ui/WaitingList";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-condition" element={<TermCondition />} />
          <Route path="risk-disclosure" element={<RiskDisclosure />} />
          <Route path="report-problem" element={<ReportProblem />} />

          <Route path="blog" element={<Blog />} />
          <Route path="blog/:blog" element={<SingleBlog />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="billing" element={<Billing />} />
            <Route path="start-new-challenge" element={<StartNewChallenge />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="top-up-reset" element={<TopUpReset />} />
            {/* <Route path="help" element={<Help />} /> */}
            {/* <Route path="dashboard-contact" element={<DashContact />} /> */}
            <Route path="certificate" element={<Certificate />} />
          </Route>

          {/* payment */}
          <Route path="thank-you" element={<ThankYou />} />
          <Route path="payment-error" element={<PaymentError />} />
        </Routes>
      </Router>

      <Cookies />
      {/* <WaitingList /> */}
    </div>
  );
}

export default App;
