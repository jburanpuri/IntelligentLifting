import React, { useState } from 'react';

const FormComponent = () => {
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [trainingExperience, setTrainingExperience] = useState('');
  const [trainingType, setTrainingType] = useState('');


  const handleTrainingTypeChange = (event) => {
    setTrainingType(event.target.value);
  };

  const handleOptionChange = (e) => {
    const { value } = e.target;
    if (selectedOptions.includes(value)) {
      setSelectedOptions(selectedOptions.filter((option) => option !== value));
    } else if (selectedOptions.length < 2) {
      setSelectedOptions([...selectedOptions, value]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      name,
      age,
      gender,
      trainingExperience,
      trainingType,
      selectedOptions,
    });
  };

  return (
    <div>
    <div className="bg-gradient-to-t from-gray-900 to-black text-center py-52">
    <h1 className="text-4xl font-bold text-primary">Custom Made Workout Plans</h1>
    <h1 className="text-3xl font-semibold py-5 text-white">Coming Soon</h1>
</div>
    <form
      className="py-20 px-10 bg-white rounded-lg shadow-lg"
      onSubmit={handleSubmit}
    >
      <h2 className="text-lg font-normal mb-4">Training Information</h2>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="name"
        >
          Name
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="age"
        >
          Age
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="number"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="mb-4">
        <label
          className="block text-gray-700 font-medium mb-2"
          htmlFor="gender"
        >
          Gender
        </label>
        <input
          className="border border-gray-400 p-2 rounded-lg w-full"
          type="text"
          id="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        />
      </div>
        <div className="mb-4">
        <label
            className="block text-gray-700 font-medium mb-2"
            htmlFor="trainingExperience"
        >
            Training Experience
        </label>
        <input
            className="border border-gray-400 p-2 rounded-lg w-full"
            type="text"
            id="trainingExperience"
            value={trainingExperience}
            onChange={(e) => setTrainingExperience(e.target.value)}
        />
        </div>
        <div className="mb-4">
  <label
    className="block text-gray-700 font-medium mb-2"
    htmlFor="trainingType"
  >
    Training Type
  </label>
  <div>
    <input
      type="radio"
      id="powerlifting"
      name="trainingType"
      value="powerlifting"
      onChange={handleTrainingTypeChange}
      checked={trainingType === 'powerlifting'}
    />
    <label
      className="inline-block mr-4 text-gray-700 font-normal px-1"
      htmlFor="powerlifting"
    >
      Powerlifting
    </label>
    <input
      type="radio"
      id="bodybuilding"
      name="trainingType"
      value="bodybuilding"
      onChange={handleTrainingTypeChange}
      checked={trainingType === 'bodybuilding'}
    />
    <label
      className="inline-block mr-4 text-gray-700 font-normal px-1"
      htmlFor="bodybuilding"
    >
      Bodybuilding
    </label>
    <input
      type="radio"
      id="powerbuilding"
      name="trainingType"
      value="powerbuilding"
      onChange={handleTrainingTypeChange}
      checked={trainingType === 'powerbuilding'}
    />
    <label
      className="inline-block mr-4 text-gray-700 font-normal px-1"
      htmlFor="powerbuilding"
    >
      Powerbuilding
    </label>
  </div>
</div>
</form>
</div>
    );
};

export default FormComponent;

