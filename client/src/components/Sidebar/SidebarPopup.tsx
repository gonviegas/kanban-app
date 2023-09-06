import { useRef } from 'react'
import { useClickOutside } from '@/hooks/ClickOutside'

type Props = {
  setSidebarPopupToggle: (arg: boolean) => void
}

export const SidebarPopup: React.FC<Props> = props => {
  const sidebarPopup = useRef(null)
  useClickOutside(sidebarPopup, () => props.setSidebarPopupToggle(false))

  return (
    <>
      <div>
        <div className="absolute top-0 z-20 h-screen w-screen bg-black opacity-40" />
        <div
          className="fixed left-1/2 top-1/4 z-30 w-[480px] max-w-[94%] translate-x-[-50%] translate-y-[-50%] bg-white py-6"
          ref={sidebarPopup}
        >
          <div>sidebar popup</div>
          <button
            onClick={() => props.setSidebarPopupToggle(false)}
            className="rounded-full bg-primary-500 px-6 py-3.5 text-h3 text-white hover:bg-primary-300"
          >
            close
          </button>
        </div>
      </div>
    </>
  )
}
