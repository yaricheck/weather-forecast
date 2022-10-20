import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 64px;
  background-color: #eee;
  padding: 10px;
  box-sizing: border-box;
`;

export const MenuNavbar = styled.div`
  width: 1024px;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
`;

export const Logo = styled.img`
  background: radial-gradient(circle,black -80%,#eee 70%);
  height: 40px;
`;

export const LogoText = styled.h2`
  font-family: 'Raleway';
  margin: auto 10px;
  font-size: 30px;
`;

export const MenuButton = styled.button`
  cursor: pointer;
  border: 1px solid #999 !important;
  border-radius: 30px;
  outline: none;
  background: #ccc;
  font-size: 20px;
  padding: 0 20px;
  font-family: 'Raleway';
  font-weight: bold;
  :hover {
    opacity: 0.9;
  }
  :active {
    background-color: #999;
    color: white;
  }
`;

export const SearchInput = styled.input`
  border: 0px !important;
  outline: none;
`;

export const SearchContainer = styled.div`
  display: flex;
  border: 1px solid ${(props) => props.correct ? '#999' : '#f55'};
  padding: 6px 6px 6px 15px;
  border-radius: 30px;
  background: white;
  margin: 0 50px;
`;

export const SearchButton = styled(MenuButton)`
  font-size: 15px;
  padding: 5px 8px;
`;

const ErrorPopupBorder = styled.div`
  clip-path: polygon(50% 0%, 55% 10%, 100% 10%, 100% 100%, 0 100%, 0 10%, 45% 10%);
  width: fit-content;
  height: fit-content;
  position: fixed;
  margin: 54px 0px 0px -14px;
  background-color: #f55;
  padding: 1px;
`;

const ErrorPopupContent = styled.div`
  background-color: #eee;
  padding: 10px;
  clip-path: inherit;
`;

export const ErrorPopup = (props) => {
  return (
    <ErrorPopupBorder>
      <ErrorPopupContent>
        {props.children}
      </ErrorPopupContent>
    </ErrorPopupBorder>
  )
}

