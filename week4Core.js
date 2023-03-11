<><h1> Welcome to corejs week 4 session </h1><p>
    steps to push code from VS to github

    1.clone the repository from github 
      - Copy the URL link from github
      - Under explorer select clone repository and paste the URL press enter
      - Select the location where the code needs to be stored
      - Select open or open in new window from the next popup
    2.make changes in local
      - changes in local
    3.add the required changed files to be moved to github
      - git add . command to add all the changed files
      - git add fileName for specific files to be added
    4.commit those changed files
      - git commit -m "Any message related to the commit"
    5.push the commited changes
      - git push (moves the changes to github)
</p>

<h1>Main branch will be called as master branch - used by people actively(this is in production) </h1>


<h1>two or more developers works together using github</h1>

--1st developer (has to update the styling)
   -- Create a branch from the main branch
   -- branch1
   -- Making changes
   -- Pull request (one of the delevoper from the team has to review it)
   review comments to update (branch1 cannot be merged because of conflict behind main branch)
   -- pull from the main branch
   -- he will have main branch + new main branch changes(branch2) + branch1 changes


--2nd developer (has to update a button functionality with styling)
  -- Create a branch from the main branch
  -- branch2
  -- makes changes
  -- Pull request (one of the delevoper from the team has to review it)
review approved
  -- he will move it to the main branch
  main branch = main branch + branch2 changes
</>