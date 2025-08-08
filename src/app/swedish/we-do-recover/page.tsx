"use client";
import Link from "next/link";
import Image from "next/image";

const WDRSwe = () => {
    return (
        <div>

            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        Vi tillfrisknar!
                    </h2>
                    <p>
                        När vi vid vägens slut finner att vi inte längre kan fungera som människor, vare sig med eller utan
                        droger, står vi alla inför samma dilemma. Vad finns det kvar att göra? Detta verkar vara alternativen:
                        antingen fortsätta så gott vi kan till det bittra slutet – fängelser, institutioner eller död – eller finna ett nytt
                        sätt att leva. Under åren som gått har mycket få beroende någonsin haft denna sista valmöjlighet. De som
                        är beroende idag är mer gynnade. För första gången i människans historia har ett enkelt sätt visat sig
                        fungera i många beroendes liv. Det finns tillgängligt för oss alla. Detta är ett enkelt andligt – inte religiöst
                        – program, känt som Anonyma Narkomaner.  <br /><br /><br />
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
export default WDRSwe;
