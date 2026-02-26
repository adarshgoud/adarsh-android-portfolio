# Deployment Steps for GitHub Pages

## Prerequisites
- You must have access to the GitHub repository `adarshgoud/adarsh-android-portfolio`
- You must be logged into your GitHub account (associated with adarsh.goud@outlook.com)

## Automated Deployment via GitHub Actions (Recommended)

Your project is already configured with GitHub Actions for automatic deployment. Follow these steps:

1. **Commit your latest changes:**
   ```bash
   git add .
   git commit -m "Deploy latest changes"
   git push origin master
   ```

2. **Monitor the GitHub Actions workflow:**
   - Go to your repository on GitHub: https://github.com/adarshgoud/adarsh-android-portfolio
   - Click on the "Actions" tab
   - You should see a workflow running titled "Deploy to GitHub Pages"
   - Wait for it to complete successfully (this may take a few minutes)

3. **Access your deployed site:**
   - After successful deployment, your site will be available at:
   - `https://adarshgoud.github.io/adarsh-android-portfolio/`

## Manual Deployment (Alternative)

If the GitHub Actions approach doesn't work, you can deploy manually:

1. **Build your project:**
   ```bash
   npm run build
   ```

2. **Ensure your `dist` folder contains the built files**

3. **Deploy using gh-pages:**
   ```bash
   npm run deploy
   ```

## Troubleshooting

If you continue to have issues with git push or deployment:

1. **Check repository access:**
   - Ensure you have write access to the repository
   - Verify the repository name is exactly `adarshgoud/adarsh-android-portfolio`

2. **Verify Personal Access Token:**
   - Make sure your PAT has the required scopes: `repo`, `workflow`, and `gh-pages`
   - Regenerate the token if it has expired

3. **Try SSH authentication:**
   - Generate an SSH key and add it to your GitHub account
   - Change the remote URL to use SSH:
   ```bash
   git remote set-url origin git@github.com:adarshgoud/adarsh-android-portfolio.git
   ```

## Your Built Files
Your project has been successfully built. The `dist` folder contains all the necessary files for deployment:
- HTML files
- Assets (CSS, JS, images)
- Screenshots (copied from public/screenshots/)
- GIFs (copied from public/gifs/)

These files are ready for deployment to GitHub Pages.