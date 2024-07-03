# Quizzie
## Collaborating with Your Friend
### Add Your Friend as a Collaborator:
1. Go to your repository on GitHub.
2. Click on "Settings" > "Collaborators & teams" > "Invite a collaborator".
3. Enter your friend's GitHub username and invite them.

### Clone the Repository:
Your friend needs to clone the repository to their local machine:
    ```sh
    git clone https://github.com/Soulistic/Quizzie.git
    ```
### Workflow for Collaboration:

Pull Changes: Before starting any new work, always pull the latest changes from the remote repository.

```sh
    git pull origin main
```

### Create a New Branch
It’s a good practice to create a new branch for each feature or bug fix.
```sh
    git checkout -b new-feature-branch
```
### Add and Commit Changes:
```sh
    git add .
    git commit -m "Add new feature"
```

### Push Changes to Remote Repository:
```sh
    git push origin new-feature-branch
```