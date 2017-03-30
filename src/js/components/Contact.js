import React from 'react';

// Icons
import Linkedin_icon from "icons/flaticon_svg/color/linkedin.svg";
import Github_icon from "icons/flaticon_svg/color/github.svg";


class SocialMediaItem extends React.Component {
	constructor(props) {
		super(props);
		this.getMatchingIcon = this.getMatchingIcon.bind(this);
	}

	getMatchingIcon(hostname) {
		hostname = hostname.toLowerCase();
		if (hostname.indexOf("linkedin") !== -1) {
			return (
				<Linkedin_icon
					width={"3em"}
					height={"3em"}
				/>
			);
		} else if (hostname.indexOf("github") !== -1) {
			return (
				<Github_icon 
					width={"3em"}
					height={"3em"}
				/>
			);
		}
	}

	render() {
		const hostname = this.props.hostname;
		const url = this.props.url;
		const icon = this.getMatchingIcon(hostname);
		return (
			<li className="socialMediaItem">
				<a href={url} target="_blank" > 
					{icon}
				</a>
			</li>
		);
	}
};


class SocialMediaList extends React.Component {
	render() {
		const social_media_list = [];
		const contacts = this.props.aorInfo.contactURL;
		for (let hostname in contacts) {
			social_media_list.push(
				<SocialMediaItem 
					key={hostname}
					hostname={hostname}
					url={contacts[hostname]}
				/>
			);
		}

		return (
			<ul className="socialMediaList">
				{social_media_list}
			</ul>
		);
	}
};

class Contact extends React.Component {

	render() {
		return (
			<div className="contact">
				<button className="huge positive ui button loadResume"> Load Resume </button>
				<SocialMediaList {...this.props}/>
			</div>
		);
	}
};

export default Contact;