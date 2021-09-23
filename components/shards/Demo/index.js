import React from "react";
import styles from "./demo.module.css";

import Slogan from "../Slogan";

const Demo = (props) => {
	return (
		<section className={styles.container}>
			<img
				className={styles.demoImage}
				src="demo.png"
				alt="App demo image"
			/>
			<Slogan />
			<p className={styles.descript}>
				Lorem hic assumenda quis voluptates molestias?
				Magnam ipsa sit esse repellat aperiam, esse.
				Delectus sint fugit eaque excepturi dolorem
				Praesentium unde fuga natus nisi placeat porro
				Reprehenderit officiis quia nesciunt.
			</p>
		</section>
	);
};

export default Demo;
