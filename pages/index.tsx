import Container from '../components/_Layout/Container';
import Head from 'next/head';
import NFTInfo from '../components/NFTInfo';
import React, { createRef, useEffect, useState } from 'react';
import Screenshotable from '../components/Screenshotable';
import { NFT } from '../types';
import { useEditor } from '../hooks/useEditor';
import type { NextPage } from "next";
import Select from 'react-select';
import Hat from '../public/assets/img/hat_fp.png';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



const Home: NextPage = () => {
  const { backgroundColor, setBackgroundColor, primaryColor, setPrimaryColor, secondaryColor, setSecondaryColor } = useEditor()

  const [selectedMafiaId, setselectedMafiaId] = useState<string>("999");
  const [selectedMafia, setselectedMafia] = useState<NFT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const ref = createRef();

  const fetchDaApez = () => {
    fetch(
      `https://api.elrond.com/collections/MAFIA-bd0abc/nfts?name=${selectedMafiaId}&withOwner=true`,
      {
        method: "GET",
      }
    )
      .then((response) => {
        response.json().then((json) => {
          if (json && Array.isArray(json) && Array.from(json).length > 0) {
            setselectedMafia(json[0]);
          } else {
            setselectedMafia(null);
          }
        });
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchDaApez();
  }, []);

  const handleSubmitApez = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchDaApez();
  };

 
  return (
    <>
      <Head>
        <title>Mafia - Mobster's Talk</title>
        <meta name="description" content="Mobster Story Generator" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>
        {selectedMafia ? (
          <div className='my-8'>
            <p className='block text-3xl sm:text-4xl tracking-wide	 leading-none font-extrabold tracking-tight text-center mb-10 text-white'>Generate your <span className='text-red-500'>Mobster</span> story</p>
            <p className='block text-3xl sm:text-2xl tracking-normal leading-none font-extrabold tracking-tight text-center mb-10 text-white'>Edit him name. Edit his story. Share with the community.</p>
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <div className="flex justify-center mb-5">
                  <div className="flex flex-col items-start gap-4">
                    <form onSubmit={handleSubmitApez}>
                      <label className="block text-white text-center ">Search by Id</label>
                      <input
                        className="px-2 py-1 rounded-l outline-none bg-white"
                        type={"text"}
                        value={selectedMafiaId}
                        onChange={(e) => setselectedMafiaId(e.target.value)}
                      ></input>
                      <button
                        className="px-2 py-1 rounded-r bg-red-500 text-white"
                        type="submit"
                      >
                        {loading ? "Loading..." : "OK"}
                      </button>
                    </form>
                  </div>
                </div>
                <div>
                  <Screenshotable>
                    <NFTInfo nft={selectedMafia} />
                  </Screenshotable>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white py-4">Loading...</p>
        )}
      </Container>
    </>
  );
};

export default Home;
