"use client";

import { useEffect, useState } from 'react';
import { createClient } from '@/lib/supabase/client';
import { Database } from '@/lib/schema';
import { getQuestions } from '@/lib/supabase/queries';
import Questionnaire from './Questionnaire';

type Question = Database['public']['Tables']['todos']['Row']


export default function Questionnaires() {
  const supabase = createClient();

  const [questions, setQuestions] = useState<Question[]>([]);

  const deleteQuestion = async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id).throwOnError();
      setQuestions(questions.filter((x) => x.id != id));
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    const fetchQuestions = async () => {
      const { questions, error } = await getQuestions(supabase);

      if (error) {
        console.log('error', error);
      } else {
        if (questions) {
          setQuestions(questions);
        }
      }
    }

    if (supabase) {
      fetchQuestions();
    }
  }, [supabase]);

  return (
    <div className="w-full">
      <h1 className="mb-12">Questions List</h1>
      <div className="bg-white shadow overflow-hidden rounded-md">
        <ul>
          {questions.map((question) => (
            <Questionnaire key={question.id} question={question} onDelete={() => deleteQuestion(question.id)} />
          ))}
        </ul>
      </div>
    </div>
  )
}