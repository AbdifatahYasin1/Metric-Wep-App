import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { FaGlobe } from 'react-icons/fa';
import { fetchCountries } from '../redux/slices/countriesSlice';

function Home() {
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
      <nav
        className="
      shadow-xl fixed top-0 left-0 right-0 z-10 -mt-4
      nav"
      >
        <div className="py-3 flex items-center justify-between mt-4 text-center">
          <FaGlobe
            className="
        text-4xl text-teal-500 ml-2 mr-4 animate-bounce animate-pulse animate-infinite text-white
        "
          />
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleSearch}
            className="w-full md:w-64 lg:w-96 p-2 mr-4 rounded-lg border
        focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent nav
          "
          />
        </div>
      </nav>
      <div className="flex flex-col items-center justify-start p-4 pt-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 ">
          {filteredCountries.map((country) => (
            <div key={country.alpha2Code} className="border rounded-lg ">
              <Link to={`/details/${country.alpha2Code}`}>
                <img
                  src={country.flag}
                  alt={country.name}
                  className="w-full h-52 mx-auto mg-2 object-cover "
                />
                <p className="  rounded text-center text-lg">
                  {country.name}
                </p>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Home;
