import "./App.css";
import ExplorePublications from "./components/ExplorePublications";
import Header from "./components/Header/Header";
import Filter from "./components/Filter/Filter";

function App() {
  return (
    <>
      <Header />
      <Filter/>
      <ExplorePublications></ExplorePublications>
    </>
  );
}

export default App;
