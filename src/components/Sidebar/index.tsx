import { useEffect, useState } from "react";
import { Logo, Brand, Eye, EyeSlash, SwitchLeft, SwitchRight, Sun, Moon } from "@/assets/svgs";
import { getLocalStorage, setLocalStorage, removeDocumentClass, addDocumentClass } from "@/helpers";
import AddBoardBtn from "./AddBoardBtn";
import { useMediaQuery } from "../hooks/useMediaQuery";
import SidebarPopup from "./SidebarPopup";
import BoardListItem from "./BoardListItem";
import data from '@/pages/api/data.json';

type Props = {
  setToggle: (arg: boolean) => void
  toggle: boolean
  setPopupName: (arg: string) => void
  setBoardName: (arg: string) => void
};


export default function Sidebar(props: Props) {
  const [toggle, setToggle] = useState(false)
  const [darkMode, setDarkMode] = useState(getLocalStorage('theme') === 'light' ? false : true)
  const smMediaQuery = useMediaQuery(768)
  const [boardSelectedId, setBoardSelectedId] = useState<string | null>(null)
  const [boardItemsTotal, setBoardItemsTotal] = useState<number | null>(null)
  const [firstRun, setFirstRun] = useState(true)

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false)
      setBoardItemsTotal(Object.values(data.boards).length)
      const firstBoardItem = Object.values(data.boards)[0]
      if (firstBoardItem instanceof Object) {
        setBoardSelectedId(firstBoardItem.id)
        props.setBoardName(firstBoardItem.name)
      }

    }

    setToggle(props.toggle);
  }, [props.toggle, firstRun])

  const handleDarkModeToggle = () => {
    if (darkMode) {
      setLocalStorage('theme', 'light')
      removeDocumentClass('dark')
    } else {
      setLocalStorage('theme', 'dark')
      addDocumentClass('dark')
    }

    setDarkMode(!darkMode)
  }

  const handleToggle = (active?: boolean) => {
    setToggle(active ? active : !toggle);
    props.setToggle(active ? active : !toggle)
  }

  const handleBoardListItemClick = (id: string, name: string) => {
    setBoardSelectedId(id)
    props.setBoardName(name)
  }

  const boardItems = Object.keys(data.boards).map((i) => {
    const board = data.boards[i]
    return (
      <BoardListItem
        key={i}
        id={board.id}
        name={board.name}
        boardSelectedId={boardSelectedId}
        handleClick={handleBoardListItemClick}
      />
    )
  })

  return (
    <>
      {!toggle &&
        <button onClick={() => handleToggle()} className="hidden fixed bottom-8 rounded-r-full bg-primary-500 pr-6 pl-4 py-[19px] hover:bg-primary-300 sm:block fill-white z-20">{Eye()}</button>}
      {toggle &&
        <div>
          {smMediaQuery &&
            <SidebarPopup setSidebarPopupToggle={handleToggle} />
          }
          <div className="fixed top-0 left-0 z-30 w-72 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-white border-r-2 border-secondary-300 dark:bg-gray-500 dark:border-gray-300">
            <div className={`flex flex-none items-center justify-start py-8 px-6 gap-3.5`}>
              {Logo()}
              <div className="sm:flex hidden fill-black dark:fill-white">
                {Brand()}
              </div>
            </div>
            <div className="h-full py-2 overflow-y-auto pr-6">
              <span className="text-h4 text-secondary-500 px-6">ALL BOARDS ({boardItemsTotal})</span>
              <ul
                className="pt-4"
              >
                {boardItems}
                <li>
                  <AddBoardBtn setPopupName={props.setPopupName} />
                </li>
              </ul>
            </div>
            <div className="flex items-center justify-center w-full">
              <div className="fixed bottom-[90px] rounded-lg px-16 py-4 bg-secondary-100 dark:bg-gray-700">
                <div className="flex gap-5 items-center justify-center">
                  <div className="fill-secondary-500">
                    {Sun()}
                  </div>
                  <button onClick={handleDarkModeToggle} className="fill-primary-500 hover:fill-primary-300">
                    {!darkMode && SwitchLeft()}
                    {darkMode && SwitchRight()}
                  </button>
                  <div className="fill-secondary-500">
                    {Moon()}
                  </div>
                </div>
              </div>
            </div>
            <button onClick={() => handleToggle()} className="fixed bottom-8 rounded-r-full text-secondary-500 hover:text-primary-500 hover:bg-primary-500 hover:bg-opacity-10 pr-28 py-[15px] pl-7 fill-secondary-500 hover:fill-primary-500 dark:hover:bg-white">
              <div className="flex gap-4 text-h3 items-center">
                {EyeSlash()} Hide Sidebar
              </div>
            </button>
          </div>
        </div>
      }
    </>
  )
}
