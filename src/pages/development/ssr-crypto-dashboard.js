import React from 'react'
import { Line } from 'react-chartjs-2'

import { Layout, Seo } from '../../components/components'

const SsrCryptoDashboard = ({ serverData }) => {
  console.log(serverData.message)

  return (
    <Layout>
      <Seo
        title="Server-Side Rendered Crpyocurrency Dashboard - Andrew Kepson"
        description="View an example page using server-side rendering (SSR) with Gatsby.js to build a cryptocurrency dashboard."
      />
      <h1>SSR Crypto Dashboard</h1>
    </Layout>
  )
}

// const BtcLineChart = ({ data }) => {
//     const options = {
//         responsive: true,
//         plugins: {
//             title: {
//                 display: true,
//                 text: data.name
//             }
//         }
//     }

//     const labels = []

//     const data = {
//         labels,
//         datasets: []
//     }

//     return <Line options={options} data={data} />
// }

export default SsrCryptoDashboard

export async function getServerData() {
  try {
    const res = await fetch(
      `https://api.coingecko.com/api/v3/coins/bitcoin/history`
    )

    if (!res.ok) {
      throw new Error(`Response failed`)
    }

    return {
      props: await res.json(),
    }
  } catch (e) {
    return {
      status: 500,
      headers: {},
      props: {},
    }
  }
}
