import { useRef } from "react";
import { useClickOutside } from "../hooks/ClickOutside";

type Props = {
  setSidebarPopupToggle: (arg: boolean) => void;
};

export default function SidebarPopup (props: Props) {
  const sidebarPopup = useRef(null)
  useClickOutside(sidebarPopup, () => props.setSidebarPopupToggle(false))

  return (
    <>
      <div>
        <div className="absolute w-screen h-screen bg-black opacity-40 z-20 top-0" />
        <div className="fixed bg-white py-6 w-[480px] max-w-[94%] z-30 top-1/4 left-1/2 translate-y-[-50%] translate-x-[-50%]" ref={sidebarPopup}>
          <div>
            sidebar popup
          </div>
          <button onClick={() => props.setSidebarPopupToggle(false)} className="rounded-full bg-primary-500 px-6 py-3.5 text-white text-h3 hover:bg-primary-300">
            close 
          </button>
        </div>
      </div>
    </>
  )
}
