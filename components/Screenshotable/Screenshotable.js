import React, { createRef } from "react";
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
    // Obtenir l'URL de l'image générée à partir du canvas
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
        {<button
          onClick={downloadScreenshot}
          className="px-2 py-1 rounded bg-red-500 text-white"
        >
          Download image
        </button>}
      </div>
      <div className="text-center mb-4 mt-5">
        {<button className="text-white tweet py1 px-2 rounded"
        >
          <a
            href="https://twitter.com/intent/tweet?text=I have just created my own @Elrond_Mafia Story. Check it out now : https://mafia-story-generator.vercel.app/"
            target='_blank'
            rel="noreferrer"
            data-size="large">
            Share on Tweeter</a>
        </button>}
      </div>
      <div className="">

      </div>

    </div>
  );
};

Screenshot.propTypes = {
  //
};

export default Screenshot;