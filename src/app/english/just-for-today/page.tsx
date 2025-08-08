"use client";
import Link from "next/link";
import Image from "next/image";

const JFTEng = () => {
    return (
        <div>
            <div className="pam" id="pam-bare">
                <div className="box-pam">
                    <h2>
                        Just for Today
                    </h2>
                    <p>
                        Tell yourself:<br /><br />

                        <strong>JUST FOR TODAY</strong> my thoughts will be on my recovery, living and enjoying life without the use of drugs.<br /><br />

                        <strong>JUST FOR TODAY</strong> I will have faith in someone in NA who believes in me and wants to help me in my recovery.<br /><br />

                        <strong>JUST FOR TODAY</strong> I will have a program. I will try to follow it to the best of my ability.<br /><br />

                        <strong>JUST FOR TODAY</strong>, through NA, I will try to get a better perspective on my life.<br /><br />

                        <strong>JUST FOR TODAY</strong> I will be unafraid. My thoughts will be on my new associations, people who are not using and who have found a new way of life. So long as I follow that way, I have nothing to fear.<br /><br /><br />
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
export default JFTEng;