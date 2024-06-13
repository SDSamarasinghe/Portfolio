import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/works.css";

const Works = () => {
	return (
		<div className="works">
			<Card
				icon={faBriefcase}
				title="Work"
				body={
					<div className="works-body">
						<div className="work">
							<img
								src="./virtusa.jpeg"
								alt="facebook"
								className="work-image"
							/>
							<div className="work-title">Virtusa</div>
							<div className="work-subtitle">TechOps- Intern</div>
							<div className="work-duration">
								2022 June - 2023 June
							</div>
						</div>

						<div className="work">
							<img
								src="./betalaunch.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Beta Launch</div>
							<div className="work-subtitle">
								Intern Software Engineer
							</div>
							<div className="work-duration">
								2023 Jul - 2024 April
							</div>
						</div>
						<div className="work">
							<img
								src="./betalaunch.jpeg"
								alt="twitter"
								className="work-image"
							/>
							<div className="work-title">Beta Launch</div>
							<div className="work-subtitle">
								Associate Software Engineer
							</div>
							<div className="work-duration">
								2024 April - Present
							</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Works;
