"use client";
import Link from "next/link";
import Image from "next/image";

const WhoDan = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    
                    <h2>
                        Hvem er en addict?
                    </h2>
                    
                    <p>
                        De fleste af os behøver ikke tænke to gange over dette
                        spørgsmål. Vi ved det! Hele vores liv og tankegang var centreret
                        om stoffer i en eller anden form – at skaffe, at bruge og finde
                        måder og metoder til at skaffe mere. Vi levede for at bruge
                        og brugte for at leve. Helt enkelt, en addict er en mand eller
                        kvinde, hvis liv er styret af stoffer. Vi er mennesker, fanget af en
                        vedvarende og fremadskridende sygdom, hvis endeligt altid er
                        det samme: Fængsler, institutioner og død.
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
export default WhoDan;