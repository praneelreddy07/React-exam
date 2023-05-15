
import React, { useState } from 'react';
import { RegionDropdown } from 'react-country-region-selector';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    emailAddress: '',
    organisation: '',
    organisationalUnit: '',
    city: '',
    telephone: '',
  });

  const handleInputChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <form>
      <label>
        Full Name:
        <input type="text" name="fullName" value={formData.fullName} onChange={handleInputChange} />
        <button type="button">help</button>
      </label>
      <label>
        Email Address:
        <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleInputChange} />
        <button type="button">help</button>
      </label>
      <label>
        Organisation:
        <input type="text" name="organisation" value={formData.organisation} onChange={handleInputChange} />
        <button type="button">help</button>
      </label>
      <label>
        Organisational Unit:
        <input type="text" name="organisationalUnit" value={formData.organisationalUnit} onChange={handleInputChange} />
        <button type="button">help</button>
      </label>
      <label>
        City:
        {/* <RegionDropdown
          name="city"
          value={formData.city}
          onChange={(val) => setFormData((prevState) => ({ ...prevState, city: val }))}
        /> */}
        <button type="button">help</button>
      </label>
      <label>
        Telephone:
        <input type="number" name="telephone" value={formData.telephone} onChange={handleInputChange} />
        <button type="button">help</button>
      </label>
    </form>
  );
};

export default ContactForm;