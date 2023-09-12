"use client";

import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const navigation = [
  { name: "Portada", href: "#front", current: true },
  { name: "Evento", href: "#event", current: false },
  { name: "Programación", href: "#schedule", current: false },
  { name: "Localización", href: "#location", current: false },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Navigation() {
  return (
    <Disclosure as="nav" className="bg-black sticky top-0 z-30">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-2xl px-2 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center lg:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="flex flex-shrink-0 items-center lg:hidden">
                  <img
                    className="h-8 w-auto"
                    src="/images/bar-citizen-letters.webp"
                    alt="Bar citizen"
                  />
                </div>
                <div className="hidden lg:flex">
                  <div className="w-[25%] flex justify-end items-center gap-2">
                    <a
                      key={navigation[0].name}
                      href={navigation[0].href}
                      className={classNames(
                        navigation[0].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[0].current ? "page" : undefined}
                    >
                      {navigation[0].name}
                    </a>
                    <a
                      key={navigation[1].name}
                      href={navigation[1].href}
                      className={classNames(
                        navigation[1].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[1].current ? "page" : undefined}
                    >
                      {navigation[1].name}
                    </a>
                  </div>
                  <div className="w-[50%] flex justify-center items-center">
                    <img
                      className="h-8 w-auto"
                      src="/images/bar-citizen-letters.webp"
                      alt="Bar citizen"
                    />
                  </div>
                  <div className="w-[25%] flex gap-2">
                    <a
                      key={navigation[2].name}
                      href={navigation[2].href}
                      className={classNames(
                        navigation[2].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[2].current ? "page" : undefined}
                    >
                      {navigation[2].name}
                    </a>
                    <a
                      key={navigation[3].name}
                      href={navigation[3].href}
                      className={classNames(
                        navigation[3].current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "rounded-md px-3 py-2 text-sm font-medium"
                      )}
                      aria-current={navigation[3].current ? "page" : undefined}
                    >
                      {navigation[3].name}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
