import React from 'react';

const Contact = () => {
    return (
        <div className="grid max-w-screen-xl  shadow-lg hover:shadow-blue-500/50  grid-cols-1 gap-8 px-8 py-16 mx-auto my-12	 rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 bg-transparent text-slate-50">
			<div className="flex flex-col justify-between">
				<div className="space-y-2">
					<h2 className="text-4xl font-bold leadi lg:text-5xl">Let's talk!</h2>
					<div className="dark:text-gray-400">Vivamus in nisl metus? Phasellus.</div>
				</div>
				<img src="https://img.freepik.com/free-vector/hand-drawn-business-communication-concept_52683-77063.jpg?size=626&ext=jpg&ga=GA1.1.431260662.1696407234&semt=ais" alt="" className="p-6 h-52 md:h-64" />
			</div>
			<form novalidate="" className="space-y-6">
				<div>
					<label for="name" className="text-sm">Full name</label>
					<input id="name" type="text" placeholder="" className="w-full p-3 rounded dark:bg-gray-800" required />
				</div>
				<div>
					<label for="email" className="text-sm">Email</label>
					<input id="email" type="email" className="w-full p-3 rounded dark:bg-gray-800" required/>
				</div>
				<div>
					<label for="message" className="text-sm" required>Message</label>
					<textarea id="message" rows="3" className="w-full p-3 rounded dark:bg-gray-800"></textarea>
				</div>
				<button type="submit" className="w-full p-3 text-sm font-bold tracki uppercase rounded transition bg-red-500	hover:bg-red-700 dark:text-gray-900">Send Message</button>
			</form>
		</div>
    );
};

export default Contact;