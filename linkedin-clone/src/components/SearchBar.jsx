import { useState } from "react";
import { Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";
import { searchFetch } from "../redux/action";
import { useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";


const SearchBar = () => {

    const [searchString, setSearchString] = useState('');

    const dispatch = useDispatch()
    const navigator = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(searchFetch(searchString)) 
        navigator('/search')
    }

    return (
        <Form onSubmit={handleSubmit} className="d-flex d-none d-md-flex align-items-center">
            <InputGroup className="">
                <InputGroup.Text
                    className="d-flex align-items-center ps-3 rounded-start-2 border-0"
                    style={{
                        backgroundColor: "#E6F3F8",
                    }}
                >
                    <FaSearch />
                </InputGroup.Text>
                <Form.Control
                    placeholder="Search"
                    aria-label="Search"
                    style={{ backgroundColor: "#E6F3F8" }}
                    className="w-75 rounded-start-0 border-0"
                    value={searchString}
                    onChange={(e) => setSearchString(e.target.value)}
                />
            </InputGroup>
        </Form>
    );
}


export default SearchBar;