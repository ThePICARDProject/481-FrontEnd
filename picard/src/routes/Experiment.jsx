import './Experiment.css';
import Header from '../components/header/header'
import Parameter from '../components/parameter/parameter';
import { useState } from "react";
import FileUploader from '../components/fileuploader/fileuploader';


// DatasetEntry component for individual dataset buttons
const DatasetEntry = ({ name, isSelected, onClick }) => (
    <button
        className={`dataset-entry ${isSelected ? 'selected' : ''}`}
        onClick={onClick}
    >
        {name}
    </button>
);

function Experiment() {
    const [selectedDataset, setSelectedDataset] = useState(null); // Track selected dataset

    const datasets = [
        'Star Data 1',
        'Star Data 2',
        'Star Data 3',
        'Star Data 4'
    ];

    const parameters = [
        { parameterType: 'number', placeholder: '160Gb' },
        { parameterType: 'number', placeholder: '160Gb' },
        { parameterType: 'number', placeholder: '160Gb' },
        { parameterType: 'number', placeholder: '160Gb' },
        { parameterType: 'number', placeholder: '160Gb' },
        { parameterType: 'number', placeholder: '160Gb' },
        { parameterType: 'number', placeholder: '160Gb' },
        { parameterType: 'number', placeholder: '160Gb' },
    ];

    return (
        <>
            <div className="mt-3 main grid grid-cols-3 grid-rows-8 gap-4 h-screen p-3">
                <Header className='col-span-2' />
                <div className="col-span-3"></div>

                <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-hidden">
                    <div className="text-white mt-3 w-full">Virtual Machine Parameters</div>
                    {parameters.map((parameter, index) => (
                        <Parameter
                            key={index}
                            parameterTypet={parameter.parameterType}
                            placeholder={parameter.placeholder}
                        />
                    ))}
                </div>

                {/* Datasets section */}
                <div className="col-span-2 bg-[#001D3D] row-span-6 rounded-2xl p-5">
                    <div className='w-full h-full rounded-2xl'>
                        <h1 className='underline text-5xl'>Current Data Sets</h1>
                        <div className="dataset-list">
                            {datasets.map((dataset, index) => (
                                <DatasetEntry
                                    key={index}
                                    name={dataset}
                                    isSelected={selectedDataset === index}
                                    onClick={() => setSelectedDataset(index)}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto">
                    <div className="text-white mt-3 w-full">Algorithm Parameters</div>
                    <div className="overflow-auto">
                        {parameters.map((parameter, index) => (
                            <Parameter
                                key={index}
                                parameterTypet={parameter.parameterType}
                                placeholder={parameter.placeholder}
                            />
                        ))}
                    </div>
                </div>

                <div className='bg-[#001D3D] rounded-2xl text-3xl'>
                    <button className='w-full h-full run-experiment-button'>Run Experiment</button>
                </div>
                <div />
                <div className='bg-[#001D3D] rounded-2xl text-3xl p-0 m-0 h-full'>
                    <FileUploader />
                </div>
            </div>
        </>
    );
}

export default Experiment;