import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Layout from "../components/layout";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const [isLoaded, setLoaded] = useState(false as boolean)
  const [activeGame, setActiveGame] = useState(0 as number)

  useEffect(() => {
    setLoaded(true)
  }, [])
  if (!isLoaded) return null

  return (
    <Layout>
      <div className="my-10 flex flex-wrap justify-around">


        <div className="mx-10 h-[80vh] p-5 overflow-y-scroll scrollbar-track">
          <div className="my-5 flex items-center justify-between uppercase">
            <span>coinflip list</span>
            <button className="p-3 border-4 border-yellow-500 rounded-md uppercase">Create your own game</button>
          </div>
          <hr className="border-gray-800 mb-5" />

          {Array(10).fill(null).map((_, i) => (
            <button onClick={() => setActiveGame(i)} key={i} className={"hover:bg-gradient-to-r from-yellow-900 flex items-center p-5 gap-5 text-sm text-gray-500 uppercase " + (activeGame == i ? "border-l-4 pl-4 border-yellow-500 bg-gradient-to-r from-yellow-900" : "")}>
              <div className="relative">
                <img className="w-10 h-10 rounded-full" src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg" alt="" />
                <span className="top-3 left-9 absolute rounded-full"><i className="text-gray-500 text-lg fa-solid fa-skull"></i></span>
              </div>
              <span>Professor Flip</span>
              <i className="fa-solid fa-cross bg-gray-400 p-1 rounded-lg text-white"></i>
              <span className="bg-gray-900 p-1 rounded-lg">vs</span>
              <span>waiting for players</span>
              <div className="dots-3"></div>
              <button className="uppercase font-bold px-4 py-2 rounded-sm bg-yellow-500 text-black">
                Join
              </button>
            </button>
          ))}
        </div>

        <div>
          <div className="flex-col flex uppercase items-center text-2xl font-medium shadow-xl shadow-yellow-900 bg-transparent">
            <span>Flipping</span>
            <span className="text-yellow-500">Winner: Thunder</span>
          </div>

          <div className="flex items-center gap-10">
            <img className="" width={100} height={100} src="https://cdn3.iconfinder.com/data/icons/greek-mythology-3/500/zeus_greek_god_mythology_jupiter_lightning_character_thunder-512.png" alt="" />

            <div id="coin" onClick={() => {
              var flipResult = Math.random();
              var coin = document.getElementById('coin')
              coin?.classList.remove();
              setTimeout(function () {
                if (flipResult <= 0.5) {
                  coin?.classList.add('heads');
                }
                else {
                  coin?.classList.add('tails');
                }
              }, 100);
            }}>
              <div className="side-a"></div>
              <div className="side-b"></div>
            </div>


            <img className="" width={100} height={100} src="/skull.png" alt="" />
          </div>

        </div>



        <div className="bg-[rgb(23,23,23)] flex-1 justify-between flex flex-col h-[80vh] test">
          <ul id="messages" className="flex flex-col overflow-y-scroll scrollbar-track">
            {Array(50).fill(null).map((_, i) => (
              <li key={i} className="p-4 chat-message border-b-2 border-gray-800">
                <div className="flex-col items-end">
                  <div className="flex items-center text-sm gap-5 my-4">
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full" />
                    <span className="text-gray-300">NONAME</span>
                    <span className="ml-auto text-gray-500">04:25</span>
                  </div>
                  <span className="inline-block text-gray-500 text-sm font-medium">Can be verified on any platform using docker</span>
                </div>
              </li>
            ))}

          </ul>

          <div className="relative flex items-center">
            <input type="text" placeholder="Type your message here..." className="px-3 w-full bg-gradient-to-r from-[rgb(40,40,40)] to-[rgb(29,29,29)] focus:outline-none focus:placeholder-gray-500 text-yellow-400 placeholder-gray-600 py-7" />
            <div className="absolute right-2">
              <button type="button" className="gap-3 inline-flex items-center justify-center bg-black rounded-lg p-4 transition duration-500 ease-in-out text-white  hover:bg-yellow-600 focus:outline-none">
                <i className="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>

        </div>



      </div>

    </Layout >

  )
}