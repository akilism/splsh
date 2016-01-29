import { default as React, Component } from 'react';
import { default as ReactDOM } from 'react-dom';

import bg0 from "../images/bg0.jpg";
import bg1 from "../images/bg1.jpg";
import bg2 from "../images/bg2.jpg";
import bg3 from "../images/bg3.jpg";
import bg4 from "../images/bg4.jpg";
import vicelandVid from "../videos/viceland.mp4";

const timeSegments = [{s: 1, e: 10},
                      {s: 35, e: 60},
                      {s: 70, e: 90},
                      {s: 125, e: 150},
                      {s: 155, e: 170},
                      {s: 195, e: 205},
                      {s: 245, e: 260},
                      {s: 280, e: 300},
                      {s: 300, e: 316},
                      {s: 350, e: 360}];

export default class Root extends Component {
	constructor(props){
		super(props);
		this.state = {
			bg: bg0,
      clip: false,
      xOff: 0,
      yOff: 0,
      textLen: 0,
      textHeight: 0,
      hideLogo: false,
      title: "viceland"
		};
    this.logoOver = null;
    this.logoOut = null;
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
		//this.setState({bg: this.getNewBG()});
	}

	wrapText(text, clip, over, out) {
    const clipStyle = (clip) ? {color: 'transparent'} : {};

		return text.split('').map((c) => {
			return (<span style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)}>{c}</span>);
		});
	}

  logoSvg(clip, over, out) {
    const clipStyle = (clip) ? {fill: 'transparent'} : {}
    return (
      <svg ref="logoSvg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644 91" className="logo-svg" >
        <g id="letters">
            <path style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} d="M0,1.49l26.226,0l18.258,62.869l17.982,-62.869l25.451,0l-30.099,87.361l-27.166,0l-30.652,-87.361Z" />
            <rect style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} x="97.156" y="1.49" width="25.119" height="87.361" />
            <path style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} d="M194.257,53.156l21.966,7.151c-1.476,6.634 -3.799,12.176 -6.972,16.626c-3.172,4.449 -7.109,7.806 -11.812,10.071c-4.703,2.264 -10.688,3.396 -17.954,3.396c-8.816,0 -16.018,-1.38 -21.606,-4.141c-5.588,-2.761 -10.411,-7.618 -14.468,-14.57c-4.058,-6.953 -6.086,-15.852 -6.086,-26.697c0,-14.461 3.568,-25.575 10.706,-33.342c7.137,-7.767 17.234,-11.65 30.292,-11.65c10.217,0 18.249,2.225 24.095,6.674c5.847,4.45 10.19,11.283 13.03,20.5l-22.131,5.303c-0.775,-2.661 -1.586,-4.608 -2.435,-5.84c-1.401,-2.065 -3.116,-3.655 -5.145,-4.767c-2.029,-1.112 -4.297,-1.668 -6.805,-1.668c-5.681,0 -10.033,2.463 -13.058,7.389c-2.287,3.655 -3.43,9.395 -3.43,17.222c0,9.693 1.364,16.338 4.094,19.933c2.73,3.596 6.566,5.393 11.508,5.393c4.795,0 8.419,-1.45 10.872,-4.35c2.453,-2.9 4.233,-7.111 5.339,-12.633Z" />
            <path style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} d="M228.34,1.49l67.168,0l0,18.652l-42.049,0l0,13.885l39.006,0l0,17.818l-39.006,0l0,17.222l43.266,0l0,19.784l-68.385,0l0,-87.361Z" />
            <path style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} d="M310.225,1.49l25.064,0l0,65.848l39.117,0l0,21.513l-64.181,0l0,-87.361Z" />
            <path style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} d="M435.71,74.43l-28.55,0l-3.928,14.421l-25.617,0l30.486,-87.361l27.332,0l30.486,87.361l-26.226,0l-3.983,-14.421ZM430.454,55.539l-8.964,-31.404l-8.907,31.404l17.871,0Z" />
            <path style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} d="M474.108,1.49l23.403,0l30.542,48.329l0,-48.329l23.625,0l0,87.361l-23.625,0l-30.376,-47.971l0,47.971l-23.569,0l0,-87.361Z" />
            <path style={clipStyle} onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} d="M568.664,1.49l37.235,0c7.341,0 13.27,1.072 17.788,3.218c4.519,2.145 8.254,5.224 11.204,9.236c2.951,4.013 5.091,8.681 6.419,14.004c1.327,5.324 1.991,10.965 1.991,16.924c0,9.336 -0.986,16.577 -2.96,21.722c-1.973,5.144 -4.712,9.455 -8.216,12.931c-3.504,3.476 -7.266,5.79 -11.287,6.942c-5.496,1.589 -10.475,2.384 -14.939,2.384l-37.235,0l0,-87.361ZM593.727,21.274l0,47.733l6.142,0c5.237,0 8.963,-0.626 11.176,-1.877c2.213,-1.252 3.947,-3.437 5.201,-6.555c1.254,-3.119 1.881,-8.174 1.881,-15.166c0,-9.257 -1.402,-15.593 -4.205,-19.01c-2.803,-3.417 -7.451,-5.125 -13.943,-5.125l-6.252,0Z" />
        </g>
      </svg>
    );
  }

  logoSvgText(text, clip, over, out) {
    const clipStyle = (clip) ? {fill: 'transparent'} : {}
    return (
      <svg ref="logoSvg" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644 91" className="logo-svg" >
        <g id="letters">
            <text style={clipStyle} textLength="1" lengthAdjust="spacing" onMouseOver={over.bind(this)} onMouseOut={out.bind(this)} fontFamily="Arial Black" fontSize="16vw" fontWeight="900">{text.toUpperCase()}</text>
        </g>
      </svg>
    );

  }

  logoClipper(text, xOff, yOff, textLen, textHeight) {
    // console.log(xOff, yOff, textLen);
    // x={xOff} y={yOff}
    // if(textLen === 0) { return ""; }
    const offsetStyle = {transform: `translate(${xOff}px, ${yOff}px)`};
    return (
      <svg ref="clipper" version="1.1" xmlns="http://www.w3.org/2000/svg" className="logo-svg clipper">
        <defs>
          <clipPath id="clipLetters" style={offsetStyle}>
            <text y={textHeight} textLength={textLen} lengthAdjust="spacing" fontFamily="Arial Black" fontSize="16vw" fontWeight="900">{text.toUpperCase()}</text>
          </clipPath>
        </defs>
      </svg>
    );
  }

  seekTo(sec) {
    this.refs["vicelandVideo"].currentTime = sec;
  }

  pause() {
    this.refs["vicelandVideo"].pause();
  }

  play() {
    this.refs["vicelandVideo"].play();
  }

  paused() {
    return this.refs["vicelandVideo"].paused;
  }

  stop() {
    this.pause();
    this.seekTo(0);
  }

  volume(vol) {
    this.refs["vicelandVideo"].volume = vol;
  }

  videoDimensions(video) {
    if(video) {
      return {videoCenter: video.clientHeight * 0.5,
              videoHeight: video.clientHeight,
              videoLeft: video.offsetLeft,
              videoTop: video.offsetTop,
              videoWidth: video.clientWidth};
    }

    return {videoCenter: 0, videoHeight: 0, videoWidth: 0};
  }

  logoDimensions(logo) {
    if(logo) {
      return {logoCenter: logo.clientHeight * 0.5,
              logoHeight: logo.clientHeight,
              logoLeft: logo.offsetLeft,
              logoTop: logo.offsetTop,
              logoWidth: logo.clientWidth};
    }

    return {logoCenter: 0,
            logoHeight: 0,
            logoLeft: 0,
            logoTop: 0,
            logoWidth: 0};
  }

  clipVid(clip, video) {
    const {videoCenter, videoHeight, videoLeft, videoTop, videoWidth} = this.videoDimensions(video),
          {logoCenter, logoHeight, logoLeft, logoTop, logoWidth} = this.logoDimensions(this.refs["logo"]);
          // console.log(this.videoDimensions(video), this.logoDimensions(this.refs["logo"]));
    this.setState({clip, textLen: logoWidth, xOff: logoLeft, yOff: logoTop, textHeight: logoHeight});
  }

  videoCanPlay(evt) {
  	this.togglePlay();
    // this.volume(0);
    // this.play();
    // setTimeout(() => {
    //   this.pause();
    // }, 1500);
  }

  hideOnDelay(duration) {
    if(this.timeoutId) { clearTimeout(this.timeoutId); }
    this.timeoutId = setTimeout(() => {
      this.timeoutId = null;
      this.removeLogoListener(this.refs["logo"]);
      this.setState({hideLogo: true});
    }, duration);
  }

  globalMouseOver(evt) {
    this.hideOnDelay(2500);
    setTimeout(() => {
      this.attachLogoListener(this.refs["logo"]);
    }, 1000);
    this.setState({hideLogo: false});
  }

  clipVideo(shouldClip, video) {
    if(shouldClip) {
      this.clipVid(true, video);
    } else {
      this.clipVid(false, video);
    }
  }

  attachLogoListener(logo) {
    logo.addEventListener("mouseover", this.logoOver);
    logo.addEventListener("mouseleave", this.logoOut);
  }

  removeLogoListener(logo) {
    logo.removeEventListener("mouseover", this.logoOver);
    logo.removeEventListener("mouseleave", this.logoOut);
  }

  togglePlay(forcePlay) {
    console.log(this.paused(), forcePlay === true, !this.state.hideLogo);
    if(forcePlay === true || this.paused()) {
      this.play();
      this.hideOnDelay(2500);
      this.setState({clip: false});
    } else if(!this.state.hideLogo) {
      this.hideOnDelay(250);
      this.setState({clip: false});
    } else {
    	if(this.timeoutId) { clearTimeout(this.timeoutId); }
    	this.timeoutId = null;
      setTimeout(() => {
        this.attachLogoListener(this.refs["logo"]);
      }, 3000);
      this.pause();
      this.setState({clip: true, hideLogo: false});
    }
  }

  componentDidMount() {
    this.volume(0.5);
    this.logoOver = this.clipVideo.bind(this, true, this.refs["vicelandVideo"]);
    this.logoOut = this.clipVideo.bind(this, false, this.refs["vicelandVideo"]);
    window.addEventListener("mouseover", this.globalMouseOver.bind(this));
    this.attachLogoListener(this.refs["logo"]);
  }

  render() {
  	const text = this.wrapText(this.state.title, this.state.clip, () => { this.clipVid(true, video); }, () => { this.clipVid(false, video); }),
          video = this.refs["vicelandVideo"],
          hideLogo = (this.state.hideLogo) ? "zero-opacity" : "full-opacity",
          hideCopy = (this.state.hideLogo && !this.state.clip) ? "zero-opacity tv-copy" : "full-opacity tv-copy",
          contentClasses = (this.state.clip) ? "content full-opacity" : "content zero-opacity hidden",
          withClip = (this.state.clip) ? {clipPath: `url(#clipLetters)`, WebkitClipPath: `url(#clipLetters)`} : {},
          clipStyle = (this.state.clip) ? {color: 'transparent'} : {},
          logoClickHandler = (this.state.clip) ? () => { this.togglePlay(true); } : this.togglePlay.bind(this);

// {this.logoSvg(this.state.clip, () => { this.clipVid(true, video); }, () => { this.clipVid(false, video); })}
// <h1 className={hideLogo} ref="logo">{text}</h1>
// {this.logoClipper(this.state.xOff, this.state.yOff, this.state.textLen)}
// <video onCanPlay={this.videoCanPlay.bind(this)} className="full-video" ref="vicelandVideo" style={withClip} src={vicelandVid} controls></video>
// {this.logoSvgText(this.state.title, this.state.clip, () => { this.clipVid(true, video); }, () => { this.clipVid(false, video); })}
// <img src={bg0} className="full-video"  ref="vicelandVideo" style={withClip}  />
    return (
      <div ref="r-root" className="r-root bg-mask">
        <h1 style={clipStyle}
        		onClick={logoClickHandler}
        		className={hideLogo}
        		ref="logo">
        			{this.state.title}
        		</h1>
        <div className={hideCopy}
             onMouseOver={this.logoOver}
             onMouseOut={this.logoOut}>
          It's a TV channel.
        </div>
        <video onClick={this.togglePlay.bind(this)}
        			 onCanPlay={this.videoCanPlay.bind(this)}
			         className="full-video"
			         ref="vicelandVideo"
			         style={withClip}
			         src={vicelandVid}
			         controls>
        </video>
        <div className={contentClasses}
        		 onMouseOver={this.logoOver}
             onMouseOut={this.logoOut}>
        	<form action="https://vice4.createsend.com/t/i/s/iklyyu/" method="post" id="subForm">
						<h3>Sign Up for Updates</h3>
						<input id="fieldEmail" name="cm-iklyyu-iklyyu" type="email" required="" placeholder="email@address.com" />
						<button type="submit">Go</button>
					</form>

					<div className="social">
						<h3>Connect with VICELAND</h3>
						<a href="https://www.facebook.com/VICELANDTV" target="_blank" className="site-icon facebook">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
								<path d="M24 6.206h-4.57c-0.541 0-1.144 0.71-1.144 1.662v3.299h5.714v4.704h-5.714v14.128h-5.395v-14.126h-4.891v-4.706h4.891v-2.768c0-3.97 2.755-7.2 6.538-7.2h4.571v5.006z"></path>
							</svg>
						</a>
						<a href="https://twitter.com/VICELAND" target="_blank" className="site-icon twitter">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
								<path d="M30.72 6.469c-1.085 0.482-2.248 0.805-3.47 0.952 1.248-0.747 2.206-1.931 2.656-3.341-1.166 0.691-2.459 1.195-3.834 1.466-1.102-1.174-2.672-1.907-4.41-1.907-3.336 0-6.040 2.704-6.040 6.038 0 0.474 0.053 0.934 0.157 1.376-5.019-0.251-9.47-2.656-12.448-6.31-0.522 0.891-0.821 1.93-0.821 3.037 0 2.096 1.067 3.944 2.688 5.027-0.99-0.032-1.922-0.302-2.736-0.755 0 0.026 0 0.050 0 0.075 0 2.926 2.083 5.366 4.845 5.923-0.506 0.138-1.040 0.211-1.592 0.211-0.389 0-0.766-0.037-1.136-0.107 0.768 2.4 3 4.146 5.642 4.194-2.067 1.621-4.67 2.586-7.501 2.586-0.488 0-0.968-0.029-1.44-0.085 2.672 1.714 5.846 2.714 9.259 2.714 11.109 0 17.184-9.203 17.184-17.186 0-0.261-0.005-0.522-0.018-0.781 1.181-0.851 2.203-1.915 3.014-3.126z"></path>
							</svg>
						</a>
						<a href="https://www.instagram.com/VICELAND/" target="_blank" className="site-icon instagram">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32">
								<path d="M26.688 0h-21.375c-2.922 0-5.313 2.391-5.313 5.313v21.375c0 2.922 2.391 5.313 5.313 5.313h21.375c2.922 0 5.313-2.391 5.313-5.313v-21.375c0-2.922-2.391-5.313-5.313-5.313zM10.244 14h11.513c0.218 0.627 0.337 1.3 0.337 2 0 3.36-2.734 6.094-6.094 6.094s-6.094-2.734-6.094-6.094c0-0.7 0.119-1.373 0.338-2zM28 14.002v11.998c0 1.1-0.9 2-2 2h-20c-1.1 0-2-0.9-2-2v-12h3.128c-0.145 0.644-0.222 1.313-0.222 2 0 5.014 4.079 9.094 9.094 9.094s9.094-4.079 9.094-9.094c0-0.687-0.077-1.356-0.222-2l3.128 0.002zM28 7c0 0.55-0.45 1-1 1h-2c-0.55 0-1-0.45-1-1v-2c0-0.55 0.45-1 1-1h2c0.55 0 1 0.45 1 1v2z"></path>
							</svg>
						</a>
						<a href="https://www.youtube.com/c/VicelandTV" target="_blank" className="site-icon youtube">
							<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="46" height="32" viewBox="0 0 46 32">
								<path d="M31.6 16l-14.88 8.8v-17.52l14.88 8.72zM45.6 24.16v-16.32c0 0 0-7.84-7.84-7.84h-29.92c0 0-7.84 0-7.84 7.84v16.32c0 0 0 7.84 7.84 7.84h29.84c0 0 7.92 0 7.92-7.84z"></path>
							</svg>
						</a>
					</div>

					<div className="watch-wrapper">
						<h3 className="wtw">Ways to Watch</h3>
						<div className="ways-to-watch">
							<section>
								<h1>TV</h1>
								<p>On the big screen. Now H2, soon VICELAND. <a href="http://www.vice.com/read/how-to-watch-viceland" target="_blank">Check your cable channels</a> to see if you get H2 now.</p>
							</section>
							<section>
								<h1>Internet</h1>
								<p>On your laptop. Save this page and we'll have some free episodes for you February 29.</p>
							</section>
							<section>
								<h1>Apps</h1>
								<p>In your pocket. iOS and Android apps available February 29. Same goes for Apple TV and Roku.</p>
							</section>
						</div>
					</div>

        </div>
        {this.logoClipper(this.state.title, this.state.xOff, this.state.yOff, this.state.textLen, this.state.textHeight)}
      </div>
    );
  }
}
