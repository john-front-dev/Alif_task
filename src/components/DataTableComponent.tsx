import React from "react";
import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
  };
  phone: string;
  website: string;
}

interface DataTableComponentProps {
  users: User[];
}

const DataTableComponent: React.FC<DataTableComponentProps> = ({ users }) => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name",
        header: "Имя",
      },
      {
        accessorKey: "email",
        header: "Почта",
      },
      {
        accessorKey: "username",
        header: "Ник",
      },
      {
        accessorKey: "phone",
        header: "Номер телефона",
      },
      {
        accessorKey: "website",
        header: "Сайт",
      },
      {
        accessorKey: "address.street",
        header: "Адресс",
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data: users,
    enablePagination: false,
    enableRowNumbers: true,
    enableRowVirtualization: true,
  });

  return (
    <div
      style={{
        maxHeight: "85vh",
        overflowY: "auto",
        padding: "1px",
      }}
    >
      <MaterialReactTable table={table} />
    </div>
  );
};

export default DataTableComponent;
