import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import ReactDOM  from 'react-dom/client';
import App from './App';

const root = ReactDOM.creatRoot(document.createElement('root'));

root.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
);
