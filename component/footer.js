import { SiInstagram,SiGithub,SiLinkedin } from 'react-icons/si';
import Link from 'next/link'
export default function footer(){
    return(
     <footer className="bg-gray-50">
        <div className="container mx-auto flex justify-center py-4">
            <div className="py-5">
                <div className="py-5">
                    <div className="flex gap-6 justify-center">
                        <Link legacyBehavior href={'/'}><a><SiInstagram></SiInstagram></a></Link>
                        <Link legacyBehavior href={'/'}><a><SiGithub></SiGithub></a></Link>
                        <Link legacyBehavior href={'/'}><a><SiLinkedin></SiLinkedin></a></Link>
                    </div>
                    <p className='py-5 text-gray-500'>
                        Made by Asmita P.
                    </p>
                </div>
            </div>

        </div>

     </footer>   
    )
}