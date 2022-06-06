import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Main className="flex-1 sm:flex-initial sm:order-1" />
      <Footer className="sm:flex-1" />
    </>
  );
}

export default App;
