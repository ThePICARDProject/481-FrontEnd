import React, { useState } from 'react';
import ExperimentCard from '../components/experimentcard/experimentcard';
import Header from '../components/header/header';

function History() {
    const [searchQuery, setSearchQuery] = useState('');
    
    const experiments = [
        { name: 'Experiment 1', link: 'http://example.com/1', state: '1' },
        { name: 'Experiment 2', link: 'http://example.com/2', state: '2' },
        { name: 'Experiment 3', link: 'http://example.com/3', state: '3' },
        { name: 'Experiment 4', link: 'http://example.com/3', state: '1' },
        { name: 'Experiment 5', link: 'http://example.com/3', state: '2' },
        { name: 'Experiment 6', link: 'http://example.com/3', state: '3' },
        { name: 'Experiment 100', link: 'http://example.com/3', state: '3' },
    ];

    // Filter experiments based on the search query
    const filteredExperiments = experiments.filter(experiment =>
        experiment.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <Header />
            <div className="p-5 flex flex-col items-center">
                {/* Search bar */}
                <div className="mb-5 mt-5 w-full max-w-md border-4 rounded-lg border-[#FFD60A]">
                    <input
                        type="text"
                        className="w-full p-3 border-2 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
                        placeholder="Search experiments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
                
                {/* Experiment cards */}
                <div className="w-full grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                    {filteredExperiments.length > 0 ? (
                        filteredExperiments.map((experiment, index) => (
                            <div key={index} className="p-4 border-4 rounded-lg border-[#FFD60A] bg-white shadow-lg">
                                <ExperimentCard
                                    experimentName={experiment.name}
                                    link={experiment.link}
                                    experimentState={experiment.state}
                                />
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500">No experiments found.</p>
                    )}
                </div>
            </div>
        </>
    );
}

export default History;
