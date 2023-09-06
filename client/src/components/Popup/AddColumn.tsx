type Props = {
  popupName: string
  setPopupName: (arg: string) => void
}

export const AddColumn: React.FC<Props> = props => {
  return (
    <>
      {props.popupName === 'add_column' && (
        <div className="flex flex-col">
          <div>Add Column</div>
          <button
            onClick={() => props.setPopupName('')}
            className="rounded-full bg-primary-500 px-6 py-3.5 text-h3 text-white hover:bg-primary-300"
          >
            + Add New Column
          </button>
        </div>
      )}
    </>
  )
}
