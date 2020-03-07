import React, {Component} from "react";
import {connect} from "react-redux";
import Grid from "./Grid";
import GridCdn from "./GridCdn";

import GridConfigured from "./GridConfigured";
import GridProps from "./GridProps";
import GridData from "./GridData";
import GridEvents from "./GridEvents";

class GridPage extends Component {
	
	
	render() {
		return (
			<div style={ styles.container }>
				<GridProps/>
			</div>
		);
	}
}

export default connect(state => state)(GridPage);

const styles = {
	container: {
		margin: 20
	}
}
