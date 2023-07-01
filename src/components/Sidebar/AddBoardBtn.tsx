import { Board } from "@/assets/svgs"

type Props = {
  setPopupName: (arg: string) => void;
};

export default function AddBoardBtn(props: Props) {
  return (
    <>
      <button
        onClick={() => props.setPopupName("add_board")}
        className="rounded-r-full text-secondary-500 hover:text-primary-500 hover:bg-primary-500 hover:bg-opacity-10 fill-secondary-500 hover:fill-primary-500 dark:hover:bg-white w-full"
      >
        <div
          className="flex text-h3 items-center gap-x-4 py-[15px] ml-6 fill-primary-500 text-primary-500"
        >
          {Board()} + Create New Board
        </div>
      </button>
    </>
  )
}
