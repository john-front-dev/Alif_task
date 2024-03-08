import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";

const DataTableComponent = ({ users }) => {
  const reversedUsers = useMemo(() => [...users].reverse(), [users]);

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
    data: reversedUsers,
    enablePagination: false,
    enableRowNumbers: true,
    enableRowVirtualization: true,
  });

  return (
    <div>
      <MaterialReactTable table={table} />
    </div>
  );
};

export default DataTableComponent;
