import * as React from "react";
import PropTypes from "prop-types";
import { NFT } from "../../types";
import { useEditor } from "../../hooks/useEditor";

type NFTInfoProps = {
  nft: NFT;
};

const NFTInfo: React.FC<NFTInfoProps> = ({ nft }) => {

  const { backgroundColor, primaryColor, secondaryColor } = useEditor()

  return (
    <div className="rounded" style={{ backgroundColor: backgroundColor }}>
      <div className="flex flex-start md:flex-row flex-col h-full p-2 items-center">
        <div className="col-span-12 md:col-span-6 flex items-center mr-10 ml-10">
          <img className="rounded md:max-h-96" src={nft.url}></img>
        </div>
        <div className="flex flex-col h-full  w-4/5 ">
            <input placeholder="Voster" className="text-center block font-bold text-5xl w-full mb-5" style={{ color: primaryColor }}></input>
          <textarea className="block font-bold text-2xl w-full h-80 text-left"  style={{ color: secondaryColor }}></textarea>
        </div>
      </div>
    </div>
  );
};

NFTInfo.propTypes = {
  //
};

export default NFTInfo;
