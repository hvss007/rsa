 import React,{Component} from "react";
 import json from './data.json';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
import "./App.css";
import { HomePage } from "./Home";
import { CreatorPage } from "./Creator";
import { SurveyPage } from "./Survey";
import { ExportToPDFPage } from "./Export";

// import "bootstrap/dist/css/bootstrap.css";

// export default function SurveyJSReactApplication() {
//   return (
//     // <Router>
//     //   <div>
//     //     <nav className="navbar navbar-default">
//     //       <div className="container-fluid">
//     //         <div className="navbar-header">
//     //           <a className="navbar-brand" href="/">SurveyJS + ReactJS</a>
//     //         </div>
//     //         <ul className="nav navbar-nav">
//     //           <li>
//     //             <Link to="/">Home</Link>
//     //           </li>
//     //           <li>
//     //             <Link to="/survey">Survey</Link>
//     //           </li>
//     //           <li>
//     //             <Link to="/creator">SurveyJS Creator</Link>
//     //           </li>
//     //           <li>
//     //             <Link to="/export">Export to PDF</Link>
//     //           </li>
//     //         </ul>
//     //       </div>
//     //     </nav>

//     //     <Switch>
//     //       <Route exact path="/">
//     //         <HomePage />
//     //       </Route>
//     //       <Route path="/survey">
//     //         <SurveyPage />
//     //       </Route>
//     //       <Route path="/creator">
//     //         <CreatorPage />
//     //       </Route>
//     //       <Route path="/export">
//     //         <ExportToPDFPage />
//     //       </Route>
//     //     </Switch>
//     //   </div>
//     // </Router>
//     null
//   );
// }
import * as Survey from "survey-react";
import "survey-react/survey.css";

export default class App extends Component {
 //Define Survey JSON
 //Here is the simplest Survey with one text question
 json = {
  elements: [
   { type: "text", name: "customerName", title: "What is your name?", isRequired: true}
  ]
 };

 //Define a callback methods on survey complete
 onComplete(survey, options) {
  //Write survey results into database
  console.log("Survey results: " + JSON.stringify(survey.data));
 }
 render() {
  //Create the model and pass it into react Survey component
  //You may create survey model outside the render function and use it in your App or component
  //The most model properties are reactive, on their change the component will change UI when needed.
  var model = new Survey.Model(json);
  return (<Survey.Survey model={model} onComplete={this.onComplete}/>);
  /*
  //The alternative way. react Survey component will create survey model internally
  return (<Survey.Survey json={this.json} onComplete={this.onComplete}/>);
  */
  //You may pass model properties directly into component or set it into model
  // <Survey.Survey model={model} mode="display"/>
  //or 
  // model.mode="display"
  // <Survey.Survey model={model}/>
  // You may change model properties outside render function. 
  //If needed react Survey Component will change its behavior and change UI.
 }
} 