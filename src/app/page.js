"use client";

import React from "react";

export default function Home() {
    // URL del informe de Power BI
    return (
        <div className="w-screen h-screen flex flex-col">
            <h1 className="text-xl font-bold p-4 bg-black-100">
                Visualización del Reporte de Power BI
            </h1>
            <div className="flex-grow">
              Texto de prueba
                {/* <iframe
                    src={powerBIUrl}
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    allowFullScreen
                    title="Reporte Power BI"
                    className="w-full h-full"
                ></iframe> */}
            </div>
        </div>
    );
}

