import React, { useState } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  TablePagination,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "../assets/css/mainCSS";
import DeleteIcon from "@material-ui/icons/Delete";
import Subs from "../classes/subs";
import FilterBox from "./filterBox";
import { columns } from "./tableInfo";

function SubsTable() {
  const classes = useStyles();
  const [subsList, setSubsList] = useState(Subs.getSubs());
  const [filterSubs, setFilterSubs] = useState("All");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const filtering = (filter: string) => {
    switch (filter) {
      case "Approved":
        setSubsList(
          Subs.getSubs().filter((item: typeof Subs) => item.approved)
        );
        break;
      case "Not approved":
        setSubsList(
          Subs.getSubs().filter((item: typeof Subs) => !item.approved)
        );
        break;
      default:
        setSubsList(Subs.getSubs());
    }
  };

  return (
    <Grid>
      <FilterBox
        oc={(e: React.ChangeEvent<{ value: string }>) => {
          setFilterSubs(e.target.value);
          filtering(e.target.value);
        }}
        val={filterSubs}
      ></FilterBox>
      <TableContainer className={classes.tableContainer}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow className={classes.textColor}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ width: column.width }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody className={classes.tableInfo}>
            {subsList.length > 0 ? (
              subsList.map((item: typeof Subs, index: number) => {
                // cambio de any a object
                return (
                  <TableRow key={index}>
                    <TableCell align="center">
                      {item.origin.toUpperCase()}
                    </TableCell>
                    <TableCell align="center">
                      {item.destination.toUpperCase()}
                    </TableCell>
                    <TableCell align="center">{item.value}</TableCell>
                    <TableCell align="center">
                      {item.approved ? (
                        <Typography className={classes.approvedTXT}>
                          APPROVED
                        </Typography>
                      ) : (
                        <Button
                          className={`${classes.button} ${classes.mobileBTN}`}
                          onClick={() =>
                            Subs.approveSub(item.id, () => {
                              setSubsList(Subs.getSubs());
                              filtering(filterSubs);
                            })
                          }
                        >
                          Approve
                        </Button>
                      )}
                    </TableCell>
                    <TableCell align="center">
                      {item.approved ? (
                        ""
                      ) : (
                        <DeleteIcon
                          className={classes.trash}
                          onClick={() =>
                            Subs.deleteSub(item.id, () => {
                              setSubsList(Subs.getSubs());
                              filtering(filterSubs);
                            })
                          }
                        >
                          Delete
                        </DeleteIcon>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })
            ) : (
              <TableRow>
                <TableCell colSpan={5}>No subsidies found.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={subsList.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Grid>
  );
}

export default SubsTable;
