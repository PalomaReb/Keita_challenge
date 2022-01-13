import React, { useState } from "react";
import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Button,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./mainCSS";
import DeleteIcon from "@material-ui/icons/Delete";
import Subs from "../classes/subs";
import { Header } from "../components/header";

interface TableInfo {
  id: "Origin" | "Destination" | "Value" | "Approved" | "Delete";
  label: string;
  width: string;
  align: "center";
  format?: (value: number) => string;
}
const columns: TableInfo[] = [
  {
    id: "Origin",
    label: "Origin",
    width: "20%",
    align: "center",
  },
  {
    id: "Destination",
    label: "Destination",
    width: "20%",
    align: "center",
  },
  {
    id: "Value",
    label: "Value",
    width: "20%",
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "Approved",
    label: "Approved",
    width: "20%",
    align: "center",
  },
  {
    id: "Delete",
    label: "Delete",
    width: "20%",
    align: "center",
  },
];

function SubsList() {
  const classes = useStyles();
  const [subsList, setSubsList] = useState(Subs.getSubs());

  return (
    <Grid item xs={12}>
      <Header></Header>
      <Typography color="primary" align="center" variant="h1">
        Subsidies list
      </Typography>
      <Typography className={classes.text}>View subsidies</Typography>
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
              subsList.map(
                (
                  item: {
                    origin: String;
                    destination: String;
                    value: number;
                    approved: Boolean;
                  },
                  index: number
                ) => {
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
                              Subs.approveSub(index, () => {
                                setSubsList(Subs.getSubs());
                              })
                            }
                            data-ref={index}
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
                              Subs.deleteSub(index, () => {
                                setSubsList(Subs.getSubs());
                              })
                            }
                            data-ref={index}
                          >
                            Delete
                          </DeleteIcon>
                        )}
                      </TableCell>
                    </TableRow>
                  );
                }
              )
            ) : (
              <TableRow>
                <TableCell>There are no subsidies created yet</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Grid>
  );
}

export default SubsList;
