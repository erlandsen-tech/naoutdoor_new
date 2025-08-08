"use client";
import Link from "next/link";
import Image from "next/image";

const WhatDan = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        Hvad er Narcotics Anonymous’ program?
                </h2>
                    <p>
                        NA er et ikke-kommercielt fællesskab eller samfund af mænd
                        og kvinder, for hvem stoffer var blevet et væsentligt problem. Vi er
                        addicts i bedring, der mødes regelmæssigt for at hjælpe hinanden
                        med at forblive clean. Dette er et program for total afholdenhed
                        fra alle stoffer. Der er kun én forudsætning for medlemskab,
                        ønsket om at stoppe med at bruge. Vi foreslår, at du forholder dig
                        åbensindet og giver dig selv en chance. Vores program er et sæt
                        principper skrevet så enkelt, at vi kan følge dem i vores hverdag.
                        Det vigtigste ved dem er, at de virker.<br /><br />

                        Der er ingen betingelser knyttet til NA. Vi er ikke tilknyttet
                        andre organisationer. Vi har ikke noget indmeldelsesgebyr eller
                        kontingent, ingen forpligtelser at underskrive og ingen løfter at
                        aflægge. Vi er ikke forbundet med politiske, religiøse eller retslige
                        instanser og bliver aldrig overvåget. Enhver kan tilslutte sig os
                        uanset alder, race, seksuel identitet, overbevisning, religion eller
                        ingen religion.<br /><br />

                        Vi er ikke interesserede i, hvad eller hvor meget du brugte,
                        hvem dine forbindelser var, hvad du har lavet før i tiden,
                        hvor meget eller hvor lidt du ejer, men kun i hvad du vil gøre
                        ved dit problem, og hvordan vi kan hjælpe. Nykommeren
                        er den allervigtigste person på ethvert møde, fordi vi kun
                        kan beholde det vi har, ved at give det videre. Vi har lært af
                        vores gruppeerfaring, at de, som bliver ved med at komme
                        regelmæssigt til vores møder, forbliver clean. <br /><br /><br />
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
export default WhatDan;