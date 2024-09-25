import React, { useState, useEffect, useRef } from "react";
import Papa from "papaparse";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";

function CSVViewer() {
  const [csvData, setCsvData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [totalRows, setTotalRows] = useState(0);
  const [chunkSize] = useState(50);
  const isParsedRef = useRef(false);

  const route = "/sample_data/palfa_001.csv";

  useEffect(() => {
    if (!isParsedRef.current) {
      fetch(route)
        .then((response) => response.text())
        .then((data) => {
          Papa.parse(data, {
            header: true,
            chunkSize: chunkSize,
            chunk: (results) => {
              setCsvData((prevData) => [...prevData, ...results.data]);
              setTotalRows((prevTotal) => prevTotal + results.data.length);
            },
            error: (error) => console.error("Error parsing CSV:", error),
          });
        })
        .catch((error) => console.error("Error fetching CSV data:", error));

      isParsedRef.current = true;
    }
  }, [chunkSize]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      {/* Title Div */}
      <div
        style={{
          margin: "10px",
          marginTop: "20px",
          // background: "#002d55",
          borderRadius: "10px",
        }}
      >
        <h1>Palfa Test Data</h1>
      </div>

      {/* Table Div */}
      {csvData.length > 0 && (
        <Paper sx={{ width: 1600, overflow: "hidden", borderRadius: "10px" }}>
          <TableContainer sx={{ height: 600, overflowX: "auto" }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {Object.keys(csvData[0]).map((key) => (
                    <TableCell
                      key={key}
                      sx={{
                        fontWeight: "bold",
                        background: "#002d55",
                        color: "white",
                      }}
                    >
                      {key}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>

              <TableBody>
                {csvData
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => (
                    <TableRow hover key={index}>
                      {Object.values(row).map((value, valueIndex) => (
                        <TableCell
                          key={valueIndex}
                          sx={{
                            fontWeight: "bold",
                            background: "#415f84",
                            color: "white",
                          }}
                        >
                          {value}
                        </TableCell>
                      ))}
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[15, 25, 100]}
            component="div"
            count={totalRows}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
            sx={{
              background: "#002d55",
              color: "white",
            }}
          />
        </Paper>
      )}

      <Button
        href="/experiment"
        sx={{
          background: "#002d55",
          color: "white",
        }}
        variant="contained"
      >
        Previous Page
      </Button>
    </div>
  );
}

export default CSVViewer;
