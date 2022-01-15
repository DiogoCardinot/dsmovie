import axios from "axios";
import MovieCard from "components/MovieCard";
import Pagination from "components/Pagination";
import { useEffect, useState } from "react";
import { MoviePage } from "types/movie";
import { BASE_URL } from "utils/requests";

function Listing() {
  const [pageNumber, setPageNumber] = useState(0);
  const [page, setPage] = useState<MoviePage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 12,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/movies?size=12&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as MoviePage;
        setPage(data);
      });
  }, [pageNumber]);
  //Deixando o segundo argumento do useEffect vazio ele só roda a função quando carregar a página

  return (
    <>
      <Pagination />

      <div className="container">
        {/* Essa classe container é do bootstrap, ela tem estilização própria e nos ajuda*/}
        <div className="row">
          {page.content.map((movie) => {
            return (
              //Essa classe row é do bootstrap, ela tem estilização própria e nos ajuda
              <div key={movie.id} className="col-sm-6 col-lg-4 col-xl-3 mb-3">
                {/* col-tamanhoDeTela-quantoVaiOcupar das 12 colunas disponíveis*/}
                {/* col-lg-4 cada card vai ocupar 4colunas, ou seja, teremos 3 cards a cada linha para telas large (>= 992px)*/}
                {/*https://getbootstrap.com/docs/4.0/layout/grid/ */}
                {/* Essa classe column é do bootstrap, ela tem estilização própria e nos ajuda*/}
                <MovieCard movie={movie} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
export default Listing;
