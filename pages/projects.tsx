import PageContainer from '../components/PageContainer'
import GitHubRepoContainer from '../containers/GitHubRepoContainer'
import GitHubContributionChart from '../components/GitHubContributionGraph'

function Projects() {
  return (
    <PageContainer>
      <GitHubRepoContainer />
      <GitHubContributionChart />
    </PageContainer>
  )
}

export default Projects
