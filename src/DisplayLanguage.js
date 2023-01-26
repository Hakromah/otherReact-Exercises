import React from "react";
import { LanguageContext } from "./LanguageContext";




const Strings = {
   en: {Greeting: "Good morning"},
   fr: {Greeting: "Bonjour"},
   tr: {Greeting: "Günaydın"}
}

export class DisplayLanguage extends React.Component {
   render() {
      return <div>
         <LanguageContext.Consumer>
            {language => {
               return (
                  <div>
                     <h1>{Strings[language].Greeting}</h1>
                  </div>
               )
            }}
         </LanguageContext.Consumer>
      </div>
   }

}

