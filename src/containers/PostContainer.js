import React from "react";
import Button from "../components/Buttons";
import { FlexGrid } from "../components/Styled";
import styled from "styled-components";

const List = styled.section`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

export default function PostContainer({ children }) {
  const ArrayOfChildren = [...children];

  const [page, setPage] = React.useState({
    from: 0,
    to: 9
  });
  const [showing, setShowing] = React.useState(
    ArrayOfChildren.slice(page.from, page.to)
  );

  const getLimitations = () => {
    return [page.from === 0, page.to > ArrayOfChildren.length];
  };

  React.useEffect(() => {
    setShowing(ArrayOfChildren.slice(page.from, page.to));
  }, [page.from]);

  const [prevValidation, nextValidation] = getLimitations();

  const nextPage = () => {
    if (!nextValidation) {
      setPage(p => ({
        from: p.from + 9,
        to: p.to + 9
      }));
    }
  };

  const prevPage = () => {
    if (!prevValidation) {
      setPage(p => ({
        from: p.from - 9,
        to: p.to - 9
      }));
    }
  };

  return (
    <>
      <FlexGrid>
        <p>
          Mostrando desde {page.from || 1} hasta{" "}
          {!nextValidation ? page.to : ArrayOfChildren.length}
        </p>
        <Button disabled={prevValidation} onClick={prevPage}>
          {"<"}
        </Button>
        <Button disabled={nextValidation} onClick={nextPage}>
          {">"}
        </Button>
      </FlexGrid>
      <FlexGrid>
        <List>{showing}</List>
      </FlexGrid>
    </>
  );
}
