"use client";
import Link from "next/link";
import Image from "next/image";

const JFTFin = () => {
    return (
        <div>

            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Juuri Tänään
                    </h2>
                    <p>
                        Sano itsellesi:<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> ajatukseni ovat toipumisessani, elän ja nautin elämästä ilman huumeiden käyttöä.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> minulla on luottamus johonkuhun NA:ssa, joka uskoo minuun ja haluaa auttaa minua toipumisessani.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> minulla on ohjelma. Yritän noudattaa sitä parhaan kykyni mukaan.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> pyrin NA:n kautta saamaan paremman näkökulman elämääni.<br /><br />

                        <strong>JUURI TÄNÄÄN</strong> olen peloton, ajatukseni ovat uusien ystävieni kanssa, ihmisten, jotka eivät käytä ja jotka ovat löytäneet uuden elämäntavan. Niin kauan kuin seuraan tätä tietä, minulla ei ole mitään pelättävää.<br /><br /><br />
                    </p>
                </div>
            </div>

            <div>
                <Link href="/finnish">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default JFTFin;