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
} from "@material-ui/core";
import { useStyles } from "./mainCSS";
import Subs from "../classes/subs";
import { Header } from "../components/header";

interface TableInfo {
  id: "Origin" | "Destination" | "Value" | "Approved" | "Delete";
  label: string;
  minWidth?: number;
  align?: "center";
  format?: (value: number) => string;
}
const columns: TableInfo[] = [
  {
    id: "Origin",
    label: "Origin",
    minWidth: 160,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "Destination",
    label: "Destination",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "Value",
    label: "Value",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "Approved",
    label: "Approved",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
  {
    id: "Delete",
    label: "Delete",
    minWidth: 170,
    align: "center",
    format: (value: number) => value.toLocaleString("en-US"),
  },
];

function SubsList() {
  const classes = useStyles();
  const [subsList, setSubsList] = useState(Subs.getSubs());

  // let subArrayList = subsList.slice();
  //     const filteredBystatus = subsList.filter(subList => subList.approved )

  // }

  return (
    <Grid>
      <Header></Header>
      <TableContainer>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  className={classes.textColor}
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        </Table>
        <TableBody>
          {subsList.length > 0 ? (
            subsList.map((item: any, index: number) => {
              return (
                <TableRow>
                  <TableCell className={classes.tableInfo}>
                    {item.origin.toUpperCase}
                  </TableCell>
                  <TableCell className={classes.tableInfo}>
                    {item.destination.toUpperCase()}
                  </TableCell>
                  <TableCell className={classes.tableInfo}>
                    {item.value}
                  </TableCell>
                  <TableCell className={classes.tableInfo}>
                    {item.approved ? (
                      ""
                    ) : (
                      <Button
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
                  <TableCell className={classes.tableInfo}>
                    {item.approved ? (
                      ""
                    ) : (
                      <Button
                        onClick={() =>
                          Subs.deleteSub(index, () => {
                            setSubsList(Subs.getSubs());
                          })
                        }
                        data-ref={index}
                      >
                        {" "}
                        Delete
                      </Button>
                    )}
                  </TableCell>
                </TableRow>
              );
            })
          ) : (
            <TableRow>
              <TableCell>There are no subsidies created yet</TableCell>
            </TableRow>
          )}
        </TableBody>
      </TableContainer>
    </Grid>
  );
}

export default SubsList;
