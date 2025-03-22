import React, { useState, useCallback } from "react";
import MyEditor from "./components/MyEditor";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

export default function App() {
  const [content, setContent] = useState("");
  const [thumbnail, setThumbnail] = useState(null); // Store uploaded thumbnail
  const { register, handleSubmit, formState: { errors } } = useForm();

  const BASE_URL = process.env.REACT_APP_BASE_URL

  // Handle file upload
  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0]; // Get the first uploaded file
    setThumbnail(Object.assign(file, { preview: URL.createObjectURL(file) })); // Generate preview
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop, accept: "image/*" });

  // Handle form submission
  const submitForm = async (data) => {
    const loadingToast = toast.loading("Uploading...");

    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("description", data.description);
    formData.append("timeToRead", data.timeToRead);
    formData.append("series", data.series);
    formData.append("tags", data.tags);
    formData.append("content", content);
    if (thumbnail) formData.append("thumbnail", thumbnail); // Include thumbnail

    console.log("Submitted Data:", formData);

    try{
      fetch(`${BASE_URL}/createCard`, {
            method: 'POST',
            body: formData,
          })
          .then(response => response.json())
          .then(data => {
            if (data && data.success) {
              console.log("data stored successfully -> ",data);
              toast.success("Upload successful",{id:loadingToast});
            } else {
              throw new Error('Invalid response from server.');
            }
          })
          .catch(error => {
            console.log(error);
            alert("someting went wrong");
            toast.error("something went wrong",{id:loadingToast});
          });
    } catch(err){
      console.log("failed to fetch API",err);
      toast.error("something went wrong",{id:loadingToast})
    }

  };

  return (
    <>
      <Toaster position="top-right" />
    <div className="w-screen min-h-screen p-2 bg-orange-100 flex flex-col lg:flex-row text-center justify-between">
      <MyEditor setContent={setContent} />

      <div className="mx-auto mt-10 border border-red-500 w-[30%] rounded-lg bg-orange-200 p-4 text-lg h-fit">
        <h1 className="text-orange-500 text-[25px] underline font-semibold p-3">Admin Panel</h1>

        <form onSubmit={handleSubmit(submitForm)} className="flex flex-col p-2 text-left">
          <label className="text-orange-600">Title*</label>
          <input {...register("title", { required: true })} className="bg-orange-100 text-orange-800 p-2 focus:outline-orange-300 rounded-md" />
          {errors.title && <span className="text-orange-600">This field is required</span>}

          <label className="text-orange-600">Description*</label>
          <textarea {...register("description", { required: true })} className="bg-orange-100 text-orange-800 p-2 focus:outline-orange-300 rounded-md"></textarea>
          {errors.description && <span className="text-orange-600">This field is required</span>}

          <label className="text-orange-600">Time to Read*</label>
          <input {...register("timeToRead")} className="bg-orange-100 text-orange-800 p-2 focus:outline-orange-300 rounded-md" />

          <label className="text-orange-600">Series*</label>
          <input {...register("series", { required: true })} className="bg-orange-100 text-orange-800 p-2 focus:outline-orange-300 rounded-md" />
          {errors.series && <span className="text-orange-600">This field is required</span>}

          <label className="text-orange-600">Tags*</label>
          <input {...register("tags")} className="bg-orange-100 text-orange-800 p-2 focus:outline-orange-300 rounded-md" />

          {/* 🔹 Dropzone for Thumbnail */}
          <label className="text-orange-600 mt-4">Thumbnail*</label>
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-orange-300 p-6 rounded-lg text-center cursor-pointer bg-orange-100 text-orange-800"
            style={{
              borderColor: isDragActive ? "blue" : "gray",
              backgroundColor: isDragActive ? "#f0f8ff" : "white",
            }}
          >
            <input {...getInputProps()} />
            {isDragActive ? <p>Drop the file here...</p> : <p>Drag & drop an image here, or click to select one</p>}
          </div>

          {/* 🔹 Thumbnail Preview */}
          {thumbnail && (
            <div className="mt-4">
              <h3 className="text-orange-600">Uploaded Thumbnail:</h3>
              <img src={thumbnail.preview} alt="Thumbnail" className="w-fit h-32 object-cover rounded-md mt-2" />
            </div>
          )}

          <button type="submit" className="mt-4 bg-orange-400 p-1 text-white font-bold">Submit</button>
        </form>
      </div>
    </div>
    </>
  );
}
