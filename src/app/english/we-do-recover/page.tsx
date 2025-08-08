"use client";
import Link from "next/link";
import Image from "next/image";

const WDREng = () => {
    return (
        <div>
            <div className="pam" id="pam-vitil">
                <div className="box-pam">
                    <h2>
                        We Do Recover
                    </h2>
                    <p>
                        When at the end of the road we find that we can no longer
                        function as a human being, either with or without drugs, we all
                        face the same dilemma. What is there left to do? There seems
                        to be this alternative: either go on as best we can to the bitter
                        ends—jails, institutions or death—or find a new way to live. In
                        years gone by, very few addicts ever had this last choice.
                        Those who are addicted today are more fortunate. For the first
                        time in man’s entire history, a simple way has been proving
                        itself in the lives of many addicts. It is available to us all. This is
                        a simple spiritual—not religious—program, known as Narcotics
                        Anonymous.<br /><br /><br />
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
export default WDREng;
