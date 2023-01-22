import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Chatbox from "../components/chatbox";

/* eslint-disable @next/next/no-img-element */
export default function Coinflip() {
	const [isLoaded, setLoaded] = useState(false as boolean)
	const [rotation, setRotation] = useState("" as string)
	const [activeGame, setActiveGame] = useState(0 as number)

	useEffect(() => {
		setLoaded(true)
	}, [])
	if (!isLoaded) return null

	function rotate() {
		var flipResult = Math.random();
		if (flipResult <= 0.5) {
			setRotation("heads")
		}else{
			setRotation("tails")
		}
	}
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

						<div id="euro" className={rotation} onClick={() => rotate()}>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>
							<article className="middle"></article>

							<article className="back"></article>
						</div>

						<img className="" width={100} height={100} src="/skull.png" alt="" />
					</div>



				</div>

				<Chatbox />
			</div>

		</Layout >

	)
}