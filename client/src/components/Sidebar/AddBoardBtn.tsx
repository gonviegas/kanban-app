import { Board } from '@/assets/svgs'

type Props = {
  setPopupName: (arg: string) => void
}

export const AddBoardBtn: React.FC<Props> = props => {
  return (
    <>
      <button
        onClick={() => props.setPopupName('add_board')}
        className="w-full rounded-r-full fill-secondary-500 text-secondary-500 hover:bg-primary-500 hover:bg-opacity-10 hover:fill-primary-500 hover:text-primary-500 dark:hover:bg-white"
      >
        <div className="ml-6 flex items-center gap-x-4 fill-primary-500 py-[15px] text-h3 text-primary-500">
          {Board} + Create New Board
        </div>
      </button>
    </>
  )
}
