import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";



function Header() {

  return <div>
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
    </nav>

  </div>
}

export { Header };