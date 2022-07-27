import React, { createRef } from "react";
import PropTypes from "prop-types";
import { useScreenshot, createFileName } from "use-react-screenshot";
import * as htmlToImage from "html-to-image";

const Screenshot = ({ children }) => {
  const [image] = useScreenshot({
    type: "image/png",
    quality: 1.0,
  });
  const ref = createRef(null);

  const download = (image, { name = "mobsters", extension = "png" } = {}) => {
    const a = document.createElement("a");
    a.href = image;
    a.download = createFileName(extension, name);
    a.click();
  };

  const downloadScreenshot = () => takeScreenShot(ref.current).then(download);

  const takeScreenShot = async (node) => {
    const dataURI = await htmlToImage.toJpeg(node);
    return dataURI;
  };

  return (
    <div>
      <div ref={ref}>{children}</div>
      <div className="text-center mb-4 mt-5">
        {/* <button
          onClick={downloadScreenshot}
          className="px-2 py-1 rounded bg-red-500 text-white"
        >
          Download as .png
        </button> */}
      </div>
    </div>
  );
};

Screenshot.propTypes = {
  //
};

export default Screenshot;
