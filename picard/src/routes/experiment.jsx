import { Button } from '@headlessui/react'

function Experiment() {
    return (
        <div className="grid grid-cols-3 grid-rows-8 gap-4 h-screen bg-red-300 p-3">
            <div className="col-span-2 bg-blue-900">1</div>
            <div className="bg-blue-900">
                <Button>Hello</Button>
            </div>
            <div className="bg-blue-900 row-span-3">3</div>
            <div className=" col-span-2 bg-blue-900 row-span-6">4</div>
            <div className="bg-blue-900 row-span-3">5</div>
        </div>
    )
  }
  
  export default Experiment