import "./App.css";
import Header from "./Components/Header";
import Jobs from "./Components/Jobs";
import Footer from "./Components/Footer";
import Title from "./Components/Title";

const App = () => {
  return (
    <div className="Wrapper">
      <Header title="The Job Board" />
      <div className="Jobs-Wrapper">
        <Jobs
          title="Full Time Sales Associate - Sydney Boutique"
          contractType="CDI・"
          country="Australie・"
          city="Sydney"
        />
        <Jobs
          title="Agent de Sécurité - Pantin"
          contractType="CDI・"
          country="France・"
          city="Pantin"
        />
        <Jobs
          title="Responsable d'Atelier (H/F)"
          contractType="CDI・"
          country="France・"
          city="Paris"
        />
        <Jobs
          title="Chef de Projets"
          contractType="CDI・"
          country="France・"
          city="Paris"
        />
        <Jobs
          title="Développeur React.js"
          contractType="CDI・"
          country="France・"
          city="Paris"
        />
        <Jobs
          title="Sales Associate Stockholm"
          contractType="CDI・"
          country="Suède・"
          city="Stockholm"
        />
        <Jobs
          title="Vendeur/se - Crans Montana"
          contractType="CDI・"
          country="Suisse・"
          city="Crans-Montana"
        />
        <Jobs
          title="CRM & Data Quality Analyst"
          contractType="CDI・"
          country="USA・"
          city="New York"
        />
        <Jobs
          title="Infirmier (H/F)"
          contractType="CDI・"
          country="France・"
          city="Pantin"
        />
      </div>
      <Footer />
    </div>
  );
};

export default App;
