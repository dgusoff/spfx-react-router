import * as React from 'react';
//import styles from './SpfxSpa.modules.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

export default class MainNav extends React.Component {
    public render(): React.ReactElement<null> {
        return (  <div>
            <p>Navigation</p>
    
            <Router>
                <div>
            <ul className="navigation">
              <li className="ms-fontWeight-semibold ms-fontSize-mPlus">
                <Link to={`/`}><i className="ms-Icon ms-Icon--Home" aria-hidden="true"></i></Link>
              </li>
              <li className="ms-fontWeight-semibold ms-fontSize-mPlus navLink">
                <Link to={`/leaderboard/`}>LEADERBOARD</Link>
              </li>
              <li className="ms-fontWeight-semibold ms-fontSize-mPlus navLink">
                <Link to={`/my/`}>MY ASSIGNMENTS</Link>
              </li>
              <li className="ms-fontWeight-semibold ms-fontSize-mPlus navLink">
                <Link to={`/open/`}>OPEN JOBS</Link>
              </li>
              <li className="ms-fontWeight-semibold ms-fontSize-mPlus navLink">
                <Link to={`/past/`}>PAST ASSIGNMENTS</Link>
              </li>        
            </ul>
          </div>
                  
            </Router>       
            
            </div>);
    }
}