import ReactDOM from 'react-dom';
import React from 'react';

// Component
import PortfolioApp from 'components/PortfolioApp.js';
import Introduction from 'components/Introduction.js';
import Experience from 'components/Experience.js';
import Education from 'components/Education.js';
import Skill from 'components/Skill.js';
import Contact from 'components/Contact.js';

// JSON
import Aornawat_JSON from 'aornawat.json';

var temp = {};
ReactDOM.render(
	<PortfolioApp aorInfo={Aornawat_JSON}/>,
	document.getElementById("root")
);