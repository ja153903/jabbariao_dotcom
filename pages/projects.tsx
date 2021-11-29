import PageContainer from '../components/PageContainer'
import GitHubRepoContainer from '../containers/GitHubRepoContainer'
import GitHubContributionChart from '../components/GitHubContributionGraph'
import Meta from '../components/Meta'

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
