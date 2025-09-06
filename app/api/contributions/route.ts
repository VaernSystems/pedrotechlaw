import { collectBitbucketContributions } from '@/data/contributions/bitbucket';
import { collectGithubContributions } from '@/data/contributions/github';
import { collectGitlabContributions } from '@/data/contributions/gitlab';

export const GET = async (req: Request) => {
  const github_contributions = await collectGithubContributions();
  return Response.json(
    {
      github_contributions,
      gitlab_contributions,
     
    },
    { status: 200 }
  );
};
