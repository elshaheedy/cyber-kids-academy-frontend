import React from 'react';

function Courses() {
    return (
        <section id="courses" className="mt-12">
            <h2 className="text-2xl font-bold mb-4">Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-4 rounded-lg shadow-md">
                    <h3 className="text-xl font-bold mb-2">Introduction to Programming</h3>
                    <p className="mb-4">Learn the basics of programming using fun and interactive lessons.</p>
                    <a href="#" className="text-blue-500 hover:underline">Learn More</a>
                </div>
            </div>
        </section>
    );
}

export default Courses;
