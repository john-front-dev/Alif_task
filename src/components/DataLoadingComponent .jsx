import { useState, useEffect } from "react";
import { getUsers } from "../api/api";

const DataLoadingComponent = ({ setUsers, setHasMore }) => {
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const data = await getUsers(page);
        console.log(data);
        setUsers((prevUsers) => [...prevUsers, ...data]);
        if (data.length === 0) {
          setHasMore(false);
        }
      } catch (error) {
        console.error("Ошибка при загрузке данных:", error);
      }
      setLoading(false);
    };
    fetchUsers();
  }, [page, setUsers, setHasMore]);

  return null;
};

export default DataLoadingComponent;
