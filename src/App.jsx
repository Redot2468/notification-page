import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Notification from "./components/Notification/Notification";
import data from "./constants/data";

const App = () => {
	const [markAll, setMarkAll] = useState(false);
	const [notifications, setNotifications] = useState(data);

	const markAllHandler = () => setMarkAll(true);

	useEffect(() => {
		if (markAll) {
			setNotifications((prev) => {
				return prev.map((element) => ({ ...element, isRead: true }));
			});
		}
	}, [markAll]);

	const isReadHandler = (index) => {
		let copyArr = [...notifications];
		const newData = { ...notifications[index], isRead: true };
		copyArr[index] = newData;
		setNotifications(copyArr);
	};

	const getUnread = () => {
		return notifications.filter((element) => !element.isRead).length;
	};

	return (
		<main className="w-full h-full bg-main md:py-20">
			<div className="w-full md:max-w-[640px] md:m-auto bg-white px-5 md:px-6 py-8 md:py-6 md:rounded-2xl md:shadow-2xl">
				<Header onClick={markAllHandler} unreadCount={getUnread()} />
				<Notification
					notifications={notifications}
					isReadHandler={isReadHandler}
				/>
			</div>
		</main>
	);
};

export default App;
