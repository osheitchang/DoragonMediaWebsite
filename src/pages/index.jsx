import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
import { Testimonials } from '@/components/Testimonials'
import { Form }  from '@/components/Form';

export default function Home() {
  return (
    <>
      <Head>
        <title>Doragon Media - Digital Marketing that drives results</title>
        <meta
          name="description"
          content="Transforming your digital vision into reality - Doragon Media, your custom software solutions partner."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <CallToAction />
        <Testimonials />
        <Pricing />
        <Faqs />
        <Form />
      </main>
      <Footer />
    </>
  )
}
