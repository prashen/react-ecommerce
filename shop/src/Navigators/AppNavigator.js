import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import GlobalStyle from '../global-styles';
import {Container, Row} from 'react-bootstrap';
import { Header, Footer, Banner } from '../Components'
import HomeScreen from '../Container/HomeScreen'
import AboutScreen from '../Container/AboutScreen'
import NotFoundScreen from '../Container/NotFoundScreen'

function AppNavigator() {
  return (
    <Router>
      <div>
        {/* <GlobalStyle /> */}
        <Header />

        {/* <section className="container"> */}
            <Switch>
              <Route exact path="/" component={HomeScreen} />
              <Route exact path="/about" component={AboutScreen} />
              <Route exact component={NotFoundScreen} />
            </Switch>
        {/* </section> */}

        <Footer />
      </div>
    </Router>
  )
}

export default AppNavigator;