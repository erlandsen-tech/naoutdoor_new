"use client";
import Link from "next/link";
import Image from "next/image";

const WhoGer = () => {
    return (
        <div>
            <div className="pam" id="pam-hvem">
                <div className="box-pam">
                    <h2>
                        Wer ist süchtig?
                    </h2>

                    <p>
                        Die meisten von uns brauchen über diese Frage nicht
                        nachzudenken. Wir wissen es! Unser ganzes Leben und Denken
                        drehte sich um Drogen in irgendeiner Form, sie zu beschaffen, zu
                        verwenden und Mittel und Wege zu finden, um mehr, immer mehr
                        zu bekommen. Wir brauchten sie zum Leben und lebten, um
                        sie zu gebrauchen. Einfach ausgedrückt, Süchtige sind Frauen
                        oder Männer, deren Leben von Drogen beherrscht wird. Wir sind
                        Menschen, die sich in der Gewalt einer ständig fortschreitenden
                        Krankheit befinden, deren Ende immer das Gleiche ist:
                        Gefängnis, Anstalt oder Tod.
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
export default WhoGer;