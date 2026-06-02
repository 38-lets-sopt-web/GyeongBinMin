export type TmdbMovieGenre = {
  id: number
  name: string
}

export type TmdbProductionCountry = {
  iso_3166_1: string
  name: string
}

export type TmdbSpokenLanguage = {
  english_name: string
  iso_639_1: string
  name: string
}

export type TmdbMovieDetailResponse = {
  id: number
  title: string
  original_title: string
  original_language: string
  overview: string
  poster_path: string | null
  backdrop_path: string | null
  release_date: string
  status: string
  runtime: number | null
  vote_average: number
  vote_count: number
  genres: TmdbMovieGenre[]
  production_countries: TmdbProductionCountry[]
  spoken_languages: TmdbSpokenLanguage[]
  budget: number
  revenue: number
}

