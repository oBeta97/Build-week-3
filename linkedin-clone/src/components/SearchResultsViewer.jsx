import { useSelector } from "react-redux";
import SearchCard from './SearchCard';
import { Alert } from "react-bootstrap";

const SearchResultsViewer = () => {

    const searchResults = useSelector(store => store.searchReducer.content.data)

    return (
        <>
            {
                searchResults ? (
                    searchResults.map(item => {
                        return <SearchCard key={item._id} data={item} />
                    })

                ) : (
                    <Alert variant='primary'>
                        Nessun risultato
                    </Alert>
                )
            }
        </>
    );
};

export default SearchResultsViewer;