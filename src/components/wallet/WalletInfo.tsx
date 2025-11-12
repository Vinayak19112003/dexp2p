import { Menu, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import { ChevronDownIcon, ArrowRightOnRectangleIcon, DocumentDuplicateIcon } from '@heroicons/react/24/outline'
import { useWallet } from '@/hooks/useWallet'
import { truncateAddress, copyToClipboard, getBSCScanLink } from '@/utils/helpers'
import Avatar from '../ui/Avatar'
import toast from 'react-hot-toast'

export default function WalletInfo() {
  const { address, disconnectWallet, chainId } = useWallet()

  if (!address) return null

  const handleCopyAddress = () => {
    copyToClipboard(address)
    toast.success('Address copied to clipboard')
  }

  const handleViewOnBSCScan = () => {
    window.open(getBSCScanLink('address', address, chainId), '_blank')
  }

  return (
    <Menu as="div" className="relative">
      <Menu.Button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-neutral-200 hover:border-primary-500 transition-colors">
        <Avatar address={address} size="sm" />
        <span className="font-mono text-sm font-medium hidden md:inline">
          {truncateAddress(address)}
        </span>
        <ChevronDownIcon className="w-4 h-4 text-neutral-500" />
      </Menu.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 mt-2 w-64 origin-top-right rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
          <div className="p-4 border-b border-neutral-200">
            <p className="text-xs text-neutral-500 mb-1">Connected Wallet</p>
            <p className="font-mono text-sm font-medium break-all">{address}</p>
          </div>

          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleCopyAddress}
                  className={`${
                    active ? 'bg-neutral-100' : ''
                  } flex w-full items-center gap-2 px-4 py-2 text-sm text-neutral-700`}
                >
                  <DocumentDuplicateIcon className="w-4 h-4" />
                  Copy Address
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={handleViewOnBSCScan}
                  className={`${
                    active ? 'bg-neutral-100' : ''
                  } flex w-full items-center gap-2 px-4 py-2 text-sm text-neutral-700`}
                >
                  <span>🔍</span>
                  View on BSCScan
                </button>
              )}
            </Menu.Item>

            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={disconnectWallet}
                  className={`${
                    active ? 'bg-error-50' : ''
                  } flex w-full items-center gap-2 px-4 py-2 text-sm text-error-700 border-t border-neutral-200`}
                >
                  <ArrowRightOnRectangleIcon className="w-4 h-4" />
                  Disconnect
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
