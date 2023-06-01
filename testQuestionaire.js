/*
React Conference Admin Panel
You are creating an MVP of a conference admin panel.

This task uses React Hooks, React Router and React Testing Library ().

Introduction
Your task is to complete the simple conference admin panel application to enable the conference Committee Members to manage the  process:

make all tests pass by implementing missing features in the production code.
make the app work in a way described below. The majority of the code is committed but there are some missing pieces to implement.
you shall stick to the names of the props and components, so that tests don't break.
Problem Statement
You are expected to implement missing code used within two subpages:

: list of available talk proposals (). They can be accepted or rejected by the conference Committee. Clicking on a given proposal redirects to its details.
: displaying talk details (). Clicking the "back to Call for Papers" button redirects to the proposals list.
1. List of proposals
 should be rendered under  URL path and display list of proposals fetched from API (without any sorting nor paging applied).

For every proposal following data should be rendered:
talk title,
speaker's name,
talk category, prefixed with ,
status description: "rejected", "accepted", "to be decided" or "(unknown)" (for any unexpected status), prefixed with . You need to map existing statuses into these descriptions,
color bar and label indicating whether the proposal was accepted (green), declined (red), or not decided yet (neutral),
button to accept proposal (if not accepted),
button to reject proposal (if not rejected).
The Fake API will preserve changed status of the proposal as long as a user doesn't refresh a page in a browser (navigate inside the app instead).

CSS class of the listed proposal has to match its status.

Every proposal should be clickable and should navigate on click to its .

Clicking on the accept or reject buttons should send an API request to change the proposal status to  or  respectively. Proposal status on the list should be updated accordingly.

The accept button should have a class name similar to that of reject button (already present in the code).

 should be rendered during data fetch.

Note that you cannot obtain a full set of required data from just one API endpoint – you cannot change the fact that proposals' data is a subset of  endpoint's response while their statuses come from  endpoint.

2. Proposal details
 should be rendered under  URL path (where  is ID of such proposal) and display details fetched from API.

Details to render are:

speaker's name,
talk category,
talk title,
talk description – split into separate  for each paragraph (on  character),
button which navigates back to .*/