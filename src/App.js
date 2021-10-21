import gql from 'graphql-tag' //to parse graphql queries 
import { useGQLQuery } from './useGraphQL';

const GET_COUNTRIES = gql`
  query{
    countries{
      code
      name
    }
  }
`;

const GET_COUNTRY = gql`
    query($code: ID!){   
      country(code : $code){
        name 
      }                       
    }
`
//ID is the type
const App = () => {

  const{data, isLoading,error} = useGQLQuery('countries',GET_COUNTRY, {
    code : 'SE'
  })
  console.log(data);

  if(isLoading) return <div>Loading.....</div>
  if(error) return <div>something went wrong </div>
  return (
    <div> Country : {data.country.name}
       {/*data.countries.map(country =>(
         <div key={country.name}>{country.name}</div>
       ))*/}
    </div>
  );
}

export default App;
