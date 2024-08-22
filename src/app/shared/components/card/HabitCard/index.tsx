import Complete from '@/app/shared/components/card/HabitCard/components/Complete';
import habitCardType from '@/app/shared/types/card/habitCardType';

interface HabitCardProps {
  width?: string;
  data: habitCardType;
}
export default function HabitCard({ width, data }: HabitCardProps) {
  return (
    <div
      className={`${width ? `w-[${width}]` : 'w-full'} p-6 border border-gray-200 rounded flex flex-col gap-12`}
    >
      <div className="flex-col gap-1">
        <h2 className="text-xl text-black font-bold">{data?.title}</h2>
        <p className="text-sm font-normal text-[#5e6d82]">15분 전</p>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-1">
          <Complete />
          <p>{data?.isComplete ? 'Completed' : 'Missed'}</p>
        </div>
        <p>9:30 AM</p>
      </div>
    </div>
  );
}
