import Header from '../component/header'
import Footer from '../component/footer'
import Head from 'next/head'
export default function format({children}){
    return(
        <>
            <Head>
            <title>Me $ Myself</title>
            </Head>
            <Header></Header>
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}