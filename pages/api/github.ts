import type { NextApiRequest, NextApiResponse } from 'next'

import fetch from 'node-fetch'

const GITHUB_TOKEN = process.env.GITHUB_TOKEN

const query = `
  query($username:String!) {
    user(login: $username){
      contributionsCollection {
        contributionCalendar {
          totalContributions
          weeks {
            contributionDays {
              contributionCount
              date
            }
          }
        }
      }
    }
  }
`

async function retrieveContributionData(username: string | string[]) {
  const variables = `
    {
      "username": "${username}"
    }
  `
  const body = {
    query,
    variables,
  }
  const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
    },
    body: JSON.stringify(body),
  })

  return res.json()
}

async function fetchGithubContribution(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { username } = req.query

  const contributionData = await retrieveContributionData(username)

  res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate')

  return res.json(contributionData)
}

export default fetchGithubContribution
