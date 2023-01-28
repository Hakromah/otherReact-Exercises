import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

const Strings = {
	en: { Greeting: 'Good morning' },
	fr: { Greeting: 'Bonjour' },
	tr: { Greeting: 'Günaydın' },
};


export function DisplayLanguage() {
   const language = useContext(LanguageContext)
	return (
		<div>
			<h1>{Strings[language].Greeting}</h1>
		</div>
	);
}


