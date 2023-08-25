import React, { useState } from "react";

const Uploader = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
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
      <div class="flex flex-col">
        <div class="overflow-x-auto sm:mx-0.5 lg:mx-0.5">
          <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <h2 className="text-lg font-semibold mb-2">Selected Files:</h2>
            <div class="overflow-hidden">
              <table class="min-w-full">
                <thead class="bg-white border-b">
                  <tr>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                    >
                      File
                    </th>
                    <th
                      scope="col"
                      class="text-sm font-medium text-gray-900 px-6 py-4 text-left"
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
                      <tr class="bg-gray-100 border-b" key={index}>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {<p className=" font-semibold">{file.name}</p>}
                        </td>
                        <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                          {extension.toUpperCase()}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
              <button className=" mt-7 p-2 bg-blue-600 text-white">
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
