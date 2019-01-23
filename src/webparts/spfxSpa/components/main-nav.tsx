import * as React from 'react';
import styles from './SpfxSpa.module.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Page1 from './page1';
import Page2 from './page2';
import Page3 from './page3';
import Page4 from './page4';

export default class MainNav extends React.Component {
    public render(): React.ReactElement<null> {
        return (<div>
            <p>Navigation</p>

            <Router>
                <div>
                    <ul className={styles.navigation}>
                        <li className="ms-fontWeight-semibold ms-fontSize-mPlus">
                            <Link to={`/`}>OPEN ISSUES</Link>
                        </li>
                        <li className="ms-fontWeight-semibold ms-fontSize-mPlus navLink">
                            <Link to={`/my/`}>MY ISSUES</Link>
                        </li>
                        <li className="ms-fontWeight-semibold ms-fontSize-mPlus navLink">
                            <Link to={`/new/`}>CREATE A NEW ISSUE</Link>
                        </li>
                        <li className="ms-fontWeight-semibold ms-fontSize-mPlus navLink">
                            <Link to={`/closed/`}>CLOSED ISSUES</Link>
                        </li>
                    </ul>

                    <div className="padContent"></div>
                    <Route exact path={`/`} component={Page1} />
                    <Route path={`/my/`} component={Page2} />
                    <Route path={`/new`}  component={Page3} />
                    <Route path={`/closed/`} component={Page4} />
                </div>
            </Router >
        </div >
        );
    }
}