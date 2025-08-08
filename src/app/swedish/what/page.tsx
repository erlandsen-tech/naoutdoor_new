"use client";
import Link from "next/link";
import Image from "next/image";

const WhatSwe = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        Vad är Anonyma Narkomaners program?
                    </h2>

                    <p>
                        NA är en ideell gemenskap eller förening av män och kvinnor
                        för vilka droger blivit ett allvarligt problem. Vi är tillfrisknande
                        beroende som möts regelbundet för att hjälpa varandra att förbli
                        drogfria. Det här är ett program med total avhållsamhet från alla
                        droger. Det enda villkoret för medlemskap är en önskan att sluta
                        använda. Vi föreslår att du har ett öppet sinne och ger dig själv en
                        chans. Vårt program är en uppsättning principer skrivna så enkelt
                        att vi kan följa dem i vårt dagliga liv. Det viktigaste med dem är att
                        de <i>fungerar</i>.<br /><br />

                        Det
                        finns inga förbehåll förknippade med NA. Vi är inte
                        bundna till några andra organisationer, vi har inga inträdes- eller
                        medlemsavgifter, inga löften att skriva under, inget man måste
                        lova någon annan. Vi är inte anknutna till några politiska eller
                        religiösa grupper eller lagövervakande instanser och vi står
                        aldrig under någon uppsikt. Vem som helst kan ansluta sig till
                        oss oavsett ålder, etnicitet, sexuell identitet, tro, religion eller
                        avsaknad av religion.<br /><br />

                        Vi är inte intresserade av vad eller hur mycket du använde eller
                        vilka dina kontakter var, vad du gjort i det förflutna, vad du har
                        eller inte har, utan bara av vad du vill göra åt ditt problem och hur
                        vi kan hjälpa till. Nykomlingen är den viktigaste personen på varje
                        möte, för vi kan bara behålla det vi har genom att ge bort det. Av
                        våra gruppers erfarenheter har vi lärt oss att de som fortsätter
                        komma till våra möten regelbundet förblir drogfria. <br /><br /><br />
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
export default WhatSwe;