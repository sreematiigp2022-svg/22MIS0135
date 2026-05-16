# Stage 6

## Priority Logic

Priority order:
1. Placement
2. Result
3. Event

Notifications are sorted using:
- Priority weight
- Latest timestamp

The system keeps only the top 10 notifications in memory using array sorting and slicing.

New notifications are dynamically inserted and re-sorted to maintain priority order efficiently.