"use client";
import Link from "next/link";
import Image from "next/image";

const WDRNor = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Vi tilfriskner
                </h2>
                    <p>
                        Når vi til slutt finner ut at vi ikke lenger kan fungere som mennesker, hverken med eller uten rusmidler, står vi alle ansikt til ansikt med følgende dilemma. Hva mer kan gjøres? Det ser ut til å være disse alternativene, enten å fortsette så godt vi kan til den bitre slutt – fengsler, institusjoner eller død  – eller finne en ny måte å leve på. I tidligere tider fikk veldig få rusavhengige dette siste valget. De som er rusavhengige i dag er heldigere. For første gang i menneskehetens historie har en enkel måte bevist seg selv i livet til mange rusavhengige, og den er tilgjengelig for oss alle. Det er et enkelt åndelig, ikke-religiøst program, kjent som Anonyme Narkomane. <br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/norwegian">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WDRNor;
