import React, {Component} from "react";
import GridProps from "./GridProps";
import CSVReader from 'react-csv-reader'
import {getFormattedDataList} from "../utils/transform";
import * as _ from 'lodash'

class GridPage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			columns: [],
			dataList: []
		}
	}
	
	onLoadData = (fileData) => {
		const {columns, dataList} = getFormattedDataList(fileData) || {};
		this.setState({columns, dataList})
	};
	
	render() {
		return (
			<div style={ styles.container }>
				<CSVReader onFileLoaded={ this.onLoadData }/>
				{ !_.isEmpty(this.state.dataList) &&
				<GridProps columns={ this.state.columns } dataList={ this.state.dataList }/>
				}
			</div>
		);
	}
}

export default GridPage;

const styles = {
	container: {
		margin: 20
	}
};
