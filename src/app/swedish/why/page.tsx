"use client";
import Link from "next/link";
import Image from "next/image";

const WhySwe = () => {
    return (
        <div>
            <div className="pam" id="pam-hvorfor">
                <div className="box-pam">
                    <h2>
                        Varför är vi här?
                    </h2>
                    <p>
                        Innan vi kom till NA:s gemenskap kunde vi inte hantera våra
                        egna liv. Vi kunde inte leva och glädja oss åt livet som andra
                        människor gör. Vi måste ha något annorlunda och vi trodde
                        att vi hade funnit det i droger. Vi satte användningen av dessa
                        före våra familjers, fruars, äkta mäns och våra barns välfärd.
                        Vi måste ha droger till varje pris. Vi tillfogade många
                        människor stor skada, men mest av allt skadade vi oss själva.
                        Genom vår oförmåga att ta personligt ansvar skapade vi i
                        själva verket våra egna problem. Vi verkade oförmögna att
                        möta livet på dess egna villkor.<br /><br />

                        De flesta av oss insåg att vi i vårt beroende långsamt begick
                        självmord, men beroendet är en så slug fiende till livet att vi
                        hade förlorat förmågan att göra något åt det. Många av oss
                        hamnade i fängelse eller sökte medicinsk, religiös eller
                        psykiatrisk hjälp. Ingen av dessa metoder var tillräcklig för oss.
                        Vår sjukdom kom alltid upp till ytan igen eller fortsatte att
                        utvecklas tills vi i förtvivlan sökte hjälp hos varandra i Anonyma
                        Narkomaner.<br />
                        Efter att ha kommit till NA insåg vi att vi var sjuka människor.
                        Vi led av en sjukdom som inte har något känt botemedel. Den
                        kan dock hejdas i ett visst skede och tillfrisknande är sedan
                        möjligt.<br /><br />
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
export default WhySwe;