type Props = {
  children: any;
  onClick: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = ' ' }: Props) {
  return (
    <button
      onClick={onClick}
      className={`rounded-md shadow-lg bg-primary-gray hover:bg-primary-gray-dark text-white ${className}`}>
      {children}
    </button>
  );
}
