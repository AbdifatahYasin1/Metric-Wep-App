import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaGlobe } from 'react-icons/fa';
import { fetchCountries } from '../redux/slices/countriesSlice';

function HomePage() {
  const { countries } = useSelector((state) => state.countries);
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  let filteredCountries = countries;
  if (searchTerm) {
    filteredCountries = countries.filter(
      (country) => country.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  }

  return (
    <section className="home-page">
      <div className="flex items-center justify-between p-4">
        <h1 className="text-2xl font-bold text-gray-800">
          <FaGlobe className="inline-block mr-2" />
          Countries
        </h1>
        <div className="flex items-center justify-between">
          <input
            type="text"
            placeholder="Search for a country..."
            className="bg-gray-200 rounded-full px-4 py-2 outline-none"
            value={searchTerm}
            onChange={handleSearch}
          />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-4 p-4">
        {filteredCountries.map((country) => (
          <div key={country.alpha2Code} className="border rounded-lg">
            <Link to={`/details/${country.alpha2Code}`}>
              <img
                src={country.flag}
                alt={country.name}
                className="w-full h-52 mx-auto border-4 border-gray-200 object-cover"
              />
              <p className=" bg-white rounded text-center text-lg">
                {country.name}
              </p>
            </Link>
          </div>
        ))}
      </div>
    </section>

  );
}

export default HomePage;
