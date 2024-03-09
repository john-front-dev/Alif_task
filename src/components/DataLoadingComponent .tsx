import { useState, useEffect } from "react";
import { getUsers } from "../api/api";

interface DataLoadingComponentProps {
  setUsers: React.Dispatch<React.SetStateAction<UserData[]>>;
  setHasMore: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UserData {
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

const DataLoadingComponent: React.FC<DataLoadingComponentProps> = ({ setUsers, setHasMore }) => {
  const [page, setPage] = useState<number>(0);

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
