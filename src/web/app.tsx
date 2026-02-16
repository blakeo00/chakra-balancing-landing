import { Route, Switch } from "wouter";
import Index from "./pages/index";
import Privacy from "./pages/privacy";
import Terms from "./pages/terms";
import Contact from "./pages/contact";
import { Provider } from "./components/provider";

function App() {
	return (
		<Provider>
			<Switch>
				<Route path="/" component={Index} />
				<Route path="/privacy" component={Privacy} />
				<Route path="/terms" component={Terms} />
				<Route path="/contact" component={Contact} />
			</Switch>
		</Provider>
	);
}

export default App;
