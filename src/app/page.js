import Banner from '@/pages/home/Banner'
import Collections from "@/pages/home/Collections";
import Features from "@/pages/home/Features";
import Auctions from "@/pages/home/Auctions";
import Viewed from "@/pages/home/Viewed";


export default function Home() {
    const sampleMap = 4
    return (
        <main>

            <Banner/>
            {/*<MetaConnectAlert/>*/}
            <Collections sampleMap={sampleMap}/>
            <Features/>

            <Viewed sampleMap={sampleMap}/>

            <Auctions/>

        </main>
    )
}
