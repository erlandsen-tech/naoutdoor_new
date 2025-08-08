"use client";
import Link from "next/link";
import Image from "next/image";

const JFTSwe = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Bara för idag
                </h2>
                    <p>
                        Säg till dig själv:<br /><br />

                        <strong>BARA FÖR IDAG</strong> ska jag tänka på mitt tillfrisknande, leva och glädjas åt livet utan att använda droger.<br /><br />

                        <strong>BARA FÖR IDAG</strong> ska jag ha tillit till någon i NA som tror på mig och vill hjälpa mig i mitt tillfrisknande.<br /><br />

                        <strong>BARA FÖR IDAG</strong> ska jag ha ett program. Jag ska försöka följa det efter bästa förmåga.<br /><br />

                        <strong>BARA FÖR IDAG</strong> ska jag genom NA försöka få ett bättre perspektiv på mitt liv.<br /><br />

                        <strong>BARA FÖR IDAG</strong> ska jag vara orädd. Mina tankar ska vara hos mina nya vänner, människor som inte använder och har funnit ett nytt sätt att leva. Så länge jag följer den vägen har jag inget att vara rädd för.<br /><br /><br />
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
export default JFTSwe;