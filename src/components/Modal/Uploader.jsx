import axios from "axios";
import React, { useState } from "react";
import useFetchAllIncompleteTask from "../../useQueries/useFetchAllIncompleteTask";

const Uploader = ({ id, taskType }) => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const [, refetchAllIncompleteTask, isFetchAllIncompleteTask] =
    useFetchAllIncompleteTask();

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  console.log("taskType = ", taskType);

  const uploadFiles = async () => {
    // const formData = new FormData();

    // selectedFiles.forEach((file) => {
    //   formData.append("files", file);
    // });

    // console.log(formData);

    if (selectedFiles.length === 0) {
      alert("Please choose at least one file before uploading.");
      return;
    }

    console.log(selectedFiles);

    const fileNames = selectedFiles.map((file, index) => {
      return file.name;
    });

    let uploaderUrl = "";

    if (taskType === "incomplete") {
      uploaderUrl = "http://localhost:5000/uploadFileToIncomplete";
    }

    if (taskType === "todo") {
      uploaderUrl = "http://localhost:5000/uploadFileToTodo";
    }

    if (taskType === "doing") {
      uploaderUrl = "http://localhost:5000/uploadFileDoing";
    }

    if (taskType === "underreview") {
      uploaderUrl = "http://localhost:5000/uploadFileUnderReview";
    }

    if (taskType === "completed") {
      uploaderUrl = "http://localhost:5000/uploadFileCompleted";
    }

    if (taskType === "overdo") {
      uploaderUrl = "http://localhost:5000/uploadFileOverdo";
    }

    try {
      await axios.post(uploaderUrl, {
        fileNames,
        id,
      });
      refetchAllIncompleteTask();
      setSelectedFiles([]);
      alert("Files uploaded successfully!");
    } catch (error) {
      console.error("Error uploading files:", error);
    }
  };

  return (
    <div>
      <div className=" text-center ml-7 mb-6">
        <input
          type="file"
          multiple
          className="hidden"
          onChange={handleFileChange}
          id="fileInput"
        />
        <label
          htmlFor="fileInput"
          className="block bg-blue-500 text-white py-2 px-4 rounded cursor-pointer hover:bg-blue-600 transition w-56"
        >
          Choose multiple Files
        </label>
      </div>
      <div className="flex flex-col">
        <div className="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-2">Selected Files:</h2>
            <div className="overflow-hidden">
              <table className="min-w-full">
                <thead className="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      File
                    </th>
                    <th
                      scope="col"
                      className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      File Extension
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {selectedFiles.length === 0 ? (
                    <p className=" text-lg font-semibold text-red-500">
                      No File has been uploaded
                    </p>
                  ) : (
                    ""
                  )}
                  {selectedFiles.map((file, index) => {
                    const parts = file.name.split(".");
                    const extension = file.name.split(".")[parts.length - 1];

                    return (
                      <tr className="bg-gray-100 border-b" key={index}>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {<p className=" font-semibold">{file.name}</p>}
                        </td>
                        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {extension.toUpperCase()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button
                onClick={uploadFiles}
                className=" mt-7 p-2 bg-blue-600 text-white"
              >
                Upload to server
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Uploader;
