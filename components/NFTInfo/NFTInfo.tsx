import * as React from 'react';
import PropTypes from 'prop-types';
import { NFT } from '../../types';
import { useEditor } from '../../hooks/useEditor';
import Image from 'next/image';

type NFTInfoProps = {
  nft: NFT;
};

const NFTInfo: React.FC<NFTInfoProps> = ({ nft }) => {
  const { backgroundColor, primaryColor, secondaryColor } = useEditor();
  const myLoader = () => {
    return `${nft.media[0]?.originalUrl}`;
  };
  console.log(nft);

  return (
    <div className="rounded" style={{ backgroundColor: backgroundColor }}>
      <div className="flex flex-start lg:flex-row flex-col h-full p-10 items-center">
        <div className="col-span-12 lg:col-span-6 flex items-center min-w-fit">
          <Image
            loader={myLoader}
            alt="Mobsters Image"
            width={400}
            height={400}
            src={nft.media[0].originalUrl}
            priority
            unoptimized
          />
        </div>
        <div className="flex flex-col h-full pl-10 pr-10 pt-10 w-full lg:pt-0">
          <input
            placeholder="Enter his name"
            className="text-center block font-bold text-5xl border border-gray-900 hover:border-white w-full ease-in duration-300 mb-5 rounded-md hover:border-1 hover:border-gray-50"
            style={{ color: primaryColor }}
          ></input>
          <textarea
            placeholder="Enter his story"
            className="block tracking-wide border-2 border-gray-900 font-bold text-2xl w-full ease-in duration-300 h-80 text-left rounded-md hover:border-1 hover:border-gray-50"
            style={{ color: secondaryColor }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};

NFTInfo.propTypes = {
  //
};

export default NFTInfo;
