import { useState, useEffect } from "react";
import { getUsers } from "../api/api";

const DataLoadingComponent = ({ setUsers, setHasMore }) => {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUsers(page);
        setUsers((prevUsers) => [...prevUsers, ...data]);
        if (data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
    };
    fetchUsers();
  }, [page, setUsers, setHasMore]);

  return null;
};

export default DataLoadingComponent;
