import { useAuth } from '@/app/_providers/AuthProvider'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverPanel,
} from '@headlessui/react'
import Link from 'next/link'
import { Locale } from 'payload/config'
import { BiBuildingHouse, BiCheck, BiChevronRight, BiLogOut } from 'react-icons/bi'
import { IoLanguage } from 'react-icons/io5'
import { useCurrentLocale } from 'next-i18n-router/client'
import i18nConfig from '@/i18nConfig'
import { usePathname } from 'next/navigation'
import { RiMoonLine, RiSunLine } from 'react-icons/ri'
import { useTheme } from 'next-themes'

export default function UserMenu({ locales }: { locales: Locale[] }) {
  const { user, logout } = useAuth()
  const { theme, setTheme } = useTheme()
  const localeCode = useCurrentLocale(i18nConfig)
  const pathname = usePathname()

  if (!user) return null

  const getPathnameWithLocale = (code: string) => {
    if (localeCode === 'en') {
      if (code === 'en') return pathname
      return `/${code}${pathname}`
    } else {
      if (code === 'en') return `${pathname.slice(3)}`
      return pathname.replace(`${localeCode}`, `${code}`)
    }
  }

  return (
    <Menu>
      <MenuButton className="w-12 h-12 rounded-full bg-white dark:bg-black overflow-hidden flex items-center justify-center font-semibold text-lg">
        {(user.firstName[0] + user.lastName[0]).toUpperCase()}
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="w-52 origin-top-right rounded-xl p-1 bg-white dark:bg-black text-sm text-black dark:text-white [--anchor-gap:10px] focus:outline-none"
      >
        <div className="py-2.5 px-3 space-y-1">
          <p className="font-bold">
            {user.firstName} {user.lastName}
          </p>
          <p>{user.email}</p>
        </div>
        <hr />
        {user.locations && user.locations.length && (
          <Popover>
            <PopoverButton className="group flex w-full items-center justify-between rounded-lg py-2 px-3">
              <div className="flex items-center gap-2">
                <BiBuildingHouse className="w-5 h-5" />
                Facility
              </div>
              <BiChevronRight className="w-5 h-5" />
            </PopoverButton>
            <PopoverPanel
              anchor="right start"
              className="flex flex-col bg-white dark:bg-black border border-gray-100 dark:border-gray-600 rounded p-1 [--anchor-gap:3px]"
            >
              {user.locations.map((location) => {
                if (typeof location === 'string') return null

                return (
                  <Link href="#" className="px-2 py-1 min-w-32 text-sm" key={location.id}>
                    {location.name}
                  </Link>
                )
              })}
            </PopoverPanel>
          </Popover>
        )}
        {locales.length && (
          <Popover>
            <PopoverButton className="group flex w-full items-center justify-between rounded-lg py-2 px-3">
              <div className="flex items-center gap-2">
                <IoLanguage className="w-5 h-5" />
                Language
              </div>
              <BiChevronRight className="w-5 h-5" />
            </PopoverButton>
            <PopoverPanel
              anchor="right start"
              className="flex flex-col bg-white dark:bg-black border border-gray-100 dark:border-gray-600 rounded p-1 [--anchor-gap:3px]"
            >
              {locales.map((locale) => {
                return (
                  <Link
                    href={getPathnameWithLocale(locale.code)}
                    className="px-2 py-1 min-w-32 text-sm flex justify-between items-center"
                    key={locale.code}
                  >
                    <p>
                      {typeof locale.label === 'string'
                        ? locale.label
                        : locale.label[localeCode ?? 'en']}{' '}
                      ({locale.code})
                    </p>
                    {locale.code === localeCode && <BiCheck className="w-4 h-4" />}
                  </Link>
                )
              })}
            </PopoverPanel>
          </Popover>
        )}
        <MenuItem>
          <button
            className="group flex w-full items-center gap-2 rounded-lg py-2 px-3"
            onClick={(e) => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'light' ? (
              <>
                <RiMoonLine className="w-5 h-5" />
                Dark mode
              </>
            ) : (
              <>
                <RiSunLine className="w-5 h-5" />
                Light mode
              </>
            )}
          </button>
        </MenuItem>
        <hr />
        <MenuItem>
          <button
            className="group flex w-full items-center gap-2 rounded-lg py-2 px-3"
            onClick={(e) => {
              logout()
            }}
          >
            <BiLogOut className="w-5 h-5" />
            Log out
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  )
}
