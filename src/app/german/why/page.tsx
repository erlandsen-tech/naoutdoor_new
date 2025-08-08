"use client";
import Link from "next/link";
import Image from "next/image";

const WhyGer = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam">
                    <h2>
                        Warum sind wir hier? 
                    </h2>
                    <p>
                        Bevor wir zu NA kamen konnten wir unser eigenes Leben nicht
                        meistern. Wir konnten nicht so leben wie andere Menschen,
                        konnten unser Leben nicht genießen. Wir mussten etwas anderes
                        haben und glaubten, es in den Drogen gefunden zu haben. Wir
                        gaben Drogen den Vorrang vor dem Wohl unserer Familien,
                        unserer Frauen, Männer und Kinder. Wir mussten Drogen
                        haben – um jeden Preis. Wir fügten vielen Menschen großen
                        Schaden zu, am meisten jedoch schadeten wir uns selbst. Durch
                        unsere Unfähigkeit, persönliche Verantwortung zu übernehmen,
                        schufen wir letztendlich unsere eigenen Probleme. Wir waren
                        anscheinend unfähig, uns dem Leben und der Wirklichkeit zu
                        stellen..<br /><br />
                    
                        Die meisten von uns merkten, dass wir mit unserer Sucht
                        langsam Selbstmord begingen; Sucht ist jedoch ein so tückischer
                        Feind des Lebens, dass wir die Macht verloren hatten, etwas
                        dagegen zu tun. Viele von uns landeten im Gefängnis oder
                        suchten Hilfe durch Medizin, Religion und Psychiatrie. Keiner
                        dieser Wege erwies sich als ausreichend. Unsere Krankheit
                        brach immer wieder durch oder schritt weiter voran, bis wir
                        in Verzweiflung Hilfe durch Selbsthilfe suchten: in Narcotics
                        Anonymous.<br />
                        
                        Nachdem wir zu NA gekommen waren, begriffen wir, dass wir
                        kranke Menschen waren. Wir litten an einer Krankheit, für die es
                        keine Heilung gibt. Sie kann jedoch an einem gewissen Punkt
                        zum Stillstand gebracht werden, und dann ist Genesung möglich.<br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/german">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WhyGer;