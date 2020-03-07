import React, {PureComponent} from "react";
import {HashRouter, Route, Switch} from "react-router-dom";
import smoothscroll from "smoothscroll-polyfill";
import "./App.css";
import "dhx-suite/codebase/suite.min.css";
import GridPage from "./grid/GridPage";

class App extends PureComponent {
	constructor(props) {
		super(props);
		smoothscroll.polyfill();
		this.state = {
			toolbarNav: [],
			activeExampleId: ""
		};
	}
	
	render() {
		return (
			<HashRouter hashType={ "slash" }>
				<div className='app-screen'
				     style={ {minHeight: "100vh", maxHeight: "100vh", display: "flex", overflow: "hidden"} }>
					<div className="app-screen__inner" style={ {width: "calc(100% - 0px)"} }>
						<Switch>
							<Route path={ `/grid` } component={ () => (
								<GridPage
									handleToolbarNavItems={ (array) => this.setToolBarNavItems(array) }
									setActiveExapmle={ (id, formObserver) => this.setActiveExapmle(id, formObserver) }
								/>
							) }
							/>
						</Switch>
					</div>
				</div>
			</HashRouter>
		);
	}
}

export default App;
