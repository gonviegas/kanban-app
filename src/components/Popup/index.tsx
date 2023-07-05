import { useRef } from "react"
import { useClickOutside } from "@/hooks/ClickOutside"
import AddColumn from "./AddColumn";
import AddTask from "./AddTask";
import EditBoard from "./EditBoard";
import DeleteBoard from "./DeleteBoard";
import AddBoard from "./AddBoard"
import { Login } from "./Login"

type Props = {
  popupName: string
  setPopupName: (arg: string) => void;
};

const Popup = (props: Props) => {
  const popupMenu = useRef(null)
  useClickOutside(popupMenu, () => props.setPopupName(""))

  return (
    <>
      <div className="absolute w-screen h-screen bg-black opacity-40 z-30 top-0" />
      <div
        className={
          `${props.popupName === "login" ? "w-[600px] outline outline-zinc-500 dark:outline-zinc-600 outline-1 outline-offset-0" :  "w-[480px]"} fixed bg-white dark:bg-gray-normal rounded-md max-w-[94%] z-50 top-1/2 left-1/2 translate-y-[-50%] translate-x-[-50%]`
        }
        ref={popupMenu}
      >
        {props.popupName === "login" &&
          <Login popupName={props.popupName} setPopupName={props.setPopupName} />
        }
        <AddColumn popupName={props.popupName} setPopupName={props.setPopupName} />
        <AddTask popupName={props.popupName} setPopupName={props.setPopupName} />
        <EditBoard popupName={props.popupName} setPopupName={props.setPopupName} />
        <DeleteBoard popupName={props.popupName} setPopupName={props.setPopupName} />
        {props.popupName === "add_board" &&
          <AddBoard setPopupName={props.setPopupName} />
        }
      </div>
    </>
  )
}

export default Popup;
