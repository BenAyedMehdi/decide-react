import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

function Banner() {
    return (
        <div>
            <div id="banner-wrapper">
                <div
                    id="banner"
                    className="box container"
                >
                    <div className="row">
                        <div className="col-7 col-12-medium">
                            <h2>Decide</h2>
                            <p>One decision can change your life forever!</p>
                        </div>
                        <div className="col-5 col-12-medium">
                            <ul>
                                <li>
                                    <Link
                                        to="/take-decision"
                                        className="button large icon solid fa-arrow-circle-right"
                                    >
                                        Take a decision
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="/exemples"
                                        className="button alt large icon solid fa-question-circle"
                                    >
                                        Examples
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
