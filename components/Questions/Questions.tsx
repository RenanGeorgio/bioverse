"use client";

import { useEffect, useState, useRef } from 'react';
import { User } from '@supabase/supabase-js';
import { createClient } from '@/lib/supabase/client';
import { Database } from '@/lib/schema';
import { getQuestions, addQuestions } from '@/lib/supabase/queries';

type Question = Database['public']['Tables']['todos']['Row']


export default function QuestionList() {
  const supabase = createClient();

  const userRef = useRef<User>();

  const [questions, setQuestions] = useState<Question[]>([]);
  const [newTaskText, setNewTaskText] = useState('');
  const [errorText, setErrorText] = useState('');

  const addQuestion = async (taskText: string) => {
    const task = taskText.trim();
    if ((task.length) && (userRef.current)) {
      const { todo, error } = await addQuestions(supabase, task, userRef.current?.id);

      if (error) {
        setErrorText(error.message);
      } else {
        setQuestions([...questions, todo]);
        setNewTaskText('');
      }
    }
  }

  const deleteQuestion = async (id: number) => {
    try {
      await supabase.from('todos').delete().eq('id', id).throwOnError();
      setQuestions(questions.filter((x) => x.id != id));
    } catch (error) {
      console.log('error', error);
    }
  }

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { user }
      } = await supabase.auth.getUser();

      if (user) {
        userRef.current = user as User;
      }
    }

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
      fetchUser();
      fetchQuestions();
    }
  }, [supabase]);

  return (
    <div className="w-full">
      <h1 className="mb-12">Questions List</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          addQuestion(newTaskText);
        }}
        className="flex gap-2 my-2"
      >
        <input
          className="rounded w-full p-2"
          type="text"
          placeholder="make coffee"
          value={newTaskText}
          onChange={(e) => {
            setErrorText('');
            setNewTaskText(e.target.value);
          }}
        />
        <button className="btn-black" type="submit">
          Add
        </button>
      </form>
      {!!errorText && <Alert text={errorText} />}
      <div className="bg-white shadow overflow-hidden rounded-md">
        <ul>
          {questions.map((question) => (
            <Question key={question.id} question={question} onDelete={() => deleteQuestion(question.id)} />
          ))}
        </ul>
      </div>
    </div>
  )
}

const Alert = ({ text }: { text: string }) => (
  <div className="rounded-md bg-red-100 p-4 my-3">
    <div className="text-sm leading-5 text-red-700">{text}</div>
  </div>
)