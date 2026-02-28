export enum RESOURCES {
	USERS = 'users'
}

type RouteProps = {
	BASE: string
	BY_ID: (id: string | number) => string
}

type ROUTES = Record<keyof typeof RESOURCES, RouteProps>

export const API_ROUTES: ROUTES = {
	USERS: {
		BASE: `/${RESOURCES.USERS}`,
		BY_ID: (id: string | number) => `/${RESOURCES.USERS}/${id}`
	}
} as const
