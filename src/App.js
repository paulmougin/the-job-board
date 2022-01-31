import "./App.css";
import Header from "./Components/Header";
import Jobs from "./Components/Jobs";
import Footer from "./Components/Footer";
import Title from "./Components/Title";

const App = () => {
  return (
    <div className="Wrapper">
      <Header title="Hello title" />
      <Jobs />
      <Footer />
    </div>
  );
};

export default App;
