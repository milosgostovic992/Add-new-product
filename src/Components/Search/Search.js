const Search = ({onChange}) => {
    return ( 
        <form action="">
            <input type="search" onChange={(e) => onChange(e.target.value)} />
        </form>
     );
}
 
export default Search;