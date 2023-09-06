import { useEffect, useState } from 'react'
import {
  Logo,
  Brand,
  Eye,
  EyeSlash,
  SwitchLeft,
  SwitchRight,
  Sun,
  Moon
} from '@/assets/svgs'
import { AddBoardBtn } from './AddBoardBtn'
import { useMediaQuery } from '@/hooks/useMediaQuery'
import { SidebarPopup } from './SidebarPopup'
import { BoardListItem } from './BoardListItem'
import data from '@/api/data.json'
import { DarkMode } from '../DarkMode'

type Props = {
  setToggle: (arg: boolean) => void
  toggle: boolean
  setPopupName: (arg: string) => void
  setBoardName: (arg: string) => void
}

export const Sidebar: React.FC<Props> = props => {
  const [toggle, setToggle] = useState(false)
  const smMediaQuery = useMediaQuery(768)
  const [boardSelectedId, setBoardSelectedId] = useState<string | null>(null)
  const [boardItemsTotal, setBoardItemsTotal] = useState<number | null>(null)
  const [firstRun, setFirstRun] = useState(true)

  useEffect(() => {
    if (firstRun) {
      setFirstRun(false)
      // setBoardItemsTotal(Object.values(data.boards).length)
      const firstBoardItem = Object.values(data.boards)[0]
      if (firstBoardItem instanceof Object) {
        // setBoardSelectedId(firstBoardItem.id)
        // props.setBoardName(firstBoardItem.name)
      }
    }

    setToggle(props.toggle)
  }, [props.toggle, firstRun])

  const handleToggle = (active?: boolean) => {
    setToggle(active ? active : !toggle)
    props.setToggle(active ? active : !toggle)
  }

  const handleBoardListItemClick = (id: string, name: string) => {
    setBoardSelectedId(id)
    props.setBoardName(name)
  }

  // const boardItems = result.data?.users[0].boards.map((board, index: any) => {
  //   // setBoardItemsTotal(index + 1)
  //   return (
  //     <BoardListItem
  //       key={index}
  //       id={index}
  //       name={board.name}
  //       boardSelectedId={boardSelectedId}
  //       handleClick={handleBoardListItemClick}
  //     />
  //   )
  // })
  //
  const boardItems = ''

  return (
    <>
      {!toggle && (
        <button
          onClick={() => handleToggle()}
          className="fixed bottom-8 z-20 hidden rounded-r-full bg-primary-500 fill-white py-[19px] pl-4 pr-6 hover:bg-primary-300 sm:block"
        >
          {Eye}
        </button>
      )}
      {toggle && (
        <div>
          {smMediaQuery && (
            <SidebarPopup setSidebarPopupToggle={handleToggle} />
          )}
          <div className="fixed left-0 top-0 z-30 h-screen w-72 -translate-x-full border-r-2 border-secondary-300 bg-white transition-transform dark:border-gray-light dark:bg-gray-normal sm:translate-x-0">
            <div
              className={`flex flex-none items-center justify-start gap-3.5 px-6 py-8`}
            >
              {Logo}
              <div className="hidden fill-black dark:fill-white sm:flex">
                {Brand}
              </div>
            </div>
            <div className="h-full overflow-y-auto py-2 pr-6">
              <span className="px-6 text-h4 text-secondary-500">
                ALL BOARDS ({boardItemsTotal})
              </span>
              <ul className="pt-4">
                {boardItems}
                <li>
                  <AddBoardBtn setPopupName={props.setPopupName} />
                </li>
              </ul>
            </div>
            <div className="flex w-full items-center justify-center">
              <div className="fixed bottom-[90px] rounded-lg bg-secondary-100 px-16 py-4 dark:bg-gray-dark">
                <div className="flex items-center justify-center gap-5">
                  <div className="fill-secondary-500">{Sun}</div>
                  <DarkMode
                    className="fill-primary-500 hover:fill-primary-300"
                    lightIcon={SwitchLeft}
                    darkIcon={SwitchRight}
                  />
                  <div className="fill-secondary-500">{Moon}</div>
                </div>
              </div>
            </div>
            <button
              onClick={() => handleToggle()}
              className="fixed bottom-8 rounded-r-full fill-secondary-500 py-[15px] pl-7 pr-28 text-secondary-500 hover:bg-primary-500 hover:bg-opacity-10 hover:fill-primary-500 hover:text-primary-500 dark:hover:bg-white"
            >
              <div className="flex items-center gap-4 text-h3">
                {EyeSlash} Hide Sidebar
              </div>
            </button>
          </div>
        </div>
      )}
    </>
  )
}
