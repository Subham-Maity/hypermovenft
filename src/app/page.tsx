import Image from 'next/image'
import Banner from "@/pages/home/Banner";
import Collections from "@/pages/home/Collections";
import Features from "@/pages/home/Features";
import Viewed from "@/pages/home/Viewed";
import Auctions from "@/pages/home/Auctions";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <Banner/>
            <Collections/>
            <Features/>
            <Viewed/>
            <Auctions/>
        </main>
    )
}
