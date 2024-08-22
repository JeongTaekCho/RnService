'use client';

import HabitCard from '@/app/shared/components/card/HabitCard';

const HABIT_LIST = [
  {
    title: '100KM 달리기',
    complete_time: '2024-08-22T07:39:06.978Z',
    isComplete: true,
    createdAt: '2024-08-21T07:39:06.978Z',
  },
  {
    title: '200KM 달리기',
    complete_time: '2024-08-22T07:39:06.978Z',
    isComplete: true,
    createdAt: '2024-08-21T07:39:06.978Z',
  },
  {
    title: '300KM 달리기',
    complete_time: '2024-08-22T07:39:06.978Z',
    isComplete: true,
    createdAt: '2024-08-21T07:39:06.978Z',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col gap-2 py-4">
      {HABIT_LIST.map((item) => (
        <HabitCard data={item} />
      ))}
    </div>
  );
}
