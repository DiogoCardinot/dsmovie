import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { BASE_URL } from "utils/requests";

function Listing() {
  //FORMA ERRADA
  axios.get(`${BASE_URL}/movies?size=12&page=0`).then((response) => {
    console.log(response.data);
  });

  return (
    <>
      <Pagination />

      <div className="container">
        {/* Essa classe container é do bootstrap, ela tem estilização própria e nos ajuda*/}
        <div className="row">
          {/* Essa classe row é do bootstrap, ela tem estilização própria e nos ajuda*/}
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            {/* col-tamanhoDeTela-quantoVaiOcupar das 12 colunas disponíveis*/}
            {/* col-lg-4 cada card vai ocupar 4colunas, ou seja, teremos 3 cards a cada linha para telas large (>= 992px)*/}
            {/*https://getbootstrap.com/docs/4.0/layout/grid/ */}
            {/* Essa classe column é do bootstrap, ela tem estilização própria e nos ajuda*/}
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            {/* col-tamanhoDeTela-quantoVaiOcupar das 12 colunas disponíveis*/}
            {/* col-lg-4 cada card vai ocupar 4colunas, ou seja, teremos 3 cards a cada linha para telas large (>= 992px)*/}
            {/*https://getbootstrap.com/docs/4.0/layout/grid/ */}
            {/* Essa classe column é do bootstrap, ela tem estilização própria e nos ajuda*/}
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            {/* col-tamanhoDeTela-quantoVaiOcupar das 12 colunas disponíveis*/}
            {/* col-lg-4 cada card vai ocupar 4colunas, ou seja, teremos 3 cards a cada linha para telas large (>= 992px)*/}
            {/*https://getbootstrap.com/docs/4.0/layout/grid/ */}
            {/* Essa classe column é do bootstrap, ela tem estilização própria e nos ajuda*/}
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            {/* col-tamanhoDeTela-quantoVaiOcupar das 12 colunas disponíveis*/}
            {/* col-lg-4 cada card vai ocupar 4colunas, ou seja, teremos 3 cards a cada linha para telas large (>= 992px)*/}
            {/*https://getbootstrap.com/docs/4.0/layout/grid/ */}
            {/* Essa classe column é do bootstrap, ela tem estilização própria e nos ajuda*/}
            <MovieCard />
          </div>
          <div className="col-sm-6 col-lg-4 col-xl-3 mb-3">
            {/* col-tamanhoDeTela-quantoVaiOcupar das 12 colunas disponíveis*/}
            {/* col-lg-4 cada card vai ocupar 4colunas, ou seja, teremos 3 cards a cada linha para telas large (>= 992px)*/}
            {/*https://getbootstrap.com/docs/4.0/layout/grid/ */}
            {/* Essa classe column é do bootstrap, ela tem estilização própria e nos ajuda*/}
            <MovieCard />
          </div>
        </div>
      </div>
    </>
  );
}
export default Listing;
