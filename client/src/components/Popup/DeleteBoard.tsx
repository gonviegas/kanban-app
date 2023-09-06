type Props = {
  popupName: string
  setPopupName: (arg: string) => void
}

export const DeleteBoard: React.FC<Props> = props => {
  return (
    <>
      {props.popupName === 'delete_board' && (
        <div className="flex flex-col">
          <div>Delete Board</div>
          <button
            onClick={() => props.setPopupName('')}
            className="rounded-full bg-primary-500 px-6 py-3.5 text-h3 text-white hover:bg-primary-300"
          >
            Delete Board
          </button>
        </div>
      )}
    </>
  )
}
