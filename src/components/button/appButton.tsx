
interface IAppButtonProps {
  onClick: () => void;
  label?: string;
}

export default function AppButton({ onClick, label }: IAppButtonProps) {

  return (

    <button
      className="rounded-[5px] bg-[#FC5959] py-4 flex justify-center items-center text-white font-semibold text-sm"
      onClick={onClick}
    >
      {label && <span className='truncate'>{label}</span>}
    </button>

  )
}