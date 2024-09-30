import React, { useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import Header from '../components/header/header';
import Paper from '@mui/material/Paper';


function History() {
    const [searchQuery, setSearchQuery] = useState('');

    const experiments = [
        { id: 1, name: 'Experiment 1', link: 'http://example.com/1', state: '1', date: '01/02/2024' },
        { id: 2, name: 'Experiment 2', link: 'http://example.com/2', state: '2', date: '01/02/2024' },
        { id: 3, name: 'Experiment 3', link: 'http://example.com/3', state: '3', date: '01/02/2024' },
        { id: 4, name: 'Experiment 4', link: 'http://example.com/3', state: '1', date: '01/02/2024' },
        { id: 5, name: 'Experiment 5', link: 'http://example.com/3', state: '2', date: '01/02/2024' },
        { id: 6, name: 'Experiment 6', link: 'http://example.com/3', state: '3', date: '01/02/2024' },
        { id: 100, name: 'Experiment 100', link: 'http://example.com/3', state: '3', date: '01/02/2024' },
        { id: 10, name: 'Experiment 1', link: 'http://example.com/1', state: '1', date: '01/02/2024' },
        { id: 20, name: 'Experiment 2', link: 'http://example.com/2', state: '2', date: '01/02/2024' },
        { id: 30, name: 'Experiment 3', link: 'http://example.com/3', state: '3', date: '01/02/2024' },
        { id: 40, name: 'Experiment 4', link: 'http://example.com/3', state: '1', date: '01/02/2024' },
        { id: 50, name: 'Experiment 5', link: 'http://example.com/3', state: '2', date: '01/02/2024' },
        { id: 60, name: 'Experiment 6', link: 'http://example.com/3', state: '3', date: '01/02/2024' },
        { id: 1000, name: 'Experiment 100', link: 'http://example.com/3', state: '3', date: '01/02/2024' },
    ];

    // Filter experiments based on the search query
    const filteredExperiments = experiments.filter(experiment =>
        experiment.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const columns = [
        { field: 'name', headerName: 'Name', width: 300 },
        { field: 'link', headerName: 'Link', width: 300 },
        { field: 'state', headerName: 'State', width: 150 },
        { field: 'date', headerName: 'Date', width: 200 },
    ];

    const paginationModel = { page: 0, pageSize: 5 };


    return (
        <>
            <Header />
            <p>
                TODO: get call from backend
            </p>
            <div className="p-5 flex flex-col items-center">
                {/* Search bar */}
                <div className="mb-5 mt-5 w-full max-w-md border-4 rounded-lg border-[#FFD60A]">
                    <input
                        type="text"
                        className="w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#FFD60A]"
                        placeholder="Search experiments..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                </div>
            </div>
                
            {/* Experiment table */}
            <div className="w-full flex-col items-center border-4 rounded-lg border-[#FFD60A] overflow-auto">
                <Paper sx={{ height: '50%', width: '100%' }}>
                    <div style={{ height: '50%', width: '100%' }}>
                        <DataGrid
                            rows={filteredExperiments}
                            columns={columns}
                            pageSizeOptions={5, 10, 15}
                            initialState={{ pagination: { paginationModel } }}
                            // checkboxSelection
                            disableSelectionOnClick
                            sortingOrder={['asc', 'desc']}
                        />
                    </div>
                </Paper>
            </div>
        </>
    );
}

export default History;
