import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Second from './second/Second';
import Third from './third/Third';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, NavLink,Route} from 'react-router-dom';

ReactDOM.render(
    <BrowserRouter >
        <div>
            <div>
                <ul>
                    <li>
                        <NavLink exact activeClassName="selected" to={'/'}>home</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="selected" to='/second/1234'>second</NavLink>
                    </li>
                    <li>
                        <NavLink exact activeClassName="selected" to='/third'>third</NavLink>
                    </li>
                </ul>
                <Route path='/' component={App}></Route>
                <Route path='/second/:id' component={Second}></Route>
                <Route path='/third' component={Third}></Route>
            </div>
        </div>

    </BrowserRouter>,
    document.getElementById('root'));
registerServiceWorker();
