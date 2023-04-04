import React from "react";
import Router from "next/router";
import { MaynLayout } from '@/components/MainLayout';

type myArray = 
  {data: {
    title: string;
  }}

export default function About(about: myArray) {
  const ClickHandler = () => {
    Router.push('/');
  }

  return (
    <MaynLayout>
      <h1>{about.data.title}</h1>
      <button onClick={ClickHandler}>Go back to home</button>
    </MaynLayout>
  )
}

About.getInitialProps = async () => {
  const response = await fetch(`${process.env.API_URL}/about`);
  const data = await response.json();
  return {data};
}