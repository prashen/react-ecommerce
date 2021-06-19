import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Header, Footer } from '../Components'
import HomeScreen from '../Container/HomeScreen'
import AboutScreen from '../Container/AboutScreen'
import NotFoundScreen from '../Container/NotFoundScreen'

function AppNavigator() {
  return (
    <Router>
      <div>
        <Header />

        <div>
          <Switch>
            <Route exact path="/" component={HomeScreen} />
            <Route path="/about" component={AboutScreen} />
            <Route component={NotFoundScreen} />


            {/* <Route path="/about">
            <AboutScreen />
          </Route>
          <Route path="/">
            <HomeScreen />
          </Route>
          <Route>
            <NotFoundScreen />
          </Route> */}
          </Switch>
        </div>

        <Footer />
      </div>
    </Router>
  )
}

export default AppNavigator;