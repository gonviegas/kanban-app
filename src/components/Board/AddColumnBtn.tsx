type Props = {
  setPopupName: (arg: string) => void;
};

export const AddColumnBtn: React.FC<Props> = (props) => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full gap-6 px-12 xs:px-20 text-center">
      <span className="text-h2 text-secondary-500">
        This board is empty. Create a new column to get started.
      </span>
      <button onClick={() => props.setPopupName("add_column")} className="rounded-full bg-primary-500 px-6 py-3.5 text-white text-h3 hover:bg-primary-300">
        + Add New Column
      </button>
    </div>
  )
}
