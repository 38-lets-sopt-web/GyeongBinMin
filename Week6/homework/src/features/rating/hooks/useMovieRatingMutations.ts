import { useMutation, useQueryClient } from '@tanstack/react-query'

import { deleteMovieRating, rateMovie } from '@/features/rating/api/rateMovie'
import { ensureGuestSessionId } from '@/features/rating/lib/ensureGuestSession'
import { myMovieRatingQueryKey } from '@/features/rating/hooks/useMyMovieRating'

export function useSaveMovieRating(movieId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async (value: number) => {
      const guestSessionId = await ensureGuestSessionId()
      return await rateMovie({ movieId, guestSessionId, value })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: myMovieRatingQueryKey.byMovieId(movieId),
      })
    },
  })
}

export function useDeleteMovieRating(movieId: number) {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: async () => {
      const guestSessionId = await ensureGuestSessionId()
      return await deleteMovieRating({ movieId, guestSessionId })
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({
        queryKey: myMovieRatingQueryKey.byMovieId(movieId),
      })
    },
  })
}

