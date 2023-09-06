import { Board } from '@/assets/svgs'

type Props = {
  id: string
  name: any
  boardSelectedId: string | null
  handleClick: (id: string, name: string) => void
}

export const BoardListItem: React.FC<Props> = (props, {id}) => {
  return (
    <>
      <button
        onClick={() => props.handleClick(props.id, props.name)}
        className={`
         w-full rounded-r-full
         ${
           props.boardSelectedId === props.id
             ? 'bg-primary-500 fill-white'
             : 'fill-secondary-500 hover:bg-primary-500 hover:bg-opacity-10 hover:fill-primary-500 dark:hover:bg-white'
         } 
        `}
      >
        <div
          className={`
           ml-6 flex items-center gap-x-4 py-[15px] text-h3 
           ${
             props.boardSelectedId === props.id
               ? 'text-white hover:text-white'
               : 'text-secondary-500 hover:text-primary-500'
           } 
          `}
        >
          {Board}
          {props.name}
        </div>
      </button>
    </>
  )
}
