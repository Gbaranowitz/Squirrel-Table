const squirrelData = [
    { species: "Eastern Gray Squirrel", lifespan: 6, diet: "Nuts, Seeds, Fruits" },
    { species: "Red Squirrel", lifespan: 5, diet: "Conifer Seeds, Berries, Mushrooms" },
    { species: "Fox Squirrel", lifespan: 8, diet: "Acorns, Corn, Insects" },
    { species: "Flying Squirrel", lifespan: 10, diet: "Fruits, Nuts, Eggs" }
  ];
  
  const tableBody = document.querySelector("#squirrelTable tbody");
  
  squirrelData.forEach(squirrel => {
    const row = document.createElement("tr");
  
    const speciesCell = document.createElement("td");
    speciesCell.textContent = squirrel.species;
    row.appendChild(speciesCell);
  
    const lifespanCell = document.createElement("td");
    lifespanCell.textContent = squirrel.lifespan;
    row.appendChild(lifespanCell);
  
    const dietCell = document.createElement("td");
    dietCell.textContent = squirrel.diet;
    row.appendChild(dietCell);
  
    tableBody.appendChild(row);
  });
  