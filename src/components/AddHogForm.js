import React, { useState } from "react";

function AddHogForm({ onAddHog }) {
  const [formData, setFormData] = useState({
    name: '',
    specialty: '',
    weight: '',
    greased: false,
    image: '',
    'highest medal achieved': ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new hog object to add
    const newHog = {
      ...formData,
      weight: parseFloat(formData.weight), // Ensure weight is a number
    };

    // Call the onAddHog function passed from the parent
    onAddHog(newHog);

    // Reset form fields
    setFormData({
      name: '',
      specialty: '',
      weight: '',
      greased: false,
      image: '',
      'highest medal achieved': ''
    });
  };

  return (
    <form onSubmit={handleSubmit} className="add-hog-form">
      <h3>Add a New Hog</h3>
      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
        placeholder="Specialty"
        required
      />
      <input
        name="weight"
        type="number"
        value={formData.weight}
        onChange={handleChange}
        placeholder="Weight"
        required
      />
      <label>
        Greased
        <input
          name="greased"
          type="checkbox"
          checked={formData.greased}
          onChange={handleChange}
        />
      </label>
      <input
        name="image"
        value={formData.image}
        onChange={handleChange}
        placeholder="Image URL"
        required
      />
      <input
        name="highest medal achieved"
        value={formData['highest medal achieved']}
        onChange={handleChange}
        placeholder="Highest Medal"
        required
      />
      <button type="submit">Add Hog</button>
    </form>
  );
}

export default AddHogForm;
