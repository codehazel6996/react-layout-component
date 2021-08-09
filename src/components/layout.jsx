import React from "react";

export default function Layout({ children }) {
    return (
        <>
            <div class="alert alert-primary" role="alert">
                Layout
            </div>
            {children}
        </>
    );
}
