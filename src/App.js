import "./App.css"
import Header from "./components/Header";
import BottomLayout from "./components/BottomLayout";
import MiddleLayer from "./components/MiddleLaout";

const App = () =>{
  return (
    <div>
      <Header />
      <MiddleLayer />
      <BottomLayout />
    </div>
  )
}
export default App;