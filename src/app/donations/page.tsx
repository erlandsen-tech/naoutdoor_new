"use client";
import { useState } from "react";
import Image from "next/image";

export default function DonationsPage() {
  return (
    <div className="w-full flex-1">
      <section className="max-w-5xl mx-auto px-4 py-10">
        <header className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">Donations</h1>
          <p className="mt-3 text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            In Narcotics Anonymous, our 7th Tradition states that every NA group ought to be fully
            self-supporting, declining outside contributions. If you wish to support NA Outdoor,
            you can donate using the options below. Thank you for helping us carry the message.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Vipps */}
          <article className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-6 flex items-center gap-5">
            <div className="shrink-0">
              <Image src="/img/pay_with_vipps.png" alt="Pay with Vipps" width={140} height={42} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Vipps</h2>
              <p className="text-gray-700 dark:text-gray-300">NA Outdoor</p>
              <p className="mt-1 font-mono text-2xl">520065</p>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                Please include a note like “NA Outdoor donation” if possible.
              </p>
            </div>
          </article>

          {/* Cash at meetings */}
          <article className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-6 flex items-center gap-5">
            <div className="shrink-0">
              <Image src="/img/donation.png" alt="Donation icon" width={64} height={64} />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-semibold">Cash at meetings</h2>
              <p className="text-gray-700 dark:text-gray-300">
                You can contribute in person at our meetings. Collections help cover venue costs,
                literature, and outreach.
              </p>
            </div>
          </article>

          {/* Bank transfer (Norway) */}
          <article className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-6">
            <h2 className="text-xl font-semibold">Bank transfer (Norway)</h2>
            <p className="mt-2 text-gray-700 dark:text-gray-300">Konto</p>
            <p className="font-mono text-2xl flex items-center gap-2">
              15060727772
              <CopyChip value="15060727772" />
            </p>
          </article>

          {/* International contributions */}
          <article className="rounded-lg border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 shadow-sm p-6">
            <h2 className="text-xl font-semibold">International contributions</h2>
            <dl className="mt-2 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-gray-700 dark:text-gray-300">
              <div>
                <dt className="text-sm">Account Name</dt>
                <dd className="font-medium">NA Outdoor</dd>
              </div>
              <div>
                <dt className="text-sm">DNB SWIFT</dt>
                <dd className="font-mono flex items-center gap-2">
                  <span>DNBANOKKXXX</span>
                  <CopyChip value="DNBANOKKXXX" />
                </dd>
              </div>
              <div className="sm:col-span-2">
                <dt className="text-sm">IBAN</dt>
                <dd className="font-mono flex items-center gap-2">
                  <span>NO5215060727772</span>
                  <CopyChip value="NO5215060727772" />
                </dd>
              </div>
            </dl>
            <div className="mt-4 text-sm text-gray-700 dark:text-gray-300">
              <p>Anonyme Narkomane</p>
              <p>Område Øst</p>
              <p>Service Komite</p>
              <p>Hummeldalsvegen 1</p>
              <p>2406 Elverum</p>
            </div>
          </article>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400"></footer>
      </section>
    </div>
  );
}

function CopyChip({ value }: { value: string }) {
  const [copied, setCopied] = useState(false);
  async function onCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // ignore
    }
  }
  return (
    <button
      type="button"
      onClick={onCopy}
      aria-label={`Copy ${value}`}
      className={`px-2 py-0.5 text-xs rounded border ${
        copied ? "bg-green-600 text-white border-green-600" : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border-gray-300 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700"
      }`}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}


