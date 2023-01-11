/* eslint-disable @next/next/no-img-element */
import Link from "next/link";

export default function Layout({ children }: any) {
	return (
		<main className="xl:h-screen xl:overflow-hidden">

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
			{children}
		</main>
	)
}