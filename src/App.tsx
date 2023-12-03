import './App.css';
import Listing, { ListingProps } from './components/Listing';
import etsyData from './data/etsy.json';


function App() {
  const data: ListingProps['items'] = etsyData;
  return (
    <Listing items={data} />
  );
}

export default App;
