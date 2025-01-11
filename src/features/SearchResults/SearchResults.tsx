import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';

export default function SearchResults() {
  const searchQuery = useSelector((state: any) => state.search.searchQuery);
  const location = useLocation();

  return (
    <div style={{ padding: '20px' }}>
      <h2>Search Results for "{searchQuery}"</h2>
      <p>Results based on query: {location.state?.query}</p>
      {/* TODO: Map and display relevant search results */}
    </div>
  );
}
