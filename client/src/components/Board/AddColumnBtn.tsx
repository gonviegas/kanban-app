type Props = {
  setPopupName: (arg: string) => void
}

export const AddColumnBtn: React.FC<Props> = props => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 px-12 text-center xs:px-20">
      <span className="text-h2 text-secondary-500">
        This board is empty. Create a new column to get started.
      </span>
      <button
        onClick={() => props.setPopupName('add_column')}
        className="rounded-full bg-primary-500 px-6 py-3.5 text-h3 text-white hover:bg-primary-300"
      >
        + Add New Column
      </button>
    </div>
  )
}
