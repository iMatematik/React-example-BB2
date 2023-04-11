import './SearchResult.css'
// Define the SearchResult component
export default function SearchResult(props) {
  const { data } = props;

  return (
    <div>
      <h3>Search Result:</h3>
      <ul>
        {data.map((item, index) => (
          <li key={index}>
            {item['full name']} ({item['city']})
          </li>
        ))}
      </ul>
    </div>
  );
}

