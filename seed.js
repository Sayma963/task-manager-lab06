const db = require('./config/db');

const sampleTasks = [
    ['Learn Node.js', 'Study the basics of Node.js and its runtime environment.', 'pending'],
    ['Master Express.js', 'Build RESTful APIs using Express framework.', 'pending'],
    ['Understand MySQL', 'Learn about relational databases and SQL queries.', 'pending'],
    ['Practice Async/Await', 'Write asynchronous code using promises and async/await.', 'completed'],
    ['Explore Middleware', 'Understand how middleware works in Express.', 'pending'],
    ['Implement Authentication', 'Secure the API using JWT or sessions.', 'pending'],
    ['Setup Database', 'Install and configure MySQL database.', 'completed'],
    ['Create Routes', 'Define API endpoints for tasks.', 'completed'],
    ['Handle Errors', 'Implement global error handling middleware.', 'pending'],
    ['Test API', 'Use Postman or Curl to test API endpoints.', 'pending'],
    ['Refactor Code', 'Clean up and organize code into modules.', 'pending'],
    ['Learn Git', 'Version control using Git and GitHub.', 'completed'],
    ['Deploy Application', 'Deploy the Node.js app to a cloud provider.', 'pending'],
    ['Read Documentation', 'Read official documentation for libraries used.', 'pending'],
    ['Build Frontend', 'Create a simple frontend to consume the API.', 'pending']
];

async function seed() {
    try {
        // Check if tasks already exist
        const [rows] = await db.query('SELECT COUNT(*) as count FROM tasks');
        const count = rows[0].count;

        if (count > 0) {
            console.log('Database already contains tasks. Seeding skipped.');
            process.exit(0);
        }

        // Insert sample tasks
        const sql = 'INSERT INTO tasks (title, description, status) VALUES ?';
        await db.query(sql, [sampleTasks]);

        console.log('Successfully seeded 15 sample tasks.');
        process.exit(0);
    } catch (err) {
        console.error('Seeding failed:', err);
        process.exit(1);
    }
}

seed();
