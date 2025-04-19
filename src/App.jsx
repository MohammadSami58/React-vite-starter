import { useState, useEffect } from 'react';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer  } from 'react-toastify';
import "./App.css";
import Countries from './components/countries';

const url = "https://restcountries.com/v3.1/all";

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);
  const [search, setSearch] = useState("");

  const fetchData = async (url) => {
    try {
      const res = await fetch(url);
      const data = await res.json();
      setCountries(data);
      setFilteredCountries(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, []);

  const handleRemove = (name) => {
    const filtered = filteredCountries.filter(
      (country) => country.name.common !== name
    );
    setCountries(filtered);
    setFilteredCountries(filtered);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);

    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredCountries(filtered);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Country App</h1>

      <div style={{ textAlign: "center", marginBottom: "1rem" }}>
        <input
          type="text"
          placeholder="Search Country"
          value={search}
          onChange={handleSearch}
          
        />
      </div>
      <ToastContainer position="top-right" autoClose={2000} />
      {loading && <h3>Loading Please Wait....</h3>}
      {error && <h2>{error.message}</h2>}
      {filteredCountries && (
        <Countries countries={filteredCountries} onRemoveCountry={handleRemove} />
      )}
    </div>
  );
}

export default App;
