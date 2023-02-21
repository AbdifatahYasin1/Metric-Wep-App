import React from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';

function DetailsPage() {
  const { countries } = useSelector((state) => state.countries);
  const { alpha2Code } = useParams();
  const navigate = useNavigate();
  const country = countries.find((c) => c.alpha2Code === alpha2Code);

  if (!country) {
    return <div className="text-center">Country not found</div>;
  }

  return (
    <section className="bg-gray-100">
      <div className="flex items-center justify-between p-4">
        <FiChevronLeft
          className="text-2xl text-gray-500 cursor-pointer"
          onClick={() => navigate(-1)}
        />
        <h1 className="text-2xl font-bold text-gray-800">{country.name}</h1>
        <div />
      </div>
      <div className="flex flex-col items-center justify-center">
        <img src={country.flag} alt={country.name} className="w-1/2" />
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold text-gray-800">{country.name}</h1>
          <p className="text-gray-500">{country.capital}</p>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Population</h1>
            <p className="text-gray-500">{country.population}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Region</h1>
            <p className="text-gray-500">{country.region}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Sub Region</h1>
            <p className="text-gray-500">{country.subregion}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Capital</h1>
            <p className="text-gray-500">{country.capital}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Top Level Domain</h1>
            <p className="text-gray-500">{country.topLevelDomain}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Currencies</h1>
            <p className="text-gray-500">{country.currencies[0].name}</p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <h1 className="text-xl font-bold text-gray-800">Languages</h1>
            <p className="text-gray-500">{country.languages[0].name}</p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-xl font-bold text-gray-800">Border Countries</h1>
          <div className="flex flex-wrap items-center justify-center">
            {country.borders.map((border) => (
              <div
                key={border}
                className="bg-gray-200 text-gray-800 text-center font-bold rounded-full px-4 py-2 m-2"
              >
                {border}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

  );
}

export default DetailsPage;
