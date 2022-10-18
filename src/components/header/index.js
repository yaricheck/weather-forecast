import { HeaderContainer, MenuNavbar, SearchInput, MenuButton, SearchContainer, SearchButton, Logo } from './styled';
import { useState } from 'react';

const Header = (props) => {
  const { handleSearch } = props;
  
  const [searchRequest, setSearchRequest] = useState('');

  return (
    <HeaderContainer>
      <MenuNavbar>
        <Logo />
        <SearchContainer>
          <SearchInput 
            placeholder='Search your city...'
            onKeyUp={(e) => e.key === 'Enter' && handleSearch(searchRequest)}
            onChange={(e) => setSearchRequest(e.target.value)}
           />
          <SearchButton onClick={handleSearch}/>
        </SearchContainer>
        <MenuButton>Details</MenuButton>
      </MenuNavbar>
    </HeaderContainer>
  );
}

export default Header;
