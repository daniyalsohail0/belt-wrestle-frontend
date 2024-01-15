import React, { ChangeEvent, FormEvent, useState } from "react";

const ReviewForm = () => {
  const [title, setTitle] = useState<string>("");
  const [review, setReview] = useState<string>("");
  const [youtubeUrl, setYoutubeUrl] = useState<string>("");
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const file = fileInput.files && fileInput.files[0];

    if (file) {
      const allowedTypes = ["image/jpeg", "image/png", "application/pdf"];
      if (allowedTypes.includes(file.type)) {
        setFile(file);
      } else {
        alert("Invalid file type. Please select a valid file.");

        if (fileInput) {
          fileInput.value = "";
        }
      }
    }
  };

  const handleReviewSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log({ title, review, youtubeUrl, name, email, file });
  };
  return (
    <div>
      <form className="flex flex-col gap-3" onSubmit={handleReviewSubmit}>
        <label>Review Title</label>
        <input
          type="text"
          placeholder="Give your review a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="px-3 py-4 border-2 border-solid border-gray-100 focus:outline-none focus:border-gray-400"
        />
        <label>Review</label>
        <textarea
          placeholder="Give your review a title"
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="px-3 py-4 border-2 border-solid border-gray-100 focus:outline-none focus:border-gray-400"
        />
        <label>Upload File</label>
        <input
          type="file"
          accept=".jpg, .jpeg, .png, .pdf"
          onChange={handleFileChange}
          className=""
        />
        {file && (
          <p>
            Selected File: {file.name} (Type: {file.type})
          </p>
        )}
        <label>Youtube Link</label>
        <input
          type="text"
          placeholder="Give your review a title"
          value={youtubeUrl}
          onChange={(e) => setYoutubeUrl(e.target.value)}
          className="px-3 py-4 border-2 border-solid border-gray-100 focus:outline-none focus:border-gray-400"
        />
        <label>Name</label>
        <input
          type="text"
          placeholder="Give your review a title"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="px-3 py-4 border-2 border-solid border-gray-100 focus:outline-none focus:border-gray-400"
        />
        <label>Email</label>
        <input
          type="email"
          placeholder="Give your review a title"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-3 py-4 border-2 border-solid border-gray-100 focus:outline-none focus:border-gray-400"
        />
        <button
          type="submit"
          className="bg-black text-white py-3 px-4 transform transition-transform hover:scale-105 duration-200 ease-in-out"
        >
          Submit review
        </button>
      </form>
    </div>
  );
};

export default ReviewForm;
