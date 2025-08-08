"use client";
import Link from "next/link";
import Image from "next/image";

const WhoNor = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>Hvem er rusavhengig?</h2>
                    <p>De fleste av oss behøver ikke tenke to ganger på dette spørsmålet. VI VET! Hele vårt liv og tenkning dreide seg om rusmidler i 
                        en eller annen form. Å få tak i, bruke og finne måter og midler til å skaffe mer. Vi levde for å bruke og brukte for å leve. 
                        Helt enkelt, en rusavhengig er en mann eller kvinne hvis liv er kontrollert av rusmidler. Vi er mennesker i grepet på en vedvarende og 
                        progressiv sykdom som alltid ender på samme måte: fengsler, institusjoner og død.</p>
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
export default WhoNor;