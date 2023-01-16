import { SiInstagram,SiGithub,SiLinkedin } from 'react-icons/si';
import Link from 'next/link'
export default function header(){
    return(
        <header className="bg-gray-50 ">
            <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between test-center py-3">
                <div className="md:flex-none w-96 odder-2 sm:order-1 flex justify-center py-4 sm:py-0">
                    <input className="input-text" type="text" placeholder="Search.."/>
                </div>
                <div className="shrink w-80 flex justify-center sm:order-2 ">
                    <Link legacyBehavior href={'/'}>
                        <a className="font-bold uppercase text-3xl" class="logo">I, Me</a>
                    </Link>
                </div>
                <div className="w-96 order-3 flex justify-center">
                    <div className="flex gap-6">
                        <Link legacyBehavior href={'/'}><a><SiInstagram></SiInstagram></a></Link>
                        <Link legacyBehavior href={'/'}><a><SiGithub></SiGithub></a></Link>
                        <Link legacyBehavior href={'/'}><a><SiLinkedin></SiLinkedin></a></Link>
                    </div>
                </div>
            </div>
        </header>
    )
}