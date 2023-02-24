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
      <div
        className="banner"
        style={{
          backgroundImage: 'url(\'https://images.unsplash.com/photo-1610398000003-8b8b2b2e1b1c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80\')',
        }}
      >
        <div className="banner-content">
          <h1 className="text-4xl font-bold text-white">Welcome to Country App</h1>
          <p className="text-white">Find out more about your country</p>
        </div>
      </div>

      <div className="flex flex-col items-center justify-start p-4 pt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:grid-cols-2 md:grid-cols-2 grid-two-cloumns">
          {filteredCountries.map((country) => (
            <div key={country.alpha2Code} className="border rounded-lg  ">
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
