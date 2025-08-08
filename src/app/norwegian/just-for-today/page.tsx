"use client";
import Link from "next/link";
import Image from "next/image";

const JFTNor = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Bare for idag
                    </h2>
                    <p>
                        Si til deg selv:<br /><br />

                        <strong>BARE FOR IDAG</strong> vil mine tanker være på min tilfriskning, å leve og nyte livet uten bruk av rusmidler.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg ha tillit til noen i NA som tror på meg og ønsker å hjelpe meg i min tilfriskning.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg ha et program. Jeg vil prøve å følge det etter beste evne.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg gjennom NA prøve å få et bedre syn på livet mitt.<br /><br />

                        <strong>BARE FOR IDAG</strong> vil jeg være uredd, mine tanker vil være på mine nye bekjente, mennesker som ikke bruker og som har funnet en ny måte å leve på. Så lenge jeg følger den veien har jeg ingenting å frykte.<br /><br /><br />
                    </p>
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
export default JFTNor;