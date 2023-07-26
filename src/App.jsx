// App.js

import { BrowserRouter as Router, Route, Routes,  } from 'react-router-dom';
import IncomePage from './pages/IncomePage';
import ExpensePage from './pages/ExpensePage';
// import Home from './components/Home';
// import Header from './components/Header';
import { AppProvider } from './Hoocks/AppContext';
import Layout from './layout/Layout';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
       <AppProvider>
        <Layout>
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/income" Component={IncomePage} />
            <Route path="/expense" Component={ExpensePage} />
          </Routes>
        </Layout>
      </AppProvider>
    </Router>
  );
};

export default App;
