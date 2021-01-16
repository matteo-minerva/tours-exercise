import React, { useState, useEffect } from "react";
import Tours from "./components/TourList";

const App = () => {
  const url = "https://course-api.com/react-tours-project";
  const [tour, setTour] = useState([]);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const getTour = async () => {
    try {
      const response = await fetch(url);
      let tour;
      if (response.status >= 200 && response.status <= 299) {
        tour = await response.json();
      } else {
        setIsError(true);
        setIsLoading(false);
        throw new Error(response.statusText);
      }
      setTour(tour);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setIsError(true);
      console.log(error);
    }
  };

  useEffect(() => {
    getTour();
  }, []);

  const removeTour = (id) => {
    console.log(id);
    let a = tour.filter((item) => item.id !== id);
    setTour(a);
  };

  if (isLoading) {
    return (
      <main>
        <div className="loading">
          <h1>Loading...</h1>
        </div>
      </main>
    );
  }

  if (tour.length === 0 && !isError) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => getTour()}>
            refresh
          </button>
        </div>
      </main>
    );
  }

  if (isError) {
    return (
      <main>
        <div className="loading">
          <h1>Error</h1>
        </div>
      </main>
    );
  }

  return (
    <main>
      <section>
        <Tours data={tour} removeTour={removeTour} />
      </section>
    </main>
  );
};

export default App;
