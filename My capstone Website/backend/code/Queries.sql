-- Use your database
USE elemental;

-- View all registered users
SELECT full_name AS "Full Name", email AS "Email", occupation AS "Occupation"
FROM user;

-- View login records (most recent first)
SELECT * FROM login_users ORDER BY login_time DESC;

-- View contact messages
SELECT name AS "Name", email AS "Email", subject AS "Subject", message AS "Message",
submitted_at AS "Submitted At" FROM contact_messages ORDER BY submitted_at DESC;

-- View submitted questions
SELECT user_email AS "Email", subject AS "Subject", question AS "Question",
asked_at AS "Asked At" FROM questions ORDER BY asked_at DESC;





