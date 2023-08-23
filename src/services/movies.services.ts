import { Repository } from "typeorm"
import { Movie } from "../entities";
import { AppDataSource } from "../data-source";
import { MovieCreate, MovieRead, MovieUpdate } from "../interfaces/movies.interfaces";
import { movieCreateSchema } from "../schemas/movie.schema";
import { movieRepo } from "../repositories";

const createMovieService = async (movieData: Movie): Promise<any> => {
  const movie: Movie = movieRepo.create(movieData);

  await movieRepo.save(movie);

  return movie;
};

const retrieveMoviesService = async (): Promise<Movie[]> => {
  const movies = movieRepo.find() // vai trazer todos os livros

  return movies;
};

export { createMovieService, retrieveMoviesService }
