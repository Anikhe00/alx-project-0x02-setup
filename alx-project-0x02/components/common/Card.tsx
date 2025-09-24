import { type CardProps } from "@/interfaces";

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="border rounded-lg p-4 shadow">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="text-gray-600">{content}</p>
    </div>
  );
};

export default Card;
