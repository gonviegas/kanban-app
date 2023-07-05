import { AddColumnBtn } from "./AddColumnBtn"

type Props = {
  setPopupName: (arg: string) => void;
  sidebarToggle: boolean;
};

export const Board: React.FC<Props> = (props) => {
  return (
    <div
      className={
        `${props.sidebarToggle ? "sm:pl-72" : ""} fixed w-full h-screen top-0 bg-secondary-100 z-0 dark:bg-gray-dark`
      }>
      <AddColumnBtn
        setPopupName={props.setPopupName}
      />
    </div>
  )
}
