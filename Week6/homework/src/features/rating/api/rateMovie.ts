import { http } from '@/shared/lib/http'

type RateMovieResponse = {
  status_code: number
  status_message: string
}

export async function rateMovie(params: {
  movieId: number
  guestSessionId: string
  value: number
}): Promise<RateMovieResponse> {
  const { data } = await http.post<RateMovieResponse>(
    `/movie/${params.movieId}/rating`,
    { value: params.value },
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        guest_session_id: params.guestSessionId,
      },
    },
  )

  return data
}

export async function deleteMovieRating(params: {
  movieId: number
  guestSessionId: string
}): Promise<RateMovieResponse> {
  const { data } = await http.delete<RateMovieResponse>(
    `/movie/${params.movieId}/rating`,
    {
      params: {
        api_key: import.meta.env.VITE_API_KEY,
        guest_session_id: params.guestSessionId,
      },
    },
  )

  return data
}

