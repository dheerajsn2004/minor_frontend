import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './component/Header/Header';
import Setgoal from './component/Setgoal/Setgoal';
import Transaction from './component/Transaction/Transaction';
import Layout from './Layout';
import LoginEm from './component/Login/Login-email/LoginEm';
import LoginPh from './component/Login/Login-ph/LoginPh';
import SignUp from './component/signup/SignUp';
import Home from './component/Home/Home';
import BudgetandSaving from './component/Budget/BudgetandSaving';
import Profile from './component/Profile/Profile';
import InvestmentDashboard from './component/investmentDashboard/investmentDashboard';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <div className="flex-grow p-4">
        <Routes>
          <Route path='/' index element={<LoginEm />} />
          <Route path="login-phone" element={<LoginPh />} />
          <Route path="signup" element={<SignUp />} />

          <Route element={<Layout />}> 
            <Route path="home" element={<Home />} />
            <Route path="budget" element={<BudgetandSaving />} />
            <Route path="setgoal" element={<Setgoal />} />
            <Route path="investmentdashboard" element={<InvestmentDashboard/>}/>
            <Route path="transaction" element={<Transaction />} />
            <Route path="profile" element={<Profile/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;