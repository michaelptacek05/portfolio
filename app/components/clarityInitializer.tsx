"use client";

import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";

const CLARITY_ID = "uw8agem8wi";

export default function ClarityInitializer() {
    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");

        if (consent === "true") {
            clarity.init(CLARITY_ID);
        }
    }, []);

    return null;
}