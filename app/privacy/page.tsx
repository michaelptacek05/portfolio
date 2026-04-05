import { Reveal } from "../components/reveal";

export default function PrivacyPage() {
    return (
        <Reveal width="100%" delay={0.2}>
            <main className="min-h-screen text-white pt-32 pb-24 px-6">
                <div className="max-w-3xl mx-auto space-y-8">
                    <h1 className="text-4xl font-bold font-serif mb-8">
                        Zásady ochrany osobních údajů
                    </h1>

                    <section className="space-y-4 text-gray-300">
                        <p>
                            Vážím si vašeho soukromí. Na tomto webu
                            (michaelptacek.com) shromažďuji pouze nezbytná data,
                            která mi pomáhají vylepšovat mé portfolio a služby.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">
                            1. Kdo je správcem dat?
                        </h2>
                        <p className="text-gray-300">
                            Správcem osobních údajů je{" "}
                            <strong>Michael Ptáček</strong> (fyzická osoba).
                            <br />
                            Pokud máte jakýkoliv dotaz ohledně soukromí, můžete
                            mě kontaktovat na e-mailu uvedeném níže.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">
                            2. Jaká data sbírám a proč?
                        </h2>
                        <div className="text-gray-300 space-y-4">

                            <div>
                                <h3 className="text-white font-medium mb-1">
                                    A. Analýza chování (Microsoft Clarity)
                                </h3>
                                <p>
                                    S vaším souhlasem používám nástroj Microsoft
                                    Clarity, abych viděl, jak lidé web používají
                                    (teplotní mapy, nahrávky průchodu webem).
                                    Tento nástroj používá{" "}
                                    <strong>cookies</strong>.
                                    <br />
                                    Tato data sbírám pouze, pokud jste klikli na
                                    tlačítko "V pořádku" v dolní liště. Svůj
                                    souhlas můžete kdykoliv odvolat smazáním
                                    cookies ve svém prohlížeči.
                                </p>
                            </div>
                        </div>

                        <div>
                            <h3 className="text-white font-medium mb-1">
                                B. Ochrana před spamem (Google reCAPTCHA)
                            </h3>
                            <p>
                                K ochraně kontaktního formuláře před roboty
                                (spamem) používám službu Google reCAPTCHA v3.
                                Tato služba zkoumá chování návštěvníka na webu
                                (např. pohyby myši), aby ověřila, že jde o
                                skutečného člověka. Používání této služby se
                                řídí{" "}
                                <a
                                    href="https://policies.google.com/privacy"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="underline hover:text-white"
                                >
                                    Zásadami ochrany soukromí
                                </a>{" "}
                                a{" "}
                                <a
                                    href="https://policies.google.com/terms"
                                    target="_blank"
                                    rel="noreferrer"
                                    className="undnerline hover:text-white"
                                >
                                    Smluvními podmínkami
                                </a>{" "}
                                společnosti Google.
                            </p>
                        </div>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">
                            3. Vaše práva
                        </h2>
                        <p className="text-gray-300">
                            Podle nařízení GDPR máte právo na přístup ke svým
                            údajům, právo na jejich opravu, výmaz ("právo být
                            zapomenut") nebo omezení zpracování.
                        </p>
                    </section>

                    <section className="space-y-4">
                        <h2 className="text-2xl font-semibold text-white">
                            4. Zabezpečení dat
                        </h2>
                        <p className="text-gray-300">
                            Vaše data jsou u mě v bezpečí. Osobní údaje (např.
                            e-mail, pokud mi napíšete) nikomu{" "}
                            <strong>neprodávám ani nepředávám</strong> třetím
                            stranám pro marketingové účely.
                            <br />
                            <br />
                            Veškerá data jsou zpracovávána pomocí ověřených
                            služeb (Vercel, Microsoft, Google), které splňují
                            přísné bezpečnostní standardy a šifrování. Přístup k
                            nim mám pouze já a jsou chráněna silnými hesly a
                            dvoufázovým ověřením.
                        </p>
                    </section>

                    <section className="space-y-4 pt-8 border-t border-white/10">
                        <h2 className="text-xl font-semibold text-white">
                            Kontakt
                        </h2>
                        <p className="text-gray-300">
                            V případě dotazů mi napište na: <br />
                            <a
                                href="mailto:mptacek005@gmail.com"
                                className="text-white hover:underline"
                            >
                                mptacek005@gmail.com
                            </a>
                        </p>
                    </section>
                </div>
            </main>
        </Reveal>
    );
}
