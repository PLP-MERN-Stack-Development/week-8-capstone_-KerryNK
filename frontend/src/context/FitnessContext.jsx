import { createContext, useState, useEffect, useContext } from "react";
import api from "../services/api";
import { AuthContext } from "./AuthContext";

export const FitnessContext = createContext();

export const FitnessProvider = ({ children }) => {
  const { user } = useContext(AuthContext);
  const [entries, setEntries] = useState([]);
  const [stats, setStats] = useState({});

  useEffect(() => {
    if (user) fetchEntries();
  }, [user]);

  const fetchEntries = async () => {
    const token = localStorage.getItem("token");
    const res = await api.get("/fitness", { headers: { Authorization: `Bearer ${token}` } });
    setEntries(res.data);
    const statsRes = await api.get("/fitness/stats", { headers: { Authorization: `Bearer ${token}` } });
    setStats(statsRes.data);
  };

  const addEntry = async (entry) => {
    const token = localStorage.getItem("token");
    await api.post("/fitness", entry, { headers: { Authorization: `Bearer ${token}` } });
    fetchEntries();
  };

  const updateEntry = async (id, entry) => {
    const token = localStorage.getItem("token");
    await api.put(`/fitness/${id}`, entry, { headers: { Authorization: `Bearer ${token}` } });
    fetchEntries();
  };

  const deleteEntry = async (id) => {
    const token = localStorage.getItem("token");
    await api.delete(`/fitness/${id}`, { headers: { Authorization: `Bearer ${token}` } });
    fetchEntries();
  };

  return (
    <FitnessContext.Provider value={{ entries, stats, addEntry, updateEntry, deleteEntry }}>
      {children}
    </FitnessContext.Provider>
  );
}; 