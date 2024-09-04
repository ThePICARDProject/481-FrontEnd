
function Experiment() {
    return (
        <div className="grid grid-cols-3 grid-rows-9 gap-4 h-screen p-3">
            <div className="col-span-2 bg-[#ffffff]"></div>
            <div className='relative'>
                <div className={'absolute bottom-0 bg-[#001d3d] w-full text-white rounded-3xl'}>
                    <button onClick={() => {alert("Upload data")}}>+ Upload Data</button>
                </div>
            </div>
            <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto overflow-x-hidden">
                <div className="text-white mt-3 w-full">Virtual Machine Parameters</div>
                <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
            </div>
            <div className=" col-span-2 bg-[#001D3D] row-span-7 rounded-2xl p-5">
                <div className='bg-white w-full h-full rounded-2xl'>
                    <h1 className='underline text-5xl'>Current Data Sets</h1>
                    <h2 className='ml-2 text-3xl text-left bg-blue-100'>Star Data</h2>
                    <h2 className='ml-2 text-3xl text-left bg-gray-100'>Star Data</h2>
                    <h2 className='ml-2 text-3xl text-left bg-blue-100'>Star Data</h2>
                    <h2 className='ml-2 text-3xl text-left bg-gray-100'>Star Data</h2>
                </div>
            </div>
            <div className="bg-[#001D3D] row-span-3 rounded-2xl overflow-auto">
                <div className="text-white mt-3 w-full">Algorithim Parameters</div>
                <div className="overflow-auto">
                    <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                    <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                    <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                    <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                    <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                    <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                    <input type="number" placeholder="Max Ram (160GB)" className="bg-white rounded-3xl m-4" />
                </div>
            </div>
            <div className='bg-[#001D3D] rounded-2xl text-3xl p-4'>
                <div className='bg-white w-fill h-full rounded-xl'>
                    <button onClick={() => alert('Run Experiment')} >Run Experiment</button>
                </div>
            </div>
        </div>
    )
  }
  
  export default Experiment