import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import PsychologyAltTwoToneIcon from '@mui/icons-material/PsychologyAltTwoTone'
import PlayCircleFilledWhiteTwoToneIcon from '@mui/icons-material/PlayCircleFilledWhiteTwoTone'

import './banner.scss'

const iconVariants = {
    active: {
        x: 20,
        transition: {
            duration: 0.6,
            yoyo: Infinity,
            ease: 'easeOut',
        },
    },
    hover: {
        x: 0,
    },
}

function Banner() {
    return (
        <div>
            <div id="banner-wrapper">
                <div
                    id="banner"
                    className="box container"
                >
                    <div className="banner__description">
                        <h2>Decide</h2>

                        <p>One good decision can change your life forever!</p>
                    </div>
                    <div className="banner__buttons">
                        <ul>
                            <li>
                                <Link
                                    to="/take-decision"
                                    className="button active "
                                >
                                    <span className="banner__buttons-decision">
                                        Take a decision
                                    </span>
                                    <motion.div
                                        className="banner__buttons-decision-icon"
                                        variants={iconVariants}
                                        animate="active"
                                        whileHover="hover"
                                    >
                                        <PlayCircleFilledWhiteTwoToneIcon className="decision-icon" />
                                    </motion.div>
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/exemples"
                                    className="button "
                                >
                                    <span className="banner__buttons-examples">
                                        Examples
                                    </span>
                                    <div className="banner__buttons-examples-icon">
                                        <PsychologyAltTwoToneIcon className="examples-icon" />
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
