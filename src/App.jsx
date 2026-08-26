function App() {
  const fName = "Daniella";
  const lName = "Olujobi";
  const number = 10;
  const currentYear = new Date().getFullYear();
  const currentTime = new Date().getHours();

  let greeting;

const customStyle ={ 
  color: ""
}

  if (currentTime < 12) {
    greeting = "Good Morning";
    customStyle.color = "red";
  } else if (currentTime < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green";
  } else {
    greeting = "Good Night";
    customStyle.color = "blue";
  }

  return (
    <div>
      <h1 className="heading" style={customStyle}>
        {greeting} 
      </h1>
     <h1> My name is {fName} {lName} </h1>

      <p>My Favourite Foods are:</p>

      <div className="food-list">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIR02GZugA6rWasPrHip9J0TD2UNwPsxS-Sh64msw1_aKgwhhol5e8Ey_Hw90O8uz364HY0YFJptl5RPSlyzATTbhr18jxlKYIWPMvH1GU-g&s=10"
          alt="Food"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gorp.jpg/500px-Gorp.jpg"
          alt="Food"
        />

        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Gorp.jpg/500px-Gorp.jpg"
          alt="Food"
        />
      </div>

      <h3>
        And my lucky number is {Math.floor(Math.random() * number) + 1}
      </h3>

      <p>Copyright {currentYear}</p>
    </div>
  );
}

export default App;