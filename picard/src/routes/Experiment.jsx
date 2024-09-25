import './Experiment.css';
import Header from '../components/header/header'
import Parameter from '../components/parameter/parameter';
import { useState } from "react";
import FileUploader from '../components/fileuploader/fileuploader';


function Experiment() {

    const parameters = [
        { parameterType: 'number', placeholder: '160Gb'},
        { parameterType: 'number', placeholder: '160Gb'},
        { parameterType: 'number', placeholder: '160Gb'},
        { parameterType: 'number', placeholder: '160Gb'},
        { parameterType: 'number', placeholder: '160Gb'},
        { parameterType: 'number', placeholder: '160Gb'},
        { parameterType: 'number', placeholder: '160Gb'},
        { parameterType: 'number', placeholder: '160Gb'},
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
            <div className=" col-span-2 bg-[#001D3D] row-span-6 rounded-2xl p-5">
                <div className='w-full h-full rounded-2xl'>
                    <h1 className='underline text-5xl'>Current Data Sets</h1>
                    <h2 className='ml-2 text-3xl text-left'>Star Data</h2>
                    <h2 className='ml-2 text-3xl text-left '>Star Data</h2>
                    <h2 className='ml-2 text-3xl text-left '>Star Data</h2>
                    <h2 className='ml-2 text-3xl text-left'>Star Data</h2>
                </div>
            </div>
            <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto">
                <div className="text-white mt-3 w-full">Algorithim Parameters</div>
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
                    <button className='w-full h-full'>Run Experiment</button>
            </div>
            <div />
            <div className='bg-[#001D3D] rounded-2xl text-3xl'>
                <FileUploader />
            </div>
        </div></>
    )
  }
  
  export default Experiment