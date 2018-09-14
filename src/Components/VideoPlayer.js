import React, { Component } from 'react';
import { Player, ControlBar } from 'video-react';
import 'video-react/dist/video-react.css'; // import css
import VideoDetails from './VideoDetails';
import BigPlayButton from 'video-react/lib/components/BigPlayButton';
import { withRouter } from 'react-router-dom';
import { API } from "aws-amplify";

class VideoPlayer extends Component {
	constructor(props) {
		super(props);
		this.state = {
			error: null,
			video: null
		};
	}

	componentDidMount() {
		if (this.props.video) {
			if (!(this.props.video.videoId === this.props.match.params.videoId)) {
				console.log("Called fetch video 1")
				this.getVideo().then((video) => {
					this.setState({ videos: video })
					localStorage.setItem('videos', JSON.stringify(video))
				})
				
			}
		} else if (!localStorage.getItem('activeVideo')) {
			console.log("Called fetch video 2")
			this.getVideo().then((video) => {
				this.setState({ videos: video })
			})
			
		}
	}

	getVideo() {
		return API.get("videos", `/videos/${this.props.match.params.videoId}`);
	  }

	render() {

		var video = this.state.video

		if (this.props.video) {
			if (this.props.video.videoId === this.props.match.params.videoId) {
				video = this.props.video
			}
		} else {
			if (localStorage.getItem('activeVideo')) {
				video = JSON.parse(`${localStorage.getItem('activeVideo')}`);
			}
		}

		if (!video) {
			return <div className='loading-div no-videos'>No video found...</div>;
		} else {
			// if (video.tag != "VR") {
			return (
				<div id="playerWrapper" className="">
					<div className="col-lg-10 col-md-11 col-sm-12">
						<Player src={video.vid_uri} key={this.props.match.params.videoId} fluid={false} width='70%' height={400}>
							<BigPlayButton position='center' />
							<ControlBar autoHide={false} />

						</Player>
					</div>
					<VideoDetails video={video} />
				</div>
			);
			
		}
	}
}

export default withRouter(VideoPlayer);