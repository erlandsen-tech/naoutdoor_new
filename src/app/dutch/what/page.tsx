"use client";
import Link from "next/link";
import Image from "next/image";

const WhatDut = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        Wat is het Programma van NA-Anonieme Verslaafden?
                    </h2>
                    <p>
                        NA is een non-profit gemeenschap van mannen en vrouwen
                        voor wie drugs een ernstig probleem waren geworden. Wij
                        zijn herstellende verslaafden die geregeld bij elkaar komen
                        om elkaar te helpen clean te blijven. Dit is een programma van
                        volledige onthouding van alle drugs. Er is maar één vereiste
                        voor lidmaatschap: het verlangen om te stoppen met gebruiken.
                        We stellen voor dat je een open geest houdt en jezelf een kans
                        geeft. Ons programma bestaat uit een aantal uitgangspunten die
                        zo eenvoudig zijn dat wij ze in ons dagelijks leven toe kunnen
                        passen. Het belangrijkste is dat ze werken.<br /><br />

                        Er gelden geen beperkende voorwaarden bij NA. Wij zijn
                        niet aangesloten bij andere organisaties, wij vragen geen
                        inschrijfgeld of contributie, wij hoeven niets te tekenen noch aan
                        iemand iets te beloven. Wij zijn niet verbonden aan politieke,
                        religieuze of ordehandhavende groeperingen en wij staan
                        nooit onder toezicht. Iedereen kan zich bij ons aansluiten,
                        ongeacht leeftijd, ras, sexuele geaardheid, levensovertuiging,
                        geloofsovertuiging of gebrek aan geloofsovertuiging.<br /><br />

                        Wij zijn niet geïnteresseerd in wat of hoeveel je gebruikte of wie
                        je connecties waren, wat je in het verleden hebt gedaan, hoeveel
                        of hoe weinig je hebt, maar alleen in wat jij aan jouw probleem
                        wilt doen en hoe wij daarbij kunnen helpen. De nieuwkomer is
                        bij elke bijeenkomst de belangrijkste persoon omdat wij alleen
                        kunnen behouden wat wij hebben door het weg te geven.
                        We hebben van onze groepservaring geleerd dat diegenen die
                        regelmatig naar onze groepsbijeenkomsten blijven komen,
                        clean blijven. <br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/dutch">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WhatDut;