import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';


const SearchBox = styled(Box)   `
    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`
const InputBasee = styled(InputBase) `
    padding-left: 20px;
    width: 100%;
    font-size: unset;
`

const SearchIconWrapper = styled(Box)`
    color: black;
    padding: 5px;
    display: flex;
`

const Search = () => {
    return (
        <SearchBox>
            <InputBasee placeholder="Search for products, brands and more"/>
            <SearchIconWrapper>
                <SearchIcon />
            </SearchIconWrapper>
        </SearchBox>
  )
}

export default Search;
