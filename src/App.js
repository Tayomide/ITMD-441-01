import styled from "styled-components"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import { Assg1 } from "./Assignments/Assg1";
import { Lab4 } from "./Assignments/Lab4";

const App = () => {
  return (
    <Container>
      <Router>
        <Routes>
          <Route exact path="/" element={ <Assg1 /> } />
          <Route exact path="/weather" element={ <Lab4 /> } />
        </Routes>
      </Router>
    </Container>
  );
}

export default App;

const Container = styled.div``