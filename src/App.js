import React from 'react';
import { DisplayLanguage } from './DisplayLanguage';

import { LanguageContext } from './LanguageContext';

export class App extends React.Component {
	state = {
		language: 'en',
	};

	handleChangeLanguage = (evt) => {
		this.setState({
			language: evt.target.value,
		});
	};

	render() {
    return(
			<div>
				<span style={{ color: 'green', fontSize: 'px16' }}>Languages </span>
				<select
					style={{ boxShadow: '2px 2px', backgroundColor: 'lightblue' }}
					value={this.state.language}
					onChange={this.handleChangeLanguage}
				>
					<option value="en">English</option>
					<option value="tr">Turkish</option>
					<option value="fr">French</option>
				</select>

				<LanguageContext.Provider value={this.state.language}>
					<DisplayLanguage/>
				</LanguageContext.Provider>
			</div>
		);
	}
}
