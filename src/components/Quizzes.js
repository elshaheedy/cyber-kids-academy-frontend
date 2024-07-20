import React from 'react';

function Quizzes() {
    return (
        <section id="quizzes" className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Quizzes</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Basic Cybersecurity Quiz</h3>
                    <p className="mb-4">Test your knowledge about basic cybersecurity concepts.</p>
                    <a href="#" className="text-blue-500 hover:underline">Take Quiz</a>
                </div>
            </div>
        </section>
    );
}

export default Quizzes;
