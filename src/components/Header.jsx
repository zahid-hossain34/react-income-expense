import { Link } from "react-router-dom"


const Header = () => {
  return (
    <header>
    <Link to='/'><h1><span>Expense</span> Tracker</h1> </Link>
    <nav>
      <ul>
        <li>
          <Link to="/income">Income</Link>
        </li>
        <li>
          <Link to="/expense">Expense</Link>
        </li>
      </ul>
    </nav>

    </header>
  )
}

export default Header
