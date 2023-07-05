import { Board } from "@/assets/svgs"

type Props = {
  id: string
  name: any 
  boardSelectedId: string | null
  handleClick: (id: string, name: string) => void
};

export default function BoardListItem(props: Props, {id}: Props ) {
  return (
    <>
      <button
        onClick={() => props.handleClick(props.id, props.name)}
        className={`
         rounded-r-full w-full
         ${props.boardSelectedId === props.id ? "fill-white bg-primary-500" : "fill-secondary-500 hover:bg-opacity-10 hover:fill-primary-500 hover:bg-primary-500 dark:hover:bg-white"} 
        `}
      >
        <div
          className={`
           flex text-h3 items-center gap-x-4 py-[15px] ml-6 
           ${props.boardSelectedId === props.id ? "text-white hover:text-white" : "text-secondary-500 hover:text-primary-500"} 
          `}
        >
          {Board()}
          {props.name}
        </div>
      </button>
    </>
  )
}
