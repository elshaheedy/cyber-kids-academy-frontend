import React from 'react';

function Games() {
    return (
        <section id="games" className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Games</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Cyber Defense Game</h3>
                    <p className="mb-4">Protect your network from cyber attacks in this fun game.</p>
                    <a href="#" className="text-blue-500 hover:underline">Play Now</a>
                </div>
            </div>
        </section>
    );
}

export default Games;
