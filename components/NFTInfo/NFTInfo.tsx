import Image from 'next/image';
import * as React from 'react';
import { useEditor } from '../../hooks/useEditor';
import { NFT } from '../../types';
import { useState } from 'react';

type NFTInfoProps = {
  nft: NFT;
};

const NFTInfo: React.FC<NFTInfoProps> = ({ nft }) => {
  const { backgroundColor, primaryColor, secondaryColor } = useEditor();
  const myLoader = () => {
    return `${nft.url}`;
  };
  console.log(nft);

  const nftOwner = nft.owner.split('');
  const nftOwnerReduced =
    nftOwner[0] +
    nftOwner[1] +
    nftOwner[2] +
    nftOwner[3] +
    '...' +
    nftOwner[57] +
    nftOwner[58] +
    nftOwner[59] +
    nftOwner[60] +
    nftOwner[61];

  return (
    <div className="rounded overflow-hidden	relative bg-gradient-to-r from-primary-700 to-primary-800">
      {background === 'blood' && (
        <img
          alt="background bloody"
          src="/assets/img/pattern-blood.png"
          width="100%"
          height="100%"
          className="absolute z-10 img-bloody"
        />
      )}
      <div
        className="pt-5 z-10 flex justify-evenly"
        style={{ color: secondaryColor }}
      >
        <span className="">{nft.name}</span>
        <span>Owner : {nftOwnerReduced}</span>
      </div>
      <div className="flex z-10 flex-start lg:flex-row flex-col h-full p-10 pt-5 items-center">
        <div className="col-span-12 flex-col lg:col-span-6 flex items-center min-w-fit">
          <Image
            loader={myLoader}
            alt="Mobsters Image"
            width={400}
            height={400}
            src={nft.url}
            className="rounded-md z-20"
            priority
            unoptimized
          />
        </div>
        <div className="flex flex-col h-full lg:pl-10 lg:pr-10 pt-5 w-full lg:pt-0">
          <input
            placeholder="Enter his name"
            className="z-20 text-center block font-bold text-5xl border border-transparent hover:border-white w-full ease-in duration-300 mb-5 rounded-md hover:border-1 hover:border-gray-50"
            style={{ color: primaryColor }}
          ></input>
          <textarea
            placeholder="Enter his story"
            className="z-20 block tracking-wide border-2 border-transparent font-bold text-2xl w-full ease-in duration-300 h-80 text-left rounded-md hover:border-1 hover:border-gray-50"
            style={{ color: secondaryColor }}
          ></textarea>
        </div>
      </div>
    </div>
  );
};
export default NFTInfo;

export const Background = () => {
  const [background, setBackground] = useState('none');

  const setBg = (event) => {
    setBackground(event?.target?.value);
  };

  return (
    <div onChange={(event) => setBg(event)}>
      <input
        className="text-white"
        type="radio"
        value="none"
        defaultChecked
        name="background"
      />{' '}
      None
      <input type="radio" value="blood" name="background" /> Bloody
    </div>
  );
};
