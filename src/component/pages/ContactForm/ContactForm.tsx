import React, { useState, useEffect, ChangeEvent, FormEvent } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

interface Country {
  name: {
    common: string;
  };
}

const ContactForm: React.FC = () => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [fullName, setFullName] = useState<string>("");
  const [organizationName, setOrganizationName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [selectedCountry, setSelectedCountry] = useState<string>("");
  const [contactNumber, setContactNumber] = useState<string>("");
  const [organizationStrength, setOrganizationStrength] = useState<string>("");
  const [source, setSource] = useState<string>("");
  const [message, setMessage] = useState<string>("");

  useEffect(() => {
    axios
      .get<Country[]>("https://restcountries.com/v3.1/all")
      .then((res: AxiosResponse<Country[]>) => setCountries(res.data))
      .catch((err: AxiosError) => console.log(err));
  }, []);

  const handleCountryChange = (event: ChangeEvent<HTMLSelectElement>) => {
    setSelectedCountry(event.target.value);
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Add logic to handle form submission
    console.log("Form submitted:", {
      fullName,
      organizationName,
      email,
      selectedCountry,
      contactNumber,
      organizationStrength,
      source,
      message,
    });
  };

  return (
    <div className="bg-white shadow-2xl rounded">
      <form
        className="flex flex-col bg-white rounded-lg py-8 px-6"
        onSubmit={handleSubmit}
      >
        <label>Full Name</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] rounded my-2"
          type="text"
          placeholder="John Doe"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
        <label>Organization Name</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          type="text"
          placeholder="St. James School"
          value={organizationName}
          onChange={(e) => setOrganizationName(e.target.value)}
        />
        <label>Email</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          type="email"
          placeholder="johndoe@stjameschool.org"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Country</label>
        <select
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          value={selectedCountry}
          onChange={handleCountryChange}
        >
          {countries.map((country, index) => (
            <option key={index} value={country.name.common}>
              {country.name.common}
            </option>
          ))}
        </select>
        <label>Contact Number</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          type="number"
          placeholder="+44 7666 111199"
          value={contactNumber}
          onChange={(e) => setContactNumber(e.target.value)}
        />
        <label>Strength of Organization</label>
        <select
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          value={organizationStrength}
          onChange={(e) => setOrganizationStrength(e.target.value)}
        >
          <option value="<500">100-500</option>
          <option value="<5000">500-5000</option>
          <option value=">5000">5000+</option>
        </select>
        <label>How did you hear about us?</label>
        <input
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          type="text"
          placeholder="E.g. Google, LinkedIn, Facebook"
          value={source}
          onChange={(e) => setSource(e.target.value)}
        />
        <label>Message</label>
        <textarea
          className="p-2 border-[1px] border-solid border-[#EEEDF0] my-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <br />
        <button
          className="bg-black text-white rounded py-3 px-2 ease-in-out duration-200 hover:scale-105"
          type="submit"
        >
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
