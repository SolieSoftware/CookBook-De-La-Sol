import { createClient } from '@supabase/supabase-js';
// import { SUPABASE_URL, SUPABASE_ANON_KEY } from '$env/static/private'

const SUPABASE_URL = "https://mwvzwfotlquvpyxtralu.supabase.co"
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im13dnp3Zm90bHF1dnB5eHRyYWx1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkyNDgwMDMsImV4cCI6MjA3NDgyNDAwM30.JWlXiyXNG1bt3Q2qmT0VlSAb6QXAhm6-mIg298EjDHQ";

if (!SUPABASE_URL || !SUPABASE_ANON_KEY) {
  throw new Error('SUPABASE_URL and SUPABASE_ANON_KEY must be set');
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Recipe-related database functions
export async function getRecipes(userId: string) {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('user_id', userId)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching recipes:', error);
      return [];
    }

    return data || [];
  } catch (err) {
    console.error('Error in getRecipes:', err);
    return [];
  }
}

export async function createRecipe(userId: string, recipeData: string, title?: string) {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .insert([
        {
          user_id: userId,
          title: title || 'Untitled Recipe',
          content: recipeData,
          created_at: new Date().toISOString()
        }
      ])
      .select();

    if (error) {
      console.error('Error creating recipe:', error);
      throw error;
    }

    return data?.[0];
  } catch (err) {
    console.error('Error in createRecipe:', err);
    throw err;
  }
}

export async function deleteRecipe(userId: string, recipeId: string) {
  try {
    const { error } = await supabase
      .from('recipes')
      .delete()
      .eq('id', recipeId)
      .eq('user_id', userId); // Ensure users can only delete their own recipes

    if (error) {
      console.error('Error deleting recipe:', error);
      throw error;
    }

    return { success: true };
  } catch (err) {
    console.error('Error in deleteRecipe:', err);
    throw err;
  }
}

export async function getRecipe(userId: string, recipeId: string) {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .select('*')
      .eq('id', recipeId)
      .eq('user_id', userId)
      .single();

    if (error) {
      console.error('Error fetching recipe:', error);
      return null;
    }

    return data;
  } catch (err) {
    console.error('Error in getRecipe:', err);
    return null;
  }
}

export async function updateRecipe(
  userId: string,
  recipeId: string,
  updates: { title?: string; content?: string }
) {
  try {
    const { data, error } = await supabase
      .from('recipes')
      .update({
        ...updates,
        updated_at: new Date().toISOString()
      })
      .eq('id', recipeId)
      .eq('user_id', userId)
      .select();

    if (error) {
      console.error('Error updating recipe:', error);
      throw error;
    }

    return data?.[0];
  } catch (err) {
    console.error('Error in updateRecipe:', err);
    throw err;
  }
}
