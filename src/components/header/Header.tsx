'use client'


import { useSession, signOut } from "next-auth/react";
import Link from "next/link";

export default function Header() {
	const session = useSession();
	
	return (
		<header style={{ backgroundColor: 'rgb(17 24 39 / 1)', position: 'fixed', top: '0'}} className="w-[100%] h-[70px] text-white ">
			<nav className="mx-auto flex items-center justify-between p-6 px-10" aria-label="Global">
				<div className="flex">
					<Link href="/" className="-m-1.5 p-1.5">
						<span className="sr-only">Black</span>
						<img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="" />
					</Link>
				</div>

				<div className="flex justify-end gap-40">
					<span className="text-sm font-semibold leading-6">
						Zalogowany: {session.data?.user?.name}
					</span>
					{
						session.data &&
						<Link
							href="#"
							onClick={() => signOut({ callbackUrl: '/' })}
							className="text-sm font-semibold leading-6">
							Log out
							<span aria-hidden="true">&rarr;</span>
						</Link>
					}
				</div>
			</nav>
		</header>
	)
}
