type Props = {
  text: string;
  onClick: () => void;
  size? : 'big' | 'small'
};

export default function ColorButton({ text, onClick , size ='small'}: Props) {
  return (
    <div className={`${size === 'big' ? 'p-[0.3rem]' : 'p-[0.15rem]'} rounded-md bg-gradient-to-bl from-fuchsia-600 via-rose-500 to-amber-300`}>
      <button
        className={`bg-white rounded-sm hover:opacity-90 transition-opacity ${size === 'big' ? 'p4- text-2xl' : 'text-base p-[0.3rem]'}`}
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}
