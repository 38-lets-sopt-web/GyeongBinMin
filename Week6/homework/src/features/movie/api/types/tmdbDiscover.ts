export type TmdbDiscoverMovie = {
  id: number
  title: string
  overview: string
  poster_path: string | null
  release_date: string
  vote_average: number
}

export type TmdbDiscoverResponse = {
  page: number
  results: TmdbDiscoverMovie[]
  total_pages: number
  total_results: number
}
