import React from 'react';
import ExperimentCard from '../components/experimentcard/experimentcard';
import { useNavigate } from "react-router-dom";
import Header from '../components/header/header';

function Home() {
    const experiments = [
        { name: 'Experiment 1', link: 'http://example.com/1', state: '1' },
        { name: 'Experiment 2', link: 'http://example.com/2', state: '2' },
        { name: 'Experiment 3', link: 'http://example.com/3', state: '3' },
        { name: 'Experiment 4', link: 'http://example.com/3', state: '1' },
        { name: 'Experiment 5', link: 'http://example.com/3', state: '2' },
        { name: 'Experiment 6', link: 'http://example.com/3', state: '3' },
        { name: 'Experiment 100', link: 'http://example.com/3', state: '3' },
    ];

    const navigate = useNavigate();

    const handleEnterClick = () => {
        navigate("/experiment");
    };

    return (
        <><Header />
        <div class="grid grid-cols-2 gap-5">
            {/* left container */}
            <div class="h-[50vh] w-[70vh] pr-5 border-4 rounded border-[#FFD60A] overflow-auto overflow-x-hidden">
                {experiments.map((experiment, index) => (
                    <ExperimentCard
                        key={index}
                        experimentName={experiment.name}
                        link={experiment.link}
                        experimentState={experiment.state} />
                ))}
            </div>
            
            {/* right container */}
            <div class="h-[50vh] w-[70vh] pr-5 border-4 rounded border-[#FFD60A] overflow-auto overflow-x-hidden flex flex-col items-center">
                <p>Currently running: experiment exp (TODO)</p>
                <p>Queue position x of n (TODO)</p>
                <p>Resources p%: 40% (TODO)</p>
                <div class="w-3/4 bg-gray-200 rounded-full h-2.5 flex justify-start">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: '40%' }}></div>
                </div>
            </div>

            {/* bottom button */}
            <button className="bg-[#001D3D] hover:bg-[#FFD60A] text-white font-bold py-2 px-4 rounded-full" onClick={handleEnterClick}>
                New Experiment
            </button>
        </div>      
        </>
    );
}

export default Home;