import React, { useState } from "react";

function Rating() {
	const [value, setValue] = useState(5);

	const increment = () => {
		if (value <= 9) {
			setValue((value) => value + 1);
		}
	};

	const decrement = () => {
		if (value >= 1) {
			setValue((value) => value - 1);
		}
	};

	// Conditionally rendering the text
	let initialText = "Average rating:";
	let changedText = "You rated this product:";
	let displayText = "";

	let counter = 1;

	if (value !== 5) {
		counter = counter + 1;
	}

	if (counter >= 2) {
		displayText = changedText;
	} else {
		displayText = initialText;
	}

	return (
		<div className="rating-wrapper">
			<h3>Please rate this MacBook Air out of 10</h3>
			<div>
				<button className="negative" onClick={decrement}>
					{" "}
					Rate down{" "}
				</button>
				<button className="postive" onClick={increment}>
					{" "}
					Rate up{" "}
				</button>

				<div className="rating-result">
					{" "}
					{displayText} {value}
				</div>
			</div>
		</div>
	);
}

export default Rating;
