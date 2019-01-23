import * as React from 'react';
import styles from './SpfxSpa.module.scss';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

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
                </div>
            </Router>
        </div>
        );
    }
}