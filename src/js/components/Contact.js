import React from 'react';

class SocialMediaItem extends React.Component {
	render() {
		const hostname = this.props.hostname;
		const url = this.props.url;
		return (
			<li className="socialMediaItem">
				<a href={url} target="_blank" > 
					{hostname}
					<span> TODO: ADD ICONS </span>
				</a>
			</li>
		);
	}
};


class SocialMediaList extends React.Component {
	render() {
		const social_media_list = [];
		const contacts = this.props.aor_json.contactURL;
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
				<button className="loadResume"> Load Resume </button>
				<SocialMediaList {...this.props}/>
			</div>
		);
	}
};

export default Contact;