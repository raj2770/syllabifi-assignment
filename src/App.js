import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Register from './pages/Register/Register';
import Dashboard  from './pages/Dashboard/Dashboard';
function App() {
    return (
        <BrowserRouter>
  
            <Switch>
                <Route path="/"  exact>
                    <Register/>
                </Route>
                <Route path="/dashboard">
                    <Dashboard/>
                </Route>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
