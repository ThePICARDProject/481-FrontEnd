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
        <div className="grid h-1/2 place-items-center">
            <div className="max-w-full h-1/2 pr-5 border-4 rounded border-[#FFD60A] overflow-auto overflow-x-hidden">
                {experiments.map((experiment, index) => (
                    <ExperimentCard
                        key={index}
                        experimentName={experiment.name}
                        link={experiment.link}
                        experimentState={experiment.state} />
                ))}
            </div>
            <button className="bg-[#001D3D] hover:bg-[#FFD60A] text-white font-bold py-2 px-4 rounded-full -mt-60" onClick={handleEnterClick}>
                New Experiment
            </button>
        </div></>
    );
}

export default Home;