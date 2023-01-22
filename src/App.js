import './App.css'
import ExplorePublications from './components/ExplorePublications'
import Header from './components/Header/Header'
import Filter from './components/Filter/Filter'
// import Card from './components/Card/Card'
function App () {
  return (
    <>
      <Header />
      <Filter />
      <ExplorePublications />
      {/* <Card/> */}
    </>
  )
}

export default App
