import { useState } from 'react'

type Props = {
  popupName: string
  setPopupName: (arg: string) => void
}

export const Login: React.FC<Props> = props => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <>
      <div className="flex items-center gap-1 p-8 text-black dark:text-white">
        <div className="justify-left flex w-1/2 flex-col items-center gap-6">
          <button className="h-12 w-full rounded-md bg-purple-600 text-p2 text-white hover:scale-[97%] hover:bg-purple-800">
            <span>Login with Github</span>
          </button>
          <button className="h-12 w-full rounded-md bg-red-600 text-p2 text-white hover:scale-[97%] hover:bg-red-800">
            <span>Login with Google</span>
          </button>
          <button className="h-12 w-full rounded-md bg-blue-600 text-p2 text-white hover:scale-[97%] hover:bg-blue-800">
            <span>Login as Guest</span>
          </button>
        </div>
        <div className="flex flex-col items-center justify-center px-10">
          <span className="text-h3 uppercase text-secondary-500">or</span>
        </div>
        <div className="justify-right flex w-1/2 flex-col items-center">
          <label className="justify-center pb-4 text-h3 text-secondary-500 dark:text-white">
            Login with Email
          </label>
          <form className="w-full justify-center space-y-2">
            <input
              onChange={e => setEmail(e.target.value)}
              type="email"
              value={email}
              placeholder="Email"
              className="h-12 w-full items-center rounded-md border-secondary-500/[0.2] bg-slate-100 text-p2 placeholder:text-p1 hover:border-secondary-500/[0.7] focus:border-blue-500 focus:ring-0 dark:bg-zinc-800"
            />
            <input
              onChange={e => setPassword(e.target.value)}
              type="password"
              value={password}
              placeholder="Password"
              className="h-12 w-full rounded-md border-secondary-500/[0.2] bg-slate-100 text-p2 placeholder:text-p1 hover:border-secondary-500/[0.7] focus:border-blue-500 focus:ring-0 dark:bg-zinc-800"
            />
            <button className="ml-1 flex-col text-p2 font-thin text-secondary-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200">
              Forgot password?
            </button>
            <div className="flex items-center justify-between">
              <div>
                <input
                  type="checkbox"
                  className="dark:hover:bg-slate-600hover:border-secondary-500/[0.2] h-5 w-5 appearance-none rounded-md border-secondary-500/[0.2] bg-slate-100 uppercase !outline-none ring-0 default:ring-0 checked:ring-0 hover:bg-slate-300 checked:hover:border-secondary-500/[0.2] checked:hover:bg-slate-300 focus:ring-0 focus:ring-offset-0 dark:bg-zinc-800  "
                />
                <label className="pl-2 align-middle text-p2 font-semibold text-secondary-500 dark:text-white">
                  Remember me
                </label>
              </div>
              <div className="">
                <input
                  type="submit"
                  value="login"
                  className="h-10 w-20 rounded-md border-secondary-500/[0.2] bg-green-600 text-p2 uppercase text-white placeholder:text-p1 hover:scale-[97%] hover:bg-green-700 focus:border-secondary-500 focus:ring-0"
                />
              </div>
            </div>
          </form>
          <div className="flex w-full items-center justify-end gap-2 pt-5 align-middle">
            <button className="flex-col text-[14px] text-p2 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-600">
              Create account
            </button>
          </div>
        </div>
      </div>
    </>
  )
}
