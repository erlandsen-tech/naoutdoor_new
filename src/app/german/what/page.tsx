"use client";
import Link from "next/link";
import Image from "next/image";

const WhatGer = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        Was bedeutet das Narcotics Anonymous Programm?
                    </h2>
                    
                    <p>
                        NA ist eine gemeinnützige Gemeinschaft von Männern und
                        Frauen, für die Drogen zum Hauptproblem geworden sind. Wir
                        sind Süchtige auf dem Weg der Genesung, die regelmäßig
                        zusammenkommen und sich gegenseitig helfen, clean zu bleiben.
                        Dies ist ein Programm völliger Abstinenz von allen Drogen.
                        Es gibt nur eine einzige Voraussetzung für die Zugehörigkeit:
                        das Verlangen mit Drogen aufzuhören. Wir empfehlen dir,
                        aufgeschlossen zu sein und Bereitschaft zu zeigen. Unser
                        Programm besteht aus bestimmten Grundsätzen, die so einfach
                        sind, dass wir ihnen in unserem täglichen Leben folgen können.
                        Das Wichtigste daran ist – sie funktionieren.<br /><br />

                        Mit NA sind keinerlei Verp flichtungen verbunden. Wir
                        sind unabhängig von anderen Organisationen, wir haben
                        keine Aufnahmegebühren oder Mitgliedsbeiträge, keine Verp
                        flichtungen zu unterschreiben, und niemandem müssen
                        Versprechen gemacht werden. Wir haben keine Verbindungen zu
                        Justizbehörden, politischen oder religiösen Gruppen und stehen
                        niemals unter Aufsicht. Mitmachen können alle, ohne Rücksicht
                        auf Alter, Rasse, sexuelle Identität, Glauben, Religion oder
                        fehlende Religionszugehörigkeit.<br /><br />

                        Uns interessiert weder, welche oder wie viel Drogen du
                        genommen hast, wie du dir deine Suchtmittel beschafft hast,
                        was du in der Vergangenheit getan hast, noch wie viel oder wie
                        wenig du besitzt. Uns interessiert einzig und allein, wie du dein
                        Problem angehen willst und wie wir dir dabei helfen können.
                        Die Neuankömmlinge sind die wichtigsten Personen bei jedem
                        Meeting, denn wir können nur bewahren, was wir haben, indem
                        wir es weitergeben. Aus unseren Gruppenerfahrungen haben wir
                        gelernt, dass diejenigen, die regelmäßig zu unseren Meetings
                        kommen, clean bleiben.<br /><br /><br />
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
export default WhatGer;