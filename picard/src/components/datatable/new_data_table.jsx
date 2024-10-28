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
import { useNavigate } from "react-router-dom";

function CSVViewer({ experimentId }) {
  const [csvData, setCsvData] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(15);
  const [totalRows, setTotalRows] = useState(0);
  const [chunkSize] = useState(50);
  const isParsedRef = useRef(false);

  let route = "../../../public/sample_data/ics_power.csv";
  let title = null;

  if (experimentId === "1") {
    route = "../../../public/sample_data/boston_housing.csv";
    title = "Boston Housing Data";
  }

  if (experimentId === "2") {
    route = "../../../public/sample_data/ics_power.csv";
    title = "ICS Power Data";
  }

  if (experimentId === "3") {
    route = "../../../public/sample_data/noaa_dataset.csv";
    title = "NOAA Weather Data";
  }

  if (experimentId === "4") {
    route = "../../../public/sample_data/palfa_001.csv";
    title = "Pulsar Data";
  }

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

  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate(`/experiment?experimentId=${experimentId}`);
  };

  return (
    <div>
      {/* Title Div */}
      <div style={{ margin: "10px", marginTop: "20px", borderRadius: "10px" }}>
        <h1>{title}</h1>
      </div>

      {/* Table Div */}
      {csvData.length > 0 && (
        <Paper
          sx={{
            width: 1200,
            overflow: "hidden",
            borderRadius: "10px",
            scrollbarWidth: "none",
          }}
        >
          <TableContainer
            sx={{ height: 400, overflowX: "auto", scrollbarWidth: "none" }}
          >
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
        onClick={handleNavigation}
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
