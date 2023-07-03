import Banner from '@/pages/home/Banner'
import Image from 'next/image'
import Card from '@/app/components/Card'
import Collections from "@/pages/home/Collections";
import LargeCard from "@/app/components/LargeCard";
import Features from "@/pages/home/Features";
import Auctions from "@/pages/home/Auctions";
import Viewed from "@/pages/home/Viewed";


export default function Home() {
    const sampleMap = 4
    return (
        <main className="">
            <Banner/>

            <Collections sampleMap={sampleMap}/>
            <Features/>

            <Viewed sampleMap={sampleMap}/>

            <Auctions/>

        </main>
    )
}
