import Image from 'next/image';
import * as React from 'react';
import {useEditor} from '../../hooks/useEditor';
import {NFT} from '../../types';
import {useState} from 'react';

type NFTInfoProps = {
    nft: NFT;
    background: String;
};

const NFTInfo: React.FC<NFTInfoProps> = ({nft, background}) => {
    const [nftName, setNftName] = useState('');

    const {backgroundColor, primaryColor, secondaryColor} = useEditor();
    const myLoader = () => {
        return `${nft.url}`;
    };

    function checkAnswer(event: React.KeyboardEvent<HTMLInputElement>) {
        // console.log(value)
        console.log(event.target)
        if (event.key === "Enter") {
            console.log("Enter key was pressed");
        }
    }

    return (
        <div className="rounded overflow-hidden	relative bg-gradient-to-r from-primary-700 to-primary-800">
            {background === 'Blood' && (
                <img
                    alt="background bloody"
                    src="/assets/img/pattern-blood.png"
                    width="100%"
                    height="100%"
                    className="absolute z-10 img-bloody"
                />
            )}
            {background === 'Smoke' && (
                <img
                    alt="background smoke"
                    src="/assets/img/pattern-smoke.png"
                    width="100%"
                    height="100%"
                    className="absolute bottom-0 z-10 opacity-40 h-full rotate-180 lg:translate-x-36	"
                />
            )}
            {background === 'Abstract' && (
                <img
                    alt="background smoke"
                    src="/assets/img/abstract.webp"
                    width="100%"
                    height="100%"
                    className="absolute bottom-0 z-10 opacity-40 h-full"
                />
            )}
            <div
                className="pt-5 text-center lg:ml-10 lg:text-left"
                style={{color: secondaryColor}}
            >
                <span className="">{nft.name}</span>
                <span className="ml-5">Rank : {nft.rank}</span>
            </div>
            <div className="flex z-10 flex-start lg:flex-row flex-col h-full p-10 pt-5 items-center">
                <div className="col-span-12 flex-col lg:col-span-6 flex items-center min-w-fit">
                    <div className="heading-frame"
                         style={{
                             background: `url(${nft.media[0].originalUrl}) center`,
                         }}>
                        <h2>{nftName}</h2>
                    </div>
                </div>
                <div className="flex flex-col h-full lg:pl-10 lg:pr-10 pt-5 w-full lg:pt-0">
                    <input
                        placeholder="Enter his name"
                        className="z-20 text-center block font-bold text-5xl border border-transparent hover:border-white w-full ease-in duration-300 mb-5 rounded-md hover:border-1 hover:border-gray-50"
                        style={{color: primaryColor}}
                        value={nftName}
                        onChange={e => { setNftName(e.currentTarget.value); }}
                        onKeyUp={(event) => {checkAnswer(event)}}
                    ></input>
                    <textarea
                        placeholder="Enter his story"
                        className="z-20 block tracking-wide border-2 border-transparent font-bold text-2xl w-full ease-in duration-300 h-80 text-left rounded-md hover:border-1 hover:border-gray-50"
                        style={{color: secondaryColor}}
                    ></textarea>
                </div>
            </div>
            <p className='text-white text-right mb-5 mr-5'>https://mafia-story-generator.vercel.app/</p>
        </div>
    );
};
export default NFTInfo;
