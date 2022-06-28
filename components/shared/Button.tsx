type Props = {
  children: any;
  onClick: () => void;
  className?: string;
};

export default function Button({ children, onClick, className = ' ' }: Props) {
  return (
    <button className={`px-7 py-4 rounded-md bg-black shadow-lg text-white ${className}`}>
      {children}
    </button>
  );
}
