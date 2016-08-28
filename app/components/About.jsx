var React = require('react');

var About = (props) => {
  return (
    <div>
      <h1 className="text-center page-title">About</h1>
      <p>
        This is a weather application built using React.
      </p>
      <p>
        Here are some of the tools that were used:
      </p>
      <ul>
        <li>
          <a href="https://facebook.github.io/react">React</a> - The
            JavaScript framework that was used.
        </li>
        <li>
          <a href="http://openweathermap.org">Open Weather Map</a> - 
            Open Weather Map is used to search for weather data by city name.
        </li>
      </ul>
    </div>
  );
};

module.exports = About;
