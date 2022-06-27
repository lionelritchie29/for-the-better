type Props = {
  children: any;
  onClick: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = ' ' }: Props) {
  return (
    <button
      style={{ backgroundColor: '#A8A6A1' }}
      className={`px-7 py-4 rounded-md bg-gray-600 text-white ${className}`}>
      {children}
    </button>
  );
}
