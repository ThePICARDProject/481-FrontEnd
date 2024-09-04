import React from 'react';
import ExperimentCard from '../components/experimentcard/experimentcard';


function Home() {
    const experiments = [
        { name: 'Experiment 1', link: 'http://example.com/1', state: 'Completed' },
        { name: 'Experiment 2', link: 'http://example.com/2', state: 'Completed' },
        { name: 'Experiment 3', link: 'http://example.com/3', state: 'Completed' },
        { name: 'Experiment 4', link: 'http://example.com/3', state: 'Completed' },
        { name: 'Experiment 5', link: 'http://example.com/3', state: 'Completed' },
        { name: 'Experiment 6', link: 'http://example.com/3', state: 'Completed' },
        { name: 'Experiment 100', link: 'http://example.com/3', state: 'Completed' },
    ];

    return (
        <div className="w-screen h-screen flex justify-center items-center overflow-auto ">
            <div className="w-3/4 h-3/4 max-h-screen border border-gray-300 p-4">
                {experiments.map((experiment, index) => (
                    <ExperimentCard 
                        key={index} 
                        experimentName={experiment.name} 
                        link={experiment.link} 
                        experimentState={experiment.state}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;