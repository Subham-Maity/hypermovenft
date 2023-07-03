import Banner from '@/pages/home/Banner'
import Image from 'next/image'
import Card from '@/app/components/Card'
import Collections from "@/pages/home/Collections";


export default function Home() {
    const sampleMap = 4
    return (
        <main className="">
            <Banner/>
            <Collections sampleMap={sampleMap}/>

        </main>
    )
}
