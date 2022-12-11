import avatar_mark_webber from "../assets/images/avatar-mark-webber.webp";
import avatar_angela_gray from "../assets/images/avatar-angela-gray.webp";
import avatar_jacob_thompson from "../assets/images/avatar-jacob-thompson.webp";
import avatar_rizky_hasanuddin from "../assets/images/avatar-rizky-hasanuddin.webp";
import avatar_kimberly_smith from "../assets/images/avatar-kimberly-smith.webp";
import avatar_nathan_peterson from "../assets/images/avatar-nathan-peterson.webp";
import avatar_anna_kim from "../assets/images/avatar-anna-kim.webp";

import image_chess from "../assets/images/image-chess.webp";

const data = [
	{
		imageUrl: avatar_mark_webber,
		name: "Mark Webber",
		detail: "reacted to your recent post",
		post: "My first tournament today!",
		group: "",
		picture: "",
		private_message: "",
		period: "1m ago",
		isRead: false,
	},
	{
		imageUrl: avatar_angela_gray,
		name: "Angela Gray",
		detail: "followed you",
		post: "",
		group: "",
		picture: "",
		private_message: "",
		period: "5m ago",
		isRead: false,
	},
	{
		imageUrl: avatar_jacob_thompson,
		name: "Jacob Thompson",
		detail: "has joined your group",
		post: "",
		group: "Chess Club",
		picture: "",
		private_message: "",
		period: "1 day ago",
		isRead: false,
	},
	{
		imageUrl: avatar_rizky_hasanuddin,
		name: "Rizky Hasanuddin",
		detail: "sent you a private message",
		post: "",
		group: "",
		picture: "",
		private_message:
			"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
		period: "5 days ago",
		isRead: true,
	},
	{
		imageUrl: avatar_kimberly_smith,
		name: "Kimberly Smith",
		detail: "commented on your picture",
		post: "",
		group: "",
		picture: image_chess,
		private_message: "",
		period: "1 week ago",
		isRead: true,
	},
	{
		imageUrl: avatar_nathan_peterson,
		name: "Nathan Peterson",
		detail: "reacted to your recent post",
		post: "5 end-game strategies to increase your win rate",
		group: "",
		picture: "",
		private_message: "",
		period: "2 weeks ago",
		isRead: true,
	},
	{
		imageUrl: avatar_anna_kim,
		name: "Anna Kim",
		detail: "left the group",
		post: "",
		group: "Chess Club",
		picture: "",
		private_message: "",
		period: "2 weeks ago",
		isRead: true,
	},
];

export default data;
