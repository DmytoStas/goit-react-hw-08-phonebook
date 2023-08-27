import styled from '@emotion/styled';

const ContactsListUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItemWrapp = styled.li`
  gap: 20px;
  margin-top: 12px;
  align-items: center;
  &:first-of-type {
    margin-top: 0;
  }
`;

export { ContactsListUl, ListItemWrapp };
