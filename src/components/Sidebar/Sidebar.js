import React from "react";
import { NavLink } from "react-router-dom";
import "./sidebar.scss";

const UserLinks = (props) => {
	let mainLinks = [
		{
			linkName: "Home",
			linkRoute: "",
			linkIcon: "home",
		},
		{
			linkName: "Trending",
			linkRoute: "trending",
			linkIcon: "broadcast-tower",
		},
		{
			linkName: "Subscriptions",
			linkRoute: "subscriptions",
			linkIcon: "folder",
		},
	];
	return (
		<div className="view-links app-links">
			<ul className="links">
				{mainLinks.map((linkItem) => (
					<li className="link-item" key={linkItem.linkRoute}>
						<NavLink
							exact
							activeClassName="active-view-link"
							to={`${props.defaultPath}/${linkItem.linkRoute}`}
							className="view-link"
						>
							<span
								className={`las la-${linkItem.linkIcon} icon-regular link-icon`}
							></span>
							<p className="link-text">{linkItem.linkName}</p>
						</NavLink>
					</li>
				))}
			</ul>
		</div>
	);
};

const Sidebar = (props) => {
	return (
		<aside className={props.sidebarState}>
			<button
				onClick={props.toggleSidebar}
				className="hide-sidebar icon-font-button hide-sidebar"
			>
				<span className="las la-angle-double-left icon-regular"></span>
			</button>
			<UserLinks defaultPath={props.defaultPath} />
			<hr />

			<div className="view-links user-links">
				<ul className="links">
					<li className="link-item">
						<NavLink
							to={`${props.defaultPath}/saved`}
							className="view-link"
							activeClassName="active-view-link"
						>
							<span className="las la-bookmark icon-regular link-icon"></span>
							<p className="link-text">Saved</p>
						</NavLink>
					</li>
				</ul>
			</div>
		</aside>
	);
};

export default Sidebar;
