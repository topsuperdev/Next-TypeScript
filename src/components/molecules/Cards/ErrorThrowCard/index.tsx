import { useRouter } from 'next/router';
import React from 'react';
import { Button } from 'src/components/atoms/Button';

function ErrorThrowCard() {
  const router = useRouter();
  const navigateToHomePage = () => {
    router.reload();
  }
  return (
    <section className=" lg:w-4/5 sm:w-11/12 xs:w-11/12 rounded-xl text-center p-4 shadow-md bg-app-background-light mx-auto mt-40">
      <div className=" font-bold text-8xl text-primary-dark">Oops!</div>
      <div className="text-2xl text-primary-dark mt-4">Something went wrong. Please check your internet connection.</div>
      <Button className="m-auto mt-4" onClick={navigateToHomePage}>Reload</Button>
    </section>
  )
}

export default ErrorThrowCard;
