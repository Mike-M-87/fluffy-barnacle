/* eslint-disable @next/next/no-img-element */
import Link from "next/link";



export default function Layout({ children, page }: any) {

	const NavItem = ({ img, text }: any) =>
		<div className={"flex items-center px-2 py-1 cursor-pointer hover:bg-yellow-600 hover:text-white text-sm rounded " + (page == text && "bg-yellow-600 text-white")}>
			<img src={img} className="h-10 w-10" alt="" />
			<span className="mx-3">{text}</span>
		</div>

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


				<NavItem text="Ticket Rush" img="https://img.icons8.com/3d-fluency/94/null/two-tickets--v1.png" />
				<NavItem text="Coinflip" img="https://img.icons8.com/cotton/64/null/coins--v1.png" />
				<NavItem img="https://img.icons8.com/arcade/64/null/win.png" text="Jackpot" />
				<NavItem text="Cra$h" img="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/null/external-variable-line-chart-plotted-isolated-on-a-white-background-business-color-tal-revivo.png" />

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