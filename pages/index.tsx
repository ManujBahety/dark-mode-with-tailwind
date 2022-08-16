import type { NextPage } from "next";
import Head from "next/head";
import { FaSearch, FaTwitter } from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { ImLink } from "react-icons/im";
import { TbBuilding } from "react-icons/tb";
import Image from "next/image";
import { useState } from "react";

const Home: NextPage = () => {
  const [isDark, setDark] = useState(false);

  function handleClick() {
    setDark(!isDark);
    console.log(isDark);
  }

  return (
    <div
      className={`flex flex-col   ${
        isDark ? "dark" : ""
      } dark:bg-ebony-clay-500  `}
    >
      <div className=" py-24 min-h-screen dark:bg-ebony-clay-500 bg-gray-300">
        <Head>
          <title>DevFinder</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        {/* Header */}
        <header className="font-bold text-xl mx-auto max-w-full md:max-w-2xl mt-4">
          <h1 className="dark:text-white p-3 font-bold text-2xl">devfinder</h1>
        </header>

        <div className=" dark:bg-cloud-burst-500 bg-cloud-burst-100 dark:duration-300 rounded-lg space-x-2 flex items-center justify-between max-w-full md:max-w-2xl mx-3 md:mx-auto mt-4 shadow-2xl mb-6 dark:transition p-2 dark:ease-in">
          <div className="">
            <FaSearch className="h-6 w-6 ml-2" />
          </div>
          <input
            name="username"
            type="text"
            placeholder="Search Github username. . . "
            className="dark:text-slate-400 text-black w-[250px] font-medium p-2 bg-transparent text-base rounded-md"
          />

          <div className="mr-3">
            <button
              className="btn inline-block px-6 py-2 border-2 dark:bg-blue-500 bg-gray-300 dark:text-white dark:border-blue-600 border-gray-400 text-whited text-xs leading-tight font-extrabold rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
              type="button"
              id="button-addon3"
            >
              Search
            </button>
          </div>
        </div>

        <main className="mx-3 md:mx-auto max-w-full md:max-w-2xl py-6 min-h-[470px] md:max-h-fit rounded-lg flex flex-col items-end justify-between dark:bg-cloud-burst-500 bg-cloud-burst-100 mt-6">
          <section className="flex flex-col md:flex-row mt-5  md:justify-evenly w-full space-y-6 space-x-4 md:space-x-6 items-center">
            <div className="w-[120px] h-[120px] flex ring-[5px] rounded-full md:ml-8">
              <Image
                className="rounded-full ring-[5px] "
                src="/images/cat.jpeg"
                alt="cat"
                width={500}
                height={500}
              />
            </div>
            <div className="flex md:flex-1 items-center md:items-start w-full px-2 space-x-6 justify-around md:justify-between ">
              <div className="w-32 md:w-44 font-bold">
                <h2 className="text-lg md:text-2xl dark:text-gray-50">
                  The Octocat
                </h2>
                <p className="inline-block text-sm dark:text-blue-400 text-gray-400">
                  @Octocat
                </p>
              </div>

              <div className="text-xs md:text-sm dark:text-gray-300 font-normal -mt-2 md:mt-0 md:pt-2 md:p-6">
                Joined{" "}
                <span className="font-semibold flex md:inline-block text-xs md:text-sm">
                  26 June 2011
                </span>
              </div>
            </div>
          </section>

          <article className="flex w-full flex-col md:max-w-lg space-y-5 px-6 py-5">
            <div className="text-center text-sm dark:text-gray-300 font-medium">
              {" "}
              Bio-Not Available
            </div>

            <div className=" dark:bg-ebony-clay-500 bg-gray-300 rounded-xl shadow-2xl pb-4 mr-6 text-center">
              <div className="rounded-lg bg-primary-dark grid grid-cols-3 divide-x divide-gray-50 py-4">
                <div className="mt-2 text-xs font-semibold dark:text-gray-400">
                  Repos
                  <div className="text-lg font-extrabold dark:text-gray-50">
                    8
                  </div>
                </div>
                <div className="mt-2 text-xs font-semibold dark:text-gray-400">
                  Followers
                  <div className="text-lg font-extrabold dark:text-gray-50">
                    2423
                  </div>
                </div>
                <div className="mt-2 text-xs font-semibold dark:text-gray-400">
                  Following
                  <div className="text-lg font-extrabold dark:text-gray-50">
                    8
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 px-2 py-4 gap-6 md:gap-x-10">
              <div className="flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400">
                <GoLocation className="w-5 h-5 dark:text-gray-100 text-black" />
                <div className="text-sm font-medium dark:text-gray-300 text-black">
                  San Francisco
                </div>
              </div>

              <div className="flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400">
                <FaTwitter className="w-5 h-5 dark:text-gray-100 text-black"></FaTwitter>
                <div className="text-sm font-medium dark:text-gray-300 text-black hover:cursor-pointer">
                  TheOctocat
                </div>
              </div>
              <div className="flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400">
                <ImLink className="w-5 h-5 dark:text-gray-100 text-black" />
                <div className="text-sm font-medium dark:text-gray-300 text-black">
                  https://github.blog
                </div>
              </div>

              <div className="flex gap-1 items-center font-semibold text-white transition-colors duration-150 hover:text-blue-400">
                <TbBuilding className="w-5 h-5 dark:text-gray-100 text-black" />
                <div className="text-sm font-medium dark:text-gray-300 text-black">
                  @github
                </div>
              </div>
            </div>
          </article>
        </main>
        <div className="grid p-4 place-items-center">
          <button
            onClick={handleClick}
            className=" max-w-lg dark:bg-ebony-clay-500 bg-cloud-burst-100 dark:text-white text-black border-2 dark:border-black border-gray-400 rounded-md p-2"
          >
            Toggle Dark Mode
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
