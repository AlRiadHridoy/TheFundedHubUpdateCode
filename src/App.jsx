import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/main/Home";
import Login from "./pages/main/Login";
import Contact from "./pages/main/Contact";
import Faq from "./pages/main/Faq";
import CookiePolicy from "./pages/main/CookiePolicy";
import PrivacyPolicy from "./pages/main/PrivacyPolicy";
import TermCondition from "./pages/main/TermCondition";
import RiskDisclosure from "./pages/main/RiskDisclosure";
import ReportProblem from "./pages/main/ReportProblem";
import Blog from "./pages/main/Blog";
import SingleBlog from "./pages/main/SingleBlog";

// Dashboard
import Dashboard from "./pages/dashboard/Dashboard";
import Withdraw from "./pages/dashboard/Withdraw";
import TopUpReset from "./pages/dashboard/TopUpReset";
import Help from "./pages/dashboard/Help";
import Profile from "./pages/dashboard/Profile";
import DashContact from "./pages/dashboard/DashContact";
import Billing from "./pages/dashboard/Billing";
import Certificate from "./pages/dashboard/Certificate";
import Checkout from "./pages/main/Checkout";
// CSS
import "./App.css";
import Cookies from "./ui/Cookies";
// import Blur from "./ui/Blur";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="contact" element={<Contact />} />
          <Route path="faq" element={<Faq />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/single-blog" element={<SingleBlog />} />
          <Route path="checkout" element={<Checkout />} />

          <Route path="cookie-policy" element={<CookiePolicy />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="terms-condition" element={<TermCondition />} />
          <Route path="risk-disclosure" element={<RiskDisclosure />} />
          <Route path="report-problem" element={<ReportProblem />} />

          <Route path="dashboard" element={<Dashboard />}>
            <Route path="Profile" element={<Profile />} />
            <Route path="billing" element={<Billing />} />
            <Route path="withdraw" element={<Withdraw />} />
            <Route path="top-up-reset" element={<TopUpReset />} />
            <Route path="help" element={<Help />} />
            <Route path="dashboard-contact" element={<DashContact />} />
            <Route path="certificate" element={<Certificate />} />
          </Route>
        </Routes>
      </Router>

      <Cookies />
      {/* <Blur /> */}
    </div>
  );
}

export default App;