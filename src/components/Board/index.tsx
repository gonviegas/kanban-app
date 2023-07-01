import AddColumnBtn from "./AddColumnBtn"

type Props = {
  setPopupName: (arg: string) => void;
  sidebarToggle: boolean;
};

const Board = (props: Props) => {
  return (
    <div className={`${props.sidebarToggle ? "sm:pl-72" : ""} fixed w-full h-screen top-0 bg-secondary-100 z-0 dark:bg-gray-700`}>
      <AddColumnBtn setPopupName={props.setPopupName} />
    </div>
  )
}

export default Board
