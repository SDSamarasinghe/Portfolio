import React from "react";

function article_1() {
	return {
		date: "Jan 4 2022",
		title: "Azure Form Recognizer",
		description:
			"Form Recognizer is cloud-based Azure Applied AI service that uses machine-learning models to extract and analyze form fields, text, and tables from your documents. This application analyze your forms and documents, extracts text and data.",
		keywords: [
			"The Benefits of Cloud Computing",
			"Sadisha",
			"Azure",
			"Form Recognizer",
		],
		style: `
				.article-content {
					display: flex;
					flex-direction: column;
					align-items: center;
				}

				.randImage {
					align-self: center;
					outline: 2px solid red;
				}
				`,
		body: (
			<React.Fragment>
				<div className="article-content">
					<div className="paragraph">Content of article 1</div>
					<img
						src="https://picsum.photos/200/300"
						alt="random"
						className="randImage"
					/>
				</div>
			</React.Fragment>
		),
	};
}

function article_2() {
	return {
		date: "Sep 7 2022",
		title: "Monitoring & Observability",
		description:
			"Monitoring is the systematic process of collecting, analyzing and using information to track a programmer's progress toward reaching its objectives and to guide management decisions.",
		style: ``,
		keywords: [
			"Monitoring & Observability",
			"Sadisha",
			"Devops",
			"Cloud Computing",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

function article_3() {
	return {
		date: "Dec 10 2023",
		title: "Beginner’s Guide to Node.js and Kafka Integration",
		description:
			"Apache Kafka is an open-source distributed event streaming platform used by thousands of companies for high-performance data pipelines, streaming analytics, data integration, and mission-critical applications",
		style: ``,
		keywords: [
			"Beginner’s Guide to Node.js and Kafka Integration",
			"Kafka",
			"Devops",
			"Cloud Computing",
		],
		body: (
			<React.Fragment>
				<h1>Content of article 2</h1>
			</React.Fragment>
		),
	};
}

const myArticles = [article_1, article_2, article_3];

export default myArticles;
