import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants] = useState([]);
  const [searchTerm, setSearchTerm] = useState(""); 

  
  useEffect(() => {
    fetch("http://localhost:6001/plants")
      .then((response) => response.json())
      .then((data) => setPlants(data));
  }, []);

  
  function handleAddPlant(newPlant) {
    setPlants((prevPlants) => [...prevPlants, newPlant]);
  }

  
  const filteredPlants = plants.filter((plant) =>
    plant.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <NewPlantForm onAddPlant={handleAddPlant} />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} /> 
      <PlantList plants={filteredPlants} /> 
    </div>
  );
}

export default PlantPage;
