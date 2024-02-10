import React, { useState } from "react";
import Layout from "../../layout";
import metalImage from "../../images/metalcase.jpeg";
import acrylicImage from "../../images/acryliccase.jpeg";
import pvcImage from "../../images/pvccase.jpeg";
import embroideryImage from "../../images/embriodarycase.jpeg";
import ringStyle1 from "../../images/ringstyle1.jpeg";
import ringStyle2 from "../../images/ringstyle2.jpeg";
import ringStyle3 from "../../images/ringstyle3.jpeg";
import ringStyle4 from "../../images/ringstyle4.jpeg";
import package1 from "../../images/package1.jpeg";
import package2 from "../../images/package2.png";
import package3 from "../../images/package3.jpeg";
import package4 from "../../images/package4.jpeg";

interface CustomKeychainData {
  name: string;
  email: string;
  phoneNumber: string;
  address: string;
  streetAddress: string;
  city: string;
  state: string;
  postCode: string;
  country: string;
  referral: string;
  keychainStyle: string;
  keychainSize: string;
  keychainQuantity: number;
  ringStyle: string;
  packing: string;
  fileName: string;
  notes: string;
  purpose: string;
}

const CustomKeychains: React.FC = () => {
  const initialFormData: CustomKeychainData = {
    name: "",
    email: "",
    phoneNumber: "",
    address: "",
    streetAddress: "",
    city: "",
    state: "",
    postCode: "",
    country: "",
    referral: "",
    keychainStyle: "",
    keychainSize: "",
    keychainQuantity: 0,
    ringStyle: "",
    packing: "",
    fileName: "",
    notes: "",
    purpose: "",
  };
  const [formData, setFormData] = useState<CustomKeychainData>(initialFormData);

  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [error, setError] = useState<string>("");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files && event.target.files[0];
    const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];

    if (file && allowedTypes.includes(file.type)) {
      setSelectedFile(file);
      setError("");
      setFormData((prev) => ({
        ...prev,
        fileName: file.name, // Add the file name to the formData
      }));
    } else {
      setSelectedFile(null);
      setError("Please select a valid JPEG, JPG, or PNG file.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setFormData((prev) => ({
      ...prev,
      keychainSize: value,
    }));
  };

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const emailAddress = "info@universalmakers.co.uk";
  const sizeOptions = [
    `1.25" = 31.8mm`,
    `1.5" = 38.1mm (popular for metalic)`,
    `1.75" == 44.5mm (popular for acrylic)`,
    `2" == 50.8mm`,
    `2.5" == 63.5mm`,
    `3" == 76.2mm`,
    `4" == 101.6mm`,
    `5" == 127mm (popular for embroidery)`,
    `Decide for me`,
  ];
  return (
    <Layout>
      <div className="flex flex-col items-center">
        <div className="md:w-11/12 w-full flex flex-col justify-center items-center">
          <div className="md:w-1/2 w-full flex flex-col justify-center items-center my-4">
            <h1 className="text-3xl text-center font-semibold uppercase m-1 p-1">
              Customize keychains for your need!
            </h1>
            <p className="text-sm m-1 p-1 text-center">
              Please fill out the form below, and one of our experienced
              representatives will get in touch with you. For further inquiry
              email us at{" "}
              <a href={`mailto:${emailAddress}`}>
                <span className="text-blue-500 hover:underline">
                  {emailAddress}
                </span>
              </a>
            </p>
          </div>
          <form onSubmit={handleSubmit} className="md:w-1/2 w-full m-4 p-4">
            <h1 className="text-lg font-semibold py-2">
              Select Keychain Style
            </h1>
            <div className="flex">
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={metalImage}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="keychainStyle"
                  value={`metal`}
                  checked={formData.keychainStyle === "metal"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Metal</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={acrylicImage}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="keychainStyle"
                  value={`acrylic`}
                  checked={formData.keychainStyle === "acrylic"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Acrylic</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={pvcImage}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="keychainStyle"
                  value={`pvc`}
                  checked={formData.keychainStyle === "pvc"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">PVC</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={embroideryImage}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="keychainStyle"
                  value={`embroidery`}
                  checked={formData.keychainStyle === "embroidery"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Embroidery</p>
              </label>
            </div>
            <br />
            <div className="w-full">
              <h1 className="text-xl font-semibold">Select Keychain Size</h1>
              <select
                className="w-[300px] m-2 p-2 border-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500"
                name="keychainSize"
                value={formData.keychainSize}
                onChange={handleSelectChange}
                required
              >
                {sizeOptions.map((option, index) => (
                  <option key={index} value={option} className="w-[250px] text-xs">
                    {option}
                  </option>
                ))}
              </select>
            </div>
            <br />
            <div className="w-full">
              <h1 className="text-lg font-semibold">Select Quantity</h1>
              <input
                type="number"
                name="keychainQuantity"
                value={formData.keychainQuantity}
                className="w-[300px] m-2 p-2 border-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500"
                onChange={handleChange}
                required
              />
            </div>
            <br />
            <h1 className="text-lg font-semibold py-2">Select Ring Style</h1>
            <div className="flex items-center">
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={ringStyle1}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="ringStyle"
                  value={`4ChainsRing`}
                  checked={formData.ringStyle === "4ChainsRing"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Four Chains</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={ringStyle2}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="ringStyle"
                  value={`splitRing`}
                  checked={formData.ringStyle === "splitRing"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Split Ring</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={ringStyle3}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="ringStyle"
                  value={`lobstersHook`}
                  checked={formData.ringStyle === "lobstersHook"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Lobster</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={ringStyle4}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="ringStyle"
                  value={`swivelClasp`}
                  checked={formData.ringStyle === "swivelClasp"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Swivel Clasp</p>
              </label>
            </div>
            <br />
            <h1 className="text-lg font-semibold py-2">Choose Packaging</h1>
            <div className="flex">
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={package1}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="packing"
                  value={`clearBag`}
                  checked={formData.packing === "clearBag"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Clear Bag</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={package2}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="packing"
                  value={`plasticBox`}
                  checked={formData.packing === "plasticBox"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Plastic Box</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={package3}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="packing"
                  value={`velvetBag`}
                  checked={formData.packing === "velvetBag"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Velvet Bag</p>
              </label>
              <label className="flex flex-col justify-center items-center gap-2">
                <img
                  src={package4}
                  alt="Metal case keychain"
                  className="w-[100px] h-[100px]"
                />
                <input
                  type="radio"
                  name="packing"
                  value={`velvetBox`}
                  checked={formData.packing === "velvetBox"}
                  onChange={handleChange}
                />
                <p className="md:text-md text-xs">Velvet Box</p>
              </label>
            </div>
            <br />
            <div>
              <label>
                <h4 className="text-lg font-semibold py-2">Upload files</h4>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept=".jpg, .jpeg, .png"
                />
                {error && <p style={{ color: "red" }}>{error}</p>}
                {selectedFile && <p>Selected file: {selectedFile.name}</p>}
              </label>
              <label>
                <h4 className="text-lg font-semibold py-2">Notes</h4>
                <textarea
                  value={formData.notes}
                  name="notes"
                  onChange={handleTextChange}
                  className="w-full m-2 p-2 border-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </label>
              <label>
                <h4 className="text-lg font-semibold py-2">
                  What is the purpose of this product?
                </h4>
                <textarea
                  value={formData.purpose}
                  name="purpose"
                  onChange={handleTextChange}
                  className="w-full m-2 p-2 border-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500"
                />
              </label>
            </div>
            <h4 className="text-lg font-semibold py-2">Contact Information</h4>
            <div className="grid grid-cols-2 gap-2 pr-3">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="How did you hear about us?"
                name="referral"
                value={formData.referral}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="Street Address"
                name="streetAddress"
                value={formData.streetAddress}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="City"
                name="city"
                value={formData.city}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="Country"
                name="country"
                value={formData.country}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="Post Code"
                name="postCode"
                value={formData.postCode}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="text"
                placeholder="State"
                name=""
                value={formData.state}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
              <input
                type="number"
                placeholder="Phone Number"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
                className="w-full m-2 p-2 border-b-[1px] border-solid border-gray-300 focus:outline-none focus:border-blue-500 text-sm"
              />
            </div>
            <br />
            <button
              type="submit"
              className="bg-blue-500 text-white rounded py-2 px-3"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default CustomKeychains;
