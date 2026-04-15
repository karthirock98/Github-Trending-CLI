# GitHub Trending CLI

A simple CLI tool to fetch and display trending GitHub repositories based on star counts over a specific duration.

## Features

- Fetch top repositories created within a specific timeframe (**day**, **week**, **month**, **year**).
- Custom limit for the number of repositories displayed.
- Shows repository name, stars, primary language, description, and URL.

## Installation

1. Navigate to the project directory:
   ```bash
   cd github-trending-cli
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. (Optional) Link the command globally:
   ```bash
   npm link
   ```

## Usage

If linked globally:

```bash
trending-repo [options]
```

Or using `node`:

```bash
node index.js [options]
```

### Options

| Flag | Long Flag    | Description                               | Default |
| ---- | ------------ | ----------------------------------------- | ------- |
| `-d` | `--duration` | Timeframe: `day`, `week`, `month`, `year` | `week`  |
| `-l` | `--limit`    | Number of repositories to fetch           | `10`    |

### Examples

**Fetch today's top 5 repositories:**

```bash
trending-repo -d day -l 5
```

**Fetch top 20 repositories from the past month:**

```bash
trending-repo --duration month --limit 20
```

## Tech Stack

- **Node.js**: Runtime environment.
- **Commander**: For parsing command-line arguments.
- **Fetch API**: To interact with the GitHub Search API.