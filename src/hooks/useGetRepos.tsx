import { useQuery } from "@tanstack/react-query";

async function getGitHubRepos() {
  try {
    const repsonse = await fetch(
      "https://api.github.com/users/MateusGustavo22/repos"
    );
    const data = await repsonse.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}

export function useGetRepos() {
  return useQuery({ queryKey: ["getRepos"], queryFn: getGitHubRepos });
}
