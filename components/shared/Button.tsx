type Props = {
  children: any;
  onClick: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = ' ' }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md bg-black hover:bg-gray-900 shadow-lg text-white ${className}`}>
      {children}
    </button>
  );
}
