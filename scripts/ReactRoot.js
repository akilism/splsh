import { default as React, Component } from 'react';
import { default as ReactDOM } from 'react-dom';

import bg0 from "../images/bg0.jpg";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";

export default class Root extends Component {
	constructor(props){
		super(props);
		this.state = {
			bg: bg0
		};
	}

	getNewBG() {
		let newBG;
		switch(Math.round(Math.random() * 4)) {
			case 1:
				newBG = bg1;
				break;
			case 2:
				newBG = bg2;
				break;
			case 3:
				newBG = bg3;
				break;
			case 4:
				newBG = bg4;
				break;
			default:
				newBG = bg0;
				break;
		}

		if(newBG === this.state.bg) {
			return this.getNewBG();
		}

		return newBG;
	}

	doSomething() {
		this.setState({bg: this.getNewBG()});
	}

	wrapText(text, handler) {
		return text.split('').map((c) => {
			return (<span onMouseOver={handler.bind(this)}>{c}</span>);
		});
	}

  render() {
  	const text = this.wrapText("nothing", this.doSomething);
    return (
      <div className="r-root bg-mask" style={{backgroundImage: `url(${this.state.bg})`}}>
      blahblahblah
      	<h1>{text}</h1>
      </div>
    );
  }
}
