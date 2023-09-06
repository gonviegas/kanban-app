import { Logo, Brand, Down, Up } from '@/assets/svgs'
import { BoardBtn } from './BoardBtn'
import { AddTaskBtn } from './AddTaskBtn'

type Props = {
  setPopupName: (arg: string) => void
  sidebarToggle: boolean
  setSidebarToggle: (arg: boolean) => void
  boardName: string
}

export const Header: React.FC<Props> = props => {
  return (
    <nav className="">
      <div className="relative top-0 z-30 flex items-center justify-between border-b-2 border-secondary-300 bg-white dark:border-gray-light dark:bg-gray-normal">
        <div className="flex items-center justify-between">
          <button
            className={`flex flex-none items-center justify-between px-6 py-8 sm:gap-3.5 ${
              props.sidebarToggle ? 'sm:pr-28' : 'sm:border-r-2'
            } border-secondary-300 dark:border-gray-light`}
          >
            {Logo}
            <div className="hidden fill-black dark:fill-white sm:flex">
              {Brand}
            </div>
          </button>
          <div className="flex w-full items-center justify-between whitespace-nowrap text-black dark:text-white sm:px-6">
            <p className="hidden text-h1 sm:block sm:text-h1">
              {props.boardName}
            </p>
            <button
              onMouseDown={() => props.setSidebarToggle(!props.sidebarToggle)}
              className="flex items-center gap-x-2 text-h1 sm:hidden"
            >
              <div>{props.boardName}</div>
              {props.sidebarToggle && (
                <div className="stroke-primary-500">{Up}</div>
              )}
              {!props.sidebarToggle && (
                <div className="stroke-primary-500">{Down}</div>
              )}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-none items-center justify-between gap-3.5 px-3">
            <AddTaskBtn setPopupName={props.setPopupName} />
            <BoardBtn setPopupName={props.setPopupName} />
          </div>
        </div>
      </div>
    </nav>
  )
}
