import "./App.css";
import AppRouter from "./app/AppRouter";
import { Header } from "./shared/Header";

function App() {
  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
}

export default App;
