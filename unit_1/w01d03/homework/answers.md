What command do you use to setup a git repository inside of your folder?
git init

What command do you use to ask git to start tracking a file?
git add

What command do you use to ask git to move your file from the staging area to the repository?
git commit, but it's recommended to use git commit -m "To insert a message of what you updated"

What command do you use to get updates from the class repository?
git pull

What command do you use to push your work to your fork of the class repository?
git push

What command do you use to unstage a file?
git reset <file name>

What command do you use to change your files back to how they were after a commit?
git revert <commit-level>

Why is it important to use -- when changing files back to a previous state?
it copys the previous commit version and adds it to the head, so you don't delete the new commit, but you skip over it in case you want to go back to it.

Why might you want to reset your files back to a previous commit?
in case you created some errors you can roll back to a working version.
