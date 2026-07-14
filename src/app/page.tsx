import styled from "styled-components";

export default function Home() {
  return (
    <MainStyles>
      <h1>GoodBoy</h1>
      <p>Formulár na podporu slovenských útulkov pre psy.</p>
      <p style={{ opacity: 0.6, fontSize: "0.875rem" }}>
        Základná kostra projektu.
      </p>
    </MainStyles>
  );
}

const MainStyles = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.75rem;
  padding: 2rem;
  text-align: center;
`;
