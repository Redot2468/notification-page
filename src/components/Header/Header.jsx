import React from "react";

const Header = ({ onClick, unreadCount }) => {
	return (
		<header className="w-full flex justify-between items-center">
			<div className="flex justify-center items-center">
				<h1 className="font-[800] text-[1.2rem] text-blacktext">
					Notifications
				</h1>
				{unreadCount > 0 && (
					<span className="ml-2 px-[0.55rem] rounded text-white text-sm font-[800] bg-bluetheme">
						{unreadCount}
					</span>
				)}
			</div>
			<button className="text-sm text-normaltext" onClick={onClick}>
				Mark all as read
			</button>
		</header>
	);
};

export default Header;
