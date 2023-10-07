import React from 'react';
import { Link } from 'react-router-dom';

const Nothing = () => {
    return (
        <section className="container mx-auto my-32 flex items-center justify-center h-full p-16 bg-gray-900 text-gray-100">
	<div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
		<div className="max-w-md text-center">
			<h2 className="mb-8 font-extrabold text-9xl text-yellow-400	">
				<span className="sr-only">Error</span>404
			</h2>
			<p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
			<p className="mt-4 mb-8 text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
			<Link to='/'><button rel="noopener noreferrer" href="#" className="px-8 py-3 font-semibold rounded bg-violet-400 hover:bg-violet-500 transition-all text-gray-900">Back to homepage</button></Link>
		</div>
	</div>
</section>
    );
};

export default Nothing;