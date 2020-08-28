import React, { Component } from "react";

import Head from "next/head";
import dynamic from "next/dynamic";
import "../styles/layout.scss";

const Meta = dynamic(() => import("./Meta"));

export default function Layout({ preview, children }) {
    return (
        <>
            <Meta />
            <div className="page-wrapper">
                <main>{children}</main>
            </div>
        </>
    );
}
