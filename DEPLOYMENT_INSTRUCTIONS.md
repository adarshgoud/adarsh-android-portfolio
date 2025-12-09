# Deployment Instructions for GitHub Pages

## Prerequisites
1. You must have a GitHub account
2. You must have created a repository named `adarsh-android-portfolio` in your GitHub account

## Steps to Deploy

### 1. Set up the correct remote URL
Replace `YOUR_GITHUB_USERNAME` with your actual GitHub username and run:

```bash
git remote set-url origin https://github.com/YOUR_GITHUB_USERNAME/adarsh-android-portfolio.git
```

### 2. Push your code to GitHub
```bash
git push -u origin master
```

### 3. Deploy to GitHub Pages
```bash
npm run deploy
```

## Accessing Your Deployed Site
After deployment, your site will be available at:
`https://YOUR_GITHUB_USERNAME.github.io/adarsh-android-portfolio/`

## Troubleshooting
If you encounter any issues:
1. Make sure your repository name is exactly `adarsh-android-portfolio`
2. Ensure your repository is Public (not Private)
3. Verify that you've replaced `YOUR_GITHUB_USERNAME` with your actual GitHub username
4. Check that you have internet connectivity

## Updating Your Site
Whenever you make changes to your portfolio:
1. Commit your changes: `git add . && git commit -m "Update portfolio"`
2. Push to GitHub: `git push`
3. Deploy again: `npm run deploy`