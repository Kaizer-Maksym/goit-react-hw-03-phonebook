import styled from '@emotion/styled';

export const ListOfContacts = styled.ul`
  padding: 0;
  list-style: square;
  width: 400px;
`;

export const ContactItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;

  list-style: square;

  :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const BtnOnDelet = styled.button`
  display: block;
  width: 60px;
  height: 20px;
  border-radius: 5px;
  border: 1px solid #dad6d6;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  font-size: 14px;
`;

export const ContactInfo = styled.p`
  font-size: 16px;
  font-weight: 500;
`;
