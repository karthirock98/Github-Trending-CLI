import { Command } from "commander";
import axios from "axios";

// this is like a box will have the commnda what user gives like --duration, --limit from cmdline
const runner = new Command();

const DURATIONS: any = {
  day: 1,
  week: 7,
  month: 30,
  year: 365,
};

// this function will return the date before the given days in ISO format
function getDateBefore(days: number) {
  const d = new Date();
  d.setDate(d.getDate() - days);
  return d.toISOString().split("T")[0];
}

// this function will print the repos in a good format in terminal
function printRepos(repos: any) {
  repos.forEach((repo: any, i: number) => {
    console.log(`
${i + 1}. ${repo.full_name}
⭐ Stars     : ${repo.stargazers_count}
🧠 Language  : ${repo.language ?? "N/A"}
📝 Desc      : ${repo.description ?? "-"}
🔗 URL       : ${repo.html_url}
`);
  });
}
// this function will fetch the trending repos based on the duration and limit given by user
async function getTrendingRepos({ duration, limit }: any) {
  try {
    if (duration && limit) {
      const date = getDateBefore(DURATIONS[duration]);
      const query = `created:>${date}`;
      const url = `https://api.github.com/search/repositories?q=${query}&sort=stars&order=desc&per_page=${limit}`;

      const apires = await axios.get(url);
      return apires?.data;
    }
  } catch (error) {}
}

// this is the main function which will run when user runs the command in terminal
runner
  .name("Get Trending Repositories...")
  .description(
    "Here you can mention duration and limit to fetch the trending repos",
  )
  .option("-d --duration <type>", "day | week | month | year", "week")
  .option("-l --limit <number>", "How Many Repos you want?", "10")
  .action(async (options) => {
    const reposRes = await getTrendingRepos({
      duration: options.duration,
      limit: Number(options.limit),
    });

    // console.log(reposRes);
    printRepos(reposRes?.items ?? []);
  });

runner.parse(process.argv);
