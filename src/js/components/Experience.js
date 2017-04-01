import React from 'react';
import {
	Timeline,
	TimelineEvent
} from "react-event-timeline";
import Slider from "react-slick";

// Icons
import Android_icon from "icons/flaticon_svg/color/android.svg";
import Web_icon from "icons/nucleo/color/color_globe.svg";

// Constant
const experience_icon_config = {
	width: 20,
	height: 20
};
const project_type_to_icon_map = {
	"android": (<Android_icon {...experience_icon_config}/>),
	"web": <Web_icon {...experience_icon_config} />
};

const language_set = new Set(
	["python", "java", "javascript", "go"]
);

const database_set = new Set(
	["mongodb", "postgresql", "mysql", "firebase"]
);

const test_set = new Set(
	["junit", "karma_jasmine"]
);

const style_set = new Set(
	["bootstrap", "semanticui", "sass"]
);

const library_set = new Set(
	["nodejs", "expressjs", "reactjs", "django",
		"leafletjs", "backbonejs", "angularjs",
		"cordova", "android"
	]
);

const source_control_set = new Set(
	["git"]
);

const api_set = new Set(
	["firebaseapi"]
);

const language_type_to_color_config = {
	"language": "blue",
	"database": "violet",
	"library": "purple",
	"style": "pink",
	"test": "brown",
	"api": "grey",
	"other": "black"
};



class ProjectImage extends React.Component {
	render() {
		const image_slider_config = this.props.image_slider_config;
		const images = this.props.images;

		if (images === undefined || images.length === 0) {
			return null;
		}

		if (images.length === 1) {
			return (
				<div className="image_slider_wrapper">
					<div className="single_image_wrapper">
						{images}
					</div>
				</div>
			);
		}

		return (
			<div className="image_slider_wrapper">
					<div className="image_slider">
						<Slider 
						{...image_slider_config}
						>
							{images}
						</Slider>
					</div>
				</div>
		);
	}
}

class Card extends React.Component {
	constructor(props) {
		super(props);
		this.get_color_to_language = this.get_color_to_language.bind(this);
		this.pushToObjectAtKey = this.pushToObjectAtKey.bind(this);
		this.to_languages_labels = this.to_languages_labels.bind(this);
		this.get_color_to_empty_list = this.get_color_to_empty_list.bind(this);
	}

	get_color_to_empty_list(color_list) {
		var res = {};
		for (let color of color_list) {
			res[color] = [];
		}
		return res;
	}

	to_languages_labels(color, lang_names) {
		var res = [];
		for (let lang of lang_names) {
			res.push(
				<i 
					className="ui label"
					key={lang}
				>
					{lang}
				</i>
			);
		}
		return res;
	}

	pushToObjectAtKey(obj, key, value_to_append) {
		if (key in obj) {
			obj[key].push(value_to_append);
		} else {
			obj[key] = [];
			obj[key].push(value_to_append);
		}
	}

	get_color_to_language(language_type_to_color_config, language_names) {
		var res = this.get_color_to_empty_list(
			Object.values(language_type_to_color_config)
		);

		for (let lang_name of language_names) {
			var current = lang_name;
			current = current.trim();
			current = current.toLowerCase();

			if (language_set.has(current)) {
				this.pushToObjectAtKey(res,
					language_type_to_color_config.language,
					lang_name);

			} else if (database_set.has(current)) {
				this.pushToObjectAtKey(res,
					language_type_to_color_config.database,
					lang_name);
			} else if (test_set.has(current)) {
				this.pushToObjectAtKey(res,
					language_type_to_color_config.test,
					lang_name);
			} else if (style_set.has(current)) {
				this.pushToObjectAtKey(res,
					language_type_to_color_config.style,
					lang_name);
			} else if (library_set.has(current)) {
				this.pushToObjectAtKey(res,
					language_type_to_color_config.library,
					lang_name);
			} else if (api_set.has(current)) {
				this.pushToObjectAtKey(res,
					language_type_to_color_config.api,
					lang_name);
			} else {
				this.pushToObjectAtKey(res,
					language_type_to_color_config.other,
					lang_name);
			}
		}
		return res;
	}

	render() {
		const image_slider_config = {
			arrows: true,
			dotsClass: "experience_image_slider_dot_bar",
			dots: false,
			lazyLoad: true,
			infinite: true,
			speed: 500,
			slidesToShow: 1,
			slidesToScroll: 1,
		};

		const responsibilities = this.props.responsibilities.map(function(responsibility, index) {
			return (
				<li 
					key={index}
					className="responsibility"
				> 
					{responsibility} 
				</li>
			);
		});

		const images = this.props.images.map(function(image_path, index) {
			const abs_parent_image = "data/images/projects/experience";

			return (
				<div
					className="slide_block"
					key={index}
				>
					<img
						className="slick_image"
						src={abs_parent_image + "/" + image_path}
					/>
				</div>
			);
		});

		const name = this.props.name;
		const projectType = this.props.projectType;
		const createdAt = this.props.createdAt;
		const url = this.props.url;

		const languages = this.props.languages;
		const color_to_languages =
			this.get_color_to_language(
				language_type_to_color_config,
				languages
			);

		var language_labels = [];
		for (let color in color_to_languages) {
			var current_labels = this.to_languages_labels(color, color_to_languages[color]);
			language_labels.push(
				<div 
					className={"ui " + color + " tag labels"}
					key={color}
				>
					{current_labels}
				</div>
			);
		}

		const selectedIcon = project_type_to_icon_map[projectType];
		const isNoImage = (images === undefined || images.length === 0) ? true : false;

		return (
			<div className="card">
				<i className="ui right corner label"> 
					{selectedIcon}
				</i>
				<ProjectImage 
					{...image_slider_config} 
					images={images}
				/>
				<div className={isNoImage? "description full" : "description"}>
					<h2 className="ui dividing header" id="app_name"> 
						<a href={url} target="_blank"> {name} </a>
					</h2>
					<ul className="responsibilityList ui list">
						{responsibilities}
					</ul>
					<div className="ui divider"></div>
					<div className="languages_wrapper">
						{language_labels}
					</div>
				</div>
			</div>
		);
	}
};

class Experience extends React.Component {
	render() {
		const aorInfo = this.props.aorInfo;
		const projects = aorInfo.projects;
		const experienceTimeline = projects.map(function(project) {
			return (
				<Card
					key={project.name}
					name={project.name}
					projectType={project.type}
					createdAt={project.start}
					images={project.images}
					languages={project.languages}
					url={project.url}
					responsibilities={project.responsibilities}					
				/>
			);
		});

		return (
			<div className="experience">
				{experienceTimeline}
			</div>
		);
	}
};

export default Experience;