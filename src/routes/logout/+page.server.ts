import { auth } from '$lib/server/lucia';
import { fail, type Actions, redirect } from '@sveltejs/kit';
import type { PageServerLoad } from '../$types';

export const load: PageServerLoad = async ({ locals }) => {
	const { user } = await locals.auth.validateUser();
	if (!user) throw redirect(302, '/login');
	return {
		user
	};
};

export const actions: Actions = {
	default: async ({ locals }) => {
		const { session } = await locals.auth.validateUser();
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
	}
};
