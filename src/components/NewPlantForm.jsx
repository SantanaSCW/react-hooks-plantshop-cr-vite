// Inside NewPlantForm.jsx
function handleSubmit(e) {
  e.preventDefault(); // This is the most important line!
  
  const formData = {
    name: name,
    image: image,
    price: parseFloat(price),
  };

  fetch("http://localhost:6001/plants", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  })
    .then((r) => r.json())
    .then((newPlant) => onAddPlant(newPlant));
}