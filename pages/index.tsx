import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  const [isLoaded, setLoaded] = useState(false as boolean)
  const [activeGame, setActiveGame] = useState(0 as number)

  useEffect(() => {
    setLoaded(true)
  }, [])
  if (!isLoaded) return null
  return (
    <main className="h-screen overflow-hidden">
      <div className="p-2 w-full bg-[rgb(22,22,22)]">
        <div className="p-2 text-gray-700 rounded-lg  font-medium capitalize">
          <i className="fas fa-brands fa-twitter"></i>
          <span className="flex gap-3 float-right mr-3">
            <Link href="/terms">TERMS OF SERVICE</Link>
            <Link href="/faqs">FAQ</Link>
            <Link href="/contact">CONTACT</Link>
          </span>
        </div>
      </div>



      <div className="w-full bg-[rgb(32,32,32)] p-2 py-4 flex items-center lg:gap-20 text-gray-500 font-medium text-lg uppercase">
        <span className="px-4 text-yellow-500 mr-2 border-r border-yellow-500">
          Fluffy Games
        </span>
        <span className="px-2 py-1 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-sm rounded">
          <i className="w-8 fas fa-stream p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-3">Ticket Rush</span>
        </span>

        <span className="px-2 py-1 cursor-pointer hover:bg-gray-800 hover:text-gray-300 text-sm rounded">
          <i className="w-8 fas fa-th p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-3">Coinflip</span>
        </span>

        <span className="px-2 py-1 cursor-pointer hover:bg-gray-100 hover:text-gray-300 text-sm rounded">
          <i className="w-8 fas fa-th p-2 bg-gray-800 rounded-full">
          </i>
          <span className="mx-3">Jackpot</span>
        </span>

        <span className="items-center flex gap-10 cursor-pointer  ml-auto mr-3">
          <Link href="/terms">HOW TO PLAY</Link>
          <button className="px-3 py-1 rounded-md bg-yellow-500 text-black">
            $5,000
          </button>
          <Link href="/profile"><img className="w-10 h-10 rounded-full h-150 w-150" src="https://img.freepik.com/free-vector/cute-cat-gaming-cartoon_138676-2969.jpg" alt="Profile" /></Link>
        </span>
      </div>


      <div className="my-10 flex flex-wrap justify-around">


        <div className="mx-10">
          <div className="my-5 flex items-center gap-96 justify-between uppercase">
            <span>coinflip list</span>
            <button className="p-3 border-4 border-yellow-500 rounded-md uppercase">Create your own game</button>
          </div>
          <hr className="border-gray-800 mb-5" />

          {Array(5).fill(null).map((_, i) => (
            <button onClick={() => setActiveGame(i)} key={i} className={"hover:bg-gradient-to-r from-yellow-900 flex items-center p-5 gap-10 text-sm text-gray-500 uppercase " + (activeGame == i ? "border-l-4 -ml-1 border-yellow-500 bg-gradient-to-r from-yellow-900" : "")}>
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


        <div className="flex-col">
          <span>Flipping</span>
        </div>



        <div className="bg-[rgb(23,23,23)] flex-1 justify-between flex flex-col overflow-auto">


          <div id="messages" className="flex flex-col overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            {Array(5).fill(null).map((_, i) => (
              <div key={i} className="p-4 chat-message">
                <div className="flex-col items-end">
                  <div className="flex items-center text-sm gap-5 my-4">
                    <img src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144" alt="My profile" className="w-10 h-10 rounded-full" />
                    <span className="text-gray-300">NONAME</span>
                    <span className="ml-auto text-gray-500">04:25</span>
                  </div>
                  <span className="inline-block text-gray-500 font-medium">Can be verified on any platform using docker</span>
                </div>
              </div>
            ))}
          </div>

          <div className="relative flex bg-[rgb(60,255,0)]">
            <input type="text" placeholder="Type your message here..." className="px-3 w-full focus:outline-none focus:placeholder-gray-500 text-white placeholder-gray-600 py-7" />
            <div className="absolute right-1 items-center inset-y-0 hidden sm:flex">
              <button type="button" className="gap-3 inline-flex items-center justify-center bg-black rounded-lg p-4 transition duration-500 ease-in-out text-white  hover:bg-yellow-800 focus:outline-none">
                <i class="fa-solid fa-paper-plane"></i>
              </button>
            </div>
          </div>

        </div>



      </div>


    </main>
  )
}