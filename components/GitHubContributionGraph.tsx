import Section from './Section'
import StyledLayout from './StyledLayout'

function GitHubContributionChartContainer() {
  return (
    <StyledLayout layoutType="flex">
      We are going to render contributions here
    </StyledLayout>
  )
}

function GitHubContributionChart() {
  return (
    <Section title="Contributions this past year">
      <GitHubContributionChartContainer />
    </Section>
  )
}

export default GitHubContributionChart
