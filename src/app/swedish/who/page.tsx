"use client";
import Link from "next/link";
import Image from "next/image";

const WhoSwe = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Vem är en beroende?
                    </h2>

                    <p>
                        De flesta av oss behöver inte fundera särskilt länge på den
                        frågan. VI VET! Hela vårt liv och tänkande kretsade kring
                        droger i en eller annan form – hur vi skulle få tag på och
                        använda dem samt finna sätt och medel att skaffa mer.
                        Vi levde för att använda och använde för att leva. En beroende
                        är helt enkelt en man eller kvinna vars liv kontrolleras av
                        droger. Vi är människor som är i klorna på en pågående och
                        fortskridande sjukdom, som alltid slutar på samma sätt:
                        fängelser, institutioner och död.
                    </p>
                </div>
            </div>
            <div>
                <Link href="/swedish">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WhoSwe;