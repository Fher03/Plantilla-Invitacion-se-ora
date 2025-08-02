interface CardProps {
  date: string;
  hour: string;
  place: string;
}

export default function Card({ date, hour, place }: CardProps) {
  return (
    <div className="bg-white border-dotted border-4 flex flex-col justify-center items-center w-4/5">
      <p>{date}</p>
      <p>{hour}</p>
      <p>{place}</p>
    </div>
  );
}
