import styled from 'styled-components';

export const Row = styled.div`
  padding-top: 30px;
  list-style: none;
`;

export const Container = styled.div`
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: line;
  min-width: 0;
  word-wrap: break-word;
  background-color: #fff;
  background-clip: border-box;
  height: 100% !important;
  border-radius: 4px;
  border: 1px solid #eee;
  padding: 15px 10px;
  width: 60%;

  img {
    border-radius: 0.5rem;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
    width: 150px;
    height: 200px;
    border: 2px solid #eee;
  }
`;
export const Body = styled.div`
  -ms-flex: 1 1 auto;
  flex: 1 1 auto;

  margin-left: 15px;

  h5 {
    padding-top: 1rem;
    font-size: 16px;
    height: 48;
    color: #333333;
  }

  p {
    font-size: 14px;
    width: 100%;
    word-break: normal;
    margin-top: 5px;
  }

  a {
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;

    color: #fff;
    background-color: #c0c0c0;
    border-color: #c0c0c0;
  }

  a:hover {
    color: #fff;
    background-color: #808080;
    border-color: #808080;
    text-decoration: none;
  }

}
`;

export const Gap = styled.div`
  padding: 0.5rem 1.25rem;
  height: 2rem;
  color: #495057;
  font-size: 1rem;
  font-weight: 500;
`;
