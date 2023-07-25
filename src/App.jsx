// App.js

import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
import Home from './components/Home';
import Header from './components/Header';

const App = () => {
  return (
    <Router>
          <Header />
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/income" Component={IncomePage} />
          <Route path="/expense" Component={ExpensePage} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
