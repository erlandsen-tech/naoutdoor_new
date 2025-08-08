"use client";
import Link from "next/link";
import Image from "next/image";

const WhyDan = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam">
                    <h2>
                        Hvorfor er vi her?
                    </h2>
                    <p>
                        Før vi kom til NAs fællesskab, kunne vi ikke håndtere vore liv.
                        Vi kunne ikke leve og nyde livet, som andre mennesker gør. Vi
                        var nødt til at have noget andet og troede, at vi havde fundet
                        dette i stofferne. Vi placerede brugen af dem over vores familiers
                        og koners, mænds og børns velfærd. Vi måtte have stoffer for
                        enhver pris. Vi gjorde mange mennesker stor fortræd, men mest
                        af alle gjorde vi os selv fortræd. På grund af vores manglende
                        evne til at acceptere personligt ansvar, skabte vi i virkeligheden
                        vores egne problemer. Vi syntes at være ude af stand til at stå
                        ansigt til ansigt med livet på dets egne betingelser. <br /><br />

                        De fleste af os indså, at vi i vores addiction langsomt begik
                        selvmord, men addiction er en så snedig fjende af livet, at vi
                        havde mistet styrken til at gøre noget ved den. Mange af os endte
                        i fængsel eller søgte hjælp gennem medicin, religion og psykiatri.
                        Ingen af disse metoder var tilstrækkelige for os. Vores sygdom
                        dukkede altid op igen eller fortsatte med at udvikle sig, indtil vi i
                        desperation søgte hjælp hos hinanden i Narcotics Anonymous. <br /><br />
                        
                        Vi indså, at vi var syge mennesker, efter vi var kommet til
                        NA. Vi led af en sygdom, for hvilken der ikke er nogen kendt
                        helbredelse. Den kan dog stoppes på et vist stadium, og så er
                        bedring mulig. <br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/danish">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WhyDan;