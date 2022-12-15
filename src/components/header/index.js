import { HeaderContainer, MenuNavbar, SearchInput, MenuButton, SearchContainer, SearchButton, LogoText, ErrorPopup } from './styled';
import React, { useRef, useState } from 'react';
import { Flex } from '../utilities/styled';

const Header = (props) => {
  const { onSearch } = props;

  const [isCorrect, setIsCorrect] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const searchInputRef = useRef(null);

  const handleSearch = () => {
    searchInputRef.current.blur();
    if (searchQuery.trim() === '') {
      setIsCorrect(false);
      return;
    }
    onSearch(searchQuery);
  }

  const handleChange = (e) => {
    if (!isCorrect) setIsCorrect(true);
    setSearchQuery(e.target.value);
  }

  const handleClick = (pathname) => {
    window.location.pathname = pathname;
  }

  return (
    <HeaderContainer>
      <MenuNavbar>
        <Flex>
          <LogoText>weather forecast</LogoText>
          <SearchContainer correct={isCorrect}>
            <SearchInput 
              ref={searchInputRef}
              placeholder='Search your city...'
              onKeyUp={(e) => e.key === 'Enter' && handleSearch()}
              onClick={handleChange}
              onChange={handleChange}
             />
            <SearchButton onClick={handleSearch}>&#x1F50E;&#xFE0E;</SearchButton>
            { !isCorrect && <ErrorPopup>Search field cannot be empty</ErrorPopup> }
          </SearchContainer>
        </Flex>
        <MenuButton onClick={() => handleClick('')}>Weather</MenuButton>
        <MenuButton onClick={() => handleClick('/details')}>News</MenuButton>
        <MenuButton onClick={() => handleClick('/about')}>About</MenuButton>
      </MenuNavbar>
    </HeaderContainer>
  );
}

export default Header;
