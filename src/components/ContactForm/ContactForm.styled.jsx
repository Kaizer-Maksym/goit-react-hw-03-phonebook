import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormStyle = styled(Form)`
  display: flex;
  flex-direction: column;
  border: 1px solid #000000;
  padding: 20px;
`;

export const FormBtn = styled.button`
  display: block;
  width: 100px;
  height: 25px;
  border-radius: 5px;
  border: 1px solid #dad6d6;
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.3);

  font-size: 14px;
`;

export const InputContact = styled(Field)`
  margin-bottom: 25px;
  width: 250px;
  height: 25px;
`;

export const FormText = styled.p`
  margin-bottom: 10px;
  font-size: 16px;
  font-weight: 400;
`;
