interface TableInfo {
    id: "Origin" | "Destination" | "Value" | "Approved" | "Delete";
    label: string;
    width: string;
    align: "center";
    format?: (value: number) => string;
  }
 export const columns: TableInfo[] = [
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