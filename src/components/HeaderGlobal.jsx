//Init
import React from "react";

//Style
import "../Style/HeaderGlobal.css";

//Component
function HeaderGlobal({ inPortfolio, title, quote }) {
	return (
		<header id="header-global">
			<div
				className={`header-global-container ${
					inPortfolio && "inPortfolio"
				}`}
			>
				<div className="header-global-title">
					<span>{title}</span>
				</div>
				<div className="header-global-qoute">
					<span>{quote}</span>
				</div>
			</div>
		</header>
	);
}

//Export
export default HeaderGlobal;
