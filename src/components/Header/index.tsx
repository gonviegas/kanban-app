import { Logo, Brand, Down, Up } from "@/assets/svgs";
import BoardBtn from "./BoardBtn";
import AddTaskBtn from "./AddTaskBtn";

type Props = {
  setPopupName: (arg: string) => void;
  sidebarToggle: boolean;
  setSidebarToggle: (arg: boolean) => void;
  boardName: string;
};

const Header = (props: Props) => {
  return (
    <nav className="">
      <div className="flex items-center relative justify-between top-0 border-b-2 border-secondary-300 dark:border-gray-light z-30 bg-white dark:bg-gray-normal">
        <div className="flex items-center justify-between">
          <button className={`flex flex-none items-center justify-between py-8 sm:gap-3.5 px-6 ${props.sidebarToggle ? "sm:pr-28" : "sm:border-r-2"} border-secondary-300 dark:border-gray-light`}>
            {Logo()}
            <div className="sm:flex hidden fill-black dark:fill-white">
              {Brand()}
            </div>
          </button>
          <div className="flex items-center justify-between sm:px-6 whitespace-nowrap w-full text-black dark:text-white">
            <p className="hidden text-h1 sm:block sm:text-h1">{props.boardName}</p>
            <button onMouseDown={() => props.setSidebarToggle(!props.sidebarToggle)} className="flex items-center text-h1 gap-x-2 sm:hidden">
              <div>
                {props.boardName}
              </div>
              {props.sidebarToggle &&
                <div className="stroke-primary-500">
                  {Up()}
                </div>}
              {!props.sidebarToggle &&
                <div className="stroke-primary-500">
                  {Down()}
                </div>}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex flex-none items-center justify-between px-3 gap-3.5">
            <AddTaskBtn setPopupName={props.setPopupName} />
            <BoardBtn setPopupName={props.setPopupName} />
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Header;
