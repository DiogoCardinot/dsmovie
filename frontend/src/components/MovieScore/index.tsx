import MovieStars from "components/MovieStars";
import "./styles.css";

type Props = {
  score: number;
  count: number;
};

function MovieScore({ score, count }: Props) {
  return (
    <div className="dsmovie-score-container">
      <p className="dsmovie-score-value">
        {score > 0 ? score.toFixed(1) : "-"}
        {/*Se o score for maior que 0 ele pega o score e o toFixed(1) arredonda com apenas 1 casa decimal, caso não seja maior que 0 vai mostrar apenas um '-' */}
      </p>
      <MovieStars score={score} />
      <p className="dsmovie-score-count">{count} avaliações</p>
    </div>
  );
}

export default MovieScore;
