import Dashboard from "./components/Dashboard/Dashboard";
import RequireAuth from "./hoc/requireAuth";

const App = () => {
  return <RequireAuth component={Dashboard} />;
};

export default App;
