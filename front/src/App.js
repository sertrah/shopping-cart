import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import routes from "application/routes";
import { QueryClientProvider, QueryClient } from "react-query";
import { HelmetProvider } from "react-helmet-async";
import { RouterPathList } from "application/models/commonts";
import { ShoppingCartProvider } from "application/context/ShoppingCart";
import PageLayout from "presentation-layer/components/PageLayout";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <ShoppingCartProvider>
          <Router basename="/">
            <Switch>
              {routes.map(({ component: Component, ...rest }) => (
                <Route
                  {...rest}
                  key={rest.path}
                  render={(props) => <PageLayout><Component {...props} /></PageLayout>}
                  exact
                />
              ))}
              <Redirect from="*" to={RouterPathList.default} />
            </Switch>
          </Router>
        </ShoppingCartProvider>
      </HelmetProvider>
    </QueryClientProvider>
  );
};

export default App;
