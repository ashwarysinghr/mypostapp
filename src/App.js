import React from 'react';
import './App.css';
import {Provider} from 'react-redux';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from 'redux';
import Header from './components/Header/Header';
import rootReducer from './reducers';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import ErrorBoundary from './containers/Error/Error';

export const  store = createStore(rootReducer, applyMiddleware(thunk));


function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <BrowserRouter>
        <React.Fragment>
        <ErrorBoundary>
          <Header/>
          <div className="mainBody">
          <Switch>
              <Route exact path={'/'} render={() => {
                  return <Redirect to={'/posts'}/>
              }}/>
              <Route exact path={'/posts'} component={(Home)}/>
              <Route path='/404' component={NotFound} />
              <Redirect from='*' to='/404' />
          </Switch>
          </div>
          </ErrorBoundary>
        </React.Fragment>
      </BrowserRouter>
    </div>
    </Provider>
  );
}

export default App;
