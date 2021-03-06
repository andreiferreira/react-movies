import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from './components/Header/Header';
import Favoritos from './pages/Favoritos/Favoritos';
import Filme from './pages/Filme/Filme';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/Notfound';



const Routes = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path="/" component={Home}></Route>
                <Route exact path='/filme/:id' component={Filme}></Route>
                <Route exact path='/favoritos' component={Favoritos}></Route>
                <Route path='*' exact component={NotFound}/>

            </Switch>
        </BrowserRouter>
    );
}

export default Routes;