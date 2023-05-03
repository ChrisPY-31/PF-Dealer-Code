"use client";
import { store } from "@/store";
import "./globals.css";
import { Inter } from "next/font/google";
import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <html lang="en">
          <body
            className={inter.className}
            style={{ backgroundColor: "#053545", color: "white" }}
          >
            {children}
          </body>
        </html>
      </BrowserRouter>
    </Provider>
  );
}
