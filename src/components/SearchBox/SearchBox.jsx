 const SearchBox = ({ onSubmit }) => {
    return (
      <form onSubmit={event => onSubmit(event)}>
        <input
          type="text"
          name="name"
        />
        <button type="submit">Search</button>
      </form>
    );
  };  

  export default SearchBox;