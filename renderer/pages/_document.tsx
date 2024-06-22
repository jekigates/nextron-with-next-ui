import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body className="min-h-screen bg-background font-sans antialiased">
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
