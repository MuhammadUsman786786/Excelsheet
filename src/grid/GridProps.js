import React, {Component} from "react";
import PropTypes from "prop-types";
import {DataCollection, Grid as GridDHX} from "dhx-suite";
import "dhx-suite/codebase/suite.min.css";

class Grid extends Component {
	componentDidMount() {
		const {rowHeight, adjust, autoWidth, columns, data, editable, multiselection, selection} = this.props;
		this.grid = new GridDHX(this.el, {
			rowHeight: rowHeight,
			adjust: adjust,
			autoWidth: autoWidth,
			columns: columns,
			data: data,
			editable: editable,
			multiselection: multiselection,
			selection: selection
		});
	}
	
	componentWillUnmount() {
		this.grid && this.grid.destructor();
	}
	
	render() {
		return (
			<div style={ {width: "100%", height: "500px"} } ref={ el => this.el = el }></div>
		);
	}
}

class GridProps extends Component {
	getData() {
		const data = new DataCollection();
		data.load(`${ process.env.PUBLIC_URL }/static/grid.json`);
		return data;
	}
	
	render() {
		const columns = [
			{id: "country", header: [ {text: "country"} ]},
			{id: "population", header: [ {text: "population"} ]},
			{id: "yearlyChange", header: [ {text: "yearlyChange"} ]},
			{id: "netChange", header: [ {text: "netChange"} ]},
			{id: "destiny", header: [ {text: "destiny"} ]},
			{id: "area", header: [ {text: "area"} ]},
			{id: "migrants", header: [ {text: "migrants"} ]},
			{id: "fert", header: [ {text: "fert"} ]},
			{id: "age", header: [ {text: "age"} ]},
			{id: "urban", header: [ {text: "urban"} ]},
		];
		return (
			<Grid
				data={ this.getData() }
				rowHeight={ 60 }
				adjust={ true }
				autoWidth={ true }
				columns={ columns }
				editable={ true }
				multiselection={ true }
				selection={ "complex" }
			/>
		);
	}
}

GridProps.propTypes = {
	columns: PropTypes.array,
	spans: PropTypes.array,
	data: PropTypes.oneOfType([
		PropTypes.array,
		PropTypes.instanceOf(DataCollection)
	]),
	headerRowHeight: PropTypes.number,
	footerRowHeight: PropTypes.number,
	rowHeight: PropTypes.number,
	width: PropTypes.number,
	height: PropTypes.number,
	rowCss: PropTypes.func,
	splitAt: PropTypes.number,
	sortable: PropTypes.bool,
	autoWidth: PropTypes.bool,
	css: PropTypes.string,
	selection: PropTypes.oneOf([ "complex", "row", "cell" ]),
	resizeble: PropTypes.bool,
	multiselection: PropTypes.bool,
	keyNavigation: PropTypes.bool,
	htmlEnable: PropTypes.bool,
	editable: PropTypes.bool,
	dragMode: PropTypes.oneOf([ "target", "source", "both" ]),
	dragCopy: PropTypes.bool,
	adjust: PropTypes.bool,
	autoEmptyRow: PropTypes.bool
};

export default GridProps;
