/* eslint-disable @next/next/no-img-element */
export default function Chatbox() {
	return (
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
	)
}