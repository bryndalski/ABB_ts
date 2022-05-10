import { useDropzone } from "react-dropzone";
import React, { useRef, useState } from "react";
import "./FileInputStyles.css"; //css
import { RiFileExcel2Fill } from "react-icons/ri";
import axios from "axios";

export default function FileInput() {
  const containerRef = useRef<HTMLDivElement>(null); // container reference
  const [buttonDisable, setButtonDisable] = useState<boolean>(true);
  const [file, setFile] = useState<Blob | string>("");
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    multiple: false,
    accept: {
      "application/vnd.ms-excel": [".xls"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xslx",
      ],
    },
    onDropRejected: () => {
      // reject drop
      console.log("PANIE UŻYTKOWNIKU NIEEE");
      containerRef.current?.classList.add("border-red-500");
      setButtonDisable(true); // block button
    },
    onDropAccepted: () => {
      containerRef.current?.classList.add("border-green-300");
      setButtonDisable(false); //enables button
    }, // accet drop

    onDragLeave: (e) => {
      containerRef.current?.classList.remove(
        "border-red-500",
        "border-green-300"
      );
    },
  });

  const files = acceptedFiles.map((file) => {
    setFile(file);
    return (
      <li>
        <RiFileExcel2Fill className="inline m-2 text-green-600" />
        {file.name}
      </li>
    );
  });

  const handleSubmit = (e: any) => {
    e.preventDefault();
    let data = new FormData();
    data.append("file", file);
    axios({
      method: "POST",
      url: "https://abbdb.herokuapp.com/fileImport",
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "multipart/form-data",
      },
      data: data,
    }).catch((err) => {});
    return;
  };

  return (
    <form onSubmit={handleSubmit} className="p-2">
      <div
        ref={containerRef}
        className="container p-2 m-2  border-dashed border-2 border-blue-700">
        <div {...getRootProps({ className: "dropzone" })}>
          <input {...getInputProps()} />
          <p className="text-center select-none">
            Przeciągij i upuść pliki <b>.XLSX</b>
          </p>
        </div>
        <aside>
          <ul>{files}</ul>
        </aside>
      </div>
      <button
        type="submit"
        disabled={buttonDisable}
        className="submitButton block  border-blue-500 p-2  border-solid  mt-2 border-2 self-center">
        WYŚLIJ
      </button>
    </form>
  );
}
