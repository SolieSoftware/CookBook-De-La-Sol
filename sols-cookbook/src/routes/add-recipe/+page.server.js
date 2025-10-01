import * as db from '$lib/server/supabase.ts';
import { fail, redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	let id = cookies.get('userid');

	if (!id) {
		id = crypto.randomUUID();
		cookies.set('userid', id, { path: '/' });
	}

	try {
		const recipes = await db.getRecipes(id);
		return {
			recipes
		};
	} catch (error) {
		console.error('Error loading recipes:', error);
		return {
			recipes: []
		};
	}
}

export const actions = {
	create: async ({ cookies, request }) => {
		const userId = cookies.get('userid');

		if (!userId) {
			return fail(401, { message: 'User not authenticated' });
		}

		try {
			const formData = await request.formData();
			const title = formData.get('title');
			const description = formData.get('description');

			if (!title || !description) {
				return fail(400, {
					message: 'Title and description are required',
					title: title?.toString(),
					description: description?.toString()
				});
			}

			const recipe = await db.createRecipe(
				userId,
				description.toString(),
				title.toString()
			);

			console.log('Recipe created successfully:', recipe);

			// Redirect to a success page or back to recipes list
			throw redirect(303, '/add-recipe?success=true');

		} catch (error) {
			// If it's a redirect, let it through
			if (error instanceof Response) {
				throw error;
			}

			console.error('Error creating recipe:', error);
			return fail(500, {
				message: 'Failed to create recipe. Please try again.'
			});
		}
	},

	delete: async ({ cookies, request }) => {
		const userId = cookies.get('userid');

		if (!userId) {
			return fail(401, { message: 'User not authenticated' });
		}

		try {
			const formData = await request.formData();
			const recipeId = formData.get('id');

			if (!recipeId) {
				return fail(400, { message: 'Recipe ID is required' });
			}

			await db.deleteRecipe(userId, recipeId.toString());

			return { success: true };

		} catch (error) {
			console.error('Error deleting recipe:', error);
			return fail(500, {
				message: 'Failed to delete recipe. Please try again.'
			});
		}
	}
};
