import React from "react";

const NotificationItem = ({
	index,
	imageUrl,
	name,
	detail,
	post,
	group,
	picture,
	private_message,
	period,
	isRead = true,
	isReadHandler,
}) => {
	return (
		<div
			className={`${
				isRead ? "bg-white" : "bg-unread"
			} w-full p-3 flex gap-3 rounded-lg cursor-pointer`}
			onClick={() => isReadHandler(index)}
		>
			<div className="min-w-[40px] max-w-[40px]">
				<img className="block w-full" src={imageUrl} alt={name} />
			</div>
			<div className="grow text-normaltext">
				<div className="text-sm font-[500]">
					<a className="text-blacktext font-[800] mr-1" href="#">
						{name}
					</a>{" "}
					{detail}{" "}
					{post && (
						<a className="font-[800] ml-1" href="#">
							{post}
						</a>
					)}{" "}
					{group && (
						<a className="font-[800] ml-1 text-bluetheme" href="#">
							{group}
						</a>
					)}{" "}
					{!isRead && (
						<span className="inline-block ml-1 w-2 h-2 rounded-full bg-redtheme"></span>
					)}
				</div>
				<span className="text-xs text-period">{period}</span>
				{private_message && (
					<div className="p-4 border mt-3 rounded-lg">
						<p className="text-sm font-[500]">{private_message}</p>
					</div>
				)}
			</div>
			{picture && (
				<div className="min-w-[40px] max-w-[40px]">
					<img
						className="block w-full rounded-lg"
						src={picture}
						alt={name}
					/>
				</div>
			)}
		</div>
	);
};

const Notification = ({ notifications, isReadHandler }) => {
	return (
		<section className="py-5 md:pb-0 flex flex-col gap-3">
			{notifications.map((data, index) => (
				<NotificationItem
					key={index}
					index={index}
					imageUrl={data.imageUrl}
					name={data.name}
					detail={data.detail}
					post={data.post}
					group={data.group}
					picture={data.picture}
					private_message={data.private_message}
					period={data.period}
					isRead={data.isRead}
					isReadHandler={isReadHandler}
				/>
			))}
		</section>
	);
};

export default Notification;
