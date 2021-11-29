import Head from 'next/head'

import { MetaProps } from '../@types'

function Meta({
  title = 'Jaime Abbariao',
  description = 'My personal website written with Next.js and TypeScript',
}: MetaProps) {
  return (
    <>
      <Head>
        <meta name="description" content={description} />
        <title>{title}</title>
      </Head>
    </>
  )
}

export default Meta
