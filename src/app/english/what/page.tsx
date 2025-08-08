"use client";
import Link from "next/link";
import Image from "next/image";

const WhatEng = () => {
    return (
        <div>
            <div className="pam" id="pam-hva">
                <div className="box-pam">
                    <h2>
                        What Is the Narcotics Anonymous Program?
                    </h2>
                    <p>
                        NA is a nonprofit fellowship or society of men and women for
                        whom drugs had become a major problem. We are recovering
                        addicts who meet regularly to help each other stay clean. This
                        is a program of complete abstinence from all drugs. There is
                        only one requirement for membership, the desire to stop using.
                        We suggest that you keep an open mind and give yourself a
                        break. Our program is a set of principles written so simply that
                        we can follow them in our daily lives. The most important thing
                        about them is that they work.<br /><br />

                        There are no strings attached to NA. We are not affiliated
                        with any other organizations. We have no initiation fees or
                        dues, no pledges to sign, no promises to make to anyone.
                        We are not connected with any political, religious, or law
                        enforcement groups, and are under no surveillance at any
                        time. Anyone may join us regardless of age, race, sexual
                        identity, creed, religion, or lack of religion.<br /><br />

                        We are not interested in what or how much you used or who
                        your connections were, what you have done in the past, how
                        much or how little you have, but only in what you want to do
                        about your problem and how we can help. The newcomer is
                        the most important person at any meeting, because we can
                        only keep what we have by giving it away. We have learned
                        from our group experience that those who keep coming to our
                        meetings regularly stay clean.<br /><br /><br />
                    </p>
                </div>
            </div>
            <div>
                <Link href="/english">
                    <Image src="/img/left-arrow-black.png" alt="Back" width={40} height={40} className="mx-auto d-block footer fixed-bottom mb-3 hover:scale-110 transition-transform" />
                </Link>
            </div>
        </div>
    );
};
export default WhatEng;