import ReactDOM from 'react-dom';
import React from 'react';

// Component
import PortfolioApp from 'components/PortfolioApp.js';

// JSON
import Aornawat_JSON from 'aornawat.json';

ReactDOM.render(
	<PortfolioApp aor_json={Aornawat_JSON}/>,
	document.getElementById("root")
);