import moment from "moment";

export const enterRoundtable = (e, target) => {
	e.preventDefault();
	document.body.classList.add("editing");
	setTimeout(() => {
		
		window.location.assign(target);
	}, 250);
};

export const roundtableOpened = (e, target) => {
	e.preventDefault();
	document.body.classList.add("roundtableOpen");
	setTimeout(() => {
		window.location.assign(target);
	}, 0);
};

export const exitRoundtable = (e, target) => {
	e.preventDefault();
	document.body.classList.remove("editing", "roundtableOpen");
	setTimeout(() => {
		window.location.assign(target);
	}, 250);
};

export const parseDate = (time) => {
	if(time === null){
		return "Publish Date Not Set"
	}
	const date = moment(time).format("MMMM Do YYYY");
	return date;
};

export const parsePublishDate = (publishDate) => {
	const publishDay = moment().add(publishDate, "days").format("MMMM DD YYYY");
	return publishDay;
};
