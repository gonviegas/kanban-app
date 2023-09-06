import { useState, useRef } from 'react'
import { useClickOutside } from '@/hooks/ClickOutside'
import { KebabMenu } from '@/assets/svgs'

type Props = {
  setPopupName: (arg: string) => void
}

export const BoardBtn: React.FC<Props> = props => {
  const [dropdownToggle, setDropdownToggle] = useState(false)
  const boardMenu = useRef(null)
  useClickOutside(boardMenu, () => setDropdownToggle(false))

  const handlePopup = (popupName: string) => {
    props.setPopupName(popupName)
    setDropdownToggle(false)
  }

  return (
    <>
      <button
        className="stroke-secondary-500 align-middle"
        onClick={() => setDropdownToggle(!dropdownToggle)}
        ref={boardMenu}
      >
        {KebabMenu}
        {dropdownToggle && (
          <div className="absolute inset-y-[5em] right-4 z-50">
            <div className="rounded-lg bg-white p-5 pr-20 text-h3 dark:bg-gray-dark">
              <ul className="space-y-5 text-left">
                <li className="text-secondary-500 hover:text-secondary-500/[0.7] hover:dark:text-secondary-300">
                  <button onClick={() => handlePopup('edit_board')}>
                    Edit board
                  </button>
                </li>
                <li className="text-red-normal hover:text-red-normal/[0.7] hover:dark:text-red-light">
                  <button onClick={() => handlePopup('delete_board')}>
                    Delete board
                  </button>
                </li>
              </ul>
            </div>
          </div>
        )}
      </button>
    </>
  )
}
