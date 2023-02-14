import React from "react";

class Gallary extends React.Component {
  state = {};
  render() {
    return (
      <div className="img flex overflow-scroll justify-between">
        <img
          alt="net error"
          className="h-full w-1/3  "
          src={"/New-folder/bruno-rodrigues-279xIHymPYY-unsplash.jpg"}
        />
        <img
          alt="net error"
          className="h-full w-1/3 "
          src={"/New-folder/bruno-rodrigues-279xIHymPYY-unsplash.jpg"}
        />
        <img
          alt="net error"
          className="h-full w-1/3 "
          src={"/New-folder/bruno-rodrigues-279xIHymPYY-unsplash.jpg"}
        />
      </div>
    );
  }
}

export default Gallary;
