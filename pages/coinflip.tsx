import { useEffect, useState } from "react";
import Layout from "../components/layout";
import Chatbox from "../components/chatbox";
import Modal from "../components/modal";

/* eslint-disable @next/next/no-img-element */
export default function Coinflip() {
	const [isLoaded, setLoaded] = useState(false as boolean)
	const [activeGame, setActiveGame] = useState(0 as number)
	const [rotationText, setRotationText] = useState("coinflip" as string)
	const [showModal, setshowModal] = useState(false)


	useEffect(() => {
		setLoaded(true)
	}, [])
	if (!isLoaded) return null

	function rotate() {
		var flipResult = Math.random();
		const text = flipResult <= 0.5 ? "heads" : "tails"
		const coin = document.getElementById("euro")
		coin?.removeAttribute('class')
		coin?.classList.add(text)
		setRotationText("flipping")
		setTimeout(() => {
			setRotationText(text)
		}, 5000);
	}

	return (
		<Layout page="Coinflip">
			<div className="my-10 flex flex-wrap justify-around">

				<div className="mx-10 h-[80vh] p-5 overflow-y-scroll scrollbar-track">
					<div className="my-5 flex items-center justify-between uppercase">
						<span>coinflip list</span>
						<button onClick={() => setshowModal(true)} className="p-3 border-4 border-yellow-500 rounded-md uppercase">Create your own game</button>
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

				<div className="flex flex-col">
					<div className="flex-col gap-2 p-5 flex uppercase items-center text-2xl font-medium shadow-xl shadow-yellow-900 bg-transparent">
						<span className="text-yellow-500">Thunder vs Skull</span>
						<span>game: {rotationText}</span>
						<span className="glow text-yellow-500">
							Winner: {rotationText == "heads" ? "thunder" : rotationText == "tails" ? "skull" : null}
						</span>
					</div>

					<div className="flex items-center my-10 gap-10">
						<img width={100} height={100} src="https://cdn3.iconfinder.com/data/icons/greek-mythology-3/500/zeus_greek_god_mythology_jupiter_lightning_character_thunder-512.png" alt="" />

						<div id="euro">
						<article className="front"></article>
							{Array(30).fill("").map((_, i) => (
								<article key={i} className="middle"></article>
							))}
							<article className="back"></article>
						</div>

						<img width={100} height={100} src="/skull.png" alt="" />
					</div>

					<button className="uppercase mx-auto hover:bg-yellow-700 font-bold px-4 py-2 rounded-sm bg-yellow-500 text-black" onClick={() => rotate()}>Start</button>
				</div>

				<Chatbox />
			</div>



			<Modal show={showModal} amount="100" onClose={() => setshowModal(false)}>



				<div className="relative md:w-96 w-full bg-[rgb(20,20,20)] rounded-lg shadow ">
					<button onClick={() => setshowModal(false)} type="button" className="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white" data-modal-hide="authentication-modal"><span className="sr-only">Close modal</span>xxx</button>
					<div className="px-6 py-6 lg:px-8">
						<h3 className="mb-4 text-xl font-medium text-gray-900 dark:text-white"></h3>
						<form className="space-y-6" action="#">
							<div>
								<label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
								<input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
							</div>
							<div>
								<label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
								<input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
							</div>
							<div className="flex justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input id="remember" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
									</div>
									<label htmlFor="remember" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Remember me</label>
								</div>
								<a href="#" className="text-sm text-blue-700 hover:underline dark:text-blue-500">Lost Password?</a>
							</div>
							<button type="submit" className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
							<div className="text-sm font-medium text-gray-500 dark:text-gray-300">
								Not registered? <a href="#" className="text-blue-700 hover:underline dark:text-blue-500">Create account</a>
							</div>
						</form>


					</div>

				</div>
			</Modal>





		</Layout >

	)
}