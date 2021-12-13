import GitHubRepoContainer from '@containers/GitHubRepoContainer'

import GitHubContributionChart from '@components/GitHubContributionGraph'
import Meta from '@components/Meta'
import PageContainer from '@components/PageContainer'

function Projects() {
  return (
    <>
      <Meta title="Projects" description="Here are my active GitHub projects" />
      <PageContainer>
        <GitHubRepoContainer />
        <GitHubContributionChart />
      </PageContainer>
    </>
  )
}

export default Projects
