import type { DataType } from '@repo/schemas'
import { apiRequest } from '../request'
import type { ApiActionParams, ApiActionReturn } from '../../types/action'

export async function apiAction<
	T extends DataType,
	D extends DataType = never
>({
	tags,
	successMessage,
	...apiProps
}: ApiActionParams<D>): Promise<ApiActionReturn<T>> {
	const actionReturn: ApiActionReturn<T> = {
		data: null,
		message: successMessage
	}

	const apiRes = await apiRequest<T, D>(apiProps)

	// Tratamento de erros vindo da API
	if ('error' in apiRes) {
		actionReturn.message = apiRes.error.message
	}
	
	if ('errors' in apiRes && apiRes.errors.length > 0) {
		// biome-ignore lint/style/noNonNullAssertion: Just ignore Biome here
		actionReturn.message = apiRes.errors[0]!.message
	}

	if ('data' in apiRes) {
		if (tags) {
			console.log(`[Mobile Cache] Tags disparadas: ${tags.join(', ')}`);	
			// TanStack Query
			// queryClient.invalidateQueries({ queryKey: tags })
		}
		actionReturn.data = apiRes.data
	}
	
	return actionReturn
}