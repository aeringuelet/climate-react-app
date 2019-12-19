import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import Form from "./components/Form";
import Error from "./components/Error";
import Climate from "./components/Climate";

function App() {
	const [city, setCity] = useState("");
	const [country, setCountry] = useState("");
	const [error, setError] = useState(false);
	const [climate, setClimate] = useState(undefined);

	useEffect(() => {
		if (city === "") {
			return;
		}

		const getDataFromAPI = async () => {
			const apiKey = "f1e54ab581600ed7f027201cbea5d77f";
			const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

			const response = await fetch(url);
			const result = await response.json();

			setClimate(result);
		};

		getDataFromAPI();
	}, [city, country]);

	const getClimateData = ({ city, country }) => {
		if (city === "" || country === "") {
			setError(true);
			return;
		}

		setCity(city);
		setCountry(country);
		setError(false);
	};

	let component;
	if (error) {
		component = <Error message="Both fields are mandatory" />;
	} else if (climate && climate.cod === "404") {
		component = <Error message="City not found" />;
	} else if (climate) {
		component = <Climate data={climate} />;
	}

	return (
		<div className="App">
			<Header title="Climate React App" />

			<div className="contenedor-form">
				<div className="container">
					<div className="row">
						<div className="col s12 m6">
							<Form getClimateData={getClimateData} />
						</div>

						<div className="col s12 m6">{component}</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
