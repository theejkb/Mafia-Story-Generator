import type { NextPage } from 'next';
import Head from 'next/head';
import React, { useContext, useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import NFTInfo from '../components/NFTInfo';
import Screenshotable from '../components/Screenshotable';
import Container from '../components/_Layout/Container';
import { NFT } from '../types';

const Home: NextPage = () => {
  const [selectedMafiaId, setselectedMafiaId] = useState<number>(117);
  const [selectedMafia, setselectedMafia] = useState<NFT | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [background, setBackground] = useState('none');

  const base_url = 'https://api.multiversx.com';
  const collection = 'MAFIA-bd0abc'
  const endpoint = `${base_url}/collections/${collection}/nfts?identifiers=&nonceBefore=${selectedMafiaId}&nonceAfter=${selectedMafiaId}`
  const fetchMafia = () => {
    fetch(
      endpoint,
      {
        method: 'GET',
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

  const setBg = (event: React.FormEvent<HTMLDivElement>) => {
    const target = event.target as HTMLTextAreaElement;
    setBackground(target.value);
  };

  const handleSubmitMafia = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    fetchMafia();
  };

  useEffect(() => {
    fetchMafia();
  }, []);


  return (
    <>
      <Head>
        <title>The clan - STORY</title>
        <meta name="description" content="The clan story Generator" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:image" content="/assets/img/Mobsters_Story.png" />
        <meta property="og:title" content="The clan story" />
        <meta
          property="og:description"
          content="THE CLAN STORY - Enter your NFT. Create his story. Share with your friends."
        />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </Head>

      <video
        src="/assets/videos/particles-loop.webm"
        loop
        autoPlay
        playsInline
        muted
        className="homeParticles"
      ></video>

      <Container>
        {selectedMafia ? (
          <div className="my-8 z-10 relative">
            <h1 className="block text-5xl tracking-wide leading-none font-extrabold tracking-tight text-center mb-10 text-white">
              The CLAN <span className="text-red-500">Story</span>
            </h1>
            <p className="block text-xl sm:text-2xl tracking-normal leading-none font-extrabold tracking-tight text-center mb-10 text-white">
              Enter your <span className="text-red-500 mr-2">NFT.</span>{' '} Create his{' '}
              <span className="text-red-500 mr-2">story.</span>Share with the{' '}
              <span className="text-red-500">community.</span>
            </p>
            <div className="grid grid-cols-1">
              <div className="col-span-1">
                <div className="flex justify-center mb-5">
                  <div className="flex flex-row justify-around w-full items-center gap-4 flex-col sm:flex-row	">
                    <form>
                      <label className="block text-white text-center ">
                        Search by Id (example with #117)
                      </label>
                      <input
                        className="px-2 py-1 rounded-l outline-none bg-white"
                        type='number'
                        value={selectedMafiaId}
                        onChange={(e) => setselectedMafiaId(parseInt(e.target.value))}
                      ></input>
                      <button
                        className="px-2 py-1 rounded-r bg-red-500 text-white"
                        type="submit"
                        onClick={handleSubmitMafia}
                      >
                        {loading ? 'Loading...' : 'Search'}
                      </button>
                    </form>
                    <div>
                      <h5 className="text-white text-xl">Background</h5>
                      <div
                        className="text-white"
                        onChange={(event) => setBg(event)}
                      >
                        <input
                          type="radio"
                          value="none"
                          defaultChecked
                          name="background"
                        />{' '}
                        None
                        <input
                          className="ml-5"
                          type="radio"
                          value="Blood"
                          name="background"
                        />{' '}
                        Blood
                        <input
                          className="ml-5"
                          type="radio"
                          value="Smoke"
                          name="background"
                        />{' '}
                        Smoke
                        <input
                          className="ml-5"
                          type="radio"
                          value="Abstract"
                          name="background"
                        />{' '}
                        Abstract
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <Screenshotable>
                    <NFTInfo nft={selectedMafia} background={background} />
                  </Screenshotable>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <p className="text-white text-center py-4">Loading...</p>
        )}
      </Container>
    </>
  );
};

export default Home;
