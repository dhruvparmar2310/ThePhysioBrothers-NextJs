import React, { useEffect } from "react";
import Header from "@/shared/components/Header";
import "@/styles/globals.css";
import { useRouter } from 'next/router'

export default function App({ Component, pageProps }) {
  const router = useRouter()
  useEffect(() => {
    require("bootstrap/scss/bootstrap.scss");
  }, [])

  return (
    <>
      <Header />
      <Component {...pageProps} />;
    </>
  )
}
