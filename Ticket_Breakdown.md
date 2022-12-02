# Ticket Breakdown
We are a staffing company whose primary purpose is to book Agents at Shifts posted by Facilities on our platform. We're working on a new feature which will generate reports for our client Facilities containing info on how many hours each Agent worked in a given quarter by summing up every Shift they worked. Currently, this is how the process works:

- Data is saved in the database in the Facilities, Agents, and Shifts tables
- A function `getShiftsByFacility` is called with the Facility's id, returning all Shifts worked that quarter, including some metadata about the Agent assigned to each
- A function `generateReport` is then called with the list of Shifts. It converts them into a PDF which can be submitted by the Facility for compliance.

## You've been asked to work on a ticket. It reads:

**Currently, the id of each Agent on the reports we generate is their internal database id. We'd like to add the ability for Facilities to save their own custom ids for each Agent they work with and use that id when generating reports for them.**


Based on the information given, break this ticket down into 2-5 individual tickets to perform. Provide as much detail for each ticket as you can, including acceptance criteria, time/effort estimates, and implementation details. Feel free to make informed guesses about any unknown details - you can't guess "wrong".


You will be graded on the level of detail in each ticket, the clarity of the execution plan within and between tickets, and the intelligibility of your language. You don't need to be a native English speaker, but please proof-read your work.

## Your Breakdown Here

Ticket 1: -
- Create a new table `customID` in table `Agents` as a foreign key to fetch the agent by the custom ID given by the Facilities. Populate the column with currently known custom IDs for agents. 
- Acceptance criteria: A `SELECT` query on the `Agents` table shows the first 50 columns with the newly added column `customID` with values for the custom IDs given to agents by facilities they work with.
- Story points (assuming Scrum is used): 3 story points

Ticket 2: -
- Modify the function `getShiftsByFacility` to refer to the new column `customID` instead of the column `id` from the `Agents` table (assuming the column name that the function `getShiftsByFacility` uses for internal database ID is `id`).
- Acceptance criteria: 
    (1) The `getShiftsByFacility` function outputs the `customID` column instead of `id`. 
    (2) The `generateReport` function fetches results according to the custom ID allotted by the Facilities and not the IDs per internal database.
- Story points (assuming Scrum is used): 5 story points
