import React from "react";

function DetailScreen() {
  return (
    <div>
      <h1>Item Detail</h1>

      <img 
        src="https://via.placeholder.com/150" 
        alt="Item Image"
      />

      <h2>Item Title</h2>

      <p>
        This screen shows detailed information about the selected item 
        including its image, title, and description.
      </p>

    </div>
  );
}

export default DetailScreen;
