import { BrowserRouter, Routes, Route } from "react-router-dom";
import Listing from "pages/Listing";
import Form from "pages/Form";
import Navbar from "components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/*O navbar/header está fora das rotas prq toda página vai ter o header, logo ele n precisa ser alterado independentemente da rota */}
      <Routes>
        <Route path="/" element={<Listing />} />
        {/* A rota raiz "/" está configurada para abrir a página raiz, ou seja, a página listing onde estarão os filmes listados*/}
        <Route path="/form">
          <Route path=":movieId" element={<Form />} />
          {/* /form/idDoFilmeClicado */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
