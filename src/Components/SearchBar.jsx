import '../Styles/searchBar.css'

const SearchBar = ({ search, handleChange}) => {

  return (
    <div className="search">
        <input 
          type="text" 
          name="search" 
          value={search} 
          onChange={handleChange} 
          placeholder="What do you want to watch?"
        />
    </div>
  )
}

export default SearchBar