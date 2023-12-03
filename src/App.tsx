import './App.css';
import Listing, { ListingProps } from './components/Listing';
import etsyData from './data/etsy.json';


function App() {
  const filteredData: (ListingProps['items'][number])[] = etsyData.filter(item => item !== undefined) as (ListingProps['items'][number])[];
  return (
    <Listing items={filteredData} />
  );
}

export default App;
