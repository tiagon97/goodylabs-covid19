const initState = {
  countries: [
    {
      country: 'England',
      cases: '23000',
      deaths: '1293',
      recovered: '2333',
    },
  ],
  global: [
    {
      totalDeaths: '1244',
    },
  ],
};

const rootReducer = (state = initState, { type, payload }) => {
  if (type === 'ADD_COUNTRY') {
    return {
      countries: [...state.countries, payload],
      global: state.global,
    };
  }
  return state;
};

export default rootReducer;
