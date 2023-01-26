// import React from "react";
// import { Counterfr } from "./Counterfr";
// import { Home } from "./Home";
// import { LanguageContext } from "./LanguageContext";




// const Strings = {
//    en: {CURRENT_TIME: "Good morning"},
//    fr: {CURRENT_TIME: <Counterfr/>},
//    tr: {CURRENT_TIME: <Home/>}
// }

// export class DisplayLanguage extends React.Component {
//    render() {
//       return <div>
//          <LanguageContext.Consumer>
//             {language => {
//                return (
//                   <div>
//                      <h1>{Strings[language].CURRENT_TIME}</h1>
//                   </div>
//                )
//             }}
//          </LanguageContext.Consumer>
//       </div>
//    }

// }

import React from 'react'

export default function DisplayLanguage() {
  return (
    <div>DisplayLanguage</div>
  )
}
