import { cache } from 'react';
import { SupabaseClient } from '@supabase/supabase-js';


export const getUser = cache(async (supabase: SupabaseClient) => {
  const {
    data: { user }
  } = await supabase.auth.getUser();

  return user;
});

export const getQuestions = cache(async (supabase: SupabaseClient) => {
  const { data: questions, error } = await supabase
    .from('todos')
    .select('*')
    .order('id', { ascending: true });

  return { questions, error };
});

export const addQuestions = async (supabase: SupabaseClient, task: string, id: string | number) => {
    const { data: todo, error } = await supabase
        .from('todos')
        .insert({ task, user_id: id })
        .select()
        .single();
  
    return { todo, error };
};

export const updateQuestion = cache(async (supabase: SupabaseClient, isCompleted: boolean, id: string | number) => {
    const { data } = await supabase
        .from('todos')
        .update({ is_complete: !isCompleted })
        .eq('id', id)
        .throwOnError()
        .select()
        .single();
  
    return data;
});